'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function SessionManager() {
  const pathname = usePathname()

  useEffect(() => {
    // If the user navigates away from the admin area, clear the session flag
    if (!pathname.startsWith('/admin')) {
      const isActive = sessionStorage.getItem('adminActive')
      if (isActive) {
        sessionStorage.removeItem('adminActive')
        // We also want to clear the server-side cookie so the API rejects direct calls
        fetch('/api/admin/logout', { method: 'POST' }).catch(() => {})
      }
    }
  }, [pathname])

  return null
}
