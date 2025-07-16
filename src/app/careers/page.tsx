import Link from 'next/link';
import Image from 'next/image';

const jobOpenings = [
  { title: 'Senior Front-End Developer (React)', location: 'Medan, Indonesia', type: 'Full-time' },
  { title: 'Senior Back-End Developer (Node.js)', location: 'Remote', type: 'Full-time' },
  { title: 'Lead UI/UX Designer', location: 'Medan, Indonesia', type: 'Contract' },
  { title: 'Digital Marketing Specialist', location: 'Medan, Indonesia', type: 'Full-time' },
  { title: 'Project Manager', location: 'Remote', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-gray-800 pt-40 pb-24 text-white text-center">
        <div className="absolute inset-0">
            <Image 
                src="/home.jpg"
                alt="Join Our Team at Suitmedia"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                priority
            />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold">Join Our Team</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">We are always looking for passionate and talented people to join our mission.</p>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Current Internship</h2>
          
          <div className="mb-12 flex justify-center">
            <Image 
                src="/suitmedia.png"
                alt="Careers at Suitmedia"
                width={700}
                height={400}
                className="rounded-lg shadow-xl object-cover"
            />
          </div>

          <div className="mb-12 flex flex-col items-center gap-8">
            <Image 
                src="/posisi magang.png"
                alt="Posisi Magang"
                width={700}
                height={400}
                className="rounded-lg shadow-xl object-cover"
            />
            <Image 
                src="/benefit magang.png"
                alt="Benefit Magang"
                width={700}
                height={400}
                className="rounded-lg shadow-xl object-cover"
            />
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {jobOpenings.map((job, index) => (
              <div key={index} className={`p-6 transition-colors hover:bg-gray-50 ${index < jobOpenings.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.location} &middot; {job.type}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Link href="/contact">
                      <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors w-full sm:w-auto">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
