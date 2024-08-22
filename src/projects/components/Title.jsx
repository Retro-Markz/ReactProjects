export default function Title({ text }) {
  return (
    <h1 className="title text-center font-extrabold text-6xl py-20">
      {!text ? "Title" : text}
    </h1>
  );
}
