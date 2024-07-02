import { transform } from "./utils/transform";

import "./App.css";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState({
    js: "",
    css: "",
  });

  const submit = useCallback(() => {
    if (!input) {
      return;
    }
    setLoading(true);
    transform(input)
      .then((result) => {
        setOutput(result);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [input]);

  return (
    <div className="app">
      <div className="split input">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexShrink: 1,
          }}
        >
          <h2 className="title">Input Code</h2>
          <button disabled={loading || !input} onClick={submit}>
            Generate Output
          </button>
        </div>
        <div style={{ flexGrow: 1 }}>
          <textarea
            autoFocus
            className="code"
            placeholder="Paste Input Code here"
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
          />
        </div>
      </div>
      <div className="split output">
        <div className="output-split">
          <h2 className="title">Output JS</h2>
          <textarea readOnly className="code" value={output.js} />
        </div>
        <div className="output-split">
          <h2 className="title">Output CSS</h2>
          <textarea readOnly className="code" value={output.css} />
        </div>
      </div>
    </div>
  );
}

export default App;
