---
title: Izmjeni - Preračun rizika kupca 
sidebar_position: 1
---

Ovaj obrazac predstavlja zahtjev za pregled trenutne situacije klijenta, dok obrazac za "Korištenje kredita" omogućuje pohranu svakog izračuna koji se obavi i tako omogućuje prikaz povijesne serije.

Razmotrimo detaljno popis polja koji se prikazuju, u suštini identični onima u obrascu za izloženost kupaca.

U zaglavlju su prisutni parametri izračuna: konto klijenta, datum početka izračuna (postavljen prema zadanim postavkama modula za rizik klijenta), referentni datum obračuna (postavljen na današnji datum), broj dana kašnjenja na naplatu (postavljeni prema parametrima modula), oznaka za uzimanje u obzir stavki povezanih s privremenim računovodstvenim zapisima. Nakon što se pritisne gumb za izračun, prikazat će se sljedeće vrijednosti:

**Promet 12M**: promet (iz prodajnog područja, prodajnih faktura) u posljednjih 12 mjeseci prije referentnog datuma;

**Godišnji promet**: promet (iz prodajnog područja, prodajnih faktura) od početka godine;

U sekciji **Status otvorene dospjele vrijednosti** biti će vidljivi ukupni iznosi dugovanja/potraživanja i saldo povezani s otvorenim stavkama;

U sekciji **Plaćanja iz privremenih zapisa** biti će prikazani eventualni iznosi plaćanja uneseni u privremene računovodstvene zapise;

U sekciji **Status glavne knjige** biti će prikazani ukupni iznosi dugovanja/potraživanja i saldo glavne knjige;

**Dospjela vrijednost/Saldo glavne knjige**: prikazuje ukupne iznose dugovanja/potraživanja iz stavki ili salda, kao što je prikazano u prethodnim sekcijama;

**Fakture se obračunavaju**: iznosi faktura koje su ispisane, ali još nisu knjižene;

**Otpremnica za fakturiranje**: iznosi otpremnica koje su ispisane, ali još nisu fakturirane;

**Nalozi za izvršenje**: iznosi narudžbi koje su ispisane i potvrđene, ali još nisu izvršene;

**Izdani računi**: iznosi računa koji su izdani i knjiženi, ali još nisu predani na naplatu;

**Računi podložni naplati**: iznosi računa koji su predani, ali imaju datum dospijeća (plus broj dana prema parametrima postavljenim u zaglavlju izračuna) koji je veći od referentnog datuma;

Sekcija *Neplaćeni*: prikazani su neplaćeni iznosi koji nisu knjiženi, ili (ako je označeno) oni koji su već knjiženi, kako prema iznosu tako i prema broju stavki; 

Iz zbroja prethodnih vrijednosti izračunava se ‘Rizik klijenta’, koji u usporedbi s odobrenim kreditom pokazuje prekoračenje kredita. .

Polje **Istekao** prikazuje iznos otvorenih stavki koje su već dospjele, kao dodatni element za analizu situacije klijenta.



| Funkcija | Značenje |
| --- | --- |
| Spremi | Tipka koja omogućuje pohranu dobivenog rezultata. |
| Izračunavanje | Pokreće postupak za izračunavanje ukupne situacije rizika za klijenta. |






