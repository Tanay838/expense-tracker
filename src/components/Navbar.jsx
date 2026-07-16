import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <div className="logo-icon">💰</div>

          <div>
            <h2>Expense Tracker</h2>
            <p>Manage your money smarter</p>
          </div>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;