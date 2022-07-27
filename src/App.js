import scheme from './scheme.json'
import './App.scss';
import Table from './components/AppTable.js'
import { useDispatch, useSelector } from 'react-redux';
import defaultContent from './assets/content.json'
import { SET_CONTENT } from './redux/actions';
import AppEditor from './components/AppEditor';
import AppSiderbar from './components/AppSidebar';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const content = useSelector(x => x.content)

  useEffect(() => {
    dispatch(SET_CONTENT(defaultContent))
  }, [])

  function onSave(id, value) {
    const newContent = { ...content }

    console.log(id,value)
    newContent[id] = value

    dispatch(SET_CONTENT(newContent))
  }

  return (
    <div className='container'>
      <AppSiderbar list={scheme.data} />
      {content &&
        <AppEditor scheme={scheme.data[1]} state={content} onSave={onSave} />
      }
    </div>
  );
}

export default App;
