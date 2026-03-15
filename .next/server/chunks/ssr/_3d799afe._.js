module.exports=[35112,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactDOM},99570,66718,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d={primary:"bg-[var(--primary)] text-[var(--primary-text)] font-medium hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)] disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]",secondary:"border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface-hover)] active:bg-[var(--surface-active)] disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]",ghost:"text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:bg-[var(--surface-active)] disabled:opacity-50 disabled:pointer-events-none",danger:"bg-[var(--error)] text-white font-medium hover:bg-red-700 active:bg-red-800 disabled:opacity-50 disabled:pointer-events-none shadow-[var(--shadow-xs)]"},e={sm:"px-3 py-1.5 text-xs rounded-[var(--radius-sm)]",md:"px-3.5 py-2 text-sm rounded-[var(--radius-md)]",lg:"px-5 py-2.5 text-sm rounded-[var(--radius-md)]"},f=(0,c.forwardRef)(({variant:a="primary",size:c="md",icon:f,showArrow:g=!1,fullWidth:h=!1,loading:i=!1,disabled:j,className:k="",children:l,...m},n)=>(0,b.jsxs)("button",{ref:n,disabled:j||i,className:`
          inline-flex items-center justify-center gap-2
          transition-all duration-[var(--transition-fast)]
          ${d[a]}
          ${"ghost"!==a?e[c]:"rounded-[var(--radius-md)] px-2 py-1.5 text-sm"}
          ${h?"w-full":""}
          ${k}
        `,...m,children:[i?(0,b.jsx)("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"}):f||(g?(0,b.jsx)("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:2,children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})}):null),l]}));f.displayName="Button",a.s(["Button",0,f],99570);let g=(0,c.forwardRef)(({label:a,error:c,className:d="",id:e,...f},g)=>{let h=e||a?.toLowerCase().replace(/\s+/g,"-");return(0,b.jsxs)("div",{children:[a&&(0,b.jsx)("label",{htmlFor:h,className:"mb-1.5 block text-sm font-medium text-[var(--text-primary)]",children:a}),(0,b.jsx)("input",{ref:g,id:h,className:`
            w-full border border-[var(--border)] bg-[var(--surface)]
            rounded-[var(--radius-md)] px-3.5 py-2 text-sm text-[var(--text-primary)]
            placeholder-[var(--text-tertiary)] outline-none
            transition-all duration-[var(--transition-fast)]
            hover:border-[var(--border-hover)]
            focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
            ${c?"border-[var(--error)] focus:ring-[var(--error)]/10":""}
            ${d}
          `,"aria-invalid":c?"true":void 0,"aria-describedby":c?`${h}-error`:void 0,...f}),c&&(0,b.jsx)("p",{id:`${h}-error`,className:"mt-1.5 text-xs text-[var(--error)]",role:"alert",children:c})]})});g.displayName="Input",a.s(["Input",0,g],66718)},41707,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"};a.s(["Modal",0,({open:a,onClose:e,children:f,maxWidth:g="sm"})=>{let h=(0,c.useRef)(null);return((0,c.useEffect)(()=>{if(!a)return;let b=a=>{"Escape"===a.key&&e()};return document.addEventListener("keydown",b),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",b),document.body.style.overflow=""}},[a,e]),a)?(0,b.jsx)("div",{ref:h,onClick:a=>{a.target===h.current&&e()},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]",role:"dialog","aria-modal":"true",children:(0,b.jsxs)("div",{className:`
          relative w-full ${d[g]}
          bg-[var(--surface)] border border-[var(--border)]
          rounded-[var(--radius-xl)] p-8
          shadow-[var(--shadow-overlay)]
          animate-in fade-in zoom-in-95 duration-200
        `,children:[(0,b.jsx)("button",{type:"button",onClick:e,className:" absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-tertiary)] transition-all duration-[var(--transition-fast)] hover:bg-[var(--surface-active)] hover:text-[var(--text-primary)] ","aria-label":"Close",children:(0,b.jsx)("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),f]})}):null}])}];

//# sourceMappingURL=_3d799afe._.js.map