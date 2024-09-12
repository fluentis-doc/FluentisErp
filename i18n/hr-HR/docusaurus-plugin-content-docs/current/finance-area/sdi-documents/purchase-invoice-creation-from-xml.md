---
title: Creazione fattura di acquisto da xml
sidebar_position: 4
---

Il bottone **Creazione fattura di acquisto** è disponibile nella ribbon bar del Registro documenti Sdi, accessibile da Applications > BizLink > Documenti SDI > Documenti acquisto in entrata.

:::note Nota
Per attivare il bottone si deve settare da SQL nella tabella fluentis.SDI_CompanyConfiguration il flag SDICFC_PurchaseInvoiceCreation.
:::

Una volta selezionata una riga, esso permette di creare una fattura nei documenti del ciclo passivo dopo aver importato o ricevuto da FBH il documento sdi in formato xml. 
E' quindi possibile procedere per poterla agganciare all’evasione di DDT e ordini ai quali fa riferimento.

Una volta cliccato il bottone di Creazione fattura di acquisto, si aprirà una finestra in cui indicare il conto del fornitore da utilizzare. Se il conto non esiste, sarà possibile crearlo.
Una volta confermato il conto, si aprirà un’ulteriore finestra Valori da utilizzare, nella quale vengono richiesti i seguenti dati:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Tipo fattura di acquisto:** indicare la tipologia di documento da creare;

**Articoli:** indicare gli articoli che andranno a far parte della fattura di acquisto;

**IVA:** indicare l’aliquota da applicare;

**Tipo pagamento:** contiene la tipologia di pagamento da inserire nel documento per il fornitore.

Tutti questi dati possono essere impostati come default da proporre per le volte successive con il flag **Salva impostazioni**, presente accanto ad ogni dato da utilizzare.

Una volta impostati tutti i campi e premuto OK, si aprirà la fattura di acquisto creata; essa avrà la tipologia, l’articolo e l’IVA prescelti. Se l’articolo non viene riconosciuto come codificato, verrà inserito un articolo non codificato. 
Gli altri dati vengono presi di default dall’anagrafica del fornitore. È possibile modificare manualmente la fattura e salvarla.

---

Per la creazione di fattura con **ARTICOLI CODIFICATI** (riconoscimento automatico delle anagrafiche articoli presenti su Fluentis) è necessario procedere come segue al fine di permettere il riconoscimento, diversamente sarà creata una fattura con righe di tipo 2 (non codificato).

Le anagrafiche articolo potranno avere una codifica interna anche diversa da quella usata dal fornitore che sta inviando la fattura.

Esempio: Codice - MATCH1  Descrizione - PT 2,5 BU
Dentro questa anagrafica dovrà essere valorizzata la sezione del *fornitore preferenziale* con indicazione del fornitore in questione e relativa codifica adottata dal fornitore per questo articolo.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

Il fornitore potrebbe adottare un tipo di codifica o anche più di uno come visibile nell'immagine.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

Ad esempio una codifica EAN o di altro tipo.

:::danger Attenzione
Verrà letta la prima codifica presente nel documento xml, nell'esempio la codifica di tipo SA mentre la codifica EAN sarà ignorata, dunque dovrà essere gestito questo primo riferimento
:::

All'interno dell'anagrafica del fornitore dovrà dunque essere inserito il codice del tipo codifica valido per il fornitore stesso (tab *Informazioni fiscali*)

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

Se le configurazioni vengono fatte correttamente il risultato della creazione della fattura è il seguente, dove si può notare che è presente una riga non codificata per le spese di trasporto non previste a priori.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

Nella ribbon bar della testata è presente il bottone **Sdi – Chiusura documenti** che permette di agganciare un ddt di acquisto alla fattura di acquisto appena creata. 

Una volta cliccato il bottone si aprirà una finestra in cui sono presenti dei filtri da impostare per avere una ricerca più mirata dei ddt di acquisto da abbinare: è possibile inserire il Tipo DDT di acquisto, il numero, il Fornitore, ecc.

Premendo il tasto Ricerca, nelle griglie sottostanti verranno presentati i ddt di acquisto sulla sinistra, e le fatture di acquisto sulla destra, che è possibile abbinare. 

Selezionando i documenti o le singole righe nella griglie e cliccando il tasto **Collegamenti** nella ribbon bar, verrà effettuato il collegamento tra i documenti. 

Uscirà una finestra per avvisare l’Operazione completata ed un’altra finestra Riepilogo Sdi –
Documenti di chiusura con i dettagli del collegamento


![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

Da questo momento il ddt di acquisto e la fattura sono collegati. È possibile verificare il collegamento all’interno della Fattura di acquisto, che contiene il riferimento al ddt nel tab Articoli