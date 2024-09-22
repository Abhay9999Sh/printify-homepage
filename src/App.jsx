import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import MainBanner from "./components/MainBanner";
import Feature from "./components/Feature";
import Process from "./components/Process";
import Socialproofs from "./components/Reviews/Socialproofs";
import Financials from "./components/Financials";

const App = () => {
  

  return (
    <>
       <Navbar />
       <MainBanner />
       <Feature />
       <Process />
       <Socialproofs />
       <Financials />
       <Footer />
    </>
  )
}

export default App
