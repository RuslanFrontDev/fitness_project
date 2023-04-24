import { Route, Routes, Link } from "react-router-dom";
import FitnessHomeLayout from "./pages/homeLayout/FitnessHomeLayout";
import About from "./pages/homeLayout/About";
import SportsMovie from "./pages/homeLayout/SportsMovie";
import Nutrition from "./pages/homeLayout/Nutrition";
import News from "./pages/homeLayout/News";
import { Icon } from "./icons/icon";
import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FitnessHome from "./pages/FitnessHome";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
function App() {
  const menubarbtnref = useRef();
  const menubar = () => {
    menubarbtnref.current.classList.toggle("hidden");
  };
  return (
    <>
      <div className=" md:hidden flex items-center bg-blue-400 rounded justify-between hover:bg-slate-600 hover:text-white transition duration-200">
        <Link className="flex items-center justify-center" to="/">
          <h1 className="text-xl font-bold">Rnr.TV</h1>
          <Icon name="rnrtv" />
        </Link>
        <h2
          onClick={menubar}
          className="border border-black px-5 h-15 mr-2 cursor-pointer bg-white  text-blue-700"
        >
          Menu
        </h2>
      </div>
      <div
        ref={menubarbtnref}
        className="md:hidden hidden transition duration-700 space-y-1"
      >
        <div className="  w-full bg-slate-700 flex p-2 items-center justify-center">
          <Link className="text-white font-semibold" to="/about">
            Haqqımızda
          </Link>
        </div>
        <div className="w-full bg-slate-700 flex p-2 items-center justify-center">
          <Link className="text-white font-semibold" to="/movie">
            İdman Hərəkətləri
          </Link>
        </div>
        <div className="w-full bg-slate-700 flex p-2 items-center justify-center">
          <Link className="text-white font-semibold" to="/nutrition">
            Qidalanmaq
          </Link>
        </div>
        <div className="w-full bg-slate-700 flex p-2 items-center justify-center">
          <Link className="text-white font-semibold" to="/news">
            Xəbərlər
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 p-3 hidden md:block ">
        <nav className="container flex items-center justify-between ">
          <Link
            className="text-[#ddd] bg-slate-600 flex items-center justify-center h-14 p-2 rounded hover:bg-sky-900 hover:text-white transition-all transition duration-500"
            to="/"
          >
            RNR.TV
            <Icon name="rnrtv" />
          </Link>
          <Link
            className="text-[#ddd] bg-slate-600 flex items-center justify-center h-14 p-2 rounded hover:bg-sky-900 hover:text-white transition-all transition duration-500"
            to="/about"
          >
            Haqqımızda
            <Icon name="about" />
          </Link>
          <Link
            className="text-[#ddd] bg-slate-600 flex items-center justify-center h-14 p-2 rounded hover:bg-sky-900 hover:text-white transition-all transition duration-500"
            to="/movie"
          >
            İdman Hərəkətləri
            <Icon name="movie" />
          </Link>
          <Link
            className="text-[#ddd] bg-slate-600 flex items-center justify-center h-14 p-2 rounded hover:bg-sky-900 hover:text-white transition-all transition duration-500"
            to="/nutrition"
          >
            Qidalanmaq
            <Icon name="eat" />
          </Link>
          <Link
            className="text-[#ddd] bg-slate-600 flex items-center justify-center h-14 p-2 rounded hover:bg-sky-900 hover:text-white transition-all transition duration-500"
            to="/news"
          >
            Xəbərlər
            <Icon name="news" />
          </Link>
        </nav>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<FitnessHomeLayout />}>
          <Route index={true} element={<FitnessHome />} />
          <Route path="about" element={<About />} />
          <Route path="movie" element={<PrivateRoute><SportsMovie/></PrivateRoute>} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="news" element={<News />} />
        </Route>
        <Route path="user/register" element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
