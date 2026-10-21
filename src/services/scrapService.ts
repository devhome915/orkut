import type { Scrap, CreateScrap } from "../types/Scrap";
import { API_URL } from './api'

const SCRAPS_URL = `${API_URL}/scraps`

// GET - Listar recados
export async function getScraps(): Promise<Scrap[]> {
  const response = await fetch(SCRAPS_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar recados')
  }

  return response.json()
}

// POST - Criar recado
export async function createScrap(
  data: CreateScrap
): Promise<Scrap> {
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

// PATCH - Atualizar recado
export async function updateScrap(
  id: string,
  message: string
): Promise<Scrap> {
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

// DELETE - Excluir recado
export async function deleteScrap(
  id: string
): Promise<void> {
  const response = await fetch(`${SCRAPS_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error('Erro ao excluir recado')
  }
}
