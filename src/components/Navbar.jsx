import React, { useState } from 'react'

const Navbar = () => {
  const [isAvatarHighlighted, setIsAvatarHighlighted] = useState(false)

  const handleAvatarClick = () => {
    setIsAvatarHighlighted(!isAvatarHighlighted)
    // 这里可以添加点击后的其他逻辑，比如打开用户菜单
    console.log('用户头像被点击')
  }

  return (
    <nav className="bg-slate-50 border-b border-slate-200 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">DoctorFlow</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <img src="./src/assets/images/image_1.png" alt="menu" className="w-5 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <img src="./src/assets/images/image_2.png" alt="mode" className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              onClick={handleAvatarClick}
              className={`w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center transition-all ${
                isAvatarHighlighted ? 'ring-2 ring-primary-500 ring-offset-2' : 'hover:bg-slate-400'
              }`}
            >
              <span className="text-slate-600 text-sm font-medium">U</span>
            </button>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar