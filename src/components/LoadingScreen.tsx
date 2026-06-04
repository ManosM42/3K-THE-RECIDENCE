import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import logo from "@/assets/logo.png";

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--navy-deep)" }}
        >
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              src={logo}
              alt="The Residence"
              className="w-64 h-auto"
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[100px] md:text-[140px] leading-none text-amber"
              style={{ textShadow: "0 0 40px rgba(232,130,74,0.5)" }}
            >
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-2 text-xs tracking-luxury text-white/80 uppercase"
            >
              Welcome 
            </motion.div>
            <div className="mt-6 w-40 h-px bg-white/10 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                className="h-full bg-amber origin-left"
                style={{ boxShadow: "0 0 12px var(--amber)" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useRouteLoader() {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return show;
}
