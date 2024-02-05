import { ReactNode } from "react"
import { Button } from "."

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  onConfirm: () => void
}
export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, children, onConfirm } = props
  if (!isOpen) return null

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">{children}</div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <Button
              className="font-bold uppercase text-red-700 "
              onClick={onClose}
              isDisabled={false}
            >
              Cancel
            </Button>
            <Button
              className="font-bold uppercase "
              onClick={onConfirm}
              isDisabled={false}
              color="green"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
