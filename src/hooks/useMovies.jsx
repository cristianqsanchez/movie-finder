import { useCallback, useState } from 'react'
import { searchMovies } from '../services/movies'

export default function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const getMovies = useCallback(async ({ search }) => {
    try {
      setLoading(true)
      const movies = await searchMovies({ search })
      setMovies(movies)
    } catch (e) {
      throw new Error('error baby')
    } finally {
      setLoading(false)
    }
  }, [])
  return { movies, loading, getMovies }
}
