import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { diplomas } from "../data/diplomas";

export default function RegisterPage() {
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const prefilled = location.state || {};
  const [selected, setSelected] = useState(
    prefilled.moduleName
      ? `${prefilled.diplomaName} — ${prefilled.moduleName}`
      : ""
  );

  const allModuleOptions = useMemo(() => {
    const options = [];
    diplomas.forEach((d) => {
      d.modules.forEach((m) => {
        options.push(`${d.name} — ${m.name}`);
      });
    });
    return options;
  }, []);

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="container">
        <h1 className="page-title">Submission received ✅</h1>
        <p className="card-text">
          Thanks <b>{name}</b>! We received your interest for:
        </p>
        <div className="card">
          <p className="card-text"><b>{selected}</b></p>
          <p className="card-text">Confirmation will be sent to: {email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Register Interest</h1>
      <p className="page-subtitle">Fill in the form to register your interest.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., Alvin Chan"
          />
        </label>

        <label className="label">
          Email
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="e.g., you@example.com"
          />
        </label>

        <label className="label">
          Course selected
          <select
            className="input"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            required
          >
            <option value="" disabled>Select a module</option>
            {allModuleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
