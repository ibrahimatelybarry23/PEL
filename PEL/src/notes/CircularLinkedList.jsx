import { useState, useRef, useEffect } from 'react'

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
   1. STRUTTURA CIRCOLARE
   ═══════════════════════════════════════════════════ */
const CircularStructure = () => {
  const nodeVals = [10, 20, 30, 40]
  const cx = 200, cy = 110, r = 72
  const nodeW = 54, nodeH = 32

  const positions = nodeVals.map((_, i) => {
    const angle = (i / nodeVals.length) * 2 * Math.PI - Math.PI / 2
    return {
      x: cx + r * Math.cos(angle) - nodeW / 2,
      y: cy + r * Math.sin(angle) - nodeH / 2,
      cx: cx + r * Math.cos(angle),
      cy: cy + r * Math.sin(angle),
    }
  })

  return (
    <Section title="Struttura circolare">
      <P>
        In una lista circolare l'ultimo nodo non punta a <code>nullptr</code> ma punta di nuovo
        al primo nodo, creando un ciclo chiuso. Si usa spesso un puntatore <code>tail</code>{' '}
        (invece di <code>head</code>) perché <code>tail→next</code> dà accesso immediato alla testa.
      </P>
      <svg width="100%" viewBox="0 0 400 220" style={{ maxWidth: 400, display: 'block', margin: '16px auto' }}>
        <ArrowDef/>
        {/* curved arrows between nodes */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % positions.length]
          const dx = next.cx - pos.cx
          const dy = next.cy - pos.cy
          const mx = (pos.cx + next.cx) / 2 + (dy * 0.15)
          const my = (pos.cy + next.cy) / 2 - (dx * 0.15)
          return (
            <path key={i}
              d={`M${pos.cx} ${pos.cy} Q${mx} ${my} ${next.cx} ${next.cy}`}
              fill="none" stroke={i === nodeVals.length - 1 ? C.coral.stroke : C.amber.stroke}
              strokeWidth="1.5" markerEnd="url(#arr)"/>
          )
        })}
        {/* nodes */}
        {positions.map((pos, i) => (
          <Box key={i}
            x={pos.x} y={pos.y} w={nodeW} h={nodeH}
            color={i === nodeVals.length - 1 ? 'amber' : 'teal'}
            label={nodeVals[i]} fontSize={13}/>
        ))}
        {/* tail label */}
        <text x={positions[3].x + nodeW + 6} y={positions[3].cy + 4}
          fontSize={11} fill={C.amber.text} fontWeight="600">tail</text>
        {/* center label */}
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
          fontSize={11} fill="#555">ciclo</text>
        {/* last→first label */}
        <text x={360} y={158} fontSize={10} fill={C.coral.text}>↩ torna</text>
        <text x={360} y={170} fontSize={10} fill={C.coral.text}>  alla testa</text>
      </svg>
      <Tip>
        Con <code>tail</code> si accede alla testa in O(1) via <code>tail→next</code> e alla coda
        direttamente. Senza <code>tail</code> ci vorrebbe O(n) per raggiungere l'ultimo nodo.
      </Tip>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   2. TRAVERSAL CIRCOLARE INTERATTIVO
   ═══════════════════════════════════════════════════ */
const CircularTraversal = () => {
  const nodeVals = [10, 20, 30, 40]
  const [pos, setPos] = useState(0)
  const [laps, setLaps] = useState(0)
  const timerRef = useRef(null)
  const [running, setRunning] = useState(false)

  const cx = 200, cy = 100, r = 68
  const nodeW = 54, nodeH = 32

  const positions = nodeVals.map((_, i) => {
    const angle = (i / nodeVals.length) * 2 * Math.PI - Math.PI / 2
    return {
      x: cx + r * Math.cos(angle) - nodeW / 2,
      y: cy + r * Math.sin(angle) - nodeH / 2,
      cx: cx + r * Math.cos(angle),
      cy: cy + r * Math.sin(angle),
    }
  })

  const start = () => {
    if (running) return
    setRunning(true)
    let i = 0, lap = 0
    setPos(0); setLaps(0)
    timerRef.current = setInterval(() => {
      i = (i + 1) % nodeVals.length
      if (i === 0) lap++
      setPos(i)
      setLaps(lap)
      if (lap >= 2) { clearInterval(timerRef.current); setRunning(false) }
    }, 700)
  }

  const reset = () => {
    clearInterval(timerRef.current)
    setRunning(false); setPos(0); setLaps(0)
  }

  useEffect(() => () => clearInterval(timerRef.current), [])

  return (
    <Section title="Traversal — il ciclo non finisce mai">
      <P>
        Scorrere una lista circolare richiede di fermarsi esplicitamente quando si torna alla testa,
        altrimenti il loop è infinito. Si usa un ciclo <code>do-while</code> che controlla
        se <code>curr != tail→next</code>.
      </P>
      <Code>{`Cella* curr = tail->next;  // parte dalla testa
do {
    cout << curr->info << " -> ";
    curr = curr->next;
} while (curr != tail->next);  // si ferma quando torna alla testa`}</Code>

      <svg width="100%" viewBox="0 0 400 200" style={{ display: 'block', margin: '12px auto', maxWidth: 400 }}>
        <ArrowDef/>
        {positions.map((p, i) => {
          const next = positions[(i + 1) % positions.length]
          const dx = next.cx - p.cx, dy = next.cy - p.cy
          const mx = (p.cx + next.cx) / 2 + dy * 0.15
          const my = (p.cy + next.cy) / 2 - dx * 0.15
          return (
            <path key={i}
              d={`M${p.cx} ${p.cy} Q${mx} ${my} ${next.cx} ${next.cy}`}
              fill="none" stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arr)"/>
          )
        })}
        {positions.map((p, i) => (
          <Box key={i} x={p.x} y={p.y} w={nodeW} h={nodeH}
            color={i === pos ? 'amber' : 'teal'} label={nodeVals[i]} fontSize={13}/>
        ))}
        {/* curr label */}
        <text x={positions[pos].cx} y={positions[pos].cy + nodeH + 14}
          textAnchor="middle" fontSize={11} fill={C.amber.text} fontWeight="600">curr</text>
        {/* laps */}
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
          fontSize={12} fill={laps > 0 ? C.coral.text : '#555'}>
          {laps > 0 ? `giro ${laps}` : 'avvia'}
        </text>
      </svg>

      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <StepBtn onClick={start} disabled={running}>▶ Avvia</StepBtn>
        <StepBtn onClick={reset}>Reset</StepBtn>
      </div>
      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777' }}>
        {running ? `curr → ${nodeVals[pos]}  (giro ${laps + 1})` : laps >= 2 ? 'Fermato dopo 2 giri.' : 'Premi Avvia.'}
      </div>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   3. INSERIMENTO IN TESTA
   ═══════════════════════════════════════════════════ */
const InsertFrontSVG = () => (
  <svg width="100%" viewBox="0 0 560 160" style={{ display: 'block', margin: '12px auto' }}>
    <ArrowDef/>
    <Box x={0}   y={60} w={60} h={36} color="amber" label="tail"  fontSize={12}/>
    <Box x={120} y={5}  w={80} h={36} color="coral" label="nuovo"/>
    <text x={210} y={24} fontSize={11} fill={C.coral.text}>nuovo nodo</text>
    {/* ① nuovo->next = tail->next (vecchia testa) */}
    <path d="M160 41 L160 60 L200 60" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={170} y={56} fontSize={10} fill={C.coral.text}>① next=testa</text>
    {/* ② tail->next = nuovo */}
    <path d="M30 78 L30 120 L135 120 L135 43" fill="none" stroke={C.coral.stroke}
      strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={70} y={134} fontSize={10} fill={C.coral.text}>② tail→next=nuovo</text>
    <Arrow x1={60} y1={78} x2={198} y2={78}/>
    <Box x={200} y={60} w={70} h={36} color="teal" label="10"/>
    <Arrow x1={270} y1={78} x2={308} y2={78}/>
    <Box x={310} y={60} w={70} h={36} color="teal" label="20"/>
    {/* circular back arrow */}
    <path d="M380 78 L420 78 L420 30 L15 30 L15 60" fill="none" stroke={C.amber.stroke}
      strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arr)"/>
    <text x={220} y={22} textAnchor="middle" fontSize={10} fill={C.amber.text}>… → tail → testa</text>
  </svg>
)

const InsertOps = () => (
  <Section title="Inserimento in testa — O(1)">
    <P>
      Con il puntatore <code>tail</code>, inserire in testa è <strong>O(1)</strong>: il nuovo nodo
      prende come <code>next</code> la vecchia testa (<code>tail→next</code>), poi <code>tail→next</code>{' '}
      viene aggiornato al nuovo nodo.
    </P>
    <InsertFrontSVG/>
    <Code>{`void insertFront(Cella*& tail, int valore) {
    Cella* nuovo = new Cella;
    nuovo->info = valore;

    if (tail == nullptr) {
        nuovo->next = nuovo;   // lista vuota: punta a se stesso
        tail = nuovo;
    } else {
        nuovo->next = tail->next;  // ① vecchia testa
        tail->next = nuovo;        // ② tail punta al nuovo
    }
}`}</Code>
  </Section>
)


/* ═══════════════════════════════════════════════════
   4. CANCELLAZIONE
   ═══════════════════════════════════════════════════ */
const DeleteOps = () => {
  const [tab, setTab] = useState(0)
  const codes = [
`void deleteNode(Cella*& l, int n) {
    if (l == nullptr) return;

    Cella* curr = l->next;   // testa
    Cella* prev = l;         // coda

    do {
        if (curr->info == n) {
            if (curr == l && curr->next == l) {
                l = nullptr;          // unico nodo
            } else if (curr == l) {
                prev->next = curr->next;
                l = prev;             // elimina la coda
            } else {
                prev->next = curr->next;  // caso generico
            }
            delete curr;
            return;
        }
        prev = curr;
        curr = curr->next;
    } while (curr != l->next);
}`,
`void eliminaFine(Cella*& l, int& n) {
    if (l == nullptr) return;

    Cella* testa = l->next;
    n = l->info;              // salva il valore

    if (testa == l) {
        delete l;
        l = nullptr;          // un solo nodo
    } else {
        Cella* curr = testa;
        while (curr->next != l)
            curr = curr->next; // trova il penultimo
        curr->next = testa;
        delete l;
        l = curr;             // il penultimo diventa la nuova coda
    }
}`,
  ]
  return (
    <Section title="Cancellazione">
      <TabGroup tabs={['deleteNode (per valore)', 'eliminaFine (coda)']}
        active={tab} onChange={setTab}/>
      <Code>{codes[tab]}</Code>
      <Callout>
        In una lista circolare non esiste <code>nullptr</code> come sentinella. Bisogna
        usare la condizione <code>curr != l→next</code> per fermarsi, altrimenti il ciclo
        è infinito.
      </Callout>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   5. COMPLESSITÀ
   ═══════════════════════════════════════════════════ */
const Complexity = () => (
  <Section title="Complessità e casi d'uso">
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, margin: '12px 0' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--accent, #ffa116)' }}>
            {['Operazione', 'Complessità', 'Note'].map(h => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 12px', fontWeight: 600,
                color: 'var(--accent, #ffa116)', fontSize: 13,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Inserimento in testa', 'O(1)', 'Con puntatore tail'],
            ['Rimozione coda',       'O(n)', 'Scorre fino al penultimo'],
            ['Ricerca',              'O(n)', 'Gestione ciclo necessaria'],
          ].map(([op, c, note], i) => (
            <tr key={i} style={{
              borderBottom: '1px solid var(--border, #2a2a28)',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
            }}>
              <td style={{ padding: '8px 12px', fontWeight: 500, color: 'var(--text-secondary, #a0a0a0)' }}>{op}</td>
              <td style={{ padding: '8px 12px', fontFamily: 'var(--font-mono, monospace)', fontSize: 13, color: '#d4d4d4' }}>{c}</td>
              <td style={{ padding: '8px 12px', fontSize: 12, color: '#666' }}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginTop: 16 }}>
      {[
        { icon: '🔄', title: 'Round Robin', desc: 'OS scheduling: ogni processo ha un quanto di tempo, poi si torna al primo.' },
        { icon: '📡', title: 'Buffer Circolare', desc: 'Streaming audio/video: i dati scritti sovrascrivono i più vecchi.' },
        { icon: '🎮', title: 'Gioco a turni', desc: 'Gestione dei giocatori in un gioco che cicla indefinitamente.' },
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


export default function CircularLinkedListNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <CircularStructure/>
      <CircularTraversal/>
      <InsertOps/>
      <DeleteOps/>
      <Complexity/>
    </article>
  )
}
