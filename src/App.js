import {Route , Routes} from 'react-router-dom';
import Home from './components/Home.jsx'

function App() {
  return (
    <div className='containerglobal'>
   <Routes>
    <Route exact path='/' element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
