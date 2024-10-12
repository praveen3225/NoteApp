import React from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"
function WelcomePage()
{
    async function handleNavigate()
    {
            const response = await axios.get("//localhost:8080/get-note").catch((error)=>{alert(error+"Error Fetching data from server")});
            const finalResponse = response.data.map((note) => ({
                ...note,
                id: Date.now() + Math.random() // Generate unique id for each server card if not present
            }));
            //console.log(finalResponse);
            navigate("/create-card", {state:{serverCards:finalResponse,isAppend:true}})
    }

    const navigate = useNavigate();
    return (
        <div style={{marginTop:"10px"}} className="welcome-container-placement">        
            <div className="welcome-container">
                <h3>SnapNotes is your go-to platform for organizing thoughts, ideas, and notes in a fun and easy way. Create, edit, and manage your notes effortlessly using our sleek card system. Add as many cards as you need, customize them, and stay organized in style. Whether it's for study notes, to-do lists, or creative ideas, SnapNotes makes it simple to keep everything in one place!

Start snapping your thoughts into place today!</h3>
            </div>
            <div className="button-container">
                <button style={{margin:"10px"}} className="btn btn-success" onClick={()=>{navigate("/create-card")}}>
                    Create Note
                </button>
                <button style={{margin:"10px"}} className="btn btn-primary" onClick={handleNavigate}>
                    View Notes
                </button>
            </div>
        </div>
    )
}

export default WelcomePage