
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import {
  ArrowUpRight,
  ChevronLeft,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
  CalendarDays,
  Phone,
  Mail,
  Clock3,
  ShieldCheck,
  Eye,
  Play,
} from "lucide-react";

import "./styles.css";

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=92`;

const products = [
  {
    id: "n01",
    name: "Aurelia 01",
    ar: "أوريليا 01",
    price: 690,
    category: "Sunglasses",
    shape: "Cat Eye",
    color: "Onyx",
    image: img("photo-1511499767150-a48a237f0083"),
    tag: "New",
  },
  {
    id: "n02",
    name: "Riyadh Noir",
    ar: "رياض نوار",
    price: 790,
    category: "Sunglasses",
    shape: "Square",
    color: "Black",
    image: img("photo-1508296695146-257a814070b4"),
    tag: "Signature",
  },
  {
    id: "n03",
    name: "Sahara Gold",
    ar: "صحراء جولد",
    price: 590,
    category: "Sunglasses",
    shape: "Aviator",
    color: "Gold",
    image: img("photo-1572635196237-14b3f281503f"),
    tag: "Bestseller",
  },
  {
    id: "n04",
    name: "Mira 02",
    ar: "ميرا 02",
    price: 520,
    category: "Optical",
    shape: "Round",
    color: "Tortoise",
    image: img("photo-1574258495973-f010dfbb5371"),
    tag: "New",
  },
 {
  id: "n05",
  name: "Dune",
  ar: "ديون",
  price: 640,
  category: "Sunglasses",
  shape: "Rectangle",
  color: "Sand",
  image: img("photo-1758552322632-ba288778c770"),
  tag: "Limited",
},

{
  id: "n06",
  name: "Lina 04",
  ar: "لينا 04",
  price: 480,
  category: "Optical",
  shape: "Cat Eye",
  color: "Honey",
  image: img("photo-1743641377472-587cce2c34b9"),
  tag: "Essential",
},

{
  id: "n07",
  name: "Atlas",
  ar: "أطلس",
  price: 720,
  category: "Sunglasses",
  shape: "Square",
  color: "Brown",
  image: img("photo-1574065664165-b5cdf34ed695"),
  tag: "Editorial",
},

{
  id: "n08",
  name: "Noura",
  ar: "نورة",
  price: 550,
  category: "Optical",
  shape: "Oval",
  color: "Black",
  image: img("photo-1619089662138-d884da64e589"),
  tag: "New",
},

{
  id: "n09",
  name: "Jade 05",
  ar: "جايد 05",
  price: 610,
  category: "Optical",
  shape: "Rectangle",
  color: "Olive",
  image: img("photo-1596940459110-72ac5c24dd3c"),
  tag: "New",
},

{
  id: "n10",
  name: "Layan",
  ar: "ليان",
  price: 510,
  category: "Optical",
  shape: "Oval",
  color: "Crystal",
  image: img("photo-1565376839786-202c55c87faa"),
  tag: "Essential",
},

{
  id: "n11",
  name: "Sultan",
  ar: "سلطان",
  price: 810,
  category: "Sunglasses",
  shape: "Square",
  color: "Walnut",
  image: img("photo-1578749183382-762c9d79fe61"),
  tag: "Signature",
},

{
  id: "n12",
  name: "Hala",
  ar: "هالة",
  price: 630,
  category: "Optical",
  shape: "Cat Eye",
  color: "Rose",
  image: img("photo-1612327343778-508fb0196f73"),
  tag: "Editorial",
},
];

const formatPrice = (price, lang) => {
  return lang === "ar" ? `${price} ر.س` : `${price} SAR`;
};

const copy = {
  en: {
    nav: ["Home", "Collections", "Gallery", "Services", "Stores"],
    language: "العربية",

    heroKicker: "Independent eyewear · Riyadh",
    heroTitle: "See your style differently.",
    heroText:
      "A private world of considered frames, Saudi light and personal service — created for people who know that the smallest details change everything.",

    shop: "Explore collection",
    gallery: "Enter the gallery",
    arrival: "The new edit",
    arrivalText: "Frames made to become part of your signature.",
    viewAll: "View all",

    promise: "More than eyewear.",
    promiseText:
      "From the first fitting to the final detail, every NOIRÉ touchpoint is designed to feel calm, personal and unmistakably premium.",

    p1: "Curated selection",
    p2: "Made for Saudi light",
    p3: "Personal fitting",

    stores: "Visit our stores",
    storesText:
      "Step inside a quieter kind of luxury. Try the collection, take your time, and let our team find your frame.",

    contact: "Let’s find your frame.",
    contactText:
      "Book a private fitting or message our team for a personal recommendation.",

    whatsapp: "Chat on WhatsApp",
    directions: "Get directions",

    footer:
      "Contemporary eyewear for people who see beyond the ordinary.",

    all: "All",
    sunglasses: "Sunglasses",
    optical: "Optical",
    men: "Men",
    women: "Women",

    collectionTitle: "The collection",
    collectionText:
      "Sixteen considered frames, from quiet opticals to sculptural sunwear.",

    newest: "Newest",
    priceLow: "Price: Low to high",
    priceHigh: "Price: High to low",

    add: "Add to cart",
    details: "View details",

    available: "Available in store",
    delivery: "Complimentary Saudi delivery",

    related: "You may also like",
    back: "Back to collection",

    cart: "Your cart",
    empty: "Your cart is empty.",
    checkout: "Continue to WhatsApp",
    subtotal: "Subtotal",
    remove: "Remove",

    galleryTitle: "A visual language of light.",
    galleryText:
      "A study of texture, architecture, skin and shadow — the world around NOIRÉ.",

    servicesTitle: "The NOIRÉ fitting ritual.",
    servicesText:
      "Personal service, considered recommendations and details that make the experience feel entirely yours.",

    journalTitle: "The NOIRÉ Journal.",
    journalText:
      "Notes on style, light, craftsmanship and the art of choosing well.",

    storesTitle: "Find your nearest NOIRÉ.",
    storesSub:
      "Riyadh, Jeddah and Dammam — visit us for a private fitting or simply come browse.",

    city1: "Riyadh · Olaya",
    city2: "Jeddah · Tahlia",
    city3: "Dammam · Al Faisaliyah",

    menu: "Menu",
  },

  ar: {
    nav: ["الرئيسية", "المجموعات", "المعرض", "الخدمات", "فروعنا"],
    language: "English",

    heroKicker: "نظارات مستقلة · الرياض",
    heroTitle: "اكتشف أسلوبك من منظور مختلف.",
    heroText:
      "عالم خاص من الإطارات المنتقاة، والضوء السعودي، والخدمة الشخصية — صُمم لمن يعرفون أن التفاصيل الصغيرة تصنع الفرق.",

    shop: "اكتشف المجموعة",
    gallery: "ادخل المعرض",
    arrival: "الإصدار الجديد",
    arrivalText: "إطارات صُممت لتصبح جزءاً من هويتك.",
    viewAll: "عرض الكل",

    promise: "أكثر من مجرد نظارات.",
    promiseText:
      "من أول تجربة إلى آخر تفصيل، صُممت كل لحظة في NOIRÉ لتكون هادئة وشخصية وفاخرة بلا مبالغة.",

    p1: "اختيارات منتقاة",
    p2: "مصممة لضوء السعودية",
    p3: "تجربة شخصية",

    stores: "زوروا فروعنا",
    storesText:
      "ادخلوا إلى عالم أكثر هدوءاً من الفخامة. جربوا المجموعة وخذوا وقتكم ودعوا فريقنا يجد إطاركم.",

    contact: "لنجد إطارك المثالي.",
    contactText:
      "احجز تجربة خاصة أو تواصل مع فريقنا للحصول على توصية شخصية.",

    whatsapp: "تواصل عبر واتساب",
    directions: "الاتجاهات",

    footer:
      "نظارات عصرية لمن يرون العالم بطريقة مختلفة.",

    all: "الكل",
    sunglasses: "شمسية",
    optical: "طبية",
    men: "رجال",
    women: "نساء",

    collectionTitle: "المجموعة",
    collectionText:
      "ستة عشر إطاراً مختاراً بعناية، من النظارات الطبية الهادئة إلى التصاميم الشمسية الجريئة.",

    newest: "الأحدث",
    priceLow: "السعر: من الأقل",
    priceHigh: "السعر: من الأعلى",

    add: "أضف إلى السلة",
    details: "عرض التفاصيل",

    available: "متوفر في الفرع",
    delivery: "توصيل مجاني داخل السعودية",

    related: "قد يعجبك أيضاً",
    back: "العودة للمجموعة",

    cart: "سلتك",
    empty: "سلتك فارغة.",
    checkout: "المتابعة عبر واتساب",
    subtotal: "المجموع",
    remove: "حذف",

    galleryTitle: "لغة بصرية من الضوء.",
    galleryText:
      "دراسة في الملمس والعمارة والبشرة والظل — العالم المحيط بـ NOIRÉ.",

    servicesTitle: "طقوس NOIRÉ لاختيار الإطار.",
    servicesText:
      "خدمة شخصية وتوصيات مدروسة وتفاصيل تجعل التجربة لك وحدك.",

    journalTitle: "مجلة NOIRÉ.",
    journalText:
      "ملاحظات عن الأسلوب والضوء والحرفية وفن الاختيار.",

    storesTitle: "اعثر على أقرب فرع NOIRÉ.",
    storesSub:
      "الرياض وجدة والدمام — زورونا لتجربة شخصية أو لتصفح المجموعة.",

    city1: "الرياض · العليا",
    city2: "جدة · التحلية",
    city3: "الدمام · الفيصلية",

    menu: "القائمة",
  },
};

const gallery = [
  ["photo-1497366811353-6870744d04b2", "The House"],
  ["photo-1441986300917-64674bd600d8", "Riyadh Light"],
  ["photo-1497366754035-f200968a6e72", "Quiet Details"],
  ["photo-1518005020951-eccb494ad742", "Architecture"],
  ["photo-1494438639946-1ebd1d20bf85", "Material Study"],
   ["photo-1698222850822-8b08738a0996", "The Edit"],
  ["photo-1511499767150-a48a237f0083", "Modern Form"],
  ["photo-jGDVMvbSI40", "After Dark"],
  ["photo-3Y7IUFN9Anc", "The Signature"],
  ["photo-RW20tSWh3Vo", "In Store"],
  ["photo-UO5raGaAKOM", "Golden Hour"],
  ["photo-YWymqfV68Ds", "Soft Geometry"]
];

function App() {
  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState(false);

  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: (item.qty || 1) + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          qty: quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          t={t}
          lang={lang}
          setLang={setLang}
          cart={cart}
          menu={menu}
          setMenu={setMenu}
        />

        <Routes>
          <Route
            path="/"
            element={<Home t={t} addToCart={addToCart} />}
          />

          <Route
            path="/collections"
            element={<Shop t={t} addToCart={addToCart} />}
          />

          <Route
            path="/gallery"
            element={<Gallery t={t} />}
          />

          <Route
            path="/product/:id"
            element={<Product t={t} addToCart={addToCart} />}
          />

          <Route
            path="/services"
            element={<Services t={t} />}
          />

          <Route
            path="/journal"
            element={<Journal t={t} />}
          />

          <Route
            path="/stores"
            element={<Stores t={t} />}
          />

          <Route
            path="/contact"
            element={<Contact t={t} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                t={t}
                lang={lang}
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer t={t} />
      </div>
    </BrowserRouter>
  );
}

function Header({
  t,
  lang,
  setLang,
  cart,
  menu,
  setMenu,
}) {
  const navPaths = [
    "/",
    "/collections",
    "/gallery",
    "/services",
    "/stores",
  ];

  return (
    <>
      <header className="nav">
        <Link
          className="logo"
          to="/"
          onClick={() => setMenu(false)}
        >
          NOIRÉ<span>.</span>
        </Link>

        <nav className="desktop-nav">
          {t.nav.map((name, index) => (
            <NavLink
              key={name}
              to={navPaths[index]}
              end={navPaths[index] === "/"}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="lang"
            onClick={() =>
              setLang(lang === "en" ? "ar" : "en")
            }
          >
            {t.language}
          </button>

          <Link className="bag" to="/cart">
            <ShoppingBag size={19} />
            <span>
              {cart.reduce(
                (total, item) => total + (item.qty || 1),
                0
              )}
            </span>
          </Link>

          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menu && (
        <div className="mobile-menu">
          {t.nav.map((name, index) => (
            <NavLink
              key={name}
              to={navPaths[index]}
              end={navPaths[index] === "/"}
              onClick={() => setMenu(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

function Home({ t, addToCart }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            {t.heroKicker}
            <i />
          </div>

          <h1>{t.heroTitle}</h1>

          <p>{t.heroText}</p>

          <div className="hero-buttons">
            <Link
              className="btn dark"
              to="/collections"
            >
              {t.shop}
              <ArrowUpRight size={17} />
            </Link>

            <Link
              className="text-btn"
              to="/gallery"
            >
              {t.gallery}
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://www.eyecoptometry.com.au/wp-content/uploads/fw2020_sun_hero_schermo-grande_2.jpg"
            alt="Premium eyewear collection"
          />

          <div className="hero-overlay" />

          <div className="hero-stamp">
            <span>NOIRÉ</span>
            <small>RIYADH · 2026</small>
          </div>
        </div>
      </section>

      <section className="ticker">
        <span>CURATED EYEWEAR</span>
        <span>RIYADH · JEDDAH · DAMMAM</span>
        <span>DESIGNED FOR THE SAUDI LIGHT</span>
        <span>PRIVATE FITTINGS</span>
      </section>

      {/* NEW COLLECTION */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              01 / {t.arrival}
            </div>

            <h2>{t.arrivalText}</h2>
          </div>

          <Link
            to="/collections"
            className="circle-link"
          >
            {t.viewAll}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              p={product}
              addToCart={addToCart}
              t={t}
            />
          ))}
        </div>
      </section>

      {/* BRAND / EXPERIENCE */}
      <section className="editorial">
        <div className="editorial-large">
          <img
            src={img(
              "photo-1518005020951-eccb494ad742"
            )}
            alt="NOIRÉ interior"
          />

          <div className="editorial-label">
            RIYADH / FORM & LIGHT
          </div>
        </div>

        <div className="editorial-copy">
          <div className="eyebrow">
            02 / NOIRÉ HOUSE
          </div>

          <h2>{t.promise}</h2>

          <p>{t.promiseText}</p>

          <div className="promise-list">
            <div>
              <b>01</b>
              <span>{t.p1}</span>
            </div>

            <div>
              <b>02</b>
              <span>{t.p2}</span>
            </div>

            <div>
              <b>03</b>
              <span>{t.p3}</span>
            </div>
          </div>

          <Link
            to="/services"
            className="btn outline"
          >
            {t.nav[3]}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-tease">
        <div className="gallery-copy">
          <div className="eyebrow">
            03 / EDITORIAL GALLERY
          </div>

          <h2>{t.galleryTitle}</h2>

          <p>{t.galleryText}</p>

          <Link
            className="circle-link"
            to="/gallery"
          >
            {t.gallery}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="gallery-strip">
          {gallery.slice(0, 4).map(([id, label]) => (
            <div key={label}>
              <img
                src={img(id, 900)}
                alt={label}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORES */}
      <section className="stores-band">
        <div>
          <div className="eyebrow">
            04 / {t.stores}
          </div>

          <h2>{t.storesText}</h2>
        </div>

        <Link
          to="/stores"
          className="btn light"
        >
          {t.directions}
          <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* CONTACT */}
      <section className="contact-band">
        <div>
          <div className="eyebrow">
            NOIRÉ / PRIVATE FITTING
          </div>

          <h2>{t.contact}</h2>

          <p>{t.contactText}</p>
        </div>

        <Link
          className="btn dark"
          to="/contact"
        >
          {t.whatsapp}
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}

function ProductCard({ p, addToCart, t ,lang}) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="product-card">
      <div className="product-img">
        <Link to={"/product/" + p.id}>
          <img
            src={p.image}
            alt={p.name}
          />
        </Link>

        <span className="tag">{p.tag}</span>

        <button
          className={
            "heart " + (liked ? "liked" : "")
          }
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
        >
          <Heart
            size={17}
            fill={
              liked
                ? "currentColor"
                : "none"
            }
          />
        </button>
      </div>

      <div className="product-meta">
        <div>
          <Link
            to={"/product/" + p.id}
            className="product-name"
          >
            {p.name}
          </Link>

          <div className="muted">
            {p.category} · {p.color}
          </div>
        </div>

        <b>
          <b>
  {formatPrice(p.price, lang)}
</b>
        </b>
      </div>

      {/* DIRECT ADD TO CART FROM HOME/COLLECTION */}
      <button
        className="btn dark product-cart-btn"
        onClick={() => addToCart(p, 1)}
      >
        {t.add}
        <ShoppingBag size={16} />
      </button>
    </article>
  );
}

function Shop({ t, addToCart }) {
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const list = useMemo(() => {
    let x = products.filter(
      (p) =>
        (cat === "all" ||
          p.category.toLowerCase() === cat) &&
        p.name
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    if (sort === "low") {
      x.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      x.sort((a, b) => b.price - a.price);
    }

    return x;
  }, [cat, sort, search]);

  return (
    <main className="page">
      <section className="page-hero">
        <div className="eyebrow">
          NOIRÉ / COLLECTION
        </div>

        <h1>{t.collectionTitle}</h1>

        <p>{t.collectionText}</p>
      </section>

      <section className="shop-controls">
        <div className="chips">
          <button
            className={
              cat === "all" ? "active" : ""
            }
            onClick={() => setCat("all")}
          >
            {t.all}
          </button>

          <button
            className={
              cat === "sunglasses"
                ? "active"
                : ""
            }
            onClick={() =>
              setCat("sunglasses")
            }
          >
            {t.sunglasses}
          </button>

          <button
            className={
              cat === "optical" ? "active" : ""
            }
            onClick={() => setCat("optical")}
          >
            {t.optical}
          </button>
        </div>

        <div className="sort">
          <Search size={16} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search"
          />

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="newest">
              {t.newest}
            </option>

            <option value="low">
              {t.priceLow}
            </option>

            <option value="high">
              {t.priceHigh}
            </option>
          </select>
        </div>
      </section>

      <section className="shop-grid">
        {list.map((product) => (
          <ProductCard
            key={product.id}
            p={product}
            addToCart={addToCart}
            t={t}
          />
        ))}
      </section>
    </main>
  );
}

function Product({ t, addToCart }) {
  const { id } = useParams();

  const p =
    products.find((x) => x.id === id) ||
    products[0];

  const [qty, setQty] = useState(1);

  return (
    <main className="page product-page">
      <Link
        to="/collections"
        className="back"
      >
        <ChevronLeft size={16} />
        {t.back}
      </Link>

      <div className="product-detail">
        <div className="detail-gallery">
          <div className="detail-main">
            <img
              src={p.image}
              alt={p.name}
            />
          </div>

          <div className="detail-thumbs">
            {[
              p.image,
              products[
                (products.indexOf(p) + 1) %
                  products.length
              ].image,
              products[
                (products.indexOf(p) + 2) %
                  products.length
              ].image,
            ].map((x, i) => (
              <img
                key={i}
                src={x}
                alt={`${p.name} ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="detail-copy">
          <div className="eyebrow">
            {p.category} / {p.tag}
          </div>

          <h1>{p.name}</h1>

          <div className="rating">
            <Star
              size={15}
              fill="currentColor"
            />

            <span>
              4.9 · 28 reviews
            </span>
          </div>

          <div className="price">
           <b>
  {formatPrice(p.price, lang)}
</b>
          </div>

          <p className="detail-desc">
            A considered frame with a confident
            silhouette, premium finish and
            lightweight everyday comfort. Designed
            for long days, bright Saudi light and
            effortless personal style.
          </p>

          <div className="detail-info">
            <div>
              <span>{t.available}</span>
              <b>
                Riyadh · Jeddah · Dammam
              </b>
            </div>

            <div>
              <span>{t.delivery}</span>
              <b>2–4 business days</b>
            </div>

            <div>
              <span>Craft</span>
              <b>
                Premium acetate · UV400 lenses
              </b>
            </div>
          </div>

          <div className="qty">
            <button
              onClick={() =>
                setQty(Math.max(1, qty - 1))
              }
            >
              <Minus size={15} />
            </button>

            <span>{qty}</span>

            <button
              onClick={() =>
                setQty(qty + 1)
              }
            >
              <Plus size={15} />
            </button>
          </div>

          <button
            className="btn dark full"
            onClick={() =>
              addToCart(p, qty)
            }
          >
            {t.add}
            <ShoppingBag size={17} />
          </button>

          <a
            className="whatsapp-line"
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
          >
            Need help choosing?{" "}
            <b>WhatsApp us ↗</b>
          </a>
        </div>
      </div>

      <section className="related">
        <div className="section-head">
          <h2>{t.related}</h2>
        </div>

        <div className="product-grid">
          {products
            .filter((x) => x.id !== p.id)
            .slice(0, 4)
            .map((x) => (
              <ProductCard
                p={x}
                key={x.id}
                addToCart={addToCart}
                t={t} 
                lang={lang}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

function Gallery({ t }) {
  return (
    <main className="page gallery-page">
      <section className="page-hero">
        <div className="eyebrow">
          NOIRÉ / VISUAL ARCHIVE
        </div>

        <h1>{t.galleryTitle}</h1>

        <p>{t.galleryText}</p>
      </section>

      <section className="masonry">
        {gallery.map(([id, label], i) => (
          <figure
            className={"gallery-card g" + i}
            key={label}
          >
            <img
              src={img(id, 1200)}
              alt={label}
            />

            <figcaption>
              <span>
                {String(i + 1).padStart(
                  2,
                  "0"
                )}
              </span>
              {label}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}

function Services({ t }) {
  const cards = [
    [
      "01",
      "Private fitting",
      "A calm, one-to-one session to discover proportions, colours and silhouettes that suit you.",
    ],
    [
      "02",
      "Style consultation",
      "Bring your wardrobe, your occasion or simply your instinct. We curate a considered edit around it.",
    ],
    [
      "03",
      "Lens guidance",
      "From everyday optical clarity to Saudi sun, our team helps you choose the right lens experience.",
    ],
    [
      "04",
      "Aftercare",
      "Adjustments, fit checks and care guidance so your frames continue to feel exactly right.",
    ],
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <div className="eyebrow">
          NOIRÉ / SERVICES
        </div>

        <h1>{t.servicesTitle}</h1>

        <p>{t.servicesText}</p>
      </section>

      <section className="service-grid">
        {cards.map((c) => (
          <article key={c[0]}>
            <span>{c[0]}</span>
            <h2>{c[1]}</h2>
            <p>{c[2]}</p>
            <ArrowUpRight />
          </article>
        ))}
      </section>

      <section className="service-image">
        <img
          src={img(
            "photo-1497366811353-6870744d04b2",
            1800
          )}
          alt="NOIRÉ private room"
        />

        <div>
          <div className="eyebrow">
            THE PRIVATE ROOM
          </div>

          <h2>
            Your time. Your frame. No rush.
          </h2>

          <Link
            className="btn light"
            to="/contact"
          >
            Book a fitting
            <CalendarDays size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Journal({ t }) {
  const posts = [
    [
      "01",
      "How to choose a frame for your face",
      "A simple guide to proportion, balance and the silhouette that feels like you.",
      "photo-1524250502761-1ac6f2e30d43",
    ],
    [
      "02",
      "The art of the quiet frame",
      "Why understated eyewear often makes the strongest statement.",
      "photo-1515372039744-b8f02a3ae446",
    ],
    [
      "03",
      "Designed for Saudi light",
      "What to consider when choosing lenses for long, bright days.",
      "photo-1441986300917-64674bd600d8",
    ],
    [
      "04",
      "Inside the NOIRÉ edit",
      "A closer look at the pieces shaping our latest collection.",
      "photo-1503342217505-b0a15ec3261c",
    ],
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <div className="eyebrow">
          NOIRÉ / JOURNAL
        </div>

        <h1>{t.journalTitle}</h1>

        <p>{t.journalText}</p>
      </section>

      <section className="journal-grid">
        {posts.map((p) => (
          <article key={p[0]}>
            <div className="journal-img">
              <img
                src={img(p[3])}
                alt={p[1]}
              />

              <span>{p[0]}</span>
            </div>

            <div className="journal-meta">
              <small>
                NOIRÉ EDITORIAL
              </small>

              <h2>{p[1]}</h2>

              <p>{p[2]}</p>

              <button>
                Read story
                <ArrowUpRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function Stores({ t }) {
  const cities = [
    t.city1,
    t.city2,
    t.city3,
  ];

  return (
    <main className="page stores-page">
      <section className="page-hero">
        <div className="eyebrow">
          NOIRÉ / STORES
        </div>

        <h1>{t.storesTitle}</h1>

        <p>{t.storesSub}</p>
      </section>

      <div className="store-list">
        {cities.map((city, i) => (
          <div className="store" key={city}>
            <div className="store-no">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div>
              <h2>{city}</h2>

              <p>
                10:00 — 23:00 · Open daily
              </p>

              <p>
                Private fittings · Collection
                viewing
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="circle-link"
            >
              {t.directions}
              <ArrowUpRight size={16} />
            </a>
          </div>
        ))}
      </div>

      <section className="store-image">
        <img
          src={img(
            "photo-1556740749-887f6717d7e4",
            1800
          )}
          alt="NOIRÉ store"
        />

        <div>
          <div className="eyebrow">
            COME IN / TAKE YOUR TIME
          </div>

          <h2>
            Try it. See it. Feel it.
          </h2>
        </div>
      </section>
    </main>
  );
}

function Contact({ t }) {
  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <div>
          <div className="eyebrow">
            NOIRÉ / PRIVATE FITTING
          </div>

          <h1>{t.contact}</h1>

          <p>{t.contactText}</p>
        </div>

        <img
          src={img(
            "photo-1497366811353-6870744d04b2"
          )}
          alt="NOIRÉ fitting"
        />
      </section>

      <section className="contact-grid">
        <div>
          <h2>Start a conversation.</h2>

          <p>
            Tell us what you are looking for and
            our team will guide you toward a
            considered selection.
          </p>

          <div className="contact-links">
            <a href="https://wa.me/966500000000">
              <Phone />
              WhatsApp
            </a>

            <a href="mailto:hello@noire.sa">
              <Mail />
              hello@noire.sa
            </a>

            <a href="https://maps.google.com">
              <MapPin />
              Riyadh · Jeddah · Dammam
            </a>

            <div>
              <Clock3 />
              Daily · 10:00 — 23:00
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) =>
            e.preventDefault()
          }
        >
          <label>
            Name
            <input placeholder="Your name" />
          </label>

          <label>
            Phone
            <input placeholder="+966" />
          </label>

          <label>
            What can we help with?
            <select>
              <option>
                Private fitting
              </option>

              <option>
                Style consultation
              </option>

              <option>
                Product enquiry
              </option>

              <option>
                Aftercare
              </option>
            </select>
          </label>

          <label>
            Message
            <textarea
              rows="5"
              placeholder="Tell us a little about what you're looking for..."
            />
          </label>

          <button className="btn dark full">
            Request a fitting
            <ArrowUpRight size={17} />
          </button>
        </form>
      </section>
    </main>
  );
}

function Cart({
  t,
  lang,
  cart,
  removeFromCart,
}) {
  const total = cart.reduce(
    (sum, product) =>
      sum +
      product.price *
        (product.qty || 1),
    0
  );

  return (
    <main className="page bag-page">
      <div className="page-hero compact">
        <div className="eyebrow">
          NOIRÉ / CART
        </div>

        <h1>{t.cart}</h1>
      </div>

      {!cart.length ? (
        <div className="empty">
          <ShoppingBag size={38} />

          <h2>{t.empty}</h2>

          <Link
            className="btn dark"
            to="/collections"
          >
            {t.viewAll}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="bag-layout">
          <div className="bag-items">
            {cart.map((product) => (
              <div
                className="bag-item"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <h3>{product.name}</h3>

                  <p>
                    {product.category} ·{" "}
                    {product.color}
                  </p>

                  <p>
                    Qty:{" "}
                    {product.qty || 1}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(
                        product.id
                      )
                    }
                  >
                    {t.remove}
                  </button>
                </div>

             <b>
  {formatPrice(
    product.price * (product.qty || 1),
    lang
  )}
</b>
              </div>
            ))}
          </div>

          <aside className="summary">
            <h3>{t.subtotal}</h3>

            <strong>
             {formatPrice(total, lang)}
            </strong>

            <p>{t.delivery}</p>

            <a
              className="btn dark full"
              href={`https://wa.me/966500000000?text=${encodeURIComponent(
                "Hello NOIRÉ, I would like to order: " +
                  cart
                    .map(
                      (product) =>
                        `${product.name} x${
                          product.qty || 1
                        }`
                    )
                    .join(", ") +
                  `\nTotal: ${total.toLocaleString()} SAR`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.checkout}
              <ArrowUpRight size={17} />
            </a>
          </aside>
        </div>
      )}
    </main>
  );
}

function Footer({ t }) {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link
            className="logo footer-logo"
            to="/"
          >
            NOIRÉ<span>.</span>
          </Link>

          <p>{t.footer}</p>
        </div>

        <div className="footer-links">
          <div>
            <b>Explore</b>

            <Link to="/">
              {t.nav[0]}
            </Link>

            <Link to="/collections">
              {t.nav[1]}
            </Link>

            <Link to="/gallery">
              {t.nav[2]}
            </Link>

            <Link to="/services">
              {t.nav[3]}
            </Link>

            <Link to="/stores">
              {t.nav[4]}
            </Link>
          </div>

          <div>
            <b>Experience</b>

            <Link to="/contact">
              Private fitting
            </Link>

            <Link to="/cart">
              {t.cart}
            </Link>

            <Link to="/journal">
              Journal
            </Link>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 NOIRÉ HOUSE
        </span>

        <span>
          RIYADH · SAUDI ARABIA
        </span>
      </div>
    </footer>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);

