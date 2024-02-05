export const API_URL: string =
  import.meta.env.MODE === "production"
    ? "https://mtg-backend-production.up.railway.app/api/v1"
    : "http://localhost:8080/api/v1"
