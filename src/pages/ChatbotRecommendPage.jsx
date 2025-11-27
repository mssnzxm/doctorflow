import React, { useState } from 'react'

 const ChatbotRecommendPage = () => {
   const [inputValue, setInputValue] = useState('')
   const [selectedTemplate, setSelectedTemplate] = useState(null)

   const recommendedTemplates = [
     {
       id: 1,
       title: '健康科普',
       image: './src/assets/images/chatbot/image_3.png',
       hasOverlay: false
     },
     {
       id: 2,
       title: '病例故事',
       image: './src/assets/images/chatbot/image_4.png',
       hasOverlay: false
     },
     {
       id: 3,
       title: '心理小剧场',
       image: './src/assets/images/chatbot/image_5.png',
       hasOverlay: false
     },
     {
       id: 4,
       title: '门诊故事',
       image: './src/assets/images/chatbot/image_6.png',
       hasOverlay: false
     },
     {
       id: 5,
       title: '热点快讯',
       image: './src/assets/images/chatbot/image_7.png',
       hasOverlay: false
     }
   ]

   const handleInputChange = (e) => {
     setInputValue(e.target.value)
   }

   const handleSubmit = () => {
     if (inputValue.trim()) {
       console.log('提交内容:', inputValue)
     }
   }

   const handleTemplateClick = (template) => {
     setSelectedTemplate(template)
   }

  return (
    <div className="flex h-screen bg-white">
      {/* 左侧边栏 */}
       <div className="w-[504px] h-full flex flex-col border-r border-slate-200">
         {/* 移除顶部工具栏空白区域 */}

         {/* 导演推荐区域 - 移除顶部padding，使内容更靠近顶部 */}
         <div className="px-6 pt-4 pb-4 flex-1 flex flex-col">
            <div className="flex items-center mb-2">
              <div className="w-[32px] h-[32px] rounded-full bg-indigo-50 flex items-center justify-center">
                <img src="./src/assets/images/chatbot/image_2.png" alt="director" className="w-4 h-4" />
              </div>
              <span className="ml-2 text-base font-bold text-slate-800">导演</span>
            </div>

           <div className="mb-3">
             <p className="text-sm text-slate-700 mb-3">
               根据您的创作历史和近期爆款，为您推荐以下几种模板
             </p>

             {/* 推荐模板网格 - 减小间距 */}
             <div className="space-y-3">
               {/* 第一行模板 */}
               <div className="flex space-x-4">
                 {recommendedTemplates.slice(0, 3).map((template) => (
                   <div
                     key={template.id}
                     onClick={() => handleTemplateClick(template)}
                     className={`cursor-pointer group ${selectedTemplate && selectedTemplate.id !== template.id ? 'opacity-30' : ''}`}
                   >
                     <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden">
                       <img
                         src={template.image}
                         alt={template.title}
                         className="w-full h-full object-cover"
                       />
                       {template.hasOverlay && (
                         <div className="absolute inset-0 bg-gray-300"></div>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
               <div className="flex space-x-4 ml-6">
                 {recommendedTemplates.slice(0, 3).map((template) => (
                   <div key={template.id} className="w-[120px] text-center">
                     <span className={`text-sm ${selectedTemplate && selectedTemplate.id !== template.id ? 'text-gray-300' : 'text-gray-400'}`}>
                       {template.title}
                     </span>
                   </div>
                 ))}
               </div>

               {/* 第二行模板 */}
               <div className="flex space-x-4 mt-3">
                 {recommendedTemplates.slice(3, 5).map((template) => (
                   <div
                     key={template.id}
                     onClick={() => handleTemplateClick(template)}
                     className={`cursor-pointer group ${selectedTemplate && selectedTemplate.id !== template.id ? 'opacity-30' : ''}`}
                   >
                     <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden">
                       <img
                         src={template.image}
                         alt={template.title}
                         className="w-full h-full object-cover"
                       />
                       {template.hasOverlay && (
                         <div className="absolute inset-0 bg-gray-300"></div>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
               <div className="flex space-x-4 ml-6">
                 {recommendedTemplates.slice(3, 5).map((template) => (
                   <div key={template.id} className="w-[120px] text-center">
                     <span className={`text-sm ${selectedTemplate && selectedTemplate.id !== template.id ? 'text-gray-300' : 'text-gray-400'}`}>
                       {template.title}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>

         {/* 输入框 - 移动到页面左侧底部，使用sticky定位 */}
         <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4">
           <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-3">
             <input
               type="text"
               placeholder="请输入描述，奇迹马上呈现"
               value={inputValue}
               onChange={handleInputChange}
               onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
               className="w-full text-sm text-black placeholder-slate-400 outline-none mb-2"
             />
             <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-7 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                  <img src="./src/assets/images/chatbot/image_8.png" alt="upload" className="w-3 h-4" />
                </button>
                <button className="w-[60px] h-7 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                  <img src="./src/assets/images/chatbot/image_9.png" alt="style" className="w-3 h-3 mr-1" />
                  <span className="text-xs font-semibold text-slate-400">风格</span>
                </button>
                <button className="w-[60px] h-7 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                  <img src="./src/assets/images/chatbot/image_10.png" alt="role" className="w-3 h-3 mr-1" />
                  <span className="text-xs font-semibold text-slate-400">角色</span>
                </button>
              </div>
              <button
                onClick={handleSubmit}
                className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <img src="./src/assets/images/chatbot/image_11.png" alt="send" className="w-3 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部工具栏 */}
        <div className="h-[80px] border-b border-slate-200 flex items-center justify-between px-8 bg-white">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2">
            <button className="w-[113px] h-[40px] bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
              <img src="./src/assets/images/chatbot/image_1.png" alt="new chat" className="w-5 h-5 mr-1" />
              <span className="text-sm font-semibold text-slate-700">新对话</span>
            </button>
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

         {/* 内容区域 */}
         <div className="flex-1 flex items-center justify-center bg-white">
           <div className="text-center">
             <h2 className="text-2xl font-semibold text-slate-800 mb-2">
               {selectedTemplate ? selectedTemplate.title : '欢迎使用 DoctorFlow'}
             </h2>
             <p className="text-slate-600">
               {selectedTemplate 
                 ? `已选择模板: ${selectedTemplate.title}，开始您的创作吧！` 
                 : '从左侧选择一个模板开始创作'}
             </p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default ChatbotRecommendPage