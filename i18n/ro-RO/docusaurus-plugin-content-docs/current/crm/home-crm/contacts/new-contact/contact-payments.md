---
title: Pagamenti contatto
sidebar_position: 16
---

Questa è una delle tab dei **Contatti CRM**.

In questa tab sono configurabili i pagamenti da proporre nei documenti relativi al contatto. 


### Tipi pagamento

La sezione fondamentale del tab **Pagamenti** e serve per impostare la logica di calcolo delle scadenze. Si selezionano il **Tipo di pagamento** e la **Soluzione di pagamento** (entrambe si trovano in *Configurazione > Tabelle > Impostazioni generali*).

**Percentuale**: consente di definire la quota parte (in percentuale) del valore totale del pagamento (o incasso) da gestire con la condizione di pagamento (come combinazione di tipo pagamento e soluzione di pagamento) impostata nella riga.

In caso di percentuale inferiore a 100 vanno, pertanto, create tante righe con percentuali che sommano 100.

*Esempio*:<br />
- 50% Contanti a vista fattura e 50% Bonifico bancario a 30 gg.<br />
- 50% Contanti a vista fattura; 25% Bonifico bancario a 30 gg; 25% bonifico bancario a 60 gg.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attenzione</u>: se la soluzione di pagamento prevede più di una scadenza si compilerà in questo modo: esempio 50% contanti a vista e 50% bonifico bancario a 30 - 60 gg

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banca (d'appoggio)**: rappresenta la banca di riferimento per le partite.  
- Per l' anagrafica cliente:
> - se tipo pagamento è ricevuta bancaria,  va indicata la banca del cliente;
> - se tipo pagamento è bonifico bancario va indicata la banca della società in uso  (in modo da avere in stampa dei documenti i riferimenti di pagamento per il cliente); 

Il campo si compila tramite una combo box (**Banca**) collegata alla tabella *Banca d'appoggio*. All'interno di questa tabella è possibile inserire sia la banche della società, sia le banche della controparte (cliente o fornitore). Inoltre è possibile inserire sia righe complete di codice IBAN e/o SWIFT (consigliato per le banche della società) sia righe complete di soli codice ABI e CAB (consigliato per le banche di controparte per le quali IBAN e SWIFT possono essere indicati nei campi della griglia presente in anagrafica).

Se la riga presente nella tabella Banca d'appoggio è completa di IBAN e/o SWIFT, oltre che di ABI e CAB, richiamando tale riga tramite la combobox i dati saranno riportati nella griglia in anagrafica, diversamente, saranno riportati solo ABI e CAB, ma sarà sempre possibile aggiungere i dati mancanti direttamente nella griglia. Ciò è consigliabile per le banche di controparte al fine di evitare di codificare nella tabella Banca d'appoggio troppe righe utilizzate solo per un unico cliente. E' preferibile indicare solo i dati dello sportello bancario (ABI e CAB) presso il quale potrebbero avere il conto corrente diversi clienti.

L'inserimento di una banca può essere eseguita anche attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift.

**Descrizione Banca**: campo collegato al precedente campo.

**Codice Banca**: campo NON utilizzato in Italia. Per localizzazioni estere può accogliere un codice bancario alternativo rispetto al sistema ABI CAB.

### Banca d'appoggio

Nella griglia si possono inserire le banche d'appoggio della controparte.

In questo modo è possibile inserire delle banche d'appoggio alternative (sempre di controparte).  Un altro esempio può essere quello di un cliente che paga con bonifico (e quindi nella griglia Tipo Pagamento si inserisce la banca della nostra società) ma del quale si vuole inserire la sua banca d'appoggio in caso di pagamento di note di accredito.

L'inserimento di una banca può essere eseguita attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift.

