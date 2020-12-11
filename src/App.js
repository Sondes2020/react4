import './App.css';
import Address from './Components/Profile/Address';
import ProfilPhoto from './Components/Profile/ProfilPhoto';
import FullName from './Components/Profile/FullName';

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
