import { useEffect } from "react";
import { TopBar } from "@/components/layout/topbar/index";
import rocknet from "../utils/api";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await rocknet.get("/users/trjustinienpaso");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <TopBar />
      testing
    </>
  );
}
