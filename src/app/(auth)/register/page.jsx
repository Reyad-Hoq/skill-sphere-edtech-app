'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react'


const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: "/courses" // optional, defaults to "/"
    });
    console.log(data, error);
    if (error) {
      alert(error.message);
    } else {
      alert("Registration successful! Please check your email to verify your account.");
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-base-200">

      <Form className="flex w-96 flex-col gap-4 bg-base-100 py-10 px-6 rounded-lg shadow-2xl justify-center" onSubmit={onSubmit}>
        <h2 className="text-2xl text-blue-500">Please Register</h2>
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (value.length < 2) {
              return "Name must be at least 2 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" className="bg-base-300" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className="bg-base-300" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className="bg-base-300" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" variant='tertiary' >
            <Check />
            Register
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;