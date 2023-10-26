
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
   <button className="bg-black-500 text-black hover:bg-blue-700 mt-5 font-bold py-2 px-4 rounded-full border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
         Buy Now
        </button>

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