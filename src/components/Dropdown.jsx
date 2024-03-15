import React from "react";
import { useState, useEffect } from "react";
import { getAllTopics } from "../utils/api";

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
  }, [topics]);

  return (
    <select
      onChange={(event) => {
        handleChange("topic", event.target.value);
      }}
    >
      <option disabled>Select</option>
      {topics.map((topic) => {
        return (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}
export default Dropdown;
