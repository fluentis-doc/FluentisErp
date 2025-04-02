---
title: Testata
sidebar_position: 4
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati:
- **Data inizio**: permette di indicare la data di inizio della spedizione;      
- **Data fine**: permette di indicare la data di fine della spedizione;    
- **Ore pianificate**: indica il totale delle ore necessarie per la spedizione. Viene calcolato automaticamente sulla base della data inizio e fine;

Le informazioni relative al mezzo e all'autista:
- **Automezzo**: permette di selezionare il mezzo con il quale verrà effettuata la spedizione tra quelli indicati nella tabella [Automezzi](/docs/logistics/motorvehicles/motorvehicle);
- **Autista assegnato**: permette di selezionare l'autista che effettuerà la spedizione tra quelli indicati nella tabella [Autisti](//docs/logistics/motorvehicles/motorvehicle-drivers);       
- **Volume**: permette di indicare il volume della spedizione e la relativa unità di misura;
- **Peso netto**: permette di indicare il peso netto della spedizione e la relativa unità di misura;
- **Peso lordo**: permette di indicare il peso lordo della spedizione e la relativa unità di misura;

Le informazioni relative ai beni:
- **Aspetto esteriore dei beni**: permette di selezionare l'aspetto esteriore della merce spedita tra quelli indicati nella tabella [Aspetto esteriore beni](/docs/configurations/tables/logistics/type-of-packaging/);
- **Numero tracking**: permette di indicare il numero di tracking della spedizione. Questo verrà proposto di default per tutte le spedizioni inserite nel tab **gruopage**;
- **Numero totale di colli**: permette di indicare il numero di colli della spedizione.

Le informazioni relative alla valuta:
- **Divisa**: sezione contenente i dati relativi alla [Divisa](/docs/guide/common/glossary/glossary-intro#currency)
- **Data valuta**: indica la [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date)

Le informazioni relative a destinatario e destinazione:
- **Sito produttivo**: permette di scegliere il sito produttivo da cui verrà effettuata la spedizione e riporta in automatico l'indirizzo associato al *Contatto* (inserito nel *Sito di Produzione*) nel l'Indirizzo del luogo di carico della spedizione;
- **Indirizzo del luogo di carico**: all'apertura della form, questo campo viene valorizzato di default con l'indirizzo della società, dal quale normalmente dovrebbero partire le merci. È anche possibile modificarlo manualmente; 
- **Indirizzo del luogo di destinazione**: permette di indicare il luogo di destinazione della spedizione.

Le informazioni relative alla spedizione:
- **Spedizione**: permette di indicare i dati relativi alla [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment);
- **Porto**: permette di indicare i dati relativi al [Porto](/docs/guide/common/glossary/glossary-intro#carriage);
- **Imballo**: permette di indicare i dati relativi all'[Imballo](/docs/guide/common/glossary/glossary-intro#packing).

Eventuali note:
- **Nota**: permette di inserire una nota libera;         
- **Nota iniziale**: permette di inserire un'ulteriore nota libera.     

Ed infine le informazioni relative allo stato di evasione della spedizione:
- **Stato evasione**: quando la spedizione è evasa tramite i documenti DDT o fatture, il suo stato evasione cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*; l'utente può forzare l'evasione di un ordine non totalmente evaso indicando lo stato *Evaso forzatamente*;
- **Data chiusura**: indica la data di evasione del documento.
