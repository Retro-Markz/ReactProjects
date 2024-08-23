export default function Subtitle({ text }) {
  return (
    <h2 className="subtitle text-center font-semibold text-2xl mb-4">
      {!text ? "SubTitle" : text}
    </h2>
  );
}
