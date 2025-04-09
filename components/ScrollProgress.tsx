"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / totalHeight) * 100
      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-100 bg-">
      <div
        className="h-full bg-beige-800 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />
    </div>
  )
}
