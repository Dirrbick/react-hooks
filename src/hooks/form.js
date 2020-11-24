import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback && callback(values);
  }

  return [handleSubmit, handleChange, values];

}

export default useForm;