
import React, { useEffect, useRef, useState } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import './styles.css';

// Stopwords italiane

const ITALIAN_STOPWORDS = new Set([
  // Articoli
  'il', 'lo', 'la', 'i', 'gli', 'le',
  'un', 'uno', 'una', "un'",

  // Preposizioni semplici
  'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra',

  // Preposizioni articolate
  'del', 'dello', 'della', 'dei', 'degli', 'delle',
  'al', 'allo', 'alla', 'ai', 'agli', 'alle',
  'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle',
  'nel', 'nello', 'nella', 'nei', 'negli', 'nelle',
  'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle',
  'col', 'coi',

  // Congiunzioni
  'e', 'ed', 'o', 'oppure', 'ma', 'però',
  'che', 'se', 'come', 'quando', 'mentre',
  'quindi', 'poiché', 'perché', 'benché',
  'affinché', 'sebbene', 'né',

  // Pronomi personali
  'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro',
  'mi', 'ti', 'si', 'ci', 'vi', 'ne',
  'me', 'te', 'sé',

  // Pronomi possessivi
  'mio', 'mia', 'miei', 'mie',
  'tuo', 'tua', 'tuoi', 'tue',
  'suo', 'sua', 'suoi', 'sue',
  'nostro', 'nostra', 'nostri', 'nostre',
  'vostro', 'vostra', 'vostri', 'vostre',

  // Pronomi dimostrativi e relativi
  'questo', 'questa', 'questi', 'queste',
  'quello', 'quella', 'quelli', 'quelle',
  'ciò', 'chi', 'cui', 'quale', 'quali',
  'quanto', 'quanta', 'quanti', 'quante',

  // Avverbi
  'non', 'no', 'sì', 'più', 'meno',
  'molto', 'molta', 'molti', 'molte',
  'poco', 'poca', 'pochi', 'poche',
  'tanto', 'tanta', 'tanti', 'tante',
  'sempre', 'mai', 'già', 'ancora',
  'qui', 'qua', 'lì', 'là',
  'dove', 'sopra', 'sotto', 'dopo', 'prima',
  'poi', 'così', 'solo', 'solamente',
  'quasi', 'anche', 'inoltre', 'infatti',
  'tuttavia', 'comunque', 'eventualmente',
  'adesso', 'ora', 'oggi', 'ieri', 'domani',

  // Verbi essere e avere
  'essere', 'avere', 'sono', 'sei', 'è',
  'siamo', 'siete', 'era', 'erano',
  'ero', 'eri', 'sarebbe', 'sarebbero',
  'sarà', 'saranno', 'stato', 'stata',
  'stati', 'state',
  'ho', 'hai', 'ha', 'abbiamo', 'avete',
  'hanno', 'avevo', 'aveva', 'avevano',
  'avuto', 'avuta', 'avuti', 'avute',

  // Verbi comuni
  'fare', 'fatto', 'fatta', 'fatti', 'fatte',
  'fa', 'fanno', 'può', 'possono',
  'poteva', 'potrebbe', 'potrebbero',
  'deve', 'devono', 'devi', 'dovrebbe',
  'dovrebbero', 'viene', 'vengono',
  'va', 'vanno', 'andare',

  // Altri termini frequenti
  'ogni', 'tutto', 'tutti', 'tutte',
  'altro', 'altra', 'altri', 'altre',
  'stesso', 'stessa', 'stessi', 'stesse',
  'esso', 'essa', 'essi', 'esse',
  'qualche', 'qualsiasi', 'alcuni', 'alcune',
  'nessuno', 'nessuna', 'nessun',
  'tale', 'tali'
]);

// Normalizzazione del testo

function normalizeText(text = '') {
  return text
    .toLocaleLowerCase('it-IT')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

// Rimozione delle stopwords

function removeStopwords(query) {
  return query
    .split(/\s+/)
    .filter(word => {
      const normalized = normalizeText(word);
      return normalized && !ITALIAN_STOPWORDS.has(normalized);
    })
    .join(' ');
}

// Estrae i termini significativi

function getSearchTerms(query) {
  return normalizeText(query)
    .split(/\s+/)
    .filter(word =>
      word.length > 1 &&
      !ITALIAN_STOPWORDS.has(word)
    );
}

// Verifica la presenza di una parola intera

function containsWord(text, word) {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return new RegExp(
    `(?:^|\\s)${escapedWord}(?:$|\\s)`
  ).test(text);
}

// Verifica la presenza della frase completa

function containsPhrase(text, phrase) {
  return text.includes(phrase);
}

// Calcolo della rilevanza

function calculateRelevance(result, query) {
  const title = normalizeText(result.meta?.title || '');
  const url = normalizeText(result.url || '');
  const excerpt = normalizeText(result.excerpt || '');
  const normalizedQuery = normalizeText(query);

  const terms = getSearchTerms(query);

  if (!terms.length) return 0;

  let score = 0;

  // 1. Frase completa nel titolo

  if (containsPhrase(title, normalizedQuery)) {
    score += 100;
  }

  // 2. Parole presenti nel titolo

  const titleMatches = terms.filter(term =>
    containsWord(title, term)
  );

  score += titleMatches.length * 20;

  // Bonus se tutte le parole sono nel titolo

  if (titleMatches.length === terms.length) {
    score += 50;
  }

  // 3. Parole presenti nell'URL

  const urlMatches = terms.filter(term =>
    containsWord(url, term)
  );

  score += urlMatches.length * 5;

  // 4. Parole presenti nell'excerpt

  const excerptMatches = terms.filter(term =>
    containsWord(excerpt, term)
  );

  score += excerptMatches.length * 3;

  // Bonus se tutte le parole sono nell'excerpt

  if (excerptMatches.length === terms.length) {
    score += 15;
  }

  // 5. Frase completa nell'excerpt

  if (containsPhrase(excerpt, normalizedQuery)) {
    score += 10;
  }

  // 6. Titolo identico alla query

  if (title === normalizedQuery) {
    score += 100;
  }

  return score;
}

// Ranking personalizzato + punteggio Pagefind

function rankResults(results, query) {
  const maxPagefindScore = Math.max(
    ...results.map(result => result.pagefindScore || 0),
    0
  );

  return results
    .map(result => {
      const customScore = calculateRelevance(result, query);

      const pagefindScore = maxPagefindScore > 0
        ? (result.pagefindScore / maxPagefindScore) * 30
        : 0;

      return {
        ...result,
        relevanceScore: customScore + pagefindScore
      };
    })
    .sort((a, b) =>
      b.relevanceScore - a.relevanceScore
    );
}

// Normalizzazione URL Pagefind
// Rimuove .html mantenendo query string e anchor

function normalizePagefindUrl(url = '') {
  return url.replace(/\.html(?=([?#]|$))/i, '');
}

// Componente di ricerca Pagefind

export default function PagefindSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const pagefindRef = useRef(null);
  const pagefindPromise = useRef(null);
  const searchId = useRef(0);

  const baseUrl = useBaseUrl('/');

  // Carica Pagefind una sola volta

  const loadPagefind = async () => {
    if (pagefindRef.current) {
      return pagefindRef.current;
    }

    if (!pagefindPromise.current) {
      pagefindPromise.current = (async () => {
        const pagefindPath = `${baseUrl}pagefind/`;

        const pagefindUrl = new URL(
          `${pagefindPath}pagefind.js`,
          window.location.origin
        ).href;

        console.log('Base URL Docusaurus:', baseUrl);
        console.log('Percorso Pagefind:', pagefindPath);
        console.log('URL Pagefind:', pagefindUrl);

        // Verifica che Pagefind esista

        const response = await fetch(pagefindUrl);

        if (!response.ok) {
          throw new Error(
            `Pagefind non trovato: ${pagefindUrl} (HTTP ${response.status})`
          );
        }

        // Caricamento dinamico

        const pagefind = await import(
          /* webpackIgnore: true */
          pagefindUrl
        );

        await pagefind.options({
          baseUrl,
          basePath: pagefindPath,
          highlightParam: 'highlight',
        });

        await pagefind.init();

        console.log('Pagefind inizializzato correttamente');

        pagefindRef.current = pagefind;

        return pagefind;
      })();
    }

    try {
      return await pagefindPromise.current;
    } catch (err) {
      pagefindPromise.current = null;
      throw err;
    }
  };

  // Ricerca

  useEffect(() => {
    let active = true;

    const currentSearch = ++searchId.current;
    const term = query.trim();

    if (!term) {
      setResults([]);
      setError('');
      setLoading(false);

      return () => {
        active = false;
      };
    }

    setLoading(true);
    setError('');

    const timer = setTimeout(async () => {
      try {
        const cleanedTerm = removeStopwords(term);

        if (!cleanedTerm) {
          if (active && currentSearch === searchId.current) {
            setResults([]);
            setLoading(false);
          }

          return;
        }

        const pagefind = await loadPagefind();

        console.log('Ricerca originale:', term);
        console.log('Ricerca ottimizzata:', cleanedTerm);

        // Ricerca Pagefind

        const searchResult = await pagefind.search(cleanedTerm);

        // Recupera i primi 100 risultati

        const items = await Promise.all(
          searchResult.results
            .slice(0, 100)
            .map(async result => {
              const data = await result.data();

              // Rimuove .html dall'URL restituito da Pagefind

              const normalizedUrl = normalizePagefindUrl(data.url);

              return {
                ...data,
                url: normalizedUrl,
                pagefindScore: result.score
              };
            })
        );

        // Ordina i risultati per rilevanza

        const rankedItems = rankResults(items, term);

        // Mostra i migliori 20 risultati

        const finalResults = rankedItems.slice(0, 20);

        console.log(
          'Risultati ordinati:',
          finalResults.map(result => ({
            title: result.meta?.title,
            url: result.url,
            score: result.relevanceScore,
            pagefindScore: result.pagefindScore
          }))
        );

        if (active && currentSearch === searchId.current) {
          setResults(finalResults);
        }

      } catch (err) {
        console.error('Errore Pagefind:', err);

        if (active && currentSearch === searchId.current) {
          setResults([]);
          setError(err.message || 'Errore durante la ricerca.');
        }

      } finally {
        if (active && currentSearch === searchId.current) {
          setLoading(false);
        }
      }
    }, 250);

    return () => {
      active = false;
      clearTimeout(timer);
    };

  }, [query, baseUrl]);

  // Rendering

  return (
    <div className="pagefind-search">

      <input
        type="search"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Cerca nella documentazione..."
        aria-label="Cerca nella documentazione"
        autoComplete="off"
      />

      {query.trim() && (
        <div
          className="pagefind-results"
          role="region"
          aria-live="polite"
        >

          {loading && (
            <p>Ricerca in corso...</p>
          )}

          {!loading && error && (
            <p className="pagefind-error">
              Errore: {error}
            </p>
          )}

          {!loading && !error && results.length === 0 && (
            <p>Nessun risultato trovato.</p>
          )}

          {!loading && !error && results.map((result, index) => (
            <a
              key={`${result.url}-${index}`}
              href={result.url}
              className="pagefind-result"
            >

              <strong>
                {result.meta?.title || result.url}
              </strong>

              <div
                dangerouslySetInnerHTML={{
                  __html: result.excerpt || ''
                }}
              />

            </a>
          ))}

        </div>
      )}

    </div>
  );
}
