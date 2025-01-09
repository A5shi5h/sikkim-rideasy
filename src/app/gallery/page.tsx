// gallery.js (Next.js page for Sikkim Rideasy)

import Footer from '@/components/Footer';
import Instructors from '@/components/Instructors';
import Image from 'next/image';

export default function Gallery() {
    const galleryItems = [
        {
            src: '/images/changu.jpeg',
            alt: 'Luxurious Cab',
            title: 'Luxurious Cab',
            description: 'Comfortable rides guaranteed.',
        },
        {
            src: '/images/gangtok.jpg',
            alt: 'Eco-Friendly Vehicle',
            title: 'Eco-Friendly Vehicle',
            description: 'Travel sustainably with us.',
        },
        {
            src: '/images/kupup-lake.jpg',
            alt: 'Friendly Drivers',
            title: 'Friendly Drivers',
            description: 'Our drivers are here to assist you.',
        },
        {
            src: '/images/namchi.jpg',
            alt: 'Scenic Sikkim',
            title: 'Scenic Sikkim',
            description: 'Experience the beauty of Sikkim.',
        },
        {
            src: '/images/north sikkim.jpg',
            alt: 'Luxurious Cab',
            title: 'Luxurious Cab',
            description: 'Comfortable rides guaranteed.',
        },
        {
            src: '/images/zuluk.jpeg',
            alt: 'Eco-Friendly Vehicle',
            title: 'Eco-Friendly Vehicle',
            description: 'Travel sustainably with us.',
        },
        {
            src: '/images/zuluk.png',
            alt: 'Friendly Drivers',
            title: 'Friendly Drivers',
            description: 'Our drivers are here to assist you.',
        },
        {
            src: '/images/zuluk1.jpeg',
            alt: 'Scenic Sikkim',
            title: 'Scenic Sikkim',
            description: 'Experience the beauty of Sikkim.',
        },
    ];

    return (
        <>
         <div className="bg-gray-100 min-h-screen pt-28">
            <main className="container mx-auto p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Gallery</h2>
                <p className="text-gray-600 mb-8 text-center">Explore the breathtaking views of Sikkim with Sikkim RidEasy.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={item.src}
                                alt={"no image"}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
        <Instructors/>
        <Footer/>
        </>
    );
}
