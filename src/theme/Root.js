
import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    let active = true;

    async function highlightPage() {
      const params = new URLSearchParams(location.search);
      const searchTerm = params.get('highlight');

      if (!searchTerm) {
        return;
      }

      try {
        const pagefindUrl =
          `${window.location.origin}/FluentisErp/pagefind/pagefind-highlight.js`;

        await import(
          /* webpackIgnore: true */
          pagefindUrl
        );

        if (!active) return;

        if (window.PagefindHighlight) {
          new window.PagefindHighlight({
            highlightParam: 'highlight',
            markOptions: {
              className: 'pagefind-highlight',
            },
          });
        }
      } catch (error) {
        console.error('Errore evidenziazione Pagefind:', error);
      }
    }

    highlightPage();

    return () => {
      active = false;
    };
  }, [location.pathname, location.search]);

  return <>{children}</>;
}
