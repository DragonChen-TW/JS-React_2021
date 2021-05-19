import {useGeolocation} from 'react-use';

const Demo = () => {
  const state = useGeolocation();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default Demo;