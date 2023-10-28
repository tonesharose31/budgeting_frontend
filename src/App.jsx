
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import OperationShow from './Components/OperationShow';
import NavigationBar from './Components/Navigation';
import HomePage from './Pages/Home'; 

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/operations" component={OperationShow} />
      </Routes>
    </Router>
  );
};

export default App;

