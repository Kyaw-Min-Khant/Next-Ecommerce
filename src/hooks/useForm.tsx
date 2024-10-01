import { useState } from "react";

interface Errors {
  username?: string;
  password?: string;
  [key: string]: string | undefined; 
}

// Define the type for the form values
interface Values {
  username?: string;
  password?: string;
  [key: string]: string | undefined;
}

interface UseFormReturn {
  values: Values;
  errors: Errors;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useForm = (callback: () => void): UseFormReturn => {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});

  // Input validation logic
  const validateInput = (name: string, value: string) => {
    switch (name) {
      case 'username':
        if (value.length <= 4) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: "Username must be at least 4 characters",
          }));
        } else {
          setErrors((prevErrors) => {
            const { username, ...rest } = prevErrors;
            return rest;
          });
        }
        break;

      case 'password':
        if (value.length <= 4) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Password must be at least 4 characters",
          }));
        } else {
          setErrors((prevErrors) => {
            const { password, ...rest } = prevErrors;
            return rest;
          });
        }
        break;

      default:
        break;
    }
  };

  // Handle input change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    validateInput(name, value);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };
  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
