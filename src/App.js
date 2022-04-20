// styles
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.less';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Navigation from './components/layout/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import BlogDetails from './components/Demo/blogDetails/BlogDetails';
import CreateBlog from './components/Demo/createBlog/CreateBlog';
import EditBlogs from './components/Demo/EditBlogs/EditBlogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/edit/:id" element={<EditBlogs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
