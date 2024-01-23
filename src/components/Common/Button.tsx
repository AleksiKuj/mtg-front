import { ReactNode } from "react"

type ButtonProps = {
  text?: string
  onClick: () => void
  children?: ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  children,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`py-2 px-4 rounded-md ${className}`}>
      {children ?? text}
    </button>
  )
}

Button.defaultProps = {
  className: "",
}
