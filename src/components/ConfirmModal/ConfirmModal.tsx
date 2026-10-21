
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ConfirmModal.css'

interface ConfirmModalProps {
  show: boolean
  title: string
  message: string
  confirmText?: string
  variant?: 'danger' | 'primary'
  loading?: boolean
  onConfirm: () => void | Promise<void>
  onCancel: () => void
}

function ConfirmModal({
  show,
  title,
  message,
  confirmText = 'Confirmar',
  variant = 'primary',
  loading = false,
  onConfirm,
  onCancel
}: ConfirmModalProps) {

  useEffect(() => {
    if (!show) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !loading) {
        onCancel()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [show, loading, onCancel])

  if (!show) return null

  return createPortal(
    <>
      <div
        className="modal-backdrop fade show"
      />

      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content orkut-modal">

            <div className="modal-header">
              <h5
                id="confirm-modal-title"
                className="modal-title"
              >
                {title}
              </h5>

              <button
                type="button"
                className="btn-close"
                aria-label="Fechar"
                disabled={loading}
                onClick={onCancel}
              />
            </div>

            <div className="modal-body">
              <p className="mb-0">{message}</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                disabled={loading}
                onClick={onCancel}
              >
                Cancelar
              </button>

              <button
                type="button"
                className={`btn ${
                  variant === 'danger'
                    ? 'btn-outline-danger'
                    : 'orkut-btn'
                }`}
                disabled={loading}
                onClick={() => void onConfirm()}
              >
                {loading ? 'Aguarde...' : confirmText}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export default ConfirmModal
