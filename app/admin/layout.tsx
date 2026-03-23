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
        className={`bg-white transition-all duration-300 z-50 shadow-xl shadow-slate-100/50 fixed flex flex-row bottom-0 left-0 right-0 w-full h-16 lg:flex-col lg:inset-y-0 lg:bottom-auto lg:border-r lg:border-t-0 lg:h-full ${isSidebarOpen ? 'lg:w-60' : 'lg:w-20'} border-t border-slate-100`}
      >
        {/* Sidebar Header */}
        <div className={`hidden lg:flex items-center ${isSidebarOpen ? 'justify-between p-6' : 'justify-center p-4'}`}>
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
        <nav className={`flex-1 lg:mt-8 flex flex-row justify-around items-center lg:flex-col lg:justify-start lg:space-y-2 lg:items-stretch h-full lg:h-auto overflow-x-auto ${isSidebarOpen ? 'px-4' : 'px-2'}`}>
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 px-2 py-2 md:px-4 md:py-4 rounded-xl md:rounded-2xl transition-all group relative ${isActive
                    ? 'text-cyan-600 md:bg-cyan-50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <i className={`${item.icon} text-xl lg:text-2xl ${isActive ? 'text-cyan-600' : 'group-hover:text-cyan-600 transition-colors'}`}></i>
                {isSidebarOpen && <span className="hidden lg:block font-bold tracking-wide">{item.name}</span>}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-1 w-6 h-1 bg-cyan-600 rounded-full lg:hidden"
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator-desktop"
                    className="absolute left-0 w-1 h-8 bg-cyan-600 rounded-r-full hidden lg:block"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className={`hidden lg:flex border-l lg:border-l-0 lg:border-t border-slate-50 items-center justify-center ${isSidebarOpen ? 'p-4' : 'p-2'}`}>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center md:justify-start gap-2 md:gap-4 p-2 md:px-4 md:py-4 rounded-xl md:rounded-2xl text-red-400 hover:text-red-600 hover:bg-red-50 transition-all group"
            title="Sign Out"
          >
            <i className="ri-logout-box-r-line text-xl lg:text-2xl"></i>
            {isSidebarOpen && <span className="hidden lg:block font-bold">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 pb-20 lg:pb-0 ${isSidebarOpen ? 'lg:ml-60' : 'lg:ml-20'}`}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:block p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"
            >
              <i className={isSidebarOpen ? 'ri-menu-fold-line text-2xl' : 'ri-menu-unfold-line text-2xl'}></i>
            </button>
            <div className="lg:hidden flex items-center gap-3 overflow-hidden">
              <div className="min-w-[32px] h-8 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] rounded-lg flex items-center justify-center text-white shadow-md">
                <i className="ri-water-flash-fill text-sm"></i>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800 hidden lg:block uppercase tracking-wider">
              {menuItems.find(m => m.path === pathname)?.name || 'Admin Panel'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleLogout}
              className="lg:hidden p-2 text-red-400 hover:bg-red-50 rounded-xl transition-all"
              title="Sign Out"
            >
              <i className="ri-logout-box-r-line text-2xl"></i>
            </button>
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
