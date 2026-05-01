import { useState, useEffect, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { EXERCISES } from "../exercises.jsx";

const CATS = ["Tutti","Vettori","Stringhe","Sorting","Ricorsione","Classi","Liste","Stack","Esame","Esame - Liste"];
const dc = d => d==="Facile"?"#22c55e":d==="Medio"?"#f59e0b":"#ef4444";
const db = d => d==="Facile"?"rgba(34,197,94,0.12)":d==="Medio"?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)";
const PUB = 1;
const PRI = 9;

const MONACO_OPTIONS = {
  fontSize:13, fontFamily:"'JetBrains Mono','Fira Code',monospace",
  fontLigatures:true, lineHeight:22, minimap:{enabled:false},
  scrollBeyondLastLine:false, automaticLayout:true, tabSize:4,
  insertSpaces:true, suggestOnTriggerCharacters:true,
  quickSuggestions:{other:true,comments:false,strings:false},
  acceptSuggestionOnEnter:"on", snippetSuggestions:"top",
  formatOnType:true, autoClosingBrackets:"always", autoClosingQuotes:"always",
  autoIndent:"full", renderLineHighlight:"line", cursorBlinking:"smooth",
  cursorSmoothCaretAnimation:"on", folding:true, lineNumbers:"on",
  glyphMargin:false, lineDecorationsWidth:4, lineNumbersMinChars:3,
  padding:{top:12,bottom:12},
  scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6},
};

function registerCppSnippets(monaco) {
  monaco.languages.registerCompletionItemProvider("cpp", {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber:position.lineNumber, endLineNumber:position.lineNumber,
        startColumn:word.startColumn, endColumn:word.endColumn
      };
      const S = monaco.languages.CompletionItemKind.Snippet;
      const K = monaco.languages.CompletionItemKind.Keyword;
      return { suggestions: [
        {label:"for",  kind:S, insertText:"for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t$0\n}", insertTextRules:4, range},
        {label:"forv", kind:S, insertText:"for (size_t ${1:i} = 0; ${1:i} < ${2:v}.size(); ${1:i}++) {\n\t$0\n}", insertTextRules:4, range},
        {label:"fore", kind:S, insertText:"for (const auto& ${1:x} : ${2:v}) {\n\t$0\n}", insertTextRules:4, range},
        {label:"while",kind:S, insertText:"while (${1:cond}) {\n\t$0\n}", insertTextRules:4, range},
        {label:"if",   kind:S, insertText:"if (${1:cond}) {\n\t$0\n}", insertTextRules:4, range},
        {label:"ife",  kind:S, insertText:"if (${1:cond}) {\n\t$2\n} else {\n\t$0\n}", insertTextRules:4, range},
        {label:"vec",  kind:S, insertText:"vector<${1:int}> ${2:v};", insertTextRules:4, range},
        {label:"vecn", kind:S, insertText:"vector<${1:int}> ${2:v}(${3:n}, ${4:0});", insertTextRules:4, range},
        {label:"pb",   kind:S, insertText:"${1:v}.push_back(${2:x});", insertTextRules:4, range},
        {label:"cout", kind:S, insertText:"cout << ${1:val} << endl;", insertTextRules:4, range},
        {label:"ret",  kind:S, insertText:"return ${1:0};", insertTextRules:4, range},
        {label:"fn",   kind:S, insertText:"${1:int} ${2:nome}(${3:params}) {\n\t$0\n}", insertTextRules:4, range},
        {label:"cls",  kind:S, insertText:"class ${1:Nome} {\nprivate:\n\t${2:// attr}\npublic:\n\t${3:// metodi}\n};", insertTextRules:4, range},
        {label:"swap", kind:S, insertText:"int tmp = ${1:a};\n${1:a} = ${2:b};\n${2:b} = tmp;", insertTextRules:4, range},
        {label:"include", kind:S, insertText:"#include<${1:iostream}>", insertTextRules:4, range},
        {label:"using",   kind:K, insertText:"using namespace std;", range},
      ]};
    }
  });
}

function parseOutput(stdout, compilerError) {
  if (compilerError) return { compiles:false, error:compilerError, tests:[], score:"0/0" };
  const lines = (stdout||"").split("\n").filter(l=>l.trim());
  const tests = [];
  let score = "0/0";
  for (const line of lines) {
    if (line.startsWith("PASS ") || line.startsWith("FAIL ")) {
      const passed = line.startsWith("PASS ");
      const parts = line.split(" ");
      const id = parseInt(parts[1]);
      const gotMatch = line.match(/got=(.+?)(\s+exp=|$)/);
      const got = gotMatch ? gotMatch[1].trim() : "";
      tests.push({ id, passed, got });
    } else if (line.startsWith("SCORE ")) {
      score = line.split(" ")[1];
    }
  }
  return { compiles:true, error:"", tests, score };
}

function CaseDetail({ caseIdx, res, sel }) {
  if (!res) return null;
  const isPrivate = caseIdx >= PUB;
  const t = res.tests.find(x => x.id === caseIdx);
  const passed = t?.passed ?? false;
  const got = t?.got ?? "—";

  return (
    <div style={{ flex:1, overflowY:"auto", padding:"14px 16px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
        <span style={{ fontSize:13, fontWeight:800, color:passed?"#22c55e":"#ef4444" }}>
          {passed ? "✓ Passed" : "✗ Wrong Answer"}
        </span>
        {isPrivate && (
          <span style={{ fontSize:10, color:"#4b5563", background:"#1a1a1a", padding:"2px 7px", borderRadius:3, border:"1px solid #2d2d2d" }}>
            🔒 Test privato
          </span>
        )}
      </div>
      {!isPrivate && (
        <div style={{ marginBottom:10 }}>
          <div style={{ fontSize:10, color:"#6b7280", marginBottom:4 }}>Input</div>
          <div style={{ background:"#111", border:"1px solid #2d2d2d", borderRadius:5, padding:"8px 12px", fontSize:12, fontFamily:"monospace", color:"#e5e7eb" }}>
            {sel.publicCases[caseIdx]?.input ?? "—"}
          </div>
        </div>
      )}
      <div style={{ marginBottom:10 }}>
        <div style={{ fontSize:10, color:"#6b7280", marginBottom:4 }}>Output</div>
        <div style={{ background:"#111", border:`1px solid ${passed?"#22c55e44":"#ef444444"}`, borderRadius:5, padding:"8px 12px", fontSize:12, fontFamily:"monospace", color:passed?"#86efac":"#fca5a5" }}>
          {got}
        </div>
      </div>
      {!isPrivate && (
        <div>
          <div style={{ fontSize:10, color:"#6b7280", marginBottom:4 }}>Expected</div>
          <div style={{ background:"#111", border:"1px solid #2d2d2d", borderRadius:5, padding:"8px 12px", fontSize:12, fontFamily:"monospace", color:"#e5e7eb" }}>
            {sel.publicCases[caseIdx]?.expected ?? "—"}
          </div>
        </div>
      )}
      {isPrivate && (
        <div style={{ fontSize:10, color:"#374151", fontStyle:"italic", marginTop:8 }}>
          Input ed expected non disponibili per i test privati.
        </div>
      )}
    </div>
  );
}

function TestPanel({ sel, res, testing }) {
  const [activeCase, setActiveCase] = useState(0);
  useEffect(() => { setActiveCase(0); }, [sel?.id, res]);

  if (!res && !testing) return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, color:"#4b5563" }}>
      <div style={{ fontSize:28 }}>▶</div>
      <div style={{ fontSize:11 }}>Premi <strong style={{ color:"#ffa116" }}>Run Tests</strong> per compilare</div>
    </div>
  );

  if (testing) return (
    <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", color:"#6b7280", fontSize:12 }}>
      Compilando ed eseguendo...
    </div>
  );

  if (!res.compiles) return (
    <div style={{ flex:1, overflowY:"auto", padding:16 }}>
      <div style={{ color:"#ef4444", fontWeight:700, fontSize:13, marginBottom:10 }}>Compile Error</div>
      <pre style={{ margin:0, padding:"10px 14px", background:"#1a0a0a", border:"1px solid #7f1d1d", borderRadius:6, fontSize:11, color:"#fca5a5", whiteSpace:"pre-wrap", lineHeight:1.6 }}>
        {res.error}
      </pre>
    </div>
  );

  const passed = res.tests.filter(t => t.passed).length;
  const total  = res.tests.length;
  const allPassed = passed === total && total > 0;

  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
      <div style={{ padding:"10px 16px", borderBottom:"1px solid #2d2d2d", display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontSize:14, fontWeight:800, color:allPassed?"#22c55e":"#ef4444" }}>
          {allPassed ? "✓ Accepted" : "✗ Wrong Answer"}
        </span>
        <span style={{ fontSize:11, color:"#6b7280" }}>{passed}/{total} passed</span>
      </div>
      <CaseDetail caseIdx={activeCase} res={res} sel={sel} />
      <div style={{ borderTop:"1px solid #2d2d2d", padding:"8px 12px", display:"flex", gap:5, flexWrap:"wrap", background:"#141414", alignItems:"center" }}>
        {Array.from({length:PUB},(_,i) => {
          const t = res.tests.find(x=>x.id===i); const ok=t?.passed??false; const active=activeCase===i;
          return (
            <button key={i} onClick={()=>setActiveCase(i)} style={{ padding:"4px 11px", borderRadius:4, fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:"inherit", background:active?(ok?"rgba(34,197,94,0.25)":"rgba(239,68,68,0.25)"):(ok?"rgba(34,197,94,0.07)":"rgba(239,68,68,0.07)"), color:ok?"#22c55e":"#ef4444", border:`1px solid ${active?(ok?"#22c55e":"#ef4444"):(ok?"#22c55e44":"#ef444444")}` }}>
              {ok?"✓":"✗"} Case {i+1}
            </button>
          );
        })}
        <div style={{ width:1, height:18, background:"#374151", margin:"0 2px" }} />
        {Array.from({length:PRI},(_,i) => {
          const idx=PUB+i; const t=res.tests.find(x=>x.id===idx); const ok=t?.passed??false; const active=activeCase===idx;
          return (
            <button key={idx} onClick={()=>setActiveCase(idx)} style={{ padding:"4px 10px", borderRadius:4, fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:"inherit", background:active?(ok?"rgba(34,197,94,0.25)":"rgba(239,68,68,0.25)"):(ok?"rgba(34,197,94,0.07)":"rgba(239,68,68,0.07)"), color:ok?"#22c55e":"#ef4444", border:`1px solid ${active?(ok?"#22c55e":"#ef4444"):(ok?"#22c55e44":"#ef444444")}` }}>
              {ok?"✓":"✗"} 🔒{i+1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function TrainerPage() {
  const [sel,setSel]         = useState(null);
  const [code,setCode]       = useState("");
  const [hints,setHints]     = useState([]);
  const [done,setDone]       = useState([]);
  const [cat,setCat]         = useState("Tutti");
  const [sb,setSb]           = useState(true);
  const [testing,setTesting] = useState(false);
  const [res,setRes]         = useState(null);
  const editorRef            = useRef(null);

  useEffect(() => {
    try { const r = localStorage.getItem("cpp-v6"); if (r) setDone(JSON.parse(r)); } catch(e) {}
  }, []);

  const save = ids => { try { localStorage.setItem("cpp-v6", JSON.stringify(ids)); } catch(e) {} };
  const pick = ex => { setSel(ex); setCode(ex.starterCode); setHints([]); setRes(null); if(window.innerWidth<900)setSb(false); };
  const tglHint = i => setHints(p => p.includes(i) ? p.filter(x=>x!==i) : [...p,i]);
  const markDone   = () => { if(sel&&!done.includes(sel.id)){const n=[...done,sel.id];setDone(n);save(n);} };
  const markUndone = () => { if(sel){const n=done.filter(x=>x!==sel.id);setDone(n);save(n);} };

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    registerCppSnippets(monaco);
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => runTests());
  };

  const runTests = async () => {
    if (!sel?.testCode) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setTesting(true); setRes(null);
    try {
      const full = sel.testCode.replace("__USER_CODE__", currentCode);
      const resp = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compiler:"gcc-head", code:full, "compiler-option-raw":"-std=c++17" })
      });
      const data = await resp.json();
      const parsed = parseOutput(data.program_output||"", data.compiler_error||"");
      setRes(parsed);
      if (parsed.compiles && parsed.tests.length===10 && parsed.tests.every(t=>t.passed)) markDone();
    } catch(e) {
      setRes({ compiles:false, error:"Errore di rete: "+String(e), tests:[], score:"0/0" });
    }
    setTesting(false);
  };

  const filtered = cat==="Tutti" ? EXERCISES : EXERCISES.filter(e=>e.category===cat);
  const pct = Math.round((done.length/EXERCISES.length)*100);

  return (
    <div style={{ display:"flex",height:"100%",width:"100%",fontFamily:"monospace",background:"#1a1a1a",color:"#e5e7eb",overflow:"hidden" }}>
      {/* SIDEBAR */}
      <div style={{ width:sb?280:0,minWidth:sb?280:0,background:"#141414",borderRight:"1px solid #2d2d2d",display:"flex",flexDirection:"column",transition:"all .3s",overflow:"hidden" }}>
        <div style={{ padding:"14px 12px 10px",borderBottom:"1px solid #2d2d2d" }}>
          <div style={{ background:"#1a1a1a",borderRadius:6,padding:"7px 9px",marginBottom:8 }}>
            <div style={{ display:"flex",justifyContent:"space-between",fontSize:10,marginBottom:4,color:"#6b7280" }}>
              <span>Progresso</span>
              <span style={{ color:"#ffa116" }}>{done.length}/{EXERCISES.length} ({pct}%)</span>
            </div>
            <div style={{ height:4,background:"#2d2d2d",borderRadius:2,overflow:"hidden" }}>
              <div style={{ width:`${pct}%`,height:"100%",background:"#ffa116",borderRadius:2,transition:"width .5s" }} />
            </div>
          </div>
          <div style={{ display:"flex",gap:3,flexWrap:"wrap" }}>
            {CATS.map(c => (
              <button key={c} onClick={()=>setCat(c)} style={{ padding:"2px 7px",fontSize:9,borderRadius:8,border:"none",cursor:"pointer",background:cat===c?"#ffa116":"#2d2d2d",color:cat===c?"#141414":"#9ca3af",fontWeight:cat===c?700:500,fontFamily:"inherit" }}>{c}</button>
            ))}
          </div>
        </div>
        <div style={{ flex:1,overflowY:"auto",padding:"4px" }}>
          {filtered.map(ex => (
            <button key={ex.id} onClick={()=>pick(ex)} style={{ width:"100%",textAlign:"left",padding:"8px",marginBottom:1,borderRadius:5,border:sel?.id===ex.id?"1px solid #ffa11633":"1px solid transparent",background:sel?.id===ex.id?"#1f1f1f":"transparent",cursor:"pointer",fontFamily:"inherit",color:"#e5e7eb",display:"flex",alignItems:"flex-start",gap:7 }}>
              <div style={{ width:16,height:16,minWidth:16,borderRadius:"50%",border:done.includes(ex.id)?"none":"2px solid #374151",background:done.includes(ex.id)?"#22c55e":"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginTop:1,fontSize:9,color:"#fff",fontWeight:700 }}>
                {done.includes(ex.id)?"✓":""}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:11,fontWeight:600,marginBottom:2 }}>{ex.id}. {ex.title}</div>
                <div style={{ display:"flex",gap:4 }}>
                  <span style={{ fontSize:8,padding:"1px 4px",borderRadius:3,background:db(ex.difficulty),color:dc(ex.difficulty),fontWeight:600 }}>{ex.difficulty}</span>
                  <span style={{ fontSize:8,color:"#6b7280" }}>{ex.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ padding:"8px 12px",borderTop:"1px solid #2d2d2d" }}>
          <button onClick={()=>{setDone([]);localStorage.removeItem("cpp-v6");}} style={{ width:"100%",padding:"5px",fontSize:9,borderRadius:4,border:"1px solid #374151",background:"transparent",color:"#6b7280",cursor:"pointer",fontFamily:"inherit" }}>
            Reset progresso
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
        <div style={{ padding:"7px 12px",borderBottom:"1px solid #2d2d2d",display:"flex",alignItems:"center",gap:8,background:"#141414" }}>
          <button onClick={()=>setSb(!sb)} style={{ background:"none",border:"none",color:"#6b7280",cursor:"pointer",fontSize:14,padding:"2px 5px" }}>{sb?"◀":"▶"}</button>
          {sel && (
            <>
              <span style={{ fontSize:12,fontWeight:700 }}>{sel.id}. {sel.title}</span>
              <span style={{ fontSize:8,padding:"2px 6px",borderRadius:3,background:db(sel.difficulty),color:dc(sel.difficulty),fontWeight:600 }}>{sel.difficulty}</span>
              <div style={{ flex:1 }} />
              <span style={{ fontSize:9,color:"#374151" }}>⌘+Enter per eseguire</span>
              {done.includes(sel.id)
                ? <button onClick={markUndone} style={{ padding:"4px 14px",fontSize:10,borderRadius:4,border:"1px solid #22c55e44",background:"rgba(34,197,94,0.1)",color:"#22c55e",cursor:"pointer",fontFamily:"inherit",fontWeight:700 }}>✓ Solved</button>
                : <button onClick={markDone}   style={{ padding:"4px 14px",fontSize:10,borderRadius:4,border:"1px solid #374151",background:"transparent",color:"#6b7280",cursor:"pointer",fontFamily:"inherit" }}>Mark Solved</button>
              }
            </>
          )}
        </div>

        {!sel ? (
          <div style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,color:"#4b5563" }}>
            <div style={{ fontSize:40 }}>{"</>"}</div>
            <div style={{ fontSize:14,fontWeight:600,color:"#9ca3af" }}>Seleziona un esercizio dalla lista</div>
          </div>
        ) : (
          <div style={{ flex:1,display:"flex",overflow:"hidden" }}>
            {/* Descrizione */}
            <div style={{ width:"28%",minWidth:210,overflowY:"auto",padding:"16px 14px",borderRight:"1px solid #2d2d2d",background:"#141414" }}>
              <div style={{ marginBottom:14 }}>
                <div style={{ fontSize:10,fontWeight:700,color:"#ffa116",marginBottom:6 }}>Descrizione</div>
                <div style={{ fontSize:12,lineHeight:1.7,whiteSpace:"pre-wrap",color:"#d1d5db" }}>{sel.description}</div>
              </div>
              <div style={{ marginBottom:14 }}>
                <div style={{ fontSize:10,fontWeight:700,color:"#ffa116",marginBottom:6 }}>Firma</div>
                <div style={{ background:"#1a1a1a",border:"1px solid #2d2d2d",borderRadius:5,padding:"8px 10px",fontSize:11,color:"#93c5fd",fontFamily:"monospace" }}>{sel.signature}</div>
              </div>
              <div style={{ marginBottom:14 }}>
                <div style={{ fontSize:10,fontWeight:700,color:"#ffa116",marginBottom:6 }}>Esempi</div>
                {sel.publicCases.map((c,i) => (
                  <div key={i} style={{ background:"#1a1a1a",border:"1px solid #2d2d2d",borderRadius:5,padding:"8px 10px",marginBottom:6,fontSize:11 }}>
                    <div style={{ color:"#9ca3af",marginBottom:3 }}>Example {i+1}:</div>
                    <div><span style={{ color:"#6b7280" }}>Input: </span><span style={{ color:"#fcd34d" }}>{c.input}</span></div>
                    <div><span style={{ color:"#6b7280" }}>Output: </span><span style={{ color:"#86efac" }}>{c.expected}</span></div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize:10,fontWeight:700,color:"#ffa116",marginBottom:6 }}>Hint</div>
                {sel.hints.map((h,i) => (
                  <button key={i} onClick={()=>tglHint(i)} style={{ width:"100%",textAlign:"left",padding:"6px 8px",marginBottom:3,borderRadius:4,border:"1px solid #2d2d2d",background:hints.includes(i)?"#1a1a1a":"#141414",color:hints.includes(i)?"#fcd34d":"#6b7280",cursor:"pointer",fontFamily:"inherit",fontSize:10 }}>
                    <span style={{ marginRight:5 }}>{hints.includes(i)?"▾":"▸"}</span>Hint {i+1}
                    {hints.includes(i) && <div style={{ marginTop:4,paddingTop:4,borderTop:"1px solid #2d2d2d",color:"#d1d5db",fontWeight:400 }}>{h}</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Editor */}
            <div style={{ flex:1,display:"flex",flexDirection:"column",borderRight:"1px solid #2d2d2d",minWidth:0 }}>
              <div style={{ padding:"6px 12px",borderBottom:"1px solid #2d2d2d",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#141414" }}>
                <span style={{ fontSize:10,color:"#6b7280" }}>C++17 · GCC · Wandbox</span>
                <div style={{ display:"flex",gap:6 }}>
                  <button onClick={()=>{setCode(sel.starterCode);setRes(null);editorRef.current?.setValue(sel.starterCode);}} style={{ padding:"3px 8px",fontSize:10,borderRadius:4,border:"1px solid #374151",background:"transparent",color:"#6b7280",cursor:"pointer",fontFamily:"inherit" }}>Reset</button>
                  <button onClick={runTests} disabled={testing} style={{ padding:"5px 18px",fontSize:11,borderRadius:4,border:"none",background:testing?"#2d2d2d":"#ffa116",color:testing?"#6b7280":"#141414",cursor:testing?"default":"pointer",fontFamily:"inherit",fontWeight:800 }}>
                    {testing ? "Running..." : "▶  Run Tests"}
                  </button>
                </div>
              </div>
              <div style={{ flex:1,overflow:"hidden" }}>
                <MonacoEditor
                  height="100%"
                  language="cpp"
                  theme="vs-dark"
                  value={code}
                  onChange={v => setCode(v ?? "")}
                  onMount={handleEditorMount}
                  options={MONACO_OPTIONS}
                />
              </div>
            </div>

            {/* Test Panel */}
            <div style={{ width:"31%",minWidth:250,display:"flex",flexDirection:"column",background:"#141414",overflow:"hidden" }}>
              <TestPanel sel={sel} res={res} testing={testing} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
