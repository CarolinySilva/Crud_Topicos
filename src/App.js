import Navbar from "./components/Navbar";
import Rotas from "./rotas";
import {HashRouter} from 'react-router-dom'


function App() {
  return (
    <>

    <HashRouter>

    <div className="container">
        <Navbar/>
        <Rotas/>
      </div>
      
    </HashRouter>
      
     
    </>
  );
}

export default App;
