import { useState, useRef, useEffect, useCallback } from 'react'

/* ─── Dark Palette (matches app theme) ─── */
const C = {
  teal:   { fill: '#0a2e24', stroke: '#1D9E75', text: '#5DCAA5' },
  amber:  { fill: '#2a1d06', stroke: '#BA7517', text: '#EF9F27' },
  coral:  { fill: '#2a1209', stroke: '#D85A30', text: '#F0997B' },
  gray:   { fill: '#1e1e1c', stroke: '#5F5E5A', text: '#B4B2A9' },
  red:    { fill: '#2a0f0f', stroke: '#A32D2D', text: '#F09595' },
  green:  { fill: '#142008', stroke: '#639922', text: '#97C459' },
  purple: { fill: '#1a1834', stroke: '#7F77DD', text: '#AFA9EC' },
}

/* ─── Reusable SVG pieces ─── */
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

const Arrow = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>
)

/* ─── Section wrapper ─── */
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

const StepBtn = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} style={{
    padding: '6px 14px', borderRadius: 6, fontSize: 13, cursor: disabled ? 'default' : 'pointer',
    fontFamily: 'inherit', border: '1px solid var(--border, #2a2a28)',
    background: 'var(--bg-tertiary, #1a1a18)', color: 'var(--text-secondary, #a0a0a0)',
    opacity: disabled ? 0.35 : 1, transition: 'opacity 0.15s',
  }}>{children}</button>
)


/* ═══════════════════════════════════════════════════
   1. STRUTTURA DI UN NODO
   ═══════════════════════════════════════════════════ */
const NodeStructure = () => (
  <Section title="Struttura di un nodo">
    <P>
      Ogni nodo di una linked list è composto da due campi: <code>info</code> contiene
      il dato vero e proprio, mentre <code>link</code> è un puntatore che memorizza
      l'indirizzo del nodo successivo nella catena.
    </P>
    <svg width="100%" viewBox="0 0 500 100" style={{ maxWidth: 500, display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      <Box x={110} y={15} w={130} h={55} color="teal" label="info"/>
      <Box x={240} y={15} w={130} h={55} color="amber" label="link"/>
      <text x={175} y={90} textAnchor="middle" fontSize={12} fill="#777">dato (es. int)</text>
      <text x={305} y={90} textAnchor="middle" fontSize={12} fill="#777">puntatore al prossimo</text>
    </svg>
    <Code>{`struct nodeType {
    int info;           // il dato
    nodeType *link;     // puntatore a un altro nodeType
};

nodeType *head;         // puntatore all'inizio della lista`}</Code>
    <P>
      Il campo <code>link</code> è un puntatore allo stesso tipo <code>nodeType</code> —
      è questo che permette di creare la catena di nodi. <code>head</code> è un puntatore
      che tiene traccia di dove inizia la lista.
    </P>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. LISTA COMPLETA
   ═══════════════════════════════════════════════════ */
const nodes = [
  { val: 17, addr: 2000 },
  { val: 92, addr: 2800 },
  { val: 63, addr: 1500 },
  { val: 45, addr: 3600 },
]

const FullList = () => (
  <Section title="Una linked list completa">
    <P>
      Ecco una lista con 4 nodi. <code>head</code> punta al primo nodo (indirizzo 2000),
      e ogni nodo punta al successivo tramite il suo campo <code>link</code>. L'ultimo nodo
      ha <code>link = nullptr</code>.
    </P>
    <svg width="100%" viewBox="0 0 620 110" style={{ display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      <Box x={0} y={25} w={60} h={36} color="gray" label="head" fontSize={13}/>
      <Arrow x1={60} y1={43} x2={88} y2={43}/>
      {nodes.map((n, i) => {
        const x = 90 + i * 125
        return (
          <g key={i}>
            <Box x={x} y={25} w={55} h={36} color="teal" label={n.val}/>
            <Box x={x + 55} y={25} w={35} h={36} color="amber"
              label={i < 3 ? '→' : '⊥'} fontSize={12}/>
            {i < 3 && <Arrow x1={x + 90} y1={43} x2={x + 123} y2={43}/>}
            <text x={x + 45} y={80} textAnchor="middle" fontSize={10} fill="#555">
              {n.addr}
            </text>
          </g>
        )
      })}
    </svg>
    <P>
      Con la notazione freccia si può accedere ai dati lungo la catena:
      <code>head→info</code> vale 17, <code>head→link→info</code> vale 92,
      e così via.
    </P>
    <Tip>
      <strong>head</strong> deve sempre puntare al primo nodo. Non usarlo mai per
      scorrere la lista, altrimenti perdi l'accesso ai nodi precedenti.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   3. TRAVERSAL INTERATTIVO
   ═══════════════════════════════════════════════════ */
const Traversal = () => {
  const [pos, setPos] = useState(0)
  const vals = [17, 92, 63, 45]
  const addrs = [2000, 2800, 1500, 3600]
  const xs = [90, 215, 340, 465]

  const status = pos < 4
    ? `current → nodo ${vals[pos]}  (indirizzo ${addrs[pos]})`
    : `current == nullptr → fine della lista!`

  return (
    <Section title="Traversal (scorrimento)">
      <P>
        Per scorrere la lista si usa un puntatore ausiliario <code>current</code> che
        parte da <code>head</code> e avanza nodo per nodo, senza perdere l'inizio.
      </P>
      <Code>{`current = head;

while (current != nullptr)
{
    // Processa current->info
    current = current->link;    // avanza al successivo
}`}</Code>
      <P>Prova a premere <strong>Avanti</strong> per vedere <code>current</code> che si muove:</P>

      <svg width="100%" viewBox="0 0 620 130" style={{ display: 'block', margin: '12px auto' }}>
        <ArrowDef/>
        <Box x={0} y={20} w={60} h={36} color="gray" label="head" fontSize={13}/>
        <Arrow x1={60} y1={38} x2={88} y2={38}/>
        {vals.map((v, i) => {
          const x = xs[i]
          return (
            <g key={i}>
              <Box x={x} y={20} w={80} h={36} color="teal" label={v}/>
              {i < 3 && <Arrow x1={x + 80} y1={38} x2={x + 123} y2={38}/>}
            </g>
          )
        })}
        <Box x={545} y={20} w={50} h={36} color="gray" label="null" fontSize={12}/>

        {pos < 4 && (
          <g style={{ transition: 'transform 0.3s ease', transform: `translateX(${xs[pos] - xs[0]}px)` }}>
            <rect x={xs[0] - 2} y={17} width={84} height={42} rx={8}
              fill="none" stroke={C.amber.stroke} strokeWidth={2}/>
            <text x={xs[0] + 40} y={85} textAnchor="middle" fontSize={12}
              fontWeight="500" fill={C.amber.text}>current</text>
            <line x1={xs[0] + 40} y1={76} x2={xs[0] + 40} y2={62}
              stroke={C.amber.stroke} strokeWidth={1.5} markerEnd="url(#arr)"/>
          </g>
        )}
        {pos >= 4 && (
          <g style={{ transition: 'transform 0.3s ease', transform: `translateX(${545 - xs[0]}px)` }}>
            <text x={xs[0] + 25} y={85} textAnchor="middle" fontSize={12}
              fontWeight="500" fill={C.red.text}>current = null</text>
            <line x1={xs[0] + 25} y1={76} x2={xs[0] + 25} y2={62}
              stroke={C.red.stroke} strokeWidth={1.5} markerEnd="url(#arr)"/>
          </g>
        )}
      </svg>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
        <StepBtn onClick={() => setPos(p => p - 1)} disabled={pos === 0}>← Indietro</StepBtn>
        <StepBtn onClick={() => setPos(p => p + 1)} disabled={pos >= 4}>Avanti →</StepBtn>
        <StepBtn onClick={() => setPos(0)}>Reset</StepBtn>
      </div>
      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777', minHeight: 20 }}>
        {status}
      </div>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   4. RICERCA INTERATTIVA
   ═══════════════════════════════════════════════════ */
const Search = () => {
  const vals = [17, 92, 63, 45]
  const xs = [90, 200, 310, 420]
  const [target, setTarget] = useState(63)
  const [step, setStep] = useState(-1)
  const [found, setFound] = useState(false)
  const timerRef = useRef(null)

  const reset = useCallback(() => {
    clearInterval(timerRef.current)
    setStep(-1)
    setFound(false)
  }, [])

  const startSearch = useCallback(() => {
    reset()
    let i = 0
    setStep(0)
    timerRef.current = setInterval(() => {
      if (vals[i] === target) {
        setFound(true)
        clearInterval(timerRef.current)
        return
      }
      i++
      if (i >= 4) {
        setStep(4)
        clearInterval(timerRef.current)
        return
      }
      setStep(i)
    }, 900)
  }, [target, reset])

  useEffect(() => () => clearInterval(timerRef.current), [])

  const getStatus = () => {
    if (step === -1) return 'Inserisci un valore e premi Cerca'
    if (found) return `✓ Trovato! ${target} è nel nodo corrente`
    if (step >= 4) return `✗ ${target} non trovato nella lista`
    return `current → ${vals[step]} | ${vals[step]} ${vals[step] === target ? '==' : '!='} ${target}`
  }

  return (
    <Section title="Ricerca (Search)">
      <P>
        Si scorre la lista con <code>current</code> confrontando ogni nodo con il valore
        cercato. Se lo troviamo ci fermiamo, altrimenti avanziamo. Se arriviamo
        a <code>nullptr</code>, l'elemento non esiste.
      </P>
      <Code>{`bool search(nodeType* head, int target) {
    nodeType* current = head;
    while (current != nullptr) {
        if (current->info == target)
            return true;            // trovato!
        current = current->link;
    }
    return false;                   // non trovato
}`}</Code>

      <svg width="100%" viewBox="0 0 540 120" style={{ display: 'block', margin: '12px auto', maxWidth: 540 }}>
        <ArrowDef/>
        <Box x={0} y={15} w={55} h={36} color="gray" label="head" fontSize={12}/>
        <Arrow x1={55} y1={33} x2={88} y2={33}/>
        {vals.map((v, i) => (
          <g key={i}>
            <Box x={xs[i]} y={15} w={70} h={36} color="teal" label={v}/>
            {i < 3 && <Arrow x1={xs[i]+70} y1={33} x2={xs[i]+108} y2={33}/>}
          </g>
        ))}
        <Box x={490} y={15} w={40} h={36} color="gray" label="∅" fontSize={12}/>

        {step >= 0 && step < 4 && (
          <g style={{ transition: 'transform 0.3s ease', transform: `translateX(${xs[step] - xs[0]}px)` }}>
            <rect x={xs[0] - 2} y={13} width={74} height={40} rx={8} fill="none"
              stroke={found ? C.green.stroke : C.amber.stroke} strokeWidth={2}/>
            <text x={xs[0] + 35} y={78} textAnchor="middle" fontSize={11}
              fontWeight="500" fill={found ? C.green.text : C.amber.text}>current</text>
            <line x1={xs[0]+35} y1={70} x2={xs[0]+35} y2={56}
              stroke={found ? C.green.stroke : C.amber.stroke} strokeWidth={1.5} markerEnd="url(#arr)"/>
          </g>
        )}
      </svg>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <label style={{ fontSize: 13, color: '#777' }}>Cerca:</label>
        <input type="number" value={target} onChange={e => { reset(); setTarget(Number(e.target.value)) }}
          style={{
            width: 60, padding: '4px 8px', borderRadius: 6, fontSize: 13,
            border: '1px solid var(--border, #2a2a28)', fontFamily: 'var(--font-mono, monospace)',
            background: 'var(--bg-tertiary, #1a1a18)', color: '#d4d4d4',
          }}/>
        <StepBtn onClick={startSearch}>Cerca</StepBtn>
        <StepBtn onClick={reset}>Reset</StepBtn>
      </div>
      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777' }}>
        {getStatus()}
      </div>
      <P>Complessità: <strong>O(n)</strong> nel caso peggiore (elemento in fondo o assente).</P>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   5. INSERIMENTO
   ═══════════════════════════════════════════════════ */
const InsertFrontSVG = () => (
  <svg width="100%" viewBox="0 0 560 160" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0} y={60} w={55} h={36} color="gray" label="head" fontSize={12}/>
    <Box x={110} y={5} w={80} h={36} color="coral" label="50"/>
    <text x={210} y={25} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
    <path d="M150 41 L150 60 L180 60" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={130} y={56} fontSize={10} fill={C.coral.text}>①</text>
    <path d="M27 96 L27 120 L120 120 L120 41" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={70} y={135} fontSize={10} fill={C.coral.text}>②</text>
    <Arrow x1={55} y1={78} x2={178} y2={78}/>
    <Box x={180} y={60} w={70} h={36} color="teal" label="17"/>
    <Arrow x1={250} y1={78} x2={288} y2={78}/>
    <Box x={290} y={60} w={70} h={36} color="teal" label="92"/>
    <Arrow x1={360} y1={78} x2={398} y2={78}/>
    <text x={420} y={82} fontSize={14} fill="#555">…</text>
  </svg>
)

const InsertBackSVG = () => (
  <svg width="100%" viewBox="0 0 520 150" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0} y={55} w={55} h={36} color="gray" label="head" fontSize={12}/>
    <Arrow x1={55} y1={73} x2={73} y2={73}/>
    <text x={90} y={54} fontSize={12} fill="#555">…</text>
    <Box x={120} y={55} w={70} h={36} color="teal" label="45"/>
    <text x={155} y={110} textAnchor="middle" fontSize={11} fill="#777">ultimo</text>
    <Box x={290} y={10} w={80} h={36} color="coral" label="99"/>
    <text x={390} y={30} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
    <Box x={370} y={10} w={50} h={36} color="gray" label="∅" fontSize={12}/>
    <path d="M190 73 L240 73 L240 28 L288 28" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={215} y={68} fontSize={10} fill={C.coral.text}>①</text>
  </svg>
)

const InsertMiddleSVG = () => (
  <svg width="100%" viewBox="0 0 580 170" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0} y={55} w={55} h={36} color="gray" label="head" fontSize={12}/>
    <Arrow x1={55} y1={73} x2={78} y2={73}/>
    <Box x={80} y={55} w={70} h={36} color="teal" label="17"/>
    <text x={115} y={110} textAnchor="middle" fontSize={11} fill={C.amber.text}>prev</text>
    <Arrow x1={150} y1={73} x2={228} y2={73}/>
    <Box x={230} y={55} w={70} h={36} color="teal" label="92"/>
    <Arrow x1={300} y1={73} x2={378} y2={73}/>
    <Box x={380} y={55} w={70} h={36} color="teal" label="63"/>
    <Arrow x1={450} y1={73} x2={485} y2={73}/>
    <text x={500} y={77} fontSize={14} fill="#555">…</text>
    <Box x={180} y={125} w={80} h={36} color="coral" label="50"/>
    <text x={280} y={145} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
    <path d="M260 143 L310 143 L310 93 L265 93" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={316} y={120} fontSize={10} fill={C.coral.text}>①</text>
    <path d="M115 91 L115 143 L178 143" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={140} y={138} fontSize={10} fill={C.coral.text}>②</text>
  </svg>
)

const Insert = () => {
  const [tab, setTab] = useState(0)

  const codes = [
`void insertFront(nodeType*& head, int val) {
    nodeType* newNode = new nodeType;
    newNode->info = val;
    newNode->link = head;       // ① nuovo punta al vecchio primo
    head = newNode;             // ② head ora punta al nuovo
}`,
`void insertBack(nodeType*& head, int val) {
    nodeType* newNode = new nodeType;
    newNode->info = val;
    newNode->link = nullptr;
    if (head == nullptr) { head = newNode; return; }

    nodeType* current = head;
    while (current->link != nullptr)
        current = current->link;    // trova l'ultimo
    current->link = newNode;        // ① ultimo punta al nuovo
}`,
`void insertAfter(nodeType* prev, int val) {
    nodeType* newNode = new nodeType;
    newNode->info = val;
    newNode->link = prev->link;     // ① nuovo punta al successivo
    prev->link = newNode;           // ② prev punta al nuovo
}`
  ]

  return (
    <Section title="Inserimento (Insert)">
      <P>Tre casi: inserire <strong>in testa</strong>, <strong>in coda</strong>, o <strong>nel mezzo</strong>.</P>
      <TabGroup tabs={['In testa — O(1)', 'In coda — O(n)', 'Nel mezzo — O(n)']}
        active={tab} onChange={setTab}/>

      {tab === 0 && <InsertFrontSVG/>}
      {tab === 1 && <InsertBackSVG/>}
      {tab === 2 && <InsertMiddleSVG/>}

      <Code>{codes[tab]}</Code>

      {tab === 2 && (
        <Callout>
          <strong>L'ordine è fondamentale!</strong> Se fai prima il passo ② (prev→link = newNode),
          perdi il riferimento al nodo 92 e a tutto il resto della lista.
        </Callout>
      )}
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   6. CANCELLAZIONE
   ═══════════════════════════════════════════════════ */
const DeleteFrontSVG = () => (
  <svg width="100%" viewBox="0 0 520 120" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0} y={35} w={55} h={36} color="gray" label="head" fontSize={12}/>
    <g opacity={0.45}>
      <Box x={100} y={35} w={70} h={36} color="red" label="17"/>
    </g>
    <line x1={100} y1={35} x2={170} y2={71} stroke={C.red.stroke} strokeWidth={1.5}/>
    <line x1={170} y1={35} x2={100} y2={71} stroke={C.red.stroke} strokeWidth={1.5}/>
    <text x={135} y={92} textAnchor="middle" fontSize={11} fill={C.red.text}>delete</text>
    <Arrow x1={170} y1={53} x2={218} y2={53}/>
    <Box x={220} y={35} w={70} h={36} color="teal" label="92"/>
    <Arrow x1={290} y1={53} x2={328} y2={53}/>
    <Box x={330} y={35} w={70} h={36} color="teal" label="63"/>
    <Arrow x1={400} y1={53} x2={435} y2={53}/>
    <text x={450} y={57} fontSize={14} fill="#555">…</text>
    <path d="M55 53 L70 53 Q80 53 80 40 L80 10 Q80 2 90 2 L220 2 Q230 2 230 12 L230 33"
      fill="none" stroke={C.coral.stroke} strokeWidth={1.5} strokeDasharray="4 3"
      markerEnd="url(#arr)"/>
    <text x={155} y={14} textAnchor="middle" fontSize={10} fill={C.coral.text}>head = head→link</text>
  </svg>
)

const DeleteMiddleSVG = () => (
  <svg width="100%" viewBox="0 0 530 120" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0} y={35} w={55} h={36} color="gray" label="head" fontSize={12}/>
    <Arrow x1={55} y1={53} x2={73} y2={53}/>
    <Box x={75} y={35} w={70} h={36} color="teal" label="17"/>
    <text x={110} y={92} textAnchor="middle" fontSize={11} fill={C.amber.text}>prev</text>
    <Arrow x1={145} y1={53} x2={178} y2={53}/>
    <g opacity={0.45}>
      <Box x={180} y={35} w={70} h={36} color="red" label="92"/>
    </g>
    <line x1={180} y1={35} x2={250} y2={71} stroke={C.red.stroke} strokeWidth={1.5}/>
    <line x1={250} y1={35} x2={180} y2={71} stroke={C.red.stroke} strokeWidth={1.5}/>
    <text x={215} y={92} textAnchor="middle" fontSize={11} fill={C.red.text}>delete</text>
    <Arrow x1={250} y1={53} x2={298} y2={53}/>
    <Box x={300} y={35} w={70} h={36} color="teal" label="63"/>
    <Arrow x1={370} y1={53} x2={405} y2={53}/>
    <text x={420} y={57} fontSize={14} fill="#555">…</text>
    <path d="M145 53 L155 53 Q162 53 162 42 L162 8 Q162 2 170 2 L310 2 Q320 2 320 12 L320 33"
      fill="none" stroke={C.coral.stroke} strokeWidth={1.5} strokeDasharray="4 3"
      markerEnd="url(#arr)"/>
    <text x={240} y={14} textAnchor="middle" fontSize={10} fill={C.coral.text}>prev→link = current→link</text>
  </svg>
)

const Delete = () => {
  const [tab, setTab] = useState(0)

  const codes = [
`void deleteFront(nodeType*& head) {
    if (head == nullptr) return;
    nodeType* temp = head;          // 1. salva il primo nodo
    head = head->link;              // 2. head avanza al secondo
    delete temp;                    // 3. dealloca la memoria
}`,
`void deleteNode(nodeType*& head, int target) {
    if (head == nullptr) return;
    if (head->info == target) {     // caso: è il primo nodo
        deleteFront(head);
        return;
    }
    nodeType* prev = head;
    nodeType* current = head->link;
    while (current != nullptr && current->info != target) {
        prev = current;
        current = current->link;
    }
    if (current != nullptr) {
        prev->link = current->link; // scavalca il nodo
        delete current;             // dealloca
    }
}`
  ]

  return (
    <Section title="Cancellazione (Delete)">
      <P>
        Prima di eliminare un nodo bisogna "riagganciare" il precedente al successivo,
        altrimenti si spezza la catena.
      </P>
      <TabGroup tabs={['In testa — O(1)', 'Nel mezzo — O(n)']}
        active={tab} onChange={setTab}/>

      {tab === 0 && <DeleteFrontSVG/>}
      {tab === 1 && <DeleteMiddleSVG/>}

      <Code>{codes[tab]}</Code>

      {tab === 1 && (
        <P>
          Il nodo 92 viene bypassato: 17 ora punta direttamente a 63. La memoria
          occupata dal nodo eliminato viene liberata con <code>delete</code>.
        </P>
      )}
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   7. RIEPILOGO COMPLESSITÀ
   ═══════════════════════════════════════════════════ */
const Summary = () => (
  <Section title="Riepilogo complessità">
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%', borderCollapse: 'collapse', fontSize: 14,
        margin: '12px 0',
      }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--accent, #ffa116)' }}>
            {['Operazione', 'Caso migliore', 'Caso peggiore'].map(h => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 12px', fontWeight: 600,
                color: 'var(--accent, #ffa116)', fontSize: 13,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Ricerca',                'O(1) — primo nodo', 'O(n)'],
            ['Inserimento in testa',   'O(1)',              'O(1)'],
            ['Inserimento in coda',    'O(n)',              'O(n)'],
            ['Inserimento nel mezzo',  'O(n)',              'O(n)'],
            ['Cancellazione in testa', 'O(1)',              'O(1)'],
            ['Cancellazione nel mezzo','O(n)',              'O(n)'],
          ].map(([op, best, worst], i) => (
            <tr key={i} style={{
              borderBottom: '1px solid var(--border, #2a2a28)',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
            }}>
              <td style={{ padding: '8px 12px', fontWeight: 500, color: 'var(--text-secondary, #a0a0a0)' }}>{op}</td>
              <td style={{ padding: '8px 12px', fontFamily: 'var(--font-mono, monospace)', fontSize: 13, color: '#d4d4d4' }}>{best}</td>
              <td style={{ padding: '8px 12px', fontFamily: 'var(--font-mono, monospace)', fontSize: 13, color: '#d4d4d4' }}>{worst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Callout>
      <strong>Ricorda:</strong> quando manipoli i puntatori, l'ordine delle operazioni conta.
      Se aggiorni un link prima di salvare il riferimento che conteneva, perdi nodi e hai un memory leak.
    </Callout>
  </Section>
)


/* ═══════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════ */
export default function LinkedListNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <NodeStructure/>
      <FullList/>
      <Traversal/>
      <Search/>
      <Insert/>
      <Delete/>
      <Summary/>
    </article>
  )
}