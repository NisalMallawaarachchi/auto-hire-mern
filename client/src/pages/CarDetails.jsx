import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { assets, dummyCarData } from "../assets/assets.js";
import Loader from "../components/Loader.jsx";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const foundCar = dummyCarData.find((car) => car._id === id);
    setCar(foundCar);
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer hover:text-black transition"
        onClick={() => navigate(-1)}
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Back to all cars
      </button>

      <div className="grid grid-clos-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Image and Details Section */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.name || "Car Image"}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl mb-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} - {car.year}
              </p>
            </div>

            <hr className="border-borderColor my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                {
                  icon: assets.fuel_icon,
                  text: car.fuel_type,
                },
                {
                  icon: assets.car_icon,
                  text: car.transmission,
                },
                {
                  icon: assets.location_icon,
                  text: car.location,
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <img src={icon} alt="" className="h-6" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2  gap-2">
                {[
                  "Air Conditioning",
                  "Leather Seats",
                  "Bluetooth",
                  "Backup Camera",
                  "Cruise Control",
                  "USB Port",
                  "Alloy Wheels",
                  "Keyless Entry",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-500"
                  >
                    <img src={assets.check_icon} alt="" className="h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking From */}
        <form action=""></form>
      </div>
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default CarDetails;
