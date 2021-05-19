import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
 
  const update = (e) => { setText(e.target.value); };
  
  useEffect(() => {
      console.log('呼叫此 function');
      document.title = `你按了 ${count} 次 和 ${text}`;
  }, [text, count]);

  return (
    <div>
      <p>你點了 {count} 下</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <input type="text" value={text} onChange={update} />
    </div>
  );
}

export default Example;