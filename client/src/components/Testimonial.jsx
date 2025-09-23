import { assets } from "../assets/assets.js";
import Title from "./Title";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Nuwan Perera",
      location: "Colombo, Sri Lanka",
      image: assets.testimonial_image_1,
      testimonial:
        "Excellent service from beginning to end. The process was smooth, and every detail was taken care of with professionalism. Highly recommend!",
    },
    {
      name: "Shalini Fernando",
      location: "Kandy, Sri Lanka",
      image: assets.testimonial_image_2,
      testimonial:
        "I was very impressed by the quality and reliability. The experience exceeded my expectations and was handled with great care.",
    },
    {
      name: "Kasun Silva",
      location: "Galle, Sri Lanka",
      image: assets.testimonial_image_1,
      testimonial:
        "Amazing experience! The team was friendly, professional, and truly committed to delivering the best outcome possible.",
    },
  ];

  const Star = ({ filled }) => (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"
      />
    </svg>
  );

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Say"
        subtitle="Real experiences from our happy clients who chose us for their journeys."
      />
      <div className="grid grid-colos-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
