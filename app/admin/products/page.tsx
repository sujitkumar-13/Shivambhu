'use client'

import React, { useState, useEffect } from 'react'
import { getProducts, getCategories, createProduct, updateProduct, deleteProduct, type Product, type Category } from '@/lib/actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
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

  const handleEdit = (product: Product) => {
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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">Products Catalog</h1>
          <p className="text-sm lg:text-base text-slate-500 mt-1 font-medium">Manage your product inventory and pricing</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null)
            setFormData({ name: '', description: '', price: '', categoryName: '', image: '', rating: '5.0', stock: '0' })
            setShowModal(true)
          }}
          className="bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center lg:justify-start gap-2 w-full lg:w-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-2xl p-4 shadow-md shadow-slate-100/50 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top row: image + info */}
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 p-1">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded-full uppercase tracking-widest mb-1">
                    {product.categoryName}
                  </span>
                  <div className="font-bold text-slate-800 text-sm leading-snug truncate">{product.name}</div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="font-bold text-slate-800 text-sm">₹{product.price}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                      {product.stock} RC
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom row: stock + rating + actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <div className="flex flex-col gap-0.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${product.stock > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">{product.rating} ★ Rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-cyan-50 hover:text-cyan-600 text-xs font-bold transition-all border border-slate-100"
                  >
                    <i className="ri-edit-line text-sm"></i> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-all border border-red-100"
                  >
                    <i className="ri-delete-bin-line text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              className="relative w-full max-w-2xl bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl p-6 lg:p-10 z-[70] max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 uppercase tracking-wider">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
