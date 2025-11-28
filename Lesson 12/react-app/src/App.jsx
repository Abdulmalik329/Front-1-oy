import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css"; 

  const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const UserDetails = lazy(() => import("./pages/UserDetails"));
const Books = lazy(() => import("./pages/Books"));

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/books">Books</Link>
      </nav>

      <Suspense fallback={<h2 className="loader">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
