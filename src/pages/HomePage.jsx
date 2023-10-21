import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Ignition from "../components/Ignition";
import VisitCarShop from "../components/VisitCarShop";
import BrandCart from "../components/brandCart";
import NodataFound from "../components/NodataFound";


const HomePage = () => {
    const brands=useLoaderData();
    console.log(brands)
  return (
    <div>
        <Banner></Banner>
        <div>
            <div>
            <h2 className="text-4xl font-bold text-center py-10">Brand Collection</h2>
            {
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
              {
                  brands.map(brand=><BrandCart key={brand.id} brand={brand}></BrandCart>)
              }
              </div>
              
            }
            </div>
             <VisitCarShop ></VisitCarShop>
             <Ignition></Ignition>
             <div className="hidden">
             </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default HomePage;
