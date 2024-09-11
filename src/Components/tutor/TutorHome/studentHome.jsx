import Footer from "../../../Components/common/footer/footer"
import { StudentBookCategory } from "./studentBookCat/studentBookCat"
import StudentHomeDetails from "./studentHomeDetail/studentHomeDetail"
import { TutorNav } from "./studentNav/tutorNav"

export const TutorHome = () =>
{
    return(
        <div>
            <TutorNav/>
            <StudentHomeDetails/>
            <StudentBookCategory/>
            <Footer/>
        </div>
    )
}