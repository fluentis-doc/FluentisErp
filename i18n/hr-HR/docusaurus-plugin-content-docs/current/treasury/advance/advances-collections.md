---
title: Uvod
sidebar_position: 1
---

:::note[Info]
Praksa predfinanciranja računa u banci predstavlja financijsku operaciju koju poduzeća često koriste kako bi osigurala trenutnu likvidnost. Riječ je o postupku u kojem se računi izdani klijentima naplaćuju unaprijed, prije njihovog dospijeća. Na taj način komercijalna potraživanja pretvaraju se u gotovinu, što omogućuje učinkovitije upravljanje novčanim tokom, pravovremeno podmirenje obveza te lakše planiranje ulaganja – bez potrebe za čekanjem na naplatu od klijenata.

Tvrtka banci predočuje jedan ili više računa koje klijenti još nisu platili. Banka unaprijed isplaćuje dio vrijednosti računa, obično između 70% i 90%, zadržavajući dio kao jamstvo do potpune otplate. Kada klijent plati račun, banka zadržava proviziju i ostatak iznosa uplaćuje tvrtki.

U računovodstvenom smislu, tvrtka bilježi dug prema banci za iznos koji je unaprijed isplaćen. Kada klijent izvrši uplatu, tvrtka zatvara dug prema banci i bilježi troškove za provizije i druge povezane izdatke.
:::

Pomoću ovog modula Fluentis ERP-a moguće je upravljati popisima predfinanciranja računa koje treba dostaviti banci, umanjeno za provizije i kamate, te knjižiti i prezentaciju i konačnu naplatu.

Prije unosa novih popisa predfinanciranja, potrebno je unaprijed postaviti tablicu TIPOVI AVANSA.

U ovoj tablici definiraju se mogući tipovi avansa i odgovarajući parametri.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**Šifra / Opis**: proizvoljan upis šife i opisa avansa.

**Vrsta obračuna** (šifra / opis): moguće opcije su Osnovica ili Ukupni dokument. Ovo označava hoće li postotak koji banka predfinancira biti izračunat na temelju ukupnog iznosa računa ili samo na osnovicu bez PDV-a. .

**Postotak računa s predujmom**: ovdje se postavlja vrijednost postotka računa koji će banka predfinancirati.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**Vrsta akvizicije**: moguće opcije su Dospijeće ili Računi. Ova opcija kontrolira samo način prikaza podataka u prozoru za pretraživanje prilikom kreiranja novog popisa avansa, odnosno hoće li se moći odabrati cijeli račun ili pojedinačna dospijeća računa. U svakom slučaju, s aspekta baze podataka, upravlja se svim dospijećima, čak i u načinu rada s računima.

**Numeracija**: potrebno je postaviti numeraciju iz odgovarajuće tablice numeratora za ovu vrstu dokumenta.

**Banka C/C**: (konto/podkonto opis): ovdje se unosi podkonto koji će se koristiti za knjiženje u vezi s bankovnim računom.

**Bankovni konto avansa**: konto koji će se koristiti za knjiženje bankovnog predfinanciranja/avansa.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**Konto pasivne kamate**: konto koji će se koristiti za knjiženje kamata na teret.

**Konto za provizije**: konto koji će se koristiti za knjiženje bankovnih provizija.






