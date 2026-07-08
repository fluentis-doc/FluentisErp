---
title: "Šifarnik serijskih brojeva"
sidebar_position: 8
sidebar_label: "Šifarnik serijskih brojeva"
description: "Vodič za upravljanje šifarnikom serijskih brojeva, ključnom funkcionalnošću sustava Fluentis za sljedivost artikala."
schema: "TechArticle"
tags: ["Serijski brojevi", "Upravljanje skladištem", "Fluentis"]
keywords: ["Serijski brojevi", "Upravljanje artiklima", "Sljedivost", "Fluentis"]
---

# Šifarnik serijskih brojeva

:::important
Šifarnik serijskih brojeva u sustavu Fluentis ključan je modul za detaljno upravljanje serijskim brojevima koji poduzećima omogućuje praćenje pojedinačnih artikala putem jedinstvenog identifikacijskog koda. Ova funkcionalnost zadovoljava posebne zahtjeve u pogledu sljedivosti i sigurnosti, što je posebno važno za kritične artikle ili artikle visoke vrijednosti, kod kojih je nužno pratiti svaki pojedini komad, a ne samo ukupnu količinu.

Korisnik može pretražiti određeni serijski broj i jednostavnim dvostrukim klikom pregledati njegove detalje. U ovoj je sekciji moguće izmijeniti ključne podatke, kao što su kod kupca, kod dobavljača i status serijskog broja, koji može biti poništen, prisilno zatvoren ili rezerviran. Šifarnik također pruža detaljne podatke o dokumentima ulaza i izlaza povezanima sa serijskim brojem, čime se omogućuje potpuna analiza njegove upotrebe tijekom vremena.

Sustavan pristup upravljanju serijskim brojevima ne samo da optimizira interne procese već osigurava i usklađenost s važećim propisima, čime ovaj šifarnik postaje neizostavan alat za suvremena poduzeća koja žele maksimalno povećati operativnu učinkovitost i kvalitetu usluge.
:::

## Detalji lota

Ovaj prozor prikazuje detalje lota i sastoji se od četiriju različitih sekcija:

### Zaglavlje serijskog broja

U ovoj se sekciji prikazuju glavni podaci povezani s lotom, od kojih je neke moguće izmijeniti, a posebno:

- **Artikl**: u trima pripadajućim poljima prikazuju se klasa, kod i opis artikla na koji se odnosi serijski broj. Riječ je o artiklu za koji je aktivirana oznaka *Upravljanje serijskim brojevima* u *Šifarniku artikala* > kartica *Lotovi/SN*, jer u protivnom ne bi bilo moguće izvršiti ulaz lota za taj artikl;

- **Varijanta**: u dvama pripadajućim poljima prikazuju se kod i opis varijante artikla na koji se odnosi serijski broj, ako postoji;

- **Šifra lota**: u ovom se polju prikazuje kod lota kojem pripada serijski broj. Artiklom na koji se odnosi serijski broj može se istodobno upravljati i po lotovima; stoga, primjerice, lot od 100 komada može sadržavati 100 različitih serijskih brojeva. Isti serijski broj može također pripadati različitim lotovima istog artikla ili lotovima različitih artikala;

- **Vrsta lota**: označava upotrijebljeni tip lota;

- **Vrsta šifre lota**: označava tip koda lota prema kojem je lot generiran;

- **Kod serijskog broja**: u ovom se polju prikazuje kod serijskog broja. Korisnik može uređivati ovo polje, iako se tijekom ulaznih operacija kod može automatski generirati na temelju pravila postavljenih u *Tipu serijskog broja* povezanom s artiklom. Najprije se unose kod i opis *tipa koda serijskog broja*, redak se sprema, a zatim se određuju parametri koji će se upotrebljavati za sastavljanje novog tipa koda serijskog broja. Za svaki upotrijebljeni parametar moguće je odrediti broj znakova od kojih se sastoji te, prema potrebi, znak za popunjavanje. Primjerice, ako se za parametar *Progresivni broj* kao znak za popunjavanje postavi „0”, a duljina na „5”, kreirat će se serijski brojevi počevši od 00000, zatim 00001, 00002 i tako dalje. *Tip koda serijskog broja* zatim je potrebno povezati sa Šifarnikom artikala u odgovarajućem polju na kartici *Lotovi/Serijski brojevi* kako bi se u postupcima koji automatski generiraju kod serijskog broja za predmetni artikl serijski broj kreirao prema pravilima postavljenima u *tipu koda serijskog broja* povezanom s artiklom. Polje je alfanumeričko i može sadržavati najviše 50 znakova;

- **Vrsta serijskog broja**: označava tip koda serijskog broja prema kojem je serijski broj generiran;

- **Datum početka**: u ovom se polju u pravilu prikazuje datum ulaza serijskog broja, koji korisnik može izmijeniti. Ako je serijski broj unesen putem skladišnog knjiženja, predlaže se datum na koji je knjiženje kreirano; ako je serijski broj unesen putem ulaza primke dobavljača ili knjiženja povrata iz kooperacije, postavlja se datum primke dobavljača ili dokumenta povrata iz kooperacije, osim ako ga korisnik nije ručno izmijenio unutar dokumenta; ako je serijski broj unesen putem knjiženja prijave proizvodnje, predlaže se datum prijave proizvodnje;

- **Datum isteka**: u ovom se polju prikazuje datum isteka serijskog broja, koji korisnik može izmijeniti. Izračunava se prilikom kreiranja lota, odnosno ulaza pripadajućeg skladišnog pokreta, tako da se datumu početka dodaje broj dana valjanosti serijskog broja unesen na kartici *Lotovi/SN* u Šifarniku artikala;

- **Šifra kupca**: u ovom se polju prikazuje kod *lota kupca*, odnosno u pravilu naziv koji kupac dodjeljuje lotu. Korisnik može uređivati ovo polje, ali se ono ne može automatski generirati tijekom ulaznih operacija. Polje može sadržavati najviše 50 znakova, a isti kod može se upotrebljavati i za različite lotove različitih artikala;

- **Šifra dobavljača**: u ovom se polju prikazuje kod *lota dobavljača*, odnosno u pravilu naziv koji dobavljač dodjeljuje lotu. Korisnik može uređivati ovo polje, ali se ono ne može automatski generirati tijekom ulaznih operacija. Polje može sadržavati najviše 50 znakova, a isti kod može se upotrebljavati i za različite lotove različitih artikala;

- **Dobavljač**: u ovom se polju navode konto i opis dobavljača;

- **Poništen**: ako je oznaka aktivirana, označava da je serijski broj poništen;

- **Prisilno zatvoren**: ako je oznaka aktivirana, označava da je serijski broj prisilno zatvoren;

- **Rezerviran**: ako je oznaka aktivirana, označava da je serijski broj rezerviran.

### Ulaz

U ovoj se sekciji prikazuju osnovni podaci o dokumentima koji su sudjelovali u ulazu serijskog broja:

- **Količina**: količina lota rezervirana u dokumentu.
- **Mjerna jedinica**: mjerna jedinica upotrijebljena u dokumentu.
- **Broj pakiranja**: broj pakiranja.
- **Datum unosa**: datum unosa.
- **Prisilno zatvoren**: ako je oznaka aktivirana, označava da je serijski broj prisilno zatvoren.
- **Referentni dokument**: tip dokumenta koji je generirao ulaz serijskog broja. To može biti skladišno knjiženje, primka dobavljača ili povrat iz kooperacije.
- **Knjiženje**: u ovim se poljima prikazuju broj i datum dokumenta.
- **Skladište**: u ovim se poljima prikazuju kod i opis skladišta u koje je serijski broj zaprimljen.
- **Lokacija**: u ovim se poljima prikazuju kod i opis lokacije.
- **Predložak**: u ovim se poljima prikazuju kod i opis predloška upotrijebljenog za kreiranje tog ulaznog skladišnog pokreta.
- **Kupac/Dobavljač**: konto i opis kupca ili dobavljača.

### Izlaz

U ovoj se sekciji prikazuju osnovni podaci o prvom dokumentu, kronološkim redoslijedom, koji je rezervirao serijski broj. Podaci se prikazuju u mreži sa sljedećim stupcima:

- **Količina**: količina lota rezervirana u dokumentu.
- **Mjerna jedinica**: mjerna jedinica upotrijebljena u dokumentu.
- **Referentni dokument**: tip dokumenta koji je prvi rezervirao serijski broj. To može biti proizvodni nalog, nalog kupca, izlazna otpremnica, izlazni račun, lista za preuzimanje, otpremnica za isporuku u kooperaciju ili povrat iz kooperacije.
- **Knjiženje**: broj i datum dokumenta.
- **Skladište**: kod i opis skladišta.
- **Lokacija**: kod i opis lokacije.
- **Predložak**: kod i opis upotrijebljenog predloška.
- **Kupac/Dobavljač**: konto i opis kupca ili dobavljača.

## Sažetak i dodatne informacije

Šifarnik serijskih brojeva u sustavu Fluentis ERP moćan je alat za upravljanje sljedivošću i sigurnošću artikala. Glavne sekcije obuhvaćaju **Zaglavlje serijskog broja**, **Ulaz** i **Izlaz**, od kojih svaka sadrži ključne podatke potrebne za podršku poslovnim procesima.

Za dodatne informacije pogledajte [Šifarnik artikala](/docs/erp-home/registers/items/create-new-item) i [Skladište](/docs/logistics/warehouse/warehouse-intro).