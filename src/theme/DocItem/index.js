import React from 'react';
import InternalDocItem from '@theme-original/DocItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function AIGeneratedBanner({ frontMatter }) {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  // If no frontmatter or flag is missing/false -> no banner
  if (!frontMatter || !frontMatter.ai_generated) {
    return null;
  }

  const messages = {
    'en': 'This document may include content that was translated automatically.',
    'en-US': 'This document may include content that was translated automatically.',

    'es': 'Este documento puede incluir contenido traducido automáticamente.',
    'es-CO': 'Este documento puede incluir contenido traducido automáticamente.',

    'fr': 'Ce document peut contenir du contenu traduit automatiquement ou généré par l’IA.',
    'fr-FR': 'Ce document peut contenir du contenu traduit automatiquement ou généré par l’IA.',

    'hr': 'Ovaj dokument može sadržavati automatski preveden sadržaj.',
    'hr-HR': 'Ovaj dokument može sadržavati automatski preveden sadržaj.',

    'it': 'Questo documento può contenere contenuti tradotti automaticamente o generati con l’intelligenza artificiale.',
    'it-IT': 'Questo documento può contenere contenuti tradotti automaticamente o generati con l’intelligenza artificiale.',

    'pt': 'Este documento pode conter conteúdo traduzido automaticamente ou gerado por inteligência artificial.',
    'pt-PT': 'Este documento pode conter conteúdo traduzido automaticamente ou gerado por inteligência artificial.',

    'ro': 'Acest document poate include conținut tradus automat.',
    'ro-RO': 'Acest document poate include conținut tradus automat.',

    'sr': 'Ovaj dokument može sadržati sadržaj automatski preveden ili generisan veštačkom inteligencijom.',
    'sr-Latn-CS': 'Ovaj dokument može sadržati sadržaj automatski preveden ili generisan veštačkom inteligencijom.',

    'zh': '本文档可能包含由人工智能自动翻译或生成的内容。',
    'zh-CN': '本文档可能包含由人工智能自动翻译或生成的内容。',

    default: 'This document may contain content that has been automatically translated or generated with AI.',
  };

  const baseLocale = currentLocale?.split('-')[0];
  const message =
    messages[currentLocale] ??
    messages[baseLocale] ??
    messages.default;

  return (
    <div className="alert alert--warning margin-bottom--md">
      {message}
    </div>
  );
}

export default function DocItemWrapper(props) {
  // Frontmatter is available directly on the content object
  const frontMatter =
    props?.content?.frontMatter ??
    props?.content?.metadata?.frontMatter ??
    {};

  return (
    <>
      <AIGeneratedBanner frontMatter={frontMatter} />
      <InternalDocItem {...props} />
    </>
  );
}
