import React from 'react'

const TopicCard = ({ topic, onSelect }) => {
  const handleClick = () => {
    onSelect(topic)
  }

  return (
    <div 
      onClick={handleClick}
      className={`mb-3 cursor-pointer transition-all duration-200 hover:scale-105 ${
        topic.selected ? 'ring-2 ring-primary-500 ring-offset-2 rounded-lg' : ''
      }`}
    >
      <div 
        className="h-16 rounded-lg bg-cover bg-center border border-slate-200 overflow-hidden"
        style={{ backgroundImage: `url(${topic.bg})` }}
      >
        <div className="flex items-center h-full p-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img 
              src={topic.image} 
              alt={topic.title}
              className="w-full h-full object-cover"
            />
            {topic.overlay && (
              <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
            )}
          </div>
          <p className={`text-sm flex-1 ${
            topic.selected ? 'text-primary-600 font-semibold' : 'text-gray-600'
          }`}>
            {topic.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopicCard