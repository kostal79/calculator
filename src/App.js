import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.scss';
import CalculatorKit from './components/CalculatorKit/CalculatorKit';
import DropArea from './components/DropArea/DropArea';

const App = () => {

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <CalculatorKit />
        <DropArea />
      </DndProvider>
    </div>
  );
};

export default App;
