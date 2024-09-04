import { useState } from "react"
import { TutorSidebar } from "../tutorSidebar/tutorSidebar"
import { TutorViewBook } from "../tutorViewBook/tutorViewBook"
import { TutorProfile } from "../tutorProfile/tutorProfile"
import { TutorActiveRental } from "../tutorActiveRental/tutorActiveRental"

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
         { selectePage === "dashBoard" && <TutorViewBook/>} 

        {selectePage === "profile" &&  <TutorProfile/>}
        {selectePage=="activeRental"&&<TutorActiveRental/>}
        </div>
    )
}