---
title: Pakiranje 
sidebar_position: 8
---

Putem ove Kartice definiramo način pakiranja artikla određujući koji su tipovi JZU (Jedinice za utovar) uključeni.

Može biti strukturiran kao stablo, na primjer, možemo odrediti paletu kao način pakiranja, koja može sadržavati određeni broj kutija, a svaka od njih može sadržavati određeni broj artikala.

Definiranje pakiranja omogućuje sustavu stvaranje potrebnih  JZU ova za otpremu u trenutku kada moramo pripremiti narudžbu za dostavu;

Na prozoru se nalazi mreža unutar koje se unose sljedeće informacije:

**Tip JZU /Tip JZU sadržaj**: u ova polja unosimo vrstu JZU, odnosno vrstu pakiranja, te vrstu sadržaja odabirom odgovarajućeg unosa iz pripadajućeg padajućeg izbornika; podaci unutar ovih padajućih izbornika prethodno su definirani u pripadajućoj tablici (Konfiguracija > Tablice > Logistika);

**Količina**: u ovom polju se navodi količina za određenu JZU;

**Prioritet**: u ovom polju se navodi prioritet pakiranja (na primjer, ako imamo paletu unutar koje imamo kutije, trebat će odrediti prioritet kako bi sustav pri stvaranju JZU ova već znao redoslijed pakiranja);

**Konto/Detaljni konto**: u ta polja unesite račun i podračun klijenta/dobavljača;

**Dimenzija jedinice mjere**: ovom polju odabire se Jedinica mjere (JM) za JZU;

**Visina/Širina/Dubina**: u ovim poljima se specificiraju dimenzije pakiranja;

**Opis tipa JZU/ Opis tipa JZU sadržaja/Opis klijenta/dobavljača**: u ovim poljima, nakon što unesete vrstu JZU, vrstu JZU sadržaja i klijenta/ponuđača računa/podračuna, automatski će se prikazati opisi odabranih vrsta;

**Jedinica mjere volumena**: u ovom polju ćemo navesti jedinicu mjere za volumen;

**Tolerancija dimenzija/Tolerancija količine**: koriste se u prilagodbama i potrebni su kada se iz plana utovara stvara popis JZU-a s dostupnim JZU -ima na skladištu. Postupak bi trebao dodati na popis JZU-a JZU s dimenzijama ili količinama koje se razlikuju od onih navedenih u pakiranju za određeni postotak. Nisu korišteni kao standard;

**Obavezne dimenzije**: ako je ova opcija aktivna, flag označava da su navedene dimenzije obavezne;

**Obvezna utovarna jedinica**: ako je ova opcija aktivna, flag označava da se ovaj artikl mora obavezno upravljati putem jedinice za utovar u proizvodnim izjavama.
