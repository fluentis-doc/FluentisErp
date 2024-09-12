---
title: Arrotondamenti
sidebar_position: 5
---

La form si apre tramite il percorso **Vendite > Listini di Vendita > Procedure > Arrotondamenti*.

La procedura permette di ricercare gli arrotondamenti e di definire più codici di regole di aumento/diminuzione dei prezzi, di aggiornamento degli sconti e di politiche di arrotondamento dei prezzi ottenuti.

Questi codici di Arrotondamento vengono utilizzati nelle procedure di creazione listini vendita.

Nella form di *Ricerca* è possibile ricercare i dati preesistenti, di inserire nuovi codici di arrotondamenti o di modificare dei codici già presenti.

Definendo un *Nuovo* codice (click sul pulsante **Nuovo** nella form di Ricerca) o *Modificando* un codice esistente è possibile inserire la descrizione da attribuire alla regola.

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

La variazione del prezzo può avvenire in percentuale o a valore, aumentando o diminuendo con l'utilizzo del valore con segno.

Il metodo di arrotondamento è definito per scaglioni di prezzo unitario.

**Limite superiore**: indica il massimo prezzo a cui verrà applicato il mask e la percentuale.

**Mask**: è un campo di testo dove l'utente definisce la regola di arrotondamento.

**Percentuale**: è la percentuale oltre la quale se il rapporto tra i prezzi calcolati, ottenuti applicando la variazione al prezzo di partenza, e il prezzo di partenza eccede il valore di questa percentuale il prezzo ottenuto e arrotondato viene segnalato in rosso in quanto è oltre il limite di arrotondamento consentito. Nel caso evidenziato sopra il “prezzo arrotondato” non deve superare del 5% il “prezzo non arr.”

**VALORI VALIDI PER IL MASK**

Il MASK è una regola che l'utente definisce componendo un testo utilizzando il seguente linguaggio:

=  il valore non subisce variazioni

+  incrementare il valore di una unità

-   decrementare il valore di una unità

[    inizio regola singolo valore

]    fine regola singolo valore

(    inizio regola che definisce a quale valore fisso deve essere portato il valore analizzato

)    fine regola che definisce a quale valore fisso deve essere portato il valore analizzato

,    separatore decimale

Vengono riportati di seguito degli esempi che possono spiegare come realizzare una regola:

| Prezzo ini. | Prezzo non arr. | Mask | Prezzo arrotondato |
| --- | --- | --- | --- |
| 16,16 | 16,968 | [=][=][=],[=][+] | 16,98 |
| 16,16 | 16,968 | [=][=][=],[=][=] | 16,97 |
| 16,16 | 16,968 | [=][=][=],[=][-] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][=][+] | 16,969 |
| 16,16 | 16,968 | [=][=][=],[=][=][=] | 16,968 |
| 16,16 | 16,968 | [=][=][=],[=][=][-] | 16,967 |
| 16,16 | 16,968 | [=][=][=],[=][=][-(0)] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][+(9)] | 16,99 |
| 16,16 | 16,968 | [=][=][=],[=][-(3)] | 16,93 |
| 16,16 | 16,968 | [=][=][=],[=] | 17 |
| 16,16 | 16,968 | [=][=][=],[+] | 17,1 |
| 16,16 | 16,968 | [=][=][=],[-] | 16,9 |
| 16,16 | 16,968 | [=][=][=] | 17 |
| 16,16 | 16,968 | [=][=][-] | 16 |
| 16,16 | 16,968 | [=][=][+] | 18 |

Nella sezione degli sconti è possibile definire degli sconti da inserire in ogni riga di listino, scegliendo anche di cancellare gli sconti precedentemente inseriti nella stessa riga, oppure di andare in modifica degli sconti presenti nelle righe listino.
