---
title: Workstation
sidebar_position: 1
---

La tabella permette di gestire la codifica delle diverse tipologie di *Workstation*.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Workstation**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Workstation**

Per poter inserire nuove codifiche è necessario cliccare nella griglia principale sulla prima riga vuota oppure premere il pulsante **Nuovo** ed inserire i seguenti dati:      
- **Codice**: indica il nome del pc che farà da workstation;        
:::note Nota
È possibile ottenere il nome del pc lanciando il comando *hostname* dal prompt dei comandi. 
:::         
- **Descrizione**: indica la descrizione del nome del pc che farà da workstation.     

Nella griglia secondaria (sottostante la principale), è possibile associare le *risorse* che potranno lavorare su ciascuna workstation.
- Nel caso in cui per una workstation venga associato solo una risorsa (es. di tipo centro di lavoro), in fase di avvio il MES caricherà automaticamente quella risorsa e tutte le fasi già iniziate associate ad essa.      
Esempio di workstation dedicata ad un centro di lavoro.        
- Nel caso in cui per una workstation vengano associate più risorse (es. di tipo centro di lavoro), in fase di avvio del MES non verrà caricata nessuna di esse e l'utente potrà selezionare solo una delle risorse associate.      
Esempio di workstation dedicata ad un reparto dove avverranno le dichiarazioni di tutti i centro di lavoro di quel particolare reparto.     
- Nel caso in cui, invece, per una workstation non venga associata alcuna risorsa, in fase di avvio del MES non verrà caricata nessuna di esse e l'utente potrà selezionare una qualsiasi delle risorse inserite nella tabella [Risorse di produzione](/docs/production/mes/production-resources).       
Esempio di workstation dedicata ad un attrezzista che dichiarerà le proprie attività per tutti i centro di lavoro.      

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).