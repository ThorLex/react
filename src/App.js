import './index.css';
import Home from './home'
import Navbar from"./navbar"
import Create from"./create";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Blogdetail from './blogDetails';
import NotFound from './NotFound';


function App() {
  const title='welcome to a new blog'
  return (
    <Router>
          <div className="App">
            {/* <div className="content 1"> Voici un exemple de contenu </div>
          <code>{title + " "+Math.random()*10} </code>
          <code>{ Math.random()*10} </code> */}
          
          <Navbar/>  
          <div className="content">
            <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/blogs/:id' element={<Blogdetail/>}/>
            <Route exact path='*' element={<NotFound/>}/>
              
              
          
            </Routes>
          
          </div>
        </div>
  </Router>   
  );
}

export default App;
