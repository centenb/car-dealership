import React, { useState, useEffect }  from 'react'

export const Shop = () => {
  const [ car, setCar ] = useState([]);
  const API_BASE_URL = globals.environment === 'production' ? '' : 'http://localhost:5000';

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(`${API_BASE_URL}/cars`);
            const data = await response.json();
            setCar(data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchData();
  }, []);

  return (
    <div>
        <div className="flex justify-center items-center mt-2 space-x-2 hover:translate-y-1 duration-500">
            {car.map((car) => (
                <div key={car.car_id} className="flex flex-col justify-center items-center border border-gray-300 rounded-md hover:translate-y-1 duration-500">
                    <img src={car.image_url} alt="car image" className="w-full h-[200px] rounded-t-md" />
                    <h1 className="font-bold mt-2">{car.year} {car.make} {car.model}</h1>
                    <div className="space-x-2">
                    <label>{car.km}km</label>
                    <label className="font-bold text-lg">${car.price}</label>
                    </div>
                    <p className="w-full text-wrap text-xs p-2">{car.description}</p>
                    <button className="border border-gray-300 rounded-md p-2 mb-2 hover:bg-slate-300 cursor-pointer">Request info</button>
                </div>
            ))}
        </div>
    </div>
  )
}