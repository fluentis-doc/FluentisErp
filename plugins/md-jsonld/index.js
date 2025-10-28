const path = require('path');

module.exports = function mdJsonLdPlugin(context, options) {
  return {
    name: 'md-jsonld-plugin',

    injectHtmlTags({ content }) {
      if (!content || !content.frontMatter) return {};

      const fm = content.frontMatter;
      if (!fm.title || !fm.description || !fm.schema) return {};

      // 🔹 Determina lingua automaticamente dal percorso file
      let lang = 'it'; // default
      if (content.source && content.source.includes('/i18n/')) {
        const parts = content.source.split(path.sep);
        const i18nIndex = parts.indexOf('i18n');
        if (i18nIndex >= 0 && parts[i18nIndex + 1]) {
          lang = parts[i18nIndex + 1];
        }
      }

      // 🔹 Imposta il tipo base
      let type = 'TechArticle';
      const schemaType = fm.schema.toLowerCase();
      if (schemaType === 'howto') type = 'HowTo';
      if (schemaType === 'faq') type = 'FAQPage';

      // 🔹 JSON-LD base
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': type,
        name: fm.title,
        description: fm.description,
        inLanguage: lang,
      };

      // 🔹 Aggiunge steps se è un HowTo
      if (fm.steps && Array.isArray(fm.steps)) {
        jsonLd.step = fm.steps.map((s, i) => ({
          '@type': 'HowToStep',
          name: s.title || `Step ${i + 1}`,
          text: s.text || '',
        }));
      }

      // 🔹 Aggiunge FAQ se presenti (anche se schema principale ≠ FAQPage)
      if (fm.faqs && Array.isArray(fm.faqs) && fm.faqs.length > 0) {
        const faqData = {
          '@type': 'FAQPage',
          mainEntity: fm.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        };

        // Se schema principale è HowTo → combina in un unico JSON-LD
        if (type === 'HowTo') {
          jsonLd.faq = faqData.mainEntity;
        } else {
          // altrimenti lo aggiunge come secondo script JSON-LD
          return {
            headTags: [
              {
                tagName: 'script',
                attributes: { type: 'application/ld+json' },
                innerHTML: JSON.stringify(jsonLd, null, 2),
              },
              {
                tagName: 'script',
                attributes: { type: 'application/ld+json' },
                innerHTML: JSON.stringify(faqData, null, 2),
              },
            ],
          };
        }
      }

      // 🔹 Output finale (uno script, combinato)
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: { type: 'application/ld+json' },
            innerHTML: JSON.stringify(jsonLd, null, 2),
          },
        ],
      };
    },
  };
};
