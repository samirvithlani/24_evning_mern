import logo from './logo.svg';
import './App.css';
import {Header} from './component/Header'
import Content from './component/Content'; //export default
import { Footer } from './component/Footer';
import { PlayGround } from './component/PlayGround';
import { UseStateDemo } from './component/UseStateDemo';
import { Loader } from './common/Loader';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { NetflixMovies } from './component/netflix/NetflixMovies';
import { NetflixShows } from './component/netflix/NetflixShows';
import { NetflixHome } from './component/netflix/NetflixHome';
import { Error404 } from './component/netflix/Error404';
import { Thriller } from './component/netflix/Thriller';
import { PlayContent } from './component/netflix/PlayContent';
import { ProductList } from './component/ProductList';
import { CreateUser } from './component/CreateUser';
import { TextForm } from './component/TextForm';
import { ApiDemo1 } from './component/api/ApiDemo1';
import { ApiDemo2 } from './component/api/ApiDemo2';
import { ApiDemo3 } from './component/api/ApiDemo3';


function App() {

  var title = "India"
  const data = {
    name: "React",
    version: "17.0.2"
  }
 

  //jsx


  return (
    <div className="App">
      {/* <Header title ={title} data={data}></Header> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/netflixmovies" element = {<NetflixMovies/>}></Route>
        <Route path="/netflixshows" element ={<NetflixShows/>}></Route>
        <Route path ="/netflixmovies/thriller" element = {<Thriller/>}></Route>
        <Route path ="/netflix/playcontent/:id" element ={<PlayContent/>}></Route>
        <Route path ="/productlist" element = {<ProductList/>}></Route>
        <Route path ="/createuser" element ={<CreateUser/>}></Route>
        <Route path ="/textarea" element = {<TextForm/>}></Route>
        <Route path ="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element ={<ApiDemo2/>}></Route>
        <Route path='/apidemo3' element ={<ApiDemo3/>}></Route>

        <Route path ="/" element ={<NetflixHome/>}></Route>
        {/* <Route path ="/*" element ={<h1>404</h1>}></Route> */}
        <Route path ="/*" element ={<Error404/>}></Route>
      </Routes>



      {/* <Content title={title} data={data}></Content> */}
      {/* <Footer></Footer> */}
      {/* <PlayGround/> */}
      {/* <UseStateDemo/> */}
      {/* <Loader></Loader> */}
       
    </div>
  );
}

export default App;
