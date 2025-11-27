import React, { useState } from 'react'

const CharacterInputBar = ({ value, onChange, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <div className="border-t border-slate-200 p-4 bg-white">
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="请输入对话内容..."
          className="w-full text-left text-slate-600 focus:text-slate-900 outline-none border-none mb-3"
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-slate-200 rounded hover:bg-slate-50">
              <img src="./src/assets/images/chatbot/image_8.png" alt="edit" className="w-4 h-4" />
            </button>
            <button className="p-2 border border-slate-200 rounded hover:bg-slate-50">
              <img src="./src/assets/images/chatbot/image_9.png" alt="style" className="w-4 h-4" />
            </button>
          </div>
          
          <button 
            onClick={onSubmit}
            className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
          >
            <img src="./src/assets/images/chatbot/image_11.png" alt="send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterInputBar
