import logo from './logo.svg';
import './App.css';
import {Header} from './component/Header'
import Content from './component/Content'; //export default
import { Footer } from './component/Footer';


function App() {

 

  //jsx


  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
       
    </div>
  );
}

export default App;
