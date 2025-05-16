import React from "react";
import { Link } from "react-router-dom";

function GameStart(){
    return(
        <div className="gamestart">
           <h1>welcome to game world</h1>
           <div className="gameouter">
            <h1>stone paper scissor</h1>
            <ul>
                <Link to="/Singleplayer"><li>single plyer</li></Link>
                <Link to="/Multipleplayer"><li>multiple plyer</li></Link>
            </ul>
           </div>
        </div>
    )
}
export default GameStart;