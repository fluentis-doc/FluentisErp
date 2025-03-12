---
title: Estratto Conto
sidebar_position: 3
---

Si tratta del report base per ottenere il dettaglio dei movimenti contabili di ogni sottoconto, qualsiasi sia il tipo (attivo, passivo, costo, ricavo, anagrafici): con il report standard per ogni sottoconto ci sarà un nuovo foglio di stampa.

Questa stampa corrisponde a ciò che, nella terminologia contabile, viene definito "mastrino".

**PRINCIPALI FILTRI**:

- Dati relativi alla registrazione contabile

   - **Conto**: Sottoconto di riferimento (ad esempio per visualizzare i movimenti ed il saldo risultante di un determinato fornitore per un certo range di date, oppure per  visualizzare i ricavi riferiti ad un determinato sottoconto del piano dei conti);

   - Data registrazione

   - Data competenza **contabile**

   - Numero registrazione

   - Tipo / Data / numero documento in testata registrazione (se presenti - possono non essere presenti data e numero documento per le registrazioni di prima nota)

   - Tipo conto

- Dati IVA

   - Registro

   - Protocollo (aprire l'expander)

- Tipo di registrazioni (provvisorie e/o definitive)

 

**ALTRI ELEMENTI CARATTERISTICI DEL REPORT**:



- filtri **Agente** e **Banca**: è possibile richiedere ad esempio l'estratto conto di tutti i clienti nella cui anagrafica è stato inserito questo agente, oppure di tutti i fornitori pagati tramite un certo conto bancario.

- filtro **Progetti** (ex Commesse): è possibile filtrare i sottoconti collegati ad un determinato progetto (commessa).



- **Visualizza importi in valuta**: con flag attivo saranno riportati anche gli importi in valuta (accanto agli importi in euro, senza alcun raggruppamento) senza questo flag, saranno visualizzati solo i  dati dare/avere nella divisa della società, 

- **Visualizza contropartite**: il flag attivo visualizza i movimenti di contropartita riferiti ai movimenti del sottoconto selezionato (formato A4 orizzontale)

- **No. righe**: in questo campo, attivo se il flag di cui sopra viene attivato, viene specificato quante righe di contropartita inserite nella sezione Libro giornale della **[registrazione contabile](/docs/finance-area/ledger-records/records/ledger-record)** saranno visualizzate in estratto conto. Ad esempio in presenza di diversi conti di ricavo riferiti alla registrazione di una fattura emessa, il valore può essere aumentato se nella stampa non vengono riportati tutti i conti di contropartita così come inseriti nella registrazione.

- **Annotazioni**: questo campo permette di inserire dati alfanumerici che saranno riportati nella stampa. Può essere utile per inserire un'annotazione veloce che rimane valida solo per la stampa elaborata in quel momento, il campo infatti si resetta chiudendo la form.





Possibilità di visualizzare i movimenti espressi in una specifica divisa tramite: 

- **Visualizza E/C in valuta**: flag che attiva anche la combo box per la scelta della valuta e disattiva il flag Visualizza importi in valuta e Visualizza contropartite

permette inoltre di raggruppare i movimenti per ogni singola valuta e di totalizzarli



- **Divisa**: permette di selezionare la divisa di riferimento per filtrare l'esposizione dei valori. Saranno dunque mostrati soltanto i valori denominati nella valuta selezionata per il sottoconto selezionato.





E' possibile ordinare le registrazioni per data registrazione o per data competenza. L'opzione diventa di particolare interesse nel caso in cui la chiusura/riapertura conti sia effettuata con data registrazione e competenza differenti, al fine di avere un saldo progressivo significativo;

 

**Data ultima apertura conti**: A differenza della **[Visualizzazione conti](/docs/finance-area/ledger-records/records/view-accounts)**, nel quale sono sempre visibili tutti i movimenti di ogni sottoconto, il report di stampa è un processo dove è importante limitare la numerosità dei record da visualizzare per non inficiare le prestazioni della macchina. 

In questo senso l'applicativo proporrà in stampa i movimenti considerando il saldo iniziale a partire dalla data ultima apertura conti, che viene proposta come la data più alta che sia antecedente ai filtri iniziali del report.

Esempio: se l'utente filtra i movimenti dal 01/09/2017 al 31/12/2017 (sia come data reg. che comp.), la procedura propone ultima apertura conti con data 01/01/2017, il risultato sarà: saldo iniziale calcolato dal 01/01/2017 al 31/08/2017, dettaglio dei movimenti collegati a registrazioni con data all'interno del range 01/09-31/12/2017 (per cui, nel report saranno inseriti solo i sottoconti che hanno almeno un movimento tra la data ultima apertura conti e la data finale di filtro). Se l'utente, invece, cancella la data ultima apertura conti il risultato sarà identico a quello presente nella visualizzazione conti.

**Visualizza sintetico**: si tratta di un report sintetico che presenta la lista di tutti i sottoconti senza alcun salto pagina. Si consiglia l'uso di questo report per stampare i mastrini da allegare alle stampe di chiusura dell'esercizio contabile.



| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa dell'estratto conto. |
| Stampa | Pulsante per eseguire la stampa fisica del documento estratto conto. |


:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE CONTABILI**](/docs/video/finance/intro.md)
:::