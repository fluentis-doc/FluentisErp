---
title: Tipi conto
sidebar_position: 30
---

Percorso: **Configurazione > Tabelle > Amministrazione > Tipi conto**

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

### Gestione tabella

La definizione della tabella tipo conto non è altro che una ‘qualifica' che va a indicare alla procedura come gestire il codice di sottoconto cui è assegnato:

- innanzi tutto va a identificare come valorizzare il dettaglio di gestione delle 4 tipologie di anagrafica previste;

- in secondo luogo va a identificare le sezioni di appartenenza a bilancio (attivo/passivo/costi/ricavi);

- può infine servire come criterio di filtro, tipicamente all'interno dell'help conti.

:::note Campi tabella
**Codice**: codice tipo conto.

**Descrizione**: descrizione tipo conto.

**P. Attivo**: con flag su attivo.

**P. Passivo**: con flag su passivo.

**E. Costi**: con flag su costi.

**E. Ricavi**: con flag su ricavi.

**C. Ordine**: con flag su conti d'ordine.

**Cliente**: con flag su clienti + attivo.

**Fornitore**: con flag su fornitori + passivo.

**Banca**: con flag su attivo o passivo + banca.

**Agente**: con flag su agente + passivo.

**Servizio**: con flag su servizio. I conti con tale flag attivo sono i sottoconti per i quali Ia procedura gestisce in automatico le scritture di rettifica e integrazione a livello di bilanci infrannuali, ma anche le scritture di assestamento di contabilità generale.

**Controlling**: attualmente non gestito. I conti con questo tipo si vedono solo nell'area controlling (una volta implementata la funzionalità)

---

**Flag successivi (da *Tutti* a *Impostazioni Conai*)**: Con questi flag si abilita la visibilità dei corrispondenti tab all'interno delle anagrafiche contabili clienti / fornitori. Attivando *Tutti* i tab saranno tutti visibili.

:::

---
### Video Tutorials

<iframe width="1120" height="630" src="https://www.youtube.com/embed/r62pWFU1tuk" title="YouTube video player" frameborder="0"  allowfullscreen= "true"></iframe>




