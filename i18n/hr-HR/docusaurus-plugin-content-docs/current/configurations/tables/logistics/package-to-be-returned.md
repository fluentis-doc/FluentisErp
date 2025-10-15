---
title: Povratna ambalaža
sidebar_position: 15
---

Tablica se nalazi na putanji **Tablice > Logistika > Povratna ambalaža**.

U ovoj tablici moguće je kodirati različite vrste *Povratne ambalaže* koje se koriste u *Upravljanju ambalažom* unutar dokumenata nabave, prodaje i rada s podizvođačima.   

Omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.  

**Pretraživanje povratne ambalaže**

Forma se sastoji od područja za filtriranje i područja s rezultatima. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u tablici rezultata.  

**Unos povratne ambalaže**

Za unos novih kodova potrebno je kliknuti na prvi prazan red u tablici ili pritisnuti tipku **Umetanje**.  

Ova tablica sadrži artikle koji se smatraju *Povratnom ambalažome* radi praćenja zaliha. Artikl unesen u ovu tablicu mora imati kao Vrstu artikla postavljeno: *Ambalaža* (vrsta artikla unosi se u šifrarniku artikala, kartica [Općenito](/docs/erp-home/registers/items/create-new-item)).     
Pomoću flagova u tablici moguće je odabrati u kojim će područjima artikl biti dostupan za manipulaciju.  

#### Obavezni podaci

> **Šifra**: šifra *Povratne ambalaže*;     
> **Opis**: opis *povratne ambalaže*;   
> **Klasa artikla**: označava [Klasu](/docs/configurations/tables/logistics/item-class) kojoj artikl pripada;   
> **Šifra artikla**: šifra samog artikla.    

#### Specifična polja  

> **Upotreba u nabavi**: aktiviranjem ovog flaga, ambalaža će biti vidljiva u dokumentima iz područja nabave;       
> **Upotreba kod podizvođača**: aktiviranjem ovog flaga, ambalaža će biti vidljiva u dokumentima za rad s podizvođačima;  
> **Upotreba u prodaji**: aktiviranjem ovog flaga, ambalaža će biti vidljiva u dokumentima iz područja prodaje. 

Također je moguće unijeti **Skladište** i **Predložak** koji će se koristiti za taj artikl u svakom pojedinom području.

Nakon što je ova tablica parametarski postavljena, u dokumentima gdje je to predviđeno moguće je otvoriti formu povratne ambalaže pomoću tipke na traci izbornika pod nazivom **Upravljanje ambalažom**. Ta tipka će otvoriti proceduru *Upravljanje ambalažom*, već unaprijed popunjenu ambalažom definiranim u tablici *Povratna ambalaža*, tako da korisnik mora unijeti samo količine.  

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).