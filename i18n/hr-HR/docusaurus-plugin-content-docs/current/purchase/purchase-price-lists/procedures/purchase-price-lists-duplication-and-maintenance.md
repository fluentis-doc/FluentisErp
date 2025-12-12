---
title: Kopiranje i održavanje nabavnih cjenika
sidebar_position: 3
---

Ova procedura omogućuje ažuriranje cjenika dobavljača.    

### Dostupni filtri

Rezultate je moguće filtrirati prema: *Datumu početka/kraja valjanosti*, *Valuta*, *Artiklu*, *Barkodu* artikla ili samo prema artiklima koji su *prometovani*, odnosno povezani s dokumentima od određenog datuma nadalje.  

Ako je zadan filter *Datum početka valjanosti*, aplikacija prikazuje samo artikle iz cjenika koji su važeći na uneseni datum. U suprotnom, prikazat će se svi artikli, uključujući i one iz cjenika koji više nisu važeći.      

### Tablica artikala

Nakon što se odaberu željeni filteri, klikom na *Traži* tablica će se ispuniti svim artiklima koji zadovoljavaju zadane kriterije. Stupci tablice su:       
- **Konto/Podkonto/Opis**: prikazuje nositelja cjenika ako je personaliziran.        
- **Klasa/Šifra/Opis artikla**: identifikacijski podaci artikla iz cjenika.      
- **Valuta**: valuta cjenika.    
- **Jedinica mjere**: preuzeta iz cjenika.        
- **Cijena**: cijena artikla navedena u cjeniku.       
- **Popust**: eventualni popust naveden u cjeniku (samo fiksni popust).  
- **Neto cijena**: u ovoj koloni se navodi *Cijena* bez *Popusta*.  
- **Datum početka valjanosti**: datum od kojeg je cjenik važeći.    
- **Datum kraja valjanosti**: eventualni datum isteka valjanosti.      
- **Datum zadnjeg dokumenta**: datum najnovije otpremnice koja sadrži taj artikl i cjenik.      
- **Količina**: količina na koju se odnosi cijena.    
- **Varijanta/Opis varijante**: prikazuje šifru i opis varijante, ako postoji.  
- **Promet**: aktivna oznaka znači da su za taj artikl i cjenik zabilježeni skladišni prometi.  

### Alatna traka

Dostupne tipke u traci izbornika su:     
- **Ažuriraj**: otvara pop-up prozor za nastavak ažuriranja cijene artikla u cjeniku; potrebno je navesti:
1. **Datum početka valjanosti** redova cjenika koji se ažuriraju (po želji se može unijeti i **Datum kraja valjanosti**, nije obavezno)
2. **Zaokruživanje** koje sadrži pravila za promjenu cijena i popusta u cjeniku, ili  
3. **Postotak povećanja**, uklanjanjem šifre zaokruživanja i ručnim unosom postotka (ili vrijednosti).  
4. **OK** za izvršenje ažuriranja.  

:::important Zapamti
Ako se ne specificira *Datum početka valjanosti*, ažuriranje ne daje nikakve rezultate i ne izvršava se.
:::  

- **Izađi**: otvara skočni prozor u kojem se unosi *Datum isteka valjanosti* za odabrane stavke cjenika; *Datum isteka valjanosti* mora biti veći od najkasnijeg datuma posljednjeg dokumenta koji se odnosi na stavke cjenika koje treba zatvoriti (isteći).       
- **Kopiraj cjenike**: otvara skočni prozor i, za odabrane stavke cjenika, stvara ili dodaje nove stavke u novi cjenik ili u već postojeći cjenik; moguće je, za odabrane stavke, stvoriti novi cjenik specificirajući *Dobavljača*, koji može biti različit od onog u početnom cjeniku, *Datum valjanosti od* i *Valutu*; s flagom *Zadrži iste datume kao u izvornom cjeniku* stvara se cjenik na ime drugog dobavljača, ali s istim datumima valjanosti.    
- **Popusti**: otvara iskačući prozor za dodjeljivanje odabranim redovima *Popusta* po redu, dodajući ih postojećima ili ih zamjenjujući korištenjem prekidača *Izbriši prethodne popuste*.    
- **Ponovno otvaranje cjenika**: se se koristi, u slučaju redaka cjenika s *Datumom isteka valjanosti*, ti redovi se prikazuju u cjeniku *bez* datuma isteka valjanosti.  