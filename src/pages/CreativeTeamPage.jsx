import React, { useState } from 'react'
import TeamMemberList from '../components/TeamMemberList'
import CreativeInputBar from '../components/CreativeInputBar'

const CreativeTeamPage = () => {
  const [inputValue, setInputValue] = useState('')

  const teamMembers = [
    {
      id: 1,
      role: '策划师',
      name: 'qwen',
      avatar: './src/assets/images/chatbot/image_3.png',
      description: '更强的学习能力和推理能力'
    },
    {
      id: 2,
      role: '编剧',
      name: 'deepseek-R1',
      avatar: './src/assets/images/chatbot/image_4.png',
      description: '更好的文本处理和指令遵循能力'
    },
    {
      id: 3,
      role: '视觉设计师',
      name: 'Seedream 4.0',
      avatar: './src/assets/images/chatbot/image_5.png',
      description: '极速高质出图'
    },
    {
      id: 4,
      role: '分镜师',
      name: 'Sora2',
      avatar: './src/assets/images/chatbot/image_6.png',
      description: '画质稳定自然，真实世界还原'
    },
    {
      id: 5,
      role: '安全校验员',
      name: '文心',
      avatar: './src/assets/images/chatbot/image_7.png',
      description: '更精准的意图理解和解析'
    }
  ]

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('提交创作内容:', inputValue)
    }
  }

  const handleStartCreation = () => {
    console.log('开始创作')
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="w-[504px] h-full flex flex-col border-r border-slate-200 bg-slate-50">
        <div className="p-4 pb-2">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <img src="./src/assets/images/chatbot/image_2.png" alt="director" className="w-4 h-4" />
            </div>
            <span className="ml-2 text-base font-bold text-slate-800">导演</span>
          </div>
          <p className="text-sm text-slate-600 leading-tight">
            根据您的选择的创作范式，为您组建最佳创作团队如下
          </p>
        </div>

        <TeamMemberList members={teamMembers} />
        
        <CreativeInputBar 
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onStartCreation={handleStartCreation}
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="h-20 border-b border-slate-200 flex items-center justify-between px-8 bg-white">
          <div className="flex-1"></div>
          <button className="w-[113px] h-[40px] bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
            <img src="./src/assets/images/chatbot/image_1.png" alt="new chat" className="w-5 h-5 mr-1" />
            <span className="text-sm font-semibold text-slate-700">新对话</span>
          </button>
          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/chatbot/image_13.png" alt="menu" className="w-5 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/chatbot/image_14.png" alt="settings" className="w-5 h-5" />
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
              创作团队已准备就绪
            </h2>
            <p className="text-slate-600">点击下方"开始创作"按钮开始您的创作之旅</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreativeTeamPage