import { Link } from "react-router-dom";
import { diplomas } from "../data/diplomas";
import DiplomaCard from "../components/DiplomaCard";

export default function DiplomasPage() {
  return (
    <div className="container">
      <h1 className="page-title">RP Course Enrolment Portal</h1>
      <p className="page-subtitle">Explore diplomas and view modules.</p>

      <div className="grid">
        {diplomas.map((d) => (
          <Link key={d.id} to={`/diplomas/${d.id}`} className="link-card">
            <DiplomaCard name={d.name} description={d.description} />
          </Link>
        ))}
      </div>
    </div>
  );
}
