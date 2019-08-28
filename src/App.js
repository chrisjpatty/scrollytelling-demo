import React from 'react';
import useScrollTop from './hooks/useScrollTop'
import MainLayer from './components/MainLayer'
import 'normalize.css';
import './App.css';

const App = () => {
  const scrollTop = useScrollTop();
  console.log(scrollTop);
  return (
    <div>
      <MainLayer />
      <MainLayer />
    </div>
  );
};

export default App;
