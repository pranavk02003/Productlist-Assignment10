  


import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <p className="text-center col-span-full text-lg text-red-500">
          No products found
        </p>
      )}
    </div>
  );
};

export default ProductList;