import useSearch from '../hooks/useSearch'
import SearchIcon from './icons/SearchIcon'
import Loading from './Loading'
import Movies from './MovieList'

export default function Search () {
  const { search, movies, loading, error, handleChange, handleSubmit } = useSearch()
  return (
    <main>
      <form onSubmit={handleSubmit} className='flex bg-zinc-800 justify-between rounded-full my-2'>
        <input
          value={search}
          placeholder='Search a movie'
          onChange={handleChange}
          className='bg-transparent w-full outline-none px-4 py-2'
        />
        <button className='bg-transparent hover:outline-none px-4 py-2'>
          <SearchIcon />
        </button>
      </form>
      <section>
        {error && <p className='text-xl text-blue-400 font-bold'>{error}</p>}
        {loading ? <Loading /> : <Movies movies={movies} />}
      </section>
    </main>
  )
}
