import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { MostImportantRoutes } from './routers/routes';
import { BrowserRouter as Router, useLocation} from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <MostImportantRoutes />
        <Footer/>
      </Router>
    </div>
  )
}

export default App
