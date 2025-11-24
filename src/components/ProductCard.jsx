
const ProductCard = ({ product }) => {
  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p>₹{product.price}</p>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p>⭐ {product.rating}</p>

      <button
        className="mt-3 bg-black text-white px-4 py-2 rounded w-full"
        onClick={() => console.log("Added:", product.name)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;