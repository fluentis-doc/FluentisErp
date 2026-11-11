
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import './styles.css';

// =====================================================
// 1. STOPWORDS ITALIANE
// =====================================================

// Le parole accentate vengono normalizzate prima del confronto.
// Le negazioni vengono volutamente conservate.

const ITALIAN_STOPWORDS = new Set([
  // Articoli
  'il', 'lo', 'la', 'i', 'gli', 'le',
  'un', 'uno', 'una',

  // Preposizioni
  'di', 'a', 'da', 'in', 'con', 'su',
  'per', 'tra', 'fra',

  // Preposizioni articolate
  'del', 'dello', 'della', 'dei', 'degli', 'delle',
  'al', 'allo', 'alla', 'ai', 'agli', 'alle',
  'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle',
  'nel', 'nello', 'nella', 'nei', 'negli', 'nelle',
  'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle',
  'col', 'coi',

  // Congiunzioni
  'e', 'ed', 'o', 'oppure', 'ma', 'pero',
  'che', 'se', 'come', 'quando', 'mentre',
  'quindi', 'poiche', 'perche', 'benche',
  'affinche', 'sebbene', 'ne',

  // Pronomi
  'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro',
  'mi', 'ti', 'si', 'ci', 'vi', 'ne',
  'me', 'te', 'se',

  // Possessivi
  'mio', 'mia', 'miei', 'mie',
  'tuo', 'tua', 'tuoi', 'tue',
  'suo', 'sua', 'suoi', 'sue',
  'nostro', 'nostra', 'nostri', 'nostre',
  'vostro', 'vostra', 'vostri', 'vostre',

  // Dimostrativi e relativi
  'questo', 'questa', 'questi', 'queste',
  'quello', 'quella', 'quelli', 'quelle',
  'cio', 'chi', 'cui', 'quale', 'quali',
  'quanto', 'quanta', 'quanti', 'quante',

  // Avverbi
  'si', 'piu', 'meno',
  'molto', 'molta', 'molti', 'molte',
  'poco', 'poca', 'pochi', 'poche',
  'tanto', 'tanta', 'tanti', 'tante',
  'sempre', 'mai', 'gia', 'ancora',
  'qui', 'qua', 'li', 'la',
  'dove', 'sopra', 'sotto', 'dopo', 'prima',
  'poi', 'cosi', 'solo', 'solamente',
  'quasi', 'anche', 'inoltre', 'infatti',
  'tuttavia', 'comunque', 'eventualmente',
  'adesso', 'ora', 'oggi', 'ieri', 'domani',

  // Verbi essere
  'essere', 'avere', 'sono', 'sei', 'siamo',
  'siete', 'era', 'erano', 'ero', 'eri',
  'sarebbe', 'sarebbero', 'sara', 'saranno',
  'stato', 'stata', 'stati', 'state',

  // Verbi avere
  'ho', 'hai', 'ha', 'abbiamo', 'avete',
  'hanno', 'avevo', 'aveva', 'avevano',
  'avuto', 'avuta', 'avuti', 'avute',

  // Verbi comuni
  'fare', 'fatto', 'fatta', 'fatti', 'fatte',
  'fa', 'fanno', 'puo', 'possono',
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
  'nessun', 'tale', 'tali',
]);

// =====================================================
// 2. NORMALIZZAZIONE DEL TESTO
// =====================================================

function normalizeText(text = '') {
  return String(text)
    .toLocaleLowerCase('it-IT')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, ' e ')
    .replace(/&quot;|&#39;|&apos;/gi, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// =====================================================
// 3. ESTRAZIONE DEI TERMINI
// =====================================================

function getSearchTerms(query) {
  return normalizeText(query)
    .split(/\s+/)
    .filter(word =>
      word.length > 1 &&
      !ITALIAN_STOPWORDS.has(word)
    );
}

// Rimuove le stopwords mantenendo l'ordine originale.

function removeStopwords(query) {
  return getSearchTerms(query).join(' ');
}

// =====================================================
// 4. GESTIONE DELLE VARIANTI DELLE PAROLE
// =====================================================

// Semplificazione morfologica per riconoscere alcune
// varianti comuni del singolare, plurale e delle forme verbali.
//
// Non sostituisce un vero stemmer linguistico.

const ITALIAN_SUFFIXES = [
  'azioni', 'azione',
  'imenti', 'imento',
  'amente', 'mente',
  'atrice', 'atori', 'atore',
  'trici', 'trice',
  'ando', 'endo',
  'abile', 'abili',
  'ibile', 'ibili',
  'ità',
  'ivo', 'iva', 'ivi', 'ive',
  'oso', 'osa', 'osi', 'ose',
  'ato', 'ata', 'ati', 'ate',
  'uto', 'uta', 'uti', 'ute',
  'are', 'ere', 'ire',
  'i', 'e', 'o', 'a',
];

function getWordStem(word) {
  for (const suffix of ITALIAN_SUFFIXES) {
    if (
      word.length - suffix.length >= 3 &&
      word.endsWith(suffix)
    ) {
      return word.slice(0, -suffix.length);
    }
  }

  return word;
}

function wordsMatch(a, b) {
  if (a === b) return true;

  if (a.length < 4 || b.length < 4) {
    return false;
  }

  return getWordStem(a) === getWordStem(b);
}

// =====================================================
// 5. ANALISI DEL TESTO
// =====================================================

function getWords(text) {
  return normalizeText(text)
    .split(/\s+/)
    .filter(Boolean);
}

function countMatchingTerms(text, terms) {
  const words = getWords(text);

  return terms.filter(term =>
    words.some(word => wordsMatch(word, term))
  ).length;
}

function containsPhrase(text, phrase) {
  return Boolean(phrase) && text.includes(phrase);
}

// =====================================================
// 6. CALCOLO DELLA RILEVANZA
// =====================================================

function calculateRelevance(result, query) {
  const title = normalizeText(result.meta?.title || '');
  const url = normalizeText(result.url || '');
  const excerpt = normalizeText(result.excerpt || '');

  const normalizedQuery = normalizeText(query);
  const terms = getSearchTerms(query);
  const coreQuery = terms.join(' ');

  if (!terms.length) return 0;

  let score = 0;

  // ---------------------------------------------------
  // PRIORITA' 1: TITOLO
  // ---------------------------------------------------

  // Titolo identico alla ricerca
  if (
    title === normalizedQuery ||
    (coreQuery && title === coreQuery)
  ) {
    score += 200;
  }

  // Frase completa nel titolo
  if (containsPhrase(title, normalizedQuery)) {
    score += 130;
  } else if (
    coreQuery &&
    containsPhrase(title, coreQuery)
  ) {
    score += 110;
  }

  const titleMatches = countMatchingTerms(title, terms);

  // Ogni termine presente nel titolo
  score += titleMatches * 20;

  // Tutti i termini presenti nel titolo
  if (titleMatches === terms.length) {
    score += 80;
  }

  // Copertura proporzionale del titolo
  score += (titleMatches / terms.length) * 20;

  // ---------------------------------------------------
  // PRIORITA' 2: EXCERPT
  // ---------------------------------------------------

  // Frase completa nell'estratto
  if (containsPhrase(excerpt, normalizedQuery)) {
    score += 40;
  } else if (
    coreQuery &&
    containsPhrase(excerpt, coreQuery)
  ) {
    score += 30;
  }

  const excerptMatches = countMatchingTerms(
    excerpt,
    terms
  );

  // Ogni termine presente nell'estratto
  score += excerptMatches * 5;

  // Tutti i termini presenti nell'estratto
  if (excerptMatches === terms.length) {
    score += 25;
  }

  // ---------------------------------------------------
  // PRIORITA' 3: URL
  // ---------------------------------------------------

  const urlMatches = countMatchingTerms(url, terms);

  score += urlMatches * 3;

  // ---------------------------------------------------
  // PRIORITA' 4: PAGINATION SCORE PAGEFIND
  // ---------------------------------------------------

  // Il punteggio Pagefind viene normalizzato
  // successivamente all'interno di rankResults.

  return score;
}

// =====================================================
// 7. RANKING PERSONALIZZATO
// =====================================================

function rankResults(results, query) {
  const maxPagefindScore = Math.max(
    ...results.map(result => result.pagefindScore || 0),
    0
  );

  return results
    .map(result => {
      const customScore = calculateRelevance(
        result,
        query
      );

      // Pagefind contribuisce al massimo per 20 punti.
      const pagefindScore = maxPagefindScore > 0
        ? (
            (result.pagefindScore / maxPagefindScore) * 20
          )
        : 0;

      return {
        ...result,
        relevanceScore: customScore + pagefindScore,
      };
    })
    .sort((a, b) =>
      b.relevanceScore - a.relevanceScore
    );
}

// =====================================================
// 8. NORMALIZZAZIONE URL PAGEFIND
// =====================================================

function normalizePagefindUrl(url = '') {
  return url.replace(/\.html(?=([?#]|$))/i, '');
}

// =====================================================
// 9. COMPONENTE PAGEFIND SEARCH
// =====================================================

export default function PagefindSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const pagefindRef = useRef(null);
  const pagefindPromise = useRef(null);
  const searchId = useRef(0);

  const baseUrl = useBaseUrl('/');

  // ===================================================
  // 10. CARICAMENTO PAGEFIND UNA SOLA VOLTA
  // ===================================================

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) {
      return pagefindRef.current;
    }

    if (!pagefindPromise.current) {
      pagefindPromise.current = (async () => {
        const normalizedBaseUrl = baseUrl.endsWith('/')
          ? baseUrl
          : `${baseUrl}/`;

        const pagefindPath = `${normalizedBaseUrl}pagefind/`;

        const pagefindUrl = new URL(
          `${pagefindPath}pagefind.js`,
          window.location.origin
        ).href;

        console.log('Base URL Docusaurus:', normalizedBaseUrl);
        console.log('Percorso Pagefind:', pagefindPath);

        // Verifica che Pagefind sia disponibile
        const response = await fetch(pagefindUrl);

        if (!response.ok) {
          throw new Error(
            `Pagefind non trovato: ${pagefindUrl} (HTTP ${response.status})`
          );
        }

        // Import dinamico
        const pagefind = await import(
          /* webpackIgnore: true */
          pagefindUrl
        );

        await pagefind.options({
          baseUrl: normalizedBaseUrl,
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
  }, [baseUrl]);

  // ===================================================
  // 11. RICERCA
  // ===================================================

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

    // Debounce: 250 ms
    const timer = setTimeout(async () => {
      try {
        const cleanedTerm = removeStopwords(term);

        if (!cleanedTerm) {
          if (
            active &&
            currentSearch === searchId.current
          ) {
            setResults([]);
            setLoading(false);
          }

          return;
        }

        const pagefind = await loadPagefind();

        console.log('Ricerca originale:', term);
        console.log('Ricerca ottimizzata:', cleanedTerm);

        // Esegue la ricerca originale e quella ottimizzata.
        // I risultati vengono successivamente unificati.

        const searchQueries = [
          ...new Set([term, cleanedTerm]),
        ];

        const searchResponses = await Promise.all(
          searchQueries.map(searchQuery =>
            pagefind.search(searchQuery)
          )
        );

        // Recupera i primi 100 risultati per ciascuna ricerca.
        const responseGroups = await Promise.all(
          searchResponses.map(async searchResult => {
            return Promise.all(
              searchResult.results
                .slice(0, 100)
                .map(async result => {
                  const data = await result.data();

                  return {
                    ...data,
                    url: normalizePagefindUrl(data.url),
                    pagefindScore: result.score || 0,
                  };
                })
            );
          })
        );

        // Unificazione dei risultati senza duplicati.
        const resultsMap = new Map();

        responseGroups.flat().forEach(result => {
          const existing = resultsMap.get(result.url);

          if (
            !existing ||
            result.pagefindScore > existing.pagefindScore
          ) {
            resultsMap.set(result.url, result);
          }
        });

        const items = Array.from(resultsMap.values());

        // Ranking personalizzato.
        const rankedItems = rankResults(items, term);

        // Mostra i migliori 20 risultati.
        const finalResults = rankedItems.slice(0, 30);

        console.log(
          'Risultati ordinati:',
          finalResults.map(result => ({
            title: result.meta?.title,
            url: result.url,
            score: result.relevanceScore,
            pagefindScore: result.pagefindScore,
          }))
        );

        if (
          active &&
          currentSearch === searchId.current
        ) {
          setResults(finalResults);
        }
      } catch (err) {
        console.error('Errore Pagefind:', err);

        if (
          active &&
          currentSearch === searchId.current
        ) {
          setResults([]);
          setError(
            err.message || 'Errore durante la ricerca.'
          );
        }
      } finally {
        if (
          active &&
          currentSearch === searchId.current
        ) {
          setLoading(false);
        }
      }
    }, 250);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query, loadPagefind]);

  // ===================================================
  // 12. RENDERING
  // ===================================================

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

          {!loading &&
            !error &&
            results.length === 0 && (
              <p>Nessun risultato trovato.</p>
            )}

          {!loading &&
            !error &&
            results.map((result, index) => (
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
                    __html: result.excerpt || '',
                  }}
                />

              </a>
            ))}

        </div>
      )}

    </div>
  );
}
