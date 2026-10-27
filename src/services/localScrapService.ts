import type { CreateScrap, Scrap } from '../types/Scrap'

const STORAGE_KEY = 'orkut-demo-scraps'

function readScraps(): Scrap[] {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return []
  }

  const scraps: unknown = JSON.parse(stored)

  if (!Array.isArray(scraps)) {
    throw new Error('Os dados dos recados estão em formato inválido.')
  }

  return scraps as Scrap[]
}

function writeScraps(scraps: Scrap[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scraps))
}

// Lista os recados salvos no navegador.
export async function getLocalScraps(): Promise<Scrap[]> {
  return readScraps()
}

// Cria um recado e salva a lista atualizada.
export async function createLocalScrap(
  data: CreateScrap
): Promise<Scrap> {
  const scraps = readScraps()

  const newScrap: Scrap = {
    ...data,
    id: crypto.randomUUID()
  }

  writeScraps([...scraps, newScrap])

  return newScrap
}

// Atualiza a mensagem de um recado existente.
export async function updateLocalScrap(
  id: string,
  message: string
): Promise<Scrap> {
  const scraps = readScraps()
  const scrap = scraps.find(item => item.id === id)

  if (!scrap) {
    throw new Error('Recado não encontrado.')
  }

  const updatedScrap: Scrap = {
    ...scrap,
    message
  }

  const updatedScraps = scraps.map(item =>
    item.id === id ? updatedScrap : item
  )

  writeScraps(updatedScraps)

  return updatedScrap
}

// Exclui um recado existente.
export async function deleteLocalScrap(id: string): Promise<void> {
  const scraps = readScraps()
  const exists = scraps.some(item => item.id === id)

  if (!exists) {
    throw new Error('Recado não encontrado.')
  }

  const remainingScraps = scraps.filter(item => item.id !== id)

  writeScraps(remainingScraps)
}