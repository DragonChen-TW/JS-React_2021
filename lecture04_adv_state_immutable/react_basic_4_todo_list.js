// ---------- TODO list ----------

function App() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const onChange = e => setText(e.target.value);

    const insert = () => {
        const newList = Array.from(list);
        newList.push(text);
        setList(newList);
        setText('');
        console.log(newList);
    }

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={insert}>新增</button>
            </p>
            <ul>
                <h4>TODO:</h4>
                {
                    list.map(ele => <li>{ele}</li>)
                }
            </ul>
        </div>
    );
}

// add feature remove item using index 

function App() {
    const [text, setText] = useState('');
    const [num, setNum] = useState(0); // new
    const [list, setList] = useState([]);

    const onChange = e => setText(e.target.value);
    const onChange2 = e => setNum(parseInt(e.target.value)); // new

    const remove = () => { // new
        let newList = Array.from(list);
        newList = newList.filter((x, i) => i !== num);
        // num = 2
        // ('apple', 0)     --->    i !== num  is true
        // ('banana', 1)    --->    i !== num  is true
        // ('candy', 2)     --->    i !== num  is false
        // ('dad', 3)       --->    i !== num  is true
        // candy will not be kept
        console.log(newList);
        setList(newList);
    }

    const insert = () => {
        const newList = Array.from(list);
        newList.push(text);
        setList(newList);
        setText('');
        console.log(newList);
    }

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={insert}>新增</button>
            </p>
            <p> {/* new */}
                <input type="number" value={num} onChange={onChange2} />
                <button onClick={remove}>刪除</button>
            </p>
            <ul>
                <h3>TODO:</h3>
                {
                    list.map(ele => <li>{ele}</li>)
                }
            </ul>
        </div>
    );
}

export default App;