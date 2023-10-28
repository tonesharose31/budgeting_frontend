import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function OperationCreateForm() {
  const [operation, setOperation] = useState({
    // Define the form fields for your operation here
    title: "",
    description: "",
    category: "",
    isFavorite: false,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setOperation({ ...operation, [name]: value });
  };

  const handleCheckboxChange = () => {
    setOperation({ ...operation, isFavorite: !operation.isFavorite });
  };

  const createOperation = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(operation),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/operations`, httpOptions) // Update the API route to your create operation endpoint
      .then((res) => {
        console.log(res);
        alert(`${operation.title} was added to the database!`);
        navigate('/operations'); // Redirect to the correct path for your operations
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOperation();
  };

  return (
    <div className="CreateOperation">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={operation.title}
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={operation.description}
          onChange={handleTextChange}
          placeholder="Description"
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={operation.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          type="checkbox"
          name="isFavorite"
          onChange={handleCheckboxChange}
          checked={operation.isFavorite}
        />
        <br />
        <input type="submit" value="Create Operation" />
      </form>
      <Link to="/operations">Back to Operations</Link>
    </div>
  );
}

export default OperationCreateForm;


