import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Hash link — retry a few times to ensure the element has rendered
    const NAV_OFFSET = 88;
    let attempts = 0;

    const attempt = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (attempts < 5) {
        attempts++;
        setTimeout(attempt, 100);
      }
    };

    attempt();
  }, [pathname, hash]);

  return null;
}
