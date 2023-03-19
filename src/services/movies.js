import { API_KEY, API_URL } from '../config'

export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error')
  }
}
