---
title: Stanje buffer-a 
sidebar_position: 1
---
Ovo izvješće prikazuje stanje razine zaliha unutar buffer-a.   

Za određeni buffer (zaliha u određenom skladištu) analizira se trenutna i buduća razina zaliha u vremenskom razdoblju usporedivom s DLT-om artikla.   

Prikazane su stavke s različitim datumima počevši od danas, a za svaku se navodi stvarna razina zaliha te postotna vrijednost zaliha u odnosu na crvenu zonu artikla.   

Koristi se sustav boja kako bi se istaknula razina kritičnosti zaliha.   

Ako je zaliha manja od 0, koristi se tamno crvena boja (vrlo kritična situacija s prekidom zaliha i nemogućnošću ispunjenja potražnje). Ako je između 0% i 50% crvene zone, koristi se crvena boja (kritična situacija s rizikom prekida zaliha). Ako je između 50% i 100% crvene zone, koristi se žuta boja (nije kritično, ali zahtijeva praćenje). Ako je iznad 100%, koristi se zelena boja (situacija bez kritičnosti).   

Treba napomenuti da negativna zaliha označava nedostatak robe uz postojeću potražnju, što dovodi do kašnjenja i prekida opskrbnog lanca. Nulta zaliha označava odsutnost robe, ali bez trenutne potražnje, što ne uzrokuje trenutačne probleme, ali može postati kritično ako se potražnja pojavi prije nego što se buffer obnovi.   

Redovi s budućim datumima odnose se na prognoze vrijednosti zalihe uzimajući u obzir već poznatu potražnju u tom trenutku, kako bi se unaprijed istaknule moguće kritične situacije (one označene crvenom bojom).