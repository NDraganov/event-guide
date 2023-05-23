export default function EventItem({
  title,
  image,
  description,
  location,
  date,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <address>{location}</address>
      <p>{date}</p>
    </div>
  );
}
