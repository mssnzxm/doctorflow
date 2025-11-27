import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatArea from '../components/ChatArea'
import InputBar from '../components/InputBar'

const ChatbotRecommendPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
    console.log('选中模板:', template)
  }

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('提交内容:', inputValue)
    }
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="w-[504px] h-full flex flex-col border-r border-slate-200">
        <Sidebar onTemplateSelect={handleTemplateSelect} />
        <InputBar 
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="h-20 border-b border-slate-200 flex items-center justify-between px-8 bg-white">
          <div className="flex-1"></div>
          <button className="w-[113px] h-[40px] bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
            <img src="./src/assets/images/image_1.png" alt="new chat" className="w-5 h-5 mr-1" />
            <span className="text-sm font-semibold text-slate-700">新对话</span>
          </button>
          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/image_13.png" alt="menu" className="w-5 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/image_14.png" alt="settings" className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                <span className="text-slate-600 text-sm">U</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
        
        <ChatArea selectedTemplate={selectedTemplate} />
      </div>
    </div>
  )
}

export default ChatbotRecommendPage