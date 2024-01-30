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

export const mapHintText = (text: string, value: string) => {
  switch (text) {
    case "stats":
      return (
        <div className="flex flex-col">
          <p>Stats</p>
          <div className="flex flex-row">
            <img src={power} className="w-6" />
            <p>{value}</p>
            <img src={toughness} className="w-6" />
          </div>
        </div>
      )
    case "colors":
      return (
        <div>
          <p>Colors</p>
          <div className="flex flex-row">
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
                    key={colorCode + index}
                  />
                ) : null
              })}
          </div>
        </div>
      )
    case "type":
      return (
        <div className="flex flex-col">
          <p>Card type</p>
          <p>{value}</p>
        </div>
      )
    case "manaCost":
      return (
        <div>
          <p>Mana cost</p>
          <div className="flex flex-row">
            {value.match(/\{\d+}|\{[A-Za-z]\}/g)?.map((manaSymbol, index) => {
              manaSymbol = manaSymbol.replace(/[{}]/g, "") // Remove curly braces
              if (isNaN(parseInt(manaSymbol))) {
                // If it's a color code
                const imageName = colorImages[manaSymbol as ColorCode]
                return imageName ? (
                  <img
                    src={imageName}
                    alt={`${manaSymbol} mana`}
                    key={manaSymbol + index}
                  />
                ) : null
              } else {
                // If it's a number
                return <span key={manaSymbol + index}>{manaSymbol}</span>
              }
            })}
          </div>
        </div>
      )
    case "cardText":
      return (
        <div>
          <p>Card Text</p>
          {value.split("\n").map((str, index) => (
            <p key={str + index}>{str}</p>
          ))}
        </div>
      )
    case "set":
      return (
        <div className="flex flex-col">
          <p>Set name</p>
          <p>{value}</p>
        </div>
      )
    case "imageUrl":
      return <img alt="Card face" src={value} />
    default:
      return ""
  }
}
