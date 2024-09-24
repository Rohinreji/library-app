import book from "../../../Assests/mysteryBooks.jpg";
import { FaRupeeSign } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./studentViewProduct.css";
export const StudentViewProduct = () => {
  const [fixedData, setFixedData] = useState([]);
  const [data, setData] = useState([]);
  const product = [
    {
      id: 1,
      name: "black pierce1",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 2,
      name: "black pierce2",  
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 3,
      name: "black pierce3",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 4,
      name: "black pierce4",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 4,
      name: "black pierce4",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 4,
      name: "black pierce4",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
    {
      id: 4,
      name: "black pierce4",
      description:
        "Dummy Content is a Joomla system plugin  that helps you automatically place random dummy text into your Articles",
      price: 200,
    },
  ];
  useEffect(() => {
    setData(product);
    setFixedData(product);
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return item?.name.toLowerCase().includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };

  return (
    <div>
      <div className="student-view-product">
        <h2 className="px-5 pt-4">view products</h2>

        <InputGroup className="mb-3 student-serach-box">
          <Form.Control
            placeholder="Search"
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={handleSearch}
          />
          <InputGroup.Text id="basic-addon1">
            <IoSearch />
          </InputGroup.Text>
        </InputGroup>

        {data.length === 0 ? (
          <h2 className="text-center">no data found </h2>
        ) : (
          <div className="d-flex flex-wrap gap-4 justify-content-between px-5 py-5 student-view-product-body">
            {data.map((e, index) => {
              return (
                <div className="student-product-view-box shadow" key={e.id}>
                  <div className="">
                   
                  <img src={book} alt="" className="student-product-view-box-img"/>
                  {/* <div className="student-product-view-box-heart">

</div> */}
                  </div>
                  <h5 className="py-1">{e.name}</h5>
                  <p>
                    {e?.description?.length > 15
                      ? e.description?.substring(0, 28) + "..."
                      : e.description}{" "}
                  </p>
                  <h5 className="mb-5">
                    <FaRupeeSign />
                    {e.price}
                  </h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
