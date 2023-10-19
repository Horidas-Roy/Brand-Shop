const AddProduct = () => {

    const handleAddItem=(e)=>{
        e.preventDefault();
        const form=e.target;
        const productName=form.productName.value;
        const brandName=form.brandName.value;
        const productType=form.productType.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const img=form.imageLink.value;
        const description=form.description.value;

        const item={productName,brandName,productType,price,rating,img,description}
        console.log(item);
    }
  return (
    <div className="max-w-screen-lg mx-auto p-7">
      <h2 className="text-center text-2xl font-semibold my-5">Add Product</h2>
      <form onSubmit={handleAddItem}>
        <div className="flex justify-center gap-6 px-10">
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Product Name</h2>
            <input type="text" name="productName" className="px-5 py-1  rounded-lg" placeholder="Enter Product Name" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Brand Name</h2>
            <input type="text" name="brandName" className="px-5 py-1 rounded-lg" placeholder="Enter Brand Name" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 px-10">
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Product Type</h2>
            <input type="text" name="productType" className="px-5 py-1  rounded-lg" placeholder="Enter Product Type" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Price</h2>
            <input type="text" name="price" className="px-5 py-1 rounded-lg" placeholder="Enter Product Prize" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 px-10">
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Rating</h2>
            <input type="text" name="rating" className="px-5 py-1  rounded-lg" placeholder="Enter Rating" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="space-y-1">
            <h2 className="font-medium">Image Link</h2>
            <input type="text" name="imageLink" className="px-5 py-1 rounded-lg" placeholder="Enter Iamge Url" />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-2 ">
        <div>
        <h2 className="font-medium">Short Description</h2>
            <textarea type="text" name="description" className="px-5 py-1 w-[40vw] rounded-lg" placeholder="write description" />
        </div>
        </div>
        <div className="border text-center">
            <input type="submit" className="bg-[#08093a] text-[#FFF] font-bold w-[40vw] py-1 rounded-lg" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
