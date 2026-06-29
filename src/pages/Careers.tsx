import { Link } from 'react-router-dom'
import { jobOpenings } from '../data/content'

export default function Careers() {
  return (
    <div>
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-ngali-black text-white px-6 text-center">
        <h1 className="text-3xl font-bold">Careers</h1>
        <p className="text-gray-300 mt-2 max-w-2xl">
          Join a team building strategic, sustainable growth across Africa.
        </p>
      </section>

      <section className="min-h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full space-y-4">
          {jobOpenings.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">{job.title}</h3>
                <span className="text-ngali-orange text-sm font-medium">{job.type}</span>
              </div>
              <p className="text-sm text-gray-500">{job.department} · {job.location}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}