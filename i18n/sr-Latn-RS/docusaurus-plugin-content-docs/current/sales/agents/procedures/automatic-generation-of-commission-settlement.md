---
title: Automatsko računanje obračuna provizije
sidebar_position: 1
---

Ovaj obrazac otvara se putem putanje *Prodaja > Predstavnici > Procedure > Automatsko računanje obračuna provizije*.

Procedura automatskog stvaranja obračuna provizija izvršava konačni izračun obračuna predstavnika prema postavljenim parametrima. 


## Izračunavanje iznosa plaćanja

Nakon izvršene pretrage, u dijelu  **Popis trgovačkih predstavnika** bit će prikazani svi predstavnici definirani u sustavu: u ovom dijelu potrebno je odabrati popis subjekata za koje se provodi izračun. Napominje se da je također vidljiv tip zarađivanja provizije predstavnika, kako bi se filtri na desnoj strani mogli pravilno postaviti prema postavkama predstavnika.

Na desnoj strani prikazuju se sljedeći filtri:

- filtar za valutu dokumenta, kako bi se stvorila liquidacija predstavnika razlikovana po valuti;

- tri sekcije filtera prema referentnom dokumentu (narudžba/dostavnica/fakture, za predstavnike s potvrđenom narudžbom, izvršenom dostavom, izdanom fakturom);

- sekcija filtera za dijelove, za predstavnike s isteknutim rokom dospijeća ili izvršenom uplatom: na temelju postavljenih datuma, bit će određen datum dospijeća, u drugom slučaju udio u odnosu na evidentirane uplate u računovodstvu s datumom prije. U slučaju efekata, oni se neće smatrati maturiranim do datuma maturacije (tj. datum dospijeća plus dani rizika kupca postavljeni u parametrima modula istog naziva).

Oznaka *Konverzija provizija koristeći tečaj na datum dokumenta* predviđa da će se iznos provizija izvršiti prema tečaju na datum dokumenta, inače će se koristiti zadani tečaj na datum liquidacije predstavnika kako je postavljen u poljima na dnu maske.

:::note **DETALJNIJE**
- ako nije postavljena oznaka, Fluentis će zbrojiti zarađene provizije po valuti dokumenta, a zatim će te ukupne iznose pretvoriti u valutu predstavnika prema tečaju na datum liquidacije (u složenom slučaju, na primjer, fakture u GBP-u i predstavnik u USD-u, tada će tražiti postoji li u tablici tečajeva eksplicitan tečaj gbp-usd ili usd-gbp i primijenit će ga, ako ne pronađe koristit će tečajeve u odnosu na euro sa svim decimalama koje pronađe).  
- ako se postavi oznaka, Fluentis će primijeniti na svaki dokument tečaj pohranjen u samom dokumentu kako bi se dobile provizije u valuti tvrtke (zaokružene na decimalne znamenke valute tvrtke za svaki dokument), zatim će se taj ukupni iznos u valuti tvrtke pretvoriti u valutu predstavnika.

Ako na primjer postoji samo 2 dokumenta koja treba uzeti u obzir i tečajevi su isti jer je sve u istom datumu, tada bi moglo doći do razlika od nekoliko centi u ukupnom iznosu koji se dobije, zbog međukoraka zaokruživanja na valutu tvrtke koji se postavlja pomoću zastave. Ova situacija je jasno malo vjerojatna i *teorijska* kako bi se bolje razumjela točna logika izračuna ovisno o oznaci.

:::

U donjem dijelu, *Ekstremi za stvaranje obračuna provizija*, potrebno je navesti datum obračuna, njezin opis i mjesec/godinu referencije za izračun Enasarca.

:::tip PROVIZIJE NA UPLAĆENO I PRIVREMENI RAČUNSKI ZAPISI
Za izračun zarađenih provizija uzimaju se u obzir SAMO zapisi u **konačnom** statusu, stoga će se eventualne uplate (čak i predujmovi) registrirane privremeno zanemariti.
:::

:::tip PROVIZIJE NA UPLAĆENO I BANKOVNE POTVRDE
Dospijeće provizija u svakom slučaju uzima u obzir datum dospijeća efekta, čak i ako je klijentska partija zatvorena zbog knjiženja izdavanja Ri.Ba. a mjenica se predočuje na naplatu ili kredit.
:::

:::danger PAŽNJA
Važno je obratiti posebnu pažnju prilikom upravljanja **PARAMETRI RIZIKA KUPCA** posebno u slučaju uplate putem bankarskih potvrda. 

Dva polja **Broj dana nakon dospijeća za potvrđene potvrde i broj dana nakon dospijeća za potvrđene uplate** imaju važnu ulogu. Ako su popunjeni, dodaju se kašnjenja i u zbirnoj zaradi provizija.

Također, obratite pažnju prilikom inicijalizacije novog okruženja kako bi bilo spremljeno barem jednom unutar obrasca Parametri rizika klijenta, tako da će zadani parametri biti dostupni (posebno se odnose na navedena polja). Inače, datum dospijeća neće biti učitan, a zarada će uvijek biti kalkulirana na zatvaranju potvrde putem Ri.Ba. 
:::


*Gumbi*:
> **Traži**: izvršava pretragu agenata koji su prisutni u aktivnom poduzeću.  
> **Izračunavanje iznosa plaćanja**: izračunava obračune za odabrane agente prema postavljenim filtarskim postavkama. 

## Povrati u predhodno stanje

Kartica *Povrati u predhodno stanje* omogućuje vam pronalaženje u kojoj su provizije dokumenata filtrirane, ili pronalaženje jedne ili više provizija prema filterima prisutnim u obrascu. Pomoću odgovarajućeg gumba za vraćanje moguće je poništiti stvaranje provizija agenata. Nije moguće vratiti provizije koje su već prošle kroz modul za primanje.

*Gumbi*:
> **Traži**: izvršava pretragu automatski izračunatih provizija.    
> **Povrat na prethodno stanje**: poništava stvaranje odabranih provizija.