---
title: Generiranje predujma od narudžbe kupca
sidebar_position: 7
---

Za naplatu predujma za robu naručenu od našeg kupca nije potrebno kreirati proforma fakturu, već se postupak pokreće iz modula prodaje u obrascu Narudžba kupca.
            
**Faza 1**                
Kreirati novu narudžbu (potrebno je unijeti artikl s kodom).
U kartici zaglavlja ispuniti sljedeća polja:  
> - tip narudžbe  
> - kupac
> - unijeti datum isporuke i datum kada roba može biti spremna
> - potvrđeno i datum potvrde
> - Aktivirati oznaku “ispisano”  
              
U donjem dijelu KARTICE Plaćanja unesite vrstu plaćanja ANT (avans) umjesto vrste plaćanja predložene iz kartice. Prebacujem se na tab Artikli i obavezno moram unijeti artikl s kodom, inače procedura ne funkcionira. Također, u retku artikla, polje “Fakturirano prodaje” mora biti ispunjeno.  
Spremam narudžbu.
               
Idem u odjeljak sažetaka, dolje otvaram odjeljak “sažetak rokova”.  
Odabirem redak u mreži. U traci izbornika koristim tipku za kreiranje predujma.
               
Otvara se prozor za "kreiranje avansa" gdje označavam vrstu dokumenta (GEN za ostati generički) i unosim opis, na primjer "narudžba ... avansno plaćanje".
                
**Faza 2 Registracija unaprijed plaćenog iznosa**               
            
Ulazim u modul administracije i kreiram novu računovodstvenu registraciju. U uzroku unosim: naplata ili naplata bankovnog transfera, ovisno o onome što je dostupno.  
> - Na traci s alatima koristim tipku “Pretraži utakmice”, dvoklikom odaberem utakmicu kreiranu iz narudžbe.  
> - Prebacujem se na karticu Registracija i u knjigu dnevnika u opis “bankovni depoziti” unosim svoju banku.
> - Spremam.
> - Nakon spremanja pojavljuje se prozor s upitom za kreiranje avansne fakture. Odaberite da.  
                
**Faza 3 Upravljanje avansnim stavkama**              
               
Ulazim u kartici “Upravljanje avansima”, pritisnem tipku Pretraživanje i odabirem redak narudžbe od interesa. U traci izbornika pritisnem tipku “Fakturiranje avansa”.  
Otvorit će se prozor “izrada avansne stavke”. Unosim u razna polja Tip fakture, PDV i tip fakturiranja prodaje (“avansi od kupaca” ili slično). Šaljite.
              
**Faza 4**               
           
Nakon što pošaljete, automatski se otvara upravo kreirana avansna faktura. Napomena: bez oznake “Otisnuta” faktura se neće knjižiti.
U kartici Plaćanja obrišite plaćanje koje je predloženo prema kartici klijenta (npr. bankovni transfer, RIBA itd.), ostavite SAMO redak s tipom plaćanja ANT (avans). Spremite.
               
**Faza 5 Knjiženje fakture**           
                
U modulu Prodaja, u obrascu Prodajne fakture, idite na Postupci i knjižite upravo kreiranu fakturu.
Moguće je da se pojavi greška. Treba provjeriti je li u “tipu fakture” koji se koristi u parametrima knjiženja uključen ili isključen odgovarajući flag.                 
Na traci izbornika koristite postupak Ispunjavanje prema narudžbama kupaca.
Odaberite narudžbu i napravite Prijenos pritiskom na tipku na traci izbornika.
Spremite.  
Prebacujem se u karticu Artikli i provjeravam da li je u mreži artikala u polju Fakturirano u nabavi upisan odgovarajući račun; inače će se pojaviti greška na kraju.  
Na vrhu trake izbornika pojavljuje se tipka Upravljanje avansima. Ako ne bude vidljiva, zatvorite karticu fakture i ponovno otvorite.  
U obrascu Upravljanje avansima, prebacite se na karticu Storno avansa.
Odaberite redak od interesa i pritisnite tipku Kreiraj storno na traci izbornika.  
Na traci izbornika zatim će se aktivirati tipka Kreiraj zatvaranje radova.  
Zatvorite fakturu i knjižite je koristeći uobičajenu proceduru knjiženja.
