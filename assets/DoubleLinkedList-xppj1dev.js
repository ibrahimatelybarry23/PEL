import{j as e,r as u}from"./index-BpRccC6q.js";const t={teal:{fill:"#0a2e24",stroke:"#1D9E75",text:"#5DCAA5"},amber:{fill:"#2a1d06",stroke:"#BA7517",text:"#EF9F27"},coral:{fill:"#2a1209",stroke:"#D85A30",text:"#F0997B"},gray:{fill:"#1e1e1c",stroke:"#5F5E5A",text:"#B4B2A9"},red:{fill:"#2a0f0f",stroke:"#A32D2D",text:"#F09595"},green:{fill:"#142008",stroke:"#639922",text:"#97C459"},purple:{fill:"#1a1834",stroke:"#7F77DD",text:"#AFA9EC"}},j=()=>e.jsxs("defs",{children:[e.jsx("marker",{id:"arr",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M2 1L8 5L2 9",fill:"none",stroke:"context-stroke",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("marker",{id:"arr-rev",viewBox:"0 0 10 10",refX:"2",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto",children:e.jsx("path",{d:"M8 1L2 5L8 9",fill:"none",stroke:"context-stroke",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),i=({x:r,y:o,w:l=70,h:s=36,color:n="teal",label:a,rx:d=6,fontSize:p=14})=>e.jsxs("g",{children:[e.jsx("rect",{x:r,y:o,width:l,height:s,rx:d,fill:t[n].fill,stroke:t[n].stroke,strokeWidth:"0.5"}),e.jsx("text",{x:r+l/2,y:o+s/2,textAnchor:"middle",dominantBaseline:"central",fontSize:p,fontWeight:"500",fill:t[n].text,children:a})]}),c=({x1:r,y1:o,x2:l,y2:s})=>e.jsx("line",{x1:r,y1:o,x2:l,y2:s,stroke:"#5F5E5A",strokeWidth:"1.5",markerEnd:"url(#arr)"}),f=({title:r,children:o})=>e.jsxs("section",{style:{marginBottom:48},children:[e.jsx("h2",{style:{fontSize:20,fontWeight:600,marginBottom:16,color:"var(--accent, #ffa116)",borderBottom:"1px solid var(--border, #2a2a28)",paddingBottom:8},children:r}),o]}),w=({children:r})=>e.jsx("p",{style:{fontSize:15,lineHeight:1.7,margin:"10px 0",color:"var(--text-secondary, #a0a0a0)"},children:r}),y=({children:r})=>e.jsx("pre",{style:{background:"var(--bg-tertiary, #1a1a18)",borderRadius:8,padding:"14px 18px",fontSize:12,lineHeight:1.7,overflowX:"auto",margin:"12px 0",fontFamily:'var(--font-mono, "JetBrains Mono", monospace)',border:"1px solid var(--border, #2a2a28)",color:"#d4d4d4"},children:e.jsx("code",{children:r})}),W=({children:r})=>e.jsxs("div",{style:{background:t.amber.fill,border:`1px solid ${t.amber.stroke}`,borderLeft:`3px solid ${t.amber.stroke}`,borderRadius:8,padding:"10px 14px",margin:"12px 0",fontSize:13,color:t.amber.text,lineHeight:1.6},children:["⚠️ ",r]}),b=({children:r})=>e.jsxs("div",{style:{background:t.teal.fill,border:`1px solid ${t.teal.stroke}`,borderLeft:`3px solid ${t.teal.stroke}`,borderRadius:8,padding:"10px 14px",margin:"12px 0",fontSize:13,color:t.teal.text,lineHeight:1.6},children:["💡 ",r]}),z=({tabs:r,active:o,onChange:l})=>e.jsx("div",{style:{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"},children:r.map((s,n)=>e.jsx("button",{onClick:()=>l(n),style:{padding:"6px 14px",borderRadius:6,fontSize:13,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s",background:o===n?"rgba(255,161,22,0.12)":"var(--bg-tertiary, #1a1a18)",border:`1px solid ${o===n?"rgba(255,161,22,0.3)":"var(--border, #2a2a28)"}`,color:o===n?"var(--accent, #ffa116)":"var(--text-muted, #777)",fontWeight:o===n?600:400},children:s},n))}),k=({onClick:r,disabled:o,children:l})=>e.jsx("button",{onClick:r,disabled:o,style:{padding:"6px 14px",borderRadius:6,fontSize:13,cursor:o?"default":"pointer",fontFamily:"inherit",border:"1px solid var(--border, #2a2a28)",background:"var(--bg-tertiary, #1a1a18)",color:"var(--text-secondary, #a0a0a0)",opacity:o?.35:1,transition:"opacity 0.15s"},children:l}),m=[12,34,56,78],A=()=>e.jsxs(f,{title:"Struttura del nodo",children:[e.jsxs(w,{children:["A differenza della lista semplice, ogni nodo di una ",e.jsx("strong",{children:"doubly linked list"})," ha tre campi: il dato, un puntatore al nodo ",e.jsx("code",{children:"next"})," (successivo) e uno al nodo"," ",e.jsx("code",{children:"prev"})," (precedente). Questo permette di scorrere la lista in entrambe le direzioni."]}),e.jsxs("svg",{width:"100%",viewBox:"0 0 480 100",style:{maxWidth:480,display:"block",margin:"16px auto"},children:[e.jsx(j,{}),e.jsx(i,{x:50,y:20,w:100,h:44,color:"purple",label:"prev",fontSize:13}),e.jsx(i,{x:160,y:20,w:160,h:44,color:"teal",label:"info",fontSize:13}),e.jsx(i,{x:330,y:20,w:100,h:44,color:"amber",label:"next",fontSize:13}),e.jsx("text",{x:100,y:90,textAnchor:"middle",fontSize:11,fill:t.purple.text,children:"ptr al precedente"}),e.jsx("text",{x:240,y:90,textAnchor:"middle",fontSize:11,fill:t.teal.text,children:"dato"}),e.jsx("text",{x:380,y:90,textAnchor:"middle",fontSize:11,fill:t.amber.text,children:"ptr al successivo"})]}),e.jsx(y,{children:`struct Cella {
    int    info;
    Cella* next;   // puntatore al nodo successivo
    Cella* prev;   // puntatore al nodo precedente
};`})]}),B=()=>{const[r,o]=u.useState("fwd"),[l,s]=u.useState(0),n=m.length-1,a=[60,175,290,405],d=80,p=r==="fwd"&&l>n,v=r==="bwd"&&l<0,S=p?"current == nullptr → fine avanti":v?"current == nullptr → fine indietro":`current → nodo ${m[r==="fwd"?l:n-l]}`,h=r==="fwd"?l:n-l,L=()=>{o("fwd"),s(0)},C=()=>{o("bwd"),s(0)},D=()=>s(g=>g+1);return e.jsxs(f,{title:"Traversal bidirezionale",children:[e.jsxs(w,{children:["Con ",e.jsx("code",{children:"head"})," e ",e.jsx("code",{children:"tail"})," è possibile scorrere la lista sia in avanti che all'indietro senza bisogno di ricominciare da capo."]}),e.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[e.jsx(k,{onClick:L,children:"← Avanti (head→tail)"}),e.jsx(k,{onClick:C,children:"Indietro (tail→head) →"})]}),e.jsxs("svg",{width:"100%",viewBox:"0 0 540 140",style:{display:"block",margin:"8px auto"},children:[e.jsx(j,{}),e.jsx(i,{x:0,y:42,w:50,h:34,color:"gray",label:"head",fontSize:11}),e.jsx(c,{x1:50,y1:59,x2:58,y2:59}),e.jsx(i,{x:480,y:42,w:50,h:34,color:"gray",label:"tail",fontSize:11}),e.jsx("line",{x1:a[3]+d,y1:59,x2:480,y2:59,stroke:"#5F5E5A",strokeWidth:"1.5",markerEnd:"url(#arr)"}),m.map((g,x)=>e.jsxs("g",{children:[e.jsx(i,{x:a[x],y:42,w:d,h:34,color:!p&&!v&&x===h?"amber":"teal",label:g,fontSize:13}),x<m.length-1&&e.jsx("path",{d:`M${a[x]+d} 50 Q${a[x]+d+8} 40 ${a[x+1]} 50`,fill:"none",stroke:t.amber.stroke,strokeWidth:"1.2",markerEnd:"url(#arr)"}),x>0&&e.jsx("path",{d:`M${a[x]} 68 Q${a[x]-8} 80 ${a[x-1]+d} 68`,fill:"none",stroke:t.purple.stroke,strokeWidth:"1.2",markerEnd:"url(#arr)"})]},x)),!p&&!v&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:a[h]-2,y:40,width:d+4,height:38,rx:8,fill:"none",stroke:t.coral.stroke,strokeWidth:2}),e.jsx("text",{x:a[h]+d/2,y:110,textAnchor:"middle",fontSize:11,fontWeight:"500",fill:t.coral.text,children:"current"}),e.jsx("line",{x1:a[h]+d/2,y1:102,x2:a[h]+d/2,y2:82,stroke:t.coral.stroke,strokeWidth:1.5,markerEnd:"url(#arr)"})]}),e.jsx("line",{x1:10,y1:125,x2:40,y2:125,stroke:t.amber.stroke,strokeWidth:"1.5"}),e.jsx("text",{x:44,y:129,fontSize:10,fill:t.amber.text,children:"next"}),e.jsx("line",{x1:80,y1:125,x2:110,y2:125,stroke:t.purple.stroke,strokeWidth:"1.5"}),e.jsx("text",{x:114,y:129,fontSize:10,fill:t.purple.text,children:"prev"})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginTop:4},children:[e.jsx(k,{onClick:D,disabled:r==="fwd"&&l>n||r==="bwd"&&l>n,children:r==="fwd"?"Avanti →":"← Avanti"}),e.jsx(k,{onClick:()=>{o(r),s(0)},children:"Reset"})]}),e.jsx("div",{style:{fontSize:13,fontFamily:"var(--font-mono, monospace)",marginTop:8,color:"#777"},children:S})]})},E=()=>{const[r,o]=u.useState(0),l=()=>e.jsxs("svg",{width:"100%",viewBox:"0 0 560 160",style:{display:"block",margin:"12px auto"},children:[e.jsx(j,{}),e.jsx(i,{x:0,y:60,w:55,h:36,color:"gray",label:"head",fontSize:12}),e.jsx(i,{x:110,y:5,w:80,h:36,color:"coral",label:"nuovo"}),e.jsx("text",{x:200,y:24,fontSize:11,fill:t.coral.text,children:"nuovo nodo"}),e.jsx("path",{d:"M150 41 L150 60 L180 60",fill:"none",stroke:t.coral.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:160,y:55,fontSize:10,fill:t.coral.text,children:"①next"}),e.jsx("path",{d:"M180 68 L165 68 L165 28 L148 28",fill:"none",stroke:t.purple.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:155,y:80,fontSize:10,fill:t.purple.text,children:"②prev"}),e.jsx("path",{d:"M27 78 L27 110 L115 110 L115 43",fill:"none",stroke:t.coral.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:60,y:122,fontSize:10,fill:t.coral.text,children:"③head=nuovo"}),e.jsx(c,{x1:55,y1:78,x2:178,y2:78}),e.jsx(i,{x:180,y:60,w:70,h:36,color:"teal",label:"12"}),e.jsx(c,{x1:250,y1:78,x2:288,y2:78}),e.jsx(i,{x:290,y:60,w:70,h:36,color:"teal",label:"34"}),e.jsx("text",{x:380,y:82,fontSize:14,fill:"#555",children:"…"})]}),s=()=>e.jsxs("svg",{width:"100%",viewBox:"0 0 560 160",style:{display:"block",margin:"12px auto"},children:[e.jsx(j,{}),e.jsx(i,{x:0,y:60,w:55,h:36,color:"gray",label:"tail",fontSize:12}),e.jsx(i,{x:110,y:5,w:80,h:36,color:"coral",label:"nuovo"}),e.jsx("text",{x:200,y:24,fontSize:11,fill:t.coral.text,children:"nuovo nodo"}),e.jsx("path",{d:"M150 41 L150 60 L145 60",fill:"none",stroke:t.purple.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:155,y:56,fontSize:10,fill:t.purple.text,children:"①prev"}),e.jsx("path",{d:"M55 78 L95 78 Q100 78 100 70 L100 25 L108 25",fill:"none",stroke:t.coral.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:58,y:95,fontSize:10,fill:t.coral.text,children:"②tail→next"}),e.jsx("path",{d:"M27 78 L27 130 L150 130 L150 43",fill:"none",stroke:t.amber.stroke,strokeWidth:1.5,strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:80,y:144,fontSize:10,fill:t.amber.text,children:"③tail=nuovo"}),e.jsx("text",{x:60,y:82,fontSize:14,fill:"#555",children:"…"}),e.jsx(i,{x:90,y:60,w:70,h:36,color:"teal",label:"56"})]}),n=[`void ListDL::prepend(int n) {
    Cella* pc = new Cella{n, head, nullptr};
    if (head == nullptr) {
        head = pc;
        tail = pc;
    } else {
        head->prev = pc;   // ② il vecchio head punta indietro al nuovo
        head = pc;         // ③ head aggiornato
    }
}`,`void ListDL::append(int n) {
    Cella* pc = new Cella{n, nullptr, tail};
    if (tail == nullptr) {
        head = pc;
        tail = pc;
    } else {
        tail->next = pc;   // ② il vecchio tail punta avanti al nuovo
        tail = pc;         // ③ tail aggiornato
    }
}`];return e.jsxs(f,{title:"Inserimento: Prepend e Append",children:[e.jsx(z,{tabs:["Prepend (in testa) — O(1)","Append (in coda) — O(1)"],active:r,onChange:o}),r===0?e.jsx(l,{}):e.jsx(s,{}),e.jsx(y,{children:n[r]}),e.jsxs(b,{children:["Entrambe le operazioni sono ",e.jsx("strong",{children:"O(1)"})," grazie ai puntatori ",e.jsx("code",{children:"head"})," e ",e.jsx("code",{children:"tail"}),". Aggiorna sempre tutti e quattro i link coinvolti nell'ordine giusto."]})]})},F=()=>e.jsxs("svg",{width:"100%",viewBox:"0 0 560 140",style:{display:"block",margin:"12px auto"},children:[e.jsx(j,{}),e.jsx(i,{x:20,y:50,w:70,h:36,color:"teal",label:"12"}),e.jsx(i,{x:130,y:50,w:70,h:36,color:"red",label:"34"}),e.jsx("line",{x1:130,y1:50,x2:200,y2:86,stroke:t.red.stroke,strokeWidth:"1.5"}),e.jsx("line",{x1:200,y1:50,x2:130,y2:86,stroke:t.red.stroke,strokeWidth:"1.5"}),e.jsx("text",{x:165,y:110,textAnchor:"middle",fontSize:11,fill:t.red.text,children:"da eliminare"}),e.jsx(i,{x:240,y:50,w:70,h:36,color:"teal",label:"56"}),e.jsx(i,{x:350,y:50,w:70,h:36,color:"teal",label:"78"}),e.jsx("path",{d:"M90 56 Q160 20 240 56",fill:"none",stroke:t.coral.stroke,strokeWidth:"1.5",strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:165,y:18,textAnchor:"middle",fontSize:10,fill:t.coral.text,children:"prev→next = curr→next"}),e.jsx("path",{d:"M240 80 Q165 118 90 80",fill:"none",stroke:t.purple.stroke,strokeWidth:"1.5",strokeDasharray:"4 3",markerEnd:"url(#arr)"}),e.jsx("text",{x:165,y:130,textAnchor:"middle",fontSize:10,fill:t.purple.text,children:"next→prev = curr→prev"}),e.jsx(c,{x1:90,y1:64,x2:128,y2:64}),e.jsx(c,{x1:200,y1:64,x2:238,y2:64}),e.jsx(c,{x1:310,y1:64,x2:348,y2:64})]}),M=()=>{const[r,o]=u.useState(0),l=[`void ListDL::remove(int pos) {
    if (head == nullptr || pos < 0) return;

    Cella* pc = head;
    int i = 0;
    while (i < pos && pc != nullptr) { i++; pc = pc->next; }
    if (pc == nullptr) return;

    if (pc->prev == nullptr)
        head = pc->next;              // rimozione della testa
    else
        pc->prev->next = pc->next;    // salta avanti

    if (pc->next == nullptr)
        tail = pc->prev;              // rimozione della coda
    else
        pc->next->prev = pc->prev;    // salta indietro

    delete pc;
}`,`void ListDL::remove_rec(Cella*& curr, Cella*& t, int pos) {
    if (curr == nullptr) return;

    if (pos == 0) {
        Cella* tmp = curr;
        curr = curr->next;            // avanza il puntatore del chiamante
        if (curr != nullptr)
            curr->prev = tmp->prev;   // aggiorna il prev del nuovo nodo
        else
            t = tmp->prev;            // curr era l'ultimo, aggiorna tail
        delete tmp;
    } else {
        remove_rec(curr->next, t, pos - 1);
    }
}`];return e.jsxs(f,{title:"Rimozione",children:[e.jsxs(w,{children:["Per rimuovere un nodo bisogna aggiornare ",e.jsx("strong",{children:"quattro link"}),": il ",e.jsx("code",{children:"next"})," del precedente e il ",e.jsx("code",{children:"prev"})," del successivo. Se il nodo è in testa o in coda, bisogna aggiornare anche ",e.jsx("code",{children:"head"})," o ",e.jsx("code",{children:"tail"}),"."]}),e.jsx(F,{}),e.jsx(z,{tabs:["Iterativa","Ricorsiva"],active:r,onChange:o}),e.jsx(y,{children:l[r]}),e.jsxs(W,{children:["Aggiorna ",e.jsx("strong",{children:"sempre entrambe le direzioni"}),": se aggiorni solo ",e.jsx("code",{children:"prev→next"}),"e dimentichi ",e.jsx("code",{children:"next→prev"}),", la lista è corrotta per lo scorrimento all'indietro."]})]})},$=()=>{const[r,o]=u.useState(0),l=[`ListDL::~ListDL() {
    Cella* cur = head;
    while (cur != nullptr) {
        Cella* tmp = cur;
        cur = cur->next;
        delete tmp;              // dealloca nodo per nodo
    }
    head = nullptr;
    tail = nullptr;
}`,`ListDL::ListDL(const ListDL& other) {
    if (other.head == nullptr) {
        head = nullptr; tail = nullptr; return;
    }
    Cella* curr = other.head;
    head = new Cella{curr->info, nullptr, nullptr};
    tail = head;

    curr = curr->next;
    while (curr != nullptr) {
        Cella* nu = new Cella{curr->info, nullptr, tail};
        tail->next = nu;         // collega avanti
        tail = nu;               // aggiorna tail
        curr = curr->next;
    }
}`];return e.jsxs(f,{title:"Distruttore e Copy Constructor",children:[e.jsx(z,{tabs:["Distruttore","Copy Constructor"],active:r,onChange:o}),e.jsx(y,{children:l[r]}),r===0&&e.jsxs(b,{children:["Il distruttore scorre la lista tenendo un puntatore ",e.jsx("code",{children:"tmp"})," al nodo da eliminare prima di avanzare, per non perdere il puntatore al successivo."]}),r===1&&e.jsxs(b,{children:["Il copy constructor imposta ",e.jsx("code",{children:"prev"})," di ogni nuovo nodo a ",e.jsx("code",{children:"tail"})," ","prima di avanzare ",e.jsx("code",{children:"tail"})," — così i link all'indietro sono sempre corretti."]})]})};function T(){return e.jsxs("article",{style:{maxWidth:720,margin:"0 auto"},children:[e.jsx(A,{}),e.jsx(B,{}),e.jsx(E,{}),e.jsx(M,{}),e.jsx($,{})]})}export{T as default};
