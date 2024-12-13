/* eslint-disable react/prop-types */
export const RevenueCard = ({ estimate, text }) => {
  return (
    <div className="bg-gradient-to-tr rounded-lg cursor-pointer max-w-full text-neutral-50 from-indigo-300 to-indigo-400">
      <div className="text-center flex justify-center flex-col items-center h-4/5 ">
        <h1 className=" text-6xl">{estimate}</h1>
        <p className="text-2xl">{text}</p>
      </div>
    </div>
  );
};
