import visitCarShop from '../../src/assets/images/visitCarShop.jpg'

const VisitCarShop = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 flex justify-center items-center'>
                 <div>
                 <h1 className='text-5xl font-bold '>Visit a CarShop <br /> near you.</h1>
                 <h4 className='my-3 underline'>Or, buy 100% online.</h4>
                 <div className='flex gap-3'>
                    <button className='bg-[#ea286f] text-[#FFF] rounded-lg py-2 px-4'>Find  a Store</button>
                    <button className='bg-[#ea286f] text-[#FFF] rounded-lg py-2 px-4'>Buy Online</button>
                    
                 </div>
                 </div>
            </div>
            <div className='flex-1 flex justify-end'>
                <img className='w-[100%]' src={visitCarShop} alt="" />
            </div>
        </div>
    );
};

export default VisitCarShop;