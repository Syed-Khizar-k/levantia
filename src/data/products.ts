export interface Product {
 id: string;
 name: string;
 category: string;
 tag: string;
 description: string;
 longDescription: string;
 specs: { label: string; value: string }[];
 image: string;
 featured?: boolean;
}

export const CATEGORIES = [
 "All",
 "3M Film",
 "Signage",
 "Stationery",
 "Branding",
 "Gifting",
];

export const products: Product[] = [
 {
  id: "dinoc-wood-grain",
  name: "DI-NOC Wood Grain Film",
  category: "3M Film",
  tag: "Best Seller",
  description:
   "Premium architectural wood grain film for interior surface applications.",
  longDescription:
   "The 3M DI-NOC Architectural Film in Wood Grain is a versatile interior design solution that transforms ordinary surfaces into rich, sophisticated wood textures. Backed by 3M's proprietary adhesive technology, it delivers exceptional durability and a premium finish that closely mimics real wood grain. Ideal for reception counters, wall panels, furniture, and elevator interiors.",
  specs: [
   { label: "Material", value: "Multi-layer vinyl" },
   { label: "Thickness", value: "0.1 mm" },
   { label: "Width", value: "1220 mm" },
   { label: "Application", value: "Interior surfaces" },
   { label: "Durability", value: "7 years interior" },
   { label: "Finish", value: "Matte / Satin" },
  ],
  image:
   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
  featured: true,
 },
 {
  id: "fasara-glass-film",
  name: "FASARA Glass Film",
  category: "3M Film",
  tag: "New Arrival",
  description:
   "Elegant frosted and decorative glass films for privacy and aesthetics.",
  longDescription:
   "3M FASARA Glass Finishes offer a stylish and practical solution for enhancing glass surfaces. Whether you need privacy glass, decorative patterns, or UV protection, FASARA films are engineered for long-lasting clarity and easy installation. Perfect for office partitions, showroom displays, and residential windows.",
  specs: [
   { label: "Material", value: "Polyester film" },
   { label: "Thickness", value: "0.05 mm" },
   { label: "Width", value: "1270 mm" },
   { label: "Application", value: "Glass surfaces" },
   { label: "Light Transmission", value: "25–70%" },
   { label: "Finish", value: "Frosted / Etched" },
  ],
  image:
   "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
  featured: true,
 },
 {
  id: "vehicle-wrap-gloss",
  name: "Vehicle Wrap — Gloss Series",
  category: "3M Film",
  tag: "Premium",
  description: "High-gloss vehicle wrapping film with vibrant, lasting color.",
  longDescription:
   "Engineered for professional vehicle wrapping, this 3M high-gloss film delivers stunning color vibrancy and superior conformability over complex curves and body panels. UV-resistant and self-healing, it protects the original paintwork while transforming the vehicle's appearance for years.",
  specs: [
   { label: "Material", value: "Cast vinyl" },
   { label: "Thickness", value: "0.08 mm" },
   { label: "Width", value: "1524 mm" },
   { label: "Application", value: "Vehicle exteriors" },
   { label: "Durability", value: "7–10 years outdoor" },
   { label: "Finish", value: "Gloss" },
  ],
  image:
   "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "acrylic-signage",
  name: "Acrylic LED Signage",
  category: "Signage",
  tag: "Popular",
  description:
   "Custom backlit acrylic signage for brand reception and retail display.",
  longDescription:
   "Our acrylic LED signage solutions provide a modern, luminous branding presence for reception areas, retail environments, and exhibitions. Available in custom shapes, sizes, and color temperatures, they're engineered for longevity and impact.",
  specs: [
   { label: "Material", value: "3mm Cast Acrylic" },
   { label: "Lighting", value: "LED Edge-lit" },
   { label: "Max Size", value: "3m x 1.5m" },
   { label: "Installation", value: "Wall-mounted / Standoff" },
   { label: "Power", value: "AC 220V" },
   { label: "Lifespan", value: "50,000 hrs" },
  ],
  image:
   "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=800",
  featured: true,
 },
 {
  id: "outdoor-flex-banner",
  name: "Outdoor Flex Banner",
  category: "Signage",
  tag: "High Volume",
  description:
   "UV-resistant outdoor banners for hoardings, events, and wayfinding.",
  longDescription:
   "Produced on heavy-duty 440 GSM flex material with UV-resistant inks, our outdoor flex banners are built to endure the harsh UAE climate. Available in custom sizes with hemming and eyelets for easy installation across hoardings, scaffolding, and event structures.",
  specs: [
   { label: "Material", value: "440 GSM PVC Flex" },
   { label: "Print", value: "UV + Solvent Ink" },
   { label: "Resolution", value: "Up to 1440 dpi" },
   { label: "Max Width", value: "5000 mm" },
   { label: "Durability", value: "3–5 years outdoor" },
   { label: "Finish", value: "Glossy / Matte" },
  ],
  image:
   "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "business-card-premium",
  name: "Premium Business Cards",
  category: "Stationery",
  tag: "Bestseller",
  description:
   "Thick, luxurious business cards with soft-touch lamination and foil options.",
  longDescription:
   "Leave a lasting impression with our premium business cards printed on 600 GSM art board with soft-touch or gloss lamination. Optional upgrades include spot UV, gold/silver foil, embossing, and die-cut shapes for truly distinctive brand identity.",
  specs: [
   { label: "Paper Weight", value: "600 GSM" },
   { label: "Size", value: "85 x 55 mm" },
   { label: "Finishes", value: "Soft-touch / Gloss / Matte" },
   { label: "Options", value: "Spot UV, Foil" },
   { label: "Min. Quantity", value: "100 units" },
   { label: "Turnaround", value: "3–5 business days" },
  ],
  image:
   "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "letterhead-set",
  name: "Corporate Letterhead Set",
  category: "Stationery",
  tag: "Package",
  description:
   "Full company stationery package: letterhead, envelope, and invoice template.",
  longDescription:
   "Our corporate stationery package provides a cohesive and professional brand identity across all touchpoints. Includes A4 letterhead, DL envelopes, and branded invoice template. Printed on premium bond paper with consistent color management.",
  specs: [
   { label: "Paper Weight", value: "120 GSM Bond" },
   { label: "Sizes", value: "A4, DL Envelope" },
   { label: "Colours", value: "Full CMYK" },
   { label: "Finish", value: "Gloss / Matte" },
   { label: "Min. Quantity", value: "250 sets" },
   { label: "Turnaround", value: "5–7 business days" },
  ],
  image:
   "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "rollup-banner",
  name: "Retractable Roll-Up Banner",
  category: "Signage",
  tag: "Event Ready",
  description:
   "Portable retractable banner stand ideal for exhibitions and events.",
  longDescription:
   "Our premium roll-up banner stands offer a quick and hassle-free display solution for exhibitions, conferences, and retail environments. Available in standard (850mm) or wide (1200mm) widths with aluminum cassette base and carry bag.",
  specs: [
   { label: "Material", value: "165 GSM Satin" },
   { label: "Widths", value: "850mm / 1200mm" },
   { label: "Height", value: "Up to 2000mm" },
   { label: "Base", value: "Anodized Aluminum" },
   { label: "Includes", value: "Carry bag + poles" },
   { label: "Turnaround", value: "2–3 business days" },
  ],
  image:
   "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "custom-gift-box",
  name: "Branded Gift Box",
  category: "Gifting",
  tag: "Corporate",
  description:
   "Bespoke corporate gift boxes with custom printing, ribbon, and inserts.",
  longDescription:
   "Make every occasion memorable with our fully customizable corporate gift boxes. Choose from a range of sizes, materials, and finishes. Each box can be branded with your company logo via foil stamping, embossing, or digital printing. Available with tissue paper, ribbon, and custom foam inserts.",
  specs: [
   { label: "Material", value: "Rigid Board / Kraft" },
   { label: "Printing", value: "CMYK / Foil / Emboss" },
   { label: "Sizes", value: "Small to Extra Large" },
   { label: "MOQ", value: "50 units" },
   { label: "Lead Time", value: "7–10 business days" },
   { label: "Inserts", value: "Optional foam / pads" },
  ],
  image:
   "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
  featured: true,
 },
 {
  id: "brand-identity-pack",
  name: "Brand Identity Package",
  category: "Branding",
  tag: "Full Service",
  description:
   "Complete brand identity design including logo, color palette, and style guide.",
  longDescription:
   "Our comprehensive brand identity package gives your business a distinct, memorable visual identity. Includes logo design (3 concepts), typographic system, color palette, and a complete brand style guide. Ideal for startups, rebrands, or expansion into new markets.",
  specs: [
   { label: "Deliverables", value: "Logo, Style Guide, Palette" },
   { label: "Formats", value: "AI, EPS, PNG, PDF" },
   { label: "Revisions", value: "3 rounds included" },
   { label: "Timeline", value: "10–14 business days" },
   { label: "Language", value: "English / Arabic" },
   { label: "Support", value: "30-day post-delivery" },
  ],
  image:
   "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "promotional-tote",
  name: "Custom Tote Bag",
  category: "Gifting",
  tag: "Eco-Friendly",
  description:
   "High-quality custom-printed tote bags for brand promotion and events.",
  longDescription:
   "Our eco-friendly cotton tote bags are a sustainable and cost-effective solution for brand promotion, retail packaging, and event giveaways. Available in natural, black, and navy with full-color screen printing or embroidery.",
  specs: [
   { label: "Material", value: "280 GSM Cotton Canvas" },
   { label: "Printing", value: "Screen print / Embroidery" },
   { label: "Standard Size", value: "38 x 42 cm" },
   { label: "Colours", value: "Natural, Black, Navy" },
   { label: "MOQ", value: "100 units" },
   { label: "Turnaround", value: "7 business days" },
  ],
  image:
   "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
 },
 {
  id: "floor-sticker",
  name: "Floor Sticker Graphics",
  category: "Signage",
  tag: "Wayfinding",
  description:
   "Anti-slip floor stickers for wayfinding, promotions, and safety markings.",
  longDescription:
   "Our premium floor graphic stickers are manufactured with anti-slip laminate coating, complying with R9 safety ratings. Suitable for retail stores, airports, hospitals, and events, they offer vibrant printing and easy installation on most floor types.",
  specs: [
   { label: "Material", value: "Anti-slip PVC" },
   { label: "Thickness", value: "0.5 mm" },
   { label: "Laminate", value: "Anti-slip R9 rated" },
   { label: "Application", value: "Indoor floors" },
   { label: "Durability", value: "12 months indoor" },
   { label: "Min. Size", value: "30 x 30 cm" },
  ],
  image:
   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
 },
];

export const PRODUCTS_PER_PAGE = 9;
