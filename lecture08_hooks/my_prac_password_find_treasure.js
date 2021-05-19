import { useEffect, useState } from 'react';
import {useKeyPressEvent} from 'react-use';

const Demo = () => {
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState("");

  const password = e => {
      let s = record + e.key;
      let l = s.length;

      if (l >= 4) s = s.slice(l - 3, l);
      setRecord(s);
  }

  useEffect(() => {
    console.log(record);
    
    if (record === 'act')
        setShow(true);
    else
        setShow(false);
  }, [record]);

  useKeyPressEvent('a', password);
  useKeyPressEvent('c', password);
  useKeyPressEvent('t', password);

  return (
    <div>
      There is nothing. <br />
      Please type password "act".
      {show && <div>Treasure!</div>}
    </div>
  );
};

export default Demo;