import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products, CATEGORIES, PRODUCTS_PER_PAGE } from "../data/products";

const Products = () => {
 const [selectedCategory, setSelectedCategory] = useState("All");
 const [currentPage, setCurrentPage] = useState(1);
 const [sortBy, setSortBy] = useState("default");
 const [searchQuery, setSearchQuery] = useState("");

 const filtered = useMemo(() => {
  let list = [...products];
  if (selectedCategory !== "All") {
   list = list.filter((p) => p.category === selectedCategory);
  }
  if (searchQuery.trim()) {
   const q = searchQuery.toLowerCase();
   list = list.filter(
    (p) =>
     p.name.toLowerCase().includes(q) ||
     p.category.toLowerCase().includes(q) ||
     p.description.toLowerCase().includes(q),
   );
  }
  if (sortBy === "az") list.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "za") list.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "featured")
   list.sort((a, b) => (b.featured ? 1 : -1) - (a.featured ? 1 : -1));
  return list;
 }, [selectedCategory, sortBy, searchQuery]);

 const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
 const paginated = filtered.slice(
  (currentPage - 1) * PRODUCTS_PER_PAGE,
  currentPage * PRODUCTS_PER_PAGE,
 );

 const handleCategoryChange = (cat: string) => {
  setSelectedCategory(cat);
  setCurrentPage(1);
 };

 const handleSearch = (q: string) => {
  setSearchQuery(q);
  setCurrentPage(1);
 };

 return (
  <main className="w-full bg-white min-h-screen">
   {/* Full-bleed Hero Banner */}
   <section className="w-full bg-[#111] pt-28 pb-16 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto flex flex-col gap-4">
     <span className="text-gray-400 text-xs font-medium uppercase tracking-[0.25em]">
      Levantia Advertising — Catalogue
     </span>
     <h1 className="text-white text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-black uppercase leading-[0.95] tracking-tight">
      Products
     </h1>
     <p className="text-gray-400 text-sm md:text-base font-light mt-2 max-w-lg">
      Explore our full range of 3M films, signage, stationery, branding
      solutions, and gifting products.
     </p>
    </div>
   </section>

   {/* Filter & Sort Bar */}
   <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
     {/* Category Pills */}
     <nav className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
       <button
        key={cat}
        onClick={() => handleCategoryChange(cat)}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
         selectedCategory === cat
          ? "bg-[#111] text-white border-[#111]"
          : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900"
        }`}>
        {cat}
       </button>
      ))}
     </nav>

     <div className="flex gap-3 items-center ml-auto">
      {/* Search */}
      <div className="relative">
       <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-gray-900 transition-colors w-44 md:w-56 bg-gray-50"
       />
       <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
       </svg>
      </div>

      {/* Sort */}
      <select
       value={sortBy}
       onChange={(e) => setSortBy(e.target.value)}
       className="px-3 py-2 rounded-full border border-gray-200 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-gray-900 transition-colors cursor-pointer">
       <option value="default">Sort: Default</option>
       <option value="featured">Sort: Featured</option>
       <option value="az">Sort: A → Z</option>
       <option value="za">Sort: Z → A</option>
      </select>
     </div>
    </div>
   </section>

   {/* Products Grid */}
   <section className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-16">
    <div className="flex items-center justify-between mb-8">
     <p className="text-gray-500 text-sm">
      Showing{" "}
      <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
      products
      {selectedCategory !== "All" && (
       <>
        {" "}
        in{" "}
        <span className="font-semibold text-gray-900">{selectedCategory}</span>
       </>
      )}
     </p>
    </div>

    {paginated.length === 0 ? (
     <div className="flex flex-col items-center justify-center py-32 text-center">
      <span className="text-5xl mb-4">🔍</span>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
       No products found
      </h3>
      <p className="text-gray-500 text-sm">
       Try adjusting your search or filter.
      </p>
      <button
       onClick={() => {
        setSearchQuery("");
        setSelectedCategory("All");
       }}
       className="mt-6 px-6 py-2 rounded-full border border-gray-800 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
       Clear Filters
      </button>
     </div>
    ) : (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
      {paginated.map((product) => (
       <div
        key={product.id}
        className="group flex flex-col border-b border-r border-gray-100 hover:bg-[#111] transition-colors duration-300 cursor-pointer">
        <Link to={`/products/${product.id}`} className="flex flex-col h-full">
         {/* Image */}
         <div className="w-full rounded-[1.75rem] overflow-hidden bg-gray-100 aspect-4/3">
          <img
           src={product.image}
           alt={product.name}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Category chip */}
          <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm">
           {product.category}
          </span>
         </div>

         {/* Info */}
         <div className="flex flex-col gap-2 p-6 flex-1">
          <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-400 uppercase tracking-widest">
           {product.tag}
          </span>
          <h2 className="text-gray-900 group-hover:text-white text-lg font-bold leading-snug transition-colors">
           {product.name}
          </h2>
          <p className="text-gray-500 group-hover:text-gray-300 text-sm font-light leading-relaxed line-clamp-2 transition-colors">
           {product.description}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
           <span className="text-xs font-medium uppercase tracking-wider text-gray-400 group-hover:text-gray-400">
            View Details
           </span>
           <span className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-white flex items-center justify-center text-gray-400 group-hover:text-white transition-all group-hover:bg-white/10">
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
           </span>
          </div>
         </div>
        </Link>
       </div>
      ))}
     </div>
    )}

    {/* Pagination */}
    {totalPages > 1 && (
     <div className="mt-16 flex items-center justify-center gap-2">
      <button
       onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
       disabled={currentPage === 1}
       className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
       <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
       </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
       <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`w-10 h-10 rounded-full text-sm font-semibold border transition-all ${
         page === currentPage
          ? "bg-[#111] text-white border-[#111]"
          : "border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900"
        }`}>
        {page}
       </button>
      ))}

      <button
       onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
       disabled={currentPage === totalPages}
       className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
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
      </button>
     </div>
    )}
   </section>
  </main>
 );
};

export default Products;
