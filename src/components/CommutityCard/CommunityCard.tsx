import type { Community } from '../../types/Community'
import { useState } from 'react'

import './CommunityCard.css'

interface CommunityCardProps {
  community: Community
}

export function CommunityCard({ community }: CommunityCardProps) {

    const [isMember, setIsMember] = useState<boolean>(false)

    function handleMembership() {
        setIsMember((previousState) => !previousState)
    }

    return (
        <div className="community-card mb-1">

            <div className="d-flex align-items-center gap-3">
                <div className="community-image d-flex align-items-center justify-content-center">
                    {community.image ? (
                    <img
                        src={community.image}
                        alt={community.name}
                    />
                    ) : (
                    <span className="fs-3">👥</span>
                    )}
                </div>
                <div className="flex-grow-1">
                    <h6 className="community-name mb-1">
                        {community.name}
                    </h6>
                </div>
            </div>
            
            <div className="d-flex align-items-center gap-3">
                <div >
                    <p className="community-members mb-0">
                        {(
                            community.members + (isMember ? 1 : 0)
                            ).toLocaleString('pt-BR')
                        }
                            
                        {
                            community.members == 0 ?(
                                <span className='ps-1'>membro</span>
                            ):(
                                <span className='ps-1'>membros</span>
                            )
                        }
                    </p>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end">
                    <button
                        type="button"
                        className={`btn btn-sm ${
                        isMember ? 'btn-outline-secondary' : 'orkut-btn'
                        }`}
                        onClick={handleMembership}
                    >
                        {isMember ? 'Sair da comunidade' : 'Participar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

