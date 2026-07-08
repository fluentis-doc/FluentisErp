---
title: "Šifarnik serijskih brojeva"
sidebar_position: 8
sidebar_label: "Šifarnik serijskih brojeva"
description: "Vodič za upravljanje šifarnikom serijskih brojeva, ključnom funkcionalnošću sistema Fluentis za sledljivost artikala."
schema: "TechArticle"
tags: ["Serijski brojevi", "Upravljanje skladištem", "Fluentis"]
keywords: ["Serijski brojevi", "Upravljanje artiklima", "Sledljivost", "Fluentis"]
---

# Šifarnik serijskih brojeva

:::important
Šifarnik serijskih brojeva u sistemu Fluentis ključan je modul za detaljno upravljanje serijskim brojevima koji preduzećima omogućava praćenje pojedinačnih artikala putem jedinstvenog identifikacionog koda. Ova funkcionalnost zadovoljava posebne zahteve u pogledu sledljivosti i sigurnosti, što je posebno važno za kritične artikle ili artikle visoke vrednosti, kod kojih je neophodno pratiti svaki pojedinačni komad, a ne samo ukupnu količinu.

Korisnik može pretražiti određeni serijski broj i jednostavnim dvostrukim klikom pregledati njegove detalje. U ovoj je sekciji moguće izmeniti ključne podatke, kao što su kod kupca, kod dobavljača i status serijskog broja, koji može biti poništen, prisilno zatvoren ili rezervisan. Šifarnik takođe pruža detaljne podatke o dokumentima ulaza i izlaza povezanim sa serijskim brojem, čime se omogućava potpuna analiza njegove upotrebe tokom vremena.

Sistematski pristup upravljanju serijskim brojevima ne samo da optimizuje interne procese već osigurava i usklađenost sa važećim propisima, čime ovaj šifarnik postaje neizostavan alat za savremena preduzeća koja žele maksimalno povećati operativnu efikasnost i kvalitet usluge.
:::

## Detalji lota

Ovaj prozor prikazuje detalje lota i sastoji se od četiri različite sekcije:

### Zaglavlje serijskog broja

U ovoj se sekciji prikazuju glavni podaci povezani sa lotom, od kojih je neke moguće izmeniti, a posebno:

- **Artikl**: u tri pripadajuća polja prikazuju se klasa, kod i opis artikla na koji se odnosi serijski broj. Reč je o artiklu za koji je aktivirana oznaka *Upravljanje serijskim brojevima* u *Šifarniku artikala* > kartica *Lotovi/SN*, jer u suprotnom ne bi bilo moguće izvršiti ulaz lota za taj artikl;

- **Varijanta**: u dva pripadajuća polja prikazuju se kod i opis varijante artikla na koji se odnosi serijski broj, ako postoji;

- **Šifra lota**: u ovom se polju prikazuje kod lota kojem pripada serijski broj. Artiklom na koji se odnosi serijski broj može se istovremeno upravljati i po lotovima; stoga, na primer, lot od 100 komada može sadržati 100 različitih serijskih brojeva. Isti serijski broj može takođe pripadati različitim lotovima istog artikla ili lotovima različitih artikala;

- **Vrsta lota**: označava upotrebljeni tip lota;

- **Vrsta šifre lota**: označava tip koda lota prema kojem je lot generisan;

- **Kod serijskog broja**: u ovom se polju prikazuje kod serijskog broja. Korisnik može uređivati ovo polje, iako se tokom ulaznih operacija kod može automatski generisati na osnovu pravila postavljenih u *Tipu serijskog broja* povezanom sa artiklom. Najpre se unose kod i opis *tipa koda serijskog broja*, red se čuva, a zatim se određuju parametri koji će se upotrebljavati za sastavljanje novog tipa koda serijskog broja. Za svaki upotrebljeni parametar moguće je odrediti broj znakova od kojih se sastoji i, prema potrebi, znak za popunjavanje. Na primer, ako se za parametar *Progresivni broj* kao znak za popunjavanje postavi „0”, a dužina na „5”, kreiraće se serijski brojevi počevši od 00000, zatim 00001, 00002 i tako dalje. *Tip koda serijskog broja* zatim je potrebno povezati sa Šifarnikom artikala u odgovarajućem polju na kartici *Lotovi/Serijski brojevi* kako bi se u postupcima koji automatski generišu kod serijskog broja za predmetni artikal serijski broj kreirao prema pravilima postavljenim u *tipu koda serijskog broja* povezanom sa artiklom. Polje je alfanumeričko i može sadržati najviše 50 znakova;

- **Vrsta serijskog broja**: označava tip koda serijskog broja prema kojem je serijski broj generisan;

- **Datum početka**: u ovom se polju po pravilu prikazuje datum ulaza serijskog broja, koji korisnik može izmeniti. Ako je serijski broj unet putem skladišnog knjiženja, predlaže se datum na koji je knjiženje kreirano; ako je serijski broj unet putem ulaza prijemnice dobavljača ili knjiženja povrata iz kooperacije, postavlja se datum prijemnice dobavljača ili dokumenta povrata iz kooperacije, osim ako ga korisnik nije ručno izmenio unutar dokumenta; ako je serijski broj unet putem knjiženja prijave proizvodnje, predlaže se datum prijave proizvodnje;

- **Datum isteka**: u ovom se polju prikazuje datum isteka serijskog broja, koji korisnik može izmeniti. Izračunava se prilikom kreiranja lota, odnosno ulaza pripadajućeg skladišnog kretanja, tako što se datumu početka dodaje broj dana važenja serijskog broja unet na kartici *Lotovi/SN* u Šifarniku artikala;

- **Šifra kupca**: u ovom se polju prikazuje kod *lota kupca*, odnosno po pravilu naziv koji kupac dodeljuje lotu. Korisnik može uređivati ovo polje, ali se ono ne može automatski generisati tokom ulaznih operacija. Polje može sadržati najviše 50 znakova, a isti kod može se upotrebljavati i za različite lotove različitih artikala;

- **Šifra dobavljača**: u ovom se polju prikazuje kod *lota dobavljača*, odnosno po pravilu naziv koji dobavljač dodeljuje lotu. Korisnik može uređivati ovo polje, ali se ono ne može automatski generisati tokom ulaznih operacija. Polje može sadržati najviše 50 znakova, a isti kod može se upotrebljavati i za različite lotove različitih artikala;

- **Dobavljač**: u ovom se polju navode konto i opis dobavljača;

- **Poništen**: ako je oznaka aktivirana, označava da je serijski broj poništen;

- **Prisilno zatvoren**: ako je oznaka aktivirana, označava da je serijski broj prisilno zatvoren;

- **Rezervisan**: ako je oznaka aktivirana, označava da je serijski broj rezervisan.

### Ulaz

U ovoj se sekciji prikazuju osnovni podaci o dokumentima koji su učestvovali u ulazu serijskog broja:

- **Količina**: količina lota rezervisana u dokumentu.
- **Merna jedinica**: merna jedinica upotrebljena u dokumentu.
- **Broj pakovanja**: broj pakovanja.
- **Datum unosa**: datum unosa.
- **Prisilno zatvoren**: ako je oznaka aktivirana, označava da je serijski broj prisilno zatvoren.
- **Referentni dokument**: tip dokumenta koji je generisao ulaz serijskog broja. To može biti skladišno knjiženje, prijemnica dobavljača ili povrat iz kooperacije.
- **Knjiženje**: u ovim se poljima prikazuju broj i datum dokumenta.
- **Skladište**: u ovim se poljima prikazuju kod i opis skladišta u koje je serijski broj primljen.
- **Lokacija**: u ovim se poljima prikazuju kod i opis lokacije.
- **Predložak**: u ovim se poljima prikazuju kod i opis predloška upotrebljenog za kreiranje tog ulaznog skladišnog kretanja.
- **Kupac/Dobavljač**: konto i opis kupca ili dobavljača.

### Izlaz

U ovoj se sekciji prikazuju osnovni podaci o prvom dokumentu, hronološkim redosledom, koji je rezervisao serijski broj. Podaci se prikazuju u mreži sa sledećim kolonama:

- **Količina**: količina lota rezervisana u dokumentu.
- **Merna jedinica**: merna jedinica upotrebljena u dokumentu.
- **Referentni dokument**: tip dokumenta koji je prvi rezervisao serijski broj. To može biti proizvodni nalog, nalog kupca, izlazna otpremnica, izlazni račun, lista za preuzimanje, otpremnica za isporuku u kooperaciju ili povrat iz kooperacije.
- **Knjiženje**: broj i datum dokumenta.
- **Skladište**: kod i opis skladišta.
- **Lokacija**: kod i opis lokacije.
- **Predložak**: kod i opis upotrebljenog predloška.
- **Kupac/Dobavljač**: konto i opis kupca ili dobavljača.

## Sažetak i dodatne informacije

Šifarnik serijskih brojeva u sistemu Fluentis ERP moćan je alat za upravljanje sledljivošću i sigurnošću artikala. Glavne sekcije obuhvataju **Zaglavlje serijskog broja**, **Ulaz** i **Izlaz**, od kojih svaka sadrži ključne podatke potrebne za podršku poslovnim procesima.

Za dodatne informacije pogledajte [Šifarnik artikala](/docs/erp-home/registers/items/create-new-item) i [Skladište](/docs/logistics/warehouse/warehouse-intro).