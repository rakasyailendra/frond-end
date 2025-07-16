'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  { id: 1, title: 'Infomedia Nusantara: Digital Marketing Implementation', description: 'Elevating brand awareness with a winning strategy', category: 'Digital Marketing', image: '/image_6f22e2.png' },
  { id: 2, title: 'BRI Manajemen Investasi | Brand Development Journey', description: 'Providing brand communication to increase public awareness.', category: 'UI/UX Design', image: '/image_6f22bf.png' },
  { id: 3, title: 'Bank Danamon: Career Website Redesign', description: 'Building a visually appealing website to attract top talent', category: 'UI/UX Design', image: '/image_6f22a2.png' },
  { id: 4, title: 'Astra International: Digital Innovation Solutions', description: 'Increasing efficiency for sales, customers, and employees.', category: 'Web Development', image: '/image_6f2285.png' },
  { id: 5, title: 'IDX: Comprehensive Digital Solutions', description: 'Improving user experience through innovative website.', category: 'UI/UX Design', image: '/image_6f1fdb.png' },
  { id: 6, 'title': 'PT SIER: Website Development', 'description': 'Developing a website that boosts operational efficiency.', 'category': 'Web Development', 'image': '/image_6f1fd4.png' },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Digital Marketing'];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gray-800 pt-40 pb-24 text-white text-center">
        <div className="absolute inset-0">
            <Image 
                src="/home.jpg"
                alt="Our Work Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                priority
            />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold">Our Work</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">A showcase of our passion, creativity, and dedication to excellence.</p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 ${filter === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
                <div className="w-full aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="mt-2 text-gray-600 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-500">
        <div className="container mx-auto text-center py-16 px-6">
            <h2 className="text-3xl font-bold text-white">Have a project in mind?</h2>
            <p className="text-orange-100 mt-2 mb-6">Let's build something great together.</p>
            <Link href="/contact">
              <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition-colors">
                  Contact Us
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
