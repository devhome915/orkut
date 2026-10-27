import type { Scrap, CreateScrap } from '../types/Scrap'

import { API_URL } from './api'

import {
  getLocalScraps,
  createLocalScrap,
  updateLocalScrap,
  deleteLocalScrap
} from './localScrapService'

const SCRAPS_URL = `${API_URL}/scraps`

const isDemoMode = import.meta.env.VITE_DATA_MODE === 'demo'

// Listar recados
export async function getScraps(): Promise<Scrap[]> {
  if (isDemoMode) {
    return getLocalScraps()
  }

  const response = await fetch(SCRAPS_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar recados')
  }

  return response.json()
}

// Criar recado
export async function createScrap(
  data: CreateScrap
): Promise<Scrap> {
  if (isDemoMode) {
    return createLocalScrap(data)
  }

  const response = await fetch(SCRAPS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Erro ao criar recado')
  }

  return response.json()
}

// Atualizar recado
export async function updateScrap(
  id: string,
  message: string
): Promise<Scrap> {
  if (isDemoMode) {
    return updateLocalScrap(id, message)
  }

  const response = await fetch(`${SCRAPS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })

  if (!response.ok) {
    throw new Error('Erro ao atualizar recado')
  }

  return response.json()
}

// Excluir recado
export async function deleteScrap(id: string): Promise<void> {
  if (isDemoMode) {
    return deleteLocalScrap(id)
  }

  const response = await fetch(`${SCRAPS_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error('Erro ao excluir recado')
  }
}