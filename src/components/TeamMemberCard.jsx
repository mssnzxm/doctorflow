import React from 'react'

const TeamMemberCard = ({ member }) => {
  return (
    <div className="mb-3 p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="w-16 h-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img 
            src={member.avatar} 
            alt={member.role}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium text-slate-900 mb-1">
            {member.role}
          </h3>
          <p className="text-xs text-slate-600 mb-1">
            {member.name}
          </p>
          <p className="text-xs text-slate-500 leading-tight">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard