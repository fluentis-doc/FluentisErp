---
title: Gestione Widget sconti semplificato
sidebar_position: 6
---

Dalla versione 706, stata implementata la possibilità di inserire gli sconti direttamente nella griglia degli articoli, nei documenti di vendita. Per attivare questa funzionalità, è necessario abilitare il parametro **Abilita Widget Sconti Semplificato** presente nei Parametri ([Parametri Offerte](/docs/configurations/parameters/sales/offer-parameters), [Parametri Ordini](/docs/configurations/parameters/sales/sales-orders-parameters), [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters), [Parametri Fatture](/docs/configurations/parameters/sales/sales-invoices-parameters)) dell'Area Vendite. Inoltre, occorre specificare il tipo di sconto nel tipo di documento interessato ([Tipo Offerta](/docs/configurations/tables/sales/sales-offer-type), [Tipo Ordine](/docs/configurations/tables/sales/sales-order-types), [Tipo DDT](/docs/configurations/tables/sales/delivery-notes-type), [Tipo Fattura](/docs/configurations/tables/sales/invoices-type)).

Una volta configurati questi parametri, gli sconti possono essere inseriti direttamente nella colonna dedicata della griglia articoli dei documenti di vendita, denominata **Sconti articolo**. L'inserimento è possibile utilizzando una notazione semplice, come ad esempio "50+10+5": in questo modo, nella griglia degli sconti verranno generate tre righe con lo stesso tipo di sconto scelto, ma con priorità crescente: verrà applicato prima lo sconto del 50%, poi quello del 10% e infine quello del 5%, in modo sequenziale. Per inserire maggiorazioni, è sufficiente utilizzare il segno "-" (meno), mentre per applicare uno sconto a valore fisso si utilizza il simbolo "#" dopo il numero (ad esempio, "5#" indica uno sconto di 5 euro, non del 5%).

Nella griglia articoli, è stata inoltre aggiunta una colonna **Sconti Finali**, che visualizza (senza possibilità di modifica) gli sconti finali sugli articoli inseriti nel tab *Riepiloghi* del documento.