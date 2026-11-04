---
title: Fluentis numeracije
sidebar_position: 13
last_update:
  date: 03/30/2023
---

Prilikom unosa novog dokumenta jedan od prvih potrebnih podataka jeste broj predmetnog dokumenta. Taj podatak se automatski predlaže zahvaljujući tabelama brojača.

U Fluentisu je upravljanje brojačima podeljeno prema tipovima dokumenata, što možemo videti prema stavkama menija koje se nalaze u tabelama svakog modula.

Logika na kojoj se zasnivaju svi ovi brojači je ista, stoga ćemo detaljnije pogledati jedan od njih, odnosno numerisanje prebijanja, koje može poslužiti kao teorijska osnova za definisanje brojača drugih tipova dokumenata.

U obrascu **Numeracija prebijanja** nalazi se tabela sa spiskom brojača koji se koriste za prebijanja. To znači da je moguće definisati više brojača za isti tip dokumenta. Klikom na dugme **Novo** otvara se obrazac **Numeracija**.

![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

**### Gornji odeljak**

**Šifra**: šifra brojača;

**Opis**: opis brojača;

**Formula broja**: u ovom polju moguće je definisati vrednost alfanumeričkog niza koji će biti sačuvan u podrazumevanom alfanumeričkom svojstvu objekta „FormattedNumber” (dok se numerička vrednost čuva u svojstvu „Number”). Formula za oblikovanje broja dokumenta može se definisati na nivou tipa numeracije, perioda važenja tipa numeracije ili opsega važenja. Primenjuje se načelo prioriteta od najnižeg ka najvišem nivou: najpre se proverava da li je formula definisana u opsezima važenja. Ako nije, proverava se da li je definisana u periodima važenja, a ako nije ni tamo, koristi se formula definisana na nivou tipa numeracije.

Na gornjoj slici (preuzetoj iz brojača prebijanja) uneta je formula „Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, koja će generisati niz u obliku „2015-00001-TestCode”.

Drugi primer: uključivanje vrednosti koju je uneo korisnik koji unosi dokument u broj: „Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

U ovom slučaju potrebno je napraviti i izmenu na nivou ARM-a kako bi se u podešavanjima (setteru) formatiranog broja omogućio pristup svojstvu korisnika: unutar odeljka Patterns uređuje se ovaj setter.

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

Zatim je potrebno označiti opciju **Used**:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

Nakon čuvanja potrebno je ponovo pokrenuti Fluentisov skup aplikacija (Application Pool) u IIS-u kako bi podatak postao operativan.

*Dodatni primer*: postavljanje broja fakture (ili otpremnice) sa oznakom iza kose crte (na primer 1/A, 2/A... 1/B, 2/B):

`number.ToString()+"/B"`

Ovu formulu potrebno je uneti u brojač (u zaglavlju).

Zatim je u izveštaju potrebno zameniti standardno polje (npr. Number) izračunatim poljem (npr. CalcNumber), koje treba da sadrži sledeći izraz:

`Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])`

*PAŽNJA*: ovo funkcioniše samo u izveštaju. U obrascima će se i dalje prikazivati uobičajeni broj bez oznake iza kose crte.

**Onemogućeno**: omogućava onemogućavanje brojača.

**### Pravila upravljanja (prva tabela)**

U ovom odeljku definišu se pravila upravljanja brojačem.

**Redosled**: šifra zapisa reda;

**Važi od datuma**: obavezno polje koje označava početni datum perioda važenja numeracije;

**Važi do datuma**: završni datum važenja perioda. Polje može ostati prazno (vidi sledeće polje);

**Period**: učestalost ponavljanja perioda. Dostupne su sledeće mogućnosti:

- *bez grupisanja*: period važi samo unutar definisanog opsega. Ako završni datum nije unet, brojač važi neograničeno.
- *Godišnje*: brojač se automatski vraća na početni broj svake godine, sve do završetka perioda važenja.
- *Mesečno*: brojač se automatski vraća na početni broj svakog meseca, sve do završetka perioda važenja.
- *Dnevno*: brojač se automatski vraća na početni broj svakog dana, sve do završetka perioda važenja.

**Pomeranje meseci**: broj meseci koji se dodaju početnom datumu važenja kako bi se dobio mesec u kojem se brojač ponovo postavlja;

**Pomeranje dana**: broj dana koji se dodaju početnom datumu važenja kako bi se dobio dan u kojem se brojač ponovo postavlja;

**Progresivni datumski broj**: ako je ova opcija aktivirana, numerisanje se sprovodi hronološki prema datumu. Time se onemogućava unos dokumenta sa brojem većim od poslednjeg unetog broja, ali sa datumom koji prethodi datumu poslednjeg dokumenta;

**Oporavak brojeva**: omogućava automatsko popunjavanje praznina u numeraciji. Ako je aktivirana opcija **Hronološki redosled brojeva**, broj se može ponovo upotrebiti samo ako je to u skladu sa prethodno opisanim pravilima za ovu opciju;

**Onemogućeno**: omogućava onemogućavanje pravila numeracije.

**### Numerički opsezi (druga tabela)**

Ova tabela povezana je sa pravilom odabranim u prethodnoj tabeli.

**Redosled**: šifra numeričkog opsega;

**Početni broj**: obavezno polje koje označava početni broj opsega;

**Početni broj pretrage**: može se uneti ako se želi ograničiti pretraga broja na određeni opseg;

**Završni broj**: najveći broj u opsegu; polje može ostati prazno;

**Eksterna numeracija**: označava se ako brojeve ne dodeljuje Fluentis, već eksterni sistemi;

**Formula broja**: u ovom polju moguće je povezati formulu koja će se koristiti za datumski opseg odabran u prvoj tabeli;

**Onemogućeno**: omogućava onemogućavanje korišćenja predmetnog opsega.