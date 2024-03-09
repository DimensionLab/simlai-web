import { redirect } from "next/navigation";

export default async function BlogPage() {
  return redirect("/blog/1");
}