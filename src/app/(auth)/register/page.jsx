'use client'
import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField, Select, ListBox } from '@heroui/react'


const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      image: userData.profilePhoto, // optional
      role: userData.role, // optional, can be used to set custom user roles
      password: userData.password, // required
    });
    console.log(data, error);
    if (error) {
      toast.error(error.message, {
        autoClose: 2500,
      });
    } else {
      toast.success("Registration successful! Please check your email to verify your account.", {
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center mx-auto w-11/12 rounded-4xl">

      <Form className="flex w-full md:w-96 flex-col gap-4 bg-base-100 py-10 px-6 rounded-lg shadow-2xl justify-center" onSubmit={onSubmit}>
        <h2 className="text-2xl text-orange-500">Please Register</h2>
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
          name="profilePhoto"
          type="text"
          validate={(value) => {
            if (value.length < 2) {
              return "Please enter a valid profile photo URL";
            }
            return null;
          }}
        >
          <Label>Profile photo</Label>
          <Input placeholder="https://example.com/photo.jpg" className="bg-base-300" />
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
        <Select name="role" className="w-full" placeholder="Select one" isRequired>
          <Label>Role</Label>
          <Select.Trigger className="w-full bg-base-300">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox >
              <ListBox.Item id="student" textValue="Student">
                Student
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="instructor" textValue="Instructor">
                Instructor
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="admin" textValue="Admin">
                Admin
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
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
          <Button type="submit" className="bg-orange-600 hover:bg-orange-500">
            Register
          </Button>
          <Button type="reset" className="btn border-2 border-orange-600 text-orange-600 rounded-full">
            Reset
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 hover:underline">
            Login
          </a>
        </p>
      </Form>
    </div>
  );
};

export default RegisterPage;