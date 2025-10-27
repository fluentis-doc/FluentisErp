// plugins/md-jsonld/index.js
module.exports = function mdJsonLdPlugin(context, options) {
  return {
    name: 'md-jsonld',

    injectHtmlTags({content}) {
      if (!content || !content.frontMatter) return {};

      const fm = content.frontMatter;
      const headTags = [];

      // META keywords per SEO / AI retrieval
      if (fm.keywords && Array.isArray(fm.keywords)) {
        headTags.push({
          tagName: 'meta',
          attributes: { name: 'keywords', content: fm.keywords.join(', ') },
        });
      }

      // Schema JSON-LD
      if (fm.title && fm.description && fm.schema) {
        let type = 'TechArticle';
        const schemaLower = fm.schema.toLowerCase();
        if (schemaLower === 'howto') type = 'HowTo';
        if (schemaLower === 'faq') type = 'FAQPage';

        const jsonLd = {
          "@context": "https://schema.org",
          "@type": type,
          "headline": fm.title,
          "description": fm.description,
          "inLanguage": fm.lang || "it",
          "about": fm.keywords || [],
          "publisher": {
            "@type": "Organization",
            "name": "Fluentis ERP"
          }
        };

        // Gestione steps per HowTo
        if (type === 'HowTo' && fm.steps && Array.isArray(fm.steps)) {
          jsonLd.step = fm.steps.map((s, i) => ({
            "@type": "HowToStep",
            "name": s.title || `Step ${i + 1}`,
            "text": s.text
          }));
        }

        // Gestione FAQs per FAQPage
        if (type === 'FAQPage' && fm.faqs && Array.isArray(fm.faqs)) {
          jsonLd.mainEntity = fm.faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }));
        }

        headTags.push({
          tagName: 'script',
          attributes: { type: 'application/ld+json' },
          innerHTML: JSON.stringify(jsonLd, null, 2),
        });
      }

      return { headTags };
    },
  };
};
