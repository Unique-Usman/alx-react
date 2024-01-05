import logo from './Hoberlton.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from "./utils"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            value=""
            name="email"
            id="email"/>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            value=""
            name="password"
            id="password"/>
          <input
            type="submit"
            value="OK"
            style={{margin: "0 0.5rem"}}
          />
        </form>
      </body>
      <footer>Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default App;
