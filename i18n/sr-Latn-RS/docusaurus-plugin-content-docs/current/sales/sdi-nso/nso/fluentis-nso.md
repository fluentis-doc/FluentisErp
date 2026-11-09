---
title: Fluentis NSO
sidebar_position: 5
---

## Konfiguracija

Prvi korak konfiguracije je uključivanje oznake **Prenos elektronskih narudžbina/naloga** na putanji *Početna > Tabele > Opšta podešavanja > Konfiguracija elektronskih dokumenata* u kartici **Peppol**.

U tabeli **Konfiguracija elektronskih dokumenata** moguće je za svako preduzeće definisati upotrebu prijema i slanja elektronskih narudžbina sa javnom upravom. U istoj tabeli moguće je odrediti i način izvršavanja određenih transakcija.

Među tabelama opštih podešavanja nalazi se odeljak PEPPOL koji sadrži:

**Unapred definisane tabele:**

- Standardni PEPPOL tipovi narudžbina kupaca – sadrže šifre tipova narudžbina i podnarudžbina definisane u listi šifara PEPPOL standarda.
- Standardne PEPPOL šifre mernih jedinica – sadrže merne jedinice definisane u listi šifara PEPPOL standarda.
- Standardne PEPPOL šifre PDV-a – sadrže šifre PDV-a definisane u listi šifara PEPPOL standarda.
- Standardne PEPPOL šifre popusta
- Standardne PEPPOL šifre troškova
- Standardna PEPPOL klasifikacija artikala
- Tipovi procesa
- Tipovi dokumenata

## Tabele koje je potrebno konfigurisati

Potrebno je konfigurisati sledeće tabele:

- Fluentis tipovi narudžbina koji odgovaraju PEPPOL tipovima narudžbina (konfiguracija tipova narudžbina kupaca).
- Fluentis šifre PDV-a koje odgovaraju PEPPOL šiframa PDV-a (konfiguracija PDV-a).
- Fluentis merne jedinice koje odgovaraju PEPPOL šiframa mernih jedinica (konfiguracija mernih jedinica).
- U tabeli Tipovi barkodova potrebno je definisati koji tip barkoda označava AIC šifru, standardnu šifru ili klasifikaciju artikala.
- Konfiguracija tipova popusta, u kojoj se Fluentis tipovi popusta povezuju sa PEPPOL šiframa popusta.
- Konfiguracija tipova troškova, u kojoj se Fluentis tipovi troškova povezuju sa PEPPOL šiframa troškova.

## Podaci unapred definisanih tabela

Potrebno je odrediti tip narudžbine koristeći vrednosti iz odgovarajuće liste šifara predviđene PEPPOL standardom, koja uključuje sledeće dve šifre:

- „220” za narudžbine za nabavku;
- „227” za narudžbine za isporuku.

U dokumentima tipa:

- početna i zamenska narudžbina;
- zamenska narudžbina za potvrdu;

šifra tipa narudžbine navodi se u elementu „OrderTypeCode”, kao što je prikazano u sledećem primeru:

```xml
<cbc:OrderTypeCode>220</cbc:OrderTypeCode>
```

U dokumentima tipa:

- početna i zamenska unapred dogovorena narudžbina;

šifra tipa narudžbine navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, kao što je prikazano u sledećem primeru:

```xml
<cac:DeliveryTerms>
  <cbc:SpecialTerms>220</cbc:SpecialTerms>
</cac:DeliveryTerms>
```

Postoji i dodatna klasifikacija tipova narudžbina koja nije obavezna.

Za tip narudžbine 220 – Narudžbina za nabavku:

- OF – Narudžbina za fakturisanje već potrošenih proizvoda
- OFR – Narudžbina za fakturisanje i dopunu

Za tip narudžbine 227 – Narudžbina za isporuku:

- CD – Konsignacija
- CV – Isporuka na pregled
- CG – Besplatno ustupanje na korišćenje

U dokumentima tipa:

- početna i zamenska narudžbina;
- zamenska narudžbina za potvrdu;

šifra podtipa narudžbine navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, kao što je prikazano u sledećem primeru:

```xml
<cac:DeliveryTerms>
  <cbc:SpecialTerms>OFR</cbc:SpecialTerms>
</cac:DeliveryTerms>
```

U dokumentima tipa:

- početna i zamenska unapred dogovorena narudžbina;

šifra podtipa narudžbine navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, nakon šifre tipa narudžbine, primenom formata strukturiranih polja, kao što je prikazano u sledećem primeru:

```xml
<cac:DeliveryTerms>
  <cbc:SpecialTerms>220#OFR</cbc:SpecialTerms>
</cac:DeliveryTerms>
```

## Šifra artikla

Proizvod (roba ili usluga) unutar svakog reda narudžbine identifikuje se nazivom (element „Name”, koji je obavezan) i opisom (element „Description”), kao i pomoću identifikacionih šifara.

Konkretno, struktura navedenih dokumenata prvenstveno predviđa dve vrste šifara:

- šifru koju dodeljuje dobavljač (element „SellersItemIdentification/ID”);
- standardnu šifru, koja odgovara identifikatoru dodeljenom proizvodu u sistemu jedinstvene identifikacije (element „StandardItemIdentification/ID”), izabranom iz odgovarajuće liste šifara predviđene PEPPOL standardom.

Navedeni elementi nisu obavezni, ali se njihova upotreba izričito preporučuje.

Primer:

```xml
<cac:OrderLine>
  <cac:LineItem>
    <cac:Item>
      <cbc:Name>Nalivpero</cbc:Name>
      <cbc:Description>Nalivpero – limitirano izdanje</cbc:Description>
      <cac:SellersItemIdentification>
        <cbc:ID>Stilo24</cbc:ID>
      </cac:SellersItemIdentification>
      <cac:StandardItemIdentification>
        <cbc:ID schemeID="0160">0K10999746</cbc:ID>
      </cac:StandardItemIdentification>
    </cac:Item>
  </cac:LineItem>
</cac:OrderLine>
```

Za robu široke potrošnje preporučuje se popunjavanje elementa „StandardItemIdentification/ID” odgovarajućom GTIN šifrom (koja odgovara vrednosti „schemeID=0160” u listi šifara PEPPOL standarda), kao što je prikazano u prethodnom primeru.

Za farmaceutske proizvode koji imaju šifru odobrenja za stavljanje u promet (AIC), koju izdaje Italijanska agencija za lekove (AIFA), element „SellersItemIdentification/ID” uvek se mora popuniti odgovarajućom AIC šifrom.

## Robna grupa

Za svaki proizvod unutar odgovarajućeg reda narudžbine moguće je navesti jednu ili više klasifikacionih šifara popunjavanjem polja „ItemClassificationCode/ID” elementa „CommodityClassification”.

Vrednost mora biti preuzeta iz sistema jedinstvene klasifikacije izabranog među onima koji se nalaze u odgovarajućoj listi šifara predviđenoj PEPPOL standardom, kao što je prikazano u sledećem primeru:

```xml
<cac:OrderLine>
  <cac:LineItem>
    <cac:Item>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode listVersionID="19.0501" listID="STI">12345678</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
    </cac:Item>
  </cac:LineItem>
</cac:OrderLine>
```

Preporučuje se upotreba barem jednog od klasifikacionih sistema navedenih u sledećoj tabeli, ako su primenljivi.

| Šifra | Opis klasifikacionog standarda | Oblast primene |
| :-- | :-- | :-- |
| STI | Zvanični jedinstveni evropski klasifikacioni sistem za javne nabavke (CPV – Common Procurement Vocabulary) | Proizvodi i usluge koji su predmet javne nabavke |
| STL | Anatomsko-terapijsko-hemijski klasifikacioni sistem (ATC – Anatomical Therapeutic Chemical Classification System) | Lekovi |
| STO | Italijanska nacionalna klasifikacija medicinskih proizvoda (CND) | Medicinski proizvodi |
| STH | Komercijalna klasifikacija proizvoda (GPC – Global Product Classification) | Roba široke potrošnje |
| IB | Međunarodni sistem identifikacije knjiga (ISBN – International Standard Book Number) | Knjige |
| ZZZ | Sistem koji su strane definisale ručno | Za medicinske proizvode omogućava navođenje vrednosti „DM1”, „DM2” ili „DM0” (kada prve dve nisu primenljive) |

U Fluentisu je ove šifre potrebno dodeliti tabeli šifara barkodova i povezati ih sa artiklom.

## Merne jedinice

U redovima narudžbine potrebno je navesti količinu proizvoda i pritom odabrati mernu jedinicu iz odgovarajuće liste šifara predviđene PEPPOL standardom, kao što je prikazano u sledećem primeru:

```xml
<cac:OrderLine>
  <cac:LineItem>
    <cbc:Quantity unitCode="C62">3</cbc:Quantity>
  </cac:LineItem>
</cac:OrderLine>
```

U sledećoj tabeli navedene su šifre mernih jedinica koje se preporučuje koristiti, ako su primenljive (za više detalja pogledajte Smernice).

| Šifra | Merna jedinica | Oblast primene |
| :-: | :-- | :-: |
| C62 | Jedinica proizvoda (roba ili usluga) | Količina |
| PR | Par | Količina |
| XBK | Paket, kutija: primarno pakovanje koje sadrži više jedinica istog artikla | Pakovanje |
| DZP | Standardno pakovanje koje sadrži dvanaest komada istog artikla | Pakovanje |
| KT | Komplet (kit): primarno pakovanje koje sadrži više jedinica različitih artikala koji se mogu koristiti zajedno | Pakovanje |
| XBX | Paket, ambalaža (box): sekundarno pakovanje koje sadrži više primarnih pakovanja | Pakovanje |
| XOB | Paleta: platforma ili otvorena kutija, obično izrađena od drveta, na koju se postavlja roba radi lakšeg mehaničkog rukovanja tokom prevoza i skladištenja | Pakovanje |
| MTR | Metar | Dužina |
| CMT | Centimetar | Dužina |
| MMT | Milimetar | Dužina |
| MTK | Kvadratni metar | Površina |
| CMK | Kvadratni centimetar | Površina |
| MTQ | Kubni metar | Zapremina |
| CMQ | Kubni centimetar | Zapremina |
| MMQ | Kubni milimetar | Zapremina |
| LTR | Litar | Kapacitet |
| MLT | Mililitar | Kapacitet |
| GRM | Gram | Masa |
| HGM | Hektogram | Masa |
| KGM | Kilogram | Masa |
| MGM | Miligram | Masa |
| MC | Mikrogram | Masa |
| HUR | Sat | Vreme |
| DAY | Dan | Vreme |
| MON | Mesec | Vreme |
| ANN | Godina | Vreme |
| E40 | Radni dan | Rad |
| KWH | Kilovat-sat | Električna energija |
| BQL | Bekerel | Radioaktivnost |
| 4N | Megabekerel | Radioaktivnost |
| GBQ | Gigabekerel | Radioaktivnost |
| CUR | Kiri | Radioaktivnost |
| MCU | Milikiri | Radioaktivnost |

## Odredište robe

ID označava šifru dodeljenu mestu na kojem se mora izvršiti isporuka. Ova šifra se uvek mora navesti ako je mesto isporuke zvanična adresa kupca kojoj je dodeljen jedinstveni identifikator dostupan dobavljaču.

Potrebno je na odgovarajući način popuniti različita polja elementa „DeliveryLocation” (uključujući neobavezna polja, ako ona doprinose preciznijoj identifikaciji lokacije), kao što je prikazano u sledećem primeru koji se odnosi na dokument tipa Narudžbina ili Narudžbina za potvrdu.

Mesto isporuke navodi se samo na nivou celog dokumenta.

Kako bi se olakšala isporuka robe na zvanične lokacije organa javne uprave, preporučuje se da pojedinačna mesta isporuke budu jedinstveno označena šifrom.

Posebno za ustanove italijanskog Nacionalnog zdravstvenog sistema (SSN) napominje se da će od septembra 2019. biti dostupna internet stranica (http\://www\.puntidiconsegna-nso.it/) na kojoj će biti moguće objaviti listu sopstvenih identifikacionih šifara zvaničnih mesta isporuke.

Konkretno, ustanovama se preporučuje da šifre zvaničnih mesta isporuke kreiraju tako što će ispred interne šifre mesta isporuke, koju mogu slobodno definisati, navesti sopstveni poreski broj. Te dve vrednosti moraju biti odvojene znakom „-” (crtica), bez razmaka.

Format šifre će stoga biti:

```text
Poreski broj-ID internog mesta isporuke
```

Na primer, ako ustanova ima poreski broj „123456788901” i skladište „acdg45”, šifra Ship-To koju treba navesti u narudžbini biće „123456788901-acdg45” (pogledajte odeljak 3.3.3.6).

Preporučuje se da ukupna dužina ove šifre ne prelazi 20 znakova (uključujući znak „-”).

U Fluentisu se odredište robe prepoznaje pomoću ove ID šifre i traži kao šifrovano odredište unutar kupca. Pritom se u polje nadimka kontakta u Fluentisu upisuje poslednjih 7 znakova šifre koja sledi nakon znaka „-” u šifri NSO mesta isporuke.

## PEPPOL narudžbine kupaca

U aplikaciji BizLink nalazi se obrazac **PEPPOL narudžbine kupaca**, namenjen prikazu svih dolaznih poruka iz NSO-a i odlaznih poruka prema NSO-u.

Nakon izbora reda narudžbine i pritiska na dugme **Prikaži** na traci otvara se dodatni obrazac **Registar dokumenata SDI**.

U tom obrascu prikazuju se određeni podaci koji se odnose na NSO datoteku narudžbine, kao što su status dokumenta, povezane datoteke i sadržaj datoteke.

Moguće je pregledati sadržaj narudžbine, kao i eventualna obaveštenja sistema SDI.

Pritiskom na dugme **Preuzmi prilog** moguće je preuzeti izabrani prilog iz tabele „Prilozi”, dok je pritiskom na dugme **Preuzmi sadržaj registra** moguće preuzeti izabranu datoteku iz tabele **Registar dokumenata SDI**, koja sadrži XML datoteku narudžbine i sve povezane datoteke, na primer datoteku sa obaveštenjima.

Pritiskom na dugme **Otvori dokument** na traci moguće je pregledati sadržaj PEPPOL narudžbine direktno u Fluentisu, ako je njen status najmanje „Uneto”. Pritom se otvara obrazac „Narudžbine kupaca”.

Pritiskom na dugme **Registar dokumenata SDI** u obrascu „Narudžbine kupaca” otvara se obrazac „Registar dokumenata SDI”, na isti način kao kada se pritisne dugme „Prikaži” na traci obrasca *PEPPOL narudžbine kupaca*.

Pritiskom na dugme **Preuzmi prilog** na traci obrasca *PEPPOL narudžbine kupaca* XML datoteka izabrane narudžbine preuzeće se u fasciklu koju odredi korisnik.

Pritiskom na dugme **Izmeni XML podatke**, nakon izbora narudžbine sa SDI statusom „Greška”, otvara se obrazac za izmenu podataka uvezene datoteke.

U tom obrascu moguće je ispraviti eventualne pogrešne podatke u primljenoj narudžbini, kao što su redovi sa cenom 0, šifre artikala koje nije moguće automatski protumačiti ili merne jedinice, kao i navesti podatke koji nedostaju, a obavezni su.

U tabeli **Registar NSO narudžbina** prikazuju se različite informacije. U nastavku su navedene najvažnije:

- **SDI status**: označava trenutni status obrade PEPPOL narudžbine (pogledajte odeljak koji se odnosi na statuse narudžbine).
- **Tip**: označava tip PEPPOL narudžbine i može imati sledeće vrednosti:
  - 220 = Narudžbina za nabavku (narudžbina koju je dobavljač primio)
  - 227 = Narudžbina za isporuku
  - PRE = Unapred dogovorena narudžbina
- **Broj (ID)**: broj narudžbine koji, zajedno sa datumom kupca i krajnjom tačkom kupca, jedinstveno identifikuje narudžbinu.
- **Datum kupca**: datum narudžbine koji, zajedno sa brojem (ID) i krajnjom tačkom kupca, jedinstveno identifikuje narudžbinu.
- **Krajnja tačka kupca**: može označavati šifru kancelarije kupca ili PDV identifikacioni broj dobavljača koji je poslao narudžbinu. Zajedno sa brojem (ID) i datumom kupca jedinstveno identifikuje narudžbinu.
- **Tip procesa**: označava tip procesa kojem narudžbina pripada i može imati tri vrednosti:
  - Jednostavno naručivanje
  - Potpuno naručivanje
  - Unapred dogovoreno naručivanje
- **Tip dokumenta**: označava poslednji tip dokumenta ili obaveštenja povezanog sa narudžbinom.
- **Trojka**: referenca na narudžbinu na koju se odnosi trenutna narudžbina. Trojka se sastoji od identifikatora dokumenta, datuma izdavanja dokumenta i identifikatora izdavaoca.
- **Naziv NSO datoteke**: označava naziv XML datoteke PEPPOL narudžbine.
- **Datum prijema NSO-a**: označava datum prijema narudžbine od strane kupca ili datum slanja unapred dogovorene narudžbine.
- **Poslednji događaj NSO-a**: označava datum poslednje promene statusa narudžbine.