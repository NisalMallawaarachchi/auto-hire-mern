import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { assets, dummyCarData } from "../assets/assets.js";
import Loader from "../components/Loader.jsx";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Booking functionality is not implemented yet.");
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
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

        {/* Right: Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="shadow-xl h-max sticky top-20 rounded-2xl p-6 md:p-8 space-y-6 bg-white border border-gray-100"
        >
          {/* Price Section */}
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-800">
              {currency} {car.pricePerDay}
            </p>
            <span className="text-sm text-gray-500">Per day</span>
          </div>

          <hr className="border-gray-200" />

          {/* Pickup Date */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="pickup-date"
              className="text-sm font-medium text-gray-600"
            >
              Pickup Date
            </label>
            <input
              id="pickup-date"
              type="date"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="return-date"
              className="text-sm font-medium text-gray-600"
            >
              Return Date
            </label>
            <input
              id="return-date"
              type="date"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-md transition"
          >
            Book Now
          </button>

          <p className="text-center text-sm">
            No credit card required to reserve
          </p>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default CarDetails;
