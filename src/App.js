import "./App.css";
import Header from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
