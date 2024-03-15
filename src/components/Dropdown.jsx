import React from "react";
import { useState, useEffect } from "react";
import { getAllTopics } from "../utils/api";
import { Link } from "react-router-dom";

function Dropdown({ searchParams, setSearchParams }) {
  const [topics, setTopics] = useState([]);

  const handleChange = (key, input) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, input);
    setSearchParams(newParams);
  };

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, [setTopics]);

  return (
    <select
      onChange={(event) => {
        handleChange("topic", event.target.value);
      }}
    >
      <option disabled>Select</option>
      {topics.map((topic, index) => {
        return (
          <option key={index} value={topic.slug}>
            {topic.slug.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}
export default Dropdown;
