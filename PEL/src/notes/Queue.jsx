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
   1. STRUTTURA FIFO
   ═══════════════════════════════════════════════════ */
const FifoStructure = () => (
  <Section title="Principio FIFO">
    <P>
      La <strong>Queue</strong> è una struttura dati lineare che segue il principio <strong>FIFO</strong>{' '}
      (<em>First In, First Out</em>): il primo elemento inserito è il primo a essere rimosso.
      Come una fila al supermercato — si entra in fondo e si esce dalla testa.
    </P>
    <svg width="100%" viewBox="0 0 560 110" style={{ display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      {/* Enqueue arrow */}
      <Arrow x1={30} y1={54} x2={78} y2={54}/>
      <text x={6} y={44} fontSize={11} fill={C.coral.text} fontWeight="600">Enqueue</text>
      {/* Elements */}
      <Box x={80}  y={36} w={80} h={36} color="amber" label="Dato 3" fontSize={12}/>
      <Arrow x1={160} y1={54} x2={168} y2={54}/>
      <Box x={170} y={36} w={80} h={36} color="teal"  label="Dato 2" fontSize={12}/>
      <Arrow x1={250} y1={54} x2={258} y2={54}/>
      <Box x={260} y={36} w={80} h={36} color="teal"  label="Dato 1" fontSize={12}/>
      {/* Dequeue arrow */}
      <Arrow x1={340} y1={54} x2={388} y2={54}/>
      <text x={392} y={44} fontSize={11} fill={C.green.text} fontWeight="600">Dequeue</text>
      {/* head / tail labels */}
      <text x={210} y={100} textAnchor="middle" fontSize={11} fill="#555">head (primo uscente)</text>
      <line x1={300} y1={72} x2={300} y2={92} stroke="#444" strokeWidth="1"/>
      <text x={120} y={100} textAnchor="middle" fontSize={11} fill="#555">tail (ultimo arrivato)</text>
      <line x1={120} y1={72} x2={120} y2={92} stroke="#444" strokeWidth="1"/>
    </svg>
    <Tip>
      Si usano <strong>due puntatori</strong> (<code>head</code> e <code>tail</code>) per avere
      sia Dequeue dalla testa che Enqueue in coda in O(1).
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. ENQUEUE / DEQUEUE INTERATTIVO
   ═══════════════════════════════════════════════════ */
const QueueDemo = () => {
  const [items, setItems] = useState([10, 20, 30])
  const [counter, setCounter] = useState(40)
  const [lastOp, setLastOp] = useState(null)
  const MAX = 5

  const enqueue = () => {
    if (items.length >= MAX) return
    setItems(prev => [...prev, counter])
    setLastOp(`enqueue(${counter}) → aggiunto in coda`)
    setCounter(c => c + 10)
  }

  const dequeue = () => {
    if (items.length === 0) return
    const front = items[0]
    setItems(prev => prev.slice(1))
    setLastOp(`dequeue() → rimosso ${front} dalla testa`)
  }

  const slotW = 80
  const gap = 6
  const totalW = MAX * (slotW + gap) - gap
  const offsetX = (560 - totalW) / 2

  return (
    <Section title="Enqueue e Dequeue — interattivo">
      <P>
        Premi <strong>Enqueue</strong> per aggiungere in coda e <strong>Dequeue</strong> per rimuovere dalla testa.
      </P>
      <svg width="100%" viewBox="0 0 560 120" style={{ display: 'block', margin: '12px auto' }}>
        <ArrowDef/>
        {/* empty slots */}
        {Array.from({ length: MAX }).map((_, i) => (
          <rect key={i} x={offsetX + i * (slotW + gap)} y={30}
            width={slotW} height={36} rx={6}
            fill="transparent" stroke="#2a2a28" strokeWidth="1" strokeDasharray="4 3"/>
        ))}
        {/* filled items */}
        {items.map((v, i) => (
          <Box key={i}
            x={offsetX + i * (slotW + gap)} y={30}
            w={slotW} h={36}
            color={i === 0 ? 'coral' : i === items.length - 1 ? 'amber' : 'teal'}
            label={v} fontSize={13}/>
        ))}
        {/* arrows between items */}
        {items.map((_, i) => i < items.length - 1 && (
          <Arrow key={i}
            x1={offsetX + i * (slotW + gap) + slotW}
            y1={48}
            x2={offsetX + (i + 1) * (slotW + gap) - 2}
            y2={48}/>
        ))}
        {/* head / tail labels */}
        {items.length > 0 && (
          <>
            <text x={offsetX + slotW / 2} y={88} textAnchor="middle" fontSize={11} fill={C.coral.text}>head</text>
            <text x={offsetX + (items.length - 1) * (slotW + gap) + slotW / 2} y={88}
              textAnchor="middle" fontSize={11} fill={C.amber.text}>tail</text>
          </>
        )}
        <text x={490} y={110} fontSize={12} fill="#555">size: {items.length}/{MAX}</text>
      </svg>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginTop: 4 }}>
        <StepBtn onClick={enqueue} disabled={items.length >= MAX}>Enqueue {counter}</StepBtn>
        <StepBtn onClick={dequeue} disabled={items.length === 0}>Dequeue</StepBtn>
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
      Con due puntatori <code>head</code> e <code>tail</code> entrambe le operazioni principali
      sono <strong>O(1)</strong> — non serve scorrere la lista.
    </P>
    <Code>{`struct Nodo {
    int info;
    Nodo* next;
};

struct Queue {
    Nodo* head = nullptr;
    Nodo* tail = nullptr;

    void enqueue(int valore) {
        Nodo* nuovo = new Nodo;
        nuovo->info = valore;
        nuovo->next = nullptr;

        if (isEmpty()) {
            head = tail = nuovo;      // primo elemento
        } else {
            tail->next = nuovo;       // collega in coda
            tail = nuovo;             // aggiorna tail
        }
    }

    void dequeue() {
        if (!isEmpty()) {
            Nodo* temp = head;
            head = head->next;
            delete temp;
            if (head == nullptr)
                tail = nullptr;       // coda diventata vuota
        }
    }

    int front() {
        if (!isEmpty()) return head->info;
        return -1;
    }

    bool isEmpty() { return head == nullptr; }
};`}</Code>
    <Callout>
      Quando la coda diventa vuota dopo un Dequeue, ricorda di resettare anche <code>tail = nullptr</code>.
      Altrimenti <code>tail</code> punta a memoria deallocata.
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
        { icon: '🖨️', title: 'Coda di stampa', desc: 'I documenti vengono stampati nell\'ordine in cui arrivano.' },
        { icon: '⚙️', title: 'CPU Scheduling', desc: 'La Ready Queue gestisce i processi pronti all\'esecuzione.' },
        { icon: '📦', title: 'Buffer di rete', desc: 'I pacchetti vengono trasmessi nell\'ordine di arrivo.' },
        { icon: '🔎', title: 'BFS', desc: 'Breadth-First Search nei grafi usa una queue per i nodi da visitare.' },
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
            ['Enqueue', 'O(1)'],
            ['Dequeue', 'O(1)'],
            ['Front',   'O(1)'],
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


export default function QueueNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <FifoStructure/>
      <QueueDemo/>
      <Implementation/>
      <UseCases/>
      <Complexity/>
    </article>
  )
}
