import Image from "next/image";
import { redirect } from "next/navigation";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/Home/Banner";

export default function Home() {
  return (
    redirect("/home")
  );
}
