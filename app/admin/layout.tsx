'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (pathname !== '/admin/login') {
      const isActive = sessionStorage.getItem('adminActive')
      if (!isActive) {
        router.replace('/admin/login')
      }
    }
  }, [pathname, router])

  const menuItems = [
    { name: 'Products', icon: 'ri-water-flash-line', path: '/admin/products' },
    { name: 'Categories', icon: 'ri-price-tag-3-line', path: '/admin/categories' },
    { name: 'Testimonials', icon: 'ri-chat-smile-3-line', path: '/admin/testimonials' },
  ]

  const handleLogout = async () => {
    sessionStorage.removeItem('adminActive')
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Hide sidebar on login page
  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-white border-r border-slate-100 transition-all duration-300 flex flex-col fixed inset-y-0 z-50 shadow-xl shadow-slate-100/50`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/admin/products" className="flex items-center gap-3 overflow-hidden">
            <div className="min-w-[48px] h-12 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <i className="ri-water-flash-fill text-xl"></i>
            </div>
            {isSidebarOpen && (
              <span className="text-xl font-bold bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] bg-clip-text text-transparent truncate">
                Shivambhu
              </span>
            )}
          </Link>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-4 mt-8 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group relative ${
                  isActive 
                    ? 'bg-cyan-50 text-cyan-600 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                <i className={`${item.icon} text-2xl ${isActive ? 'text-cyan-600' : 'group-hover:text-cyan-600 transition-colors'}`}></i>
                {isSidebarOpen && <span className="font-bold tracking-wide">{item.name}</span>}
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 w-1 h-8 bg-cyan-600 rounded-r-full"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-400 hover:text-red-600 hover:bg-red-50 transition-all group"
          >
            <i className="ri-logout-box-r-line text-2xl"></i>
            {isSidebarOpen && <span className="font-bold">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-72' : 'ml-24'} transition-all duration-300`}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"
            >
              <i className={isSidebarOpen ? 'ri-menu-fold-line text-2xl' : 'ri-menu-unfold-line text-2xl'}></i>
            </button>
            <h2 className="text-xl font-bold text-slate-800 hidden md:block uppercase tracking-wider">
              {menuItems.find(m => m.path === pathname)?.name || 'Admin Panel'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-bold text-slate-800 uppercase tracking-tighter">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
