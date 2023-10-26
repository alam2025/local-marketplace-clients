
import React, { useEffect, useState } from 'react';
const Vagitables = () => {
      const [vegetables, setVegetables] = useState([]);

      useEffect(() => {
        // Fetch data from vegetables.json
        fetch('/vagitables.json') // This assumes that vegetables.json is in the public folder
          .then((response) => response.json())
          .then((data) => setVegetables(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
//     console.log(vegetables)
      return (
            <>
             <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center uppercase ">Vegetable Market</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-[url(https://wallpapercave.com/wp/f2nbsPJ.jpg)]">
      {vegetables.map((vegetable) => (
 <div key={vegetable.id} className="card w-80 glass bg-lime-100 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
 <figure>
   <img
     src={vegetable.image_url}
     alt={vegetable.name}
     className="card-img hover:scale-[2] rounded-md"
     style={{ height: '200px', width: '100%' }} // Set a fixed height and width for the main image
   />
 </figure>
 <div className="card-body bg-white bg-opacity-80 p-4 rounded-md">
   <h2 className="card-title text-xl font-semibold">{vegetable.name}</h2>
   <p className="card-price text-gray-600">Price per kg: {vegetable.price_per_kg} BDT</p>
   <p className="card-seller text-gray-600">Seller: {vegetable.seller_name}</p>
   <div className="card-actions justify-end mt-4">
     <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white hover:shadow-md transform hover:scale-105 transition-transform">Buy Now</button>
   </div>
 </div>
</div>

  ))}
      </div>
    </div>
                  
            </>
      );
};

export default Vagitables;