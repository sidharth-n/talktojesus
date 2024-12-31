import React from "react"

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/jesus_bg.png')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-purple-500/20 to-blue-500/20 animate-gradient"></div>
    </div>
  )
}
