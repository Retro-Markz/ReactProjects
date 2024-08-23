import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const ESignatureApp = () => {
  return (
    <div className="container text-center">
      <Title text={"Name"} />
      <Subtitle text={"Date"} />
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        pariatur suscipit dignissimos hic facere magnam, perspiciatis accusamus
        aspernatur similique facilis est excepturi harum itaque qui, ipsam
        commodi. Porro, maiores pariatur?
      </p>
      <input type="date" value={""} />
      <input type="text" value={""} />
    </div>
  );
};

export default ESignatureApp;
