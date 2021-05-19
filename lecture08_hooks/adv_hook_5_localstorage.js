import { useLocalStorage } from 'react-use';

const Demo = () => {
  const [value, setValue, remove] = useLocalStorage('my-key');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

export default Demo;