import { Form } from "react-router-dom";
import "./CreateToDo.css"


export default function CreateNote(){
    return(
       <Form method="post" className="form-container">
                <h2>Create your ToDo</h2>
            
                <label htmlFor="heading">Heading</label>
                <input type="textbox" name="heading" id="todo-heading" placeholder="Your heading"></input>

                <label htmlFor="todo-text">Describe your ToDo</label>
                <textarea name="todoText" id="todo-text" placeholder="Do the homework"></textarea>

                <button>Save</button>
       </Form>
    )
}