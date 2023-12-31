import { useEffect, useState } from "react";
import Operation from "../Components/Operation"; 

function Operations() { 
  const [operation, setOperation] = useState([]);

  useEffect(() => {
    fetch(`${API}/operations`)
      .then((response) => response.json())
      .then((data) => setOperation(data)) 
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
            {operation.map((operation, index) => { 
              return <Operation key={operation.id} operation={operation} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Operations; 

