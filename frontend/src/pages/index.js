import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "components/Login/Login";

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
