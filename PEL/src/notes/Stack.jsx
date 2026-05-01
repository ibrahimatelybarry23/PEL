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

const StepBtn = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} style={{
    padding: '6px 14px', borderRadius: 6, fontSize: 13, cursor: disabled ? 'default' : 'pointer',
    fontFamily: 'inherit', border: '1px solid var(--border, #2a2a28)',
    background: 'var(--bg-tertiary, #1a1a18)', color: 'var(--text-secondary, #a0a0a0)',
    opacity: disabled ? 0.35 : 1, transition: 'opacity 0.15s',
  }}>{children}</button>
)


/* ═══════════════════════════════════════════════════
   1. STRUTTURA LIFO
   ═══════════════════════════════════════════════════ */
const LifoStructure = () => (
  <Section title="Principio LIFO">
    <P>
      Lo <strong>Stack</strong> è una struttura dati lineare che segue il principio <strong>LIFO</strong>{' '}
      (<em>Last In, First Out</em>): l'ultimo elemento inserito è il primo a essere rimosso.
      Come una pila di piatti — si aggiunge e si rimuove sempre solo dalla cima.
    </P>
    <svg width="100%" viewBox="0 0 400 200" style={{ maxWidth: 400, display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      {/* Stack tower */}
      <Box x={130} y={130} w={140} h={40} color="teal"   label="Dato 1 (bottom)" fontSize={12}/>
      <Box x={130} y={88}  w={140} h={40} color="teal"   label="Dato 2"           fontSize={12}/>
      <Box x={130} y={46}  w={140} h={40} color="amber"  label="Dato 3 (top)"     fontSize={12}/>
      {/* Push arrow */}
      <Arrow x1={310} y1={30} x2={272} y2={46}/>
      <text x={315} y={26} fontSize={12} fill={C.coral.text} fontWeight="600">PUSH</text>
      {/* Pop arrow */}
      <Arrow x1={272} y1={46} x2={310} y2={30}/>
      <text x={315} y={42} fontSize={12} fill={C.green.text} fontWeight="600">POP</text>
      {/* TOP label */}
      <line x1={120} y1={66} x2={85} y2={66} stroke="#5F5E5A" strokeWidth="1" strokeDasharray="3 2"/>
      <text x={80} y={70} fontSize={11} fill={C.amber.text} textAnchor="end">top</text>
      {/* brackets */}
      <line x1={126} y1={44} x2={108} y2={44} stroke="#5F5E5A" strokeWidth="1"/>
      <line x1={126} y1={172} x2={108} y2={172} stroke="#5F5E5A" strokeWidth="1"/>
      <line x1={108} y1={44} x2={108} y2={172} stroke="#5F5E5A" strokeWidth="1"/>
    </svg>
    <Tip>
      Push e Pop avvengono <strong>sempre in cima</strong>. Non è possibile accedere agli elementi in mezzo senza rimuovere prima quelli sopra.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. PUSH / POP INTERATTIVO
   ═══════════════════════════════════════════════════ */
const StackDemo = () => {
  const [items, setItems] = useState([10, 30, 50])
  const [inputVal, setInputVal] = useState(70)
  const [lastOp, setLastOp] = useState(null)

  const push = () => {
    if (items.length >= 5) return
    setItems(prev => [...prev, inputVal])
    setLastOp(`push(${inputVal}) → aggiunto in cima`)
    setInputVal(v => v + 10)
  }

  const pop = () => {
    if (items.length === 0) return
    const top = items[items.length - 1]
    setItems(prev => prev.slice(0, -1))
    setLastOp(`pop() → rimosso ${top} dalla cima`)
  }

  const maxH = 5
  const boxH = 38
  const svgH = maxH * (boxH + 4) + 20
  const w = 160

  return (
    <Section title="Push e Pop — interattivo">
      <P>
        Premi <strong>Push</strong> per aggiungere un elemento in cima e <strong>Pop</strong> per rimuoverlo.
      </P>
      <svg width="100%" viewBox={`0 0 400 ${svgH + 20}`} style={{ display: 'block', margin: '12px auto', maxWidth: 400 }}>
        <ArrowDef/>
        {/* empty slots */}
        {Array.from({ length: maxH }).map((_, i) => (
          <rect key={i} x={120} y={10 + (maxH - 1 - i) * (boxH + 4)}
            width={w} height={boxH} rx={6}
            fill="transparent" stroke="#2a2a28" strokeWidth="1" strokeDasharray="4 3"/>
        ))}
        {/* filled items */}
        {items.map((v, i) => (
          <g key={i}>
            <Box x={120} y={10 + (maxH - 1 - i) * (boxH + 4)}
              w={w} h={boxH}
              color={i === items.length - 1 ? 'amber' : 'teal'}
              label={v} fontSize={13}/>
          </g>
        ))}
        {/* TOP label */}
        {items.length > 0 && (
          <>
            <text x={108} y={10 + (maxH - items.length) * (boxH + 4) + boxH / 2 + 4}
              textAnchor="end" fontSize={11} fill={C.amber.text}>top</text>
            <line x1={110} y1={10 + (maxH - items.length) * (boxH + 4) + boxH / 2}
              x2={120} y2={10 + (maxH - items.length) * (boxH + 4) + boxH / 2}
              stroke={C.amber.stroke} strokeWidth="1"/>
          </>
        )}
        {/* size label */}
        <text x={310} y={svgH - 2} fontSize={12} fill="#555">
          size: {items.length}/{maxH}
        </text>
      </svg>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginTop: 4 }}>
        <StepBtn onClick={push} disabled={items.length >= maxH}>Push {inputVal}</StepBtn>
        <StepBtn onClick={pop}  disabled={items.length === 0}>Pop</StepBtn>
      </div>
      {lastOp && (
        <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777' }}>
          {lastOp}
        </div>
      )}
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   3. IMPLEMENTAZIONE
   ═══════════════════════════════════════════════════ */
const Implementation = () => (
  <Section title="Implementazione con lista concatenata">
    <P>
      Usando una lista concatenata la cima dello stack corrisponde alla <code>head</code>.
      Push = inserimento in testa, Pop = rimozione dalla testa — entrambi <strong>O(1)</strong>.
    </P>
    <Code>{`struct Nodo {
    int info;
    Nodo* next;
};

struct Stack {
    Nodo* head = nullptr;

    void push(int valore) {
        Nodo* nuovo = new Nodo;
        nuovo->info = valore;
        nuovo->next = head;
        head = nuovo;             // nuovo diventa la cima
    }

    void pop() {
        if (head != nullptr) {
            Nodo* temp = head;
            head = head->next;    // la cima scende di un livello
            delete temp;
        }
    }

    int top() {
        if (head != nullptr) return head->info;
        return -1;
    }

    bool isEmpty() { return head == nullptr; }
};`}</Code>
    <Callout>
      Non dimenticare di fare <code>delete temp</code> nel Pop, altrimenti la memoria del nodo rimosso non viene liberata (memory leak).
    </Callout>
  </Section>
)


/* ═══════════════════════════════════════════════════
   4. CASI D'USO
   ═══════════════════════════════════════════════════ */
const UseCases = () => (
  <Section title="Casi d'uso">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, margin: '12px 0' }}>
      {[
        { icon: '📞', title: 'Call Stack', desc: 'Il runtime usa uno stack per tracciare le chiamate a funzione attive.' },
        { icon: '↩️', title: 'Undo / Redo', desc: 'Ogni azione viene pushed; Undo = pop dell\'ultima azione.' },
        { icon: '()', title: 'Parentesi', desc: 'Parsing di espressioni: verifica che ogni ( sia chiusa da ).' },
        { icon: '🔍', title: 'DFS', desc: 'Depth-First Search nei grafi usa esplicitamente uno stack.' },
      ].map(({ icon, title, desc }) => (
        <div key={title} style={{
          background: C.teal.fill, border: `1px solid ${C.teal.stroke}`,
          borderRadius: 8, padding: '12px 14px',
        }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.teal.text, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 12, color: '#777', lineHeight: 1.5 }}>{desc}</div>
        </div>
      ))}
    </div>
  </Section>
)


/* ═══════════════════════════════════════════════════
   5. COMPLESSITÀ
   ═══════════════════════════════════════════════════ */
const Complexity = () => (
  <Section title="Complessità">
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, margin: '12px 0' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--accent, #ffa116)' }}>
            {['Operazione', 'Complessità'].map(h => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 12px', fontWeight: 600,
                color: 'var(--accent, #ffa116)', fontSize: 13,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Push', 'O(1)'],
            ['Pop',  'O(1)'],
            ['Top',  'O(1)'],
            ['Ricerca', 'O(n)'],
          ].map(([op, c], i) => (
            <tr key={i} style={{
              borderBottom: '1px solid var(--border, #2a2a28)',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
            }}>
              <td style={{ padding: '8px 12px', fontWeight: 500, color: 'var(--text-secondary, #a0a0a0)' }}>{op}</td>
              <td style={{ padding: '8px 12px', fontFamily: 'var(--font-mono, monospace)', fontSize: 13, color: '#d4d4d4' }}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Section>
)


export default function StackNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <LifoStructure/>
      <StackDemo/>
      <Implementation/>
      <UseCases/>
      <Complexity/>
    </article>
  )
}
