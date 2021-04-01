import { useState } from 'react';

function App() {
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);
    const [tileWidth, setTileWidth] = useState(0);
    const [tileLength, setTileLength] = useState(0);
    const [output, setOutput] = useState(0);

    const onChange1 = e => setWidth(parseInt(e.target.value));
    const onChange2 = e => setLength(parseInt(e.target.value));
    const onChange3 = e => setTileWidth(parseInt(e.target.value));
    const onChange4 = e => setTileLength(parseInt(e.target.value));

    const calculate = () => {
        // console.log(width);
        // console.log(length);
        // console.log(tileWidth);
        // console.log(tileLength);
        let numTiles = (width * length) / (tileWidth * tileLength);
        setOutput(numTiles);
    }

    return (
        <div>
            <p>
                地板寬度：<input type="number" value={width} onChange={onChange1} />
                地板長度：<input type="number" value={length} onChange={onChange2} />
            </p>
            <p>
                磁磚寬度：<input type="number" value={tileWidth} onChange={onChange3} />
                磁磚長度：<input type="number" value={tileLength} onChange={onChange4} />
            </p>
            <button onClick={calculate}>計算</button>
            <p>
                <div>{output}</div>
            </p>
        </div>
    );
}

export default App;