import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  useLocation,
} from "@tanstack/react-router";
import * as React from "react";

import { I18nProvider } from "@/lib/i18n";
import { Navbar, Footer } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CursorDot } from "@/components/CursorDot";
import { keepAlive } from "@/lib/supabase-keepalive";

const queryClient = new QueryClient();

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl text-amber">404</h1>
        <p className="mt-4 text-sm tracking-widest uppercase text-white/60">Page not found</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-amber text-[var(--navy-deep)] rounded-md text-sm tracking-widest uppercase"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl text-white">Something didn't load</h1>
        <p className="mt-2 text-sm text-white/60">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-6 py-3 bg-amber text-[var(--navy-deep)] rounded-md text-sm tracking-widest uppercase"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function RouteLoader() {
  const location = useLocation();
  const [show, setShow] = React.useState(true);
  const firstMount = React.useRef(true);
  React.useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      const t = setTimeout(() => setShow(false), 1200);
      return () => clearTimeout(t);
    }
    setShow(true);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, [location.pathname]);
  return <LoadingScreen show={show} />;
}

function RootComponent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  React.useEffect(() => {
    keepAlive();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <RouteLoader />
        <CursorDot />
        {!isAdmin && <Navbar />}
        <main className="relative">
          <Outlet />
        </main>
        {!isAdmin && <Footer />}
      </I18nProvider>
    </QueryClientProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});