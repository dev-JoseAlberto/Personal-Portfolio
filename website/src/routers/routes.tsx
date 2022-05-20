import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation} from 'react-router-dom';


export function  MostImportantRoutes () {
  let location = useLocation();

    return (
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </AnimatePresence>
    );
}