import React from 'react';
import './App.css';
import { useNavigate, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const handleClick = () => {
    //window.location.href = "tel:+918160050770";
  };

  return (
    
      <div className="App">
        <Header>
        <nav>
          <Link to="login"></Link>
          <Link to="RippleButton"></Link>
        </nav>       
        </Header>
        <Outlet/>
      </div>
    
  );
}

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('/login');
    console.log("clicked")
  };

  return (
    <header className="header">
      <h1 className="website-name">SheSecure</h1>
      <nav className="nav-links">
        <a href="#query">Query</a>
        <a href="#log">Log Book</a>
        <a href="https://www.youtube.com/results?search_query=self+defence+techniques+for+women">Learning</a>
        <a href="#profile">My Profile</a>
        <button className="login-button" onClick={handleClick}>Log In</button>
      </nav>
    </header>
  );
}

export default App;
