import Footer from "@/components/Footer";
import TagLine from "@/components/TagLine";
import Instructors from "@/components/TagLine";

const SouthSikkim = () => {
  
  const placesToVisit = [
    {
      name: "Namchi",
      image: "/images/namchi.jpg",
      description: "Known for the giant statue of Guru Padmasambhava and the Char Dham pilgrimage site.",
    },
    {
      name: "Ravangla",
      image: "/images/ravangla.jpg",
      description: "A serene town offering breathtaking views of Mt. Kanchenjunga.",
    },
    {
      name: "Temi Tea Garden",
      image: "/images/temi-tea.jpg",
      description: "The only tea garden in Sikkim, producing world-class organic tea.",
    },
    {
      name: "Buddha Park",
      image: "/images/buddha-park.jpg",
      description: "A peaceful park featuring a massive Buddha statue and manicured gardens.",
    },
    {
      name: "Samdruptse Hill",
      image: "/images/samdruptse.jpg",
      description: "Home to the tallest statue of Guru Padmasambhava.",
    },
  ];

  return (
    <>
     <div className="container mx-auto p-6 space-y-8 pt-28">
      {/* First Grid: Slider and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Photo Slider */}
        <div className="bg-transparent shadow rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-white">South Sikkim</h1>
          <div className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg">
            {/* Replace with your image slider */}
            <img
              src="/images/south sikkim.jpg"
              alt="North Sikkim"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Map, Weather, and Distance */}
        <div className="bg-white shadow rounded-lg p-4 space-y-6">
          {/* Map Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Map of South Sikkim</h1>
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1652089414984!2d88.33033751501513!3d27.16746018300166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a36f3337373b%3A0xb228fc63556b3363!2sSouth%20Sikkim%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1686480918654!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          {/* Weather Report */}
          <div>
            <h1 className="text-xl font-bold mb-2">Current Weather</h1>
            <p className="text-gray-600">Sunny, 15°C</p>
          </div>

          {/* Distance from Siliguri */}
          <div>
            <h1 className="text-xl font-bold mb-2">Distance from Siliguri</h1>
            <p className="text-gray-600">Approximately 110 km</p>
          </div>
        </div>
      </div>

      {/* Second Grid: Places to Visit and About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: About Section */}
        <div className="rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold mb-4">About South Sikkim</h1>
          <p className="">
          South Sikkim is the most industrialised district in the state, owing to the availability of flat land. Since the geology is stable the roads are in good condition as compared to other parts of the state which suffer from landslides. The district is also known for Sikkim tea, which is grown near Namchi.<br/><br/>According to the 2011 census, Namchi district has a population of 146,850, roughly equal to the nation of Saint Lucia.This gives it a ranking of 600th in India (out of a total of 640).The district has a population density of 196 inhabitants per square kilometre (510/sq mi). Its population growth rate over the decade 2001–2011 was 11.57%. and has a sex ratio of 914 females for every 1000 males, and a literacy rate of 82.06%. 14.44% of the population lives in urban areas. Scheduled Castes and Scheduled Tribes make up 4.12% and 28.19% of the population respectively.
          </p>
        </div>

         {/* Right: Places to Visit */}
         <div className="bg-transparent shadow rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-white">PLACES OF INTEREST</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {placesToVisit.map((place, index) => (
              <div key={index} className="p-4 border rounded-lg shadow bg-white">
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
    <TagLine/>
    <Footer/>
    </>
  );
};

export default SouthSikkim;
