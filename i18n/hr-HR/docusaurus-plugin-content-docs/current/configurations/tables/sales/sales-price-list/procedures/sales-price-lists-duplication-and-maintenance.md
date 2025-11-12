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
- **Aggiorna**: apre un pop up per proseguire con l'aggiornamento del prezzo dell'articolo nel listino; si devono specificare:
1. **Data inizio validità** delle righe listino da aggiornare (eventualmente anche una **Data fine validità** non obbligatoria)
2. **Arrotondamento** contenente le politiche di variazione prezzi e sconti del listino, oppure
3. **Percentuale di incremento**, togliendo il codice dell'arrotondamento e inserendo manualmente la percentuale.
4. **OK** per eseguire l'aggiornamento.

:::note Nota
Se non si specifica la Data inizio validità, l'aggiornamento non da nessun esito e non viene eseguito.
:::  

- **Chiudi Listini**: apre una nuova form per forzare la *Data fine validità* per le righe listino selezionate; la *Data di fine validità* deve essere maggiore alla maggior data dell'ultimo documento riferito alle righe listino da chiudere (far scadere).      
- **Duplica listini**: apre un pop up e, per le righe listini selezionate, crea o aggiunge le nuove righe ad un nuovo listino o ad un listino già esistente; è possibile, per le righe selezionate, creare un nuovo listino andando a specificare: se si vuole creare un listino *Generale* o *Personalizzato*, il *Tipo listino*, la *Data validità da* e la *Divisa*; con il flag *Mantieni le stesse date del listino di origine* si crea un listino con tipologia diversa ma con stesse date validità.
- **Sconti**: apre un pop up per assegnare alle righe selezionate degli *Sconti* di riga, aggiungendoli a quelli presenti o sostituendoli utilizzando il check button *Cancella Sconti precedenti*.
- **Riapertura listini**: se viene usato, in caso di righe listino con *Data fine validità*, tali righe vengono riportate nel listino *senza* data fine validità.