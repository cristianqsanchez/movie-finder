import { useState } from 'react'
import useMovies from './useMovies'

export default function useSearch () {
  const [search, setSearch] = useState('')
  const { movies, loading, getMovies } = useMovies({ search })
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  return { search, movies, loading, handleChange, handleSubmit }
}
