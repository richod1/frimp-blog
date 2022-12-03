
import './App.css';
import Home from './components/Home';
// import PostCards from './components/PostCards';
 import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
//  import BlogBanner from './components/BlogBanner'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      </Router>
  
    

    
      
    </div>
  );
}

export default App;
