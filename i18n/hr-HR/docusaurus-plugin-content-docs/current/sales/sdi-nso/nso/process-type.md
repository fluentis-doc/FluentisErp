---
title: Tipi processi
sidebar_position: 3
---

## Ordinazione semplice

Il processo di Ordinazione semplice prevede che ogni eventuale comunicazione di accettazione, 
diniego o modifica dell’Ordine da parte del Fornitore potrà pervenire al Cliente esclusivamente 
nelle forme tradizionali (telefono, fax, e-mail, ecc.), implicitamente informa il Fornitore di non 
essere disponibile a ricevere l’eventuale Risposta in modalità telematica. 
Il Cliente può comunque revocare o modificare un Ordine precedentemente emesso mediante 
l’emissione di un nuovo Ordine, che deve contenere l’indicazione dell’Ordine che si intende 
revocare o modificare.
Ne consegue che un Ordine può assumere le seguenti forme:
- Ordine iniziale
- Ordine iniziale collegato
- Ordine di revoca 
- Ordine sostitutivo       

Al riguardo, se nell’Ordine è indicata la data di esecuzione della fornitura, il limite temporale entro 
il quale è possibile sostituire o revocare l’Ordine è determinato da tale data dedotto il tempo 
necessario per predisporre la fornitura ed eseguirla nel luogo prestabilito.
Il Fornitore è tenuto a considerare efficaci solo le Revoche e le Sostituzioni di ordine pervenute 
prima che abbia dato luogo all’esecuzione dell’Ordine revocato o sostituito (cioè prima che 
l’ordine venga evaso).
Nell’Ordine può essere indicata la data entro la quale il Fornitore è tenuto a rispondere.

## Ordinazione Completa

Questo processo, prevede l’uso di tre Documenti: 
- l’Ordine, emesso dal Cliente; 
- la Risposta, eventualmente emessa dal Fornitore; 
- l’Ordine di riscontro, eventualmente emesso dal Cliente.      

Il processo inizia con l’invio dell’Ordine da parte del Cliente e può terminare, alternativamente: 
- con la ricezione da parte del Fornitore dell’Ordine inviato dal Cliente; 
- con la ricezione da parte del Cliente della Risposta inviata dal Fornitore; 
- con la ricezione da parte del fornitore dell’Ordine di riscontro inviato dal Cliente. 

## Emissione dell’ordine 

L’ Ordine può assumere le seguenti quattro forme:
- Ordine iniziale,
- Ordine iniziale collegato, 
- Ordine di revoca, 
- Ordine sostitutivo.      

L’Ordine di revoca deve contenere una sola linea d’ordine priva di contenuto, in quanto costituisce 
il mero annullamento dell’Ordine precedentemente trasmesso a cui fa riferimento; 
Il Fornitore è tenuto a considerare efficaci solo le Revoche e le Sostituzioni di ordine pervenute 
prima che abbia dato luogo all’esecuzione dell’Ordine revocato o sostituito. Se nell’Ordine è 
indicata la data di esecuzione della fornitura (Delivery/RequestedDeliveryPeriod/StartDate = 
EndDate), rappresenta il limite temporale entro il quale è possibile sostituire o revocare l’Ordine 
dedotto il tempo necessario per predisporre la fornitura ed eseguirla nel luogo prestabilito. 
Le Sostituzioni e le Revoche, rispettivamente, rimpiazzano e annullano sia l’Ordine ivi indicato 
sia tutte le altre Sostituzioni e Revoche, già trasmesse, riferite al medesimo Ordine iniziale. 
L’Ordine sostitutivo dà formalmente avvio a un nuovo processo di Ordinazione, che può essere 
semplice o completa in base a quanto indicato nell’Ordine sostitutivo stesso.
Nell’Ordine può essere indicata la data entro la quale il Fornitore è tenuto a rispondere
(ValidityPeriod/enddate).

## Risposta all’ordine

A fronte della ricezione dell’Ordine, il Fornitore può: 
- terminare il processo senza trasmettere alcuna Risposta;
- trasmettere una Risposta (flusso rosso nella figura), che deve contenere l’indicazione 
dell’Ordine precedentemente inviato a cui si risponde, con la quale comunica al Cliente, 
alternativamente, che intende: 
> - comunicare di aver ricevuto l’Ordine (Risposta di ricezione); 
> - accettare l’Ordine ricevuto (Risposta di accettazione); 
> - declinare l’Ordine ricevuto (Risposta di diniego); 
> - apportare modifiche all’Ordine ricevuto (Risposta con modifiche).        

La Risposta con modifiche deve contenere tutte le linee d’ordine, sia quelle che si intente 
mantenere sia quelle che si intende modificare, in quanto integra l’Ordine precedentemente 
trasmesso a cui fa riferimento. 
La Risposta a un Ordine revocato non ha effetti per il Cliente. 

## Riscontro alla risposta 

A fronte della ricezione della Risposta, il Cliente può: 
- terminare il processo senza trasmettere un Ordine di riscontro (flusso blu nella figura); 
- trasmettere un Ordine di riscontro (flusso rosso nella figura), che deve contenere 
l’indicazione della Risposta a cui fa riferimento, con il quale comunica al Fornitore,
alternativamente, che intende:
> - accettare la Risposta ricevuta (Ordine di riscontro per conferma); 
> - declinare la Risposta ricevuta (Ordine di riscontro per diniego); 
> - sostituire le modifiche all’Ordine contenute nella Risposta ricevuta (Ordine di 
riscontro sostitutivo).      

Se il Cliente comunica che intende sostituire le modifiche all’Ordine contenute nella Risposta del 
fornitore, l’Ordine di riscontro annulla tutti i Documenti precedenti del processo corrente e dà 
avvio a un nuovo processo di Ordinazione.
Il Fornitore è tenuto a considerare efficaci solo gli Ordini di riscontro pervenuti prima che abbia 
dato luogo all’esecuzione dell’Ordine.      

Se il Cliente manda, nella Risposta del fornitore, un ordine di riscontro sostitutivo, l’Ordine di 
riscontro annulla tutti i Documenti precedenti (Ordine e Risposta) del processo corrente e dà avvio 
a un nuovo processo di Ordinazione completa.        
L’assenza di Ordine di riscontro equivale a conferma della Risposta.
Sono efficaci solo gli Ordini di riscontro pervenuti prima che l’evasione dell’ordine.

## Ordinazione PRE-Concordata

La pre-autorizzazione ad emettere l’ordine da parte del Fornitore, invece del Cliente, può 
derivare dal contratto o da altro documento (ad esempio un ordine inviato via fax o via e-mail a 
causa dell’indisponibilità del sistema informatico che emette gli Ordini elettronici, oppure un 
ordine perfezionato attraverso una piattaforma di comunicazione telematica) con cui il Cliente 
conferisce tale facoltà al Fornitore, predeterminando l’ambito e le limitazioni entro cui può 
essere esercitata.
Questo processo prevede l’uso di due Documenti: 
- l’Ordine pre-concordato, emesso dal Fornitore; 
- l’Ordine di riscontro, eventualmente emesso dal Cliente.        

Il processo inizia con l’invio dell’Ordine pre-concordato da parte del Fornitore, che lo emette in 
quanto pre-autorizzato dal Cliente, e può terminare, alternativamente:
- con la ricezione da parte del Cliente dell’Ordine pre-concordato inviato dal Fornitore; 
- con la ricezione da parte del fornitore dell’Ordine di riscontro inviato dal Cliente.      

Ogni eventuale comunicazione di conferma, diniego o sostituzione dell’Ordine preconcordato da 
parte del Cliente dovrà pervenire al Fornitore, di norma, per il tramite di NSO.
Il Fornitore può comunque revocare o modificare un Ordine pre-concordato precedentemente 
emesso mediante l’emissione di un nuovo Ordine pre-concordato, che deve contenere 
l’indicazione dell’Ordine pre-concordato che si intende revocare o modificare.

Ne consegue che un Ordine pre-concordato può assumere le seguenti forme :
- Ordine iniziale 
- Ordine Iniziale collegato
- Ordine di revoca , che deve contenere l’indicazione dell’Ordine precedentemente inviato 
che si intende revocare, deve contenere una sola linea d’ordine, in quanto costituisce il 
mero annullamento dell’Ordine precedentemente trasmesso a cui fa riferimento
- Ordine sostitutivo , che deve contenere l’indicazione dell’Ordine precedentemente inviato 
che si intende modificare, costituisce un nuovo Ordine che annulla tutti i Documenti 
precedenti (Ordini e Ordini di riscontro) del processo corrente e dà avvio a un nuovo 
processo di Ordinazione pre-concordata, pertanto deve contenere tutte le linee d’ordine 
(come un Ordine iniziale). 
A fronte della ricezione dell’Ordine pre-concordato, il Cliente può: 
- terminare il processo senza trasmettere un Ordine di riscontro
- trasmettere un Ordine di riscontro , che deve contenere l’indicazione dell’Ordine preconcordato a cui fa riferimento, con il quale comunica al Fornitore, alternativamente, che 
intende: 
> - confermare l’Ordine pre-concordato ricevuto ( Ordine di riscontro per conferma );
> - declinare l’Ordine pre-concordato ricevuto ( Ordine di riscontro per diniego );
> - sostituire l’Ordine pre-concordato ricevuto ( Ordine di riscontro sostitutivo ).     

Se il Cliente comunica che intende sostituire l’Ordine pre-concordato del Fornitore, l’Ordine di 
riscontro annulla tutti i Documenti precedenti del processo corrente e dà avvio a un nuovo processo 
che, in base a quanto indicato nell’Ordine di riscontro, può essere di Ordinazione semplice o di 
Ordinazione completa. 
Sono efficaci solo gli Ordini di riscontro pervenuti prima che l’Ordine pre-concordato sia stato 
evaso con documenti di consegna. 
