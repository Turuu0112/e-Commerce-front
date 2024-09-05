import Image from "next/image";
import { Carousel } from "../components/components/Carousel";
import { Navbar } from "../components/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Carousel />
    </div>
  );
}
