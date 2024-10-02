import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        // Post data to todo api
        // Goto the homepage
        navigate('/');
    }

    return (
        <div>
        <h1>Add a New Todo</h1>
        <form onSubmit={saveTodo}><input type="text"  placeholder="Enter your task" required/>
        <button>Submit</button>
        </form>
        </div>
    );
}

export default AddTodo;