import React, { useState } from 'react'
import TemplateCard from './TemplateCard'

const templates = [
  { id: 1, title: '健康科普', image: './src/assets/images/image_3.png' },
  { id: 2, title: '病例故事', image: './src/assets/images/image_4.png' },
  { id: 3, title: '心理小剧场', image: './src/assets/images/image_5.png' },
  { id: 4, title: '门诊故事', image: './src/assets/images/image_6.png' },
  { id: 5, title: '健康知识日', image: './src/assets/images/image_7.png' },
  { id: 6, title: '热点快讯', image: './src/assets/images/image_8.png' },
]

const TemplateRecommendations = ({ onTemplateSelect }) => {
  const [selectedId, setSelectedId] = useState(null)

  const handleTemplateSelect = (template) => {
    setSelectedId(template.id)
    onTemplateSelect(template)
  }

  return (
    <div className="flex-1 px-6 pb-6">
      <p className="text-sm text-slate-600 mb-4">
        根据您的创作历史和近期爆款，为您推荐以下几种模板
      </p>
      
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {templates.slice(0, 3).map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template}
              isSelected={selectedId === template.id}
              isDisabled={selectedId !== null && selectedId !== template.id}
              onSelect={handleTemplateSelect}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {templates.slice(3, 6).map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template}
              isSelected={selectedId === template.id}
              isDisabled={selectedId !== null && selectedId !== template.id}
              onSelect={handleTemplateSelect}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemplateRecommendations