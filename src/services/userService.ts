import type { User } from '../types/User'

const API_URL = 'http://localhost:3000'

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/users`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar os usuários')
  }

  const data: User[] = await response.json()

  return data
}