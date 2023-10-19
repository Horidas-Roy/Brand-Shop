import banner from '../../src/assets/images/banner.jpg'
import banerCar from '../../src/assets/images/baner-car.png'

const Banner = () => {
    return (
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage:`url(${banner})`
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[100vw]">
          <div className='flex justify-between'>
          <div>
          <h1 className="mb-5 text-5xl font-bold">Great quality cars and no-haggle prices</h1>
          <div>
            <input className='py-3 outline-none px-5 rounded-md rounded-r-none' type="text" placeholder='Search here'/>
          <button className="btn btn-primary rounded-l-none">Get Started</button>
          </div>
          </div>
          <div>
            <img src={banerCar} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;