import { useState } from 'react'

function App() {
    const [text, setText] = useState('');       // GOOD
    
    if (text == 3) {
        const [num, setNum] = useState(0);      // BAD: 不能在條件式呼叫
    }
    
    for(let i = 0; i < 3; i++) {
        const [apple, setApple] = useState(0);  // BAD: 不能在迴圈呼叫
    }
    
    return (
        <div>hook</div>
    )
}

export default App;