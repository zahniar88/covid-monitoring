import Container from "../components/Container";
import Global from "../components/Covid/Global";
import Navbar from "../components/Navbar";
import SeoMeta from '../components/SeoMeta'
import Lokal from '../components/Covid/Lokal'
import Footer from "../components/Footer";


const Home = () => {
  
  return (
    <div>
      
      <SeoMeta pageTitle="Beranda" />
      <Navbar />

      <Container>
        <h1 className="uppercase font-semibold text-center text-2xl text-emerald-600">
          DATA COVID 19
        </h1>
        <p className="text-center text-base text-gray-500">
          Monitoring virus corona (covid 19) secara live
        </p>
        <hr className="mt-2 mb-5 border-2 rounded-full border-teal-500" />

        <Global />
        <Lokal />
      </Container>

      <Footer />

    </div>
  )

}

export default Home