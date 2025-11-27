import React from 'react'
import HighlightCard from './HighlightCard'

const highlights = [
  {
    id: 1,
    title: '一键成片',
    description: 'AI智能生成专业医疗内容',
    score: '85/100',
    image: './src/assets/images/image_23.png'
  },
  {
    id: 2,
    title: '角色DIY',
    description: '自定义AI助手角色设定',
    score: '90/100',
    image: './src/assets/images/image_24.png'
  },
  {
    id: 3,
    title: '创作规划',
    description: '智能内容创作流程管理',
    score: '88/100',
    image: './src/assets/images/image_25.png'
  },
  {
    id: 4,
    title: '医疗专业素材库',
    description: '海量医疗专业资源',
    score: '92/100',
    image: './src/assets/images/image_26.png'
  }
]

const HighlightSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">亮点</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </section>
  )
}

export default HighlightSection