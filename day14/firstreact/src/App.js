import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import ShoppingList from './components/shoopingList';
function App() {
  return (
    <div className="App">
       
      <h1>Welcome to the world of React </h1>
      <h3>Addition of my Fav numbers are {10+3}</h3>
      <h3>Tommorow is {new Date().toLocaleDateString()}</h3>
      <h3>Current time is {new Date().toLocaleTimeString()}</h3>
      <h3>We Have training tomorrow?{15>10?"yes":"no"}</h3>
      <hr />
      <Home />
      <hr />
      <hr />
      <ShoppingList />
    </div>
  );
}

export default App;
