import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        //Collect form input
        const formData = new FormData(event.target);
        // Post data to todo api
        await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`, formData);
        // {title: formData.get('todo')} //Insert on when you not inserting a file
        // Goto the homepage
        navigate('/');
    }

    return (
        <div>
        <h1>Add a New Todo</h1>
        <form onSubmit={saveTodo}>
        <input type="text" placeholder="Enter your todo" required name = "title" />
        <input type="file" required name="icon"/>
        <button>Submit</button>
        </form>
        </div>
    );
}

export default AddTodo;