"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[964],{6992:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=a(4848),s=a(8453),r=a(6540);const t=()=>{const[n,e]=(0,r.useState)(2e3),[a,s]=(0,r.useState)(""),[t,o]=(0,r.useState)(!1),[d,l]=(0,r.useState)(null),[u,p]=(0,r.useState)("");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,i.jsxs)("select",{onChange:n=>{const a=Number(n.target.value);e(a),p("")},value:""===u?n:"",style:{padding:"10px",borderRadius:"8px",border:"1px solid #ddd",fontSize:"16px",cursor:"pointer"},children:[(0,i.jsx)("option",{value:2e3,children:"Rp 2.000"}),(0,i.jsx)("option",{value:5e3,children:"Rp 5.000"}),(0,i.jsx)("option",{value:1e4,children:"Rp 10.000"}),(0,i.jsx)("option",{value:25e3,children:"Rp 25.000"})]}),(0,i.jsx)("input",{type:"number",value:u,onChange:n=>{const e=n.target.value;p(""===e?"":Number(e))},placeholder:"Nominal lain",style:{padding:"10px",borderRadius:"8px",border:"1px solid #ddd",fontSize:"16px",width:"150px"}})]}),(0,i.jsx)("button",{onClick:async()=>{const a=""===u?n:u;e(a),o(!0),l(null);try{const n=await fetch("https://funpice.fun/api/generate-qris",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:a})});if(!n.ok)throw new Error("Network response was not ok");const e=await n.json();s(e.qris_url)}catch(d){console.error("Error:",d),l("Terjadi kesalahan. Silakan coba lagi.")}finally{o(!1)}},disabled:t,style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px"},children:t?"Proses...":"Donasi"}),d&&(0,i.jsx)("p",{style:{color:"red",marginTop:"10px"},children:d}),a&&(0,i.jsxs)("div",{style:{textAlign:"center",marginTop:"20px"},children:[(0,i.jsx)("p",{style:{fontSize:"18px",marginBottom:"10px"},children:"Silakan pindai kode QR di bawah ini untuk menyelesaikan donasi Anda:"}),(0,i.jsx)("img",{src:a,alt:"QRIS Code",style:{maxWidth:"50%",height:"auto",borderRadius:"8px"}})]})]})},o={id:"dukungan-sponsor",title:"\ud83d\udc96 Dukungan dan Sponsor",sidebar_label:"\ud83d\udc96 Dukungan dan Sponsor"},d="\ud83d\udc96 Dukungan dan Sponsor",l={id:"dukungan-sponsor",title:"\ud83d\udc96 Dukungan dan Sponsor",description:"Kami sangat menghargai dukungan Anda yang berharga. Dengan kontribusi Anda, kami dapat terus menghadirkan konten berkualitas dan meningkatkan proyek ini.",source:"@site/docs/dukungan.md",sourceDirName:".",slug:"/dukungan-sponsor",permalink:"/ringkasan-skd-cpns/docs/dukungan-sponsor",draft:!1,unlisted:!1,editUrl:"https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/docs/dukungan.md",tags:[],version:"current",frontMatter:{id:"dukungan-sponsor",title:"\ud83d\udc96 Dukungan dan Sponsor",sidebar_label:"\ud83d\udc96 Dukungan dan Sponsor"},sidebar:"panduan",previous:{title:"\ud83d\udccb Kemampuan Verbal",permalink:"/ringkasan-skd-cpns/docs/rangking/rangking-list-verbal"},next:{title:"\ud83e\udd16 Funpice ID Generator",permalink:"/ringkasan-skd-cpns/docs/id-funpice"}},u={},p=[{value:"\ud83d\udcf1 Ikuti Kami di Sosial Media",id:"-ikuti-kami-di-sosial-media",level:2},{value:"\ud83d\udc65 Tim Kami",id:"-tim-kami",level:2}];function c(n){const e={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"-dukungan-dan-sponsor",children:"\ud83d\udc96 Dukungan dan Sponsor"})}),"\n",(0,i.jsx)(e.p,{children:"Kami sangat menghargai dukungan Anda yang berharga. Dengan kontribusi Anda, kami dapat terus menghadirkan konten berkualitas dan meningkatkan proyek ini."}),"\n",(0,i.jsx)(e.p,{children:"Setiap kontribusi Anda membantu kami terus menghadirkan konten berkualitas dan meningkatkan proyek ini. Pilih jumlah donasi yang Anda inginkan dan beri dukungan untuk masa depan yang lebih baik!"}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(e.h2,{id:"-ikuti-kami-di-sosial-media",children:"\ud83d\udcf1 Ikuti Kami di Sosial Media"}),"\n",(0,i.jsx)(e.p,{children:"Terhubunglah dengan kami melalui sosial media untuk mendapatkan update terbaru dan berinteraksi langsung:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Instagram"}),": ",(0,i.jsx)(e.a,{href:"https://instagram.com/batukel.dev",children:"@batukel.dev"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Instagram"}),": ",(0,i.jsx)(e.a,{href:"https://instagram.com/masohijersey_",children:"@masohijersey_"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Instagram"}),": ",(0,i.jsx)(e.a,{href:"https://instagram.com/batukel_sablon",children:"@batukel_sablon"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"-tim-kami",children:"\ud83d\udc65 Tim Kami"}),"\n",(0,i.jsx)(e.p,{children:"Kami ingin memperkenalkan tim yang berdedikasi di balik proyek ini:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Funpice"})," - ",(0,i.jsx)(e.a,{href:"https://instagram.com/funpice_",children:"Instagram"})," - Desainer"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Januar Samjid"})," - ",(0,i.jsx)(e.a,{href:"https://linkedin.com/in/januar-samjid",children:"LinkedIn"})," | ",(0,i.jsx)(e.a,{href:"https://instagram.com/jsamjid",children:"Instagram"})," - Fullstack Developer"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>t,x:()=>o});var i=a(6540);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);