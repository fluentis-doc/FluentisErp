---
title: Vrste dokumenata
sidebar_position: 2
---

## Narudžba

Narudžba je dokument koji predstavlja narudžbu robe i usluga koju izdaje kupac (pošiljatelj) i upućuje dobavljaču (primatelju). Narudžba se sastoji od jednog ili više redaka narudžbe u kojima su navedeni roba ili usluga koju kupac namjerava nabaviti, količina i cijena.

**Narudžba je pripremljena u formatu opisanom specifikacijom PEPPOL Order transaction 3.0.**

Narudžba može:

- neovisno o drugim prethodno izdanim narudžbama, odrediti robu i/ili usluge koje kupac namjerava nabaviti te odgovarajuće upute za izvršenje isporuke (početna narudžba). Početna narudžba ne sadrži reference na druge narudžbe;
- neovisno o drugim prethodno izdanim narudžbama, odrediti robu i/ili usluge koje kupac namjerava nabaviti te odgovarajuće upute za izvršenje isporuke, ali istodobno biti općenito povezana s drugim dokumentom (povezana početna narudžba). Povezana početna narudžba sadrži referencu na dokument s kojim je povezana i oznaku da je riječ samo o „povezivanju”;
- opozvati prethodno izdanu narudžbu (narudžba za opoziv). Narudžba za opoziv sadrži oznaku da je riječ o „opozivu” i referencu na narudžbu koju se namjerava opozvati;
- zamijeniti prethodno izdanu narudžbu (zamjenska narudžba). Izmjena narudžbe nova je narudžba koja sadrži sve retke narudžbe, oznaku da je riječ o „izmjeni” i referencu na narudžbu koju se namjerava izmijeniti.

Zamjene i opozivi zamjenjuju odnosno poništavaju navedenu narudžbu, kao i sve druge već poslane zamjene i opozive koji se odnose na odgovarajuću početnu narudžbu.

Povezana početna narudžba može se koristiti isključivo za evidentiranje činjenice da je novi postupak koji se namjerava pokrenuti povezan s prethodnim postupkom. Nikada se ne smije koristiti umjesto drugih mehanizama (narudžba za opoziv, zamjenska narudžba i narudžba za potvrdu) koji su posebno predviđeni za opoziv, zamjenu (ili dopunu), potvrdu ili odbijanje drugog dokumenta.

## Odgovor

Odgovor je dokument kojim dobavljač (pošiljatelj) prihvaća, odbija ili predlaže izmjene narudžbe koju je primio od kupca (primatelja).

**Odgovor je pripremljen u formatu opisanom specifikacijom PEPPOL Order Response transaction 3.0.**

Odgovorom dobavljač može obavijestiti kupca da:

- je primio narudžbu (odgovor o primitku), ali je još nije obradio. Riječ je o privremenoj obavijesti koja ne sadrži nikakvu informaciju o tome hoće li i na koji način dobavljač postupiti prema narudžbi. Odgovor o primitku ne sadrži retke narudžbe, već oznaku da je riječ o „primitku” („AB”) i referencu na narudžbu za koju se potvrđuje primitak;
- namjerava postupiti prema primljenoj narudžbi (odgovor o prihvaćanju). Odgovor o prihvaćanju ne sadrži retke narudžbe, već oznaku da je riječ o „prihvaćanju” i referencu na narudžbu koju namjerava prihvatiti;
- odbija primljenu narudžbu (odgovor o odbijanju). Odgovor o odbijanju ne sadrži retke narudžbe, već oznaku da je riječ o „odbijanju” i referencu na narudžbu koju namjerava odbiti;
- namjerava postupiti prema primljenoj narudžbi uz određene izmjene (odgovor s izmjenama). Odgovor s izmjenama sadrži oznaku da je riječ o „izmjeni” i referencu na narudžbu koju namjerava izmijeniti. Mora sadržavati sve retke narudžbe, i one koje namjerava zadržati i one koje namjerava izmijeniti, jer predstavlja dopunu prethodno poslane narudžbe na koju se odnosi.

Odgovori s izmjenama i odgovori o odbijanju dopunjuju odnosno poništavaju navedenu narudžbu, kao i sve druge već poslane izmjene i opozive koji se odnose na istu početnu narudžbu.

Odgovor na opozvanu narudžbu nema učinka.

## Narudžba za potvrdu

Narudžba za potvrdu dokument je kojim kupac (pošiljatelj) potvrđuje, odbija ili zamjenjuje (zamjenska narudžba za potvrdu) unaprijed dogovorenu narudžbu ili odgovor koji je poslao dobavljač (primatelj).

**Narudžba za potvrdu zapravo je narudžba koja se odnosi na dokument koji je poslao dobavljač. Stoga je pripremljena u istom formatu, opisanom specifikacijom PEPPOL Order transaction 3.0.**

Narudžbom za potvrdu kupac može obavijestiti dobavljača:

- da potvrđuje unaprijed dogovorenu narudžbu ili odgovor koji je poslao dobavljač (narudžba za potvrdu – potvrda). Narudžba za potvrdu – potvrda sadrži oznaku da je riječ o „potvrdi” i referencu na unaprijed dogovorenu narudžbu ili odgovor koji se namjerava potvrditi;
- da odbija unaprijed dogovorenu narudžbu ili odgovor koji je poslao dobavljač (narudžba za potvrdu – odbijanje). Narudžba za potvrdu – odbijanje sadrži oznaku da je riječ o „odbijanju” i referencu na narudžbu ili odgovor koji se namjerava odbiti;
- da namjerava zamijeniti unaprijed dogovorenu narudžbu ili odgovor koji je poslao dobavljač (zamjenska narudžba za potvrdu). Zamjenska narudžba za potvrdu nova je narudžba koja sadrži sve retke narudžbe, oznaku da je riječ o „zamjeni” i referencu na narudžbu ili odgovor koji se namjerava zamijeniti.

Zamjenske narudžbe za potvrdu i narudžbe za potvrdu – odbijanje zamjenjuju odnosno poništavaju unaprijed dogovorenu narudžbu ili odgovor na koji se odnose, kao i sve druge već poslane zamjene i opozive povezane s odgovarajućom početnom narudžbom.

Narudžba za potvrdu koja se odnosi na opozvanu unaprijed dogovorenu narudžbu nema učinka.

## Unaprijed dogovorena narudžba

Unaprijed dogovorena narudžba dokument je koji predstavlja narudžbu robe i usluga, a izdaje ga dobavljač (pošiljatelj) umjesto kupca (primatelja), u dogovoru s kupcem.

Unaprijed dogovorena narudžba sastoji se od jednog ili više redaka narudžbe u kojima su navedeni roba ili usluga koja je predmet nabave, količina i cijena.

**Unaprijed dogovorena narudžba pripremljena je u formatu opisanom specifikacijom PEPPOL Order Agreement transaction 3.0.**

Unaprijed dogovorena narudžba može:

- neovisno o drugim prethodno izdanim unaprijed dogovorenim narudžbama, odrediti robu i/ili usluge koje kupac namjerava nabaviti te odgovarajuće upute za izvršenje isporuke (početna unaprijed dogovorena narudžba). Početna unaprijed dogovorena narudžba ne sadrži reference na druge unaprijed dogovorene narudžbe;
- neovisno o drugim prethodno izdanim unaprijed dogovorenim narudžbama, odrediti robu i/ili usluge koje kupac namjerava nabaviti te odgovarajuće upute za izvršenje isporuke, ali istodobno biti općenito povezana s drugim dokumentom (povezana početna unaprijed dogovorena narudžba). Povezana početna unaprijed dogovorena narudžba sadrži referencu na dokument s kojim je povezana i oznaku da je riječ samo o „povezivanju”;
- opozvati prethodno izdanu unaprijed dogovorenu narudžbu (unaprijed dogovorena narudžba za opoziv). Unaprijed dogovorena narudžba za opoziv sadrži oznaku da je riječ o „opozivu” („Cancelled”) i referencu na unaprijed dogovorenu narudžbu koju se namjerava opozvati. Osim toga, sadrži samo jedan redak narudžbe bez sadržaja;
- zamijeniti prethodno izdanu unaprijed dogovorenu narudžbu (zamjenska unaprijed dogovorena narudžba). Izmjena unaprijed dogovorene narudžbe nova je unaprijed dogovorena narudžba koja sadrži sve retke narudžbe, oznaku da je riječ o „zamjeni” („Revised”) i referencu na unaprijed dogovorenu narudžbu koju se namjerava izmijeniti.

Zamjene i opozivi zamjenjuju odnosno poništavaju navedenu unaprijed dogovorenu narudžbu, kao i sve druge već poslane zamjene i opozive koji se odnose na odgovarajuću početnu unaprijed dogovorenu narudžbu.

Povezana početna unaprijed dogovorena narudžba može se koristiti isključivo za evidentiranje činjenice da je novi postupak koji se namjerava pokrenuti povezan s prethodnim postupkom. Nikada se ne smije koristiti umjesto drugih mehanizama (unaprijed dogovorena narudžba za opoziv, zamjenska unaprijed dogovorena narudžba i odgovor) koji su posebno predviđeni za opoziv, zamjenu (ili dopunu), prihvaćanje ili odbijanje drugog dokumenta.

## ODNOS S PEPPOL STANDARDOM

Za naručivanje robe i usluga, standard PEPPOL BIS verzije 3.0 definira tri vrste dokumenata:

- Order transaction 3.0;
- Order Response transaction 3.0;
- Order Agreement transaction 3.0;

i tri procesa (nazvana profili):

- BIS Order only 3.0;
- BIS Ordering 3.0;
- BIS Order Agreement 3.0.