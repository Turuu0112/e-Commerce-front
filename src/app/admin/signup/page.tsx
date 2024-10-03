import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Image src="/Logo.png" alt="Logo" width={30} height={30} />
        <p>pinecone</p>
      </div>
    </div>
  );
}
