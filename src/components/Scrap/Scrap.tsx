import { useState } from 'react'
import type { FormEvent } from 'react'

import type { Scrap } from '../../types/Scrap'
import { initialScraps } from '../../data/Scrap' 
import { currentUser } from '../../data/users'

import './Scrap.css'

export function Scraps() {
  const [message, setMessage] = useState<string>('')
  const [scraps, setScraps] = useState<Scrap[]>(initialScraps)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!message.trim()) {
      return
    }

    const newScrap: Scrap = {
      id: Date.now(),
      author: currentUser.name,
      message: message.trim(),
      createdAt: new Date().toISOString()
    }

    setScraps((previousScraps) => [
      newScrap,
      ...previousScraps
    ])

    setMessage('')
  }

  function handleDelete(id: number) {
    setScraps((previousScraps) =>
      previousScraps.filter((scrap) => scrap.id !== id)
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

        <form onSubmit={handleSubmit}>
          <label htmlFor="scrap-message" className="form-label">
            Deixe um recado
          </label>

          <textarea
            id="scrap-message"
            className="form-control"
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Escreva seu recado..."
          />

          <div className="d-flex justify-content-end mt-3">
            <button
              type="submit"
              className="btn orkut-btn"
              disabled={!message.trim()}
            >
              Publicar recado
            </button>
          </div>
        </form>

        <hr />

        {scraps.length > 0 ? (
          <div className="d-flex flex-column gap-3">
            {scraps.map((scrap) => (
              <article
                key={scrap.id}
                className="scrap-item p-3 rounded"
              >
                <div className="d-flex justify-content-between gap-2">
                  <strong className="scrap-author">
                    {scrap.author}
                  </strong>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(scrap.id)}
                  >
                    Excluir
                  </button>
                </div>

                <p className="scrap-message mt-2 mb-2">
                  {scrap.message}
                </p>

                <small className="text-muted">
                  {new Date(scrap.createdAt).toLocaleString('pt-BR')}
                </small>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted mb-0">
            Nenhum recado publicado.
          </p>
        )}

      </div>
    </section>
  )
}
