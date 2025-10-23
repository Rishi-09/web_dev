import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <h1>Comment</h1>
      <form action="">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <textarea
          name="comment"
          id="comment"
          placeholder="comment"
          value={formData.comment}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">rating</label>
        <input
          type="number"
          onChange={handleInputChange}
          name="rating"
          placeholder="rating"
          value={formData.rating}
          min={1}
          max={5}
        />
        <br />
        <br />
        <button>add</button>
      </form>
    </>
  );
}
