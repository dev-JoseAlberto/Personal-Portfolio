import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { MostImportantRoutes } from './routers/routes';

function App() {
  return (
    <Router>
      <Navbar />
      <MostImportantRoutes />
    </Router>
  )
}

export default App
