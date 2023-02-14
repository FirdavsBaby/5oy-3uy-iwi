import React, { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
const Section = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)
    
  async function getData() {
    setLoading(true);
    let {data}  = await axios.get(
      "https://api.itbook.store/1.0/search/mongodb/")
    setLoading(false);
    setBooks(data.books)
  }
  useEffect(()=> {
    getData()
  }, [])
  return loading ? (
    <div className="d-flex w-100 min-vh-100 justify-content-center align-items-center">
      <h1>Loading Page..! Please Wait!</h1>
    </div>
  ) : (
    <section className="d-flex gap-5 p-5 flex-wrap justify-content-center">
      {books.map((b) => (
        <Card book={b} key={b.isbn13} />
      ))}
    </section>
  );
};

export default Section;
