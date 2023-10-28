import { useEffect, useState } from "react";
import Operation from "./Operation"; // Update to match your component's name
const API = import.meta.env.VITE_BASE_URL;

function Operations() { // Change the component name to start with an uppercase letter
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    fetch(`${API}/operations`)
      .then((response) => response.json())
      .then((operations) => setOperations(operations))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Operations">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Operation</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((operation, index) => { // Use a different variable name (e.g., operation)
              return <Operation key={operation.id} operation={operation} index={index} />; // Update the variable name in the component
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Operations;

