import { ReactNode } from "react"

type ButtonProps = {
  text?: string
  onClick: () => void
  children?: ReactNode
  className?: string
  isDisabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  children,
  className = "",
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md ${className}`}
      disabled={isDisabled}
    >
      {children ?? text}
    </button>
  )
}

Button.defaultProps = {
  className: "",
}
