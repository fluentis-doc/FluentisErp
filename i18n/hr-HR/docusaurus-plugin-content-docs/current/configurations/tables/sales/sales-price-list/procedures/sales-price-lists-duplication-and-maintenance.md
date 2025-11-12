---
title: Dupliciranje i održavanje prodajnih cjenika  
sidebar_position: 6
---

Ova procedura omogućuje ažuriranje artikala u prodajnim cjenicima.          

### Dostupni filteri  

U dijelu za filtere moguće je odabrati prikaz:  
- **Svi** tipovi cjenika,  
- samo cjenici tipa **Generički**, ili  
- samo cjenici **Personalizirani za klijenta**.       

Ovisno o izboru, s desne strane aktivira se pretraga po **Tipu cjenika** ili po **Klijentu**.  
Ako je filter za *Datum početka valjanosti* popunjen, aplikacija prikazuje artikle cjenika valjanih na uneseni datum. U suprotnom, prikazuju se svi artikli, uključujući one iz nevažećih cjenika.  
Moguće je filtrirati i po: *Datum završetka valjanosti*, *Valuta*, *Artikl*, *Barkod artikla* ili samo artikle koji su bili predmet transakcija, tj. povezani s dokumentima od određenog datuma.    

###  Mreža artikala  

Nakon odabira željenih filtera, klikom na Traži mreža će se popuniti sa svim artiklima koji zadovoljavaju tražene kriterije. Kolone mreže su:     
- **Tip cjenika**: prikazuje tip cjenika, ako je generički, s odgovarajućom **Opisom**.  
- **Račun/Podračun/Opis**: sadrži vlasnika cjenika, ako je personalizirani.  
- **Klasa/Kod/Opis artikla**: identifikacijski podaci artikla u cjeniku.  
- **Kod valute**: prikazuje valutu cjenika.  
- **Kod jedinice mjere**: također se dohvaća iz cjenika.  
- **Cijena**: prikazuje cijenu artikla u cjeniku.  
- **Popust**: prikazuje eventualni popust u cjeniku (samo fiksni popust).  
- **Neto cijena**: cijena nakon primjene popusta.  
- **Datum valjanosti od**: datum početka valjanosti cjenika.  
- **Datum valjanosti do**: eventualni datum završetka valjanosti.  
- **Datum posljednjeg dokumenta**: datum najnovije otpremnice koja sadrži artikl i cjenik.    

### Traka izbornika 

Tipke dostupne u **traci izbornika** su:      
- **Ažuriraj**: otvara pop-up za nastavak ažuriranja cijene artikla u cjeniku; potrebno je specificirati:    
1. **Datum početka valjanosti** redaka cjenika koji se ažuriraju (eventualno i **Datum završetka valjanosti**, nije obavezno)  
2. **Zaokruživanje** koje sadrži pravila promjene cijena i popusta cjenika, ili    
3. **Postotak povećanja**, uklanjanjem koda za zaokruživanje i ručnim unosom postotka.    
4. **OK** za izvršenje ažuriranja.    

:::note Napomena
Ako se ne specificira Datum početka valjanosti, ažuriranje neće dati rezultat i neće se izvršiti.  
:::  

- **Zatvori cjenike**: otvara novu formu za prisilno postavljanje *Datuma završetka valjanosti* za odabrane redove cjenika; *Datum završetka valjanosti* mora biti veći od najvećeg datuma posljednjeg dokumenta vezanog uz odabrane redove cjenika.         
- **Dupliciraj cjenike**: otvara pop-up i za odabrane redove cjenika stvara ili dodaje nove retke u novi ili postojeći cjenik; moguće je za odabrane redove stvoriti novi cjenik, specificirajući: hoće li biti *Generički* ili *Personalizirani*, *Tip cjenika*, *Datum valjanosti od* i *Valutu*; s opcijom *Zadrži iste datume kao u izvornom cjeniku* stvara se cjenik različite tipologije, ali sa istim datumima valjanosti.    
- **Popusti**: otvara pop-up za dodjeljivanje *Popusta* odabranim redovima, dodajući ih postojećima ili ih zamjenjujući pomoću check tipke *Obriši prethodne popuste*.    
- **Popusti**: otvara pop-up za dodjeljivanje *Popusta* odabranim redovima, dodajući ih postojećima ili ih zamjenjujući pomoću check tipke *Obriši prethodne popuste*.    