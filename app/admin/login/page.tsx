'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/admin/products')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.1),transparent),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.05),transparent)] bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              <i className="ri-water-flash-fill text-2xl"></i>
            </div>
            <span className="text-2xl font-bold bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] bg-clip-text text-transparent">Shivambhu</span>
          </Link>
          <h1 className="text-slate-800 text-3xl font-bold mt-8">Admin Portal</h1>
          <p className="text-slate-500 mt-2">Manage your business with ease</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-semibold flex items-center gap-2 border border-red-100 animate-shake">
                <i className="ri-error-warning-fill"></i>
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-slate-700 font-bold text-sm uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-slate-700 font-bold text-sm uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <i className="ri-lock-2-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-bold py-5 rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none mt-4 text-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </motion.div>

        <p className="text-center text-slate-400 mt-10 text-sm font-medium">
          Secure encrypted login powered by RevCloud
        </p>
      </div>
    </div>
  )
}
