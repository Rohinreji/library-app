import { useState } from "react"
import { AdminChatInterFace } from "../adminChatInterface/adminchatInterFace"
import { AdminchatSideBar } from "../adminChatSideBar/adminChatSideBar"
import { AdminChatWelcomePage } from "../adminChatWelcome/adminChatWelcome"

export const AdminChatDashBoard = () =>
{
    const [tutorId,setTutorId] = useState("")

    const getTutorId = (value) =>
    {
        setTutorId(value)
    }
    console.log(tutorId);
    return(
        <div>
            <div className="d-flex">
                <div className="col-3 mx-5" >
                <AdminchatSideBar getTutorId={getTutorId} tutorId={tutorId}/>
                </div>
                <div className="col-9">
{tutorId ? <AdminChatInterFace tutorId={tutorId}/> : <AdminChatWelcomePage/>}
                </div>

            </div>
        </div>
    )
}