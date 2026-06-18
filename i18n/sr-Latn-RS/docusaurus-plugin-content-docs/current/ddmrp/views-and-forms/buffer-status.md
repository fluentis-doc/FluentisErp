---
title: Stanje buffera
sidebar_position: 1
---

# Stanje buffera

Ovaj izveštaj prikazuje stanje nivoa zaliha unutar buffera.

Za određeni buffer (zaliha u određenom skladištu) analizira se trenutni i budući nivo zaliha u vremenskom periodu uporedivom sa DLT-om artikla.

Prikazuju se stavke sa različitim datumima počev od današnjeg dana, a za svaku se navodi stvarni nivo zaliha, kao i procenat zaliha u odnosu na crvenu zonu artikla.

Koristi se sistem boja kako bi se istakao nivo kritičnosti zaliha.

- Ako je zaliha manja od 0, koristi se tamnocrvena boja (veoma kritična situacija sa nestašicom zaliha i nemogućnošću zadovoljenja potražnje).
- Ako je između 0% i 50% crvene zone, koristi se crvena boja (kritična situacija sa rizikom od nestašice).
- Ako je između 50% i 100% crvene zone, koristi se žuta boja (situacija nije kritična, ali zahteva praćenje).
- Ako je iznad 100%, koristi se zelena boja (situacija bez kritičnosti).

Važno je napomenuti da negativna zaliha označava manjak robe uz postojeću potražnju, što dovodi do kašnjenja i prekida u lancu snabdevanja.

Nulta zaliha označava odsustvo robe, ali bez trenutne potražnje, što ne izaziva neposredne probleme, ali može postati kritično ukoliko se potražnja pojavi pre nego što se buffer dopuni.

Redovi sa budućim datumima odnose se na projekcije vrednosti zaliha koje uzimaju u obzir već poznatu potražnju u tom trenutku, kako bi se unapred identifikovale moguće kritične situacije (one označene crvenom bojom).