
import { useState } from 'react'
import type { Scrap } from '../../types/Scrap'
import ConfirmModal from '../ConfirmModal/ConfirmModal'

interface ScrapCardProps {
  scrap: Scrap
  saving: boolean
  onEdit: (id: string, message: string) => Promise<boolean>
  onDelete: (id: string) => Promise<boolean>
}

function ScrapCard({
  scrap,
  saving,
  onEdit,
  onDelete
}: ScrapCardProps) {
  const [editing, setEditing] = useState(false)
  const [message, setMessage] = useState(scrap.message)

  const [confirmAction, setConfirmAction] = useState<'save' | 'delete' | null>(null)

  function handleSave() {
    if (!message.trim() || saving) return
    setConfirmAction('save')
  }

  function handleDelete() {
    if (saving) return
    setConfirmAction('delete')
  }

  async function handleConfirm() {
    if (saving || !confirmAction) return

    if (confirmAction === 'save') {
      const success = await onEdit(scrap.id, message.trim())

      if (success) {
        setEditing(false)
        setConfirmAction(null)
      }
    }

    if (confirmAction === 'delete') {
      const success = await onDelete(scrap.id)

      if (success) {
        setConfirmAction(null)
      }
    }
  }

  return (
    <>
      <article className="scrap-item p-3 rounded">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <strong className="scrap-author">{scrap.author}</strong>

          <div className="d-flex gap-2">
            {!editing && (
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                disabled={saving}
                onClick={() => setEditing(true)}
              >
                <i className="bi bi-pencil-square me-1" />
                Editar
              </button>
            )}

            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              disabled={saving}
              onClick={handleDelete}
            >
              <i className="bi bi-trash me-1" />
              Excluir
            </button>
          </div>
        </div>

        {editing ? (
          <div className="mt-3">
            <textarea
              className="form-control"
              rows={3}
              value={message}
              onChange={event => setMessage(event.target.value)}
              aria-label="Editar recado"
            />

            <div className="d-flex gap-2 mt-2">
              <button
                type="button"
                className="btn orkut-btn btn-sm"
                disabled={saving || !message.trim()}
                onClick={handleSave}
              >
                Salvar
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                disabled={saving}
                onClick={() => {
                  setMessage(scrap.message)
                  setEditing(false)
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <p className="scrap-message mt-3 mb-2">{scrap.message}</p>
        )}

        <small className="text-muted">
          {new Date(scrap.createdAt).toLocaleString('pt-BR')}
        </small>
      </article>

      <ConfirmModal
        show={confirmAction !== null}
        title={
          confirmAction === 'delete'
            ? 'Excluir recado'
            : 'Salvar alterações'
        }
        message={
          confirmAction === 'delete'
            ? 'Tem certeza de que deseja excluir este recado?'
            : 'Deseja confirmar as alterações realizadas?'
        }
        confirmText={
          confirmAction === 'delete'
            ? 'Sim, excluir'
            : 'Confirmar e salvar'
        }
        variant={confirmAction === 'delete' ? 'danger' : 'primary'}
        loading={saving}
        onConfirm={handleConfirm}
        onCancel={() => setConfirmAction(null)}
      />
    </>
  )
}

export default ScrapCard
