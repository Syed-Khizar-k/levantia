import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import CtaSection from "../components/CtaSection";

const ProductDetail = () => {
 const { id } = useParams<{ id: string }>();
 const navigate = useNavigate();
 const product = products.find((p) => p.id === id);

 if (!product) {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center bg-white">
    <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase">
     Not Found
    </h1>
    <p className="text-gray-500 mb-8">This product doesn't exist yet.</p>
    <Link
     to="/products"
     className="px-8 py-3 bg-[#111] text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
     Back to Products
    </Link>
   </main>
  );
 }

 const related = products
  .filter((p) => p.category === product.category && p.id !== product.id)
  .slice(0, 3);

 return (
  <main className="w-full bg-white">
   {/* Top Nav Bar */}
   <div className="bg-white border-b border-gray-100 pt-20">
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 py-4 flex items-center gap-2 text-sm text-gray-500">
     <button
      onClick={() => navigate(-1)}
      className="hover:text-gray-900 transition-colors flex items-center gap-1">
      <svg
       width="14"
       height="14"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round">
       <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
     </button>
     <span className="text-gray-300">/</span>
     <Link to="/products" className="hover:text-gray-900 transition-colors">
      Products
     </Link>
     <span className="text-gray-300">/</span>
     <span className="text-gray-900 font-medium truncate max-w-xs">
      {product.name}
     </span>
    </div>
   </div>

   {/* Main Product Section */}
   <section className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-20">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
     {/* Left: Image */}
     <div className="w-full lg:w-[55%]">
      <div className="w-full rounded-[1.75rem] overflow-hidden bg-gray-100 aspect-4/3">
       <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
       />
      </div>
     </div>

     {/* Right: Info */}
     <div className="w-full lg:w-[45%] flex flex-col">
      <div className="flex items-center gap-3 mb-4">
       <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wider">
        {product.category}
       </span>
       {product.featured && (
        <span className="px-3 py-1 bg-[#111] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
         Featured
        </span>
       )}
      </div>

      <h1 className="text-[#111] text-[2.25rem] md:text-[3rem] font-black uppercase leading-[1.05] tracking-tight mb-4">
       {product.name}
      </h1>

      <div className="w-12 h-1 bg-gray-900 mb-6"></div>

      <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-8">
       {product.longDescription}
      </p>

      {/* Specifications */}
      <div className="border-t border-gray-100">
       <h2 className="text-[#111] font-bold text-base uppercase tracking-wider py-4 mb-2">
        Specifications
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        {product.specs.map((spec) => (
         <div
          key={spec.label}
          className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-400 text-sm font-medium">
           {spec.label}
          </span>
          <span className="text-gray-900 text-sm font-semibold">
           {spec.value}
          </span>
         </div>
        ))}
       </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
       <Link
        to="/contact"
        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#111] text-white rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">
        Enquire Now
        <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2.5"
         strokeLinecap="round"
         strokeLinejoin="round">
         <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
       </Link>
       <Link
        to="/products"
        className="flex-1 flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors">
        Browse More
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Related Products */}
   {related.length > 0 && (
    <section className="border-t border-gray-100 py-16 md:py-24">
     <div className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20">
      <div className="flex items-end justify-between mb-10">
       <h2 className="text-[#111] text-2xl md:text-3xl font-black uppercase tracking-tight">
        Related Products
       </h2>
       <Link
        to="/products"
        className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
        View All
        <svg
         width="14"
         height="14"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2.5"
         strokeLinecap="round"
         strokeLinejoin="round">
         <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
       </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {related.map((p) => (
        <Link
         key={p.id}
         to={`/products/${p.id}`}
         className="group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-900 transition-all duration-300">
         <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
           src={p.image}
           alt={p.name}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
         </div>
         <div className="p-5 flex flex-col gap-1">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
           {p.tag}
          </span>
          <h3 className="text-gray-900 font-bold text-base leading-tight group-hover:underline">
           {p.name}
          </h3>
         </div>
        </Link>
       ))}
      </div>
     </div>
    </section>
   )}

   <CtaSection />
  </main>
 );
};

export default ProductDetail;
