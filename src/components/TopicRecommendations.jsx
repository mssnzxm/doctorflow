import React from 'react'
import TopicCard from './TopicCard'

const TopicRecommendations = ({ onTopicSelect }) => {
  const topics = [
    {
      id: 1,
      title: '熬夜加班后头像被箍住？当心是紧张性头痛在报警',
      image: './src/assets/images/image_19.png',
      bg: './src/assets/images/image_18.png',
      selected: true
    },
    {
      id: 2,
      title: '久坐写代码，颈肩一紧就头痛？神经内科医生教你3个自救动作',
      image: './src/assets/images/image_21.png',
      bg: './src/assets/images/image_20.png',
      selected: false
    },
    {
      id: 3,
      title: '总以为是用眼过度，其实是紧张性头痛：这3类人最容易中招',
      image: './src/assets/images/image_23.png',
      bg: './src/assets/images/image_22.png',
      selected: false,
      overlay: true
    }
  ]

  return (
    <div className="px-6 py-4">
      <p className="text-sm text-slate-600 mb-4">
        根据您的科室专长，以及最新医学热点热词，为你策划了3项候选主题
      </p>
      
      {topics.map((topic) => (
        <TopicCard 
          key={topic.id} 
          topic={topic}
          onSelect={onTopicSelect}
        />
      ))}
    </div>
  )
}

export default TopicRecommendations