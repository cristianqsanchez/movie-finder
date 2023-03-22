import useSearch from '../hooks/useSearch'
import SearchIcon from './icons/SearchIcon'
import Loading from './Loading'
import MovieList from './MovieList'

export default function Search () {
  const { search, movies, loading, handleChange, handleSubmit } = useSearch()
  return (
    <main>
      <form onSubmit={handleSubmit} className='flex bg-zinc-900 justify-between rounded-full'>
        <input
          value={search}
          placeholder='Avengers, Star Wars, The Lord of Rings...'
          onChange={handleChange}
          className='bg-transparent w-full outline-none px-4 py-2'
        />
        <button className='bg-transparent hover:outline-none px-4 py-2'>
          <SearchIcon />
        </button>
      </form>
      <section>
        {loading ? <Loading /> : <MovieList movies={movies} />}
      </section>
    </main>
  )
}
