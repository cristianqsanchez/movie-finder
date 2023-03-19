export default function MovieList ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <span>{movie.year}</span>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}
