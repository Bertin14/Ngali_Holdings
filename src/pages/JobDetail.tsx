import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobOpenings } from '../data/content'

export default function JobDetail() {
  const { id } = useParams()
  const job = jobOpenings.find((j) => j.id === id)

  const [formData, setFormData] = useState({ name: '', email: '', coverLetter: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Application submitted:', { job: job?.title, ...formData })
    setSubmitted(true)
  }

  if (!job) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Job not found</h1>
        <Link to="/careers" className="text-ngali-orange hover:underline mt-4 inline-block">
          Back to Careers
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-ngali-black text-white px-6 text-center">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-300 mt-2">{job.department} · {job.location} · {job.type}</p>
      </section>

      <section className="min-h-screen w-full flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <p className="text-gray-600 text-lg mb-10">{job.description}</p>

          {submitted ? (
            <p className="text-green-600 text-lg">
              Thanks for applying! We'll review your application and be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Apply for this role</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <button type="submit" className="bg-ngali-orange text-white px-6 py-2 rounded hover:opacity-90">
                Submit application
              </button>
            </form>
          )}

          <Link to="/careers" className="text-ngali-orange hover:underline mt-8 inline-block">
            ← Back to all openings
          </Link>
        </div>
      </section>
    </div>
  )
}