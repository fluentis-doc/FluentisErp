---
title: Anagrafiche
sidebar_position: 1
---

La tabella gestisce una serie di **informazioni che devono essere associate per consentire il dialogo tra Fluentis e DocFinance** (in particolare fare riferimento alla documentazione specifica di DocFinance per il significato dei campi da associare e le relative codifiche richieste); 

si compone di 4 sezioni:

**[Piano dei conti](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: in questa sezione è necessario indicare, per i sottoconti delle anagrafiche banca, i campi ‘Banca' e ‘RBN' (impostando i codici validi su DocFinance). Il primo indica l'istituto di credito di riferimento, mentre il secondo il tipo di conto (conto ordinario, sbf, …) associato al sottoconto stesso: questi due campi sono visibili e modificabili anche all'interno dell'anagrafica banca. Per quanto riguarda i sottoconti di tipo cliente/fornitore, inoltre, è possibile gestire da questa maschera anche il campo della ‘Derogabilità', campo che si può gestire anche dalla maschera principale dell'anagrafica contatti, per la singola riga di sottoconto;

**Flussi scadenziario**: in questa sezione va attribuito ad ogni flusso di cash flow (riferirsi alla documentazione di base del modulo omonimo) il relativo codice per DocFinance. È consentita l'attribuzione dello stesso codice su più righe flusso;

**[Tipi pagamento](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: in questa sezione va indicato, per ogni tipo di pagamento, il relativo codice di corrispondenza in DocFinance (è consentita l'attribuzione dello stesso codice su più righe). È possibile poi indicare un codice di derogabilità del tipo di pagamento, che sarà utilizzato nell'esportazione dati per DocFinance;

**Società**: per ogni società è obbligatorio indicare il codice corrispondente per DocFinance. Le società che non hanno codice saranno escluse dalle procedure di esportazione/importazione dati per/da DocFinance.


:::note[Approfondimento]
Esempio di derogabilità standard DocFinance

1    >>         RATING 1

2    >>         RATING 2

3    >>         RATING 3

4    >>         RATING 4



- Logica di esportazione dei conti Fluentis verso DocFinance: dimensione del campo disponibile nel file 16 caratteri (dimensione Fluentis 8+8 dei campi conto+sottoconto), il campo viene diviso in 2 blocchi, quindi es. il conto xyz-001 viene inserito nel file come ‘xyz     001     ‘.


- I codici delle causali di Fluentis (max 4 caratteri disponibili nel tracciato di DocFinance) verranno mappate su DocFinance, sui  movimenti contabili che vengono importati in Fluentis: si consiglia di impostare nelle causali in Fluentis sia i flag di chiusura che di apertura partite (nel caso in cui la partita non sia individuata o sia un anticipo).

- Ricordiamo che resta in gestione su Fluentis la creazione della distinta Sbf (e quindi creeremo il file in Fluentis per importarlo in DocFinance) così come la creazione dell’insoluto (per la riapertura delle partite originali): in particolare, è necessario mantenere la gestione del portafoglio effetti in Fluentis per poter gestire correttamente le maturazioni delle provvigioni sul pagamento.

La contabilizzazione insoluti deve prevedere in avere un conto transitorio banca (che è possibile impostare nei parametri del modulo insoluti) perché DocFinance invia l’addebito in conto corrente con contropartita questo stesso conto transitorio.

Tutti gli altri movimenti di incasso e pagamento che coinvolgono banche saranno gestiti su DocFinance.

:::



