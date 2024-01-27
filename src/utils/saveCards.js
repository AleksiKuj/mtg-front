import axios from "axios"

const BASE_URL =
  "https://api.magicthegathering.io/v1/cards?type=legendary%20creature"
const uniqueCardNames = new Set()
let currentPage = 1

async function fetchCards() {
  try {
    const response = await axios.get(`${BASE_URL}&page=${currentPage}`)
    const cards = response.data.cards

    if (cards.length === 0) {
      return false // No more cards, end the loop
    }

    cards.forEach((card) => {
      if (!uniqueCardNames.has(card.name)) {
        uniqueCardNames.add(card.name)
      }
    })

    currentPage++
    return true // There are more cards to fetch
  } catch (error) {
    console.error("Error fetching data:", error)
    return false // End loop on error
  }
}

async function main() {
  while (await fetchCards()) {
    console.log(
      `Fetched page ${currentPage - 1}, total unique cards: ${
        uniqueCardNames.size
      }`
    )
  }

  // Save or process the unique card names
  console.log(Array.from(uniqueCardNames))
}

main()
