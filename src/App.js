import './App.scss';
import Table from './components/AppTable.js'
import { useDispatch, useSelector } from 'react-redux';
import defaultContent from './assets/content.json'
import { SET_CONTENT } from './redux/actions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  var titles = ["Name", "SurName"];
  var data = [["Dachi", "Skhiladze"],
  ["Bubu", "Skhiladze"]];
  useEffect(() => {
    dispatch(SET_CONTENT(defaultContent))
  }, [])

  return (
    <div>
      <Table titles={titles}
        data={data} />
    </div>
  );
}

export default App;
