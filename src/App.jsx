
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Operation from "./Components/Operation";
import NavigationBar from './Components/Navigation';
import HomePage from './Pages/Home'; 

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/operations" component={Operation} />
      </Routes>
    </Router>
  );
};

export default App;

