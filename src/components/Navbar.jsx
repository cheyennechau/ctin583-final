import { Link } from 'react-router-dom';
import '../index.css'; // Make sure styles are loaded if not global

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;




// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-100 fixed top-0 left-0 w-full z-50 h-16 shadow p-10">
//       <div className="max-w-screen-md mx-auto h-full flex items-center justify-between px-6">
//         <Link to="/" className="text-center">Home</Link>
//         <Link to="/about" className="text-center">About</Link>
//         <Link to="/projects" className="text-center">Projects</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
