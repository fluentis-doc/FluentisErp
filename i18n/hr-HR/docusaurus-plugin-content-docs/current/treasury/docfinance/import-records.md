---
title: Uvoz zapisa
sidebar_position: 3
---

Ovim postupkom provodite postupak uvoza datoteke računovodstvenih evidencija koju je izradio DocFinance. 

Uvoz se vrši putem Bizlink *Folder Monitor* streama.

Stoga će datoteka sa snimkama za uvoz biti pohranjena u mapi koju nadzire servis koji će ih automatski uvoziti. 

U ovom trenutku sustav će kreirati relevantne računovodstvene evidencije, zatvarajući stavke koje je označio DocFinance i računovodstveno bilježeći kretanja na računima mapiranim u sustavu (računovodstveni predlošci moraju imati isti kod između ERP-a i DocFinancea). 

Rezultat uvoza bit će vidljiv u donjoj rešetki (dok će izvršeni uvozi biti prikazani u gornjem), a pomoću naredbi na traci izbornika moći će se poništiti uvoz i pregledati pojedinosti o pogreškama pronađenim tijekom uvoz. 

:::danger PAŽNJA 
Uvoz plaćanja zahtijeva da se ID otvorene stavke, koje treba zatvoriti, proslijede u Docfinance putanju. Čime se generira plaćanje koje s njim povezuje Fluentis. 

Ako iz bilo kojeg razloga ID serije ne odgovara onom koji je prisutan u zapisu (ručne promjene bilo koje vrste, napravljene nakon izvoza serija, kojima se tada upravljalo u Docfinanceu), plaćanja će se generirati, ali neće biti ispravno povezano sa serijama koje će ostati otvorene. Moguće je nastaviti kompenzaciju ovih stavki ili tražiti plaćanja uvezena u ovoj situaciji, izbrisati ih i ručno ponovno kreirati ispravnim povezivanjem relevantne stavke. Operacija se provodi, nakon storniranja uplate, pritiskom na tipku Novo i potom Kreiraj iz stavki/uplata i odabirom stavke za zatvaranje. 
:::


:::note Info
[Veza na **Docfinance** tehničke specifikacije](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::






