import React, { useEffect, useState } from "react";

import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const [formList, setFormList] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormList([...formList, formData]);
    console.log("The form List!!!", formList);
  };

  enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
  }

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data.products);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="gap-2">
        {data.map((item: any) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
