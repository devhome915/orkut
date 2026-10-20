import { useEffect, useState } from 'react'

import type { User } from '../types/User'
import { getUsers } from '../services/userService'
import { FriendsList } from '../components/FriendsList/FriendsList'

function Friends() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function loadUsers() {
      try {
        const data = await getUsers()

        if (active) {
          setUsers(data)
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : 'Erro desconhecido'
          )
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadUsers()

    return () => {
      active = false
    }
  }, [])

  if (loading) {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-border"
          role="status"
        >
          <span className="visually-hidden">
            Carregando...
          </span>
        </div>

        <p className="mt-2">
          Carregando amigos...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-12 col-lg-8 mx-auto">
        <FriendsList friends={users} />
      </div>
    </div>
  )
}

export default Friends