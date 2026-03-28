"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set("echo_admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    });
    redirect("/admin/clientes");
  } else {
    // Return error, in a real app we'd use useFormState, but here we can just throw or redirect back with an error params
    redirect("/admin/login?error=1");
  }
}

export async function logoutAdmin() {
  cookies().delete("echo_admin_auth");
  redirect("/admin/login");
}
