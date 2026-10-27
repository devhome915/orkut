import type { User } from '../types/User'

import { friends } from '../data/users'
import { API_URL } from './api'

const isDemoMode = import.meta.env.VITE_DATA_MODE === 'demo'

export async function getUsers(): Promise<User[]> {
  if (isDemoMode) {
    return friends
  }

  const response = await fetch(`${API_URL}/users`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar os usuários')
  }

  const data: User[] = await response.json()

  return data
}