---
title: Nuova Lista di Distribuzione
sidebar_position: 3
---

La procedura di creazione di una nuova **Lista di distribuzione** permette di andare a definire quali saranno le caratteristiche della lista che verrà poi utilizzato nella procedura di invio delle [Newsletter](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), oltre a definire quali saranno i **contatti CRM** facenti parte di tale lista. Per creare una nuova lista è necessario cliccare sul pulsante **Nuovo** dalla maschera di ricerca liste di distribuzione.

La form è composta da due sezioni.

La sezione superiore permette di definire le seguenti informazioni:

**Nome**: corrisponde al codice identificativo della lista di distribuzione;

**Data creazione**: è la data in cui la lista è stata creata;

**Nota**: campo alfanumerico che permette di inserire delle note libere;

**Autore**: viene indicato l’utente che ha generato la lista;

**Tipo**: permette di definire la tipologia di lista di distribuzione tra **Statica** o **Dinamica**.

La form inferiore si differenzia a seconda che la lista sia di tipo Statico o di tipo Dinamico.

### Lista statica

La sezione è suddivisa in 2 tab.

#### Assegnato

Nella tab Assegnato vengono mostrati i soggetti che sono stati già assegnati alla lista di distribuzione.

#### Non Assegnato

Nella tab Non Assegnato vengono mostrati i contatti che non sono stati ancora assegnati alla lista in oggetto.
La tab è divisa in 2 sezioni.
Una prima sezione di Filtro, dove è possibile impostare una serie di filtri riguardanti i contatti da estrapolare.

La seconda sezione invece, la griglia risultato, mostra i soggetti estratti in base ai filtri impostati in precedenza dopo aver premuto il pulsante **Ricerca**.  
Il pulsante **Assegna** sposta il contatto dalla tab **Non assegnato** alla tab **Assegnato**, inserendo quindi il contatto nella Lista di distribuzione.

**Raggruppa per contatto**: permette di raggruppare i soggetti (contatti e riferimenti) in un’unica riga in base al contatto di cui fanno parte.


### Lista Dinamica

La sezione è suddivisa in 2 tab.

#### Configurazione

Devono essere inizialmente indicati questi 3 dati:
**Area**: serve per definire l’area di Fluentis in cui dovranno essere recuperati i dati;
**Modulo**: è riferito all’Area selezionata in precedenza;
**Sql Query**: deve essere selezionata la Query Sql precedentemente creata in Fluentis (per maggiori informazioni fare riferimento alla sezione Fluentis Query Studio)
Nella griglia sottostante vengono mostrate le proprietà e come sono state mappate.

![](/img/it-it/applications/crm/distribution-list/configuration.png)

#### Mapping

In questa tab vengono mostrate in tempo reali i contatti elaborati e inseriti nella lista di distribuzione in base alla Sql Query indicata nella tab Configurazione.

![](/img/it-it/applications/crm/distribution-list/mapping.png)