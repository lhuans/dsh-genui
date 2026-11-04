window.__ModuleLoader__.load({
	id: "dsh-genui",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		_deepseek_ai_dsh_client_ui_primitives = __toESM(_deepseek_ai_dsh_client_ui_primitives, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		let react_dom = require("react-dom");
		//#region src/client/assistant-props.ts
		/**
		* Whether this block belongs on the current assistant-step mount.
		* DSH paints the same step once per group part (`reasoning` and `response`).
		* Hosts that still mount the step a single time omit `groupPart`; those
		* mounts keep every block.
		* @param kind - assistant block kind.
		* @param groupPart - chat group this mount is painting, when the host splits one.
		* @returns true when the block should be painted in this mount.
		*/
		function blockBelongsToGroupPart(kind, groupPart) {
			if (groupPart === "reasoning") return kind === "reasoning";
			if (groupPart === "response") return kind !== "reasoning";
			return true;
		}
		//#endregion
		//#region src/client/reasoning-body.ts
		/**
		* Keep the official reasoning-body slot reachable after GenUI shadows
		* assistant-step. Chat declares `conversation.chat.reasoning.body` on its own
		* entry; a second declaration throws, and renderSlot only authorizes keys
		* listed on the calling entry. The built-in assistant view still paints
		* thinking, but it runs under our shadow entry, so that entry must list the
		* slot or the official `renderSlot` call throws. Borrowing the spec does not
		* claim the declaration. Release drops that table before our registration
		* disposes, so unload does not collapse the slot Chat still owns.
		*/
		/** Slot the official cot-translation plugin replaces. */
		const REASONING_BODY_SLOT = "conversation.chat.reasoning.body";
		/** Marker so release only clears a table this module attached. */
		const BORROWED = Symbol("dsh-genui.borrowed-reasoning-body");
		/**
		* Point this shadow entry at the already-declared reasoning body slot.
		* No-op when the entry already declared children of its own.
		* @param entry - GenUI's assistant-step registration.
		*/
		function borrowReasoningBody(entry) {
			if (entry.children !== void 0) return;
			const children = { [REASONING_BODY_SLOT]: {
				kind: "single",
				scope: "session"
			} };
			Object.defineProperty(children, BORROWED, { value: true });
			entry.children = children;
		}
		/**
		* Drop a borrowed children table so disposing the shadow entry does not
		* collapse the slot the built-in assistant renderer declared.
		* @param entry - GenUI's assistant-step registration.
		*/
		function releaseBorrowedReasoningBody(entry) {
			const children = entry.children;
			if (children !== void 0 && BORROWED in children) entry.children = void 0;
		}
		//#endregion
		//#region src/client/builtin-assistant.ts
		/**
		* The built-in assistant-step entry, captured so a reasoning mount can render
		* that component instead of a GenUI thinking row. Reply bubbles stay on the
		* GenUI view. Chat paints both halves through one slot key, so the shadow
		* winner has to hand the reasoning half back.
		*/
		let builtin;
		const listeners = /* @__PURE__ */ new Set();
		function publish(next) {
			if (builtin?.component === next?.component && builtin?.inject === next?.inject) return;
			builtin = next;
			for (const listener of listeners) listener();
		}
		/**
		* Remember the built-in assistant-step component, preferring the entry that
		* declared the reasoning body slot.
		* @param entries - current `conversation.chat.node` registrations.
		* @param ownComponent - GenUI's component, which must not be selected.
		*/
		function captureBuiltinAssistant(entries, ownComponent) {
			const candidates = entries.filter((entry) => entry.options.key === "assistant-step" && entry.component !== ownComponent && isRenderableComponent(entry.component));
			const official = candidates.find((entry) => entry.children?.["conversation.chat.reasoning.body"] !== void 0) ?? candidates[0];
			if (official === void 0 || !isRenderableComponent(official.component)) return;
			publish({
				component: official.component,
				inject: official.inject
			});
		}
		/** Subscribe to the captured built-in assistant component. */
		function useBuiltinAssistant() {
			return (0, react.useSyncExternalStore)((listener) => {
				listeners.add(listener);
				return () => {
					listeners.delete(listener);
				};
			}, () => builtin, () => builtin);
		}
		/** True for a function component or a React.memo result. */
		function isRenderableComponent(value) {
			if (typeof value === "function") return true;
			if (typeof value !== "object" || value === null) return false;
			return typeof value.type === "function";
		}
		/**
		* Bind Chat's presentation snapshot the way the slot renderer binds an
		* entry inject hook. The built-in view calls this during its render.
		* @param presentation - live presentation policy source from the built-in inject.
		* @returns the `usePresentation` prop that view expects.
		*/
		function bindPresentation(presentation) {
			return function usePresentation(selector) {
				return selector((0, react.useSyncExternalStore)((listener) => presentation.subscribe(listener), () => presentation.getSnapshot(), () => presentation.getSnapshot()));
			};
		}
		//#endregion
		//#region src/client/genui-card-tag.ts
		/** Custom element tag for the Vue GenUI card (thin client + runtime share this string). */
		const DSH_GENUI_CARD_TAG = "dsh-genui-card";
		//#endregion
		//#region src/genui-runtime-url.ts
		/** Browser URL for the Vue/OpenTiny custom-element bundle (Node serves the same path). */
		const GENUI_RUNTIME_URL = "/dsh-genui/runtime.js";
		//#endregion
		//#region src/client/load-genui-runtime.ts
		let loading;
		function alreadyDefined() {
			return typeof customElements !== "undefined" && customElements.get("dsh-genui-card") !== void 0;
		}
		/**
		* Fetch and evaluate the Vue/OpenTiny custom-element bundle.
		* Concurrent callers share one in-flight request; a failed load can retry.
		*/
		function loadGenuiRuntime() {
			if (alreadyDefined()) return Promise.resolve();
			if (loading !== void 0) return loading;
			if (typeof document === "undefined") return Promise.reject(/* @__PURE__ */ new Error("dsh-genui: Vue runtime requires a document"));
			loading = new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.type = "module";
				script.src = GENUI_RUNTIME_URL;
				script.addEventListener("load", () => resolve(), { once: true });
				script.addEventListener("error", () => {
					loading = void 0;
					script.remove();
					reject(/* @__PURE__ */ new Error(`dsh-genui: failed to load ${GENUI_RUNTIME_URL}`));
				}, { once: true });
				document.head.appendChild(script);
			}).then(() => {
				if (!alreadyDefined()) {
					loading = void 0;
					throw new Error("dsh-genui: Vue runtime loaded but <dsh-genui-card> was not defined");
				}
			});
			return loading;
		}
		/** Kick off {@link loadGenuiRuntime} without blocking plugin registration. */
		function prefetchGenuiRuntime() {
			const start = () => {
				loadGenuiRuntime().catch(() => {});
			};
			if (typeof requestIdleCallback === "function") requestIdleCallback(start);
			else setTimeout(start, 0);
		}
		//#endregion
		//#region src/client/GenuiVueCard.tsx
		/**
		* React host for the Vue GenUI custom element. React 18 stringifies object
		* attributes, so schema/actions are assigned as element properties.
		* Vue/OpenTiny live in a split runtime loaded on first card.
		*/
		/** Mount one Vue GenUI card via `<dsh-genui-card>`. */
		const GenuiVueCard = (0, react.memo)(function GenuiVueCard({ content, generating, isJsonComplete, customActions, className }) {
			const ref = (0, react.useRef)(null);
			const [status, setStatus] = (0, react.useState)(() => typeof customElements !== "undefined" && customElements.get("dsh-genui-card") !== void 0 ? "ready" : "loading");
			(0, react.useEffect)(() => {
				if (status !== "loading") return;
				let cancelled = false;
				loadGenuiRuntime().then(() => {
					if (!cancelled) setStatus("ready");
				}, (err) => {
					console.error(err);
					if (!cancelled) setStatus("error");
				});
				return () => {
					cancelled = true;
				};
			}, [status]);
			(0, react.useLayoutEffect)(() => {
				if (status !== "ready") return;
				const el = ref.current;
				if (el === null) return;
				el.content = content;
				el.generating = generating;
				el.isJsonComplete = isJsonComplete;
				el.customActions = customActions;
			}, [
				status,
				content,
				generating,
				isJsonComplete,
				customActions
			]);
			if (status === "error") return (0, react.createElement)("div", {
				className,
				"data-dsh-genui-card-error": ""
			});
			if (status !== "ready") return (0, react.createElement)("div", {
				className,
				"data-dsh-genui-card-pending": "",
				"aria-busy": true
			});
			return (0, react.createElement)(DSH_GENUI_CARD_TAG, {
				ref,
				className,
				"data-dsh-genui-card": ""
			});
		});
		//#endregion
		//#region src/client/split-assistant-text.ts
		/**
		* Parse both backtick fences and XML-style tags so the plugin works whether
		* the model emits ```schemaJson … ``` (the GenUI-native syntax) or
		* <schemaJson> … </schemaJson> (the DSH boot-context syntax). Both formats
		* are common; accepting either prevents silent rendering failures.
		*
		* Examples of either format that genui recognizes:
		*
		*   ```schemaJson
		*   { "componentName": "Page" }
		*   ```
		*
		*   <schemaJson>
		*   { "componentName": "Page" }
		*   </schemaJson>
		*/
		const COMPLETE_FENCE = /```schemaJson\s*\r?\n?([\s\S]*?)```/g;
		const OPEN_FENCE = /```schemaJson\s*\r?\n?([\s\S]*)$/;
		const COMPLETE_TAG = /<schemaJson>\s*\r?\n?([\s\S]*?)<\/schemaJson>/g;
		const OPEN_TAG = /<schemaJson>\s*\r?\n?([\s\S]*)$/;
		/**
		* Split assistant text into markdown and schema-card segments.
		* @param text - full assistant text block (streaming or final).
		* @param streaming - whether the turn is still generating.
		* @param interrupted - whether generation was stopped after partial content.
		* @returns ordered segments for mixed markdown + GenUI rendering.
		*/
		function splitAssistantText(text, streaming, interrupted = false) {
			const live = streaming || interrupted;
			const segments = [];
			const matches = [];
			COMPLETE_FENCE.lastIndex = 0;
			for (const match of text.matchAll(COMPLETE_FENCE)) matches.push({
				index: match.index ?? 0,
				end: (match.index ?? 0) + match[0].length,
				text: match[1] ?? ""
			});
			COMPLETE_TAG.lastIndex = 0;
			for (const match of text.matchAll(COMPLETE_TAG)) matches.push({
				index: match.index ?? 0,
				end: (match.index ?? 0) + match[0].length,
				text: match[1] ?? ""
			});
			matches.sort((a, b) => a.index - b.index);
			const unique = [];
			let lastEnd = -1;
			for (const m of matches) if (m.index >= lastEnd) {
				unique.push(m);
				lastEnd = m.end;
			}
			let last = 0;
			let schemaBuffer = [];
			function flushSchemaBuffer() {
				if (schemaBuffer.length === 0) return;
				const merged = schemaBuffer.length === 1 ? schemaBuffer[0] : "[" + schemaBuffer.join(",") + "]";
				segments.push({
					kind: "schema",
					text: merged,
					complete: true
				});
				schemaBuffer = [];
			}
			for (const { index, end, text: content } of unique) {
				if (index > last) {
					flushSchemaBuffer();
					segments.push({
						kind: "markdown",
						text: text.slice(last, index)
					});
				}
				schemaBuffer.push(content);
				last = end;
			}
			flushSchemaBuffer();
			const rest = text.slice(last);
			if (rest.length === 0) return segments;
			if (live) {
				const open = OPEN_FENCE.exec(rest);
				if (open !== null && open.index !== void 0) {
					const before = rest.slice(0, open.index);
					if (before.length > 0) segments.push({
						kind: "markdown",
						text: before
					});
					segments.push({
						kind: "schema",
						text: open[1] ?? "",
						complete: false
					});
					return segments;
				}
				const openTag = OPEN_TAG.exec(rest);
				if (openTag !== null && openTag.index !== void 0) {
					const before = rest.slice(0, openTag.index);
					if (before.length > 0) segments.push({
						kind: "markdown",
						text: before
					});
					segments.push({
						kind: "schema",
						text: openTag[1] ?? "",
						complete: false
					});
					return segments;
				}
			}
			segments.push({
				kind: "markdown",
				text: rest
			});
			return segments;
		}
		//#endregion
		//#region \0dsh-css:module:src/client/genui-assistant.module.css.mjs
		const css$1 = ".vHCAGq_root{flex-direction:column;gap:.5rem;min-width:0;display:flex}.vHCAGq_body{flex-direction:column;gap:.75rem;min-width:0;display:flex}.vHCAGq_card{isolation:isolate;border-radius:8px;width:100%;max-width:100%;display:block;overflow:auto}.vHCAGq_card[data-dsh-genui-card-pending],.vHCAGq_card[data-dsh-genui-card-error]{min-height:4.5rem}.vHCAGq_think{opacity:.85;font-size:.9em}.vHCAGq_stopped{opacity:.7;font-style:italic}.vHCAGq_images{flex-wrap:wrap;gap:.5rem;display:flex}.vHCAGq_image{object-fit:contain;border-radius:6px;max-width:100%;max-height:240px}";
		const tagId$1 = "dsh-genui/src/client/genui-assistant.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-genui";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var genui_assistant_module_css_default = {
			"body": "vHCAGq_body",
			"card": "vHCAGq_card",
			"image": "vHCAGq_image",
			"images": "vHCAGq_images",
			"root": "vHCAGq_root",
			"stopped": "vHCAGq_stopped",
			"think": "vHCAGq_think"
		};
		//#endregion
		//#region src/client/GenuiTextBody.tsx
		/**
		* Mixed markdown + Vue GenUI card body for one assistant text block.
		*/
		/** Render markdown segments and schemaJson fences as GenUI cards. */
		const GenuiTextBody = (0, react.memo)(function GenuiTextBody({ text, streaming, interrupted, labels, mentions, customActions }) {
			const segments = (0, react.useMemo)(() => splitAssistantText(text, streaming, interrupted), [
				text,
				streaming,
				interrupted
			]);
			const nodes = [];
			for (let i = 0; i < segments.length; i++) {
				const segment = segments[i];
				if (segment === void 0) continue;
				if (segment.kind === "markdown") {
					if (segment.text.trim().length === 0) continue;
					nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
						text: segment.text,
						streaming,
						labels,
						fileMentions: mentions
					}, `md-${i}`));
					continue;
				}
				nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GenuiVueCard, {
					className: genui_assistant_module_css_default.card,
					content: segment.text,
					generating: streaming && !segment.complete,
					isJsonComplete: segment.complete,
					customActions
				}, `schema-${i}`));
			}
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: nodes });
		});
		//#endregion
		//#region src/client/markdown-labels.ts
		/** Build MarkdownText labels from the chat locale seat. */
		function markdownLabels(t) {
			return {
				code: {
					copyLabel: t("copy"),
					copiedLabel: t("copied")
				},
				footnotes: t("markdown.footnotes")
			};
		}
		//#endregion
		//#region src/client/GenuiAssistantNodeView.tsx
		/**
		* Shadowed assistant-step renderer for the reply bubble. Thinking stays on
		* the built-in assistant view: Chat mounts that node once for reasoning and
		* once for the reply, and both mounts share this winning entry.
		*/
		/** Keyed Chat Node view. Reasoning mounts render the built-in assistant view. */
		const GenuiAssistantNodeView = (0, react.memo)(function GenuiAssistantNodeView(props) {
			const official = props.groupPart !== "response" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OfficialReasoning, { ...props }) : null;
			if (props.groupPart === "reasoning") return official;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [official, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AssistantReply, { ...props })] });
		});
		/** Reply half: schemaJson cards and markdown. Reasoning blocks are omitted. */
		const AssistantReply = (0, react.memo)(function AssistantReply({ node, renderMessageImages, fileMentions, t, useTurnData, openFile, inputActions, groupPart }) {
			const data = node.data;
			const streaming = data.status === "running";
			const interrupted = data.status === "interrupted";
			const turn = node.location.kind === "turn" || node.location.kind === "step" ? node.location.turn : void 0;
			const tail = useTurnData("turn-tail");
			const owner = (0, react.useMemo)(() => {
				if (turn?.status !== "closed" || data.finalNode === void 0) return void 0;
				if (tail?.closing?.finalNode.seq !== data.finalNode.seq) return void 0;
				return {
					turn,
					seq: data.finalNode.seq,
					openFile
				};
			}, [
				data.finalNode,
				openFile,
				tail,
				turn
			]);
			const mentions = (0, react.useMemo)(() => owner === void 0 ? void 0 : fileMentions(owner), [fileMentions, owner]);
			const labels = (0, react.useMemo)(() => markdownLabels(t), [t]);
			const customActions = (0, react.useMemo)(() => ({ continueChat: {
				name: "continueChat",
				description: "Continue the chat with a follow-up user message.",
				execute: (params, context) => {
					const message = typeof params === "object" && params !== null && "message" in params ? String(params.message) : "";
					if (message.trim().length === 0 || inputActions === void 0) return;
					let stateJson = "{}";
					try {
						stateJson = JSON.stringify(context?.state ?? {});
					} catch {
						stateJson = "{}";
					}
					const draft = `${message},相关参数为：${stateJson}`;
					inputActions.setDraft(draft);
					inputActions.submit();
				}
			} }), [inputActions]);
			const blocks = data.blocks;
			const rendered = [];
			for (let i = 0; i < blocks.length; i++) {
				const block = blocks[i];
				if (block === void 0) continue;
				if (!blockBelongsToGroupPart(block.kind, groupPart)) continue;
				switch (block.kind) {
					case "text":
						rendered.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GenuiTextBody, {
							text: block.text,
							streaming,
							interrupted,
							labels,
							mentions,
							customActions
						}, i));
						break;
					case "reasoning": break;
					case "image": {
						const start = i;
						const group = [block];
						while (i + 1 < blocks.length) {
							const next = blocks[i + 1];
							if (next === void 0 || next.kind !== "image") break;
							group.push(next);
							i += 1;
						}
						rendered.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: renderMessageImages({
							images: group.map(({ attachment }) => ({ attachment })),
							align: "start"
						}) }, start));
						break;
					}
					case "tool-call": break;
					default: rendered.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.JsonBlock, {
						label: t("message.unknownBlock"),
						payload: "block" in block ? block.block : block,
						truncatedLabel: (total) => t("json.truncated", { total })
					}, i));
				}
			}
			const showStopped = interrupted && groupPart !== "reasoning";
			const legacyStreamingShell = streaming && groupPart === void 0;
			if (rendered.length === 0 && !showStopped && !legacyStreamingShell) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: genui_assistant_module_css_default.root,
				"data-streaming": streaming || void 0,
				"data-dsh-genui-assistant": "",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: genui_assistant_module_css_default.body,
					children: [rendered, showStopped ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: genui_assistant_module_css_default.stopped,
						children: t("message.stopped")
					}) : null]
				})
			});
		});
		/**
		* Built-in thinking row. A failure stays inside this boundary so the reply
		* bubble keeps its shadow entry.
		*/
		function OfficialReasoning(props) {
			const fallback = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReasoningBlocks, { ...props });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OfficialReasoningBoundary, {
				fallback,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OfficialReasoningBody, { ...props })
			});
		}
		function OfficialReasoningBody(props) {
			const builtin = useBuiltinAssistant();
			const sessionId = props.sessionId;
			const injected = (0, react.useMemo)(() => {
				if (builtin?.inject === void 0) return void 0;
				try {
					return builtin.inject(sessionId);
				} catch {
					return;
				}
			}, [builtin, sessionId]);
			const presentation = injected?.hooks?.presentation;
			const usePresentation = (0, react.useMemo)(() => presentation === void 0 ? void 0 : bindPresentation(presentation), [presentation]);
			if (builtin === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReasoningBlocks, { ...props });
			return createOfficialElement(builtin, {
				...props,
				groupPart: "reasoning",
				...usePresentation === void 0 ? {} : { usePresentation },
				...injected?.resolveFilePath === void 0 ? {} : { resolveFilePath: injected.resolveFilePath },
				...injected?.fileMentions === void 0 ? {} : { fileMentions: injected.fileMentions }
			});
		}
		/** Visible thinking text when the built-in view cannot be mounted. */
		function ReasoningBlocks({ node, t, renderSlot }) {
			const labels = (0, react.useMemo)(() => markdownLabels(t), [t]);
			const streaming = node.data.status === "running";
			const blocks = node.data.blocks;
			const last = blocks.length - 1;
			const rows = [];
			for (let i = 0; i < blocks.length; i++) {
				const block = blocks[i];
				if (block === void 0 || block.kind !== "reasoning" || typeof block.text !== "string") continue;
				if (block.text.trim() === "") continue;
				rows.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReasoningDisclosure, {
					text: block.text,
					running: streaming && i === last,
					title: t("message.think"),
					labels,
					renderSlot
				}, i));
			}
			if (rows.length === 0) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: rows });
		}
		function ReasoningDisclosure({ text, running, title, labels, renderSlot }) {
			const [opened, setOpened] = (0, react.useState)(running);
			const shown = running || opened;
			const body = renderSlot === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
				text,
				streaming: running,
				labels
			}) : renderSlot(REASONING_BODY_SLOT, {
				rawText: text,
				text,
				running
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
				className: genui_assistant_module_css_default.think,
				open: shown,
				onToggle: (event) => {
					if (running) return;
					setOpened(event.currentTarget.open);
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: title }), shown ? body : null]
			});
		}
		function createOfficialElement(builtin, props) {
			const Official = builtin.component;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Official, { ...props });
		}
		var OfficialReasoningBoundary = class extends react.Component {
			state = { failed: false };
			static getDerivedStateFromError() {
				return { failed: true };
			}
			componentDidCatch(_error, _info) {
				this.setState({ failed: true });
			}
			render() {
				return this.state.failed ? this.props.fallback : this.props.children;
			}
		};
		//#endregion
		//#region src/prompt-mode.ts
		/** Authoring-prompt tiers shown in the composer. `plus` is the full component set. */
		const GENUI_PROMPT_MODES = [
			"off",
			"mini",
			"standard",
			"plus"
		];
		function isGenuiPromptMode(value) {
			return typeof value === "string" && GENUI_PROMPT_MODES.includes(value);
		}
		//#endregion
		//#region src/client/prompt-mode-copy.ts
		/** Chinese copy. Other shipped languages fall back to English through DSH. */
		const zh = {
			unavailable: "GenUI",
			menu: "GenUI 提示词",
			"mode.off": "关闭",
			"mode.mini": "精简",
			"mode.standard": "标准",
			"mode.plus": "全量",
			"hint.off": "不注入Genui提示词，模型按普通对话回答。已有卡片仍会渲染。",
			"hint.mini": "只提供表单、表格和卡片，提示词最短。",
			"hint.standard": "在精简之外加上标签页和图表。默认使用这一档。",
			"hint.plus": "再加入树、弹窗、折叠、步骤和轮播等组件"
		};
		/** English copy, used for every non-Chinese DSH language. */
		const en = {
			unavailable: "GenUI",
			menu: "GenUI prompt",
			"mode.off": "Off",
			"mode.mini": "Mini",
			"mode.standard": "Standard",
			"mode.plus": "Plus",
			"hint.off": "No GenUI prompt. The model answers in plain text. Existing cards still render.",
			"hint.mini": "Forms, tables, and cards only. The shortest prompt.",
			"hint.standard": "Adds tabs and charts on top of Mini. This is the default.",
			"hint.plus": "Also adds trees, dialogs, collapse, steps, and carousels. The longest prompt."
		};
		/**
		* Read one menu string from the active DSH locale.
		* Hosts without a locale seat, and a missing key, keep the Chinese copy.
		*/
		function promptModeText(t, key) {
			if (t === void 0) return zh[key];
			const value = t(key);
			return value === key ? zh[key] : value;
		}
		function promptModeOptionKey(mode, kind) {
			return `${kind}.${mode}`;
		}
		const PROMPT_MODE_MENU_MODES = GENUI_PROMPT_MODES;
		//#endregion
		//#region src/prompt-control-url.ts
		/** Same-origin host route used by the composer prompt menu. */
		const GENUI_PROMPT_CONTROL_URL = "/api/dsh-genui/prompt";
		//#endregion
		//#region src/client/sparkle-icon.ts
		const SPARKLE_EXPORTS = [
			"IconSparkleRegular",
			"IconSparkleMedium",
			"IconSparkle16"
		];
		/**
		* Pick a sparkle icon export that this host actually ships.
		* @param mod - `@deepseek-ai/dsh-client-ui-primitives` module namespace.
		* @returns The first available icon component.
		*/
		function pickSparkleIcon(mod) {
			const icons = mod;
			for (const name of SPARKLE_EXPORTS) {
				const icon = icons[name];
				if (typeof icon === "function") return icon;
			}
		}
		//#endregion
		//#region \0dsh-css:module:src/client/prompt-toggle-button.module.css.mjs
		const css = ".aG4Rta_trigger{height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;background:0 0;border:none;border-radius:14px;justify-content:center;align-items:center;gap:4px;padding:0 8px 0 6px;font-size:12px;line-height:16px;display:inline-flex}.aG4Rta_trigger:hover:not(:disabled),.aG4Rta_trigger:focus-visible{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);outline:none}.aG4Rta_trigger[aria-disabled=true]{cursor:not-allowed;opacity:.4}.aG4Rta_trigger[data-active]{background:var(--dsw-alias-button-ghost-active-fill);color:var(--dsw-alias-label-primary);box-shadow:inset 0 0 0 1px var(--dsw-alias-button-ghost-active-border)}.aG4Rta_label{white-space:nowrap}.aG4Rta_menu{z-index:1000;border-radius:var(--dsw-radius-lg,8px);background:var(--dsw-menu-surface-fill,var(--dsw-alias-button-floating-fill));min-width:112px;backdrop-filter:var(--dsw-menu-backdrop-filter);color:var(--dsw-alias-label-primary);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent,0 8px 24px #0000002e);flex-direction:column;padding:4px;display:flex;position:fixed;transform:translateY(-100%)}.aG4Rta_option{border-radius:var(--dsw-radius-md,6px);color:inherit;cursor:pointer;font:inherit;text-align:left;background:0 0;border:none;padding:6px 8px;font-size:13px;line-height:18px}.aG4Rta_option:hover,.aG4Rta_option:focus-visible,.aG4Rta_option[aria-selected=true]{background:var(--dsw-alias-interactive-bg-hover);outline:none}.aG4Rta_hint{z-index:1001;border-radius:var(--dsw-radius-lg,8px);background:var(--dsw-menu-surface-fill,var(--dsw-alias-button-floating-fill));width:max-content;max-width:220px;backdrop-filter:var(--dsw-menu-backdrop-filter);color:var(--dsw-alias-label-primary);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent,0 8px 24px #0000002e);pointer-events:none;padding:6px 8px;font-size:12px;line-height:18px;position:fixed}.aG4Rta_hint[data-side=right]{transform:translateY(-50%)}.aG4Rta_hint[data-side=left]{transform:translate(-100%,-50%)}";
		const tagId = "dsh-genui/src/client/prompt-toggle-button.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-genui";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var prompt_toggle_button_module_css_default = {
			"hint": "aG4Rta_hint",
			"label": "aG4Rta_label",
			"menu": "aG4Rta_menu",
			"option": "aG4Rta_option",
			"trigger": "aG4Rta_trigger"
		};
		//#endregion
		//#region src/client/prompt-toggle-button.tsx
		/**
		* Choose the GenUI authoring prompt tier from the composer tool row.
		* Rendering stays installed either way; only the prompt section changes.
		*/
		const SparkleIcon = pickSparkleIcon(_deepseek_ai_dsh_client_ui_primitives);
		function PromptToggleButton({ t }) {
			const text = (key) => promptModeText(t, key);
			const [mode, setMode] = (0, react.useState)("standard");
			const [available, setAvailable] = (0, react.useState)(false);
			const [busy, setBusy] = (0, react.useState)(false);
			const [open, setOpen] = (0, react.useState)(false);
			const [menuPoint, setMenuPoint] = (0, react.useState)(null);
			const [hint, setHint] = (0, react.useState)(null);
			const buttonRef = (0, react.useRef)(null);
			const menuRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				let active = true;
				const controller = new AbortController();
				fetch(GENUI_PROMPT_CONTROL_URL, { signal: controller.signal }).then(async (response) => {
					if (!response.ok) throw new Error(String(response.status));
					const state = await response.json();
					if (!active) return;
					if (!isGenuiPromptMode(state.mode)) throw new Error("bad-mode");
					setMode(state.mode);
					setAvailable(true);
				}).catch(() => {
					if (active) setAvailable(false);
				});
				return () => {
					active = false;
					controller.abort();
				};
			}, []);
			const showHint = (0, react.useCallback)((element, text) => {
				const rect = element.getBoundingClientRect();
				const side = rect.right + 228 < window.innerWidth ? "right" : "left";
				setHint({
					text,
					left: side === "right" ? rect.right + 8 : rect.left - 8,
					top: rect.top + rect.height / 2,
					side
				});
			}, []);
			const choose = (0, react.useCallback)(async (next) => {
				setHint(null);
				setOpen(false);
				if (busy || !available || next === mode) return;
				const previous = mode;
				setBusy(true);
				setMode(next);
				try {
					const response = await fetch(GENUI_PROMPT_CONTROL_URL, {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({ mode: next })
					});
					if (!response.ok) throw new Error(String(response.status));
					const state = await response.json();
					if (!isGenuiPromptMode(state.mode)) throw new Error("bad-mode");
					setMode(state.mode);
					setAvailable(true);
				} catch {
					setMode(previous);
					setAvailable(false);
				} finally {
					setBusy(false);
				}
			}, [
				available,
				busy,
				mode
			]);
			const placeMenu = (0, react.useCallback)(() => {
				const button = buttonRef.current;
				if (button === null) return;
				const rect = button.getBoundingClientRect();
				setMenuPoint({
					left: rect.left,
					top: rect.top - 4
				});
			}, []);
			(0, react.useLayoutEffect)(() => {
				if (!open) return;
				placeMenu();
				window.addEventListener("resize", placeMenu);
				window.addEventListener("scroll", placeMenu, true);
				return () => {
					window.removeEventListener("resize", placeMenu);
					window.removeEventListener("scroll", placeMenu, true);
				};
			}, [open, placeMenu]);
			(0, react.useEffect)(() => {
				if (!open) return;
				const onPointerDown = (event) => {
					const target = event.target;
					if (!(target instanceof Node)) return;
					if (buttonRef.current?.contains(target)) return;
					if (menuRef.current?.contains(target)) return;
					setOpen(false);
				};
				const onKeyDown = (event) => {
					if (event.key === "Escape") {
						setHint(null);
						setOpen(false);
					}
				};
				document.addEventListener("pointerdown", onPointerDown);
				document.addEventListener("keydown", onKeyDown);
				return () => {
					document.removeEventListener("pointerdown", onPointerDown);
					document.removeEventListener("keydown", onKeyDown);
				};
			}, [open]);
			const label = available ? text(promptModeOptionKey(mode, "mode")) : text("unavailable");
			const menuLabel = text("menu");
			const menuId = "genui-prompt-mode-menu";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					ref: buttonRef,
					type: "button",
					className: prompt_toggle_button_module_css_default.trigger,
					"aria-label": menuLabel,
					"aria-haspopup": "listbox",
					"aria-expanded": open,
					"aria-controls": open ? menuId : void 0,
					"aria-disabled": !available,
					"data-active": available && mode !== "off" ? "" : void 0,
					onClick: () => {
						if (!available || busy) return;
						setHint(null);
						setOpen((current) => !current);
					},
					onMouseDown: (event) => {
						event.preventDefault();
					},
					children: [SparkleIcon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SparkleIcon, { size: 14 }) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: prompt_toggle_button_module_css_default.label,
						children: label
					})]
				}),
				open && menuPoint !== null && (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					ref: menuRef,
					id: menuId,
					className: prompt_toggle_button_module_css_default.menu,
					role: "listbox",
					"aria-label": menuLabel,
					style: {
						left: menuPoint.left,
						top: menuPoint.top
					},
					children: PROMPT_MODE_MENU_MODES.map((optionMode) => {
						const optionLabel = text(promptModeOptionKey(optionMode, "mode"));
						const description = text(promptModeOptionKey(optionMode, "hint"));
						return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: prompt_toggle_button_module_css_default.option,
							role: "option",
							"aria-selected": optionMode === mode,
							"aria-label": `${optionLabel}. ${description}`,
							onMouseDown: (event) => {
								event.preventDefault();
							},
							onMouseEnter: (event) => {
								showHint(event.currentTarget, description);
							},
							onFocus: (event) => {
								showHint(event.currentTarget, description);
							},
							onMouseLeave: () => {
								setHint(null);
							},
							onBlur: () => {
								setHint(null);
							},
							onClick: () => {
								choose(optionMode);
							},
							children: optionLabel
						}, optionMode);
					})
				}), document.body),
				hint !== null && (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: prompt_toggle_button_module_css_default.hint,
					role: "tooltip",
					"data-side": hint.side,
					style: {
						left: hint.left,
						top: hint.top
					},
					children: hint.text
				}), document.body)
			] });
		}
		//#endregion
		//#region src/client/index.ts
		const inject = ["slots", "locale"];
		/**
		* Register the GenUI assistant renderer over conversation.chat.node.
		* @param ctx - browser Cordis context with the slot service.
		*/
		function apply(ctx) {
			prefetchGenuiRuntime();
			const locale = ctx.locale;
			ctx.effect(() => locale.register("dsh-genui", {
				zh,
				en
			}), "dsh-genui: prompt mode copy");
			ctx.slots.inject("conversation.input.left", () => ctx.slots.register({
				name: "conversation.input.left",
				id: "genui-prompt-toggle",
				order: 0,
				locale: "dsh-genui"
			}, PromptToggleButton));
			ctx.slots.inject("conversation.chat.node", () => registerAssistantStep(ctx));
		}
		/**
		* Shadow assistant-step for the reply bubble, keep the built-in component for
		* thinking, and borrow the reasoning-body slot onto that entry so the built-in
		* view can still open it. The borrow effect is registered after the slot entry
		* so fiber teardown clears the borrowed table before the entry disposer
		* collapses children.
		* @param ctx - browser Cordis context with the slot service.
		* @returns disposer for declaration collapse.
		*/
		function registerAssistantStep(ctx) {
			const slots = ctx.slots;
			const disposeEntry = slots.register({
				name: "conversation.chat.node",
				key: "assistant-step",
				priority: -1,
				locale: "chat"
			}, GenuiAssistantNodeView);
			const entry = slots.entries?.("conversation.chat.node")?.find((item) => item.component === GenuiAssistantNodeView && item.options.key === "assistant-step");
			const syncBuiltin = () => {
				const entries = slots.entries?.("conversation.chat.node");
				if (entries !== void 0) captureBuiltinAssistant(entries, GenuiAssistantNodeView);
			};
			const disposeWatch = ctx.effect(() => {
				syncBuiltin();
				return slots.subscribe?.("conversation.chat.node", syncBuiltin) ?? (() => {});
			}, "dsh-genui: built-in assistant view");
			const disposeBorrow = ctx.effect(() => {
				if (entry !== void 0) borrowReasoningBody(entry);
				return () => {
					if (entry !== void 0) releaseBorrowedReasoningBody(entry);
				};
			}, "dsh-genui: borrow reasoning body slot");
			return () => {
				disposeBorrow();
				disposeWatch();
				disposeEntry();
			};
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map