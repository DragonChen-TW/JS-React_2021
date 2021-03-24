// ------------ Array mix JSX ------------
const arr = [1, 2, 3, 4, 5];

// mix with JSX
return (
    <div>
        {arr.map(x => <div>{x}</div>)}
    </div>
);

// const arr = [1, 2, 3, 4, 5];

// complex JSX and Array
return (
    <div>
        <ul>
            {arr.map(x => <li>No. {x}</li>)}
        </ul>
    </div>
);

// more complex JSX
return (
    <div>
        偶數有：
        <ul>
            { arr
                .filter(x => x % 2 === 0)
                .map(x => <li>No. {x}</li>) }
        </ul>
    </div>
);


// ------------ Practice ------------
import data from './1999.json';

function App() {
    return (
        <div>
            {/* 把 data 拿出來 map，依序顯示他的行政區跟案件狀況 */}
        </div>
    )
}
export default App;