/**
 * CSS Modules reach the components as a hashed class map, injected by the
 * tsdown CSS pipeline (see build/tsdown.client.ts). TypeScript only needs the
 * shape; there is no stylesheet file to resolve at type-check time.
 */
declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
