
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/contact';
import Footer from './components/footer';
import Project from './components/project';
import Resume from './components/resume';


function App() {
  return (
    <div className="App">
     <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
