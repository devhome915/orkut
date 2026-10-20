import type { User } from '../../types/User'
import { Link } from 'react-router-dom'
import './FriendsList.css'

interface FriendsListProps {
  friends: User[]
}

export function FriendsList({ friends }: FriendsListProps) {
  return (
    <aside className="friends-list rounded overflow-hidden">

      <div className="friends-header d-flex justify-content-between align-items-center p-3">
        <h5 className="mb-0">
          Meus amigos ({friends.length})
        </h5>

        <Link
          to={`/amigos`}
          className="friend-name text-decoration-none"
        >
          ver todos
        </Link>
      </div>

      <div className="p-3">
        <div className="row g-2">

          {friends.map((friend) => (
            <div
              className="col-4"
              key={friend.id}
            >
              <div className="friend-item text-center">

                <div className="friend-avatar d-flex align-items-center justify-content-center">
                  {friend.avatar ? (
                    <img
                      src={friend.avatar}
                      alt={`Foto de ${friend.name}`}
                    />
                  ) : (
                    <span>👤</span>
                  )}
                </div>

                <p className="friend-name mt-2 mb-0">
                  <Link
                  to={`/perfil/${friend.id}`}
                  className="friend-name text-decoration-none"
                >
                  {friend.name}
                </Link>
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

    </aside>
  )
}
