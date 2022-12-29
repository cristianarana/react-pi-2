import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const text = await Axios.get("./data.json");
      const { data } = text;
      setData(data);
    }
    getData();
  }, []);

  const { experience, education, about, skills } = data || {};
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/about'} element={<About data={ about }/>}/>
        <Route exact path={'/experience'} element={<Experience  data={ experience }/>}/>
        <Route exact path={'/education'} element={<Education data={ education } component={ skills } />}/>
        <Route exact path={'/resume'} element={<Resume />}/>
        <Route exact path={'/contact'} element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
