/** CSS Modules imported by the client bundle. lightningcss rewrites them at build time. */
declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
