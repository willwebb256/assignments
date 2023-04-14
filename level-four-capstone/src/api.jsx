const API_BASE_URL = "https://mushroomobserver.org/api_v2";

export async function getMushrooms() {
  const response = await fetch(`${API_BASE_URL}/observations?has_images=true&format=json`);
  const mushrooms = await response.json();
  return mushrooms.results;
}
