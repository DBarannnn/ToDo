import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Home(){
    const[notes, setNotes] = React.useState(null)


    axios.get('https://localhost:7267/api/ToDo').then(resp => {

    console.log(resp.data);
    });


    return(
        <>
        {
        notes? <p>Here is your notes</p>
            :
            <div className="no-notes-container">
                <img src="/src/assets/TodoEmpty.png"/>
                <h3>No notes so far. <br/>Tap on + button to add notes</h3>
            </div>
            }
        
        <div className="home-options-container">
            <Link to="/todo/create">
                <img src="/src/assets/add-todo.png" className="add-todo-img"/>
            </Link>
        </div>
       </>
    )
}