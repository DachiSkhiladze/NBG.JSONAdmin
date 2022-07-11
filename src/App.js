import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from './redux';

function App() {
  const { content } = useSelector(x => x)
  const dispatch = useDispatch()

  return (
    <div>
      <div>side bar</div>
    </div>
  );
}

export default App;
