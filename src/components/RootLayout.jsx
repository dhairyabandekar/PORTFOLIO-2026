import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function RootLayout() {
  return (
    <div className="flex min-h-dvh w-full max-w-[100vw] min-w-0 flex-col overflow-x-hidden bg-ink">
      <ScrollToTop />

      {/* Accessibility shortcut */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ochre focus:px-3 focus:py-2 focus:font-mono focus:text-[0.6875rem] focus:uppercase focus:tracking-[0.16em] focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main
        id="main"
        className="flex w-full min-w-0 max-w-full flex-1 flex-col overflow-x-hidden pt-14 lg:pt-16"
      >
        <Outlet />
      </main>

      <div className="w-full min-w-0 max-w-full overflow-x-hidden">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;