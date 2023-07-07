import React from 'react';
import useRouter from './useRouter';

const About = () => {
  const { push } = useRouter();

  const onMove = () => {
    push('/');
  };

  return (
    <>
      <h1>about</h1>
      <button onClick={onMove}>go main</button>
    </>
  );
};

export default About;
