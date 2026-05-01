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
    <marker id="arr-rev" viewBox="0 0 10 10" refX="2" refY="5"
      markerWidth="6" markerHeight="6" orient="auto">
      <path d="M8 1L2 5L8 9" fill="none" stroke="context-stroke"
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

const vals = [12, 34, 56, 78]


/* ═══════════════════════════════════════════════════
   1. STRUTTURA NODO
   ═══════════════════════════════════════════════════ */
const NodeStructure = () => (
  <Section title="Struttura del nodo">
    <P>
      A differenza della lista semplice, ogni nodo di una <strong>doubly linked list</strong> ha
      tre campi: il dato, un puntatore al nodo <code>next</code> (successivo) e uno al nodo{' '}
      <code>prev</code> (precedente). Questo permette di scorrere la lista in entrambe le direzioni.
    </P>
    <svg width="100%" viewBox="0 0 480 100" style={{ maxWidth: 480, display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      <Box x={50}  y={20} w={100} h={44} color="purple" label="prev"  fontSize={13}/>
      <Box x={160} y={20} w={160} h={44} color="teal"   label="info"  fontSize={13}/>
      <Box x={330} y={20} w={100} h={44} color="amber"  label="next"  fontSize={13}/>
      <text x={100} y={90} textAnchor="middle" fontSize={11} fill={C.purple.text}>ptr al precedente</text>
      <text x={240} y={90} textAnchor="middle" fontSize={11} fill={C.teal.text}>dato</text>
      <text x={380} y={90} textAnchor="middle" fontSize={11} fill={C.amber.text}>ptr al successivo</text>
    </svg>
    <Code>{`struct Cella {
    int    info;
    Cella* next;   // puntatore al nodo successivo
    Cella* prev;   // puntatore al nodo precedente
};`}</Code>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. TRAVERSAL BIDIREZIONALE
   ═══════════════════════════════════════════════════ */
const BiTraversal = () => {
  const [dir, setDir] = useState('fwd')
  const [pos, setPos] = useState(0)

  const maxPos = vals.length - 1
  const xs = [60, 175, 290, 405]
  const nodeW = 80

  const fwdDone  = dir === 'fwd' && pos > maxPos
  const bwdDone  = dir === 'bwd' && pos < 0

  const status = fwdDone
    ? 'current == nullptr → fine avanti'
    : bwdDone
      ? 'current == nullptr → fine indietro'
      : `current → nodo ${vals[dir === 'fwd' ? pos : maxPos - pos]}`

  const activeIdx = dir === 'fwd' ? pos : maxPos - pos

  const setForward  = () => { setDir('fwd'); setPos(0) }
  const setBackward = () => { setDir('bwd'); setPos(0) }
  const next = () => setPos(p => p + 1)
  const prev = () => setPos(p => p - 1)

  return (
    <Section title="Traversal bidirezionale">
      <P>
        Con <code>head</code> e <code>tail</code> è possibile scorrere la lista sia in avanti
        che all'indietro senza bisogno di ricominciare da capo.
      </P>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        <StepBtn onClick={setForward}>← Avanti (head→tail)</StepBtn>
        <StepBtn onClick={setBackward}>Indietro (tail→head) →</StepBtn>
      </div>

      <svg width="100%" viewBox="0 0 540 140" style={{ display: 'block', margin: '8px auto' }}>
        <ArrowDef/>
        {/* head / tail labels */}
        <Box x={0}   y={42} w={50} h={34} color="gray" label="head" fontSize={11}/>
        <Arrow x1={50} y1={59} x2={58} y2={59}/>
        <Box x={480} y={42} w={50} h={34} color="gray" label="tail" fontSize={11}/>
        <line x1={xs[3]+nodeW} y1={59} x2={480} y2={59} stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>

        {/* nodes */}
        {vals.map((v, i) => (
          <g key={i}>
            <Box x={xs[i]} y={42} w={nodeW} h={34}
              color={!fwdDone && !bwdDone && i === activeIdx ? 'amber' : 'teal'}
              label={v} fontSize={13}/>
            {/* forward arrows (top) */}
            {i < vals.length - 1 && (
              <path d={`M${xs[i]+nodeW} 50 Q${xs[i]+nodeW+8} 40 ${xs[i+1]} 50`}
                fill="none" stroke={C.amber.stroke} strokeWidth="1.2" markerEnd="url(#arr)"/>
            )}
            {/* backward arrows (bottom) */}
            {i > 0 && (
              <path d={`M${xs[i]} 68 Q${xs[i]-8} 80 ${xs[i-1]+nodeW} 68`}
                fill="none" stroke={C.purple.stroke} strokeWidth="1.2" markerEnd="url(#arr)"/>
            )}
          </g>
        ))}

        {/* current indicator */}
        {!fwdDone && !bwdDone && (
          <>
            <rect x={xs[activeIdx] - 2} y={40} width={nodeW + 4} height={38} rx={8}
              fill="none" stroke={C.coral.stroke} strokeWidth={2}/>
            <text x={xs[activeIdx] + nodeW/2} y={110} textAnchor="middle"
              fontSize={11} fontWeight="500" fill={C.coral.text}>current</text>
            <line x1={xs[activeIdx] + nodeW/2} y1={102} x2={xs[activeIdx] + nodeW/2} y2={82}
              stroke={C.coral.stroke} strokeWidth={1.5} markerEnd="url(#arr)"/>
          </>
        )}

        {/* legend */}
        <line x1={10} y1={125} x2={40} y2={125} stroke={C.amber.stroke} strokeWidth="1.5"/>
        <text x={44} y={129} fontSize={10} fill={C.amber.text}>next</text>
        <line x1={80} y1={125} x2={110} y2={125} stroke={C.purple.stroke} strokeWidth="1.5"/>
        <text x={114} y={129} fontSize={10} fill={C.purple.text}>prev</text>
      </svg>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
        <StepBtn onClick={next} disabled={(dir==='fwd' && pos > maxPos) || (dir==='bwd' && pos > maxPos)}>
          {dir === 'fwd' ? 'Avanti →' : '← Avanti'}
        </StepBtn>
        <StepBtn onClick={() => { setDir(dir); setPos(0) }}>Reset</StepBtn>
      </div>
      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777' }}>
        {status}
      </div>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   3. PREPEND / APPEND
   ═══════════════════════════════════════════════════ */
const InsertOps = () => {
  const [tab, setTab] = useState(0)

  const PrependSVG = () => (
    <svg width="100%" viewBox="0 0 560 160" style={{ display: 'block', margin: '12px auto' }}>
      <ArrowDef/>
      <Box x={0}   y={60} w={55} h={36} color="gray"  label="head" fontSize={12}/>
      <Box x={110} y={5}  w={80} h={36} color="coral" label="nuovo"/>
      <text x={200} y={24} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
      {/* ① nuovo->next = head */}
      <path d="M150 41 L150 60 L180 60" fill="none" stroke={C.coral.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={160} y={55} fontSize={10} fill={C.coral.text}>①next</text>
      {/* ② head->prev = nuovo */}
      <path d="M180 68 L165 68 L165 28 L148 28" fill="none" stroke={C.purple.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={155} y={80} fontSize={10} fill={C.purple.text}>②prev</text>
      {/* ③ head = nuovo */}
      <path d="M27 78 L27 110 L115 110 L115 43" fill="none" stroke={C.coral.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={60} y={122} fontSize={10} fill={C.coral.text}>③head=nuovo</text>
      <Arrow x1={55} y1={78} x2={178} y2={78}/>
      <Box x={180} y={60} w={70} h={36} color="teal" label="12"/>
      <Arrow x1={250} y1={78} x2={288} y2={78}/>
      <Box x={290} y={60} w={70} h={36} color="teal" label="34"/>
      <text x={380} y={82} fontSize={14} fill="#555">…</text>
    </svg>
  )

  const AppendSVG = () => (
    <svg width="100%" viewBox="0 0 560 160" style={{ display: 'block', margin: '12px auto' }}>
      <ArrowDef/>
      <Box x={0}   y={60} w={55} h={36} color="gray"  label="tail" fontSize={12}/>
      <Box x={110} y={5}  w={80} h={36} color="coral" label="nuovo"/>
      <text x={200} y={24} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
      {/* ① nuovo->prev = tail */}
      <path d="M150 41 L150 60 L145 60" fill="none" stroke={C.purple.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={155} y={56} fontSize={10} fill={C.purple.text}>①prev</text>
      {/* ② tail->next = nuovo */}
      <path d="M55 78 L95 78 Q100 78 100 70 L100 25 L108 25" fill="none" stroke={C.coral.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={58} y={95} fontSize={10} fill={C.coral.text}>②tail→next</text>
      {/* ③ tail = nuovo */}
      <path d="M27 78 L27 130 L150 130 L150 43" fill="none" stroke={C.amber.stroke}
        strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
      <text x={80} y={144} fontSize={10} fill={C.amber.text}>③tail=nuovo</text>
      <text x={60} y={82} fontSize={14} fill="#555">…</text>
      <Box x={90} y={60} w={70} h={36} color="teal" label="56"/>
    </svg>
  )

  const codes = [
`void ListDL::prepend(int n) {
    Cella* pc = new Cella{n, head, nullptr};
    if (head == nullptr) {
        head = pc;
        tail = pc;
    } else {
        head->prev = pc;   // ② il vecchio head punta indietro al nuovo
        head = pc;         // ③ head aggiornato
    }
}`,
`void ListDL::append(int n) {
    Cella* pc = new Cella{n, nullptr, tail};
    if (tail == nullptr) {
        head = pc;
        tail = pc;
    } else {
        tail->next = pc;   // ② il vecchio tail punta avanti al nuovo
        tail = pc;         // ③ tail aggiornato
    }
}`,
  ]

  return (
    <Section title="Inserimento: Prepend e Append">
      <TabGroup tabs={['Prepend (in testa) — O(1)', 'Append (in coda) — O(1)']}
        active={tab} onChange={setTab}/>
      {tab === 0 ? <PrependSVG/> : <AppendSVG/>}
      <Code>{codes[tab]}</Code>
      <Tip>
        Entrambe le operazioni sono <strong>O(1)</strong> grazie ai puntatori <code>head</code> e <code>tail</code>.
        Aggiorna sempre tutti e quattro i link coinvolti nell'ordine giusto.
      </Tip>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   4. REMOVE
   ═══════════════════════════════════════════════════ */
const RemoveSVG = () => (
  <svg width="100%" viewBox="0 0 560 140" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={20}  y={50} w={70} h={36} color="teal" label="12"/>
    <Box x={130} y={50} w={70} h={36} color="red"  label="34"/>
    <line x1={130} y1={50} x2={200} y2={86} stroke={C.red.stroke} strokeWidth="1.5"/>
    <line x1={200} y1={50} x2={130} y2={86} stroke={C.red.stroke} strokeWidth="1.5"/>
    <text x={165} y={110} textAnchor="middle" fontSize={11} fill={C.red.text}>da eliminare</text>
    <Box x={240} y={50} w={70} h={36} color="teal" label="56"/>
    <Box x={350} y={50} w={70} h={36} color="teal" label="78"/>
    {/* bypass forward */}
    <path d="M90 56 Q160 20 240 56" fill="none" stroke={C.coral.stroke}
      strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={165} y={18} textAnchor="middle" fontSize={10} fill={C.coral.text}>prev→next = curr→next</text>
    {/* bypass backward */}
    <path d="M240 80 Q165 118 90 80" fill="none" stroke={C.purple.stroke}
      strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={165} y={130} textAnchor="middle" fontSize={10} fill={C.purple.text}>next→prev = curr→prev</text>
    {/* forward arrows */}
    <Arrow x1={90} y1={64} x2={128} y2={64}/>
    <Arrow x1={200} y1={64} x2={238} y2={64}/>
    <Arrow x1={310} y1={64} x2={348} y2={64}/>
  </svg>
)

const RemoveOps = () => {
  const [tab, setTab] = useState(0)

  const codes = [
`void ListDL::remove(int pos) {
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
}`,
`void ListDL::remove_rec(Cella*& curr, Cella*& t, int pos) {
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
}`,
  ]

  return (
    <Section title="Rimozione">
      <P>
        Per rimuovere un nodo bisogna aggiornare <strong>quattro link</strong>: il <code>next</code> del
        precedente e il <code>prev</code> del successivo. Se il nodo è in testa o in coda, bisogna
        aggiornare anche <code>head</code> o <code>tail</code>.
      </P>
      <RemoveSVG/>
      <TabGroup tabs={['Iterativa', 'Ricorsiva']}
        active={tab} onChange={setTab}/>
      <Code>{codes[tab]}</Code>
      <Callout>
        Aggiorna <strong>sempre entrambe le direzioni</strong>: se aggiorni solo <code>prev→next</code>
        e dimentichi <code>next→prev</code>, la lista è corrotta per lo scorrimento all'indietro.
      </Callout>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   5. COPY CONSTRUCTOR / DESTRUCTOR
   ═══════════════════════════════════════════════════ */
const MemoryOps = () => {
  const [tab, setTab] = useState(0)
  const codes = [
`ListDL::~ListDL() {
    Cella* cur = head;
    while (cur != nullptr) {
        Cella* tmp = cur;
        cur = cur->next;
        delete tmp;              // dealloca nodo per nodo
    }
    head = nullptr;
    tail = nullptr;
}`,
`ListDL::ListDL(const ListDL& other) {
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
}`,
  ]
  return (
    <Section title="Distruttore e Copy Constructor">
      <TabGroup tabs={['Distruttore', 'Copy Constructor']}
        active={tab} onChange={setTab}/>
      <Code>{codes[tab]}</Code>
      {tab === 0 && (
        <Tip>
          Il distruttore scorre la lista tenendo un puntatore <code>tmp</code> al nodo da
          eliminare prima di avanzare, per non perdere il puntatore al successivo.
        </Tip>
      )}
      {tab === 1 && (
        <Tip>
          Il copy constructor imposta <code>prev</code> di ogni nuovo nodo a <code>tail</code>{' '}
          prima di avanzare <code>tail</code> — così i link all'indietro sono sempre corretti.
        </Tip>
      )}
    </Section>
  )
}


export default function DoubleLinkedListNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <NodeStructure/>
      <BiTraversal/>
      <InsertOps/>
      <RemoveOps/>
      <MemoryOps/>
    </article>
  )
}
