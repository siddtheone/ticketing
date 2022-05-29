import Router from "next/router";
import { useState } from "react";
import { useRequest } from "../../hooks/use-request";

export function NewTicket() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  const onBlur = () => {
    const value = parseFloat(price);
    if (isNaN(onBlur)) {
      return;
    }
    setPrice(value.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <div>
      <h1>Create a ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            value={price}
            min={0}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </div>
        {errors}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default NewTicket;
