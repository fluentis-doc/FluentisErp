---
title: Stato dei buffer
sidebar_position: 1
---
Questo report mostra lo stato del livello di giacenza di un buffer.

Dato un buffer (scorta in un dato magazzino) viene analizzata la giacenza attuale e quella futura in un periodo di tempo paragonabile al DLT dell'articolo.

Vengono mostrate delle righe in varie date a partire da oggi, e per ciascuna viene indicato il valore della giacenza (valore effettivo) ed il valore percentuale della giacenza considerato rispetto alla zona rossa dell'articolo.

Si utilizza un sistema di colori per richiamare l'attenzione sul livello di criticità della giacenza.

Se la giacenza è minore di 0 si usa il rosso scuro (situazione altamente critica con rottura di stock e doamda che non può essere evasa), se è compresa tra 0 e 50% della zona rossa si usa il colore rosso (situazione critica con rischio di rottura di stock), se è compresa tra il 50% ed il 100% della zona rossa si usa il colore giallo (situazione non critica da monitorare), se è superiore al 100% si usa il colore verde (situazione priva di criticità).

Notare che una giacenza negativa indica mancanza di scorta in presenza di domanda che non è possibile soddisfare (quindi si avranno ritardi ed interruzione del flusso dei materiali), una giacenza nulla indica mancanza di scorta ma senza domanda da soddisfare, quaindi una condizione che al momento non genera ritardi ed interruzione del flusso di materiali ma che potenzialmente può diventare tale se si manifesta una domanda prima che si abbia il tempo di rifornire il buffer.

Le righe con date nel futuro si riferiscono a previsioni del valore della giacenza considerando la domanda già nota al momento, in modo da evidenziare in anticipo possibili situazioni critiche (quelle con colore rosso).