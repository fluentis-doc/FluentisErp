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

- **Izađi**: apre un pop up in cui inserire la *Data fine validità* per le righe listino selezionate; la *Data di fine validità* deve essere maggiore alla maggior data dell'ultimo documento riferito alle righe listino da chiudere (far scadere).      
- **Duplica listini**: apre un pop up e, per le righe listini selezionate, crea o aggiunge le nuove righe ad un nuovo listino o ad un listino già esistente; è possibile, per le righe selezionate, creare un nuovo listino andando a specificare il *Fornitore*, che può essere diverso rispetto a quello del listino di partenza, la *Data validità da* e la *Divisa*; con il flag *Mantieni le stesse date del listino di origine* si crea un listino intestato ad un fornitore diverso ma con le stesse date validità.
- **Sconti**: apre un pop up per assegnare alle righe selezionate degli *Sconti* di riga, aggiungendoli a quelli presenti o sostituendoli utilizzando il check button *Cancella Sconti precedenti*.
- **Riapertura listini**: se viene usato, in caso di righe listino con *Data fine validità*, tali righe vengono riportate nel listino *senza* data fine validità.