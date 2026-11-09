---
title: Fluentis NSO
sidebar_position: 5
---

## Konfiguracija

Prvi korak konfiguracije jest uključivanje oznake **Prijenos elektroničkih narudžbi/naloga** na putanji *Konfiguriranje > Tablice > Opće postavke > Konfiguracija elektroničkih dokumenata* u kartici **Peppol**.

U tablici **Konfiguracija elektroničkih dokumenata** moguće je za svako poduzeće definirati korištenje zaprimanja i slanja elektroničkih narudžbi s javnom upravom. U istoj tablici moguće je odrediti i način izvršavanja određenih transakcija.

Među tablicama općih postavki nalazi se odjeljak PEPPOL koji sadržava:

**Unaprijed definirane tablice:**

- Standardne PEPPOL vrste narudžbi kupaca – sadržava šifre vrsta narudžbi i podnarudžbi definirane u popisu šifri PEPPOL standarda.
- Standardne PEPPOL šifre jedinica mjere – sadržava mjerne jedinice definirane u popisu šifri PEPPOL standarda.
- Standardne PEPPOL šifre PDV-a – sadržava šifre PDV-a definirane u popisu šifri PEPPOL standarda.
- Standardne PEPPOL šifre popusta
- Standardne PEPPOL šifre troškova
- Standardna PEPPOL klasifikacija artikala
- Vrste procesa
- Vrste dokumenata

## Tablice koje je potrebno konfigurirati

Potrebno je konfigurirati sljedeće tablice:

- Fluentis vrste narudžbi koje odgovaraju PEPPOL vrstama narudžbi (konfiguracija vrsta narudžbi kupaca).
- Fluentis šifre PDV-a koje odgovaraju PEPPOL šiframa PDV-a (konfiguracija PDV-a).
- Fluentis mjerne jedinice koje odgovaraju PEPPOL šiframa mjernih jedinica (konfiguracija mjernih jedinica).
- U tablici Vrste barkodova potrebno je definirati koja vrsta barkoda označava AIC šifru, standardnu šifru ili klasifikaciju artikala.
- Konfiguracija vrsta popusta, u kojoj se Fluentis vrste popusta povezuju s PEPPOL šiframa popusta.
- Konfiguracija vrsta troškova, u kojoj se Fluentis vrste troškova povezuju s PEPPOL šiframa troškova.

## Podaci unaprijed definiranih tablica

Potrebno je odrediti vrstu narudžbe koristeći vrijednosti iz odgovarajućeg popisa šifri predviđenog PEPPOL standardom, koji uključuje sljedeće dvije šifre:

- „220” za narudžbe za nabavu;
- „227” za narudžbe za isporuku.

U dokumentima vrste:

- početna i zamjenska narudžba;
- zamjenska narudžba za potvrdu;

šifra vrste narudžbe navodi se u elementu „OrderTypeCode”, kao što je prikazano u sljedećem primjeru:

    <cbc:OrderTypeCode>220</cbc:OrderTypeCode>

U dokumentima vrste:

- početna i zamjenska unaprijed dogovorena narudžba;

šifra vrste narudžbe navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, kao što je prikazano u sljedećem primjeru:

    <cac:DeliveryTerms>
      <cbc:SpecialTerms>220</cbc:SpecialTerms>
    </cac:DeliveryTerms>

Postoji i dodatna klasifikacija vrsta narudžbi koja nije obvezna.

Za vrstu narudžbe 220 – Narudžba za nabavu:

- OF – Narudžba za fakturiranje već potrošenih proizvoda
- OFR – Narudžba za fakturiranje i nadopunu

Za vrstu narudžbe 227 – Narudžba za isporuku:

- CD – Konsignacija
- CV – Isporuka na pregled
- CG – Besplatno ustupanje na korištenje

U dokumentima vrste:

- početna i zamjenska narudžba;
- zamjenska narudžba za potvrdu;

šifra podvrste narudžbe navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, kao što je prikazano u sljedećem primjeru:

    <cac:DeliveryTerms>
      <cbc:SpecialTerms>OFR</cbc:SpecialTerms>
    </cac:DeliveryTerms>

U dokumentima vrste:

- početna i zamjenska unaprijed dogovorena narudžba;

šifra podvrste narudžbe navodi se u polju „SpecialTerms” elementa „DeliveryTerms”, nakon šifre vrste narudžbe, primjenom formata strukturiranih polja, kao što je prikazano u sljedećem primjeru:

    <cac:DeliveryTerms>
      <cbc:SpecialTerms>220#OFR</cbc:SpecialTerms>
    </cac:DeliveryTerms>

## Šifra artikla

Proizvod (roba ili usluga) unutar svakog retka narudžbe identificira se nazivom (element „Name”, koji je obvezan) i opisom (element „Description”), kao i pomoću identifikacijskih šifri.

Konkretno, struktura navedenih dokumenata prvenstveno predviđa dvije vrste šifri:

- šifru koju dodjeljuje dobavljač (element „SellersItemIdentification/ID”);
- standardnu šifru, koja odgovara identifikatoru dodijeljenom proizvodu u sustavu jedinstvene identifikacije (element „StandardItemIdentification/ID”), odabranom iz odgovarajućeg popisa šifri predviđenog PEPPOL standardom.

Navedeni elementi nisu obvezni, no njihova se upotreba izričito preporučuje.

Primjer:

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

Za robu široke potrošnje preporučuje se popuniti element „StandardItemIdentification/ID” odgovarajućom GTIN šifrom (koja odgovara vrijednosti „schemeID=0160” u popisu šifri PEPPOL standarda), kao što je prikazano u prethodnom primjeru.

Za farmaceutske proizvode koji imaju šifru odobrenja za stavljanje u promet (AIC), koju izdaje Talijanska agencija za lijekove (AIFA), element „SellersItemIdentification/ID” uvijek se mora popuniti odgovarajućom AIC šifrom.

## Robna skupina

Za svaki proizvod unutar odgovarajućeg retka narudžbe moguće je navesti jednu ili više klasifikacijskih šifri popunjavanjem polja „ItemClassificationCode/ID” elementa „CommodityClassification”.

Vrijednost mora biti preuzeta iz sustava jedinstvene klasifikacije odabranog među onima koji se nalaze u odgovarajućem popisu šifri predviđenom PEPPOL standardom, kao što je prikazano u sljedećem primjeru:

    <cac:OrderLine>
      <cac:LineItem>
        <cac:Item>
          <cac:CommodityClassification>
            <cbc:ItemClassificationCode listVersionID="19.0501" listID="STI">12345678</cbc:ItemClassificationCode>
          </cac:CommodityClassification>
        </cac:Item>
      </cac:LineItem>
    </cac:OrderLine>

Preporučuje se upotreba barem jednog od klasifikacijskih sustava navedenih u sljedećoj tablici, ako su primjenjivi.

| Šifra | Opis klasifikacijskog standarda | Područje primjene |
| :-- | :-- | :-- |
| STI | Službeni jedinstveni europski klasifikacijski sustav za javnu nabavu (CPV – Common Procurement Vocabulary) | Proizvodi i usluge koji su predmet javne nabave |
| STL | Anatomsko-terapijsko-kemijski klasifikacijski sustav (ATC – Anatomical Therapeutic Chemical Classification System) | Lijekovi |
| STO | Talijanska nacionalna klasifikacija medicinskih proizvoda (CND) | Medicinski proizvodi |
| STH | Komercijalna klasifikacija proizvoda (GPC – Global Product Classification) | Roba široke potrošnje |
| IB | Međunarodni sustav identifikacije knjiga (ISBN – International Standard Book Number) | Knjige |
| ZZZ | Sustav koji su stranke definirale ručno | Za medicinske proizvode omogućuje navođenje vrijednosti „DM1”, „DM2” ili „DM0” (kada prve dvije nisu primjenjive) |

U Fluentisu je te šifre potrebno dodijeliti tablici šifri barkodova i povezati ih s artiklom.

## Mjerne jedinice

U redcima narudžbe potrebno je navesti količinu proizvoda i pritom odabrati mjernu jedinicu iz odgovarajućeg popisa šifri predviđenog PEPPOL standardom, kao što je prikazano u sljedećem primjeru:

    <cac:OrderLine>
      <cac:LineItem>
        <cbc:Quantity unitCode="C62">3</cbc:Quantity>
      </cac:LineItem>
    </cac:OrderLine>

U sljedećoj tablici navedene su šifre mjernih jedinica koje se preporučuje koristiti, ako su primjenjive (za više pojedinosti pogledajte Smjernice).

| Šifra | Mjerna jedinica | Područje primjene |
| :-: | :-- | :-: |
| C62 | Jedinica proizvoda (roba ili usluga) | Količina |
| PR | Par | Količina |
| XBK | Paket, kutija: primarno pakiranje koje sadržava više jedinica istog artikla | Pakiranje |
| DZP | Standardno pakiranje koje sadržava dvanaest komada istog artikla | Pakiranje |
| KT | Komplet (kit): primarno pakiranje koje sadržava više jedinica različitih artikala koji se mogu upotrebljavati zajedno | Pakiranje |
| XBX | Paket, ambalaža (box): sekundarno pakiranje koje sadržava više primarnih pakiranja | Pakiranje |
| XOB | Paleta: platforma ili otvorena kutija, obično izrađena od drva, na koju se postavlja roba radi lakšeg mehaničkog rukovanja tijekom prijevoza i skladištenja | Pakiranje |
| MTR | Metar | Duljina |
| CMT | Centimetar | Duljina |
| MMT | Milimetar | Duljina |
| MTK | Kvadratni metar | Površina |
| CMK | Kvadratni centimetar | Površina |
| MTQ | Kubični metar | Volumen |
| CMQ | Kubični centimetar | Volumen |
| MMQ | Kubični milimetar | Volumen |
| LTR | Litra | Kapacitet |
| MLT | Mililitar | Kapacitet |
| GRM | Gram | Masa |
| HGM | Hektogram | Masa |
| KGM | Kilogram | Masa |
| MGM | Miligram | Masa |
| MC | Mikrogram | Masa |
| HUR | Sat | Vrijeme |
| DAY | Dan | Vrijeme |
| MON | Mjesec | Vrijeme |
| ANN | Godina | Vrijeme |
| E40 | Radni dan | Rad |
| KWH | Kilovatsat | Električna energija |
| BQL | Bekerel | Radioaktivnost |
| 4N | Megabekerel | Radioaktivnost |
| GBQ | Gigabekerel | Radioaktivnost |
| CUR | Kiri | Radioaktivnost |
| MCU | Milikiri | Radioaktivnost |

## Odredište robe

ID označava šifru dodijeljenu mjestu na kojem se mora izvršiti isporuka. Ova se šifra uvijek mora navesti ako je mjesto isporuke službena adresa kupca kojoj je dodijeljen jedinstveni identifikator dostupan dobavljaču.

Potrebno je na odgovarajući način popuniti različita polja elementa „DeliveryLocation” (uključujući neobvezna polja, ako ona pridonose preciznijoj identifikaciji lokacije), kao što je prikazano u sljedećem primjeru koji se odnosi na dokument vrste Narudžba ili Narudžba za potvrdu.

Mjesto isporuke navodi se samo na razini cijelog dokumenta.

Kako bi se olakšala isporuka robe na službene lokacije tijela javne uprave, preporučuje se da pojedinačna mjesta isporuke budu jedinstveno označena šifrom.

Posebno za ustanove talijanskog Nacionalnog zdravstvenog sustava (SSN) napominje se da će od rujna 2019. biti dostupna internetska stranica (http://www.puntidiconsegna-nso.it/) na kojoj će biti moguće objaviti popis vlastitih identifikacijskih šifri službenih mjesta isporuke.

Konkretno, ustanovama se preporučuje da šifre službenih mjesta isporuke kreiraju tako da ispred interne šifre mjesta isporuke, koju mogu slobodno definirati, navedu vlastiti porezni broj. Te dvije vrijednosti moraju biti odvojene znakom „-” (crtica), bez razmaka.

Format šifre stoga će biti:

    Porezni broj-ID internog mjesta isporuke

Primjerice, ako ustanova ima porezni broj „123456788901” i skladište „acdg45”, šifra Ship-To koju treba navesti u narudžbi bit će „123456788901-acdg45” (vidi odjeljak 3.3.3.6).

Preporučuje se da ukupna duljina ove šifre ne prelazi 20 znakova (uključujući znak „-”).

U Fluentisu se odredište robe prepoznaje putem ove ID šifre i traži kao šifrirano odredište unutar kupca. Pritom se u polje nadimka kontakta u Fluentisu upisuje posljednjih 7 znakova šifre koja slijedi nakon znaka „-” u šifri NSO mjesta isporuke.

## PEPPOL narudžbe kupaca

U aplikaciji BizLink nalazi se forma **PEPPOL narudžbe kupaca**, namijenjena prikazu svih dolaznih poruka iz NSO-a i odlaznih poruka prema NSO-u.

Nakon odabira retka narudžbe i pritiska na gumb **Prikaži** na vrpci otvara se dodatna forma **Registar dokumenata SDI**.

U toj se formi prikazuju određeni podaci koji se odnose na NSO datoteku narudžbe, kao što su status dokumenta, povezane datoteke i sadržaj datoteke.

Moguće je pregledati sadržaj narudžbe, kao i eventualne obavijesti sustava SDI.

Pritiskom na gumb **Preuzmi privitak** moguće je preuzeti odabrani privitak iz tablice „Privitci”, dok je pritiskom na gumb **Preuzmi sadržaj registra** moguće preuzeti odabranu datoteku iz tablice **Registar dokumenata SDI**, koja sadržava XML datoteku narudžbe i sve povezane datoteke, primjerice datoteku s obavijestima.

Pritiskom na gumb **Otvori dokument** na vrpci moguće je pregledati sadržaj PEPPOL narudžbe izravno u Fluentisu, ako je njezin status najmanje „Uneseno”. Pritom se otvara forma „Narudžbe kupaca”.

Pritiskom na gumb **Registar dokumenata SDI** u formi „Narudžbe kupaca” otvara se forma „Registar dokumenata SDI”, na isti način kao kada se pritisne gumb „Prikaži” na vrpci forme *PEPPOL narudžbe kupaca*.

Pritiskom na gumb **Preuzmi privitak** na vrpci forme *PEPPOL narudžbe kupaca* XML datoteka odabrane narudžbe preuzet će se u mapu koju odredi korisnik.

Pritiskom na gumb **Uredi XML podatke**, nakon odabira narudžbe sa SDI statusom „Pogreška”, otvara se forma za uređivanje podataka uvezene datoteke.

U toj je formi moguće ispraviti eventualne pogrešne podatke u primljenoj narudžbi, kao što su retci s cijenom 0, šifre artikala koje nije moguće automatski protumačiti ili mjerne jedinice, te navesti podatke koji nedostaju, a obvezni su.

U tablici **Registar NSO narudžbi** prikazuju se različite informacije. U nastavku su navedene najvažnije:

- **SDI status**: označava trenutačni status obrade PEPPOL narudžbe (pogledajte odjeljak koji se odnosi na statuse narudžbe).
- **Vrsta**: označava vrstu PEPPOL narudžbe i može imati sljedeće vrijednosti:
  - 220 = Narudžba za nabavu (narudžba koju je dobavljač primio)
  - 227 = Narudžba za isporuku
  - PRE = Unaprijed dogovorena narudžba
- **Broj (ID)**: broj narudžbe koji, zajedno s datumom kupca i krajnjom točkom kupca, jedinstveno identificira narudžbu.
- **Datum kupca**: datum narudžbe koji, zajedno s brojem (ID) i krajnjom točkom kupca, jedinstveno identificira narudžbu.
- **Krajnja točka kupca**: može označavati šifru ureda kupca ili PDV identifikacijski broj dobavljača koji je poslao narudžbu. Zajedno s brojem (ID) i datumom kupca jedinstveno identificira narudžbu.
- **Vrsta procesa**: označava vrstu procesa kojem narudžba pripada i može imati tri vrijednosti:
  - Jednostavno naručivanje
  - Potpuno naručivanje
  - Unaprijed dogovoreno naručivanje
- **Vrsta dokumenta**: označava posljednju vrstu dokumenta ili obavijesti povezane s narudžbom.
- **Trojka**: referenca na narudžbu na koju se odnosi trenutačna narudžba. Trojka se sastoji od identifikatora dokumenta, datuma izdavanja dokumenta i identifikatora izdavatelja.
- **Naziv NSO datoteke**: označava naziv XML datoteke PEPPOL narudžbe.
- **Datum primitka NSO-a**: označava datum primitka narudžbe od strane kupca ili datum slanja unaprijed dogovorene narudžbe.
- **Posljednji događaj NSO-a**: označava datum posljednje promjene statusa narudžbe.