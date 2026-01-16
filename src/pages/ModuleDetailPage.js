import { Link, useParams } from "react-router-dom";
import { diplomas } from "../data/diplomas";

export default function ModuleDetailPage() {
  const { diplomaId, moduleId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);
  const module = diploma?.modules.find((m) => m.id === moduleId);

  if (!diploma || !module) {
    return (
      <>
        <h1>Module not found</h1>
        <Link to="/diplomas">← Back to diplomas</Link>
      </>
    );
  }

  return (
    <>
      <Link to={`/diplomas/${diplomaId}`} className="back-link">
        ← Back to modules
      </Link>

      <h1 className="page-title">{module.name}</h1>
      <p className="card-text">{module.details}</p>

      <div className="actions">
        <Link
          to="/register"
          className="btn"
          state={{ diplomaName: diploma.name, moduleName: module.name }}
        >
          Register interest
        </Link>
      </div>
    </>
  );
}
