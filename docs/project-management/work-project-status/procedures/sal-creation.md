---
title: Crea SAL per Progetto
sidebar_position: 1
---

Questa procedura permette di creare uno stato avanzamento lavori a partire da un progetto. Nell’area di filtro è possibile indicare una serie di filtri per cercare in modo più mirato i progetti.
Una volta inseriti i filtri, basterà cliccare **Ricerca** nella ribbon bar per far comparire i risultati nella griglia sottostante. Per effettuare la procedura, selezionare una riga nella griglia e cliccare il pulsante **Crea SAL per progetto** nella ribbon bar. Questa azione aprirà una finestra in cui inserire:

**Tipo**: contiene la tipologia di stato avanzamento che si vuole creare;

**Da data**: indica la data dalla quale iniziare a raccogliere i dati per questo stato avanzamento lavori;

**A data**: indica la data fino alla quale raccogliere i dati per l’avanzamento;

**Data conferma**: indica la data di conferma dello stato;

**Comparabile**: indica se il documento potrà essere comparato in futuro.

Dopo l’ok, mi verrà chiesto se voglio o meno aprire lo [Stato avanzamento lavori](/docs/project-management/work-project-status/new-work-project-status/) creato.

:::note[Criteri ottenimento costi specifici risorse in calcolo SAL di progetto]
La ricerca del costo corrispondente verrà fatta con la seguente logica: 
1.	La data di inizio dell’attività rientra in una delle giornate segnate nel Calendario dei giorni non lavorativi? 
>	Se sì, verrà assegnato il valore impostato nel “Tipo costo: Festività”

2.	Se la data di inizio non dovesse rientrate nelle giornate del Calendario dei giorni non lavorativi, si prosegue il controllo nella griglia di Giorni lavorativi previsti per la risorsa.

3.	Se la data di inizio non rientra né nei festivi né nei giorni lavorativi per la risorsa, verrà utilizzato il costo marcato come “Default giorno non lavorativo” se presente. Nel caso non ci fosse un costo così marcato, verrà preso in alternativa il costo “Straordinario”. 

4. Se la data di inizio rientra in una di quelle lavorative ordinarie, viene verificato il monte ore previsto nel turno. 
>	Le prime ad es. 8 ore previste nel turno vengono verificate se rientrano nel turno principale  
>>	Se il turno principale è marcato come “notturno”, viene considerato il costo notturno; nel caso non fosse notturno, viene considerato il costo di testata risorsa;
>>>	Se sono presenti ore oltre alle 8 ore, le ore eccedenti sono calcolate con il costo:
>>>- se il turno è notturno si considera lo straordinario notturno
>>>- altrimenti si considera lo straordinario diurno
5.	Se la data di inizio non rientra nel turno principale, viene verificato se rientra nel turno alternativo. Quindi ad es. vengono considerate le prime 8 ore previste per il turno
>	se il turno alternativo ha un costo dedicato, viene considerato questo valore
>	se il turno alternativo è marcato come “notturno”, viene considerato il costo notturno; nel caso non fosse notturno, viene considerato il costo di testata risorsa;

>	Se sono presenti ore oltre alle 8 ore, le ore eccedenti sono calcolate con il costo:
>- se il turno alternativo è notturno si considera lo straordinario notturno
>- altrimenti si considera lo straordinario diurno

:::

:::note[Nota]
Nel caso di ore di servizio che rientrano nel monte ore giornaliero lavorativo della risorsa, ma superano la fascia oraria verranno conteggiate comunque come "ordinario" e non "straordinario"
:::