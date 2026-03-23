'use client'

import React, { useState, useEffect } from 'react'
import { getCategories, createCategory, deleteCategory, updateCategory, type Category } from '@/lib/actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [newCategory, setNewCategory] = useState('')
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const c = await getCategories()
    setCategories(c)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCategory.trim()) return
    setLoading(true)
    
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, newCategory.trim())
        setEditingCategory(null)
      } else {
        await createCategory(newCategory.trim())
      }
      setNewCategory('')
      await fetchData()
    } catch (err) {
      console.error('Error in handleSubmit:', err)
      alert('Failed to save category. Please check console.')
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure? This will NOT delete products in this category but may cause display issues.')) {
      setLoading(true)
      await deleteCategory(id)
      await fetchData()
    }
  }

  const startEdit = (cat: Category) => {
    setEditingCategory(cat)
    setNewCategory(cat.name)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Product Categories</h1>
          <p className="text-sm md:text-base text-slate-500 mt-1 font-medium">Define and organize your product types</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        {/* Category Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 lg:sticky lg:top-32">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-6">
              {editingCategory ? 'Update Category' : 'Create New Category'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Category Name</label>
                <input
                  type="text"
                  required
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                  placeholder="e.g. ORGANIC"
                />
              </div>
              <div className="flex gap-3">
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-bold py-5 rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70"
                >
                  {loading ? (editingCategory ? 'Updating...' : 'Creating...') : (editingCategory ? 'Update' : 'Add Category')}
                </button>
                {editingCategory && (
                  <button 
                    type="button"
                    onClick={() => {
                      setEditingCategory(null)
                      setNewCategory('')
                    }}
                    className="px-6 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Categories List */}
        <div className="lg:col-span-2 space-y-4">
           {loading && categories.length === 0 ? (
             <div className="flex items-center justify-center p-20">
               <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
             </div>
           ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <motion.div 
                    layout
                    key={cat.id}
                    className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 flex items-center justify-between group hover:border-cyan-200 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                          <i className="ri-price-tag-3-line"></i>
                       </div>
                       <span className="font-bold text-slate-700 uppercase tracking-wider truncate text-sm md:text-base">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button 
                        onClick={() => startEdit(cat)}
                        className="p-2 md:p-3 text-slate-400 md:text-slate-300 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all md:opacity-0 md:group-hover:opacity-100"
                        title="Edit"
                      >
                         <i className="ri-pencil-line text-lg"></i>
                      </button>
                      <button 
                        onClick={() => handleDelete(cat.id)}
                        className="p-2 md:p-3 text-slate-400 md:text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all md:opacity-0 md:group-hover:opacity-100"
                        title="Delete"
                      >
                         <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
           )}
        </div>
      </div>
    </div>
  )
}
