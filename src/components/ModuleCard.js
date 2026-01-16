export default function ModuleCard({ name }) {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-hint">View details →</p>
    </div>
  );
}
