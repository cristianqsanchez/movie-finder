export default function Movie ({ data }) {
  return (
    <li>
      <h3>{data.title}</h3>
      <span>{data.year}</span>
      <img src={data.image} alt={data.title} />
    </li>
  )
}
