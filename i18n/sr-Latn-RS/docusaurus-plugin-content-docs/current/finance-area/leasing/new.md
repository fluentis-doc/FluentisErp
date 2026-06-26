---
title: Novi Leasing
sidebar_position: 3
---

Prilikom unosa novog ugovora o leasingu, pored polja označenih crvenom zvezdicom, potrebno je prethodno definisati i **Vrstu leasinga**. Ovo polje odnosi se na tabelu **[Vrste leasinga](/docs/finance-area/leasing/search)** (pogledati detalje u dokumentaciji obrasca za pretragu), u kojoj prethodno mora biti definisana jedna ili više vrsta leasinga.

Odabirom vrste leasinga automatski se popunjavaju odgovarajući podaci u poljima za stopu PDV-a i konta koja će se koristiti za knjiženje rata (deo glavnice), kamate (kamatni deo rata) i troškova (na primer, troškovi naplate pojedinačnih rata).

![](/img/it-it/finance-area/leasing/new/image01.png)

![](/img/it-it/finance-area/leasing/new/image02.png)

## ZAGLAVLJE:

Polja koja se odnose na:

**Bankovni konto/podkonto**: odnosi se na banku koja će se koristiti za evidentiranje plaćanja rata;

**Konto/podkonto davaoca leasinga**: odnosi se na konto dobavljača (leasing društva) koji će se koristiti u knjiženjima vezanim za plaćene rate;

**Datum ugovora**: podrazumevano se predlaže današnji datum (može se promeniti) i predstavlja datum od kojeg se računa trajanje leasinga;

**Broj**: interni broj leasing ugovora;

**Opis**: opis ugovora;

**Datum isteka ugovora**: unosi se očekivani datum isteka ugovora kako bi se omogućio automatski obračun ukupnog broja dana trajanja ugovora, a samim tim i dana koji se koriste za obračun razgraničenja.

:::danger PAŽNJA
Ovaj datum, iako ga unosi korisnik, uobičajeno bi trebalo da odgovara krajnjem datumu amortizacionog plana, zbog čega se prilikom korišćenja procedure automatskog obračuna amortizacionog plana prikazuje upozorenje ukoliko datumi nisu usklađeni. Neusklađenost ovih datuma može dovesti do netačnog obračuna godišnjeg razgraničenja maksimalne naknade (i dela koji se na nju odnosi).
:::

**Interna diskontna stopa**: omogućava korišćenje navedene stope za automatski obračun amortizacionog plana leasinga (amortizacija u jednakim ratama). Unosi se godišnja stopa, a sistem automatski izračunava periodičnu stopu na osnovu učestalosti rata i trajanja leasinga.

**Vrednost imovine**: vrednost sredstva koje je predmet leasinga.

**Vrednost otkupa**: na kraju leasinga obično se plaća iznos za sticanje konačnog vlasništva nad sredstvom.

**Troškovi otkupa**: svi dodatni troškovi povezani sa otkupom.

**Početna uplata**: u leasing ugovorima obično postoji početna maksimalna naknada (*maxicanone*).

**Troškovi obrade i administrativni troškovi**: dodatni troškovi koji se obračunavaju uz početnu uplatu (*maxicanone*) i, ukoliko su ugovoreni, naplaćuju se jednokratno na početku ugovora.

## POLJA KOJA SE NE MOGU UREĐIVATI (izračunata):

**Preostalo zaduženje**: vrednost sredstva umanjena za zbir glavnice knjiženih rata (uzimaju se u obzir samo rate kod kojih je aktivirana opcija **Knjigovodstveno evidentirano**).

**Ukupna vrednost ugovora**: početna maksimalna naknada + troškovi obrade i administracije + zbir svih rata (glavnica + kamata + troškovi naplate / troškovi rate).

**Finansirani iznos**: neto vrednost sredstva umanjena za početnu maksimalnu naknadu.

## GLAVNI PREGLED:

U ovom delu moguće je ručno uneti amortizacioni plan leasing rata (bez početne maksimalne naknade koja je već definisana u zaglavlju). Kao alternativa, na traci menija dostupna je procedura za automatski obračun amortizacionog plana na osnovu podataka unetih u zaglavlje leasing ugovora.

![](/img/it-it/finance-area/leasing/new/image03.png)

**Datum**: unosi se datum dospeća rate, koji će biti predložen u računovodstvu prilikom evidentiranja ulaznog računa leasing društva;

**Glavnica**: predstavlja deo rate koji se odnosi na glavnicu i knjiži se na konto definisan u tabeli **Vrste leasinga**;

**Kamata**: predstavlja kamatni deo rate i knjiži se na odgovarajući konto definisan u tabeli **Vrste leasinga**;

**Trošak rate**: predstavlja, na primer, troškove naplate rate i knjiži se na poseban konto definisan u tabeli **Vrste leasinga**;

**Ukupan iznos**: polje nije moguće uređivati i predstavlja zbir svih komponenti rate;

**Knjiženo**: opcija se automatski aktivira nakon knjiženja rate i utiče na obračun preostalog duga, kao i na obračun razgraničenja maksimalne naknade (*maxicanone*);

**Broj/datum knjiženja**: prikazuju se podaci o knjiženju koje je generisano postupkom knjiženja leasing rata.

## POSTUPCI KOJI SE MOGU POKRENUTI SA TRAKE MENIJA:

### Knjigovodstveni postupci

Postupci koji se mogu pokrenuti iz obrasca leasinga identični su postupcima dostupnim u modulu Leasing u okviru računovodstvenih procedura.
Razlika je u tome što se iz ovog obrasca može raditi isključivo sa trenutno otvorenim leasing ugovorom, dok je u računovodstvenim procedurama moguće pretraživati i obrađivati sve neproknjižene leasing rate svih leasing ugovora evidentiranih u bazi podataka.
Knjiženje *maxicanone* vrši se samo jednom, nezavisno od knjiženja pojedinačnih leasing rata.
Prilikom knjiženja rata moguće je odabrati ratu koja se knjiži, nakon čega sistem traži unos broja i datuma dokumenta primljenog računa za dospelu leasing ratu.
Predložak knjiženja određuje se u tabeli **Vrste leasinga**, dok je sama struktura knjiženja definisana logikom procedure.
Oba postupka moguće je poništiti korišćenjem standardne procedure za poništavanje knjiženja.

### Izračunaj amortizacioni plan

Aktiviranjem ove funkcije sistem automatski izračunava amortizacioni plan metodom jednakih rata, na osnovu podataka unetih u zaglavlju ugovora, kao što su datum početka, broj rata, vrednost sredstva i kamatna stopa.

:::tip PAŽNJA
Prilikom obračuna ne uzima se u obzir početna maksimalna naknada (*maxicanone*), jer se ona smatra posebnim početnim avansnim plaćanjem (najčešće u visini jedne ili dve leasing rate).
:::

Otvara se obrazac u koji se unose (ponovo, ukoliko se razlikuju od vrednosti unetih u zaglavlju) **datum prve rate** i broj **meseci između rata**, čime se određuje periodičnost otplate (na primer: 1 = mesečno, 2 = dvomesečno, 3 = tromesečno itd.).

**Trošak rate**: predstavlja, na primer, troškove naplate i druge slične troškove koji će biti dodati svakoj rati u odgovarajućoj koloni detalja.

Ova funkcija može se koristiti i za ponovni obračun i ažuriranje amortizacionog plana, pod uslovom da rate još nisu proknjižene.

**Promena datuma obračuna**: koristi se za promenu samo datuma dospeća rata i/ili njihove periodičnosti, bez ponovnog obračuna celokupnog plana (na kojem su eventualno izvršene ručne izmene vrednosti). Potrebno je uneti samo datum prve rate i željenu periodičnost.

**Ažuriraj troškove rate**: koristi se za izmenu troška rate (na primer, troškova naplate) na svim stavkama plana, bez ponovnog obračuna kompletnog plana i bez potrebe za ručnim izmenama svake pojedinačne stavke. U dijalogu je potrebno uneti samo novu vrednost troška rate (*Instalment cost*).