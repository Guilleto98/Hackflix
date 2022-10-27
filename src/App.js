import "./App.css";
import Header from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails";
import FailMsj from "./components/FailMsj";

function App() {
  
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/peliculas/:id' element={<MovieDetails/>}/>
          <Route path='*' element={<FailMsj/>}/>
        </Routes>
    </div>
  );
}

export default App;
