'use client'

import React, { useState, useEffect } from 'react'
import { getTestimonials, createTestimonial, deleteTestimonial, updateTestimonial, type Testimonial } from '@/lib/actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    image: '',
    rating: '5'
  })
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const t = await getTestimonials()
    setTestimonials(t)
    setLoading(false)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const data = new FormData()
    data.set('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      const result = await res.json()
      if (result.success) {
        setFormData(prev => ({ ...prev, image: result.url }))
      } else {
        alert('Upload failed: ' + result.message)
      }
    } catch (err) {
      console.error('Upload error:', err)
      alert('Upload failed. Please check console.')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if (editingTestimonial) {
      await updateTestimonial(editingTestimonial.id, formData)
    } else {
      await createTestimonial(formData)
    }
    await fetchData()
    setShowModal(false)
    setEditingTestimonial(null)
    setFormData({ name: '', role: '', content: '', image: '', rating: '5' })
  }

  const handleEdit = (t: Testimonial) => {
    setEditingTestimonial(t)
    setFormData({
      name: t.name,
      role: t.role,
      content: t.content,
      image: t.image || '',
      rating: t.rating.toString()
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Delete this testimonial?')) {
      setLoading(true)
      await deleteTestimonial(id)
      await fetchData()
    }
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Customer Feedback</h1>
          <p className="text-sm md:text-base text-slate-500 mt-1 font-medium">Manage testimonials shown on the home page</p>
        </div>
        <button
          onClick={() => {
            setEditingTestimonial(null)
            setFormData({ name: '', role: '', content: '', image: '', rating: '5' })
            setShowModal(true)
          }}
          className="bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <i className="ri-add-line text-lg"></i>
          Add New Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {loading && testimonials.length === 0 ? (
          <div className="col-span-full flex items-center justify-center p-20">
            <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 flex flex-col justify-between group md:hover:-translate-y-2 transition-transform duration-300">
              <div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-0.5 md:gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <i key={s} className={`ri-star-fill ${s <= t.rating ? 'text-yellow-400' : 'text-slate-200'} text-xs md:text-sm`}></i>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEdit(t)}
                      className="p-2 text-slate-400 md:text-slate-300 hover:text-cyan-600 transition-colors"
                      title="Edit"
                    >
                      <i className="ri-edit-line text-lg"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="p-2 text-slate-400 md:text-slate-300 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <i className="ri-delete-bin-line text-lg"></i>
                    </button>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 md:mb-8 italic font-medium">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center text-slate-400 uppercase font-bold border border-slate-200 flex-shrink-0">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-800 text-sm truncate">{t.name}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">{t.role}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto py-10 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl p-6 md:p-10 z-[70] max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 md:mb-8 uppercase tracking-wider">
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Customer Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Role / Subtitle</label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="Home Owner"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <div className="flex flex-col items-center gap-6">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest">Profile Identity</label>
                    <div className="relative group/avatar">
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />

                      <div className={`w-36 h-36 rounded-full border-2 border-dashed flex flex-col items-center justify-center gap-2 overflow-hidden transition-all ${uploading ? 'border-cyan-500 bg-cyan-50/50' : (formData.image ? 'border-transparent' : 'border-slate-200 hover:border-cyan-400 bg-slate-50/50')}`}>
                        {formData.image ? (
                          <img src={formData.image} className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110" />
                        ) : (
                          <>
                            <i className={`ri-user-smile-line text-3xl transition-colors ${uploading ? 'text-cyan-500' : 'text-slate-300 group-hover/avatar:text-cyan-400'}`}></i>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Click to Upload</span>
                          </>
                        )}

                        {(uploading || formData.image) && (
                          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1 transition-opacity ${formData.image ? 'bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover/avatar:opacity-100' : 'opacity-100'}`}>
                            {uploading ? (
                              <div className="w-8 h-8 border-3 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <>
                                <i className="ri-upload-2-line text-white text-2xl"></i>
                                <span className="text-white font-bold text-[8px] uppercase">Change</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
                      Avatar Preview
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800 appearance-none"
                  >
                    {[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{r} Stars</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Feedback Content</label>
                  <textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800 h-32 resize-none"
                    placeholder="Write the feedback here..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading || uploading}
                    className="bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-bold py-5 rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70"
                  >
                    {loading ? 'Processing...' : (editingTestimonial ? 'Save Changes' : 'Add Feedback')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
