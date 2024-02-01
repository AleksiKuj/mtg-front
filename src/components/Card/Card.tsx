import toughness from "assets/toughness.svg"
import power from "assets/power.svg"
import { formatCardText, manaCostToText } from "utils"
const Card = () => {
  //get number as prop from hint and if number >= x, dispaly steps up to x
  const card = {
    name: "Squee, the Immortal",
    manaCost: "{3}{R}{G}{W}",
    text: `Vigilance\nAt the beginning of your end step, exile target noncreature, nonland card from your graveyard. Create a 3/2 red and white Spirit creature token.\n{1}{R}{W}, {T}, Sacrifice a Spirit: Choose target card exiled with Quintorius. You may cast that card this turn without paying its mana cost. If that spell would be put into a graveyard, put it on the bottom of its owner's library instead.\n`,
    type: "Legendary Creature — Human Artificer",
    set: "The Brothers' War",
    stats: "5/4",
  }
  return (
    <div className="overflow-hidden rounded-xl w-[350px] h-[375px] bg-white text-black flex flex-col">
      <div className="bg-blue-300 px-2 py-1 flex flex-row justify-between items-center">
        <h2 className="text-lg ">{card.name}</h2>
        <div className="flex flex-row gap-0">
          {manaCostToText(card.manaCost)}
        </div>
      </div>
      <div className="bg-slate-100 text-center font-bold p-2">{card.type}</div>
      <div className="flex-grow p-2 text-sm">{formatCardText(card.text)}</div>
      <div className="flex flex-row bg-slate-100 justify-between items-center">
        <div className="p-1  font-bold text-sm">Set: {card.set}</div>
        <div className="flex p-2">
          <img src={power} alt="Power" className="stat-icon" />
          {card.stats}
          <img src={toughness} alt="Toughness" className="stat-icon" />
        </div>
      </div>
    </div>
  )
}
export default Card
