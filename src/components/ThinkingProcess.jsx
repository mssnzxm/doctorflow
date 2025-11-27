import React from 'react'

const ThinkingProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: '结合健康知识库评估医学热点热词',
      details: [
        {
          text: '找出"紧张性头痛最容易形成爆款短视频的高频场景，并给出多个"钩子式标题 + 情绪爆点 + 可拍画面"',
          result: '搜索到8个高频场景'
        },
        {
          text: '参考医学资料整理',
          result: '搜索到23篇医学资料'
        }
      ]
    },
    {
      id: 2,
      title: '结合用户资料匹配创作线索',
      details: [
        {
          text: '查看用户问诊订单',
          result: '从20条订单里找到3条最匹配的内容'
        },
        {
          text: '提炼用户擅长场景',
          result: '提炼3个用户场景'
        }
      ]
    }
  ]

  return (
    <div className="px-6 py-4">
      <div className="mb-4">
        <div className="flex items-center mb-2 cursor-pointer">
          <span className="text-sm font-semibold text-gray-500">展示思考过程</span>
          <img src="./src/assets/images/image_5.png" alt="toggle" className="w-3 h-3 ml-1" />
        </div>
      </div>

      {processSteps.map((step) => (
        <div key={step.id} className="mb-4">
          <div className="flex items-start mb-2">
            <img src={`./src/assets/images/image_${step.id === 1 ? '6' : '12'}.png`} alt="icon" className="w-4 h-4 mt-1 mr-2" />
            <span className="text-sm text-gray-500">{step.title}</span>
          </div>
          
          <div className="ml-6">
            {step.details.map((detail, index) => (
              <div key={index} className="mb-3">
                <p className="text-xs text-gray-400 mb-2">{detail.text}</p>
                <div className="bg-gray-100 rounded p-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{detail.result}</span>
                  <img src={`./src/assets/images/image_${step.id === 1 ? (index === 0 ? '9' : '11') : (index === 0 ? '15' : '17')}.png`} alt="arrow" className="w-2 h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ThinkingProcess