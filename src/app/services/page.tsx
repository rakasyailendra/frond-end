import Image from 'next/image';

const services = [
  { icon: 'fas fa-code', title: 'Web Development', description: 'Creating high-performance, scalable, and secure web applications tailored to your needs.' },
  { icon: 'fas fa-mobile-alt', title: 'Mobile Apps', description: 'Building intuitive and engaging mobile experiences for both iOS and Android platforms.' },
  { icon: 'fas fa-bullhorn', title: 'Digital Marketing', description: 'Driving growth through strategic SEO, content marketing, and targeted advertising campaigns.' },
  { icon: 'fas fa-palette', title: 'UI/UX Design', description: 'Designing user-centric interfaces that are both beautiful and easy to use.' },
  { icon: 'fas fa-chart-line', title: 'Data Analytics', description: 'Turning data into actionable insights to help you make smarter business decisions.' },
  { icon: 'fas fa-cloud', title: 'Cloud Solutions', description: 'Leveraging the power of the cloud for scalable, reliable, and cost-effective infrastructure.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 pt-40 pb-24 text-white text-center">
        <div className="absolute inset-0">
            <Image 
                src="/home.jpg"
                alt="Our Services Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                priority
            />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">We provide a wide range of digital solutions to help your business succeed.</p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white mx-auto mb-6">
                  <i className={`${service.icon} fa-2x`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center">{service.title}</h3>
                <p className="mt-4 text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
