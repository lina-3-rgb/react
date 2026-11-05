import { useState } from "react";

const Matrix = () => {
    const [x1, setX1] = useState("5");
    const [x2, setX2] = useState("7");
    const [x3, setX3] = useState("-2");
    const [x4, setX4] = useState("9");

    const [y1, setY1] = useState("6");
    const [y2, setY2] = useState("10");
    const [y3, setY3] = useState("1");
    const [y4, setY4] = useState("8");

    const [z1, setZ1] = useState("9");
    const [z2, setZ2] = useState("12");
    const [z3, setZ3] = useState("6");
    const [z4, setZ4] = useState("9");

    const [w1, setW1] = useState("8");
    const [w2, setW2] = useState("3");
    const [w3, setW3] = useState("2");
    const [w4, setW4] = useState("4");

    const [result, setResult] = useState("6");
    const [result2, setResult2] = useState("8");
    const [result3, setResult3] = useState("7");
    const [result4, setResult4] = useState("9");

    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");
    const [w, setW] = useState("");

    const decide = () => {
        const a = Number(x1), b = Number(y1), c = Number(z1), d = Number(w1);
        const e = Number(x2), f = Number(y2), g = Number(z2), h = Number(w2);
        const i = Number(x3), j = Number(y3), k = Number(z3), l = Number(w3);
        const m = Number(x4), n = Number(y4), o = Number(z4), p = Number(w4);

        const r1 = Number(result), r2 = Number(result2);
        const r3 = Number(result3), r4 = Number(result4);

        const Dmain =
            a * (f * (k * p - l * o) - g * (j * p - l * n) + h * (j * o - k * n)) -
            b * (e * (k * p - l * o) - g * (i * p - l * m) + h * (i * o - k * m)) +
            c * (e * (j * p - l * n) - f * (i * p - l * m) + h * (i * n - j * m)) -
            d * (e * (j * o - k * n) - f * (i * o - k * m) + g * (i * n - j * m));

        const Dx =
            r1 * (f * (k * p - l * o) - g * (j * p - l * n) + h * (j * o - k * n)) -
            b * (r2 * (k * p - l * o) - g * (r3 * p - l * r4) + h * (r3 * o - k * r4)) +
            c * (r2 * (j * p - l * n) - f * (r3 * p - l * r4) + h * (r3 * n - j * r4)) -
            d * (r2 * (j * o - k * n) - f * (r3 * o - k * r4) + g * (r3 * n - j * r4));

        const Dy =
            a * (r2 * (k * p - l * o) - g * (r3 * p - l * r4) + h * (r3 * o - k * r4)) -
            r1 * (e * (k * p - l * o) - g * (i * p - l * m) + h * (i * o - k * m)) +
            c * (e * (r3 * p - l * r4) - r2 * (i * p - l * m) + h * (i * r4 - r3 * m)) -
            d * (e * (r3 * o - k * r4) - r2 * (i * o - k * m) + g * (i * r4 - r3 * m));

        const Dz =
            a * (f * (r3 * p - l * r4) - r2 * (j * p - l * n) + h * (j * r4 - r3 * n)) -
            b * (e * (r3 * p - l * r4) - r2 * (i * p - l * m) + h * (i * r4 - r3 * m)) +
            r1 * (e * (j * p - l * n) - f * (i * p - l * m) + h * (i * n - j * m)) -
            d * (e * (j * r4 - r3 * n) - f * (i * r4 - r3 * m) + r2 * (i * n - j * m));

        const Dw =
            a * (f * (k * r4 - r3 * o) - g * (j * r4 - r3 * n) + r2 * (j * o - k * n)) -
            b * (e * (k * r4 - r3 * o) - g * (i * r4 - r3 * m) + r2 * (i * o - k * m)) +
            c * (e * (j * r4 - r3 * n) - f * (i * r4 - r3 * m) + r2 * (i * n - j * m)) -
            r1 * (e * (j * o - k * n) - f * (i * o - k * m) + g * (i * n - j * m));

        setX(String(Math.round(Dx / Dmain * 100) / 100));
        setY(String(Math.round(Dy / Dmain * 100) / 100));
        setZ(String(Math.round(Dz / Dmain * 100) / 100));
        setW(String(Math.round(Dw / Dmain * 100) / 100));
    };

    return (
        <div>
            <h1>Matrix4x4</h1>

            <div>
                <input value={x1} onChange={e => setX1(e.target.value)} />
                <input value={y1} onChange={e => setY1(e.target.value)} />
                <input value={z1} onChange={e => setZ1(e.target.value)} />
                <input value={w1} onChange={e => setW1(e.target.value)} />
                <input value={result} onChange={e => setResult(e.target.value)} />
            </div>

            <div>
                <input value={x2} onChange={e => setX2(e.target.value)} />
                <input value={y2} onChange={e => setY2(e.target.value)} />
                <input value={z2} onChange={e => setZ2(e.target.value)} />
                <input value={w2} onChange={e => setW2(e.target.value)} />
                <input value={result2} onChange={e => setResult2(e.target.value)} />
            </div>

            <div>
                <input value={x3} onChange={e => setX3(e.target.value)} />
                <input value={y3} onChange={e => setY3(e.target.value)} />
                <input value={z3} onChange={e => setZ3(e.target.value)} />
                <input value={w3} onChange={e => setW3(e.target.value)} />
                <input value={result3} onChange={e => setResult3(e.target.value)} />
            </div>

            <div>
                <input value={x4} onChange={e => setX4(e.target.value)} />
                <input value={y4} onChange={e => setY4(e.target.value)} />
                <input value={z4} onChange={e => setZ4(e.target.value)} />
                <input value={w4} onChange={e => setW4(e.target.value)} />
                <input value={result4} onChange={e => setResult4(e.target.value)} />
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