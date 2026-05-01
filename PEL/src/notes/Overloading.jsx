import { useState } from 'react'

const C = {
  teal:   { fill: '#0a2e24', stroke: '#1D9E75', text: '#5DCAA5' },
  amber:  { fill: '#2a1d06', stroke: '#BA7517', text: '#EF9F27' },
  coral:  { fill: '#2a1209', stroke: '#D85A30', text: '#F0997B' },
  gray:   { fill: '#1e1e1c', stroke: '#5F5E5A', text: '#B4B2A9' },
  red:    { fill: '#2a0f0f', stroke: '#A32D2D', text: '#F09595' },
  green:  { fill: '#142008', stroke: '#639922', text: '#97C459' },
  purple: { fill: '#1a1834', stroke: '#7F77DD', text: '#AFA9EC' },
}

const ArrowDef = () => (
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5"
      markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </marker>
  </defs>
)

const Box = ({ x, y, w = 70, h = 36, color = 'teal', label, rx = 6, fontSize = 14 }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={rx}
      fill={C[color].fill} stroke={C[color].stroke} strokeWidth="0.5"/>
    <text x={x + w/2} y={y + h/2} textAnchor="middle" dominantBaseline="central"
      fontSize={fontSize} fontWeight="500" fill={C[color].text}>{label}</text>
  </g>
)

const Section = ({ title, children }) => (
  <section style={{ marginBottom: 48 }}>
    <h2 style={{
      fontSize: 20, fontWeight: 600, marginBottom: 16,
      color: 'var(--accent, #ffa116)',
      borderBottom: '1px solid var(--border, #2a2a28)',
      paddingBottom: 8,
    }}>{title}</h2>
    {children}
  </section>
)

const P = ({ children }) => (
  <p style={{ fontSize: 15, lineHeight: 1.7, margin: '10px 0', color: 'var(--text-secondary, #a0a0a0)' }}>
    {children}
  </p>
)

const Code = ({ children }) => (
  <pre style={{
    background: 'var(--bg-tertiary, #1a1a18)', borderRadius: 8,
    padding: '14px 18px', fontSize: 12, lineHeight: 1.7,
    overflowX: 'auto', margin: '12px 0', fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    border: '1px solid var(--border, #2a2a28)',
    color: '#d4d4d4',
  }}>
    <code>{children}</code>
  </pre>
)

const Callout = ({ children }) => (
  <div style={{
    background: C.amber.fill, border: `1px solid ${C.amber.stroke}`,
    borderLeft: `3px solid ${C.amber.stroke}`,
    borderRadius: 8, padding: '10px 14px', margin: '12px 0',
    fontSize: 13, color: C.amber.text, lineHeight: 1.6,
  }}>
    ⚠️ {children}
  </div>
)

const Tip = ({ children }) => (
  <div style={{
    background: C.teal.fill, border: `1px solid ${C.teal.stroke}`,
    borderLeft: `3px solid ${C.teal.stroke}`,
    borderRadius: 8, padding: '10px 14px', margin: '12px 0',
    fontSize: 13, color: C.teal.text, lineHeight: 1.6,
  }}>
    💡 {children}
  </div>
)

const TabGroup = ({ tabs, active, onChange }) => (
  <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
    {tabs.map((t, i) => (
      <button key={i} onClick={() => onChange(i)} style={{
        padding: '6px 14px', borderRadius: 6, fontSize: 13, cursor: 'pointer',
        fontFamily: 'inherit', transition: 'all 0.15s',
        background: active === i ? 'rgba(255,161,22,0.12)' : 'var(--bg-tertiary, #1a1a18)',
        border: `1px solid ${active === i ? 'rgba(255,161,22,0.3)' : 'var(--border, #2a2a28)'}`,
        color: active === i ? 'var(--accent, #ffa116)' : 'var(--text-muted, #777)',
        fontWeight: active === i ? 600 : 400,
      }}>{t}</button>
    ))}
  </div>
)


/* ═══════════════════════════════════════════════════
   1. CONCETTO
   ═══════════════════════════════════════════════════ */
const Concept = () => (
  <Section title="Overloading degli operatori">
    <P>
      In C++ puoi dare un significato personalizzato agli operatori standard (<code>=</code>,{' '}
      <code>+</code>, <code>*</code>, <code>[]</code>, …) per i tuoi tipi. Il codice che usa
      la classe diventa più naturale e leggibile.
    </P>
    <svg width="100%" viewBox="0 0 540 140" style={{ maxWidth: 540, display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      {/* expression */}
      <Box x={20}  y={50} w={55} h={38} color="amber" label="c" fontSize={16}/>
      <Box x={85}  y={50} w={40} h={38} color="coral" label="="  fontSize={18}/>
      <Box x={135} y={50} w={55} h={38} color="teal"  label="a" fontSize={16}/>
      {/* translated */}
      <text x={215} y={73} fontSize={14} fill="#555">≡</text>
      <Box x={240} y={50} w={55} h={38} color="amber"  label="c" fontSize={16}/>
      <text x={298} y={73} fontSize={12} fill="#666">.</text>
      <Box x={306} y={50} w={150} h={38} color="purple" label="operator=(a)" fontSize={11}/>
      {/* labels */}
      <text x={47} y={108} textAnchor="middle" fontSize={11} fill={C.amber.text}>this</text>
      <text x={155} y={108} textAnchor="middle" fontSize={11} fill={C.teal.text}>argomento</text>
      <text x={380} y={108} textAnchor="middle" fontSize={11} fill={C.purple.text}>chiamata al metodo</text>
      <line x1={47} y1={100} x2={47} y2={90} stroke={C.amber.stroke} strokeWidth="1"/>
      <line x1={155} y1={100} x2={155} y2={90} stroke={C.teal.stroke} strokeWidth="1"/>
    </svg>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10, margin: '16px 0' }}>
      {[
        { op: '=',  desc: 'assegnamento',   ok: true },
        { op: '+',  desc: 'concatenazione', ok: true },
        { op: '*',  desc: 'ripetizione',    ok: true },
        { op: '[]', desc: 'accesso idx',    ok: true },
        { op: '<<', desc: 'stampa',         ok: true },
        { op: '.',  desc: 'accesso membro', ok: false },
        { op: '::',  desc: 'scope',          ok: false },
        { op: '?:',  desc: 'ternario',       ok: false },
      ].map(({ op, desc, ok }) => (
        <div key={op} style={{
          background: ok ? C.teal.fill : C.red.fill,
          border: `1px solid ${ok ? C.teal.stroke : C.red.stroke}`,
          borderRadius: 6, padding: '10px 12px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 18, fontWeight: 700,
            color: ok ? C.teal.text : C.red.text, marginBottom: 4 }}>{op}</div>
          <div style={{ fontSize: 11, color: '#777' }}>{desc}</div>
          <div style={{ fontSize: 10, marginTop: 4, color: ok ? C.green.text : C.red.text }}>
            {ok ? '✓ overloadable' : '✗ non overloadable'}
          </div>
        </div>
      ))}
    </div>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. OPERATOR=
   ═══════════════════════════════════════════════════ */
const AssignOp = () => (
  <Section title="operator= (assegnamento)">
    <P>
      L'operatore <code>=</code> deve prima deallocare la lista corrente, poi copiare
      la lista sorgente nodo per nodo. Ritorna <code>const List&amp;</code> per supportare
      le catene di assegnamento (<code>c = a = b</code>).
    </P>

    {/* chain visualization */}
    <svg width="100%" viewBox="0 0 500 100" style={{ maxWidth: 500, display: 'block', margin: '12px auto' }}>
      <ArrowDef/>
      {/* c = a = b */}
      <Box x={10}  y={32} w={40} h={34} color="amber" label="c" fontSize={16}/>
      <text x={58} y={52} fontSize={16} fill={C.coral.text}>=</text>
      <Box x={70}  y={32} w={40} h={34} color="teal"  label="a" fontSize={16}/>
      <text x={118} y={52} fontSize={16} fill={C.coral.text}>=</text>
      <Box x={130} y={32} w={40} h={34} color="purple" label="b" fontSize={16}/>
      {/* steps */}
      <text x={290} y={26} fontSize={11} fill="#555">si valuta destra→sinistra:</text>
      <text x={290} y={42} fontSize={11} fill={C.teal.text}>1. a.operator=(b)  → ritorna a</text>
      <text x={290} y={56} fontSize={11} fill={C.amber.text}>2. c.operator=(a)  → ritorna c</text>
    </svg>

    <Code>{`const List& List::operator=(const List& s) {
    if (this == &s) return *this;    // auto-assegnamento a = a

    // 1. dealloca la lista corrente
    while (head != nullptr) {
        Cella* tmp = head;
        head = head->next;
        delete tmp;
    }

    // 2. copia nodo per nodo dalla sorgente
    head = nullptr;
    Cella* tail = nullptr;
    Cella* pcs = s.head;

    while (pcs != nullptr) {
        Cella* nuovo = new Cella;
        nuovo->info = pcs->info;
        nuovo->next = nullptr;

        if (head == nullptr) { head = nuovo; tail = nuovo; }
        else { tail->next = nuovo; tail = nuovo; }

        pcs = pcs->next;
    }
    return *this;
}`}</Code>

    <Callout>
      Controlla sempre l'auto-assegnamento <code>if (this == &amp;s)</code> per prima cosa.
      Se deallocassi prima e poi copiassi da <code>s</code>, e <code>s</code> fosse lo stesso
      oggetto, perderesti tutti i dati.
    </Callout>

    <Tip>
      <code>this</code> è un puntatore all'oggetto che esegue il metodo. <code>*this</code> è
      l'oggetto stesso — si usa per ritornare un riferimento a se stessi.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   3. OPERATOR+
   ═══════════════════════════════════════════════════ */
const PlusSVG = () => (
  <svg width="100%" viewBox="0 0 560 90" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    {/* List A */}
    {[10, 20, 30].map((v, i) => (
      <g key={i}>
        <Box x={10 + i * 68} y={25} w={60} h={34} color="amber" label={v} fontSize={12}/>
        {i < 2 && <line x1={70 + i * 68} y1={42} x2={78 + i * 68} y2={42} stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>}
      </g>
    ))}
    <text x={110} y={14} textAnchor="middle" fontSize={11} fill={C.amber.text}>*this (lista A)</text>
    {/* + */}
    <text x={226} y={47} fontSize={20} fill={C.coral.text}>+</text>
    {/* List B */}
    {[40, 50].map((v, i) => (
      <g key={i}>
        <Box x={250 + i * 68} y={25} w={60} h={34} color="teal" label={v} fontSize={12}/>
        {i < 1 && <line x1={310 + i * 68} y1={42} x2={318 + i * 68} y2={42} stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>}
      </g>
    ))}
    <text x={285} y={14} textAnchor="middle" fontSize={11} fill={C.teal.text}>l (lista B)</text>
    {/* = */}
    <text x={398} y={47} fontSize={20} fill={C.coral.text}>=</text>
    {/* Result */}
    <text x={420} y={14} fontSize={11} fill={C.purple.text}>risultato</text>
    {[10, 20, 30, 40, 50].map((v, i) => (
      <g key={i}>
        <Box x={420 + i * 28} y={25} w={26} h={34} color="purple" label={v} fontSize={9}/>
      </g>
    ))}
  </svg>
)

const SumOp = () => (
  <Section title="operator+ (concatenazione)">
    <P>
      L'operatore <code>+</code> concatena due liste restituendo una nuova lista che contiene
      tutti i nodi della prima seguiti da quelli della seconda. L'originale non viene modificato.
    </P>
    <PlusSVG/>
    <Code>{`const List List::operator+(const List& l) const {
    List res = *this;            // copy constructor: copia di *this

    Cella* pc = l.head;
    while (pc) {
        res.append(pc->info);    // aggiunge in coda i nodi di l
        pc = pc->next;
    }
    return res;
}

// Esempio:
// a = [10 → 20 → 30]
// b = [40 → 50]
// a + b = [10 → 20 → 30 → 40 → 50]`}</Code>
    <Tip>
      Il metodo è marcato <code>const</code> perché non modifica <code>*this</code>.
      Ritorna per valore (non per riferimento) perché <code>res</code> è una variabile locale.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   4. OPERATOR*
   ═══════════════════════════════════════════════════ */
const MulSVG = () => (
  <svg width="100%" viewBox="0 0 460 90" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    {/* A */}
    {[1, 2, 3].map((v, i) => (
      <g key={i}>
        <Box x={10 + i * 50} y={25} w={44} h={34} color="amber" label={v} fontSize={12}/>
        {i < 2 && <line x1={54 + i * 50} y1={42} x2={60 + i * 50} y2={42} stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>}
      </g>
    ))}
    <text x={80} y={14} textAnchor="middle" fontSize={11} fill={C.amber.text}>*this</text>
    <text x={175} y={47} fontSize={18} fill={C.coral.text}>× 2</text>
    <text x={220} y={47} fontSize={18} fill={C.coral.text}>=</text>
    {/* result */}
    {[1, 2, 3, 1, 2, 3].map((v, i) => (
      <g key={i}>
        <Box x={245 + i * 36} y={25} w={32} h={34} color="purple" label={v} fontSize={11}/>
      </g>
    ))}
    <text x={357} y={14} textAnchor="middle" fontSize={11} fill={C.purple.text}>lista raddoppiata</text>
  </svg>
)

const MulOp = () => (
  <Section title="operator* (ripetizione)">
    <P>
      L'operatore <code>*</code> definisce la ripetizione della lista: <code>list * 3</code>{' '}
      crea una nuova lista con i nodi della lista originale ripetuti 3 volte in sequenza.
    </P>
    <MulSVG/>
    <Code>{`List List::operator*(int n) const {
    List res;
    while (n > 0) {
        res = res + (*this);   // concatena *this alla coda di res
        n--;
    }
    return res;
}

// Per il caso "3 * lista" (int a sinistra) serve una funzione libera:
List operator+(int m, const List& l) {
    return l * m;
}`}</Code>
    <Callout>
      Quando l'operando sinistro è un tipo primitivo (<code>int</code>), non si può usare un
      metodo membro — serve una <strong>funzione libera</strong> (o <code>friend</code>)
      con la firma <code>operator*(int, const List&amp;)</code>.
    </Callout>
  </Section>
)


/* ═══════════════════════════════════════════════════
   5. OPERATORI NON OVERLOADABLE
   ═══════════════════════════════════════════════════ */
const NotOverloadable = () => (
  <Section title="Regole e operatori non overloadabili">
    <P>
      Non tutti gli operatori possono essere sovraccaricati. Quelli esclusi hanno semantiche
      fondamentali del linguaggio che non possono essere cambiate.
    </P>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, margin: '12px 0' }}>
      {[
        { op: '.', reason: 'Accesso ai membri — semantica fissa del compilatore' },
        { op: '::', reason: 'Scope resolution — risolto a compile-time' },
        { op: '?:', reason: 'Operatore ternario — valutazione lazy non supportata' },
        { op: 'sizeof', reason: 'Calcolato a compile-time sul tipo, non sull\'oggetto' },
      ].map(({ op, reason }) => (
        <div key={op} style={{
          background: C.red.fill, border: `1px solid ${C.red.stroke}`,
          borderRadius: 8, padding: '12px',
        }}>
          <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 16, fontWeight: 700,
            color: C.red.text, marginBottom: 6 }}>{op}</div>
          <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>{reason}</div>
        </div>
      ))}
    </div>
    <Tip>
      La precedenza e l'associatività degli operatori <strong>non possono essere cambiate</strong>{' '}
      dall'overloading. <code>a + b * c</code> chiamerà sempre prima <code>operator*</code>.
    </Tip>
  </Section>
)


export default function OverloadingNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <Concept/>
      <AssignOp/>
      <SumOp/>
      <MulOp/>
      <NotOverloadable/>
    </article>
  )
}
