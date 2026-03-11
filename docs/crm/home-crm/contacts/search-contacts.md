---
title: Ricerca Contatti CRM
sidebar_position: 1
---

Il modulo Contatti consente all’operatore di gestire l’anagrafica dei contatti del CRM. Si trova all’interno dell’area CRM e permette di gestire le attività sul contatto, il flusso operativo di gestione contatto, i suoi riferimenti, gli agenti a lui collegati e le offerte a lui presentate.
I contatti del CRM hanno una propria anagrafica, differente da quella dei contatti Fluentis, ma alla quale si può collegare nel momento in cui un contatto del CRM diventi un cliente a tutti gli effetti.

La procedura di **Ricerca Contatti** è stata disegnata per permettere all’utente di ricercare facilmente i contatti del CRM già inseriti, con lo scopo di visualizzarli, modificarli ed eventualmente cancellarli.
Con l’aiuto dei filtri si può visualizzare: un solo contatto (**Nome**), più contatti appartenenti alla stessa tipologia ([**Tipo Contatto**](/docs/configurations/tables/crm/contacts/contact-type/)), più contatti appartenenti alla stessa categoria commerciale ([**Categoria commerciale**](/docs/configurations/tables/crm/contacts/commercial-category/)). È possibile inoltre filtrare per l’**Agente principale** indicato sul Contatto, al quale sono legati anche i filtri relativi ai **Concorrenti** ed al **Settore d’Uso**, oppure per altri filtri.

Cliccando **Ricerca** nella ribbon bar è possibile visualizzare i contatti importati o inseriti manualmente, con le relative caratteristiche.
L’icona a sinistra rappresentante un omino è di colore grigio se il soggetto è ancora un contatto, ma diventerà verde quando sarà cliente.
Nella parte alta è possibile filtrare la ricerca secondo le caratteristiche preferite. Cliccando sul **+** a sinistra della riga, è possibile visualizzare ulteriori informazioni del contatto. 
Per aprire i dettagli di un contatto, basterà selezionarlo e fare doppio click con il mouse.       

A destra della griglia sono presenti due label:
- **Map**: questa funzione permette di visualizzare i Contatti nella mappa. Per la visualizzazione dei Contatti CRM nella Mappa, viene ricercata prima la presenza di un Indirizzo, poi la presenza di Latitudine e Longitudine. Nel primo caso, cliccando sul pin nella Mappa, saranno visualizzati Nome della società ed Indirizzo, nel secondo caso solo il Nome della società.     
- **Funnel per qualità contatto**: in questa sezione viene visualizzato graficamente l'andamento della gestione contatti basato sulla [Qualità](/docs/configurations/tables/crm/contacts/contact-quality).

#### Pulsante specifico  
> **Conversione a cliente**: con questo pulsante è possibile convertire un contatto CRM in un [Cliente](/docs/erp-home/registers/contacts/create-new-contact/general); i dati inseriti nel contatto verranno copiati nella nuova anagrafica; il pulsante è attivo per i [Tipi contatto](/docs/configurations/tables/crm/contacts/contact-type) che non hanno attivo il flag *Cliente*.
E' obbligatorio indicare la nazione per poter convertire un contatto in cliente. 
La conversione prevede 2 opzioni: 
- Nuovo contatto: codifica quindi un nuovo cliente, con il Tipo conto indicato; 
- Contatto Esistente: permette di ricercare i contatti erp già esistenti, e selezionare il contatto da associare. 

Nel caso il contatto sia globale: verrà permesso di codificare una nuova anagrafica per la società corrente in uso. I tipi conto proposti saranno quelli per la società indicata nel contatto CRM. 
Si intende quindi che sarà possibile codificare un'anagrafica per ogni società desiderata, mantenendo tutte il collegamento allo stesso contatto CRM globale. 
Nel caso il contatto sia per società/dipartimento: verrà permesso di codificare una nuova anagrafica se non già presente per la società indicata nel contatto. I tipi conto proposti saranno quelli per la società indicata nel contatto CRM;

All'interno del contatto sono presenti anche dei campi utilizzati a fine statistico, non mostrati direttamente all'utente ed impostati in automatico: 

- data creazione contatto
- data inizio lead e data fine lead
- data inizio cliente e data fine cliente

Nel momento in cui un contatto viene creato, viene assegnata la data di creazione del contatto. Quando il tipo contatto viene passato in un tipo con flag "lead" abilitato, verrà assegnata la data di passaggio a tipo lead. Nel momento di passaggio ad un altro tipo contatto che ha flag "lead" disabilitato, verrà assegnata la data di fine lead. 
La stessa logica verrà utilizzata nel caso di passaggio del tipo contatto in tipo contatto con flag "cliente" abilitato.

#### Tiles
I contatori nelle tiles si basano sulle seguenti regole: 
- Contatti: 
    anagrafiche CRM con stato pipeline che ha flag "Contatti" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Contatti" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.
- Lead: 
    anagrafiche CRM con stato pipeline che ha flag "Lead" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Lead" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.
- Prospect: 
    anagrafiche CRM con stato pipeline che ha flag "Prospect" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Prospect" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.
- Opportunità: 
    anagrafiche CRM con stato pipeline che ha flag "Opportunità" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Opportunità" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.
- Cliente: 
    anagrafiche CRM con stato pipeline che ha flag "Cliente" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Cliente" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.
- Fornitore: 
    anagrafiche CRM con stato pipeline che ha flag "Fornitore" abilitato; anagrafiche CRM (versioni 2021 o precedenti) che hanno flag "Fornitore" abilitato nel Tipo Contatto. Data chiusura nulla o maggiore rispetto al filtro impostato.



