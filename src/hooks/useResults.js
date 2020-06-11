import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Muskegon, Michigan",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  };

  // searchApi("pasta");
  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};
