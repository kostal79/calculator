import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.scss';
import CalculatorKit from './components/CalculatorKit/CalculatorKit';
import DropContainer from './components/DropContainer/DropContainer';

const App = () => {

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <CalculatorKit />
        <DropContainer />
      </DndProvider>
    </div>
  );
};

export default App;
