---
title: Aggiornamento lead time disaccoppiato (DLT)
sidebar_position: 2
---
Questa procedura calcola il lead time disaccoppiato (DLT) di tutti gli articoli a buffer, sia che siano in fabbrica che nei centri di distribuzione/hubs.

Questo è un parametro molto importante per determinare la dimensione delle zone di un buffer e quindi anche i livelli di scorta che sono proporzionali al DLT.

Se un centro distribuzione/hub è rifornito da un hub, il DLT degli articoli in esso stoccati è uguale per tutti e dato dal lead time indicato nella tabella della struttura logistica (a meno che l'articolo non riporti nei parametri Ddmrp un eccezione di fornitura).

Se il centro distribuzione/hub è rifornito dalla fabbrica, ciascun articolo avrà un valore DLT specifico dato dalla somma del lead time di trasporto dalla fabbrica e dal tempo necessario a realizzare il prodotto in fabbrica (nullo solo per quegli articoli che sono buffer in fabbrica).

La procedura necessita di informazioni presenti e corrette, pertanto il tipo parte del buffer profile deve essere corretto per gli articoli a buffer, ed in generale il lead time degli articoli delle distinte base deve essere presente (per gli articoli d'acquisto deve essere specificato il fornitore preferenziale con relativo flag e lead time, per gli altri articoli deve essere presente il lead time nei parametri mrp).

Gli articoli con dati incongruenti o carenti non verranno presi in considerazione nel calcolo, inoltre al termine della procedura verrà visualizzato un messaggio elencante le incongruenze riscontrate. 

Per tutti gli articoli di fabbrica che hanno distinta base, la procedura sommerà i lead time di ciascun articolo lungo ogni ramo di distinta fermandosi quando incontra un articolo a Buffer, poichè un articolo a Buffer è già disponibile, quindi non richiede tempo per essere approvvigionato.

La maggiore delle somme dei vari rami determina il valore DLT dell'articolo, cioè il tempo necessario per costruire il prodotto.

Questo calcolo viene eseguito anche per i prodotti che in fabbrica non sono scorte Ddmrp, poichè gli stessi possono esserlo nei centri di distribuzione/hubs, quindi il relativo DLT è pari al valore DLT in fabbrica più il tempo di trasporto.

La procedura determina inoltre il percorso critico di ciascun articolo, cioè individua tutti gli articoli che si trovano sulla catena di approvvigionamento più lunga, ovvero quelli che determinano il valore DLT dell'articolo.

Se si desidera ridurre il valore del DLT di un articolo bisogna scegliere articoli sulla catena critica come nuovi articoli a buffer, poichè scegliere articoli che non sono sulla catena critica non porta alcun beneficio.

Al termine della procedura viene automaticamente chiamata la procedura di aggiornamento delle zone.