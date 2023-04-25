import './styles/App.css';
import { useSelector } from 'react-redux';
import Home from './components/Home';

function App() {
  const { state } = useSelector((store) => store.Home);
  if (state === 'Pending') {
    return (
      <div className="loader">
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
      </div>
    );
  }

  return <Home />;
}

export default App;
