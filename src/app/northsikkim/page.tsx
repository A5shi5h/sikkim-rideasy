import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";

const NorthSikkim = () => {
  const placesToVisit = [
    {
      name: "Lachen",
      image: "/images/lachen.jpg",
      description: "A charming village known for its scenic beauty and tranquility.",
    },
    {
      name: "Gurudongmar Lake",
      image: "/images/gurudongmar-lake.jpg",
      description: "One of the highest lakes in the world, revered for its serene beauty.",
    },
    {
      name: "Yumthang Valley",
      image: "/images/yumthang-valley.jpg",
      description: "Also known as the 'Valley of Flowers', famous for its colorful blooms.",
    },
    {
      name: "Zero Point",
      image: "/images/zero-point.jpg",
      description: "A snowy paradise offering breathtaking views of the Himalayan range.",
    },
    {
      name: "Chopta Valley",
      image: "/images/chopta-valley.jpg",
      description: "An untouched valley perfect for photography and nature walks.",
    },
    {
      name: "Thangu Valley",
      image: "/images/thangu-valley.jpg",
      description: "A peaceful valley surrounded by snow-capped peaks.",
    },
  ];

  return (
    <>
     <div className="container mx-auto p-6 space-y-8 pt-28">
      {/* First Grid: Slider and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Photo Slider */}
        <div className="bg-white shadow rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">North Sikkim</h1>
          <div className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg">
            {/* Replace with your image slider */}
            <img
              src="/images/north sikkim.jpg"
              alt="North Sikkim"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Map, Weather, and Distance */}
        <div className="bg-white shadow rounded-lg p-4 space-y-6">
          {/* Map Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Map of North Sikkim</h1>
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.916590369903!2d88.61084176218749!3d27.33893822259167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e61dddfbd8326d%3A0xefa98769ec4dbff8!2sNorth%20Sikkim!5e0!3m2!1sen!2sin!4v1616583914722!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          {/* Weather Report */}
          <div>
            <h1 className="text-xl font-bold mb-2">Current Weather</h1>
            <p className="text-gray-600">Cloudy, 10°C</p>
          </div>

          {/* Distance from Siliguri */}
          <div>
            <h1 className="text-xl font-bold mb-2">Distance from Siliguri</h1>
            <p className="text-gray-600">Approximately 150 km</p>
          </div>
        </div>
      </div>

      {/* Second Grid: Places to Visit and About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 w-1/2">
        {/* Left: About Section */}
        <div className="rounded-lg p-4 text-white border border-slate-400">
          <h1 className="text-2xl font-bold mb-4">About North Sikkim</h1>
          <p className="">
            North Sikkim is a mesmerizing region of pristine lakes, snow-covered
            valleys, and majestic peaks. Home to the famous Gurudongmar Lake and
            Yumthang Valley, it offers a perfect escape for nature enthusiasts
            and adventure lovers alike.
          </p>
        </div>

         {/* Right: Places to Visit */}
         <div className="bg-white shadow rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">PLACES OF INTEREST</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {placesToVisit.map((place, index) => (
              <div key={index} className="p-4 border rounded-lg shadow">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold">{place.name}</h2>
                <p className="text-gray-600">{place.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Instructors/>
    <Footer/>
    </>
  );
};

export default NorthSikkim;
