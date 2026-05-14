import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

function LenisProvider() {
    const { pathname } = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            wheelMultiplier: 1,
            smoothWheel: true,
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // cleanup
        return () => {
            lenisRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        lenisRef.current.scrollTo(0, { immediate: true });
    }, [pathname]);

    return null; // não renderiza nada
}

export default LenisProvider;