---
title: Dupliciranje artikala
sidebar_position: 4
---

Proceduri za dupliciranje artikala pristupa se putem menija **Početna > Artikli > Dupliciranje artikala**.

U ovom prozoru moguće je kreirati nove artikle dupliciranjem već postojećih artikala. Na taj način mogu se kopirati sve informacije zajedničke izvornom i novom artiklu.

### Područje filtera

U području filtera moguće je postaviti niz kriterijuma pretrage koji omogućavaju pronalaženje artikla ili grupe artikala sa željenim karakteristikama unutar baze podataka, kako bi se lakše pronašao artikal koji će poslužiti kao osnova za dupliciranje.

Pomoću ovih filtera moguće je prikazati:

- pojedinačni artikal (npr. pretragom po šifri artikla);
- više artikala iste klase unosom klase artikla;
- artikle sa istim karakteristikama ili istom robnom kategorijom (npr. pretragom po karakteristici i robnoj kategoriji);
- artikle iste vrste ili sa istom nomenklaturom;
- sve artikle povezane sa istim preferiranim dobavljačem, istim statusom ili verzijom;
- kod nabavnih materijala, pretragu prema šifri artikla dobavljača;
- pretragu prema barkodu.

Otvaranjem proširenih sekcija **Napredna pretraga** i **Lotovi i serijski brojevi** moguće je dodatno filtrirati prema statusu artikla (fiktivan, arhiviran/nearhiviran, u povlačenju/nedostatku) ili prema načinu upravljanja artiklom (upravljanje lotovima, serijskim brojevima, RFID ili jedinstvenim RFID-om).

Nakon definisanja željenih filtera, klikom na dugme **Traži** na ribbon traci sistem pronalazi artikle koji odgovaraju odabranim kriterijumima i prikazuje ih u mreži rezultata.

### Posebna dugmad

> **Generiši prototipove artikla**: aktivira se nakon odabira roditeljskog artikla i definisanja novog artikla u prvoj kartici *Artikal za dupliciranje*. Na taj način generiše se prototip novog artikla koji će kasnije biti definisan i potvrđen;
> **Označi/Odznači sve**: omogućava označavanje ili uklanjanje oznake sa svih artikala prikazanih u rezultatima pretrage;
> **Obriši prototip odabranog elementa**: omogućava brisanje prethodno generisanog prototipa prije njegove konačne potvrde;
> **Potvrdi prototipove odabranih stavki**: potvrđuje prethodno kreirani prototip i zvanično generiše novi artikal u bazi podataka.

U nastavku su opisani koraci potrebni za dupliciranje artikla.

### Artikal za dupliranje

Ova kartica sadrži mrežu rezultata u kojoj se prikazuje artikal ili lista artikala koji odgovaraju prethodno definisanim kriterijumima pretrage.
Nakon što se odabere roditeljski artikal koji će služiti kao osnova za dupliranje, u donjem dijelu automatski se popunjavaju određeni podaci: **Preduzeće**, **Odjeljenje**, **Klasa artikla** i **Broj prototipova**.
Sve navedene podatke moguće je naknadno ručno izmijeniti putem padajućih menija ili unosom nove vrijednosti u polje **Broj prototipova**.
**Šifra artikla** generiše se prema pravilima definisanim za odabranu klasu artikla u tabeli **Klase artikala**.
Odabirom klase artikla, u mreži sa desne strane prikazuju se informacije o načinu generisanja šifre za artikle te klase. U prikazanom primjeru šifra se sastoji od:
- jednog *Extra Data* polja koje predstavlja državu (vrijednost se koristi i u šifri i u opisu);
- drugog *Extra Data* polja koje predstavlja boju (vrijednost se takođe koristi i u šifri i u opisu);
- dodatnog *Extra Data* polja koje ponovo predstavlja državu;
- progresivnog broja dužine tri cifre koji počinje vrijednošću 001;
- fiksne vrijednosti, koja je u ovom primjeru slovo **F**.

Ova konfiguracija prikazana je i u samoj kartici **Artikal za dupliranje**, gdje se unose vrijednosti za definisana polja (država, boja i ostali odabrani *Extra Data* atributi).
Nakon unosa podataka, polja **Šifra** i **Opis** automatski će prikazati novu šifru i opis artikla.
Nakon toga moguće je pokrenuti generisanje **Prototipa artikla** klikom na istoimeno dugme na *ribbon* traci.
Generisani prototip prikazuje se u sljedećoj kartici **Prototipovi artikla**.

### Parametri

U ovoj kartici mogu se odabrati parametri koji određuju način dupliranja artikla.
Prozor sadrži niz oznaka (*flagova*) kojima se definiše koje karakteristike artikla treba duplirati identično kao kod izvornog (roditeljskog) artikla. Te podatke je naknadno moguće ažurirati ili izmijeniti na novom (dječjem) artiklu.
Moguće je duplirati sljedeće podatke:
- troškove;
- težine i dimenzije;
- lotove i serijske brojeve;
- podatke nabavke;
- varijante;
- preferirane dobavljače (za nabavne artikle);
- kupce (za prodajne artikle);
- alternativne mjerne jedinice;
- slike;
- napomene;
- barkodove;
- podatke iz kartice **Administracija**;
- *Extra Data* podatke;
- podatke o pakovanju;
- ostale karakteristike artikla.

Svi navedeni podaci nalaze se unutar različitih kartica artikla i detaljno su opisani u odgovarajućoj dokumentaciji (vidi [Kreiranje artikla](/docs/erp-home/registers/items/create-new-item) i povezane dokumente).
Takođe je moguće duplirati i proizvodnu [Sastavnicu (BOM)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), pripadajući [Radni ciklus](/docs/erp-home/registers/production/routes/new-route) te [MRP parametre](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.
Unutar iste kartice nalazi se i dodatna sekcija u kojoj je moguće definisati boju pozadine ćelije i boju teksta kako bi se tokom generisanja prototipova lakše prepoznali:
- redovi koji sadrže nedostajuće podatke (na primjer, ako je neko od polja koje se duplira prazno na roditeljskom artiklu, odgovarajući red na novom artiklu biće označen odabranom bojom);
- artikli koji su već prethodno kreirani, odnosno situacije u kojima se pokušava generisati artikal identičan već postojećem artiklu u bazi podataka.
Nakon definisanja svih parametara moguće je nastaviti sa postupkom dupliranja artikla.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje formi, pogledajte dokument [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).