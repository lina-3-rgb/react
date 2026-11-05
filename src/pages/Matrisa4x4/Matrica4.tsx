import { useState } from "react";

const Matrix = () => {
    const [x1, setX1] = useState();
    const [x2, setX2] = useState();
    const [x3, setX3] = useState();
    const [x4, setX4] = useState();

    const [y1, setY1] = useState();
    const [y2, setY2] = useState();
    const [y3, setY3] = useState();
    const [y4, setY4] = useState();

    const [z1, setZ1] = useState();
    const [z2, setZ2] = useState();
    const [z3, setZ3] = useState();
    const [z4, setZ4] = useState();

    const [w1, setW1] = useState();
    const [w2, setW2] = useState();
    const [w3, setW3] = useState();
    const [w4, setW4] = useState();

    const [res1, setRes1] = useState();
    const [res2, setRes2] = useState();
    const [res3, setRes3] = useState();
    const [res4, setRes4] = useState();

    const [x, setX] = useState();
    const [y, setY] = useState();
    const [z, setZ] = useState();
    const [w, setW] = useState();

    const matriс = (x1: number, x2: number, x3: number, x4: number, y1: number, y2: number, y3: number, y4: number, z1: number, z2: number, z3: number, z4: number, w1: number, w2: number, w3: number, w4: number) => {
        x1 * ((y2 * z3 * w4) + (y3 * z4 * w2) + (y4 * z2 * w3) -
            ((w2 * z3 * y4) + (z2 * y3 * w4) + (w3 * z4 * y2))) -
            y1 * ((x2 * z3 * w4) + (x3 * z4 * w2) + (x4 * z2 * w3) -
                ((w2 * z3 * x4) + (z2 * x3 * w4) + (w3 * z4 * x2))) +
            z1 * ((x2 * y3 * w4) + (x3 * y4 * w2) + (x4 * y2 * w3) -
                ((w2 * y3 * x4) + (y2 * x3 * w4) + (w3 * y4 * x2))) -
            w1 * ((x2 * y3 * z4) + (x3 * y4 * z2) + (x4 * y2 * z3) -
                ((z2 * y3 * x4) + (y2 * x3 * z4) + (z3 * y4 * x2)));
        return
    }
const Dis = () => {
    const Dmain = matriс(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, w1, w2, w3, w4)

    const Dx =  matriс(res1, res2, res3, res4, y1, y2, y3, y4, z1, z2, z3, z4, w1, w2, w3, w4)
       

    const Dy = matriс(x1, x2, x3, x4, res1, res2, res3, res4, z1, z2, z3, z4, w1, w2, w3, w4)
       
    const Dz = matriс(x1, x2, x3, x4, y1, y2, y3, y4, res1, res2, res3, res4, w1, w2, w3, w4)
       

    const Dw = matriс(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, res1, res2, res3, res4)

        setX(String(DisX / Dismain));
        setY(String(DisY / Dismain));
        setZ(String(DisZ / Dismain));
}
       

return (
    <div>
        <h1>Matrix4x4</h1>

        <div>
            <input value={x1} onChange={e => setX1(e.target.value)} />
            <input value={y1} onChange={e => setY1(e.target.value)} />
            <input value={z1} onChange={e => setZ1(e.target.value)} />
            <input value={w1} onChange={e => setW1(e.target.value)} />
            <input value={res1} onChange={e => setResult(e.target.value)} />
        </div>

        <div>
            <input value={x2} onChange={e => setX2(e.target.value)} />
            <input value={y2} onChange={e => setY2(e.target.value)} />
            <input value={z2} onChange={e => setZ2(e.target.value)} />
            <input value={w2} onChange={e => setW2(e.target.value)} />
            <input value={res2} onChange={e => setResult2(e.target.value)} />
        </div>

        <div>
            <input value={x3} onChange={e => setX3(e.target.value)} />
            <input value={y3} onChange={e => setY3(e.target.value)} />
            <input value={z3} onChange={e => setZ3(e.target.value)} />
            <input value={w3} onChange={e => setW3(e.target.value)} />
            <input value={res3} onChange={e => setResult3(e.target.value)} />
        </div>

        <div>
            <input value={x4} onChange={e => setX4(e.target.value)} />
            <input value={y4} onChange={e => setY4(e.target.value)} />
            <input value={z4} onChange={e => setZ4(e.target.value)} />
            <input value={w4} onChange={e => setW4(e.target.value)} />
            <input value={res4} onChange={e => setResult4(e.target.value)} />
        </div>

        <button onClick={decide}>Решить</button>

        <div>
            x={x}<br />
            y={y}<br />
            z={z}<br />
            w={w}
        </div>
    </div>
);
};

export default Matrix;