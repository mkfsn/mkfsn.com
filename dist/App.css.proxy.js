// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App.svelte-1mbcpwe{background-color:rgba(13,110,253,.88);min-height:100vh;background-image:url(\"/images/bg.jpg\");background-size:cover;background-blend-mode:screen}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}