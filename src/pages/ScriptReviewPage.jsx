import React, { useState } from 'react'
import InputBar from '../components/InputBar'

const ScriptReviewPage = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('提交内容:', inputValue)
    }
  }

  const scriptwriterSteps = [
    {
      id: 1,
      title: '展示思考过程',
      details: [
        '结合健康资料库编写剧本',
        '从全平台公开病例素材中提取可讲故事的线索',
        '提取到56条可用线索',
        '参考资料整理',
        '搜索到40篇医学资料'
      ]
    }
  ]

  const safetyCheckerSteps = [
    {
      id: 1,
      title: '展示思考过程',
      details: [
        '核实剧本内容',
        '已对医学内容准确性进行校验',
        '已对医疗合规性进行校验',
        '已对隐私与场景规范性进行校验'
      ]
    }
  ]

  const characters = [
    {
      name: '陈建军',
      description: '一位神经内科主治医生，平时门诊量大，擅长处理各种头痛及颈肩不适患者，讲解风格理性但亲和'
    },
    {
      name: '李伟',
      description: '32岁程序员，长期久坐加班改代码，工作压力大常失眠，出现持续一周头沉颈肩发紧，最终被诊断为原发性紧张性头痛'
    }
  ]

  const shots = [
    {
      id: 1,
      title: '镜头1',
      description: '办公室中景，医生坐在办公桌前，背景是神经内科门牌或脑部示意图。医生正视镜头：“大家好，我是神经内科医生陈建军。今天在办公室想和大家聊一个紧张性头痛病例。”'
    },
    {
      id: 2,
      title: '镜头2',
      description: '回忆画面，中景切到门诊场景：一位男患者推门进诊室，双手按着后颈和额头，表情疲惫。医生旁白：“上周四上午门诊来了一位32岁的男士，双手按压着后颈和额头，说头沉得像裹了东西，还伴着颈肩发紧，注意力没法集中。”'
    },
    {
      id: 3,
      title: '镜头3',
      description: '特写：医生问诊、在病历本上记录；插入患者在工位久坐的画面：深夜办公室、盯着电脑屏幕、揉肩捶背。医生旁白：“上周四上午门诊来了一位32岁的男士，双手按压着后颈和额头，说头沉得像裹了东西，还伴着颈肩发紧，注意力没法集中。”'
    },
    {
      id: 4,
      title: '镜头4',
      description: '切回诊室，医生指着简易头部和颈椎模型向患者解释；画面叠加简洁的文字标签“原发性紧张性头痛”。医生旁白：“结合他的症状和持续时间，我们诊断为原发性紧张性头痛。”'
    },
    {
      id: 5,
      title: '镜头5',
      description: '中景：医生在处方笺上开药，递给患者，患者点头表示理解。医生旁白：“考虑到他症状已经持续了一周，我们先开了缓解头痛的药物。”'
    },
    {
      id: 6,
      title: '镜头6',
      description: '机位不变，医生起身做示范，提醒患者起身活动；同步切换到动画或示意画面，展示简单的肩颈活动动作。医生旁白：“同时我叮嘱他，每小时起身活动，放松肩颈，别一直坐在电脑前。”'
    }
  ]

  return (
    <div className="flex h-screen bg-white">
      {/* 左侧边栏 */}
      <div className="w-[504px] h-full flex flex-col border-r border-slate-200">
        {/* 移除顶部工具栏空白区域 */}
        <div className="h-[80px] bg-slate-50 border-b border-slate-200"></div>

        {/* 编剧区域 */}
        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex items-center mb-3">
             <div className="w-[32px] h-[32px] rounded-full bg-indigo-50 flex items-center justify-center">
               <img src="./src/assets/images/chatbot/image_2.png" alt="scriptwriter" className="w-4 h-3" />
             </div>
            <span className="ml-2 text-base font-bold text-slate-800">编剧</span>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 mb-4">
            {scriptwriterSteps.map(step => (
              <div key={step.id}>
                <div className="flex items-start mb-2">
                   <span className="text-sm font-semibold text-gray-500">{step.title}</span>
                  
                </div>
                <div className="pl-4 mb-3">
                   <div className="flex items-center mb-2">
                     <span className="text-sm text-gray-500">{step.details[0]}</span>
                  </div>
                  <div className="bg-gray-50 rounded p-3 mb-2">
                    <div className="text-sm text-gray-500 mb-2">{step.details[1]}</div>
                    <div className="bg-white rounded p-2 flex items-center justify-between">
                       <span className="text-sm text-gray-500">{step.details[2]}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{step.details[3]}</div>
                    <div className="bg-white rounded p-2 flex items-center justify-between mt-2">
                       <span className="text-sm text-gray-500">{step.details[4]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-sm text-slate-700 mb-3">您对当前剧本是否满意，如果满意我可以继续推进流程</div>
          
          <div className="space-y-2 mb-4">
            <button className="w-full h-[50px] bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center hover:from-indigo-600 hover:to-indigo-700 transition-all">
              <span className="text-base font-semibold text-white">满意，请生成全部角色图</span>
            </button>
            <button className="w-full h-[48px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-base text-gray-400">不满意，给我些修改建议</span>
            </button>
          </div>

          <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">
            <span className="text-indigo-600 font-semibold">@编剧</span>
            <span className="mx-1">邀请</span>
            <span className="text-indigo-600 font-semibold">@安全校验员</span>
            <span className="mx-1">接手工作</span>
          </div>
        </div>

        {/* 安全校验员区域 */}
        <div className="px-6 py-4 flex-1 flex flex-col">
          <div className="flex items-center mb-3">
             <div className="w-[32px] h-[32px] rounded-full bg-indigo-50 flex items-center justify-center">
               <img src="./src/assets/images/chatbot/image_14.png" alt="safety checker" className="w-4 h-4" />
             </div>
            <span className="ml-2 text-base font-bold text-slate-800">安全校验员</span>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 mb-4">
            {safetyCheckerSteps.map(step => (
              <div key={step.id}>
                <div className="flex items-start mb-2">
                   <span className="text-sm font-semibold text-gray-500">{step.title}</span>
                   <img src="./src/assets/images/chatbot/image_21.png" alt="expand" className="w-3 h-3 ml-1 mt-1" />
                   <img src="./src/assets/images/chatbot/image_22.png" alt="arrow" className="w-3 h-2 ml-1 mt-2" />
                </div>
                <div className="pl-4">
                   <div className="flex items-start mb-2">
                     <img src="./src/assets/images/chatbot/image_20.png" alt="check" className="w-4 h-4 mr-2 mt-1" />
                     <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-2">{step.details[0]}</div>
                      {step.details.slice(1).map((detail, index) => (
                        <div key={index} className="bg-white rounded p-2 mb-2 flex items-center justify-between">
                         <span className="text-sm text-gray-500">{detail}</span>
                         <img src={`./src/assets/images/chatbot/image_${16 + index}.png`} alt="status" className="w-1 h-2" />
                       </div>
                      ))}
                    </div>
                  </div>
                   <div className="flex items-start pl-6">
                     <img src="./src/assets/images/chatbot/image_19.png" alt="line" className="w-px h-[150px] mr-4" />
                     <div className="flex-1">
                      {step.details.slice(1).map((detail, index) => (
                        <div key={index} className="bg-white rounded p-2 mb-2 flex items-center justify-between">
                         <span className="text-sm text-gray-500">{detail}</span>
                         <img src={`./src/assets/images/chatbot/image_${16 + index}.png`} alt="status" className="w-1 h-2" />
                       </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-4">
             <InputBar value={inputValue} 
             onChange={handleInputChange}
          onSubmit={handleSubmit}/>
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
                <img src="./src/assets/images/chatbot/image_27.png" alt="menu" className="w-5 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100">
                <img src="./src/assets/images/chatbot/image_28.png" alt="settings" className="w-5 h-5" />
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
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center mb-3">
               <div className="w-[32px] h-[32px] rounded-full bg-indigo-50 flex items-center justify-center">
                 <img src="./src/assets/images/chatbot/image_30.png" alt="scriptwriter" className="w-4 h-3" />
               </div>
              <span className="ml-2 text-base font-bold text-slate-800">编剧</span>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-2">剧本摘要</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  一位神经内科医生在办公室，用一位程序员患者的真实门诊经历，讲解"紧张性头痛"的形成原因与典型症状，并结合工作压力大、久坐、缺乏运动等场景给出缓解和预防建议，最后引导有类似困扰的用户在线咨询
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-3">角色列表</h3>
                <div className="grid grid-cols-2 gap-4">
                  {characters.map((character, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-medium text-black">{character.name}</h4>
                         {index === 1 && (
                           <img src="./src/assets/images/chatbot/image_34.png" alt="edit" className="w-4 h-4 mt-1" />
                         )}
                      </div>
                      <p className="text-sm text-slate-600">{character.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">分镜描述</h3>
                <div className="space-y-4">
                  {shots.map(shot => (
                    <div key={shot.id} className="flex items-start">
                       <div className="flex items-start mr-3">
                         <img src={`./src/assets/images/chatbot/image_${34 + shot.id}.png`} alt="bullet" className="w-1 h-4 mt-1 mr-2" />
                         <span className="text-base font-medium text-black">{shot.title}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-600 leading-relaxed">{shot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScriptReviewPage