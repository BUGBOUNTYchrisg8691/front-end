import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

const initialForm = {
  search: "",
};

export default function Search() {
  const [form, setForm] = useState(initialForm);
  const [api, setApi] = useState({});
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(getIcon());
  }, [api]);

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

  const getIcon = () => {
    if (!api.hasOwnProperty("current")) return;
    const icon = api.current.condition.icon;
    const arr = icon.split("");
    return "https:" + arr.join("");
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
      {api.hasOwnProperty("current") && <img src={icon} alt="condition icon" />}
    </div>
  );
}
