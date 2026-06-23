import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

const MARQUEE_TEXT =
  "SYSTEM STABLE /// SCALING REAL-TIME /// IIT GUWAHATI /// DREAM11 /// FOUNDING ENGINEER /// GOLANG SPECIALIST /// 10M+ CONCURRENT USERS /// ";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Sticky marquee ticker */}
      <div className="fixed bottom-0 left-0 w-full bg-black py-2 marquee border-t-4 border-accent z-[100]">
        <div className="marquee-content text-accent font-mono font-black uppercase text-xs tracking-widest">
          {MARQUEE_TEXT.repeat(2)}
        </div>
      </div>
    </>
  );
}
