---
title: Popis za podizanje materijala
sidebar_position: 4
---

:::important Čemu služi
**Popis za podizanje materijala** u Fluentisu je ključni alat za učinkovito upravljanje materijalima namijenjenim proizvodnim nalozima. Omogućuje kreiranje i upravljanje detaljnim popisima materijala za preuzimanje, direktno povezujući operaciju sa specifičnim proizvodnim potrebama. Ova funkcija se često koristi za kreiranje dokumenta za preuzimanje (picking) kako bi se učinkovito upravljalo prijenosom materijala (npr. u WIP-u), pojednostavljujući logistički proces i osiguravajući točnu sljedivost.  
:::

Popis za podizanje materijala omogućuje stvaranje i upravljanje popisima zahtjeva za materijale za proizvodne narudžbe koje zahtijevaju njihovu upotrebu.  

Moguće je pretraživati proizvodne narudžbe u statusu pokrenuto i u izvršenju kako biste pronašli onu koja vas zanima, a zatim izvršiti dvije različite operacije.  

Prva operacija, putem gumba **Prva operacija, putem gumba**, omogućuje ispražnjavanje svih materijala koji se nalaze u proizvodnoj narudžbi i imaju **Tip izuzimanja Sa Listom**, u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) članka. Ti se materijali troše kada se pritisne gumb Kreiraj knjiženja, što u ovom slučaju stvara zapise o ispražnjenju iz skladišta.            

Druga operacija omogućuje premještanje materijala iz skladišta u kojem su pohranjeni, na primjer, u skladište WIP. To se postiže korištenjem gumba **Traži materijale za prikupljanje**; koji omogućuje stvaranje dokumenata za premještanje materijala. Ovi dokumenti ne predstavljaju stvarne zapise, već dokumente za premještanje materijala koji se mogu vidjeti u prozoru Picking u logističkom području.                  
Kada se koristi gumb **Kreiraj knjiženja** u ovom slučaju, generira se dokument o premještanju (picking), u kojem se za materijale s *Tipom izuzimanja Sa Listom* koriste predložak i skladište koji već postoje u liniji materijala proizvodne narudžbe za konačno ispražnjenje. Za materijale s *Ručnim Tipom Preuzimanja*, koriste se predložak i skladište postavljeni u *Tip pickinga* koji se koristi. Materijali premješteni u skladište WIP bit će kasnije ispražnjeni u proizvodnim izjavama.

Registracija će se obaviti kasnije putem postupka posvećenog pražnjenju odabira.
       

## Filter 

Na ovoj kartici možete pretraživati željene pickinge na temelju primijenjenih filtara. 

*Posebni gumbi*:

> **Traži materijale**: pretraživanjem materijala putem ovog gumba omogućit će se izrada zapisa u skladištu. Od svih podataka navedenih u nastavku o detaljima svakog materijala, važno je istaknuti značajku Mov. koja ukazuje na aktivnost odabira vrste preuzimanja liste u MRP parametrima predmeta. Ako zastavica nije aktivirana, to znači da je za taj materijal odabrana vrsta ručnog preuzimanja. Za više detalja o značenju ovih vrsta preuzimanja upućuje se na članak o  [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) predmeta.     
> **Traži materijale za preuzimanje (picking)**: pretraživanjem materijala putem ovog gumba omogućit će se izrada dokumenata za preuzimanje, a ne stvarni zapisi, već dokumenti za premještanje materijala koji će se moći vidjeti u prozoru za [Preuzimanje](/docs/logistics/picking/search-picking) u logističkom području. U ovom slučaju, zapis će se izvršiti kasnije, nakon drugog provjere.  
> **Kreiraj knjiženja**: omogućuje stvaranje zapisa u skladištu (iskrcavanje) ili dokumenta za preuzimanje nakon odabira materijala prema vrsti provedene pretrage. 
Ako je stvoren dokument za preuzimanje, za materijale s vrstom *Tipom izuzimanja Sa Listom* bit će postavljeni predložak i skladište koji već postoje u redu materijala narudžbenice; dok će se za materijale s *Ručnim Tipom Preuzimanja* postaviti predložak i skladište koje je postavljeno u *Vrsti uzimanja sa zaliha* korištene u *Vrsti uzimanja sa zaliha*.

## Povrati zapis

U ovoj je kartici moguće obnoviti bilo kakve kreirane promjene iz prethodne kartice. 