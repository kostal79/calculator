import './App.scss';
import CalculatorKit from './components/CalculatorKit/CalculatorKit';
import DropArea from './components/DropArea/DropArea';

const App = () => {

  return (
    <div className="app">
      <CalculatorKit />
      <DropArea />
    </div>
  );
};

export default App;
