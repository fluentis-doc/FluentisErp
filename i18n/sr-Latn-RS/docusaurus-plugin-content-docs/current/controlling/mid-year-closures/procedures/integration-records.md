---
title: Zapisi integracije
sidebar_position: 5
---

U okviru modula Privremena zatvaranja bira se procedura **„Zapisi integracije“**. Ovaj obrazac omogućava zasebno upravljanje integracionim operacijama koje se mogu izvršavati istovremeno sa kreiranjem novog privremenog zatvaranja.

Za upravljanje procedurom potrebno je definisati: referentno zatvaranje, datum početka ekonomske pripadnosti, vrstu kalendara koja će se koristiti (preporučuje se korišćenje godišnjeg kalendara) i tip temeljnice (predložak mora imati oznaku cdc/cdp radi upravljanja integracijom troškovnih/profitnih centara).

Ovom procedurom sistem proverava, počev od definisanog **Datuma početka**, stavke troškova/prihoda koje postoje u računovodstvu, ali nisu uključene u zatvaranje (odnosno knjiženja koja se nalaze izvan opsega datuma knjiženja/pripadnosti definisanih prilikom preuzimanja podataka iz računovodstva). Na osnovu tih podataka kreiraju se vremenska razgraničenja za dane koji se nalaze unutar raspona ekonomskih datuma. Podkonta vremenskih razgraničenja koja će se koristiti su ona definisana u kontnom planu za odgovarajući podkonto troška/prihoda ili generički podkonto naveden u računovodstvenim parametrima godine privremenog zatvaranja. Dostupno je i dugme za poništavanje ili brisanje knjiženja koja je ova procedura prethodno evidentirala.

Posebnu pažnju treba obratiti na početni datum koji se definiše, jer će on najčešće odgovarati datumu poslednjeg otvaranja konta evidentiranog u računovodstvu.

Primer: Ako se kreira zatvaranje za prvi kvartal poslovne godine, raspon datuma za ekonomski deo obično će biti od **01.01.godina** do **31.03.godina**.

Ako je izvršeno ponovno otvaranje konta iz prethodne poslovne godine, u okviru ovog perioda automatski će se nalaziti preneti troškovi/prihodi vremenskih razgraničenja evidentirani u bilansu godine-1. U tom slučaju datum početka integracije treba postaviti na **01.01.godina**, kako bi sistem proverio da li nakon **31.03.** postoje stavke čija pripadnost odgovara prethodnom kvartalu.

Ukoliko ponovno otvaranje nije izvršeno, početni datum treba postaviti na **01.01.godina-1**, kako bi ***FluentisERP*** proverio da li u toku cele prethodne poslovne godine postoje troškovi/prihodi koji pripadaju prvom kvartalu nove poslovne godine.

:::tip NAPOMENA
Posebnu pažnju treba posvetiti ručnom upravljanju vremenskim razgraničenjima u računovodstvu, naročito prilikom zatvaranja i ponovnog otvaranja konta, jer je pravilno definisanje datuma pripadnosti stavkama od ključnog značaja za tačnost preuzimanja podataka u kontroling putem zapisa integracije ili tokom obrade perioda u kontrolingu.

Automatizovano upravljanje putem **Zapisa usklađenja** omogućava izbegavanje grešaka u ovom osetljivom procesu i sprečava dvostruka ili netačna evidentiranja unutar oblasti kontrolinga.
:::