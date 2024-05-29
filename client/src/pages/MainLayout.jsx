import{ useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';



const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="font-poppins">
      {/* navbar  */}
      <Navbar />
      {/* outlet */}
      <div className="min-h-[calc(100vh-317px)]">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;