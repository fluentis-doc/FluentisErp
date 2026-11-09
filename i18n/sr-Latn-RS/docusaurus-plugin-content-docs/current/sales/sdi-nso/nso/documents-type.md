---
title: Tipovi dokumenata
sidebar_position: 2
---

## Narudžbina

Narudžbina je dokument koji predstavlja narudžbinu robe i usluga koju izdaje kupac (pošiljalac) i upućuje dobavljaču (primaocu). Narudžbina se sastoji od jednog ili više redova narudžbine u kojima su navedeni roba ili usluga koju kupac namerava da nabavi, količina i cena.

**Narudžbina je pripremljena u formatu opisanom specifikacijom PEPPOL Order transaction 3.0.**

Narudžbina može:

- nezavisno od drugih prethodno izdatih narudžbina, da odredi robu i/ili usluge koje kupac namerava da nabavi, kao i odgovarajuća uputstva za izvršenje isporuke (početna narudžbina). Početna narudžbina ne sadrži reference na druge narudžbine;
- nezavisno od drugih prethodno izdatih narudžbina, da odredi robu i/ili usluge koje kupac namerava da nabavi, kao i odgovarajuća uputstva za izvršenje isporuke, ali istovremeno može biti opšte povezana sa drugim dokumentom (povezana početna narudžbina). Povezana početna narudžbina sadrži referencu na dokument sa kojim je povezana i oznaku da je reč samo o „povezivanju”;
- da opozove prethodno izdatu narudžbinu (narudžbina za opoziv). Narudžbina za opoziv sadrži oznaku da je reč o „opozivu” i referencu na narudžbinu koju namerava da opozove;
- da zameni prethodno izdatu narudžbinu (zamenska narudžbina). Izmena narudžbine je nova narudžbina koja sadrži sve redove narudžbine, oznaku da je reč o „izmeni” i referencu na narudžbinu koju namerava da izmeni.

Zamene i opozivi zamenjuju, odnosno poništavaju navedenu narudžbinu, kao i sve druge već poslate zamene i opozive koji se odnose na odgovarajuću početnu narudžbinu.

Povezana početna narudžbina može se koristiti isključivo za evidentiranje činjenice da je novi postupak koji se namerava pokrenuti povezan sa prethodnim postupkom. Nikada se ne sme koristiti umesto drugih mehanizama (narudžbina za opoziv, zamenska narudžbina i narudžbina za potvrdu) koji su posebno predviđeni za opoziv, zamenu (ili dopunu), potvrdu ili odbijanje drugog dokumenta.

## Odgovor

Odgovor je dokument kojim dobavljač (pošiljalac) prihvata, odbija ili predlaže izmene narudžbine koju je primio od kupca (primaoca).

**Odgovor je pripremljen u formatu opisanom specifikacijom PEPPOL Order Response transaction 3.0.**

Odgovorom dobavljač može obavestiti kupca da:

- je primio narudžbinu (odgovor o prijemu), ali je još nije obradio. Reč je o privremenom obaveštenju koje ne sadrži nikakvu informaciju o tome da li će i na koji način dobavljač postupiti po narudžbini. Odgovor o prijemu ne sadrži redove narudžbine, već oznaku da je reč o „prijemu” („AB”) i referencu na narudžbinu čiji se prijem potvrđuje;
- namerava da postupi po primljenoj narudžbini (odgovor o prihvatanju). Odgovor o prihvatanju ne sadrži redove narudžbine, već oznaku da je reč o „prihvatanju” i referencu na narudžbinu koju namerava da prihvati;
- odbija primljenu narudžbinu (odgovor o odbijanju). Odgovor o odbijanju ne sadrži redove narudžbine, već oznaku da je reč o „odbijanju” i referencu na narudžbinu koju namerava da odbije;
- namerava da postupi po primljenoj narudžbini uz određene izmene (odgovor sa izmenama). Odgovor sa izmenama sadrži oznaku da je reč o „izmeni” i referencu na narudžbinu koju namerava da izmeni. Mora da sadrži sve redove narudžbine, kako one koje namerava da zadrži, tako i one koje namerava da izmeni, jer predstavlja dopunu prethodno poslate narudžbine na koju se odnosi.

Odgovori sa izmenama i odgovori o odbijanju dopunjuju, odnosno poništavaju navedenu narudžbinu, kao i sve druge već poslate izmene i opozive koji se odnose na istu početnu narudžbinu.

Odgovor na opozvanu narudžbinu nema dejstvo.

## Narudžbina za potvrdu

Narudžbina za potvrdu je dokument kojim kupac (pošiljalac) potvrđuje, odbija ili zamenjuje (zamenska narudžbina za potvrdu) unapred dogovorenu narudžbinu ili odgovor koji je poslao dobavljač (primalac).

**Narudžbina za potvrdu je zapravo narudžbina koja se odnosi na dokument koji je poslao dobavljač. Zato je pripremljena u istom formatu, opisanom specifikacijom PEPPOL Order transaction 3.0.**

Narudžbinom za potvrdu kupac može obavestiti dobavljača:

- da potvrđuje unapred dogovorenu narudžbinu ili odgovor koji je poslao dobavljač (narudžbina za potvrdu – potvrda). Narudžbina za potvrdu – potvrda sadrži oznaku da je reč o „potvrdi” i referencu na unapred dogovorenu narudžbinu ili odgovor koji namerava da potvrdi;
- da odbija unapred dogovorenu narudžbinu ili odgovor koji je poslao dobavljač (narudžbina za potvrdu – odbijanje). Narudžbina za potvrdu – odbijanje sadrži oznaku da je reč o „odbijanju” i referencu na narudžbinu ili odgovor koji namerava da odbije;
- da namerava da zameni unapred dogovorenu narudžbinu ili odgovor koji je poslao dobavljač (zamenska narudžbina za potvrdu). Zamenska narudžbina za potvrdu je nova narudžbina koja sadrži sve redove narudžbine, oznaku da je reč o „zameni” i referencu na narudžbinu ili odgovor koji namerava da zameni.

Zamenske narudžbine za potvrdu i narudžbine za potvrdu – odbijanje zamenjuju, odnosno poništavaju unapred dogovorenu narudžbinu ili odgovor na koji se odnose, kao i sve druge već poslate zamene i opozive povezane sa odgovarajućom početnom narudžbinom.

Narudžbina za potvrdu koja se odnosi na opozvanu unapred dogovorenu narudžbinu nema dejstvo.

## Unapred dogovorena narudžbina

Unapred dogovorena narudžbina je dokument koji predstavlja narudžbinu robe i usluga, a izdaje ga dobavljač (pošiljalac) umesto kupca (primaoca), u dogovoru sa kupcem.

Unapred dogovorena narudžbina sastoji se od jednog ili više redova narudžbine u kojima su navedeni roba ili usluga koja je predmet nabavke, količina i cena.

**Unapred dogovorena narudžbina pripremljena je u formatu opisanom specifikacijom PEPPOL Order Agreement transaction 3.0.**

Unapred dogovorena narudžbina može:

- nezavisno od drugih prethodno izdatih unapred dogovorenih narudžbina, da odredi robu i/ili usluge koje kupac namerava da nabavi, kao i odgovarajuća uputstva za izvršenje isporuke (početna unapred dogovorena narudžbina). Početna unapred dogovorena narudžbina ne sadrži reference na druge unapred dogovorene narudžbine;
- nezavisno od drugih prethodno izdatih unapred dogovorenih narudžbina, da odredi robu i/ili usluge koje kupac namerava da nabavi, kao i odgovarajuća uputstva za izvršenje isporuke, ali istovremeno može biti opšte povezana sa drugim dokumentom (povezana početna unapred dogovorena narudžbina). Povezana početna unapred dogovorena narudžbina sadrži referencu na dokument sa kojim je povezana i oznaku da je reč samo o „povezivanju”;
- da opozove prethodno izdatu unapred dogovorenu narudžbinu (unapred dogovorena narudžbina za opoziv). Unapred dogovorena narudžbina za opoziv sadrži oznaku da je reč o „opozivu” („Cancelled”) i referencu na unapred dogovorenu narudžbinu koju namerava da opozove. Pored toga, sadrži samo jedan red narudžbine bez sadržaja;
- da zameni prethodno izdatu unapred dogovorenu narudžbinu (zamenska unapred dogovorena narudžbina). Izmena unapred dogovorene narudžbine je nova unapred dogovorena narudžbina koja sadrži sve redove narudžbine, oznaku da je reč o „zameni” („Revised”) i referencu na unapred dogovorenu narudžbinu koju namerava da izmeni.

Zamene i opozivi zamenjuju, odnosno poništavaju navedenu unapred dogovorenu narudžbinu, kao i sve druge već poslate zamene i opozive koji se odnose na odgovarajuću početnu unapred dogovorenu narudžbinu.

Povezana početna unapred dogovorena narudžbina može se koristiti isključivo za evidentiranje činjenice da je novi postupak koji se namerava pokrenuti povezan sa prethodnim postupkom. Nikada se ne sme koristiti umesto drugih mehanizama (unapred dogovorena narudžbina za opoziv, zamenska unapred dogovorena narudžbina i odgovor) koji su posebno predviđeni za opoziv, zamenu (ili dopunu), prihvatanje ili odbijanje drugog dokumenta.

## ODNOS SA PEPPOL STANDARDOM

Za naručivanje robe i usluga, standard PEPPOL BIS verzije 3.0 definiše tri tipa dokumenata:

- Order transaction 3.0;
- Order Response transaction 3.0;
- Order Agreement transaction 3.0;

i tri procesa (nazvana profili):

- BIS Order only 3.0;
- BIS Ordering 3.0;
- BIS Order Agreement 3.0.