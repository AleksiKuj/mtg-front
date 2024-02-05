import B from "assets/black.png"
import W from "assets/white.png"
import G from "assets/green.png"
import R from "assets/red.png"
import U from "assets/blue.png"
import C from "assets/colorless.png"
import T from "assets/tap.png"
import { ColorCode } from "types"

const colorImages: Record<ColorCode, string> = {
  R,
  U,
  W,
  B,
  C,
  G,
  T,
}
export const colorsToIcons = (arr: string[]) => {
  let icons = []
  for (const element of arr) {
    const colorSymbol = colorImages[element]
    icons.push(
      <img src={colorSymbol} alt={colorSymbol} className="w-8" key={element} />
    )
  }
  return icons
}

export const formatCardText = (text: string) => {
  // Split text by lines and map each line to a paragraph
  return (
    <div>
      {text.split("\n").map((line, index) => (
        <p className="p-1 flex flex-row" key={index}>
          {/* Split the line by mana symbols and regular text */}
          {line.split(/(\{\d+}|\{[A-Za-z]\})/g).map((part, partIndex) => {
            // Check if part is a mana symbol
            if (/\{\d+}|\{[A-Za-z]\}/.test(part)) {
              // Convert mana symbols to JSX elements
              return manaCostToText(part)
            } else {
              // Return regular text as is
              return <span key={partIndex}>{part}</span>
            }
          })}
        </p>
      ))}
    </div>
  )
}

export const manaCostToText = (value: string) => {
  return (
    value.match(/\{\d+}|\{[A-Za-z]\}/g)?.map((manaSymbol, index) => {
      manaSymbol = manaSymbol.replace(/[{}]/g, "") // Remove curly braces
      if (isNaN(parseInt(manaSymbol))) {
        const imageName = colorImages[manaSymbol as ColorCode]
        return imageName ? (
          <img
            src={imageName}
            alt={`${manaSymbol} mana`}
            className="w-8"
            key={manaSymbol + index}
          />
        ) : null
      } else {
        return (
          <span className="mana-number" key={manaSymbol + index}>
            &nbsp;
            {manaSymbol}
            &nbsp;
          </span>
        )
      }
    }) || []
  )
}

export const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const paddedHours = String(hours).padStart(2, "0")
  const paddedMinutes = String(minutes).padStart(2, "0")
  const paddedSeconds = String(seconds).padStart(2, "0")

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}
