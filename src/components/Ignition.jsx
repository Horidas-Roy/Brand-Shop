import ignition1 from "../../src/assets/images/ignition1.jpg";
import ignition2 from "../../src/assets/images/ignition2.jpg";
import ignition3 from "../../src/assets/images/ignition3.jpg";

const Ignition = () => {
  return (
    <div className="p-20">
      <h2 className="text-4xl font-bold mb-10">Ignition Stories.</h2>
      <div className="flex gap-10">
        <div className="flex-1">
          <img className="rounded-lg" src={ignition1} alt="" />
          <p className="text-2xl font-bold mt-2">
            Hybrids vs. EVs: Which is Right for You?
          </p>
          <p className="text-blue-800 font-bold text-sm">CAR SHOPPING</p>
        </div>
        <div className="flex-1 flex gap-5">
          <div>
            <img className="rounded-lg" src={ignition2} alt="" />
            <p className="text-[20px] font-bold mt-2">
              Certified Vehicles: Meet the Best-in-Class Offerings from CarShop
            </p>
            <p className="text-blue-800 font-bold text-sm">CAR SHOPPING</p>
          </div>
          <div>
            <img className="rounded-lg" src={ignition3} alt="" />
            <p className="text-[20px] font-bold mt-2">
Financing vs. Paying Cash - Navigating the Road to Your Next Vehicle
</p>
<p className="text-blue-800 font-bold text-sm">CAR SHOPPING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ignition;
