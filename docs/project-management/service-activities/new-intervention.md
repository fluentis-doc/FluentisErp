---
title: Nuovo Intervento
sidebar_position: 2
---

I dati da inserire sono:

**Tipo intervento**: contiene la [tipologia di Intervento](/docs/configurations/tables/project-management/intervention-type/);

**Cliente**: contiene il cliente destinatario dell’intervento;

**Anno/Numero/Data**: contiene i dati dell’intervento;

**Risorsa**: contiene la risorsa che effettuerà l’intervento.

Sono presenti specifiche tab.

**Tab Testata**

In questa tab sono contenute informazioni generali sull’intervento, come la **Divisa**, il **Cambio**, eventuali **Annotazioni**, l’**Audit Trail**. È presente un eventuale **Listino** collegato, il flag che indica se l’intervento è **Fatturato** e lo **Stato intervento**: di default questo campo sarà impostato con **In corso**; se lo stato viene modificato in **Controllato** e il Tipo intervento ha il flag **Creazione attività automaticamente**, verranno create le attività relative all’intervento nella **Dichiarazione attività per progetto**.
La Testata contiene a sua volta ulteriori tab.

**Tab Oneri di viaggio**

Contiene eventuali Oneri di viaggio, identificati da:

**Tipo spese**: contiene la tipologia di onere, con la relativa **Descrizione**;    
**KM**: contiene i chilometri percorsi con il relativo **Costo Km**;    
**Costo orario**: è possibile in alternativa indicare il costo orario;    
**Data/Ora di partenza**: contiene la data e l’ora di partenza;    
**Data/Ora di arrivo**: contiene la data e l’ora di arrivo;    
**Ore viaggio**: indica le ore viaggio calcolate in base a data e ora;    
**Importo forfait**: è possibile indicare un importo forfait;    
**IVA**: indica l’IVA da applicare;      
**Costo totale**: campo calcolato in base ai dati precedentemente inseriti che contiene il costo totale dell’onere;     
**In fattura**: indica se l’onere deve comparire in fattura;      
**Importo spesa**: è possibile indicare direttamente l’importo dell’onere, per esempio nel caso si trattasse del rimborso di un pasto;     
**Data spesa**: data nella quale imputare la spesa;     
**Tipo pagamento**: contiene la tipologia di pagamento con la relativa **Descrizione**;     
**Da rimborsare**: questo flag indica se l’onere è da rimborsare. 
 
 Nel caso di Tipo Intervento con flag Esterno abilitato, le spese previste per la risorsa non verranno proposte nel tab Spese Sostenute. Invece le spese inserite nella tab Spese-Intervento in anagrafica cliente verranno proposte nella tab Spese da fatturare in base alle configurazioni. 

**Tab Servizi**

Contiene l’elenco dei servizi previsti nell’intervento. Ogni riga contiene un servizio codificato e i relativi dati riguardanti la Data di inizio e fine, l’Ora di inizio e fine, il Tempo effettivo impiegato, la Quantità, l’Importo, ecc. E’ possibile integrare ulteriori informazioni alle righe nella tab sottostante **Totale Servizi**, quali il Listino, il Fatturato vendite, la Categoria di attività, ecc.

Sono presenti due ulteriori tab: **Documenti collegati** ed **Extra Data**, liberamente compilabili.

**Tab Materiali**

Questa tab contiene i materiali utilizzati nell’intervento, che possono comparire in quanto collegati con i Servizi precedentemente inseriti oppure possono essere compilato liberamente. I Materiali presentano i relativi dati quali il Codice articolo e la relativa Descrizione, la Quantità, il Prezzo, ecc. 
Selezionando una riga materiale, è possibile compilare le tab sottostanti **Totale Materiali**(che contiene dati quali il Magazzino di riferimento, il Listino o eventuali Sconti) ed **Extra Data**. 

I pulsanti specifici della ribbon bar sono:

![](/img/neutral/common/delete.png) Cancella materiali: cancella i materiali selezionati;

![](/img/neutral/common/new.png) Nuovo materiale: inseisce una nuova riga materiale;

![](/img/neutral/common/view-material.png) Visualizza i materiali senza servizi: fa comparire nella griglia solo i materiali senza servizi collegati;

![](/img/neutral/common/view-material.png) Visualizza i materiali collegati con i servizi: fa comparire solo i materiali collegati con i servizi;

![](/img/neutral/common/view-material.png) Visualizza tutti i materiali: fa comparire tutti i materiali.

![](/img/neutral/common/delete-discount.png) Cancella sconti materiali: cancella gli sconti collegati al materiale selezionato.	


**Tab Riepiloghi**

Questa tab contiene i Riepiloghi dell’intervento, che possono essere consultati.
È possibile inoltre inserire eventuali spese finali indicandone il Tipo, l’Importo, la presenza In fattura o meno con il relativo flag, l’IVA. Questi dati modificheranno i riepiloghi sulla destra.

È possibile infine inserire delle Note finali.

