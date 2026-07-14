---
title: Pretraga utovarnih jedinica i Vizualizacija prebacivanja utovarnih jedinica
sidebar_position: 2
---

:::important Čemu služi

Upravljanje **utovarnim jedinicama** u Fluentisu omogućuje upravljanje cijelim životnim ciklusom jedinica tereta – od njihovog stvaranja i skladišnih kretanja pa sve do prodaje. UJT se mogu kreirati ručno ili putem **WMS Mobile** aplikacije, što sustav čini prilagodljivim različitim operativnim potrebama.

Postupak upravljanja uključuje napredno pretraživanje svih kreiranih jedinica tereta te omogućuje praćenje njihovog statusa knjiženja i rasknjiženja. Svaka UJT identificirana je jedinstvenim ključem koji se sastoji od **godine**, **grupe** i **broja**, dok se podaci o dimenzijama i masi mogu prilagoditi prema potrebi.

Modul također omogućuje upravljanje artiklima unutar svake jedinice tereta, povezivanje s narudžbama kupaca te evidentiranje skladišnih knjiženja. Operacije poput knjiženja, rasknjiženja i premještanja jedinica tereta između lokacija provode se jednostavno i fleksibilno, uz osiguravanje ažurnih i točnih podataka.

Zahvaljujući ovim funkcionalnostima, upravljanje jedinicama tereta u Fluentisu povećava učinkovitost skladišnih procesa te osigurava potpunu sljedivost zaliha.

:::

### Pretraga utovarnih jedinica

Formular se otvara putem navigacije **Logistika > Upravljanje utovarnom jedinicom**.

Omogućava pretraživanje svih dokumenata radi pregleda, izmjene ili brisanja, ili dodavanja novog dokumenta; prozor se sastoji od područja filtra i prikaza rezultata.

Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži** u *gornjem izborniku* kako bi se rezultati prikazali u prikazu rezultata.

Za otvaranje pojedinosti o dokumentu, dovoljno je odabrati ga i dvaput kliknuti mišem, ili kliknuti na gumb Izmijeni (omogućuje pristup detaljima i uređivanje) ili na gumb Pregled (omogućuje pristup detaljima bez mogućnosti uređivanja).

*Vidi također*:   
[Zajedničke funkcionalnosti, gumbe i polja](/docs/guide/common)            
Dodavanje novih polja u obrasce pretraživanja    

:::note NAPOMENA
Prilikom otvaranja obrasca, zastavice *Zaduženje* i *Istovar*, prisutne u filtru, nisu označene, pa će se prikazati samo utovarne jedinice koje još nisu učitane. 
Aktiviranjem zastavice *Zaduženje* prikazat će se samo učitane utovarne jedinice, a aktiviranjem i zastavice *Istovar* prikazat će se samo utovarne jedinice koje su već istovarene.
:::

U slučaju da je *jedinica utovara* dodana u *dostavnu* ili *transfernu* listu, u rezultirajućoj tablici bit će prikazani broj i datum liste.

Također, važno je napomenuti da je moguće pretraživati utovarne jedinice po narudžbi kupca s kojima su povezane.

Iz ovog obrasca moguće je izvršiti ukrcaj odabranih utovarnih jedinica pritiskom na gumb *Utovari jedinicu*, kao i istovar (samo ako su već učitani i prisutni u listi) putem gumba *Razduži jedinicu*.


*Posebni gumbi*:

> **Novo**: omogućuje [Stvaranje nove utovarne jedinice](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **Povrat od kupaca**: omogućuje stvaranje nove *Jedinice za utovar i istovar*, koristeći utovarnu jedinicu s oznakom za povrat kao tip utovarne jedinice. Sva ostala svojstva se kopiraju iz *originalne utovarne jedinice*. Ovaj gumb je dostupan samo za redove koji su utovareni i isporučeni;   
> **Umetni narudžbe u utovarnim (transportnim) jedinicama**: omogućuje unošenje stavki narudžbe klijenta u *jedinicu za utovar i istovar*. Ovaj postupak stvara vezu između utovarne jedinice i narudžbe klijenta;    
> **Utovari jedinicu**: izvršava postupak stvaranja *zapisa/transfera za utovar utovarne jedinice*;          
> **Razduži jedinicu**: izvršava postupak stvaranja zapisa/ transfera za *istovar utovarne jedinice*. Ovaj je gumb dostupan samo ako je utovarna jedinica prisutna u popisu preuzimanja utovarnih jedinica;              
> **Prikaži zapise utovara**: otvara zapis o utovaru utovarne jedinice u skladu s skladišnom evidencijom;    
> **Prikaži zapise istovara**: otvara zapis o istovaru utovarne jedinice u skladu s skladišnom evidencijom;    
> **Povrat transakcije zaduženja jedinice**: poništava zapis o utovaru utovarne jedinice ako je utovarne jedinica utovarena;    
> **Povrat transakcije razduženja jedinice**: poništava zapis o istovaru utovarne jedinice ako je utovarna jedinica utovarena i istovarena;    
> **Dodaj/ukloni artikle**: omogućuje korisniku dodavanje ili uklanjanje artikla iz odabrane *jedinice za utovar i istovar*. Ovaj je gumb dostupan za utovarene, neisporučene retke koji nisu povezani s prikupljanjem ili listama za prijenos i koji nisu povezani s *proizvodnim izjavama*; 
> **Premjesti utovarnu jedinicu**: omogućuje premještanje utovarne jedinice s jednog mjesta na drugo;    
> **Povrat izvještaja na prethodno stanje**: postavlja zastavicu ispisa na "Ne". Ovaj gumb je dostupan samo za retke koji nisu utovareni i koji nisu povezani s proizvodnim izjavama.      

### Vizualizacija prebacivanja utovarnih jedinica

:::note Napomena
Ova forma u potpunosti odgovara formi **Pretrazi utovarnih jedinica**, opisanoj u prethodnom poglavlju. Za sve funkcionalnosti koje nisu posebno obrađene u ovom odjeljku pogledajte navedenu dokumentaciju.
:::

Ova procedura je dizajnirana kako bi korisnicima omogućila jednostavno ispitivanje utovarne jedinice skladišta s ciljem praćenja zaliha i pružanja svih informacija o utovarnim jedinicama prisutnim u skladištu i koje su prenesene ili nisu prenesene između skladišta.

