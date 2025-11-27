import React, { useState } from 'react'

const CreativeInputBar = ({ value, onChange, onSubmit, onStartCreation }) => {
  const [selectedStyle, setSelectedStyle] = useState(false)
  const [selectedRole, setSelectedRole] = useState(false)

  const handleStyleToggle = () => {
    setSelectedStyle(!selectedStyle)
  }

  const handleRoleToggle = () => {
    setSelectedRole(!selectedRole)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const handleStartCreationClick = () => {
    console.log('开始创作按钮被点击')
    onStartCreation()
  }

  return (
    <div className="border-t border-slate-200 p-4 bg-white">
      <div className="px-2 pb-4">
        <button 
          onClick={handleStartCreationClick}
          className="w-full h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors mb-4"
        >
          <span className="text-base font-semibold text-white">开始创作</span>
        </button>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="请输入描述，奇迹马上呈现"
            className="w-full text-left text-slate-400 focus:text-slate-900 outline-none border-none mb-3"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-slate-200 rounded hover:bg-slate-50">
                <img src="./src/assets/images/image_8.png" alt="edit" className="w-4 h-4" />
              </button>
              <button 
                onClick={handleStyleToggle}
                className={`px-3 py-2 border rounded text-sm flex items-center transition-colors ${
                  selectedStyle 
                    ? 'bg-primary-100 border-primary-300 text-primary-700' 
                    : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                }`}
              >
                <img src="./src/assets/images/image_9.png" alt="style" className="w-4 h-4 mr-1" />
                风格
              </button>
              <button 
                onClick={handleRoleToggle}
                className={`px-3 py-2 border rounded text-sm flex items-center transition-colors ${
                  selectedRole 
                    ? 'bg-primary-100 border-primary-300 text-primary-700' 
                    : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                }`}
              >
                <img src="./src/assets/images/image_10.png" alt="role" className="w-4 h-4 mr-1" />
                角色
              </button>
            </div>
            
            <button 
              onClick={onSubmit}
              className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              <img src="./src/assets/images/image_11.png" alt="send" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreativeInputBar