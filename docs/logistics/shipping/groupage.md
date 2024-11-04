---
title: Groupage
sidebar_position: 5
---

In questo tab vengono inserite tutte le informazioni relative al **gruopage**.      
Questo consiste nel raggruppare diverse spedizioni di merci provenienti da mittenti differenti, ma destinate alla stessa area geografica, in un unico carico o container. In questo modo, è possibile sfruttare al meglio lo spazio disponibile nei mezzi di trasporto (come camion, container marittimi o aerei) e offrire un servizio più economico rispetto alla spedizione di singole partite di merci.

Il tab è suddiviso in due sezioni principali:

## Spedizioni groupage

In questa griglia vengono inserite le informazioni relative alle spedizioni contenute in questo **groupage**, quindi per inserire una nuova spedizione nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar. 

Le colonne disponibili sono le seguenti e raggruppate per:

Spedizione 
- **Numero riga**: indica il numero delle riga della spedizione e viene inserito automaticamente;
- **Data inizio**: indica la data / ora di inizio della spedizione;
- **Data fine**: indica la data / ora di fine della spedizione;
- **Ore pianificate**: indica la durata in ore della spedizione e viene calcolato automaticamente in base alla data inizio e fine;
- **Numero di tracking**: indica il numero di tracking della singola spedizione; se indicato nel tab testata, il numero di tracking viene proposto in tutte le spedizioni create, ovviamente può sempre essere modificato manualmente dall'utente.

Indirizzo del luogo di carico
- **Provenienza**: indica la ragione sociale / nome del luogo di carico;         
- **CAP**: indica il CAP del luogo di carico;
- **Città**: indica la città del luogo di carico;
- **Provincia**: indica la provincia del luogo di carico;
- **Indirizzo del luogo di carico**: indica l'indirizzo del luogo di carico. Questo viene valorizzato di default con l'indirizzo della società, dal quale normalmente dovrebbero partire le merci, indicato anche nella testata del documento.

Indirizzo del luogo di destinazione
- **Destinazione**: indica la ragione sociale / nome del luogo di destinazione;            
- **CAP**: indica il CAP del luogo di destinazione;
- **Città**: indica la città del luogo di destinazione;
- **Provincia**: indica la provincia del luogo di destinazione;
- **Indirizzo del luogo di destinazione**: indica l'indirizzo del luogo di destinazione. Questo viene valorizzato in automatico prendendolo dall'anagrafica del cliente, ma può comunque essere modificato manualmente dall'utente.

Automezzo
- **Automezzo**: indica l'automezzo con il quale verrà effettuata la spedizione;
- **Autista assegnato**: indica l'autista che effettuerà la spedizione.

Inoltre, per ciascuna riga del groupage, è possibile aprire espandere il relativo dettaglio di riga cliccando sul **+**, in modo da poter gestire anche i seguenti campi relativamente al luogo di carico:
- **Telefono**: permette di inserire il numero di telefono relativo al luogo di carico;
- **E-mail**: permette di inserire l'indirizzo e-mail relativo al luogo di carico;
- **Note**: permette di inserire una nota libera relativa al luogo di carico;
e alla destinazione:
- **Telefono**: permette di inserire il numero di telefono relativo alla destinazione;
- **E-mail**: permette di inserire l'indirizzo e-mail relativo alla destinazione;
- **Note**: permette di inserire una nota libera relativa alla destinazione.

## Articoli di spedizione

In questa sezione vengono visualizzati tutti gli articoli contenuti all'interno della spedizione selezionata nel gruopage.         
Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.            
In alternativa, è anche possibile aggiungere gli articoli prendendoli direttamente dagli ordini clienti tramite la procedura **Trasferimento articoli**.           
Premendo il pulsante **Trasferimento articoli**, si apre la form denominata **Collegamento degli ordini di vendita**, nella quale di default viene già proposto il cliente della spedizione nel relativo filtro. Quindi premendo il pulsante **Ricerca** verranno visualizzati sulla griglia di destra tutti gli articoli degli ordini non evasi e parzialmente evasi di quel cliente.        
Sulla parte sinistra della form, sono visualizzate le griglie relative alle *spedizioni goupage* e agli *articoli di spedizione* con i dati inseriti nel form principale del gruopage.         
A questo punto, l'utente può, con il drag & drop, trascinare gli articoli dalla griglia di destra direttamente sulla singola spedizione ed in automatico verranno inseriti nella griglia *articoli di spedizione* relativa a quella spedizione.
Inoltre, è anche possibile aggiungere articoli proveniente da ordini di altri clienti, semplicemente andando a variare il valore del filtro *Cliente* e premendo nuovamente **Ricerca**.
Una volta terminato di aggiungere tutti gli articoli, l'utente premendo il pulsante **Acquisizione** confermerà tutte le modifiche.       

Le colonne disponibili sono le seguenti:   
- **Numero riga**: indica il numero riga dell'articolo inserito nel gruopage; 
- **Classe**: indica la classe dell'articolo; 
- **Articolo**: indica il codice dell'articolo; 
- **Variante articolo**: indica la variante dell'articolo; 
- **Descrizione variante**: indica la descrizione variante dell'articolo; 
- **Unità di misura**: indica l'unità di misura dell'articolo;
- **Marca**: visualizza il valore della marca inserita nell'anagrafica articoli;
- **Quantità**: indica la quantità dell'articolo;
- **Unità di misura alternativa**: indica l'unità di misura alternativa dell'articolo;           
- **Quantità alternativa**: indica la quantità dell'articolo;            
- **Volume**: indica il volume dell'articolo;             
- **Peso netto**: indica il peso netto dell'articolo;
- **Peso lordo**: indica il peso lordo dell'articolo;
- **Conto ordine cliente**: visualizza il conto dell'ordine cliente a cui appartiene l'articolo;
- **Tipo ordine cliente**: visualizza il tipo dell'ordine cliente a cui appartiene l'articolo;
- **Data ordine cliente**: visualizza la data dell'ordine cliente a cui appartiene l'articolo;
- **Fattura o DDT**: visualizza il riferimento della fattura / DDT rispettivamente creati premendo i pulsanti **Fattura** o **DDT**; il valore viene visualizzato nel formato tipo documento / data documento / numero documento;
- **Riferimento picking**: visualizza il riferimento del picking creato premendo il pulsante **Picking**; il valore viene visualizzato nel formato tipo documento / data documento / numero documento.

*Pulsanti specifici*

- **Nuova groupage**: permette di inserire una nuova spedizione nel gruopage; 
- **Elimina groupage**: permette di eliminare la spedizione selezionata dal gruopage; 
- **Trasferimento articoli**: permette di aggiungere gli articoli alla spedizione prendendoli direttamente dagli ordini clienti;
- **DDT**: permette di creare automaticamente i [DDT](/docs/sales/sales-delivery-notes/general-overview) per le spedizioni selezionare nel gruopage;
- **Fattura**: permette di creare automaticamente le [Fatture](/docs/sales/sales-invoices/general-overview) per le spedizioni selezionare nel gruopage;
- **Picking**: permette di creare automaticamente i [Picking](/docs/logistics/picking/picking-intro) per le spedizioni selezionare nel gruopage.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

