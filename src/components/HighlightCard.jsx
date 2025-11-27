import React from 'react'

const HighlightCard = ({ highlight }) => {
  return (
    <div className="card overflow-hidden group cursor-pointer">
      <div className="relative h-48">
        <img 
          src={highlight.image} 
          alt={highlight.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-end justify-center p-6">
          <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 mb-4">{highlight.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">创作能力评分</span>
          <span className="text-lg font-semibold text-primary-600">{highlight.score}</span>
        </div>
      </div>
    </div>
  )
}

export default HighlightCard