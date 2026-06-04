---
title: Kopiranje i održavanje prodajnih cjenika
sidebar_position: 6
---

Obrazac se otvara putem putanje *Prodaja > Cjenici prodaje > Procedure > Kopiranje i održavanje Prodajnih Cjenika*.
           
U dijelu filtra možete odabrati prikaz:           
- **Sve** vrste cjenika,         
- samo **Generičke** cjenike ili           
- samo **Prilagođene cjenike za kupca**.        
       
Ovisno o odabiru, desno se aktivira pretraga po **Vrstu cjenika** ili po **Kupcu**.

Ako je filtru za *Datum početka važenja* unesen, aplikacija prikazuje artikle cjenika koji su važeći na uneseni datum. Inače, bit će prikazani svi artikli, uključujući i one iz cjenika koji više nisu važeći.

Moguće je filtrirati i po: Datumu završetka važenja, Valuti, Artiklu, Barkodu artikla ili samo po artiklima koji su bili promijenjeni, tj. povezani s dokumentima od određenog datuma.
   

Primjena **Popusta**  na odabrane redove cjenika 
**Uklanjanje Datuma završetka važenja** za odabrane redove cjenika. 

*Posebni gumbi*:

**Ažuriraj**: otvara obrazac za ažuriranje cijena prisutnih u cjeniku koristeći prethodno konfigurirana Zaokruživanja.

Potrebno je specificirati:  
1. **Datum početka valjanosti** redova cjenika koje treba ažurirati  
2. **Zaokruživanje**: sadrži politike promjene cijena i popusta cjenika ili **Postotak povećanja**, uklanjanjem koda zaokruživanja i ručnim unosom postotka.  
3. **OK** za izvršavanje ažuriranja.  

:::note NAPOMENA
Ako ne specificirate Datum početka valjanosti, ažuriranje neće imati nikakav učinak i neće se izvršiti.
:::  

**Zatvorite cjenike**: otvara novi obrazac za postavljanje *Datuma završetka važenja* za odabrane redove cjenika.  

Potrebno je specificirati *Datum završetka važenja* za odabrane redove, uzimajući u obzir da mora biti veći od najnovijeg datuma posljednjeg dokumenta koji se odnosi na redove cjenika koje želite zatvoriti (istek).  

**Kopiraj cjenike**: otvara novi obrazac i, za odabrane redove cjenika, stvara ili dodaje nove redove u novi cjenik ili u već postojeći cjenik.
Za odabrane redove možete stvoriti novi cjenik specificiranjem: želite li stvoriti *Općeniti* ili *Prilagođeni cjenik*, *Tip cjenika*, *Početni datum važenja* i *Valutu*.

Ako je označena opcija *Zadrži iste datume kao u izvornom cjeniku*, stvorit će se cjenik s različitom vrstom, ali s istim datumima važenja.

**Popusti**: otvara novi obrazac za dodjelu odabrane *Popuste* na redovima, dodajući ih postojećim ili zamjenjujući ih koristeći opciju  **Izbriši prethodne Rabate**.

**Ponovno otvaranje cjenika**: ako se koristi, redovi cjenika s *Datumom završetka važenja*, bit će ponovno postavljeni u cjenik *bez* datuma završetka važenja.