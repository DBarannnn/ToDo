import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){
    return(
        
        <header>
            <img src="/src/assets/collapse.png" className="collapse-btn"/>
            <h1>ToDo App</h1>
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2017/02/thr_ryan_gosling_151113_thr_bigshort_rt_s02_ryangosling_0305.jpg?w=1296"
             className="user-img"/>
        </header>

       
    )
}