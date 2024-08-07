import Footer from "../../../Components/common/footer/footer"
import { StudentBookCategory } from "./studentBookCat/studentBookCat"
import StudentHomeDetails from "./studentHomeDetail/studentHomeDetail"
import { StudentNav } from "./studentNav/studentNav"

export const StudentHome = () =>
{
    return(
        <div>
            <StudentNav/>
            <StudentHomeDetails/>
            <StudentBookCategory/>
            <Footer/>
        </div>
    )
}