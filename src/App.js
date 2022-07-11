import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from './redux';
import React, { useState } from 'react';
import defaultContent from './assets/content.json'
import { SET_CONTENT } from './redux/actions';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(SET_CONTENT(defaultContent))
  }, [])

  return (
    <div>
      <div>side bar</div>
    </div>
  );
}

export default App;
