import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { creat } from "../../apis/item";
import List from "../list/List";

function Formitem() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, description } = data;
    creat(name, description)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };
  return (
    <div>
      {success && (
        <div class="alert alert-success" role="alert">
          success
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            {...register("name", { required: true })}
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This field is required</span>}
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="home">go to home page</Link>
    </div>
  );
}

export default Formitem;
