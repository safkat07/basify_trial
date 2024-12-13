/* eslint-disable react/prop-types */
const ProductCard = ({ title, children }) => {
  return (
    <div className=" bg-gradient-to-t from-blue-500 to-pink-300 rounded-lg shadow-lg max-w-full">
      <p className="text-4xl font-medium text-white  pb-2 text-center pt-2">
        {title}
      </p>
      <div className="mt-5 mb-2.5">{children}</div>
    </div>
  );
};

export default ProductCard;
