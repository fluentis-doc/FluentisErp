---
title: Fluentis numeracije
sidebar_position: 13
last_update:
  date: 03/30/2023
---

Prilikom unosa novog dokumenta jedan je od prvih potrebnih podataka broj predmetnog dokumenta. Taj se podatak automatski predlaže zahvaljujući tablicama brojača.

U Fluentisu je upravljanje brojačima podijeljeno prema vrstama dokumenata, što možemo vidjeti prema stavkama izbornika koje se nalaze u tablicama svakog modula.

Logika na kojoj se temelje svi ovi brojači jednaka je, stoga ćemo detaljnije pogledati jedan od njih, odnosno numeraciju prijeboja, koja može poslužiti kao teorijska osnova za definiranje brojača drugih vrsta dokumenata.

U obrascu **Numeracija prijeboja** nalazi se tablica s popisom brojača koji se koriste za prijeboje. To znači da je moguće definirati više brojača za istu vrstu dokumenta. Klikom na gumb **Novo** otvara se obrazac **Numeracija**.

![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

### Gornji odjeljak

**Šifra**: šifra brojača;

**Opis**: opis brojača;

**Formula broja**: u ovom polju moguće je definirati vrijednost alfanumeričkog niza koji će biti pohranjen u zadano alfanumeričko svojstvo objekta „FormattedNumber” (dok se numerička vrijednost pohranjuje u svojstvo „Number”). Formula za oblikovanje broja dokumenta može se definirati na razini vrste numeracije, razdoblja valjanosti vrste numeracije ili raspona valjanosti. Primjenjuje se načelo prioriteta od najniže prema najvišoj razini: najprije se provjerava je li formula definirana u rasponima valjanosti. Ako nije, provjerava se je li definirana u razdobljima valjanosti, a ako nije ni tamo, koristi se formula definirana na razini vrste numeracije.

Na gornjoj slici (preuzetoj iz brojača prijeboja) unesena je formula „Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, koja će generirati niz u obliku „2015-00001-TestCode”.

Drugi primjer: uključivanje vrijednosti koju je unio korisnik koji unosi dokument u broj: „Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

U ovom je slučaju potrebno napraviti i izmjenu na razini Arm-a kako bi se u postavkama (setteru) formatiranog broja omogućio pristup svojstvu korisnika: unutar odjeljka Patterns uređuje se ovaj setter.

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

Zatim je potrebno označiti opciju **Used**:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

Nakon spremanja potrebno je ponovno pokrenuti Fluentisov skup aplikacija (Application Pool) u IIS-u kako bi podatak postao operativan.

*Dodatni primjer*: postavljanje broja računa (ili otpremnice) s oznakom iza kose crte (primjerice 1/A, 2/A... 1/B, 2/B):

number.ToString()+"/B"

Ovu formulu potrebno je unijeti u brojač (u zaglavlju).

Zatim je u izvještaju potrebno zamijeniti standardno polje (npr. Number) izračunatim poljem (npr. CalcNumber), koje treba sadržavati sljedeći izraz:

Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])

*PAŽNJA*: ovo funkcionira samo u izvještaju. U obrascima će se i dalje prikazivati uobičajeni broj bez oznake iza kose crte.

**Onemogućeno**: omogućuje onemogućavanje brojača.

### Pravila upravljanja (prva tablica)

U ovom se odjeljku definiraju pravila upravljanja brojačem.

**Redoslijed**: šifra zapisa retka;

**Vrijedi od datuma**: obvezno polje koje označava početni datum razdoblja valjanosti numeracije;

**Vrijedi do datuma**: završni datum valjanosti razdoblja. Polje može ostati prazno (vidi sljedeće polje);

**Period**: učestalost ponavljanja razdoblja. Dostupne su sljedeće mogućnosti:

- *bez grupiranja*: razdoblje vrijedi samo unutar definiranog raspona. Ako završni datum nije unesen, brojač vrijedi neograničeno.
- *Godišnje*: brojač se automatski vraća na početni broj svake godine, sve do završetka razdoblja valjanosti.
- *Mjesečno*: brojač se automatski vraća na početni broj svakog mjeseca, sve do završetka razdoblja valjanosti.
- *Dnevno*: brojač se automatski vraća na početni broj svakog dana, sve do završetka razdoblja valjanosti.

**Smjenski mjeseci**: broj mjeseci koji se dodaju početnom datumu valjanosti kako bi se dobio mjesec u kojem se brojač ponovno postavlja;

**Smjenski danai**: broj dana koji se dodaju početnom datumu valjanosti kako bi se dobio dan u kojem se brojač ponovno postavlja;

**Progresivni datumski broj**: ako je ova opcija aktivirana, numeracija se provodi kronološki prema datumu. Time se onemogućuje unos dokumenta s brojem većim od posljednjeg unesenog broja, ali s datumom koji prethodi datumu posljednjeg dokumenta;

**Oporavak brojeva**: omogućuje automatsko popunjavanje praznina u numeraciji. Ako je aktivirana opcija **Kronološki slijed brojeva**, broj se može ponovno upotrijebiti samo ako je to u skladu s prethodno opisanim pravilima za ovu opciju;

**Onemogućeno**: omogućuje onemogućavanje pravila numeracije.

### Numerički rasponi (druga tablica)

Ova je tablica povezana s pravilom odabranim u prethodnoj tablici.

**Redoslijed**: šifra numeričkog raspona;

**Početni broj**: obvezno polje koje označava početni broj raspona;

**Početni broj pretraživanja**: može se unijeti ako se želi ograničiti pretraživanje broja na određeni raspon;

**Završni broj**: najveći broj u rasponu; polje može ostati prazno;

**Vanjska numeracija**: označava se ako brojeve ne dodjeljuje Fluentis, već vanjski sustavi;

**Formula broja**: u ovom je polju moguće povezati formulu koja će se koristiti za datumski raspon odabran u prvoj tablici;

**Onemogućeno**: omogućuje onemogućavanje korištenja predmetnog raspona.