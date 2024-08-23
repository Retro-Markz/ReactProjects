import Title from "../components/Title";

const RandomizeColors = () => {
  const handleSecClick = (e) => {
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "01234567989ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="m-auto text-center">
      <Title text={"Randomize Colors"} />
      <button
        className="px-8 py-2 m-4 bg-red-600 rounded-xl text-white text-xl shadow-lg  transition hover:bg-red-400"
        onClick={handleSecClick}
      >
        Click Me
      </button>
      <button
        className="px-8 py-2 m-4 bg-green-600 rounded-xl text-white text-xl shadow-lg  transition hover:bg-green-400"
        onClick={handleSecClick}
      >
        Click Me
      </button>
      <button
        className="px-8 py-2 m-4 bg-blue-600 rounded-xl text-white text-xl shadow-lg  transition hover:bg-blue-400"
        onClick={handleSecClick}
      >
        Click Me
      </button>
      <button
        className="px-8 py-2 m-4 bg-yellow-600 rounded-xl text-white text-xl shadow-lg  transition hover:bg-yellow-400"
        onClick={handleSecClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default RandomizeColors;
