import { Link } from "react-router-dom";

const Navbar = () => {
    const navigation=<>
        <li className="text-sm font-semibold"><Link to={'/'} >Home</Link></li>
        <li className="text-sm font-semibold"><Link to={'/Queries'} >Queries</Link></li>
        <li className="text-sm font-semibold"><Link to={'/RecommendationsForMe'} >RecommendationsFor Me</Link></li>
        <li className="text-sm font-semibold"><Link to={'/Myrecommendations'} >My recommendations</Link></li>
       
    </>
  return (
    <div className=" bg-base-100  shadow-md">
      <div className="navbar flex container px-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
            navigation
           }
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost font-bold lg:text-2xl text-xl text-wrap"><span className="text-secondary">ALTPRODINFO</span> .COM</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            navigation
           }
          </ul>
        </div>
        <div className="navbar-end">
         <Link className="" to={'/login'}><button className="btn bg-secondary lg:px-8 text-white font-bold rounded-md text-lg">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
