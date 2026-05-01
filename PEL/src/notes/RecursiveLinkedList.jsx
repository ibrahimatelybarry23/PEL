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

const vals = [10, 20, 30, 40]


/* ═══════════════════════════════════════════════════
   1. STRUTTURA RICORSIVA
   ═══════════════════════════════════════════════════ */
const RecursiveIdea = () => (
  <Section title="Le liste sono intrinsecamente ricorsive">
    <P>
      Una lista concatenata è definita ricorsivamente: è un nodo (<code>head</code>) seguito
      da un'altra lista (il resto puntato da <code>next</code>). Questo la rende la struttura
      perfetta per algoritmi ricorsivi.
    </P>
    <svg width="100%" viewBox="0 0 560 120" style={{ display: 'block', margin: '16px auto' }}>
      <ArrowDef/>
      {/* head node highlighted */}
      <Box x={20}  y={30} w={70} h={36} color="amber" label="head" fontSize={12}/>
      <Arrow x1={90} y1={48} x2={128} y2={48}/>
      {vals.slice(1).map((v, i) => (
        <g key={i}>
          <Box x={130 + i * 110} y={30} w={70} h={36} color="teal" label={v}/>
          {i < 2 && <Arrow x1={200 + i * 110} y1={48} x2={238 + i * 110} y2={48}/>}
        </g>
      ))}
      <Box x={460} y={30} w={50} h={36} color="gray" label="null" fontSize={11}/>
      {/* brace */}
      <text x={300} y={90} textAnchor="middle" fontSize={12} fill={C.teal.text}>
        lista(head→next) = sottolista
      </text>
      <line x1={130} y1={80} x2={460} y2={80} stroke={C.teal.stroke} strokeWidth="0.8"/>
      <line x1={130} y1={76} x2={130} y2={80} stroke={C.teal.stroke} strokeWidth="0.8"/>
      <line x1={460} y1={76} x2={460} y2={80} stroke={C.teal.stroke} strokeWidth="0.8"/>
    </svg>
    <Tip>
      Ogni funzione ricorsiva su lista ha la stessa struttura: <strong>caso base</strong> (<code>l == nullptr</code>)
      e <strong>passo ricorsivo</strong> che chiama se stessa su <code>l→next</code>.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   2. STAMPA HEAD vs TAIL RECURSION
   ═══════════════════════════════════════════════════ */
const PrintRecursion = () => {
  const [mode, setMode] = useState('head')
  const [step, setStep] = useState(-1)

  const MAX = vals.length

  const headOutput = vals.slice(0, Math.max(0, step + 1))
  const tailOutput = step >= MAX
    ? vals.slice().reverse()
    : vals.slice(MAX - step - 1).reverse().slice(0, step + 1).reverse()

  const stackFrames = Array.from({ length: Math.min(step + 1, MAX) }, (_, i) => ({
    idx: i,
    val: vals[i],
    phase: mode === 'head'
      ? (i <= step ? 'printed' : 'pending')
      : (step >= MAX ? 'returned' : (i < MAX - 1 ? 'pending' : 'active')),
  }))

  const output = mode === 'head' ? headOutput : tailOutput

  return (
    <Section title="Stampa ricorsiva: Head vs Tail">
      <P>
        Spostare la <code>cout</code> prima o dopo la chiamata ricorsiva inverte completamente
        l'ordine di stampa — senza array ausiliari.
      </P>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '12px 0' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.amber.text, marginBottom: 6 }}>
            Head Recursion (ordine normale)
          </div>
          <Code>{`void stampa(Cella* l) {
    if (l == nullptr) return;
    cout << l->info;  // ← prima
    stampa(l->next);
}`}</Code>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.purple.text, marginBottom: 6 }}>
            Tail Recursion (ordine inverso)
          </div>
          <Code>{`void stampaInversa(Cella* l) {
    if (l == nullptr) return;
    stampaInversa(l->next);
    cout << l->info;  // ← dopo
}`}</Code>
        </div>
      </div>

      <P>Visualizza lo stack delle chiamate passo per passo:</P>
      <TabGroup tabs={['Head Recursion', 'Tail Recursion']}
        active={mode === 'head' ? 0 : 1}
        onChange={i => { setMode(i === 0 ? 'head' : 'tail'); setStep(-1) }}/>

      {/* call stack visual */}
      <svg width="100%" viewBox="0 0 560 180" style={{ display: 'block', margin: '8px auto' }}>
        <ArrowDef/>
        {/* list nodes at top */}
        {vals.map((v, i) => (
          <g key={i}>
            <Box x={20 + i * 120} y={10} w={80} h={32}
              color={step >= 0 && step < MAX && i === step ? 'amber' : 'teal'}
              label={v} fontSize={13}/>
            {i < vals.length - 1 && <Arrow x1={100 + i * 120} y1={26} x2={138 + i * 120} y2={26}/>}
          </g>
        ))}
        <Box x={500} y={10} w={44} h={32} color="gray" label="null" fontSize={11}/>

        {/* stack frames */}
        {stackFrames.map((f, i) => (
          <g key={i}>
            <rect x={20 + i * 120} y={65} width={80} height={30} rx={4}
              fill={mode === 'head' ? C.amber.fill : C.purple.fill}
              stroke={mode === 'head' ? C.amber.stroke : C.purple.stroke}
              strokeWidth="0.8"
              opacity={f.phase === 'pending' ? 0.4 : 1}/>
            <text x={60 + i * 120} y={84} textAnchor="middle" fontSize={11}
              fill={mode === 'head' ? C.amber.text : C.purple.text}>
              f({f.val})
            </text>
          </g>
        ))}

        {/* output strip */}
        <text x={20} y={130} fontSize={11} fill="#555">output:</text>
        {output.map((v, i) => (
          <Box key={i} x={70 + i * 55} y={115} w={48} h={26}
            color={mode === 'head' ? 'amber' : 'purple'} label={v} fontSize={12}/>
        ))}
      </svg>

      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <StepBtn onClick={() => setStep(s => Math.min(s + 1, MAX))} disabled={step >= MAX}>
          Avanti →
        </StepBtn>
        <StepBtn onClick={() => setStep(-1)}>Reset</StepBtn>
      </div>
      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono, monospace)', marginTop: 8, color: '#777' }}>
        {step < 0 ? 'Premi Avanti per vedere la ricorsione' :
          step < MAX ? `chiama stampa(${vals[step]})` : 'caso base → si torna indietro'}
      </div>
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   3. OPERAZIONI DI RICERCA
   ═══════════════════════════════════════════════════ */
const SearchOps = () => (
  <Section title="Ricerca e Conteggio">
    <Code>{`// Lunghezza della lista
int lunghezza(Cella* l) {
    if (l == nullptr) return 0;
    return 1 + lunghezza(l->next);  // 1 + lunghezza del resto
}

// Ricerca di un valore
bool cerca(Cella* l, int n) {
    if (l == nullptr) return false;       // caso base: non trovato
    if (l->info == n)  return true;       // trovato!
    return cerca(l->next, n);            // cerca nel resto
}`}</Code>
    <Tip>
      <code>lunghezza</code> restituisce <code>1 + lunghezza(next)</code>: ogni frame di stack
      contribuisce 1 al conteggio. Quando si torna su, i valori si sommano automaticamente.
    </Tip>
  </Section>
)


/* ═══════════════════════════════════════════════════
   4. MODIFICA CON Cella*&
   ═══════════════════════════════════════════════════ */
const ModifyOps = () => {
  const [tab, setTab] = useState(0)
  const codes = [
`// Inserimento in coda ricorsivo
void inserisciInCoda(Cella*& l, int n) {
    if (l == nullptr) {
        l = new Cella;       // l è il link del penultimo nodo
        l->info = n;         // oppure head se la lista era vuota
        l->next = nullptr;
    } else {
        inserisciInCoda(l->next, n);
    }
}`,
`// Cancellazione di un valore specifico
void eliminaValore(Cella*& l, int n) {
    if (l == nullptr) return;

    if (l->info == n) {
        Cella* temp = l;
        l = l->next;          // il chiamante ora punta al successivo
        delete temp;
        eliminaValore(l, n);  // elimina eventuali altre occorrenze
    } else {
        eliminaValore(l->next, n);
    }
}`,
`// Elimina l'n-esimo elemento (0-based)
void eliminaN(Cella*& l, int n) {
    if (l == nullptr) return;

    if (n == 0) {
        Cella* temp = l;
        l = l->next;          // il chiamante ora punta al successivo
        delete temp;
    } else {
        eliminaN(l->next, n - 1);  // riduci n e avanza
    }
}`,
  ]

  return (
    <Section title="Modifica con Cella*& (riferimento al puntatore)">
      <P>
        Passando <code>Cella*&</code> invece di <code>Cella*</code>, il parametro <code>l</code>{' '}
        <em>è esattamente</em> il campo <code>next</code> del nodo precedente (o <code>head</code>
        se siamo all'inizio). Questo permette di modificare i link senza cercare il nodo precedente.
      </P>
      <svg width="100%" viewBox="0 0 480 90" style={{ maxWidth: 480, display: 'block', margin: '12px auto' }}>
        <ArrowDef/>
        <Box x={0}  y={20} w={60} h={36} color="gray" label="head" fontSize={11}/>
        <Arrow x1={60} y1={38} x2={88} y2={38}/>
        <Box x={90} y={20} w={70} h={36} color="teal" label="10"/>
        <Arrow x1={160} y1={38} x2={188} y2={38}/>
        <Box x={190} y={20} w={70} h={36} color="amber" label="20"/>
        <Arrow x1={260} y1={38} x2={288} y2={38}/>
        <Box x={290} y={20} w={70} h={36} color="teal" label="30"/>
        {/* l reference arrow */}
        <line x1={225} y1={56} x2={225} y2={70} stroke={C.purple.stroke} strokeWidth="1.5"/>
        <line x1={155} y1={70} x2={295} y2={70} stroke={C.purple.stroke} strokeWidth="1.5"/>
        <line x1={155} y1={64} x2={155} y2={70} stroke={C.purple.stroke} strokeWidth="1.5"/>
        <line x1={295} y1={64} x2={295} y2={70} stroke={C.purple.stroke} strokeWidth="1.5"/>
        <text x={225} y={84} textAnchor="middle" fontSize={11} fill={C.purple.text}>
          l = &(nodo10→next)  ←  riferimento diretto
        </text>
      </svg>
      <TabGroup tabs={['Inserisci in coda', 'Elimina valore', 'Elimina posizione n']}
        active={tab} onChange={setTab}/>
      <Code>{codes[tab]}</Code>
      {tab === 0 && (
        <Tip>
          Quando <code>l == nullptr</code>, <code>l</code> è il campo <code>next</code> dell'ultimo nodo
          (o <code>head</code>). Assegnare <code>l = new Cella</code> modifica direttamente quel link.
        </Tip>
      )}
    </Section>
  )
}


/* ═══════════════════════════════════════════════════
   5. VANTAGGI E LIMITI
   ═══════════════════════════════════════════════════ */
const ProsCons = () => (
  <Section title="Vantaggi e limiti della ricorsione">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '12px 0' }}>
      <div style={{
        background: C.green.fill, border: `1px solid ${C.green.stroke}`,
        borderRadius: 8, padding: '14px',
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.green.text, marginBottom: 8 }}>Vantaggi</div>
        {[
          'Codice più pulito senza puntatori prev/curr d\'appoggio',
          'Facile eseguire operazioni "mentre si torna" (stampa inversa)',
          'Si sposa con la definizione matematica della struttura',
        ].map(s => (
          <div key={s} style={{ fontSize: 12, color: '#97C459', lineHeight: 1.6, marginBottom: 4 }}>✓ {s}</div>
        ))}
      </div>
      <div style={{
        background: C.red.fill, border: `1px solid ${C.red.stroke}`,
        borderRadius: 8, padding: '14px',
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.red.text, marginBottom: 8 }}>Limiti</div>
        {[
          'Stack Overflow per liste molto lunghe (migliaia di nodi)',
          'Overhead di ogni chiamata a funzione (frame di stack)',
          'In produzione si preferisce spesso l\'iterazione',
        ].map(s => (
          <div key={s} style={{ fontSize: 12, color: '#F09595', lineHeight: 1.6, marginBottom: 4 }}>✗ {s}</div>
        ))}
      </div>
    </div>
    <Callout>
      Per liste estremamente lunghe la ricorsione può causare uno <strong>Stack Overflow</strong>.
      Il sistema operativo limita la profondità dello stack — tipicamente qualche migliaio di frame.
    </Callout>
  </Section>
)


export default function RecursiveLinkedListNote() {
  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <RecursiveIdea/>
      <PrintRecursion/>
      <SearchOps/>
      <ModifyOps/>
      <ProsCons/>
    </article>
  )
}
