import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
      console.log('呼叫此 function');
      document.title = `你按了 ${count} 次`;
  });

  return (
    <div>
      <p>你點了 {count} 下</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Example;