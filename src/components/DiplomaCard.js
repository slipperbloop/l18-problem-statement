export default function DiplomaCard({ name, description }) {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{description}</p>
      <p className="card-hint">View modules →</p>
    </div>
  );
}
