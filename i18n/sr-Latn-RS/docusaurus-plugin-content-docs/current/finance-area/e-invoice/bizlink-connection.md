---
title: Konfiguracija Bizlinka za razmjenu sa SDI-jem  
sidebar_position: 7
---

Fluentis omogućuje razmjenu ulaznih i izlaznih elektroničkih dokumenata putem sustava SDI, tj. ES. Prije korištenja ove funkcionalnosti, potrebno je provjeriti sljedeće postavke jer Fluentis mora komunicirati s vanjskim sustavima putem alata BizLink.  

## Tablica konfiguracije elektroničkih dokumenata 

Ova tablica dostupna je u Fluentisu putem: Konfiguriranje > Tablice > Opće postavke > Konfiguracija elektroničkih dokumenata. 
Prva provjera koju treba izvršiti jest kliknuti na *Provjeri vezu* na traci izbornika nakon otvaranja tablice. Ako su sve postavke ispravno konfigurirane, veza će biti omogućena.

:::danger PAŽNJA 
Ako se tijekom provjere veze primi pojavi greška, to znači da su prilikom aktivacije usluge uneseni pogrešni naziv poslužitelja (servera) ili baze podataka. U tom slučaju potrebno je kontaktirati podršku i dostaviti ispravne podatke.  
:::


## Tablica korisnika BizLink 

Ova tablica dostupna je u ARM-u putem  Početna stranica > Spajanja > BizLink Korisnici.    
U lijevom dijelu pregleda nalaze se korisnici sa skrivenim lozinkama, dok se u desnom dijelu nalaze dostupne veze s pripadajućim nazivima poslužitelja i baza podataka.   
U ovoj tablici potrebno je provjeriti da korisnici postavljeni u lijevom dijelu pregleda imaju aktiviran flag u desnom dijelu pregleda.

## Usluge BizLink  

Zatim je potrebno otvoriti aplikaciju Servise na korisničkom računalu i zaustaviti uslugu BizLink.  
 Nakon zaustavljanja usluge, otvoriti mapu Servisi (putanja mape može se pronaći u svojstvima usluge BizLink) i provjeriti ključeve unutar konfiguracijske datoteke. Oni moraju odgovarati sljedećim vrijednostima:

```xml
        <"GlobalUser" value="FlConServiceUser"/>
        <"GlobalPwd" value="FlConServiceUserPwd"/>
        <"GlobalUrl" value="http://localhost/arm/"/>
```
Korisničko ime i lozinka moraju biti isti kao oni iz tablice BizLink users, prethodno provjerene. Preporučuje se korištenje opcije kopiraj i zalijepi.     

U ovom trenutku moguće je obrisati tekstualnu datoteku prisutnu u mapi Servisi i ponovo pokrenuti servis BizLink. Na taj će način tekstualna datoteka biti ponovno kreirana. Ako tekstualna datoteka nije prisutna, pokrenite .exe datoteku.  
Ako tekstualna datoteka ne sadrži greške, servis će biti aktivan.

:::danger PAŽNJA
Ako se .exe datoteka odmah zatvara, to znači da je usluga još uvijek aktivna ili postoji neki problem s datotekom konfiguracije.
:::