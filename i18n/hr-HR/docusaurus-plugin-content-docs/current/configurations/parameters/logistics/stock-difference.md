---
title: Parametri inventurnih razlika 
sidebar_position: 3
---

:::important A cosa serve
Uvod u parametre razlika u inventaru sustava Fluentis ključan je za osiguranje učinkovitog usklađivanja između fizičkih i logičkih zaliha unutar skladišta. Ova funkcionalnost omogućuje operaterima da sustavno upravljaju i bilježe uočene nesuglasice, osiguravajući da je svaki pokret u skladištu praćen i točno evidentiran.

Parametri razlika u inventaru nalaze se u odjeljku konfiguracije i omogućuju postavljanje uzroka skladišta koji će se koristiti tijekom procesa izračuna razlika. Svako skladište može imati prilagođene konfiguracije, u kojima je potrebno postaviti kako uzrok punjenja za pozitivne korekcije inventara, tako i uzrok pražnjenja za negativne korekcije. Osim toga, sustav automatizira generiranje kompenzacijskih evidencija, čime se pojednostavljuje upravljanje eventualnim promjenama u zalihama.

U postupku razlika u inventaru, Fluentis nudi opciju izračuna razlika na određeni datum, omogućujući retroaktivno upravljanje i točno bilježenje zaliha.
:::

Obrazac vam omogućuje da za svako skladište postavite razloge koje aplikacija mora automatski koristiti u slučaju automatskog kreiranja skladišne ​​evidencije korištenjem procedure *Razlike u Inventurnim listama*. Omogućuje vam izračunavanje razlike između logičke količine i fizičke količine, tj. one koju je otkrio fizički inventar, te automatsko generiranje kompenzacijskih zapisa za razlike između logičke količine i fizičke količine. 

Skladišni razlozi koji se mogu postaviti u ovoj kartici su isključivo oni koji imaju aktivan flag *Upravljanje fizičkim inventarom* u [Skladišnim razlozima](/docs/configurations/tables/logistics/warehouse-templates). Potrebno je za svako skladište postaviti razlog utovara ispravke zaliha i razlog iskrcaja ispravke zaliha. 

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).