import React, { useState } from 'react'

const WelcomeSection = () => {
  const [inputValue, setInputValue] = useState('')
  const [mode, setMode] = useState('对话模式')
  const [selectedStyle, setSelectedStyle] = useState(false)
  const [selectedRole, setSelectedRole] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleModeToggle = () => {
    setMode(mode === '对话模式' ? '托管模式' : '对话模式')
  }

  const handleStyleToggle = () => {
    setSelectedStyle(!selectedStyle)
  }

  const handleRoleToggle = () => {
    setSelectedRole(!selectedRole)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('提交内容:', inputValue)
      console.log('当前模式:', mode)
      console.log('风格选择:', selectedStyle)
      console.log('角色选择:', selectedRole)
      // 这里可以添加实际的提交逻辑
    }
  }

  return (
    <section className="text-center py-16">
      <h1 className="text-3xl font-semibold text-slate-900 mb-4">
        Hello，欢迎使用DoctorFlow
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        我是你的内容创作AI搭子，深耕医疗健康领域专业表达，有什么创作问题快来找我吧
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
          <div className="mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="请输入描述，奇迹马上呈现"
              className="w-full text-left text-slate-400 focus:text-slate-900 outline-none border-none"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-slate-200 rounded hover:bg-slate-50">
                <img src="./src/assets/images/image_3.png" alt="edit" className="w-4 h-4" />
              </button>
              <button 
                onClick={handleStyleToggle}
                className={`px-3 py-2 border rounded text-sm flex items-center transition-colors ${
                  selectedStyle 
                    ? 'bg-primary-100 border-primary-300 text-primary-700' 
                    : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                }`}
              >
                <img src="./src/assets/images/image_4.png" alt="style" className="w-4 h-4 mr-1" />
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
                <img src="./src/assets/images/image_5.png" alt="role" className="w-4 h-4 mr-1" />
                角色
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-slate-100 rounded p-1 flex">
                <button 
                  onClick={handleModeToggle}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    mode === '对话模式' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  对话模式
                </button>
                <button 
                  onClick={handleModeToggle}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    mode === '托管模式' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  托管模式
                </button>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <img src="./src/assets/images/image_6.png" alt="send" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection