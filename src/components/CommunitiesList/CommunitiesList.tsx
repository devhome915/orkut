import type { Community } from '../../types/Community'
import { CommunityCard } from '../CommutityCard/CommunityCard'
import { Link } from 'react-router-dom'

import './CommunitiesList.css'

interface CommunitiesListProps {
  communities: Community[]
}

export function CommunitiesList({ communities }: CommunitiesListProps) {
  return (
    <aside className="communities-list rounded overflow-hidden">

      <div className="communities-header d-flex justify-content-between align-items-center p-3">
        <h5 className="mb-0">
          Minhas comunidades ({communities.length})
        </h5>

        <Link
          to={`/comunidades`}
          className="friend-name text-decoration-none"
        >
          ver todas
        </Link>
      </div>

      <div className="p-3">

        {communities.length > 0 ? (
          <div className="d-flex flex-column gap-3">

            {communities.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
              />
            ))}

          </div>
        ) : (
          <p className="text-muted small mb-0">
            Nenhuma comunidade adicionada.
          </p>
        )}

      </div>

    </aside>
  )
}

