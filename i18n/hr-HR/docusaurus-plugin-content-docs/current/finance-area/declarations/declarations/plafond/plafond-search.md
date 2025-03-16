---
title:  Ricerca Plafond
sidebar_position: 3
---

La form della ricerca Plafond 

- si trova in Amministrazione > Dichiarazioni > Plafond

- permette all'utente di ricercare i calcoli del Plafond creati precedentemente con lo scopo di visualizzarli, modificarli ed eventualmente cancellarli.

Da questa form è possibile anche inserire manualmente un nuovo calcolo Plafond tramite il bottone [**Nuovo plafond**](/docs/finance-area/declarations/declarations/plafond/plafond-management).



## Pulsanti della Ribbon Bar

> - **Ricerca:** Pulsante per ricercare i calcoli di Plafond secondo i filtri di ricerca impostati nella testata della form.
> - **Nuovo:** Richiama la form per inserire un nuovo calcolo.
> - **Modifica:** Permette di modificare un calcolo precedentemente inserito.
> - **Visualizzazione:** Permette di visualizzare un calcolo precedentemente inserito.
> - **Elimina:** Cancella un calcolo precedentemente inserito.


## Tabelle e Parametri preliminari per la gestione del Plafond

L'impostazione del calcolo plafond deriva unicamente dalla tabella [**Aliquote modalità IVA**](/docs/configurations/tables/finance/vat-rates): 

I campi della tabella interessati sono:

**Plafond**: il flag definisce quali aliquote sono collegate alle dichiarazioni di intento: questo flag identifica l’aliquota che "**consuma**" mese per mese il plafond generale disponibile in qualità di esportatori abituali.

**Vendita Estera per Plafond**: con questo flag si identificano le aliquote iva, presenti nelle registrazioni di vendita dell’anno yyyy, che **incrementano** il plafond disponibile per l’anno yyyy+1 in qualità di esportatore abituale.

Non ha rilevanza la causale di contabilità e l'anagrafica intestataria della registrazione. Le note di credito, stornano dai movimenti gli importi relativi.

