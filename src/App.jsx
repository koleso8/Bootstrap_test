import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import About from './pages/About';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
