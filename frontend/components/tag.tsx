const colours = [
  "bg-blue-100 text-blue-800",
  "bg-gray-100 text-gray-800",
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-indigo-100 text-indigo-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
];

const Tag = ({
  text,
  size = "text-xs",
  isRandomColour = false,
  givenColour = "bg-gray-100 text-gray-800",
}) => {
  const colour = Math.floor(Math.random() * colours.length);
  return (
    <span
      className={`${
        isRandomColour ? colours[colour] : givenColour
      } ${size} font-semibold mr-2 px-2.5 py-0.5 rounded`}
    >
      {text}
    </span>
  );
};

export default Tag;
