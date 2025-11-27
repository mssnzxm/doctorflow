import React from 'react'
import TemplateRecommendations from './TemplateRecommendations'

const Sidebar = ({ onTemplateSelect }) => {
  return (
    <aside className="w-[504px] h-full bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-4 pb-2">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <img src="./src/assets/images/image_2.png" alt="director" className="w-4 h-4" />
          </div>
          <span className="ml-2 text-base font-bold text-slate-800">导演</span>
        </div>
      </div>

      <TemplateRecommendations onTemplateSelect={onTemplateSelect} />
    </aside>
  )
}

export default Sidebar