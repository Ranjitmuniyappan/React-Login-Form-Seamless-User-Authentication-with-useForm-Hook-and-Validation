
import "./App.css";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

function App() {

  const { register, setValue, getValues, handleSubmit, formState: { errors }, watch } = useForm();
  const  textFieldRef = useRef({})

  // const registerTextFieldRef = (name, ref) =>{
  //   textFieldRef.current[name] = ref
  // }
  
  

  console.log("My datas : ", watch());

  const onSubmit = (data) => {
    
    console.log("First Name is : ", data.firstName);
    console.log("Last Name is : ", data.lastName);
    console.log("Email is : ", data.email);
    console.log("Password is : ", data.password);

    console.log('firstName fffff : ', getValues('firstName'));

  };

  const setData = ()=>{
    
    setValue("firstName" , "")
    setValue("lastName" , "")
    setValue("email" , "")
    setValue("password" , "")
    console.log(watch());

  }
  
  return (
    <div className="App" style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
      <form onSubmit={handleSubmit(onSubmit)} style={{width:'250px', }}>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          margin="normal"
          {...register("firstName", { required: "First name is required" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}

          
        />

        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          margin="normal"
          {...register("lastName", { required: "Last name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}

          
        />


        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}

          
        />

        <TextField
          label="Password"
          name="password"
          fullWidth
          margin="normal"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}

         
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>

      <Button variant="contained" color="primary" onClick={setData}>
          Clear
        </Button>
    </div>
  );
}

export default App;
