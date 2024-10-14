import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const useScrollRestoration = () => {
  const router = useRouter();
  const scrollPositions = useRef({});

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return;
    }

    // Save scroll position before route change
    const saveScrollPosition = () => {
      scrollPositions.current[router.asPath] = window.scrollY;
    };

    // Restore scroll position after route change
    const restoreScrollPosition = (url) => {
      if (scrollPositions.current[url] !== undefined) {
        window.scrollTo(0, scrollPositions.current[url]);
      } else {
        window.scrollTo(0, 0); // Scroll to top if no saved position
      }
    };

    window.history.scrollRestoration = 'manual'; // Disable browser auto-restoration

    router.events.on('routeChangeStart', saveScrollPosition);
    router.events.on('routeChangeComplete', restoreScrollPosition);

    return () => {
      router.events.off('routeChangeStart', saveScrollPosition);
      router.events.off('routeChangeComplete', restoreScrollPosition);
    };
  }, [router]);
};

export default useScrollRestoration;