
import { useEffect, useState } from 'react'
import type { Scrap, CreateScrap } from '../types/Scrap'
import { useToast } from './useToast'

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
  const { showToast } = useToast()

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
          showToast('Erro ao carregar recados.', 'error')
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
  }, [showToast])

  async function addScrap(data: CreateScrap) {
    if (saving) return false

    setSaving(true)

    try {
      const created = await createScrap(data)

      setScraps(previous => [
        created,
        ...previous
      ])
      showToast('Recado publicado com sucesso.', 'success')

      return true
    } catch {
      showToast('Erro ao publicar recado.', 'error')
      return false
    } finally {
      setSaving(false)
    }
  }

  async function editScrap(id: string, message: string) {
    if (saving) return false

    setSaving(true)

    try {
      const updated = await updateScrap(id, message)

      setScraps(previous =>
        previous.map(scrap =>
          scrap.id === id ? updated : scrap
        )
      )
      showToast('Recado atualizado com sucesso.', 'success')

      return true
    } catch {
      showToast('Erro ao atualizar recado.', 'error')
      return false
    } finally {
      setSaving(false)
    }
  }

  async function removeScrap(id: string) {
    if (saving) return false

    setSaving(true)

    try {
      await deleteScrap(id)

      setScraps(previous =>
        previous.filter(scrap => scrap.id !== id)
      )
      showToast('Recado excluído com sucesso.', 'success')

      return true
    } catch {
      showToast('Erro ao excluir recado.', 'error')
      return false
    } finally {
      setSaving(false)
    }
  }

  return {
    scraps,
    loading,
    saving,
    addScrap,
    editScrap,
    removeScrap
  }
}
