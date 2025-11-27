import React from 'react'

const TemplateCard = ({ template, isSelected, isDisabled, onSelect }) => {
  const handleClick = () => {
    if (!isDisabled) {
      onSelect(template)
    }
  }

  return (
    <div 
      onClick={handleClick}
      className={`cursor-pointer transition-all duration-200 ${
        isDisabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:scale-105'
      } ${
        isSelected 
          ? 'ring-2 ring-primary-500 ring-offset-2 rounded-2xl' 
          : ''
      }`}
    >
      <div className="relative">
        <img 
          src={template.image} 
          alt={template.title}
          className="w-[120px] h-[120px] rounded-2xl object-cover border border-slate-200"
        />
        {isDisabled && (
          <div className="absolute inset-0 bg-gray-200 rounded-2xl opacity-50"></div>
        )}
      </div>
      <p className={`text-center text-sm mt-2 ${
        isSelected ? 'text-primary-600 font-semibold' : 'text-gray-400'
      }`}>
        {template.title}
      </p>
    </div>
  )
}

export default TemplateCard