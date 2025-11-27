import React from 'react'

const ChatArea = ({ selectedTemplate }) => {
  return (
    <div className="flex-1 bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        {selectedTemplate ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              已选择模板: {selectedTemplate.title}
            </h2>
            <p className="text-slate-600">开始您的创作吧！</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              欢迎使用 DoctorFlow
            </h2>
            <p className="text-slate-600">从左侧选择一个模板开始创作</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatArea