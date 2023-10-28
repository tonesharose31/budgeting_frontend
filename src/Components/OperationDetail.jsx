import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function OperationDetail() {
  const [operations, setOperations] = useState([]);
  let { operationsId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/operations/${operationsId}`)
      .then((response) => response.json())
      .then((operations) => {
        setOperations(operations);
      })
      .catch(() => navigate("/not-found"));
  }, [operationsId, navigate]);

  const handleArchive = () => {
    // Implement the archive action and API call
    // Redirect the user or perform other actions as needed
  };

  return (
    <article>
      <h3>{operations.name}</h3>
      <h5>{operations.url}</h5>
      <h6>{operations.category}</h6>
      <p>{operations.description}</p>
      <div className="showNavigation">
        <div>
          <Link to="/operations">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/operations/${operationsId}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleArchive}>Archive</button>
        </div>
      </div>
    </article>
  );
}

export default OperationDetail;

