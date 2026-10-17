# Security model

dsh-genui renders interfaces a language model writes, inside the page that also
holds your DSH session. That makes the trust boundary worth stating precisely —
and worth measuring rather than asserting. Everything below was measured in
jsdom against the built bundle, or is labelled as reasoning.

## What the model cannot do

- **Name an arbitrary component.** Rendering goes through the OpenTiny material
  set. The renderer does fall back to creating a raw HTML tag when a
  `componentName` misses the materials (`isHTMLTag`), so the policy refuses the
  tags that can load or run code — `script`, `iframe`, `frame`, `frameset`,
  `object`, `embed`, `applet`, `base`, `link`, `meta`, `template` — and refuses
  `javascript:`, `vbscript:` and `data:text/html` URLs in the attributes a browser
  acts on (`href`, `src`, `srcdoc`, `action`, `formaction`, `poster`, `data`), refuses
  props that hand the renderer a finished HTML string (`innerHTML`, `outerHTML` — a
  `<script>` hidden inside one is invisible to a schema-level walk; measured reaching
  the DOM before this rule), and refuses event-handler attributes (`onerror`,
  `onclick`, … by name — a pattern would also eat card keys such as `once`).
  `ping` is deliberately outside this list: it beacons on click but carries no code.
  Benign tags the SDK's own examples use — `div`, `span`, headings, tables,
  `img` — still render. Pinned by `tests/card-render-policy.spec.ts`.

  Measured before that policy existed, against the upstream v0.3.1 bundle: a
  schema with `componentName: "script"` produced two real `<script>` elements
  (one with a remote `src`, one inline), an `<iframe srcdoc>`, and an
  `<a href="javascript:…">`. jsdom does not run scripts, so *execution* is
  reasoned: a browser inserts those nodes through the DOM API, and an inline or
  remote script element created that way runs.

## What the model can do

- **Write JavaScript that is executed.** `JSExpression` / `JSFunction` values
  are compiled by the renderer through the `customSettings.Function` seam
  (`new Function` over a `with` scope). This is how forms, calculators and
  interactive cards work at all — there is no version of this plugin without it.
- **Reach the page while the card is still rendering.** Measured in jsdom on the
  built bundle, no click, with a positive control:

  | schema position | runs during mount? |
  |---|---|
  | `lifeCycles.onMounted` | **no** with this plugin (yes upstream, yes unpatched) |
  | `props.*` expression | yes |
  | `state.*` / `methods.*` / `refs.*` expression | yes |
  | `condition` / `loop` expression | yes |
  | `JSFunction` values | yes (evaluated at render) |
  | `JSResource` literals | reasoned: same compiler, not measured separately |

- **Style the page.** A top-level `css` string is injected into
  `document.head`. That is model-controlled CSS: enough for UI redressing, and
  for requests to an attacker's host via `url()`.
- **Act through the card's own buttons.** An action such as `continueChat`
  writes a message into the composer and submits it.

## What the plugin blocks

- **Render-time hooks.** `lifeCycles` (`onMounted`, `onUnmounted`) is removed
  before rendering, because the renderer awaits `onMounted` itself while
  mounting. Removal is counted and logged once per card (pinned by a console-warn spy).
- **Executable HTML and script URLs** — the list above.
- **Cross-site writes and reads on the toggle endpoint.** `/api/dsh-genui/prompt`
  refuses a foreign `Origin`, an opaque `null` origin, and any browser label
  other than `same-origin` / `none` (`src/prompt-control.ts`). That last rule is
  measured: the label alone let a rebinding page through, so the check also refuses any
  non-loopback `Host` authority (the endpoint is only ever served on loopback).
  so comparing Origin against Host is not enough on its own. This layer stops
  other web pages; it is not a defence against a local process, which can call
  the endpoint with no browser headers and with your own authority.

## What is still open

The policy above narrows the two paths that need no interaction. It does **not**
make a card inert: every expression position in the table still executes while
the card renders, through the same `Function` compiler. Closing that needs a
decision this plugin cannot make on its own:

- allowlist expression shapes (keeps `this.state.*` bindings, rejects calls),
- or render cards in a sandboxed `iframe` and talk to it over `postMessage`
  (keeps expressions working, gives them no reach into the session page).

Until then: **a card is code the model wrote.** Anything that can steer model
output can influence what a card contains — a page the agent read, a file it
opened, a tool result, text you pasted. Read a card the way you read the model's
message, and treat clicking as consent.

## Verify it yourself

```sh
pnpm test    # includes the pinning test: mounts the built bundle in jsdom,
             # asserts a plain card renders, that onMounted never runs, and that
             # no <script>/<iframe>/javascript: URL survives in the DOM
```

## Reporting

Open an issue at <https://github.com/lhuans/dsh-genui/issues> with the schema
that reproduces the behavior and the DSH version you saw it on. Please avoid
pasting real session data.
