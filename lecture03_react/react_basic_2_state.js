const { useState } = require("react");

function App() {
    const hi = () => {
        alert('Hello, world!');
    };
    
    return (
        <div>
            <button onClick={hi}>Learn Python!</button>
        </div>
    )
}

function App() {
    const change = (e) => {
        console.log(e.target.value);
    };
    
    return (
        <div>
            <input type="text" onChange={change} />
        </div>
    )
}

// ---------- State ----------

function App() {
    return (
        <div>
            <div>目前數字：0</div>
            <button>+1</button>
        </div>
    )
}

function App() {
    let num = 0;
    const increase = () => {
        num += 1;
        console.log(num);
    };

    return (
        <div>
            <div>目前數字：{num}</div>
            <button onClick={increase}>+1</button>
        </div>
    )
}

// Correct one

import { useState } from 'react';

function App() {
    let [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
        console.log(num);
    };

    return (
        <div>
            <div>目前數字：{num}</div>
            <button onClick={increase}>+1</button>
        </div>
    )
}

// ---------- Conditional Renedering ----------

function App() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    };
    const logout = () => {
        setIsLoggedIn(false);
    };
    
    if (isLoggedIn) {
        return (
            <div>
                <div>機密內容</div>
                <button onClick={logout}>登出</button>
            </div>
        )
    } else {
        return (
            <div>
                <div>尚未登入</div>
                <button onClick={login}>登入</button>
            </div>
        )
    }
}

// or ternary using ? :
return (
    <div>
        { isLoggedIn ? (
            <div>
                <div>機密內容</div>
                <button onClick={logout}>登出</button>
            </div>
        ) : (
            <div>
                <div>尚未登入</div>
                <button onClick={login}>登入</button>
            </div>
        )}
    </div>
)
