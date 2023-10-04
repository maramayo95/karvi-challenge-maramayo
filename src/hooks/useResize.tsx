import { useEffect, useState } from "react";

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
    isMobile: () => boolean;
    isDesktop: () => boolean;
}

type NativeWindowSize = Pick<WindowSize, "width" | "height">;

const useResize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<NativeWindowSize>({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const parsedWidth = windowSize?.width || 0;

    const isMobile = (): boolean => parsedWidth < 768;
    const isDesktop = (): boolean => parsedWidth >= 1024;

    return {
        width: windowSize?.width,
        height: windowSize?.height,
        isMobile,
        isDesktop,
    };
};

export default useResize;
