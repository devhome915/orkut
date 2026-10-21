
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import type { ReactNode } from 'react'
import ToastContainer from '../components/Toast/ToastContainer'
import { ToastContext } from './ToastContextValue'
import type { ToastItem } from './ToastContextValue'
import type { ToastType } from './ToastContextValue'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  )

  const removeToast = useCallback((id: string) => {
    const timer = timers.current.get(id)

    if (timer) {
      clearTimeout(timer)
      timers.current.delete(id)
    }

    setToasts(previous =>
      previous.filter(toast => toast.id !== id)
    )
  }, [])

  const showToast = useCallback((
    message: string,
    type: ToastType = 'success'
  ) => {
    const id = crypto.randomUUID()

    setToasts(previous => [
      ...previous,
      { id, message, type }
    ])

    const timer = setTimeout(() => {
      removeToast(id)
    }, 4000)

    timers.current.set(id, timer)
  }, [removeToast])

  useEffect(() => {
    const activeTimers = timers.current

    return () => {
      activeTimers.forEach(timer => clearTimeout(timer))
      activeTimers.clear()
    }
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <ToastContainer
        toasts={toasts}
        onClose={removeToast}
      />
    </ToastContext.Provider>
  )
}
