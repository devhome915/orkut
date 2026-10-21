import type { User } from '../types/User'
import { API_URL } from './api'

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar os usuários')
  }

  const data: User[] = await response.json()

  return data
}
