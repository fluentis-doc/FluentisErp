---
title: Zapisi integracije
sidebar_position: 5
---

Unutar modula Privremenih zatvaranja odabire se postupak "Zapisi integracije". Ovaj obrazac omogućuje zasebno upravljanje integracijskim operacijama koje se mogu provesti istovremeno s izradom novog privremenog zatvaranja.

Za upravljanje postupkom potrebno je postaviti: referentno zatvaranje, datum početka ekonomske pripadnosti, vrstu kalendara koji će se koristiti (preporučuje se ostaviti godišnji kalendar), tip temeljnice (predložak mora imati oznaku cdc/cdp za upravljanje integracijom troškovnih/profitnih centara).

Ovim postupkom sustav provjerava, počevši od "Datuma početka", retke troškova/prihoda prisutne u računovodstvu, ali ne i uključene u zatvaranje (odnosno knjiženja izvan raspona datuma knjiženja/pripadnosti postavljenih pri preuzimanju podataka iz
računovodstva). Na temelju tih podataka kreiraju se vremenska razgraničenja za dane unutar raspona ekonomskih datuma. Pokonta vremenskih razgraničenja koji će se koristiti su oni navedeni u kontnom planu za pojedini podkonto troška/prihoda ili generički
podkonto naveden u računovodstvenim parametrima godine privremenog zatvaranja. Dostupan je i gumb za vraćanje ili brisanje pokreta koje je ova procedura već evidentirala.

Posebnu pažnju treba obratiti na početni datum koji se postavlja, jer će taj datum obično biti isti kao datum posljednjeg otvaranja konta evidentiranog u računovodstvu. Primjer: Ako se kreira zatvaranje za prvo tromjesečje poslovne godine, raspon datuma za ekonomski dio obično će biti 01.01.godina – 31.03.godina. Ako je provedeno ponovno otvaranje konta iz prethodne poslovne godine, tada će se unutar ovog raspona automatski nalaziti prijenos troškova/prihoda vremenskih razgraničenja
evidentiranih u bilanci godina-1. U tom slučaju, datum početka integracije treba postaviti na 01.01.godina, kako bi sustav provjerio postoje li nakon 31.03. stavke s pripadnošću prethodnom tromjesečju. Ako ponovno otvaranje nije provedeno, početni datum potrebno je postaviti na 01.01.godina-1, kako bi **FluentisERP** provjerio postoje li i u cijeloj prethodnoj poslovnoj
godini troškovi/prihodi koji pripadaju početnom tromjesečju nove poslovne godine.

:::tip NAPOMENA
Posebnu pažnju treba posvetiti ručnom upravljanju vremenskim razgraničenjima u računovodstvu, posebno pri zatvaranju i ponovnom otvaranju konta, jer je ispravno dodjeljivanje datuma pripadnosti stavkama ključno za točnost preuzimanja podataka u kontroling
putem zapisa integracije ili tijekom obračuna razdoblja u kontrolingu. Automatizirano upravljanje putem **Zapisa usklađenja** omogućuje izbjegavanje pogrešaka u ovom osjetljivom procesu, čime se sprječavaju dvostruke ili netočne evidencije unutar područja kontrolinga.
:::