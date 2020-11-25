import React, { useState } from "react";
import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

const initialForm = {
  search: "",
};

export default function Search() {
  const [form, setForm] = useState(initialForm);
  const [api, setApi] = useState({});

  const fetchApi = (search) => {
    return axios
      .get(`${BASE_URL}/current.json?key=${API_KEY}&q=${search}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi(form.search)
      .then((res) => {
        console.log("Fetch Successful ==>> ", res);
        setApi(res.data);
      })
      .catch((err) => {
        console.log("Fetch Failed ==>> ", err);
      });
    setForm(initialForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={form.search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      {api.hasOwnProperty("location") && <div>{JSON.stringify(api)}</div>}
    </div>
  );
}
