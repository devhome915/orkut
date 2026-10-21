
import { useState } from 'react'
import type { FormEvent } from 'react'

import { currentUser } from '../../data/users'
import { useScraps } from '../../hooks/useScraps'
import ScrapCard from './ScrapCard'

import './Scrap.css'

function Scraps() {
  const {
    scraps,
    loading,
    saving,
    error,
    addScrap,
    editScrap,
    removeScrap
  } = useScraps()

  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!message.trim()) return

    const success = await addScrap({
      author: currentUser.name,
      message: message.trim(),
      createdAt: new Date().toISOString()
    })

    if (success) {
      setMessage('')
    }
  }

  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            Carregando...
          </span>
        </div>
      </div>
    )
  }

  return (
    <section className="scraps-container rounded overflow-hidden">

      <div className="scraps-header p-3">
        <h5 className="mb-0">
          Meus recados ({scraps.length})
        </h5>
      </div>

      <div className="p-3">

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="scrap-message"
            className="form-label"
          >
            Deixe um recado
          </label>

          <textarea
            id="scrap-message"
            className="form-control"
            rows={3}
            value={message}
            onChange={event => setMessage(event.target.value)}
          />

          <div className="d-flex justify-content-end mt-3">
            <button
              type="submit"
              className="btn orkut-btn"
              disabled={saving || !message.trim()}
            >
              <i className="bi bi-send me-2" />
              {saving ? 'Aguarde...' : 'Publicar recado'}
            </button>
          </div>
        </form>

        <hr />

        {scraps.length === 0 ? (
          <p className="text-muted">
            Nenhum recado publicado.
          </p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {scraps.map(scrap => (
              <ScrapCard
                key={scrap.id}
                scrap={scrap}
                saving={saving}
                onEdit={editScrap}
                onDelete={removeScrap}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Scraps
