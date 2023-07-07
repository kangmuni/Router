import React from 'react';
import useRouter from './useRouter';

const Root = () => {
  const { push } = useRouter();

  const onMove = () => {
    push('/about');
  };

  return (
    <>
      <h1>root</h1>
      <button onClick={onMove}>about</button>
    </>
  );
};

export default Root;
