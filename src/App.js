import "./App.css";
import Header from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails";
import FailMsj from "./components/FailMsj";
import Redirect from './components/Redirect'
import SearchMovie from "./components/SearchMovie";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pelicula/:id' element={<MovieDetails/>}/>
          <Route path='/movie/:id' element={<Redirect/>}/>
          <Route path='/search' element={<SearchMovie/>}/>
          <Route path='*' element={<FailMsj/>}/>
        </Routes>
    </div>
  );
}

export default App;
