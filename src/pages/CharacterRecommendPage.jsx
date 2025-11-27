import React, { useState } from 'react'
import CharacterInputBar from '../components/CharacterInputBar'

const CharacterRecommendPage = () => {
  const [showDesignerProcess, setShowDesignerProcess] = useState(true)
  const [showSecurityProcess, setShowSecurityProcess] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const designerSteps = [
    {
      title: '结合图解资料生成视觉形象',
      status: 'completed',
      details: '从脚本中提取"紧张性头痛"的视觉要素，为每段内容设计画面提示词',
      subItems: [
        { text: '已设计25条提示词', icon: 'arrow' },
        { text: '参考资料整理', icon: 'dot' },
        { text: '搜索到40篇医学资料', icon: 'arrow' },
        { text: '生成角色形象和三视图', icon: 'dot' },
        { text: '已生成角色形象和三视图', icon: 'check' }
      ]
    }
  ]

  const securitySteps = [
    {
      title: '核实肖像授权和医学规范性',
      status: 'completed',
      details: '已核实医生的肖像授权，患者隐私脱敏',
      subItems: [
        { text: '已核实人物的医学规范性', icon: 'check' }
      ]
    }
  ]

  const characters = [
    {
      id: 1,
      name: '陈建军',
      avatar: './src/assets/images/character/image_13.png',
      tags: ['主治医师', '神经内科', '三甲医院', '从业18年', '药物治疗', '行为干预治疗'],
      description: '一位神经内科主治医生，平时门诊量大，擅长处理各种头痛及颈肩不适患者，讲解风格理性但亲和',
      images: [
        './src/assets/images/character/image_32.png',
        './src/assets/images/character/image_33.png',
        './src/assets/images/character/image_34.png',
        './src/assets/images/character/image_35.png',
        './src/assets/images/character/image_36.png',
        './src/assets/images/character/image_37.png'
      ]
    },
    {
      id: 2,
      name: '李伟',
      avatar: './src/assets/images/character/image_14.png',
      tags: ['男性', '32岁', '程序员', '双侧挤压样头痛', '颈肩明显紧绷', '左右转头牵扯头部'],
      description: '32岁程序员，长期久坐加班改代码，工作压力大常失眠，出现持续一周头沉颈肩发紧，最终被诊断为原发性紧张性头痛',
      images: [
        './src/assets/images/character/image_32.png',
        './src/assets/images/character/image_33.png',
        './src/assets/images/character/image_34.png',
        './src/assets/images/character/image_35.png',
        './src/assets/images/character/image_36.png',
        './src/assets/images/character/image_37.png'
      ]
    }
  ]

  const diseaseImages = [
    './src/assets/images/character/image_38.png'
  ]

  return (
    <div className="flex h-screen bg-white">
      {/* 左侧边栏 */}
      <div className="w-[504px] h-full flex flex-col border-r border-slate-200 bg-slate-50">
        {/* 视觉设计师区域 */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <img src="./src/assets/images/character/image_2.png" alt="designer" className="w-4 h-4" />
            </div>
            <span className="ml-2 text-base font-bold text-slate-800">视觉设计师</span>
          </div>

          {/* 思考过程 */}
          <div className="mb-4">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setShowDesignerProcess(!showDesignerProcess)}
            >
              <span className="text-sm font-semibold text-slate-600">展示思考过程</span>
              <img 
                src={showDesignerProcess ? "./src/assets/images/character/image_4.png" : "./src/assets/images/character/image_5.png"} 
                alt="dropdown" 
                className="w-3 h-3 ml-1" 
              />
            </div>

            {showDesignerProcess && (
              <div className="mt-3 pl-4 border-l-2 border-slate-300">
                <div className="flex items-start mb-3">
                  <img src="./src/assets/images/character/image_6.png" alt="dot" className="w-3 h-3 mt-1 mr-2" />
                  <div>
                    <p className="text-sm text-slate-600">结合图解资料生成视觉形象</p>
                    <p className="text-xs text-slate-500 mt-1">从脚本中提取"紧张性头痛"的视觉要素，为每段内容设计画面提示词</p>
                    
                    <div className="mt-2 bg-slate-100 rounded p-2 flex items-center justify-between">
                      <span className="text-xs text-slate-600">已设计25条提示词</span>
                      <img src="./src/assets/images/character/image_9.png" alt="arrow" className="w-2 h-2" />
                    </div>

                    <div className="mt-2 text-xs text-slate-600">参考资料整理</div>
                    
                    <div className="mt-1 bg-slate-100 rounded p-2 flex items-center justify-between">
                      <span className="text-xs text-slate-600">搜索到40篇医学资料</span>
                      <img src="./src/assets/images/character/image_11.png" alt="arrow" className="w-2 h-2" />
                    </div>

                    <div className="mt-2 text-xs text-slate-600">生成角色形象和三视图</div>
                    
                    <div className="mt-1 bg-slate-100 rounded p-2 flex items-center justify-between">
                      <span className="text-xs text-slate-600">已生成角色形象和三视图</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 角色展示 */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-4">
              <img src="./src/assets/images/character/image_13.png" alt="陈建军" className="w-[107px] h-[160px] rounded-lg" />
              <img src="./src/assets/images/character/image_14.png" alt="李伟" className="w-[107px] h-[160px] rounded-lg" />
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="flex space-x-20 text-sm text-slate-800">
              <span>陈建军</span>
              <span>李伟</span>
            </div>
          </div>

          {/* 反馈文本 */}
          <div className="mb-4 text-sm text-slate-700">
            所有角色的图都已完成，请问是否全部满意？若有不满意的角色，请指出角色名称和需要调整的细节
          </div>

          {/* 操作按钮 */}
          <div className="space-y-2 mb-4">
            <button className="w-full h-12 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
              <span className="text-sm font-semibold text-white">满意，请继续生成分镜</span>
            </button>
            
            <div className="w-full h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm text-slate-400">不满意，给我些修改建议</span>
            </div>
          </div>

          {/* 提示信息 */}
          <div className="bg-slate-100 rounded-lg p-3 mb-4">
            <span className="text-sm text-slate-700">满意，请生成全部角色图</span>
          </div>

          {/* 提及信息 */}
          <div className="flex items-center text-sm">
            <span className="text-slate-700">@编剧</span>
            <span className="mx-1 text-slate-600">邀请</span>
            <span className="text-indigo-600 font-semibold">@安全校验员</span>
            <span className="mx-1 text-slate-600">接手工作</span>
          </div>
        </div>

        {/* 安全校验员区域 */}
        <div className="p-6 flex-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <img src="./src/assets/images/character/image_17.png" alt="security" className="w-4 h-4" />
            </div>
            <span className="ml-2 text-base font-bold text-slate-800">安全校验员</span>
          </div>

          {/* 思考过程 */}
          <div className="mb-4">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setShowSecurityProcess(!showSecurityProcess)}
            >
              <span className="text-sm font-semibold text-slate-600">展示思考过程</span>
              <img 
                src={showSecurityProcess ? "./src/assets/images/character/image_23.png" : "./src/assets/images/character/image_24.png"} 
                alt="dropdown" 
                className="w-3 h-3 ml-1" 
              />
            </div>

            {showSecurityProcess && (
              <div className="mt-3 pl-4 border-l-2 border-slate-300">
                <div className="flex items-start mb-3">
                  <img src="./src/assets/images/character/image_22.png" alt="dot" className="w-3 h-3 mt-1 mr-2" />
                  <div>
                    <p className="text-sm text-slate-600">核实肖像授权和医学规范性</p>
                    
                    <div className="mt-2 bg-slate-100 rounded p-2">
                      <span className="text-xs text-slate-600">已核实医生的肖像授权，患者隐私脱敏</span>
                    </div>

                    <div className="mt-2 bg-slate-100 rounded p-2">
                      <span className="text-xs text-slate-600">已核实人物的医学规范性</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 右侧主内容区 */}
      <div className="flex-1 flex flex-col bg-white">
        {/* 顶部工具栏 */}
        <div className="h-[80px] border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2">
            <button className="w-[113px] h-[40px] bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
              <img src="./src/assets/images/character/image_25.png" alt="new chat" className="w-5 h-5 mr-1" />
              <span className="text-sm font-semibold text-slate-700">新对话</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/character/image_26.png" alt="menu" className="w-5 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <img src="./src/assets/images/character/image_27.png" alt="settings" className="w-5 h-5" />
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
        <div className="flex-1 overflow-y-auto p-8">
          {/* 角色形象 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <img src="./src/assets/images/character/image_27.png" alt="designer" className="w-4 h-4" />
              </div>
              <span className="ml-2 text-base font-bold text-slate-800">视觉设计师</span>
            </div>

            <h2 className="text-lg font-medium text-slate-900 mb-6">角色形象</h2>

            {/* 角色卡片 */}
            {characters.map((character) => (
              <div key={character.id} className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-medium text-slate-900">{character.name}</h3>
                      <img src="./src/assets/images/character/image_31.png" alt="share" className="w-5 h-5 ml-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {character.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs border border-indigo-600 text-indigo-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-600">{character.description}</p>
                  </div>
                </div>

                {/* 角色图片 */}
                <div className="flex space-x-2">
                  {character.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${character.name}-${index}`}
                      className={index === 0 ? "w-[100px] h-[150px] rounded" : "w-[96px] h-[150px] rounded"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 疾病素材库 */}
          <div>
            <h2 className="text-lg font-medium text-slate-900 mb-4">疾病素材库</h2>
            <img src={diseaseImages[0]} alt="疾病素材库" className="w-full rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterRecommendPage