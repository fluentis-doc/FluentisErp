---
title: Importazione Partite aperte
sidebar_position: 2
---

Il foglio excel (template) per l'importazione delle partite aperte nel modulo Amministrazione necessita di essere compilato in entrambi i tab:

**Bizlink parameters:**

Campi da compilare (non valorizzati automaticamente)

- Partita o pagamento: 0 = partita aperta; 1 = pagamento (chiude partite), fare riferimento alla documentazione del modulo amministrazione in caso di dubbio
- In pagamento: flag che indica se la partita è già inserita in una distinta di bonifico fornitori. Settare generalmente a 0 per normali partite aperte.
- Id stato partita: settare 1 di default


**Tab Dati:**

CLIENTE / FORNITORE
    
- Conto / Sottoconto: inserire un codice di conto e sottoconto clienti o fornitore già presente in Fluentis (OBBLIGATORIO)

RIFERIMENTI DOCUMENTO
- Tipo documento: es FA per fattura d'acquisto, FV per fattura di vendita. Usare codifica già presente su Fluentis.
- Numero / data Fattura: facoltativi, in caso di partita generica si possono omettere indicando come tipo documento GEN

DATI PAGAMENTO
- Tipo pagamento: deve essere già presente su Fluentis (riferirsi al codice dei tipi pagamento presenti) - OBBLIGATORIO
- Data maturazione: è la data scadenza partita - OBBLIGATORIO
- Conto / sottoconto banca. si tratta della banca d'appoggio collegata alla partita (facoltativo)

DATI PARTITE
- Residuo (Dare / Avere): dato del residuo aperto, se la partita non è parzialmente pagata corrisponde al controvalore. 
DATO ESPRESSO NELLA VALUTA INSERITA NELLA APPOSITA COLONNA. ATTENZIONE, compilare la sezione Dare oppure Avere (a seconda del segno della partita) e inserire sempre il valore 0,00 nella colonna adiacente. (se valorizzo Dare es 100,00 metto in Avere 0,00) OBBLIGATORIO
- Controvalore (Dare / Avere): è il valore della partita nella moneta di conto della società (es. Euro). ATTENZIONE, compilare la sezione Dare oppure Avere (a seconda del segno della partita) e inserire sempre il valore 0,00 nella colonna adiacente. (se valorizzo Dare es 100,00 metto in Avere 0,00). OBBLIGATORIO
- Divisa: valorizzare con un codice già presente in Fluentis (es. Eur per Euro, Usd per dollaro) OBBLIGATORIO
- Blocco: flag che indica se la partita è bloccata e non pagabile (1) oppure libera (0). OBBLIGATORIO
- Note: campo note di partita facoltativo

DATI REGISTRAZIONE
Data e numero di riferimento della registrazione contabile collegata alla partita.
Sezione facoltativa.

ATTENZIONE: se valorizzata la registrazione deve essere già presente in Fluentis e verrà ricercata dall'importazione, se non trovata l'import restituirà errore.

---

Controllare che nelle divise (tabella divise) sia compilato dappertutto l’isocode (a volte manca proprio per l’euro)


**ATTENZIONE**: controllare che il numeratore delle partite includa anche gli anni precedenti se nel foglio excel ci sono partite con scadenze degli anni precedenti, altrimenti darà errore. Questo perché, tipicamente, un db nuovo ha numeratore che parte dall’anno corrente.



