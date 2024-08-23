import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { useState } from "react";

const ESignatureApp = () => {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="container  bg-slate-200  h-screen min-w-full">
      <Title text={name} />
      <Subtitle text={!date ? "DoB" : date} />
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        pariatur suscipit dignissimos hic facere magnam, perspiciatis accusamus
        aspernatur similique facilis est excepturi harum itaque qui, ipsam
        commodi. Porro, maiores pariatur?
      </p>
      <div className="inputs text-center  mt-80">
        <input
          type="date"
          className="p-2 m-8 rounded-lg outline-none"
          value={date}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          className="p-2 rounded-lg outline-none"
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};

export default ESignatureApp;
