import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMemberList = ({ members }) => {
  return (
    <div className="flex-1 px-6 pb-6 overflow-y-auto">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}

export default TeamMemberList