---
title: Vremenska zaokruživanja
sidebar_position: 24
---

Kartica se nalazi u Konfiguracija > tablice > Upravljanje projektima > Vremenska zaokruživanja.

U ovoj kartici konfiguriraju se zaokruživanja koja se primjenjuju u planu fakturacije na sate usluge evidentirane u intervencijama.

**Minuti** označava početni prag za primjenu zaokruživanja, koji se koristi za određivanje pravilnog zaokruživanja na osnovu sati usluge izvršene intervencije.  
**Zaokruživanje** je broj minuta na koji se zaokružuje.
**Tolerancija** je broj minuta tolerancije prije nego što se aktivira zaokruživanje ili sljedeći prag.


Kartica radi s “pragovima”.  


Primjer: ako želimo zaokružiti sve intervencije od 2 sata na 2 sata, dovoljno je konfigurirati:


>> minuti 0 > zaokruživanje u minutama 120 > tolerancija 0


>> to znači da će od 0 pa nadalje svi sati biti zaokruženi na višekratnike od 2 sata. Tolerancija označava vremenski “razmak” nakon kojeg se prelazi na sljedeći prag.


>> Primjer. 
- Intervencija A: 1 sat i 30 minuta > fakturirano 2 sata
- Intervencija B: 2 sata i 10 minuta > fakturirano 4 sata
- Intervencija C: 8 sati i 30 minuta > fakturirano 10 sati


Ako dodamo toleranciju npr. 15 minuta, Intervencija B će se fakturirati kao 2 sata.
Dodavanjem drugog praga možemo podesiti zaokruživanje za sate preko 8 sati, na primjer:  

>> minuti 0 > zaokruživanje u minutama 120 > tolerancija 0


>> minuti 480 > zaokruživanje u minutama 30 > tolerancija 0

U gore navedenom primjeru, Intervencija C će biti fakturirana kao 8 sati i 30 minuta.
Ako je Intervencija C trajala 8 sati i 15 minuta, fakturirat će se i dalje 8 sati i 30 minuta jer je definirano zaokruživanje na pola sata.  

Ako želimo fakturirati, na primjer, samo 4 ili 8 sati, možemo konfigurirati ovako:  


>> Minuti 0 > zaokruživanje 240 minuta > tolerancija 0


>> Minuti 240 > zaokruživanje 240 minuta > tolerancija 0


>> Minuti 480 > zaokruživanje 1 minuta > tolerancija 0
