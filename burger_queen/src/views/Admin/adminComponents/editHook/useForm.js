import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    e.persist();

    let name = e.target.name;
    let val = e.target.value;

    //validate
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};
export default useForm;
