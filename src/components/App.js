import '../App.css';
import Home from './Home';
import About from './About';
import NotFound from './NotFound'; //to handle invalid routes
import { Routes, Route, Link } from 'react-router-dom'; //import these
import Landing from './Landing';
import Details from './QuoteDetails';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route element={<Landing/>}>
          {/* To display everything, we need an outlet */}
          <Route path='/' element={<Home/>}/>
          <Route path='/quotes' element={<Home/>}/>
          <Route path='/quotes/:id' element={<Details/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
