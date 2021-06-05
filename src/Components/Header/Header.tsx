import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-lightBlue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          heap.exchange
        </span>
      </div>
      <div className="w-full block flex-grow md:flex md:justify-end md:w-auto">
        <div>
          <Link
            to="/"
            className="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-lightBlue-500 hover:bg-white mt-4 md:mt-0"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-lightBlue-500 hover:bg-white mt-4 md:mt-0"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
