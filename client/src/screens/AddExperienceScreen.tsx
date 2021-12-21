import React, { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import Header from "../components/Header";
import styled from "styled-components";
import { mixins } from "../styles/mixins";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const Form = styled.form`
  display: block;
  text-align: justify;
  margin: 15px;
  transition: 0.7s ease-in-out;
`;

const Label = styled.label`
  ${mixins.flexStart}
`;

export default function AddExperienceScreen() {
  const [tags, setTags] = useState(["Great wall of china"]);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  console.log(tags);

  const uploadImages = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "breellz");
    fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target;
  };
  return (
    <React.Fragment>
      <Header />
      <div className="group">
        <h4 className="text-center text-xl tracking-widest flex justify-center bg-black text-white p-3 mt-0 w-3/4 rounded-lg">
          Add Your Experience &nbsp; <BsPlusSquareDotted />
        </h4>
      </div>
      <Form onSubmit={submitHandler}>
        <div className="group">
          <input
            type="text"
            className="control border-bottom"
            placeholder={`Add location. Format should be "Barcelona, Spain"`}
          />
        </div>
        <div className="group justify-start">
          <select className="control flex p-3 rounded w-full">
            <option value="0">Rate your Experience</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="group">
          <input
            type="text"
            className="control border-bottom"
            placeholder={`Cost of travel e.g $4500"`}
          />
        </div>
        <div className="group">
          <textarea
            className="control"
            placeholder="Talk about the experience you had in this location"
          ></textarea>
        </div>

        <div className="group">
          <div className="control border-bottom">
            <ReactTagInput
              placeholder={`Enter an Heritage then press enter you can add up to five`}
              maxTags={5}
              editable={true}
              readOnly={false}
              removeOnBackspace={true}
              tags={tags}
              onChange={(newTags) => setTags(newTags)}
            />
          </div>
        </div>
      </Form>
    </React.Fragment>
  );
}
