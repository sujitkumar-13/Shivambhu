'use client'

import React, { useState, useEffect } from 'react'
import { getProducts, getCategories, createProduct, updateProduct, deleteProduct } from '@/lib/actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [uploading, setUploading] = useState(false)
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    categoryName: '',
    image: '',
    rating: '5.0',
    stock: '0'
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const [p, c] = await Promise.all([getProducts(), getCategories()])
    setProducts(p)
    setCategories(c)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if (editingProduct) {
      await updateProduct(editingProduct.id, formData)
    } else {
      await createProduct(formData)
    }
    await fetchData()
    setShowModal(false)
    setEditingProduct(null)
    setFormData({ name: '', description: '', price: '', categoryName: '', image: '', rating: '5.0', stock: '0' })
  }

  const handleEdit = (product: any) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      categoryName: product.categoryName,
      image: product.image,
      rating: product.rating.toString(),
      stock: product.stock.toString()
    })
    setShowModal(true)
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

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setLoading(true)
      await deleteProduct(id)
      await fetchData()
    }
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Products Catalog</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage your product inventory and pricing</p>
        </div>
        <button 
          onClick={() => {
            setEditingProduct(null)
            setFormData({ name: '', description: '', price: '', categoryName: '', image: '', rating: '5.0', stock: '0' })
            setShowModal(true)
          }}
          className="bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
        >
          <i className="ri-add-line text-lg"></i>
          Add New Product
        </button>
      </div>

      {loading && !showModal ? (
        <div className="flex items-center justify-center p-20">
          <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Product</th>
                <th className="px-8 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Category</th>
                <th className="px-8 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Price</th>
                <th className="px-8 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Stock</th>
                <th className="px-8 py-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 p-1 group-hover:scale-110 transition-transform">
                        <img src={product.image} alt="" className="w-full h-full object-cover rounded-xl" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm">{product.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{product.rating} ★ Rating</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-[10px] font-bold rounded-md uppercase tracking-wider">{product.categoryName}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="font-bold text-slate-800">₹{product.price}</div>
                  </td>
                  <td className="px-8 py-6">
                     <span className={`font-bold text-sm ${product.stock > 0 ? 'text-slate-600' : 'text-red-500'}`}>{product.stock}</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button 
                        onClick={() => handleEdit(product)}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all"
                       >
                          <i className="ri-edit-line text-lg"></i>
                       </button>
                       <button 
                        onClick={() => handleDelete(product.id)}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                       >
                          <i className="ri-delete-bin-line text-lg"></i>
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Product Modal */}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl p-10 z-[70] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-8 uppercase tracking-wider">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Product Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="e.g. 20L Mineral Water Jar"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Category</label>
                    <select
                      required
                      value={formData.categoryName}
                      onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800 appearance-none"
                    >
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Base Price (₹)</label>
                    <input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Stock Quantity</label>
                    <input
                      type="number"
                      required
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="100"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Initial Rating</label>
                    <input
                      type="text"
                      required
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800"
                      placeholder="5.0"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Product Images</label>
                  
                  <div className="relative group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    
                    {formData.image ? (
                      <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-inner group/preview">
                         <img src={formData.image} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-110" />
                         <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                           <i className="ri-upload-2-line text-white text-3xl"></i>
                           <span className="text-white font-bold text-xs uppercase tracking-widest">Click to Change Image</span>
                         </div>
                         {uploading && (
                            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                              <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                         )}
                      </div>
                    ) : (
                      <div className={`w-full py-10 rounded-[2rem] border-2 border-dashed ${uploading ? 'border-cyan-500 bg-cyan-50/30' : 'border-slate-200 hover:border-cyan-400 bg-slate-50/50'} transition-all flex flex-col items-center justify-center gap-4 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-100`}>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${uploading ? 'bg-cyan-500 text-white animate-pulse' : 'bg-white text-slate-400 group-hover:text-cyan-500 shadow-sm'}`}>
                           <i className="ri-upload-2-line text-2xl"></i>
                        </div>
                        <div className="text-center">
                          <p className="text-slate-600 font-bold text-sm mb-1">
                            {uploading ? 'Uploading your asset...' : (
                              <span className="flex items-center gap-1">Click to upload images</span>
                            )}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            JPG, PNG, WebP up to 5MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-[10px] uppercase tracking-widest ml-1">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-cyan-500 transition-all font-medium text-slate-800 h-32 resize-none"
                    placeholder="Describe your product..."
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-bold py-5 rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70"
                  >
                     {loading ? 'Processing...' : (editingProduct ? 'Save Changes' : 'Create Product')}
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
