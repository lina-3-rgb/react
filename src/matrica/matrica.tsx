import { useState } from "react";

const Matrisa = () => {
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");
  const [y1, setY1] = useState("");
  const [y2, setY2] = useState("");
  const [res1, setRes1] = useState("");
  const [res2, setRes2] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const Dis = () => {
    
    const Dismain = Number(x1) * Number(y2) - Number(y1) * Number(x2);
    const disX = Number(res1) * Number(y2) - Number(res2) * Number(y1);
    const disY = Number(x1) * Number(res2) - Number(x2) * Number(res1);
    setX(String(Math.round(disX / Dismain * 100) / 100));
    setY(String(Math.round(disY / Dismain * 100) / 100));
  }

  return (
    <div>
      <h1>Реши</h1>

      <div>
        <input type="text" value={x1} onChange={(e) => setX1(e.target.value)} />
        <input type="text" value={y1} onChange={(e) => setY1(e.target.value)} />
        <input type="text" value={res1} onChange={(e) => setRes1(e.target.value)} />
      </div>

      <div>
        <input type="text" value={x2} onChange={(e) => setX2(e.target.value)} />
        <input type="text" value={y2} onChange={(e) => setY2(e.target.value)} />
        <input type="text" value={res2} onChange={(e) => setRes2(e.target.value)} />
      </div>
      <button onClick={Dis}>Решить:</button>
      x={x}
      y={y}


    </div>

  );
};

export default Matrisa;