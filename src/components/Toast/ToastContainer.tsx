
import type { ToastItem } from '../../contexts/ToastContextValue'
import './Toast.css'

interface ToastContainerProps {
  toasts: ToastItem[]
  onClose: (id: string) => void
}

function ToastContainer({
  toasts,
  onClose
}: ToastContainerProps) {

  return (
    <div className="orkut-toast-container">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`orkut-toast orkut-toast-${toast.type}`}
          role={toast.type === 'error' ? 'alert' : 'status'}
        >
          <div className="d-flex align-items-start gap-2">

            <i
              aria-hidden="true"
              className={`bi ${
                toast.type === 'success'
                  ? 'bi-check-circle-fill'
                  : toast.type === 'error'
                    ? 'bi-exclamation-triangle-fill'
                    : 'bi-info-circle-fill'
              }`}
            />

            <span className="flex-grow-1">
              {toast.message}
            </span>

            <button
              type="button"
              className="btn-close btn-close-sm"
              aria-label="Fechar notificação"
              onClick={() => onClose(toast.id)}
            />

          </div>
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
