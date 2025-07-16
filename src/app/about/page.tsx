import Image from 'next/image';

const values = [
  { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'We constantly seek new and better ways to solve problems and create value.' },
  { icon: 'fas fa-users', title: 'Collaboration', description: 'We believe that the best results come from working together with our clients and each other.' },
  { icon: 'fas fa-check-circle', title: 'Integrity', description: 'We are committed to honesty, transparency, and ethical practices in all our dealings.' },
];

const history = [
    { year: '2010', event: 'Suitmedia was founded with a mission to help businesses grow in the digital world.'},
    { year: '2015', event: 'Expanded our services to include mobile application development.'},
    { year: '2020', event: 'Recognized as a top digital agency in the region.'},
    { year: '2024', event: 'Launched our new branding and expanded our team to over 100 professionals.'},
]

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gray-800 pt-40 pb-24 text-white text-center">
        <div className="absolute inset-0">
            <Image 
                src="/home.jpg"
                alt="About us banner"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                priority
            />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold">About Suitmedia</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">We are a digital agency that helps businesses grow through creative and innovative solutions.</p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full max-w-4xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">Our Philosophy</h2>
            <p className="mt-4 text-gray-600">
              At Suitmedia, we believe in the power of digital transformation. Our mission is to empower businesses of all sizes to thrive in the digital landscape by providing top-tier web development, mobile applications, and strategic digital marketing services. We are committed to delivering results-driven solutions that foster growth and create lasting value for our clients.
            </p>
          </div>
          
          <div className="mt-16 w-full max-w-4xl text-center">
            <Image
              src="/home11.jpg"
              alt="Suitmedia Office"
              width={800}
              height={450}
              className="rounded-lg shadow-xl object-cover mx-auto"
            />
            <p className="mt-8 mb-5 text-lg font-semibold text-gray-700">About Suitmedia x Magang Berdampak</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Image
                src="/about suitmedia.png"
                alt="About Suitmedia 1"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-contain"
                />
                <Image
                src="/about suitmedia1.png"
                alt="About Suitmedia 2"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-contain"
                />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20 px-6">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white mx-auto mb-6">
                        <i className={`${value.icon} fa-2x`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                    <p className="mt-4 text-gray-600">{value.description}</p>
                    </div>
                ))}
              </div>
          </div>
      </div>

      <div className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 w-0.5 h-full bg-orange-200 -translate-x-1/2"></div>
                {history.map((item, index) => (
                    <div key={index} className="relative mb-8 flex justify-between items-center w-full">
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-5/12">
                                    <div className="text-right pr-8">
                                        <h3 className="font-bold text-xl text-orange-500">{item.year}</h3>
                                        <p className="mt-2 text-gray-600">{item.event}</p>
                                    </div>
                                </div>
                                <div className="z-10 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white">
                                    <i className="fas fa-star text-sm"></i>
                                </div>
                                <div className="w-5/12"></div>
                            </>
                        ) : (
                            <>
                                <div className="w-5/12"></div>
                                <div className="z-10 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white">
                                    <i className="fas fa-star text-sm"></i>
                                </div>
                                <div className="w-5/12">
                                    <div className="text-left pl-8">
                                        <h3 className="font-bold text-xl text-orange-500">{item.year}</h3>
                                        <p className="mt-2 text-gray-600">{item.event}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
}
