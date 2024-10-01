import logo from './logo.svg';
import './App.css';
import {Header} from './component/Header'
import Content from './component/Content'; //export default
import { Footer } from './component/Footer';
import { PlayGround } from './component/PlayGround';


function App() {

  var title = "India"
  const data = {
    name: "React",
    version: "17.0.2"
  }
 

  //jsx


  return (
    <div className="App">
      <Header title ={title} data={data}></Header>

      {/* <Content title={title} data={data}></Content> */}
      {/* <Footer></Footer> */}
      <PlayGround/>
       
    </div>
  );
}

export default App;
