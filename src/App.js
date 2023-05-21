import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import MovieDetails from "./page/moviedetails/MovieDetails";
import MovieList from "./page/movielist/MovieList";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
