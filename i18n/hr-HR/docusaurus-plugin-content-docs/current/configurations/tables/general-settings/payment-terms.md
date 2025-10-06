---
title: Mogućnosti / Načini plaćanja
sidebar_position: 10
---

:::tip[FAst Start]
Ova je tablica uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

U slučaju da se konfiguracija želi provesti ručno, preporučuje se konzultirati kontrolni popis na poveznici.  
:::

Tablica sadrži rješenja plaćanja koja se koriste u sustavu za izračun dospijeća i otvorenih stavki.  

:::danger Pažnja 
Ispravno unesen način plaćanja zahtijeva popunjavanje i gornje mreže i mreže s detaljima koja definira izračun dana dospijeća. Iako program omogućuje spremanje bez unosa u mrežu s detaljima, takvo rješenje neće biti moguće koristiti u praksi. 
:::

### Gornja mreža

**Rješenje / Opis**: Predstavlja šifru i opis načina plaćanja koji će se primijeniti.

**Kraj mjeseca**: Ako je flag aktivan, odgoda plaćanja se računa do kraja mjeseca nakon primjene broja dana definiranih u donjoj mreži s detaljima.

**Kraj tjedna**: Ako je flag aktivan, dospijeće se pomiče na prvi sljedeći petak nakon datuma dobivenog primjenom dana iz donje mreže.

**Dani**: Broj dana koji se dodaje na kraj mjeseca za dobivanje fiksnog dana dospijeća. Ispravno postavljanje uključuje definiranje broja dana odgode u donjoj mreži (može biti i nula), zatim se primjenjuje flag "kraj mjeseca" te se dodatno dodaju eventualni dani iz ovog polja. Za normalizaciju izračuna preporučuje se uključiti i flag za komercijalni kalendar, kojim se svi mjeseci tretiraju kao da imaju 30 dana.

**DL Članak 62**: koji označava dvije rate na 30 i 60 dana, koje se primjenjuju na račune s pokvarljivom robom, sukladno članku 62 Zakonske uredbe od 24. siječnja 2012. br. 1.

[**Vidi šifrarnik kupaca i dobavljača**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)

**Država**: Filtriranje koje omogućuje da je određeni način plaćanja vidljiv samo tvrtkama u bazi podataka koje imaju navedenu državu kao matičnu. Ovo je korisno jer je tablica zajednička svim tvrtkama u istoj bazi.


### Donja mreža

Kod definiranja obročne otplate moguće je raspodijeliti osnovicu, PDV i troškove dokumenta po različitim ratama u postotcima (napomena: postotak troškova se ne primjenjuje izravno u knjiženjima u glavnoj knjizi). Ako postotak ostane nula, ***Fluentis*** će ravnomjerno raspodijeliti iznos na broj rata.

**Komercijalno**: Ova opcija omogućuje unos samo višekratnika od 30 dana, koji se zatim tretiraju kao puni mjeseci.

Primjer: Ako imamo dospijeće „30 dana kraj mjeseca“ i račun je izdan 31.01., tada bez flag-a „komercijalno“ 30 kalendarskih dana vodi do 02.03., a kraj mjeseca daje 31.03. — dakle zapravo 60 dana. Ako je flag komercijalno aktivan, tada se 30 dana tretira kao jedan mjesec, pa dospijeće ispravno pada na 28. ili 29. veljače.

### Jezici

Za svaki odabrani način plaćanja u gornjoj mreži moguće je definirati opise na drugim jezicima, što je korisno za potrebe prilagođenog ispisa.
