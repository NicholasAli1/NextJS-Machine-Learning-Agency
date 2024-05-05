"use client";

import styles from "./loginForm.module.css";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState({ login, undefined });
  const router = useRouter();
  //   useEffect(() => {
  //     state?.success && router.push("/");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={login}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't Have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
