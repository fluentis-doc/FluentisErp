---
title: Creazione automatica pagamento fornitori
sidebar_position: 1
---
La form si trova in Tesoreria > Pagamenti fornitori > Procedure > Creazione automatica pagamenti fornitori

Questa procedura è alternativa alla creazione di una nuova [distinta di pagamento](/docs/treasury/vendors-payments/create-vendor-payments) ed alla sua successiva contabilizzazione, permettendo di eseguire queste operazioni in maniera integrata direttamente da questa form.

## Come creare automaticamente un pagamento fornitori


1. Utilizza la prima scheda *Filtro partite* localizzare le partite da pagare. (E' possibile filtrare anche per codici abi/cab degli appoggi bancari collegati alla partita contabile, oltre che per codice / descrizione della banca d'appoggio - espandendo la sezione *Banca*). 

Espandendo la sezione *Tipo partite* sono **esclusi** di default i **pagamenti delle partite percipienti**, per i quali <u>**l'operazione va effettuata dall'interno del modulo percipienti**</u> se si vuole poter utilizzare la procedura di [certificazione ritenute](/docs/finance-area/declarations/declarations/withholding-tax-certification). 

Il filtro per *sottoconto* banca di *pagamento* consente di gestire la creazione della distinta sulla base di quello che è stato canalizzato sulle varie banche attraverso le impostazioni di anagrafica e della procedura di [Gestione Appoggio Pagamenti](/docs/treasury/vendors-payments/procedures/payments-support-management) del modulo stesso.

2. Controlla, in basso, i totali delle righe selezionate.


3. Passa alla seconda scheda **Dati pagamento fornitore** e imposta i vari elementi di gestione della procedura: innanzi tutto va inserita la **banca di pagamento**, che sarà la banca intestataria della distinta. 
Questo campo sblocca il pulsante **Inizia la creazione del pagamento da partite**.


4. Gestisci gli altri parametri:

- Il flag **Utilizza la banca di pagamento dalla partita del fornitore, in assenza dall'anagrafica** imporrà alla procedura di creare tante distinte quante sono le banche di pagamento assegnate alle varie partite selezionate nella procedura di gestione appoggio pagamento, oppure inserite in anagrafica del fornitore. In assenza di entrambe il pagamento sarà inserito nella distinta per il codice banca impostato nel campo iniziale.

- Il flag **Utilizza la banca d'appoggio presente in anagrafica del fornitore** forza l'assegnazione dei codici bancari del beneficiario leggendoli dalla riga banca di default inserita nella sezione banche d'appoggio della scheda pagamenti dell'anagrafica fornitore. Questo flag può essere predefinito all'interno dei parametri del modulo.

- Il **Tipo pagamento** consente di definire la tipologia di pagamento da assegnare alla distinta: il campo diventa obbligatorio solo quando le partite da pagare prevedono tipologie di pagamento non uniforme.

- L'anno e la data di emissione sono definiti di default sulla base della data di sistema.

- Il flag di **Imponi data valuta beneficiario** consente di assegnare, all'interno del tracciato telematico, una data valuta per il beneficiario del pagamento, che se non è impostata viene assegnata come data odierna. Se il flag non è impostato la data valuta sarà uguale alla data scadenza.

- Il campo **Note iniziali** è un campo libero di note del pagamento, non utilizzato nello standard.

- Il campo **Note finali** viene utilizzato nella contabilizzazione pagamenti per valorizzare la descrizione di dettaglio del movimento contabile del sottoconto banca.

5. Se desideri contabilizzare immediatamente i pagamenti attiva Il flag di **Contabilizzazione della partita** che consente di rilevare direttamente la chiusura delle partite e i relativi movimenti di partita doppia dei pagamenti in creazione: se non utilizzata sarà possibile utilizzare in seguito la *procedura separata di contabilizzazione*.

6. Compila la causale di contabilità da utilizzare per la registrazione, le date di registrazione e competenza. I sottoconti di rilevazione degli abbuoni attivi e passivi sono proposti sulla base del sottoconto *sopravvenienze attive* presente nei parametri di contabilità. La data e numero documento  da inserire come riferimenti della testata della registrazione sono opzionali (potrebbe essere il numero/data distinta).

Sulla destra è presente un flag di default di **Chiusura della partite** (proposto di default, da non togliere) e il criterio di gestione del raggruppamento in contabilità **Raggruppa Banca** che consente di rilevare una registrazione per ogni sottoconto banca di uscita. 

In alternativa è disponibile un **Raggruppa per sottoconto** fornitore e un'opzione di registrazione dettagliata pagamento per pagamento (**Nessun raggruppamento**).

Se la causale contabile prevede la gestione della data valuta banca e all'interno dell'anagrafica banche è stato definito un numero di giorni per il suo calcolo in relazione alla causale contabile utilizzata, il campo sarà gestito in automatico nella registrazione risultante.

7. Premi il pulsante **Inizia la creazione del pagamento da partite**


**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Si rinvia al Tutorial - Link YouTube </a>**

### La scheda di ripristino 

consente di visualizzare la registrazione contabile attraverso un doppio click nella sezione relativa alle registrazioni, così come l'annullamento parziale/totale delle operazioni di pagamento selezionate. L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite).



**Pulsanti specifici**

**Ricerca precedenti**: Ricerca la lista delle creazioni eseguite.

**Cancella creazione**: Con questo pulsante sarà cancellata tutta la contabilizzazione effettuata, con tutti i pagamenti associati.

**Cancella pagamenti**: Il pulsante esegue il ripristino del pagamento selezionato.

