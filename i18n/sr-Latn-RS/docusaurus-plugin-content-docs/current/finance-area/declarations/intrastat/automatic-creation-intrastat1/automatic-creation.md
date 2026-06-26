---
title: Automatsko kreiranje
sidebar_position: 1
---

Dugme **Automatsko kreiranje** otvara proceduru za preuzimanje podataka iz oblasti prodaje.

Procedura se sastoji od tri kartice:

**[Filtriranje računa](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter)**

**[Parametri](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters)**

**[Poništi](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore)**

Tokom **kreiranja** Intrastata koriste se **Filter računa**, u kojem se pretražuju aktivni računi koji će biti uključeni u Intrastat, i **Parametri**, koji predstavljaju pregled podataka radi dopunjavanja eventualno nedostajućih informacija.

Po završetku postupka, pritiskom na dugme za kreiranje zatvara se prozor za automatsko kreiranje, a podaci će biti dostupni u odgovarajućim karticama, spremni za grupisanje, izvoz ili štampu.

**Ako je potrebno obrisati Intrastat kreiran automatskom procedurom, prvo je potrebno otvoriti proceduru automatskog kreiranja i izvršiti vraćanje promena pomoću komandi dostupnih na kartici Poništi. Tek nakon toga model se može zatvoriti i trajno obrisati iz pregleda za pretragu Intrastata.**

Ako se u navedenoj situaciji koristi komanda za brisanje Intrastata (bez prethodnog vraćanja promena), pojaviće se upozorenje. Ukoliko se upozorenje zanemari, procedura brisanja će ipak izvršiti vraćanje promena kako bi bilo moguće ponovno automatsko kreiranje uz filtriranje aktivnih računa. Na taj način vraća se interni parametar u bazi podataka kojim sistemu signalizira da odgovarajući računi više nisu označeni kao već korišćeni u Intrastatu.

:::tip Automatska raspodela dodatnih troškova na računu

Moguće je upravljati automatskom raspodelom završnih dodatnih troškova na računu (donji deo dokumenta), kao što su troškovi prevoza i slično.

Potrebno je koristiti tip troška (tabela tipova troškova) koji ima aktiviran flag **Statistička vrednost Intrastat**, bilo prilikom unosa računa ili u šifarniku kupca/dobavljača, kako bi se automatizovao prenos podataka sa računa.

Tokom automatskog kreiranja može se primetiti da je vrednost svakog reda uvećana za deo završnog troška koji je raspodeljen.
:::




