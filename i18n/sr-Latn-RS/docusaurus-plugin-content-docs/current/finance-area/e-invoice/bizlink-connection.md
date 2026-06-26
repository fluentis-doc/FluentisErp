---
title: Konfiguracija BizLink-a za razmenu sa SDI sistemom
sidebar_position: 7
---

Fluentis omogućava razmenu ulaznih i izlaznih elektronskih dokumenata putem SDI sistema, odnosno ES-a. Pre korišćenja ove funkcionalnosti potrebno je proveriti sledeća podešavanja, jer Fluentis komunicira sa spoljnim sistemima preko alata **BizLink**.

## Tabela konfiguracije elektronskih dokumenata

Ova tabela dostupna je u Fluentisu putem: **Konfiguracija > Tabele > Opšta podešavanja > Konfiguracija elektronskih dokumenata**.

Prva provera koju je potrebno izvršiti jeste klik na dugme **Proveri vezu** na traci sa alatkama nakon otvaranja tabele. Ako su sva podešavanja ispravno konfigurisana, veza će biti uspešno uspostavljena.

:::danger PAŽNJA
Ako se prilikom provere veze pojavi greška, to znači da su prilikom aktivacije servisa uneti pogrešni naziv servera ili baze podataka. U tom slučaju potrebno je kontaktirati tehničku podršku i dostaviti ispravne podatke.
:::

## Tabela BizLink korisnika

Ova tabela dostupna je u ARM-u putem: **Početna > Konekcije > BizLink korisnici**.

Na levoj strani pregleda prikazani su korisnici sa skrivenim lozinkama, dok se na desnoj strani nalaze dostupne veze sa odgovarajućim nazivima servera i baza podataka.

Potrebno je proveriti da korisnici definisani u levom delu imaju aktiviranu odgovarajuću oznaku u desnom delu pregleda.

## BizLink servisi

Zatim je potrebno otvoriti aplikaciju **Services** na korisničkom računaru i zaustaviti **BizLink** servis.

Nakon zaustavljanja servisa otvorite fasciklu **Services** (putanju možete pronaći u svojstvima BizLink servisa) i proverite vrednosti u konfiguracionoj datoteci. One moraju odgovarati sledećim vrednostima:

```xml
<"GlobalUser" value="FlConServiceUser"/>
<"GlobalPwd" value="FlConServiceUserPwd"/>
<"GlobalUrl" value="http://localhost/arm/"/>
```

Korisničko ime i lozinka moraju biti isti kao oni definisani u tabeli **BizLink korisnici** koja je prethodno proverena. Preporučuje se korišćenje opcije **kopiraj i nalepi**.

Nakon toga možete obrisati tekstualnu datoteku koja se nalazi u fascikli **Services** i ponovo pokrenuti BizLink servis. Tom prilikom tekstualna datoteka biće automatski ponovo kreirana.

Ako tekstualna datoteka ne postoji, pokrenite odgovarajuću **.exe** datoteku.

Ako tekstualna datoteka ne sadrži greške, servis će biti uspešno pokrenut.

:::danger PAŽNJA
Ako se **.exe** datoteka odmah zatvori nakon pokretanja, to znači da je servis i dalje aktivan ili postoji problem sa konfiguracionom datotekom.
:::