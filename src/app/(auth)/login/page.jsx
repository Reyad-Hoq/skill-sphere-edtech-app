'use client';
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";

import React, { useState } from 'react';
import { Button, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });
    if (error) {
      toast.error(error.message, {
        autoClose: 1500,
      });
    } else {
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center mx-auto w-10/12">
      <Form className="flex w-full md:w-96 flex-col gap-4 bg-base-100 py-10 px-6 rounded-lg shadow-2xl justify-center" onSubmit={onSubmit}>
        <h2 className="text-2xl text-orange-500">Please Login</h2>

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
        <TextField className="w-full" name="password" isRequired placeholder="Enter your password" validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters long";
          }
          return null;
        }}>
          <Label>Password</Label>
          <InputGroup className="bg-base-300">
            <InputGroup.Input
              className="w-full"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="tertiary"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        <div className="variant-primary flex w-full items-center justify-between">
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-400">
            Login
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-orange-600 hover:underline">
            Register
          </Link>
        </p>
        <p className="divider">
          or
        </p>
        <button className="btn btn-war w-full flex items-center justify-center gap-2" onClick={handleGoogleSignIn}>
          <GrGoogle className="size-4 mr-2" />
          Sign in with Google
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;