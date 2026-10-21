
import { useEffect, useState } from 'react'
import type { Scrap, CreateScrap } from '../types/Scrap'

import {
  getScraps,
  createScrap,
  updateScrap,
  deleteScrap
} from '../services/scrapService'

export function useScraps() {
  const [scraps, setScraps] = useState<Scrap[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function loadScraps() {
      try {
        const data = await getScraps()

        if (active) {
          setScraps(data)
        }
      } catch {
        if (active) {
          setError('Erro ao carregar recados.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadScraps()

    return () => {
      active = false
    }
  }, [])

  async function addScrap(data: CreateScrap) {
    if (saving) return false

    setSaving(true)
    setError(null)

    try {
      const created = await createScrap(data)

      setScraps(previous => [
        created,
        ...previous
      ])

      return true
    } catch {
      setError('Erro ao publicar recado.')
      return false
    } finally {
      setSaving(false)
    }
  }

  async function editScrap(id: string, message: string) {
    if (saving) return false

    setSaving(true)
    setError(null)

    try {
      const updated = await updateScrap(id, message)

      setScraps(previous =>
        previous.map(scrap =>
          scrap.id === id ? updated : scrap
        )
      )

      return true
    } catch {
      setError('Erro ao atualizar recado.')
      return false
    } finally {
      setSaving(false)
    }
  }

  async function removeScrap(id: string) {
    if (saving) return false

    setSaving(true)
    setError(null)

    try {
      await deleteScrap(id)

      setScraps(previous =>
        previous.filter(scrap => scrap.id !== id)
      )

      return true
    } catch {
      setError('Erro ao excluir recado.')
      return false
    } finally {
      setSaving(false)
    }
  }

  return {
    scraps,
    loading,
    saving,
    error,
    addScrap,
    editScrap,
    removeScrap
  }
}
