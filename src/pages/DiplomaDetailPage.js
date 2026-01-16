import { Link, useParams } from "react-router-dom";
import { diplomas } from "../data/diplomas";
import ModuleCard from "../components/ModuleCard";

export default function DiplomaDetailPage() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);

  if (!diploma) {
    return (
      <>
        <h1>Diploma not found</h1>
        <Link to="/diplomas">← Back to diplomas</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/diplomas" className="back-link">← Back to diplomas</Link>

      <h1 className="page-title">{diploma.name}</h1>
      <p className="page-subtitle">{diploma.description}</p>

      <div className="grid">
        {diploma.modules.map((m) => (
          <Link
            key={m.id}
            to={`/diplomas/${diploma.id}/${m.id}`}
            className="link-card"
          >
            <ModuleCard name={m.name} />
          </Link>
        ))}
      </div>

      <div className="actions">
        <Link to="/register" className="btn">Register interest</Link>
      </div>
    </>
  );
}
