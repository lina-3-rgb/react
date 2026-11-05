import { useState } from "react";

const Matrisa = () => {
    const [x1, setX1] = useState("");
    const [x2, setX2] = useState("");
    const [x3, setX3] = useState("");
    const [y1, setY1] = useState("");
    const [y2, setY2] = useState("");
    const [y3, setY3] = useState("");
    const [z1, setZ1] = useState("");
    const [z2, setZ2] = useState("");
    const [z3, setZ3] = useState("");
    const [res1, setRes1] = useState("");
    const [res2, setRes2] = useState("");
    const [res3, setRes3] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");

    const Dis = () => {

        const Dismain = ((Number(x1) * Number(y2) * Number(z3)) +
            (Number(x2) * Number(y3) * Number(z1)) +
            (Number(x3) * Number(y1) * Number(z2))) -
            ((Number(z1) * Number(y2) * Number(x3)) +
                (Number(y1) * Number(x2) * Number(z3)) +
                (Number(z2) * Number(y3) * Number(x1)));

        const DisX = ((Number(res1) * Number(y2) * Number(z3)) +
            (Number(res2) * Number(y3) * Number(z1)) +
            (Number(res3) * Number(y1) * Number(z2))) -
            ((Number(z1) * Number(y2) * Number(res3)) +
                (Number(y1) * Number(res2) * Number(z3)) +
                (Number(z2) * Number(y3) * Number(res1)));

        const DisY = ((Number(x1) * Number(res2) * Number(z3)) +
            (Number(x2) * Number(res3) * Number(z1)) +
            (Number(x3) * Number(res1) * Number(z2))) -
            ((Number(z1) * Number(res2) * Number(x3)) +
                (Number(res1) * Number(x2) * Number(z3)) +
                (Number(z2) * Number(res3) * Number(x1)));

        const DisZ = ((Number(x1) * Number(y2) * Number(res3)) +
            (Number(x2) * Number(y3) * Number(res1)) +
            (Number(x3) * Number(y1) * Number(res2))) -
            ((Number(res1) * Number(y2) * Number(x3)) +
                (Number(y1) * Number(x2) * Number(res3)) +
                (Number(res2) * Number(y3) * Number(x1)));

        setX(String(Math.round(DisX / Dismain * 100) / 100));
        setY(String(Math.round(DisY / Dismain * 100) / 100));
        setZ(String(Math.round(DisZ / Dismain * 100) / 100));

    }
    return (
        <div>
            <h1>Реши матрицу</h1>
            <div>
                <input type="text" value={x1} onChange={(e) => setX1(e.target.value)} />
                <input type="text" value={y1} onChange={(e) => setY1(e.target.value)} />
                <input type="text" value={z1} onChange={(e) => setZ1(e.target.value)} />
                <input type="text" value={res1} onChange={(e) => setRes1(e.target.value)} />
            </div>

            <div>
                <input type="text" value={x2} onChange={(e) => setX2(e.target.value)} />
                <input type="text" value={y2} onChange={(e) => setY2(e.target.value)} />
                <input type="text" value={z2} onChange={(e) => setZ2(e.target.value)} />
                <input type="text" value={res2} onChange={(e) => setRes2(e.target.value)} />
            </div>

            <div>
                <input type="text" value={x3} onChange={(e) => setX3(e.target.value)} />
                <input type="text" value={y3} onChange={(e) => setY3(e.target.value)} />
                <input type="text" value={z3} onChange={(e) => setZ3(e.target.value)} />
                <input type="text" value={res3} onChange={(e) => setRes3(e.target.value)} />
            </div>

            <button onClick={Dis}>Решить:</button>
            x={x}
            y={y}
            z={z}
        </div>

    )



};

export default Matrisa;