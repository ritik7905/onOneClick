// styles
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// Router
import { Route, Routes } from 'react-router-dom';
// pages
import Navigation from './components/layout/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import BlogDetails from './components/Demo/blogDetails/BlogDetails';
import CreateBlog from './components/Demo/createBlog/CreateBlog';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>

    </div>
  );
}

export default App;
