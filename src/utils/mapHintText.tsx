import B from "assets/black.png"
import W from "assets/white.png"
import G from "assets/green.png"
import R from "assets/red.png"
import U from "assets/blue.png"
import C from "assets/colorless.png"
import toughness from "assets/toughness.svg"
import power from "assets/power.svg"
import { ColorCode } from "types"

const colorImages: Record<ColorCode, string> = {
  R,
  U,
  W,
  B,
  C,
  G,
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

// ADD CHECKS FOR MANA COST AND TAPS
export const formatCardText = (text: string) => {
  return (
    <div>
      {text.split("\n").map((str, index) => (
        <p className="p-1" key={str + index}>
          {str}
        </p>
      ))}
    </div>
  )
}

export const mapHintText = (text: string, value: string) => {
  switch (text) {
    case "stats":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Stats</h3>
          <div className="stats-container">
            <img src={power} alt="Power" className="stat-icon" />
            <span className="stat-value">{value}</span>
            <img src={toughness} alt="Toughness" className="stat-icon" />
          </div>
        </div>
      )
    case "colors":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Colors</h3>
          <div className="colors-container">
            {value
              .substring(1, value.length - 1)
              .split(",")
              .map((colorCode) => colorCode.trim() as ColorCode)
              .map((colorCode, index) => {
                const imageName = colorImages[colorCode]
                return imageName ? (
                  <img
                    src={imageName}
                    alt={`${colorCode} color`}
                    className="color-icon"
                    key={colorCode + index}
                  />
                ) : null
              })}
          </div>
        </div>
      )
    case "type":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Card Type</h3>
          <p className="hint-content">{value}</p>
        </div>
      )
    case "manaCost":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Mana Cost</h3>
          <div className="mana-cost-container">
            {value.match(/\{\d+}|\{[A-Za-z]\}/g)?.map((manaSymbol, index) => {
              manaSymbol = manaSymbol.replace(/[{}]/g, "") // Remove curly braces
              if (isNaN(parseInt(manaSymbol))) {
                // If it's a color code
                const imageName = colorImages[manaSymbol as ColorCode]
                return imageName ? (
                  <img
                    src={imageName}
                    alt={`${manaSymbol} mana`}
                    className="mana-icon"
                    key={manaSymbol + index}
                  />
                ) : null
              } else {
                // If it's a number
                return (
                  <span className="mana-number" key={manaSymbol + index}>
                    {manaSymbol}
                  </span>
                )
              }
            })}
          </div>
        </div>
      )
    case "cardText":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Card Text</h3>
          <div className="card-text-content">
            {value.split("\n").map((str, index) => (
              <p key={str + index}>{str}</p>
            ))}
          </div>
        </div>
      )
    case "set":
      return (
        <div className="hint-section">
          <h3 className="hint-title">Set Name</h3>
          <p className="hint-content">{value}</p>
        </div>
      )
    case "imageUrl":
      return (
        <div className="image-container">
          <img alt="Card face" src={value} className="card-image" />
        </div>
      )
    default:
      return ""
  }
}
