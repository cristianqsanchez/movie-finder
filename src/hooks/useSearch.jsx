import debounce from 'just-debounce-it'
import { useCallback, useEffect, useState } from 'react'
import useMovies from './useMovies'

export default function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const { movies, loading, getMovies } = useMovies({ search })

  useEffect(() => {
    if (search === '') return
    if (search.length < 3) {
      setError('a little more info would be nice')
      return
    }
    setError(null)
  }, [search])
  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  return { search, movies, loading, error, handleChange, handleSubmit }
}
