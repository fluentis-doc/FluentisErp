---
title: Introduzione
sidebar_position: 1
---

Dal 15 maggio 2019 il Nodo di Smistamento degli Ordini di acquisto (NSO) è disponibile per 
l'utilizzo sperimentale ai sensi dell'art. 5 del d.m. 7/12/2018 e dal 16 luglio 2019 il sistema è in 
grado di elaborare, oltre ai Documenti previsti dal processo di Ordinazione semplice, anche tutti i 
Documenti previsti dai processi di Ordinazione completa e di Ordinazione pre-concordata. 
Come previsto dalla norma citata, i documenti scambiati non producono effetti giuridici tra le parti.
Con riferimento ai documenti informatici attestanti l’ordinazione di acquisto, il Decreto del 
Ministro dell’Economia e delle Finanze 7 dicembre 2018 stabilisce che essi devono essere 
obbligatoriamente emessi in formato elettronico e trasmessi per il tramite di NSO, con decorrenza 
dal 1 ottobre 2019.           
Tutti gli ordini di acquisto della pubblica amministrazione dovranno essere effettuati 
esclusivamente in formato elettronico e trasmessi per il tramite del Nodo di Smistamento degli 
Ordini di acquisto (NSO).         
NSO utilizza l’infrastruttura, già esistente, del Sistema di Interscambio delle fatture elettroniche 
(SdI) e dialogherà con la Banca Dati Nazionale dei Contratti Pubblici (BDNCP), gestita 
dall’Autorità Nazionale Anticorruzione (ANAC), affinché sia assicurato che tutti gli ordini di 
acquisto siano riferiti a contratti a cui risulti regolarmente assegnato il codice identificativo di gara 
(CIG).
Le informazioni tratte dai predetti sistemi sono gestite e rese disponibili dalla Piattaforma dei 
Crediti Commerciali (PCC). 
Questa soluzione permetterà di utilizzare tutti i canali di trasmissione già in uso per la fatturazione 
elettronica, a cui è aggiunta la possibilità di usare l’infrastruttura di trasporto definita dalle 
specifiche PEPPOL (Pan-European Public Procurement Online).
I documenti trasmessi per il tramite di NSO (ordini, risposte, conferme, revoche) dovranno essere 
formati rispettando gli standard previsti dalle Business Interoperability Specifications (BIS) di 
PEPPOL o le loro estensioni nazionali.         
Attualmente, NSO non gestisce i documenti attestanti l’esecuzione degli acquisti, con l’eccezione 
della Risposta all’ordine, che si colloca a cavallo tra la fase di Ordinazione e quella di esecuzione. 
Per tale motivo ogni altro documento attestante l’esecuzione degli acquisti è escluso dall’obbligo 
di emissione e trasmissione in formato elettronico.
NSO è una sorta di postino intelligente che gestisce lo scambio, tra clienti e fornitori, degli ordini 
di acquisto (e gli altri documenti eventualmente occorrenti). Oltre a provvedere al loro recapito, 
NSO verifica che i documenti trasmessi siano stati correttamente formati e contengano tutte le 
informazioni necessarie al loro successivo utilizzo per le fasi di fatturazione e pagamento.          
NSO riceve i Messaggi e controlla che siano correttamente formati. Se tale verifica va a buon fine, 
li inoltra ai rispettivi Destinatari e, con apposite Notifiche di sistema, informa i Mittenti sull’esito 
della verifica e del recapito.
Se il Cliente o il Fornitore interagiscono con NSO per il tramite di un Intermediario, i primi 
assumono il ruolo di Mittente o di Destinatario, mentre l’Intermediario assume il ruolo di 
Trasmittente e/o di Ricevente.

## Messaggi NSO

Nel sistema NSO transiteranno “Messaggi”, cioè file, composti da:
- Busta di trasmissione, la parte del Messaggio che contiene i dati necessari per il corretto 
indirizzamento; 
- Documento, la parte del Messaggio, contenente i dati di business (es. Ordine, Risposta, 
Riscontro), che costituisce il Corpo del messaggio ; 
Il Documento può essere:
- Ordine, il Documento con cui il Cliente comunica al Fornitore i beni e/o i servizi che intende 
acquistare e le relative istruzioni. Un Ordine può essere originario (ordine iniziale) oppure 
sostituire un Ordine precedente (Ordine sostitutivo) oppure annullare un Ordine precedente 
(Ordine di revoca) oppure essere collegato da un altro ordine; 
- Ordine pre - concordato, il Documento, equivalente all’Ordine, ma emesso dal Fornitore in
accordo con il Cliente. Un Ordine pre-concordato può essere originario (Ordine iniziale) oppure 
sostituire un Ordine pre-concordato precedente (Ordine sostitutivo) oppure annullare un Ordine 
pre-concordato precedente (Ordine di revoca); 
- Risposta, il Documento con cui il Fornitore riceve, accetta, declina o apporta dei cambiamenti 
(Risposta con modifiche) all’Ordine ricevuto dal Cliente; 
- Ordine di riscontro, il Documento con cui il Cliente conferma, declina o sostituisce una Risposta 
o un Ordine pre-concordato del Fornitore;
I tipi di flusso previsti sono:
- Ordinazione semplice, il processo di ordinazione, avviato dal Cliente, in cui l’Ordine è emesso e 
trasmesso in formato elettronico, mentre eventuali altri documenti devono essere prodotti e 
scambiati nei modi tradizionali (telefono, fax, e-mail, ecc.); 
- Ordinazione completa, il processo di ordinazione, avviato dal Cliente, in cui l’Ordine è emesso 
e trasmesso in formato elettronico ed è possibile produrre e scambiare in modalità telematica anche 
la Risposta e l’Ordine di riscontro; 
- Ordinazione pre - concordata, il processo di ordinazione, avviato dal Fornitore, in cui l’Ordine 
pre-concordato è emesso e trasmesso in formato elettronico ed è possibile produrre e scambiare in 
modalità telematica anche l’Ordine di riscontro.
