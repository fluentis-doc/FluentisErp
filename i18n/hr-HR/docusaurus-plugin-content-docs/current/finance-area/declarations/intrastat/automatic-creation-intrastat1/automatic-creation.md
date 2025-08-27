---
title: Automatsko kreiranje
sidebar_position: 1
---

Tipka 'Automatsko kreiranje' otvara proceduru za dohvaćanje podataka iz prodajnog područja.  

Procedura se sastoji od tri kartice:

**[Filtriranje računa](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter)**

**[Parametri](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters)**

**[Vraćanje promjena](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore)**

Tijekom **kreiranja** Intrastata koristi se **Filter računa**, gdje se pretražuju aktivni računi koji će biti uključeni u Instrastat, i **Parametri** koji predstavljaju pregled podataka s ciljem dodavanja eventualnih nedostajućih podataka.

Nakon dovršetka, pritiskom na gumb za kreiranje, pregled za automatsko kreiranje se zatvara i podaci će biti prisutni u odgovarajućem dijelu unutar prikaza u karticama spremni za grupiranje i izvoz ili ispis.

**U slučaju da Intrastat kreiran automatskom procedurom treba biti izbrisan, potrebno je otvoriti proceduru automatskog kreiranja i izvršiti vraćanje promjena pomoću naredbi prisutnih u kartici Poništi, tek nakon toga model se može zatvoriti i trajno izbrisati iz pregleda za pretraživanje Intrastata.**

Ako se koristi naredba za brisanje intrastata u gore navedenoj situaciji (bez prethodnog vraćanja promjena), pojavit će se poruka upozorenja i, ako se upozorenje ignorira, procedura brisanja će svejedno provesti vraćanje promjena kako bi se omogućilo eventualno novo automatsko kreiranje s filtriranjem aktivnih računa. U tom smislu, ono što se vraća je interni parametar u bazi podataka koji sustavu signalizira da dotični računi nisu već korišteni u Intrastatu.

 
:::tip Automatska raspodjela dodatnih troškova u računu   
Moguće je upravljati automatskom raspodjelom računa za završni dodatni trošak (donji dio dokumenta) poput troškova prijevoza i sl.  

Potrebno je koristiti tip troška (tablica tipova troškova) koji ima oznaku  ***Statistička intrakomunitarna vrijednost** za unos u račun ili u šifrarniku klijenta/dobavljača kako bi se automatizirao prijenos iz računa.

Tijekom automatskog kreiranja primijetit će se da je vrijednost svakog reda povećana za dio konačnog troška koji je raspoređen.  
:::





