'use client'
import * as React from 'react'
import { Modal } from './modal'
import { PurchaseForm } from './purchase-form'

type PurchasePayload = { source?: string; plan?: string; price?: string }

type ModalState =
  | { kind: null; payload?: undefined }
  | { kind: 'purchase'; payload?: PurchasePayload }

type Ctx = {
  open: (kind: 'purchase', payload?: PurchasePayload) => void
  close: () => void
}

const ModalCtx = React.createContext<Ctx | null>(null)

export function useModal() {
  const ctx = React.useContext(ModalCtx)
  if (!ctx) throw new Error('useModal must be used within <ModalProvider>')
  return ctx
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ModalState>({ kind: null })

  const open: Ctx['open'] = (kind, payload) => setState({ kind, payload })
  const close = () => setState({ kind: null })

  return (
    <ModalCtx.Provider value={{ open, close }}>
      {children}

      <Modal open={state.kind === 'purchase'} onClose={close}>
        <PurchaseForm onDone={close} />
      </Modal>
    </ModalCtx.Provider>
  )
}
