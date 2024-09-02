import { useState } from "react"
import { TutorSidebar } from "../tutorSidebar/tutorSidebar"
import { TutorViewBook } from "../tutorViewBook/tutorViewBook"
import { TutorProfile } from "../tutorProfile/tutorProfile"

export const TutorDashboard = () =>
{
    const[selectePage,setSelectedPage] = useState("tutorViewBook")
    const changeSelectedPage = (value) =>
    {
setSelectedPage(value)
    }

    return(
        <div className="d-flex">
            <TutorSidebar changeSelectedPage={changeSelectedPage} />
         { selectePage === "category" && <TutorViewBook/>} 

        {selectePage === "profile" &&  <TutorProfile/>}
        </div>
    )
}