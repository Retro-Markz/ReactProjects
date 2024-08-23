import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useState } from "react";
import { FaSmile, FaRegHeart, FaHeart, FaRegComments } from "react-icons/fa";
import TommyCat from "../assets/cat.jpg";

const LikeMyPhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="text-center ">
      <Title text={"Like My Photo"} />
      <Subtitle text={`Likes ${count}`} />
      <div className="card card-dark bg-slate-900 mx-auto w-80 h-auto shadow-lg cursor-pointer rounded-xl ">
        <div className="header text-xl ">
          <div className="container flex justify-center">
            <FaSmile className="text-white   my-6  " />
            <small className="text-white text-2xl p-4">TommyCat</small>
          </div>
          <div>
            <img
              src={TommyCat}
              alt="img"
              className="h-fit"
              onDoubleClick={toggleLike}
            />
            <footer className="card-footer text-xl flex justify-between">
              <FaRegComments className="text-white m-4 " />{" "}
              {like ? (
                <FaHeart className="text-red-600 m-4" onClick={toggleLike} />
              ) : (
                <FaRegHeart className="text-white m-4" onClick={toggleLike} />
              )}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMyPhoto;
