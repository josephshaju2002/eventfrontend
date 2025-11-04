import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Works from "./Pages/Works";
import BookEvent from "./Pages/Bookevent";
import AdminDashboard from "./Pages/Admin";
import PageNotFound from './Pages/PageNotFound';
import Contactus from './Pages/Contactus';

import WeddingWorks from './Pages/WeddingWorks';
import BirthdayWorks from './Pages/BirthdayWorks';
import BaptismWorks from './Pages/BaptismWork';
import CorporateWorks from './Pages/CoporateWorks';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />

        <Route path="/works/wedding" element={<WeddingWorks />} />
        <Route path='/works/birthday' element={<BirthdayWorks />} />
        <Route path='/works/baptism' element={<BaptismWorks />} />
        <Route path="/works/corporate" element={<CorporateWorks />} />

        <Route path="/book-event" element={<BookEvent />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
