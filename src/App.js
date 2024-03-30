import './App.css';
import Hoc from './componenet/Hoc';
import Hoc2 from './componenet/Hoc2';
import HocBlue from './componenet/HocBlue';

function App() {
  return (
    <div className="App">
     <Hoc2 cmp={Hoc}/>
     <HocBlue cmp={Hoc}/>
    </div>
  );
}

export default App;
