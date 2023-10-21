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
      <div className="text-center text-neutral-content">
        <div className="w-[100vw]">
          <div className='flex justify-between flex-col md:flex-row'>
          <div className='px-4'>
          <h1 className="mb-5 text-5xl font-bold">Great quality cars and no-haggle prices</h1>
          <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-center'>
            <input className='py-3 outline-none px-5 rounded-md md:rounded-r-none' type="text" placeholder='Search here'/>
          <button className="btn btn-primary md:rounded-l-none">Get Started</button>
          </div>
          </div>
          <div>
            <img src={banerCar} className='w-[100vw]' alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;