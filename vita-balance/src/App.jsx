import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CardsList from './components/CardsList';
import SneakPeak from './components/SneakPeak';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Challange from './components/pages/Challange';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <About />
                <CardsList />
                <SneakPeak />
              </>
            } />
            <Route path='/sign_up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/challenge' element={<Challange />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
