---
title: Pagamenti elettronici
sidebar_position: 2
---

A partire dalla versione *Fluentis2025* è stata implementata la gestione dei pagamenti elettronici tramite fornitori di servizi di pagamento esterni, come PAYPAL o STRIPE. 

Dopo aver attivato il contratto con il fornitore, si avranno a disposizione le chiavi di accesso, da memorizzare in Fluentis come illustrato sotto, per utilizzare le web-api di comunicazione al servizio sottoscritto.

Per le varie scadenze fattura, quando il pagamento è con carta di credito, potremo inviare automaticamente una email all’interno della quale il cliente troverà il link di connessione alla pagina web dalla quale procedere al pagamento dell’importo relativo. Al buon fine o meno dell’operazione il fornitore comunicherà automaticamente il risultato a Fluentis, mettendo a disposizione l’importo decurtato delle commissioni nell’arco di qualche giorno.

### Configurazioni preliminari

Tabelle > Impostazioni Generali > Fornitore di servizi di pagamento

- Fornitore di servizi di pagamento: In questa tabella si definiscono la lista dei fornitori:
   - CHECKOUT	PSP settings for Checkout.com
   - STRIPE	PSP settings for Stripe TEST mode
   - PAYPAL	PSP settings for PayPal
   - STRIPE_LIVE	PSP settings for Stripe

 
- Fornitore di servizi di pagamento Aziendale: In questa tabella si configurano i dettagli di attivazione dei singoli fornitori, per ogni società presente nella base dati

![](/img/it-it/treasury/electronicpayments/img1.png)

La maschera di configurazione che si apre con il pulsante ‘Nuovo’, o modificando una già esistente, presenta i seguenti campi:

![](/img/it-it/treasury/electronicpayments/img2.png)

Il primo campo è il link al servizio di pagamento, che abbiamo appena visto.

**Attiva**: la configurazione è attiva

**Predefinito**: identifica la configurazione di default

**Prove effettuate**: identifica una configurazione di test

**Trasformazione email pagamento ricevuta**: è la trasformazione che gestisce la creazione dell’email per il pagamento ricevuto (Attualmente da gestire tramite configurazione Supervisor)

**Trasformazione pdf pagamento ricevuta**: è la trasformazione che gestisce l’eventuale allegato pdf all’email precedente

Sul lato destro abbiamo

**Società**: è la selezione della società per la quale stiamo impostando la configurazione

**Trasformazione email documento**: è la trasformazione che gestisce l’invio del link al cliente

**Trasformazione pdf documento**: è la trasformazione che gestisce l’invio di un eventuale pdf allegato all’email (es. il pdf della fattura da pagare)

Alla base della maschera, invece, abbiamo le stringhe di connessione e le chiavi specifiche da memorizzare per rendere operativo il collegamento.

### Tipi pagamento

Nella tabelle dei **tipi pagamento** dobbiamo collegare quali di questi siano da collegare al relativo fornitore dei servizi:

![](/img/it-it/treasury/electronicpayments/img3.png)

### Voci di menu

All’interno del menù della Tesoreria > Conti correnti > **Pagamenti Elettronici**:

In questa form abbiamo la visibilità e la gestione di tutti i flussi di scadenziario che possiamo gestire per il pagamento elettronico:

![](/img/it-it/treasury/electronicpayments/img4.png)

La maschera si suddivide nei vari tab che identificano i documenti dai quali poter prelevare le scadenze da far pagare:
-	Fatture di vendita
-	DDT di vendita
-	Ordini clienti
-	POS
-	Partite

L’ultima scheda è il **Registro dei pagamenti elettronici**, che presenta la lista di tutte le transazioni elettroniche create e per ognuna ne visualizza il log di avanzamento:

![](/img/it-it/treasury/electronicpayments/img5.png)

### Operatività

Il flusso inizia nella form dei **Pagamenti elettronici**, selezionando le righe ed eseguendo il cambio stati ***Creato***:

![](/img/it-it/treasury/electronicpayments/img6.png)

Questa transizione fa generare una transazione, che contiene il link alla pagina web di pagamento dell’importo.
Una volta che la transazione è stata creata, sarà possibile scegliere tra due opzioni (sempre nella combo box per il cambio stato):

- **Inviata**: farà creare e spedire l’email del link al cliente: l’indirizzo utilizzato è gestito dalla transformation associata alla tipologia, come visto poco sopra, che di default è ripreso dall’indirizzo di spedizione fattura vendita impostato nell’anagrafica del cliente.

- **Annullato**: identificherà che il link precedentemente inserito non è più valido.

Esempio di email inviata dal sistema

![](/img/it-it/treasury/electronicpayments/img7.png)

Le varie impostazioni possono essere personalizzate attraverso le *trasofrmation* coinvolte.

Cliccando sul link ***View and Pay*** si aprirà la pagina web (nell’immagine qui è la versione di test) che consentirà al cliente di effettuare il pagamento:

![](/img/it-it/treasury/electronicpayments/img8.png)

Una volta che il pagamento sarà stato effettuato, o se il link scadrà senza aver dato seguito al pagamento (nell’impostazione standard, in 5 giorni il link scade) il fornitore invierà a Fluentis gli update di stato relativi: lo stato potrà quindi diventare ***Pagato*** o ***Fallito***.

Dopo qualche ulteriore giorno, il fornitore bonificherà all’azienda l’importo, che effettivamente entrerà quindi nella disponibilità finanziaria dell’azienda.

Ulteriore possibilità, quando l’invio è già stato eseguito ma prima che questo venga pagato, è quello di inviare una richiesta di annullamento (Cambio stato in ***Annullato***):

In questo caso Fluentis invierà una richiesta di annullamento del link al fornitore del servizio, che risponderà poco dopo con la conferma dell’avvenuto annullamento.

Se la transazione è in stato *Fallito* (cioè il pagamento, non annullato, non è stato effettuato dal cliente), l’utente avrà modo di eseguire due ulteriori transazioni: 

- portarlo in Annullato, che chiude le possibilità di gestione,  
- tornare ad eseguire una nuova creazione di un nuovo link, che avrà il suo percorso a se stante.

Tramite il pulsante **Registro dei pagamenti elettronici** è possibile aprire una form nella quale visualizzare la storia della singola transazione:
Da questa form è possibile lanciare il report dell’allegato inviato al cliente.

NB.: una volta che le scadenze sono state gestite in una transazione, non sarà più possibile ricalcolarle nel documento di origine. Al momento non è previsto una modalità di eliminazione del link e quindi di riapertura del documento. 

![](/img/it-it/treasury/electronicpayments/img9.png)