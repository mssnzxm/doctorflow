import React from 'react'
import TemplateCard from './TemplateCard'

const templates = [
  { id: 1, title: '健康科普', image: './src/assets/images/image_8.png', bg: './src/assets/images/image_7.png' },
  { id: 2, title: '病例故事', image: './src/assets/images/image_10.png', bg: './src/assets/images/image_9.png' },
  { id: 3, title: '医美故事', image: './src/assets/images/image_12.png', bg: './src/assets/images/image_11.png' },
  { id: 4, title: '心理小剧场', image: './src/assets/images/image_14.png', bg: './src/assets/images/image_13.png' },
  { id: 5, title: '热点快讯', image: './src/assets/images/image_16.png', bg: './src/assets/images/image_15.png' },
  { id: 6, title: '数字人视频', image: './src/assets/images/image_18.png', bg: './src/assets/images/image_17.png' },
  { id: 7, title: '动画科普', image: './src/assets/images/image_20.png', bg: './src/assets/images/image_19.png' },
  { id: 8, title: '门诊故事', image: './src/assets/images/image_22.png', bg: './src/assets/images/image_21.png' },
]

const TemplateSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">创作模板</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  )
}

export default TemplateSection