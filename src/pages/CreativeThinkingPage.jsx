import React, { useState } from 'react'
import ThinkingProcess from '../components/ThinkingProcess'
import TopicRecommendations from '../components/TopicRecommendations'
import InputBar from '../components/InputBar'

const CreativeThinkingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('提交内容:', inputValue)
    }
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    console.log('选中主题:', topic)
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="w-[751px] h-full flex flex-col border-r border-slate-200 bg-slate-50">
        <div className="w-[504px] ml-[247px] p-4">
          <button className="w-[113px] h-[40px] bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
            <img src="/src/assets/images/chatbot/image_1.png" alt="new chat" className="w-5 h-5 mr-1" />
            <span className="text-sm font-semibold text-slate-700">新对话</span>
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
              <img src="/src/assets/images/chatbot/image_2.png" alt="health planner" className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-slate-800">健康策划师</span>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            开始为您收集该范式下的创作线索
          </p>
        </div>

        <ThinkingProcess />
        <TopicRecommendations onTopicSelect={handleTopicSelect} />
        
        <div className="mt-6 px-6">
          <div className="bg-slate-100 rounded-lg p-3">
            <div className="text-sm text-slate-700">
              熬夜加班后头像被箍住？当心是紧张性头痛在报警
            </div>
          </div>
        </div>

        <InputBar 
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="h-20 border-b border-slate-200 flex items-center justify-end px-8 bg-white">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="/src/assets/images/chatbot/image_28.png" alt="menu" className="w-5 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="/src/assets/images/chatbot/image_29.png" alt="settings" className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                <span className="text-slate-600 text-sm">U</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              {selectedTopic ? `已选择主题: ${selectedTopic.title}` : 'AI 正在思考中...'}
            </h2>
            <p className="text-slate-600">
              {selectedTopic ? '开始创作您的健康科普内容吧！' : '请等待 AI 完成思考过程'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreativeThinkingPage