import mystryBooks from "../../../../Assests/mysteryBooks.jpg";
import poetryBooks from "../../../../Assests/poetry.jpg";
import departmentBooks from "../../../../Assests/departmentBooks.webp";
import fantacyBooks from "../../../../Assests/fantacyBooks1.jpg";
import thrillerBooks from "../../../../Assests/thrllerBooks.webp";
import westernBooks from "../../../../Assests/westernBooks.jpg";
export const StudentBookCategory = () => {
  return (
    <div>
      <div>
        <div className="container">
          <h3 className="mt-5 ">Categories</h3>
          <div className="d-flex flex-wrap gap-4 mx-4">
            <div>
              <div className="  student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={poetryBooks}
                  alt="img"
                ></img>
                <div >
                  <h4>poetry</h4>
                </div>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Poetry</h5>
              </div>
            </div>

            <div>
              <div className="student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={mystryBooks}
                  alt="img"
                ></img>
                <h4>Mystery</h4>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Mystery</h5>
              </div>
            </div>

            <div>
              <div className="  student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={departmentBooks}
                  alt="img"
                ></img>
                <h4>Text Book</h4>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Text Books</h5>
              </div>
            </div>

            <div>
              <div className="student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={fantacyBooks}
                  alt="img"
                ></img>
                <h4>Fantacy</h4>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Fantacy</h5>
              </div>
            </div>

            <div>
              <div className=" student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={thrillerBooks}
                  alt="img"
                ></img>
                <h4>Thriller</h4>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Thriller</h5>
              </div>
            </div>

            <div>
              <div className="student-category-dispay-box">
                <img
                  className="home-category-image mt-3"
                  src={westernBooks}
                  alt="img"
                ></img>
                <h4>Western</h4>
              </div>
              <div className="studentBook-cat-heading">
                <h5>Western</h5>
              </div>
            </div>
            <div className="student-category"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
