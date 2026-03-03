
import { FaUser, FaCakeCandles, FaPhone, FaEnvelope } from 'react-icons/fa6';

const profileData = {
  name: "Raju Mishra",
  birthday: "July 13, 2003",
  phone: "+91 7827264825",
  email: "Rajumishra6201@gmail.com",
  stats: [
    { number: 1, label: "Years of Experience" },
    { number: 10, label: "Happy Customers" },
    { number: 31, label: "Projects Finished" },
    { number: 7, label: "Days of Work" },
  ],
};

export default function ProfileCard() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
      <div className="mx-auto w-full max-w-5xl">
      
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200">
        
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 px-6 pb-12 pt-20 text-center text-white relative">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl drop-shadow-lg">
              {profileData.name}
            </h1>
            <p className="mt-3 text-lg opacity-90 font-medium">
              Creative Developer & Designer
            </p>
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400/30 rounded-full blur-3xl translate-x-10 translate-y-10"></div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white md:grid-cols-4">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 px-6 py-10 text-center transition hover:bg-indigo-50"
              >
                <div className="text-4xl font-bold text-indigo-600 md:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-8 p-10 md:grid-cols-2 lg:p-12">
            <InfoItem icon={<FaUser />} label="Name" value={profileData.name} />
            <InfoItem icon={<FaCakeCandles />} label="Birthday" value={profileData.birthday} />
            <InfoItem icon={<FaPhone />} label="Phone" value={profileData.phone} />
            <InfoItem
              icon={<FaEnvelope />}
              label="Email"
              value={
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  {profileData.email}
                </a>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600 shadow-md">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-gray-500">{label}</div>
        <div className="mt-0.5 text-lg font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}