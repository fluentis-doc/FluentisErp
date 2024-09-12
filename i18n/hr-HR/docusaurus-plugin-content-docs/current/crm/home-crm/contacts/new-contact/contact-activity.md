---
title: Zapisi tijeka rada
sidebar_position: 2
---

Ovo je prva kartica u obrascu  **CRM Kontakti**. Ova kartica se pojavljuje samo ako je za CRM kontakte aktiviran workflow koji uključuje prikaz kartice loga. Za tehničke pojedinosti, molimo konzultirajte dokumentaciju o radnom toku.  
Upotreba radnog toka za upravljanje odnosom s potencijalnim klijentima omogućuje upravljanje odnosom s potencijalnim klijentima u fazama. Različite faze radnog toka mogu uključivati različite aktivnosti za privlačenje klijenta, koje će ovisiti o vrsti odnosa postignutog u određenoj fazi: na primjer, u fazi kvalifikacije bit će važno obaviti informativni poziv, dok u fazi prilike nije jer klijent već poznaje nas i razmatra kupnju.
      

Dvije su kartice prisutne: **Aktivnosti** i **Zapisnik**.

## Aktivnosti 

Raspoloživa polja u pojedinostima o aktivnostima podijeljena su u 2 okvira, **Aktivnosti** i **Aktivnosti na čekanju**. Prvi služi za pojedinosti o već obavljenim aktivnostima, dok se u drugom već mogu definirati neki podaci o aktivnosti koja će biti obavljena nakon već unesene aktivnosti.  

U prvom okviru prisutna su sljedeća polja:

**Vrsta aktivnosti**: moguće je specificirati vrstu aktivnosti provedene za kontakt; vrste se definiraju u tablici Tipovi aktivnosti u Arm-u; ovisno o postavkama unesenim u radnom toku, aktivnosti se mogu mijenjati ovisno o fazi radnog toka u kojoj se nalazimo;           

**Datum**: ovo polje automatski popunjava procedura kada se unese **Vrsta aktivnosti**; 

**Operater**: sadrži Fluentis korisnika koji je upisao podatke;    

**Opis aktivnosti**: moguće je specificirati detalje aktivnosti u ovom polju.  

U drugom okviru prisutna su sljedeća polja:

**Datum aktivnosti na čekanju**: ovo polje automatski popunjava procedura kada se unese **Vrsta aktivnosti**;

**Vrsta aktivnosti**: moguće je specificirati vrstu aktivnosti na čekanju za kontakt;

**Opis aktivnosti**: u ovom polju moguće je detaljnije definirati aktivnost koja će biti obavljena;  

**Datum zatvaranja**: moguće je postaviti datum isteka aktivnosti;

**Operater**: mora se definirati Fluentis korisnik koji će obaviti aktivnost;

**Datum početka/završetka podsjetnika**: u ovom polju može se naznačiti raspon datuma u kojem će se prikazati podsjetnik za sljedeću aktivnost;      

**Izradite zadatak**: postavljanjem oznake na ovu stavku stvorit će se nova stavka u odjeljku  **Aktivnosti** u Fluentisu za korisnika naznačenog u polju **Operater**. Ovaj automatizam će se aktivirati prilikom spremanja kontakta. 

## Zapis

Na ovoj kartici prikazane su promjene stanja radnog toka, s naznačenim: početnim i završnim stanjem, operaterom koji je obavio operaciju i datumom.  