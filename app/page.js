import Image from "next/image";
import terre from "./../components/images/terre.png";

export default function Home() {
  return (
    <div className="text-white justify-center items-center flex">
      <section className="flex flex-col h-screen pr-5">
        <div className="p-10">
          <h1 className="text-6xl font-semibold">
            <span className="text-yellow-400">Get</span>By
          </h1>
        </div>
        <div className="text-3xl pl-10 space-y-2">
          <h2>Team Up.</h2>
          <h2>Planify.</h2>
          <h2>Get By.</h2>
        </div>
        <div className="pl-10 w-96 py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div className="pl-10">
          <button className="flex rounded w-80 h-8 bg-white text-center items-center">
            <div className="bg-yellow-400 text-black w-16 h-8 rounded text-bold font-bold text-2xl">
              &gt;
            </div>
            <div className="text-black flex text-center items-center p-2 font-semibold">
              Get Started
            </div>
          </button>
        </div>
      </section>
      <section className="">
        <Image className="border-white border-8" src={terre} width={850} />
      </section>
    </div>
  );
}
