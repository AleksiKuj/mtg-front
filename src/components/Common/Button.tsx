import { ReactNode } from "react"

type ButtonProps = {
  text?: string
  onClick: () => void
  children?: ReactNode
  className?: string
  isDisabled?: boolean
  color?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  children,
  className = "",
  isDisabled,
  color,
}) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500 hover:bg-red-700 text-white"
      case "green":
        return "bg-green-700 hover:bg-green-800 text-white"
      case "blue":
        return "bg-blue-500 hover:bg-blue-700 text-white"
      case "yellow":
        return "bg-yellow-500 hover:bg-yellow-700 text-black"
      default:
        return ""
    }
  }
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 hover:shadow-2xl rounded-md shadow-md ${
        color && getColorClass(color)
      } ${className} ${isDisabled && "hover:cursor-not-allowed"} `}
      disabled={isDisabled}
    >
      {children ?? text}
    </button>
  )
}

Button.defaultProps = {
  className: "",
}
