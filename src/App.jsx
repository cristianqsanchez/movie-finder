import './App.css'
import { useState } from 'react'
import useMovies from './hooks/useMovies'
import MovieList from './components/MovieList'

function App () {
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
  return (
    <main>
      <form
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          value={search}
        />
      </form>
      <section>
        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      </section>
    </main>
  )
}

export default App
