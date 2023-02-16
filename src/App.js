import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="My ReactApp" aboutText="About Us" linkNumber={3}/>
      <TextForm heading="Enter the text for analysis." />
    </>
  );
}

export default App;
