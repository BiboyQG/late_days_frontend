import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar({ user, handleClick }) {

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl z-50">
      <div className="flex items-center px-6 py-3">
        <Link to="/">
          <img
            src="https://brand.illinois.edu/wp-content/uploads/2024/02/Illinois_formal_wordmark_fullcolor_rgb-1-1.png"
            alt="Logo"
            className="h-8 w-auto mr-4"
          />
        </Link>
        <div className="h-6 w-px bg-gray-300 mr-4"></div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <a href="https://illinois.edu/about/index.html" className="text-gray-700 hover:text-gray-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li>
            <a href="mailto:banghao2@illinois.edu" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </li>
          {user && (
            <li>
              <button onClick={handleClick} className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;