import './App.css';
import Folder from './folder/Folder';
import explorer from './folder/data';

function App() {
  return (
    <div className="App">
      <h1>Sidebar Navigation Project</h1>
      <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
