import React, { useState } from 'react'

const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const [activeMode, setActiveMode] = useState('dialogue') // dialogue or hosted

  const templates = [
    {
      id: 1,
      title: '健康科普',
      image: './src/assets/images/homepage/image_7.png',
      thumbnail: './src/assets/images/homepage/image_8.png'
    },
    {
      id: 2,
      title: '病例故事',
      image: './src/assets/images/homepage/image_9.png',
      thumbnail: './src/assets/images/homepage/image_10.png'
    },
    {
      id: 3,
      title: '医美故事',
      image: './src/assets/images/homepage/image_11.png',
      thumbnail: './src/assets/images/homepage/image_12.png'
    },
    {
      id: 4,
      title: '心理小剧场',
      image: './src/assets/images/homepage/image_13.png',
      thumbnail: './src/assets/images/homepage/image_14.png'
    },
    {
      id: 5,
      title: '热点快讯',
      image: './src/assets/images/homepage/image_15.png',
      thumbnail: './src/assets/images/homepage/image_16.png'
    },
    {
      id: 6,
      title: '数字人视频',
      image: './src/assets/images/homepage/image_17.png',
      thumbnail: './src/assets/images/homepage/image_18.png'
    },
    {
      id: 7,
      title: '动画科普',
      image: './src/assets/images/homepage/image_19.png',
      thumbnail: './src/assets/images/homepage/image_20.png'
    },
    {
      id: 8,
      title: '门诊故事',
      image: './src/assets/images/homepage/image_21.png',
      thumbnail: './src/assets/images/homepage/image_22.png'
    }
  ]

  const highlights = [
    {
      id: 1,
      title: '一键成片',
      image: './src/assets/images/homepage/image_23.png',
      description: '创作能力评分 85/100'
    },
    {
      id: 2,
      title: '角色DIY',
      image: './src/assets/images/homepage/image_24.png',
      description: '医典百科 临床指南 研究数据 医学术语 治疗方案'
    },
    {
      id: 3,
      title: '创作规划',
      image: './src/assets/images/homepage/image_25.png',
      description: '创作能力评分'
    },
    {
      id: 4,
      title: '医疗专业素材库',
      image: './src/assets/images/homepage/image_26.png',
      description: '疾病百科词库 临床指南文档 研究数据'
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
    console.log('选择模板:', template.title)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航栏 */}
      <header className="h-[80px] bg-slate-50 border-b border-slate-200 flex items-center justify-between px-6">
        <div className="text-[30px] font-bold text-black tracking-tight">DoctorFlow</div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg hover:bg-slate-100">
            <img src="./src/assets/images/homepage/image_1.png" alt="menu" className="w-5 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100">
            <img src="./src/assets/images/homepage/image_2.png" alt="settings" className="w-5 h-5" />
          </button>
          <div className="relative">
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
              <span className="text-slate-600 text-sm">U</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 欢迎语 */}
        <section className="text-center mb-12">
          <h1 className="text-[30px] font-semibold text-black tracking-tight mb-4">
            Hello，欢迎使用DoctorFlow
          </h1>
          <p className="text-base text-slate-600 mb-8">
            我是你的内容创作AI搭子，深耕医疗健康领域专业表达，有什么创作问题快来找我吧
          </p>

          {/* 输入框 */}
          <div className="max-w-[782px] mx-auto mb-12">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
              <input
                type="text"
                placeholder="请输入描述，奇迹马上呈现"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full text-base text-black placeholder-slate-400 outline-none mb-4"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="w-9 h-8 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                    <img src="./src/assets/images/homepage/image_3.png" alt="upload" className="w-4 h-5" />
                  </button>
                  <button className="w-[69px] h-8 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                    <img src="./src/assets/images/homepage/image_4.png" alt="style" className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold text-slate-400">风格</span>
                  </button>
                  <button className="w-[69px] h-8 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-50">
                    <img src="./src/assets/images/homepage/image_5.png" alt="role" className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold text-slate-400">角色</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex bg-gray-100 rounded p-1">
                    <button
                      onClick={() => setActiveMode('dialogue')}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        activeMode === 'dialogue'
                          ? 'bg-indigo-600 text-white'
                          : 'text-black hover:bg-gray-200'
                      }`}
                    >
                      对话模式
                    </button>
                    <button
                      onClick={() => setActiveMode('hosted')}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        activeMode === 'hosted'
                          ? 'bg-indigo-600 text-white'
                          : 'text-black hover:bg-gray-200'
                      }`}
                    >
                      托管模式
                    </button>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    <img src="./src/assets/images/homepage/image_6.png" alt="send" className="w-4 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 创作模板 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">创作模板</h2>
          <div className="grid grid-cols-4 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateClick(template)}
                className="cursor-pointer group"
              >
                <div
                  className="w-[205px] h-[234px] bg-cover bg-no-repeat rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundImage: `url(${template.image})` }}
                >
                  <img
                    src={template.thumbnail}
                    alt={template.title}
                    className="w-[169px] h-[169px] mt-4 ml-4 object-cover"
                  />
                  <div className="mt-3 ml-4">
                    <h3 className="text-base font-medium text-black group-hover:text-indigo-600 transition-colors">
                      {template.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 亮点功能 */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">亮点</h2>
          <div className="grid grid-cols-2 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="relative overflow-hidden rounded-lg">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-[442px] h-[239px] object-cover"
                />
                <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage