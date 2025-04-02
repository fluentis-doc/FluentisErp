---
title: Nuovo Intervento
sidebar_position: 2
---

I dati da inserire sono:

**Tipo intervento**: contiene la [tipologia di Intervento](/docs/configurations/tables/project-management/intervention-type/);

**Cliente**: contiene il cliente destinatario dell’intervento;

**Anno/Numero/Data**: contiene i dati dell’intervento; in caso di modifica data, verrà chiesto se aggiornare anche tutte le altre date del documento (spese, servizi)

**Risorsa**: indica la risorsa responsabile dell’intervento, proposta di default sulle nuove righe. 

**Dipendente**: indica il dipendente collegato all'anagrafica risorsa

Sono presenti specifiche tab.

## Testata

In questa tab sono contenute informazioni generali sull’intervento, come la **Divisa**, il **Cambio**, eventuali **Annotazioni**, l’**Audit Trail**. È presente un eventuale **Listino** collegato, il flag che indica se l’intervento è **Fatturato** e lo **Stato intervento**.

Gli stati previsti per l'intervento sono i seguenti: 
- <u>Inserito</u>: stato iniziale dell'intervento, che indica un documento appena inserito. 
- <u>Da approvare</u>: stato utilizzato per dare visibilità da parte della risorsa di aver inserito tutti i dati richiesti, effettua il ricalcolo delle spese per le condizioni inserite nell'intervento, aggiungendo eventuali indennità di trasferta etc. Viene generato il Piano di fatturazione per dare un'anteprima di cosa verrà fatturato. 
- <u>Approvato</u>: stato utilizzato dalla persona responsabile di verificare gli interventi dichiarati dalle risorse, per il quale si genera la relativa dichiarazione attività per la risorsa. 
- <u>Controllato</u>: stato per il quale l'intervento si considera fatturabile.
- <u>Fatturato</u>: intervento fatturato. Questo stato non può essere assegnato manualmente. 
- <u>Parzialmente Fatturato</u>: stato che identifica un intervento con alcune righe di invoice plan fatturate, ed altre no. 
- <u>Chiuso forzatamente</u>: stato che identifica un intervento chiuso forzatamente che quindi non è stato nè verrà mai fatturato. E' possibile assegnare anche una causale di sospensione personalizzata.
- <u>Sospeso</u>: stato che identifica un intervento temporaneamente sospeso, escluso dalla fatturazione, ma che potrà essere ripristinato più avanti. 

**Tab Pagamenti**, **Tab sconti** permettono la configurazione di dati utili alle fatture che verranno emesse.

**Extra data**: eventuali extradata inseriti per l'intervento

**Documenti allegati**: eventuali documenti allegati all'intervento


## Spese
Questa si suddivide in tre ulteriori sottogruppi:

**Spese intervento sostenute** : indica le spese sostenute dalla risorsa, che di norma vengono proposte dall'anagrafica risorsa se presenti. Verranno inserite nella dichiarazione attività-tab Oneri di viaggio generata dall'intervento e potranno eventualmente essere marcate anche come da fatturare. Ogni riga potrà avere un suo allegato, ad es. un giustificativo di spesa. 

**Spese intervento da fatturare**: indica le spese da fatturare al cliente, che di norma vengono proposte dall'anagrafica cliente se presenti. Possono anche derivare da spese sostenute marcate da fatturare. Verranno incluse nel Piano di fatturazione.
Saranno selezionabili soltanto le spese configurate appositamente come spese di tipo Viaggio. 

**Altre spese**: altre spese generiche da includere nel Piano di fatturazione. 

Contiene eventuali Oneri di viaggio, identificati da:

- **Risorsa**: risorsa che ha sostenuto la spesa, di default viene proposta la risorsa della testata;
- **Tipo spese**: contiene la tipologia di onere, con la relativa **Descrizione**;   
- **Data spesa**: data nella quale imputare la spesa;     
- **Importo spesa**: è possibile indicare direttamente l’importo della spesa, per esempio nel caso si trattasse del rimborso di un pasto;     
- **KM**: contiene i chilometri percorsi con il relativo **Costo Km**;    
- **Costo orario**: costo orario nel caso di spese di tipo "Ore Viaggio";    
- **Data/Ora di partenza**: contiene la data e l’ora di partenza;    
- **Data/Ora di arrivo**: contiene la data e l’ora di arrivo;    
- **Ore viaggio**: indica le ore viaggio calcolate in base a data e ora;    
- **Valore forfait**: in alternativa al Importo spesa è possibile avere un valore forfait. Generalmente viene compilato in anagrafica risorsa e proposto in automatico; non sarà modificabile dall'utente. Utilizzato nei casi in cui i rimborsi spettanti alla risorsa sono pre accordati e non modificabili dall'utente;
- **IVA**: indica l’IVA da applicare;      
- **Costo totale**: campo calcolato in base ai dati precedentemente inseriti che contiene il costo totale della spesa (es. km per costo km, ore viaggio per costo orario, etc);     
- **Da rimborsare**: questo flag indica se l’onere è da rimborsare; 
- **Allegati** indica se la riga contiene degli allegati associati;
- **Nota**: eventuali note inserite dall'utente;

 
 Nel caso di Tipo Intervento con flag Esterno abilitato, le spese previste per la risorsa non verranno proposte nel tab Spese Sostenute. Invece le spese inserite nella tab Spese-Intervento in anagrafica cliente verranno proposte nella tab Spese da fatturare in base alle configurazioni. 

Bottone **Spese da Fatturare**: presente nella tab "Spese intervento sostenute", selezionando una spesa e cliccando sul bottone, questa verrà portata in automatico nella tab "Spese Intervento da Fatturare". Se il tipo spesa è già presente nelle spese da fatturare oppure il cliente ha configurato un forfait, verrà chiesto all'utente la converma per procedere con il ricalcolo. 

Bottone **Ricalcola spese**: da utilizzare solo all'occorrenza, la stessa procedura viene già eseguita al cambio stato intervento da "inserito" in "da approvare". 
La procedura effettua: 

1. Calcolo **spese vive** da fatturare al cliente: se in anagrafica cliente sono state configurate spese con abilitato il flag "spesa viva" e la stessa spesa è stata dichiarata dalla risorsa nelle spese sostenute, questa verrà portata in automatico come da fatturare;
> Nel caso di spese con tipo diverso da distanza/ore viaggio, verrà preso l'importo spesa dichiarato dalla risorsa e portato nelle spese da fatturare;

> Nel caso di spese con tipo distanza / ore viaggio, è possibile indicare in anagrafica cliente il costo km/ costo orario, e con il ricalcolo verrà fatto un merge dei km / ore dichiarati dalla risorsa ed i costi configurati in anagrafica cliente, ottenendo una spesa completa di tutti i dati e del totale;
2. Calcolo **spese forfait**: se in anagrafica cliente sono state configurate spese di tipo forfait con condizioni per risorsa/per giorno, queste verranno ricalcolate in automatico 
:::note[Esempio]
Nell'intervento della durata di una giornata sono presenti 3 risorse, quindi sono dichiarate 3 righe di servizio. 
La spesa forfait è configurata come segue: 

Autostrada: 100 - una tantum
Pranzo: 50 - per persona per giorno

La spesa forfait da fatturare risulterà in totale 250 (100 autostrada fissi, 50 pranzo per ogni risorsa). Il calcolo verrà effettuato al cambio stato intervento da "Inserito" in "Da approvare" oppure utilizzando il bottone Ricalcola Spese. 
:::

3. Calcolo **Spese intervento da fatturare**: se modificate dall'utente, chiederà conferma prima di procedere, ed in caso affermativo ripristinerà le spese da fatturare previste per il cliente.
4. Calcolo dell'**indennità** di trasferta per la risorsa;

:::note[Esempio] 
 In anagrafica risorsa si imposta come limite "2" ore di viaggio
 scatterà il calcolo indennità di trasfera solo se la somma dei servizi + ore di viaggio supera oltre 2 ore le ore ordinarie:

 8 ore ordinarie

 3 ore di viaggio

 --> verrà aggiunta 1 riga nelle spese con l'importo stabilito per la trasferta
 
 6 ore ordinarie

 3 ore di viaggio

--> non ci sarà alcuna indennità di trasferta, in quanto il minimo oltre alle 8 ore sono 2 di viaggio (in questo caso invece avremmo 9 ore, quindi 1 sola ora oltre alle 8 ordinarie)

::: 

## Tab Servizi

Contiene l’elenco dei servizi previsti nell’intervento. Ogni riga può essere relativa ad un servizio codificato oppure non, e i relativi dettagli: 

- Data effettiva servizio: indica la data in cui è stato svolto il servizio. Può essere diverso dalla data in testata, in quanto in un intervento possono esserci più servizi svolti in diverse giornate. Questa data verrà utilizzata per la generazione della dichiarazione attività della risorsa;
- **Ora inizio**,**Ora inizio pausa**, **Ora fine pausa**, **Ora Fine** : orari in cui è stato svolto il servizio;
- **Smartworking** flag che si abilita in automatico in base alle configurazioni inerenti allo Smartworking nell'anagrafica risorsa. Verrà utilizzato poi nell'elaborazione cedolini paga, per identificare le giornate in cui è stato svolto lo smart working. Verrà di conseguenza impostato nella dichiarazione attività generata dall'intervento;
- **Servizio sovrapposto**: flag che si abilita in automatico se rileva la presenza di altri servizi o dichiarazioni attività per la risorsa nella stessa giornata o fascia oraria;
- **Minuti Sovrapposti** : è possibile indicare manualmente a cura dell'utente il tempo effettivo per cui le attività si sovrappongono;
- **Tempo effettivo**: totale ore ottenuto dal calcolo delle ore dichiarate nel servizio;
- **Descrizione servizio**: descrizione dell'articolo inserito nel caso di riga di tipo Codificato;
- **Descrizione attività svolta**: descrizione inserita dalla risorsa in merito al servizio svolto, e nel caso di selezione progetto, descrizione della riga di Progetto. verrà poi utilizzata per la descrizione della Dichiarazione attività generata in automatico dall'intervento. Con doppio click sul campo è possibiel ingrandire l'area in cui scrivere. 
- **Unità di misura**: UM dell'articolo oppure modificata manualmente dalla risorsa, di solo tipo temporale
- **Quantità**: se correttamente configurati i parametri di Progetto e la conversione tra diverse UM, il tempo effettivo verrà convertito nella corrispondente UM. 

:::note Esempio 
Servizio con tempo effettivo 8 ore, unità di misura servizio "GG-giorni".

Nei parametri generali del progetto l'unità di misura per i giorni è "GG-giorni" e l'unità di misura per le ore è "HH-ore". Le Ore giornaliere configurate nei parametri sono 7 per la giornata in questione.

La quantità verrà segnata in automatico come 1,14 GG. (Ottenuta dalla conversione di 1 GG = 7 ore)
:::

**Prezzo Unitario**, **Prezzo totale**, **Importo totale**, **Iva**, **Sconti** : dati relativi al prezzo ed all'IVA ottenuti dalle apposite impostazioni di listino del cliente ed articolo;
**Risorsa** : risorsa che ha svolto il servizio, di default proposta quella presente in testata, ma comunque modificabile;
**Progress percentuale stima del lavoro**: percentuale di lavoro eseguito, aggiorna il valore corrispondente nel progetto;
**Fatturato vendite**: fatturato vendite assegnate in base alla priorità dall'anagrafica articolo o anagrafica cliente;
**Progetto**: ereditato dalla testata intervento se presente, oppure associato manualmente dall'operatore. Aggiorna l'eventuale prezzo se il servizio non è valorizzato, determina la categoria attività;
**Ticket**: ticket di riferimento del servizio;
**Anagrafica impianti**: aangrafica impianti EAM collegata al servizio; 
**Dipendente**: dipendente associato alla risorsa;
**Fattura di Anticipo**: Fattura di anticipo presente in un progetto (anche diveso da quello assegnato al servizio) e collegata al servizio, che quindi comporterà l'erosione del residuo della totale fattura di anticipo, oltre al corretto storno in fatturazione;
**Nota**: eventuali note del cliente. 
**Fatturabile**: se abilitato identifica il servizio che verrà considerato nel piano di fatturazione. Il valore del flag è definito dai documenti a monte da cui è stato generato, oppure dal progetto, oppure dalla categoria attività;
**Prezzo Manuale** : flag che identifica se il prezzo proposto da listino o procedure è stato modificato manualmente dall'utente;
**Attività a valore aggiunto**: flag che identifica i servizi a valore aggiunto, a scopo statistico. Valorizzato in base al progetto, se non presente in base alla configurazione della categoria attività. Può essere modificato manualmente dall'utente. 

Sono presenti due ulteriori tab: **Documenti collegati** ed **Extra Data**, liberamente compilabili.

## Tab Materiali

Questa tab contiene i materiali utilizzati nell’intervento, che possono comparire in quanto collegati con i Servizi precedentemente inseriti oppure possono essere compilato liberamente. I Materiali presentano i relativi dati quali il Codice articolo e la relativa Descrizione, la Quantità, il Prezzo, ecc. 
Selezionando una riga materiale, è possibile compilare le tab sottostanti **Totale Materiali**(che contiene dati quali il Magazzino di riferimento, il Listino o eventuali Sconti) ed **Extra Data**. 

I pulsanti specifici della ribbon bar sono:

![](/img/neutral/common/delete.png) Cancella materiali: cancella i materiali selezionati;

![](/img/neutral/common/new.png) Nuovo materiale: inseisce una nuova riga materiale;

![](/img/neutral/common/view-material.png) Visualizza i materiali senza servizi: fa comparire nella griglia solo i materiali senza servizi collegati;

![](/img/neutral/common/view-material.png) Visualizza i materiali collegati con i servizi: fa comparire solo i materiali collegati con i servizi;

![](/img/neutral/common/view-material.png) Visualizza tutti i materiali: fa comparire tutti i materiali.

![](/img/neutral/common/delete-discount.png) Cancella sconti materiali: cancella gli sconti collegati al materiale selezionato.	


## Tab Riepiloghi

Questa tab contiene i Riepiloghi dell’intervento, che possono essere consultati.
È possibile inoltre inserire eventuali spese finali indicandone il Tipo, l’Importo, la presenza In fattura o meno con il relativo flag, l’IVA. Questi dati modificheranno i riepiloghi sulla destra.

È possibile infine inserire delle Note finali.

## Tab Piano di fatturazione
Il Piano di fatturazione (oppure Invioce Plan) contiene un'anteprima della fattura che verrà generata dall'intervento. Questo tab viene calcolato in automatico all'avanzamento di stato intervento, da Inserito in Da Approvare. Può però essere ricalcolato in qualsiasi momento utilizzando il bottone "Genera Piano di fatturazione".

Le righe presenti sono inserite partendo dai dati presenti in: servizi, materiali, spese da fatturare e altre spese. 
Le righe di servizi e materiali potranno avere Tipo Riga "1 o 2 - codificato o non codificato", mentre le spese avranno tipo riga "3-spese"
Le righe avranno corrispondenza 1-1 tra servizi/materiali/spese ed invoice plan. 
Solo nel caso dei servizi le righe potranno essere divise:

es. un servizio ha una durata per più di 8 ore. Nell'invoice plan se previsto il calcolo del fuori orario, la riga del servizio verrà divisa in 2: 

1. riga servizio per 8 ore, con tutti i riferimenti e prezzo inseriti nella tab servizi
2. riga di fuori orario per le ore eccedenti le 8, con tariffa assegnata da listino, e codice articolo diverso a seconda delle configurazioni (parametri progetto o fascia oraria dove è previsto un cambio articolo)

Ogni riga ha anche un suo stato: 
1. Da fatturare: la riga verrà considerata dalla procedura di valorizzazione interventi;
2. Sospeso: la riga NON verrà considerata dalla procedura di valorizzazione interventi fino a quando il suo stato non verrà ripristinato in Da fatturare;
3. Escluso: la riga NON verrà considerata dalla procedura di valorizzazione interventi in alcun caso;
4. Fatturato: la riga è già stata valorizzata ed è quindi già inclusa in una fattura di vendita. 

Gli altri dati presenti in riga sono: 
- codice articolo / variante / descrizione variante / descrizione articolo che sono dati relativi al codice articolo utilizzato
- Descrizione per attività pianificata / sprint, data effettiva servizio e  tempo effettivo: dati ottenuti dalla tab servizi, riportano la descrizione inserita dall'utente relativamente al servizio svolto ed alla data e tempo effettivi del servizio.
- valore arrotondamento: se previsto dalle regole di fatturazione, il monte ore calcolato nei servizi potrà essere arrotondato. Il valore da aggiungere per ottenere il totale desiderato, è indicato in questo campo. 
- unità di misura: unità di misura di riferimento per la riga;
- Quantità: quantità in base all'unità di misura;
- Prezzo: prezzo stabilito nei servizi/materiali/spese oppure ricalcolato per il fuori orario
- Imposta: aliquota iva applicata;
- E' fuori orario: flag che indica se la riga in questione è stata calcolata in automatico e deriva da un superamento degli orari indicati nelle fasce orarie.


Ogni riga ha anche ulteriori dettagli: 
ognuno di questi sono ereditati dalle tab originarie (servizi/materiali/spese) ma possono essere poi modificati. 
- fatturato vendite: fatturato vendite indicato nel progetto, e se non presente fatturato dell'articolo;
- articolo fattura: articolo che verrà inserito in fattura. Questo campo viene utilizzato quando ad es. si abilita l'opzione per gestire le ore di viaggio come ore servizio. In questo caso la riga nell'invoice plan avrà l'articolo della spese di viaggio, mentre nel campo Articolo fattura troveremo l'articolo servizio a cui sono state accorpate le ore di viaggio. 
- categoria attività: categoria attività derivata dal progetto o manualmente; 
- ticket: numero ticket associato alla riga;
- anagrafica impianti: anagrafica impianto associato alla riga; 
- dipendente: anagrafica dipendente associata alla riga, derivato dalla risorsa assegnata. 
- Progetto: riga progetto di riferimento; 
- Fattura di anticipo: fattura di anticipo presente nel progetto, e legata alla riga del piano di fatturazione. Indica che la riga concorrerà all'erosione dell'importo e quantità della fattura di anticipo. 
- causale di sospensione: nel caso di stato riga "Sospeso", è possibile indicare il motivo di sospensione; 
- Annotazione: annotazione libera; 
- Sconti e Tipo scaglione: sconti e relativo scaglione da applicare sul valore della riga, presenta le stesse modalità utilizzate negli altri documenti
- Listino: listino di riferimento per la riga
- Prezzo manuale: flag che si abilita in automatico nel caso di modifica manuale del prezzo in riga, rispetto a quello calcolato in automatico.



Il piano di fatturazione viene generato con regole specifiche che possono essere configurate a livello di cliente oppure parametri progetto. 
La priorità con cui vengono prese le informazioni è la seguente: 

- verifica le configurazioni presenti in anagrafica cliente: se sono presenti, verifica anche la corrispondenza per tipo intervento e sede di lavoro (dato presente nella risorsa intestataria dell'intervento). 
Nel caso di configurazioni con tipo intervento nullo, o tipo luogo di lavoro nullo, si intendono valide per tutti i tipi intervento/sede di lavoro. 

- se nel cliente non viene trovata la corrispondenza, la ricerca si estende ai [parametri progetto](/docs/configurations/parameters/projects/project-parameters/) > interventi > Impostazioni valorizzazione interventi

Le regole impostate a livello dei parametri generali, sono valide per tutti i clienti oppure per determinate categorie commerciali di clienti. 
Se il campo categoria commericale risulta vuoto, si intende valido per tutte le categorie. 
In seguito vengono cercate le configurazioni per tipo intervento (corrispondenza precisa oppure tipo intervento nullo) e per Sede di lavoro (corrispondenza precisa oppure Sede di lavoro nullo)


In base a queste corrispondenze verranno utilizzate le configurazioni più consone. Se non si trova alcuna corrispondenza, il piano di fatturazione rimarrà vuoto. 

##Esempi di calcolo piano di fatturazione
Poniamo che la configurazione attuale per gli esempi a seguire sia:

>Fascia oraria: lun-ven 08.00-20.00 massimo giornaliero 8 ore
>Arrotondamento: fino ad 8 ore si arrotonda di 2 in 2, dalle 8 ore in poi si arrotonda alla mezz'ora. 
>Ovvero: servizio 3.15 h --> diventeranno 4 ore fatturabili; servizio di 7.30h --> diventeranno 8 ore fatturabili; 8.15 di servizio --> diventeranno 8.30 fatturabili. 
>Ore di viaggio incluse nei servizi: abilitato

Gli orari così impostati, non indicano che l'attività si svolgerà dalle 08.00 alle 20.00, ma che nell'arco di questo orario si possono svolgere al massimo 8 ore dopo le quali scatterà il calcolo del fuori orario. Così come lo superamento di questa fascia oraria farà scattare il calcolo del fuori orario, anche se inferiore alle 8 ore. 


:::note[Esempio 1] 

:::

:::note[Esempio 2]
>Ore di viaggio: data 05/09 - 2 h
>Servizio: data 06/09 - 08.30-12.30/14.00-18.00 - 8 h

>Piano di fatturazione: servizio 06/09 8 h. 
In questo caso le ore di viaggio non sono considerate perchè essendo attiva l'opzione di considerare le ore di viaggio come un servizio, nella giornata del 05/09 non essendoci nessun servizio a cui accorpare le ore di viaggio, queste non sono considerate nel piano di fatturazione. 

:::