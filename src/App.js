import scheme from './scheme.json'
import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from './redux';
import React, { useState } from 'react';
import defaultContent from './assets/content.json'
import { SET_CONTENT } from './redux/actions';
import AppEditor from './components/AppEditor';
import AppSiderbar from './components/AppSidebar';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(SET_CONTENT(defaultContent))
  }, [])

  return (
    <div className='container'>
      <AppSiderbar list={scheme.data.map(x => ({ title: x.id }))} />
      {/* <AppEditor scheme={scheme.data[1]} /> */}
      
    </div>
  );
}

export default App;
