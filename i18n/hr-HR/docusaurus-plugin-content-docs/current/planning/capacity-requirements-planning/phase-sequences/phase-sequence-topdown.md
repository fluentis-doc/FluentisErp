---
title: Sekvenca faze - višeslojna mreža  
sidebar_position: 2
---

Daje mogućnost sekvenciranja faza ručno ili prema pravilima koje odluči operater.  

Obrazac se sastoji od prvog područja filtera gdje je moguće odabrati:  
> **Radni centar**       
> **Stroj**        
> **Od datuma početka narudžbe**           
> **Do datum završetka narudžbe**       
> **Nalog proizvodnje**     

Espandendo quest'area è possibile filtrare, ad esempio, anche per *Artiklu*, *Sekvenci*, *Vrsti proizvodnog naloga*, *Grupama radne snage*, a također postoji i mogućnost izbora vrsta naloga koje želite prikazati između planiranih naloga, proizvodnih naloga u lansiranom i/ili izvršnom stanju.  

Središnji dio formulara sastoji se od dvije rešetke.               
Prva prikazuje sve faze proizvodnje kojima još nije dodijeljena sekvenca. Dakle, odabirom jedne ili više faza iz prve rešetke i pritiskom na gumb  *Premjestiti Faze*, one se premještaju u drugu rešetku (ispod) gdje je zatim moguće dodijeliti sekvencu ručno ili automatski.           

:::note NAPOMENA 
Nije moguće mijenjati informacije o fazi koja je već proglašena u proizvodnji.   
:::

U donjem dijelu formulara nalaze se sljedeća polja:  
> **Količina obveze**: prikazuje ukupnu količinu angažmana za redove koje je korisnik odabrao;           
> **Jedinica mjere vremena**: označava jedinicu mjere vremena u kojoj se želi prikazati vrijednost u **Ukupno vrijeme**;     
> **Ukupno vrijeme**: prikazuje ukupno vrijeme (Vrijeme stroja + Vrijeme radne snage + Vrijeme pripreme) za redove koje je korisnik odabrao. 

Dodatno, proširenjem ovog dijela, prikazuju se u samo za čitanje detalji vezani za:  
> **Količina**
> **Vrijeme radne snage**
> **Vrijeme stroja**
> **Vrijeme postrojenja**

*Posebni gumbi*:  

> **Traži**: omogućuje prikaz faza prema unesenim filterima;           
> **Pretraživanje s stanjem zaliha**: obavlja istu funkciju kao gumb **Traži**, ali istovremeno prikazuje u crvenoj boji sve faze gdje danas nema dostupnih zaliha;                    
> **Premjestiti Faze**: omogućuje premještanje odabranih faza iz prve rešetke u drugu rešetku gdje je moguće dodijeliti sekvenca;           
> **Promijeni Faze**: nakon odabira faze, ovaj naredba omogućuje *Ažuriranje* same faze promjenom: faze, stroja, radnog centra, ukupnog vremena stroja, radnog vremena i vremena pripreme. Također, odabirom opcije *Umetni* moguće je dodati novu fazu ili putem opcije *Izbriši* trajno je ukloniti;              
> **Promijeni ciklus/verziju**: omogućuje promjenu ciklusa i/ili verzije u tom proizvodnom nalogu;            
> **Promijenite datume**: omogućuje promjenu *Početnog Datuma* za sve odabrane planirane ili proizvodne naloge s datumom navedenim u skočnom prozoru; zatim, na temelju faza i *Kalendar kapaciteta proizvodnje*, ponovno se izračunava i *Datum Završetka* naloga te datumi početka i završetka svake faze. Na temelju novih datuma također se ponovno izračunava datum upotrebe materijala. Osim ažuriranja datuma u nalogu, ažuriraju se i datumi u povezanim nalogu;          
> **Izračunava vrijeme**: omogućuje ponovno izračunavanje vremena nakon dodjele nove sekvence ili nakon promjene nekih podataka putem funkcije **Promijeni faze**;          
> **Izračunava slijed**: nakon ponovnog uređivanja redova u drugoj rešetki prema potrebi, ovaj gumb omogućuje davanje sekvence odabranim fazama prema redoslijedu;        
> **Ažuriraj datum kad će roba biti spremna**: omogućuje ažuriranje *Datum kad će roba biti spremna* za povezane klijentske narudžbe s *Datum završetka narudžbe*;         
> **Ponovno izračunaj raspoloživost**: omogućuje ponovno izračunavanje dostupnosti prikazujući dostupnost zaliha prema dodijeljenoj sekvenci;            
> **Izdavanje planiranih naloga**: omogućava izdavanje planiranih proizvodnih naloga u proizvodne naloge za odabrane faze;                       
> **Pusti naloge**: omogućuje promjenu statusa proizvodnih naloga s lansiranih na izvršne za odabrane faze.            
> **Proširi ekransku tablicu**: omogućuje skrivanje područja filtera obrasca radi lakšeg rada s rešetkama;         
> **Dupla tablica**: omogućuje skrivanje prve rešetke radi lakšeg rada s drugom.          

Za detalje o zajedničkom funkcioniranju obrazaca obratite se linku [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).
