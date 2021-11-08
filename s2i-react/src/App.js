import SearchForm from "./component/SearchForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Book from "./component/Book";
import SideBar from "./component/SideBar";
import Cronology from "./component/Cronology";
function App() {
  return (
    <div className="App">
        <Router>
        <SideBar/>
          <Routes>
          <Route exact path="/" element={<SearchForm/>}/>

          <Route path="/books/:id" element={<Book/>}>
            
          </Route>
          <Route path="/cronology" element={<Cronology/>}>
            
          </Route>
          </Routes>
        </Router>

    </div>
  );
}

export default App;

