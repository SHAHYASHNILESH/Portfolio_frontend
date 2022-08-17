import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/AdminPanel";
import TimeLines from "./components/TimeLines";
import Project from "./components/Project";
import Loader from "./components/Loader";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const {loading,user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //console.log(user);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <TimeLines /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
