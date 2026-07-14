---
title: Pretraga utovarnih jedinica i Vizualizacija prebacivanja utovarnih jedinica
sidebar_position: 2
---

:::important Čemu služi

Upravljanje **utovarnim jedinicama** u Fluentisu omogućava upravljanje kompletnim životnim ciklusom jedinica tereta – od njihovog kreiranja i skladišnih kretanja pa sve do prodaje. UJT se mogu kreirati ručno ili putem aplikacije **WMS Mobile**, što sistem čini prilagodljivim različitim operativnim potrebama.

Postupak upravljanja uključuje naprednu pretragu svih kreiranih jedinica tereta i omogućava praćenje njihovog statusa knjiženja i rasknjiženja. Svaka UJT identifikovana je jedinstvenim ključem koji se sastoji od **godine**, **grupe** i **broja**, dok se podaci o dimenzijama i masi mogu prilagoditi prema potrebi.

Modul takođe omogućava upravljanje artiklima unutar svake jedinice tereta, povezivanje sa nalozima kupaca i evidentiranje skladišnih knjiženja. Operacije poput knjiženja, rasknjiženja i premeštanja jedinica tereta između lokacija izvršavaju se jednostavno i fleksibilno, uz obezbeđivanje ažurnih i tačnih podataka.

Zahvaljujući ovim funkcionalnostima, upravljanje jedinicama tereta u Fluentisu povećava efikasnost skladišnih procesa i obezbeđuje potpunu sledljivost zaliha.

:::

### Pretraga utovarnih jedinica

Forma se otvara putem navigacije **Logistika > Upravljanje utovarnom jedinicom**.

Omogućava pretragu svih dokumenata radi pregleda, izmene ili brisanja, kao i dodavanja novog dokumenta. Prozor se sastoji od oblasti za filtriranje i prikaza rezultata.

Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** u *gornjem meniju* kako bi se rezultati prikazali u tabeli rezultata.

Za otvaranje detalja dokumenta dovoljno je odabrati dokument i dvaput kliknuti mišem ili kliknuti na dugme **Izmeni** (omogućava pristup detaljima i uređivanje) ili **Pregled** (omogućava pregled detalja bez mogućnosti uređivanja).

*Vidi takođe:*  
[Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)  
Dodavanje novih polja u obrasce za pretragu

:::note NAPOMENA
Prilikom otvaranja forme, oznake **Zaduženje** i **Istovar**, koje se nalaze u filteru, nisu aktivirane, pa će biti prikazane samo utovarne jedinice koje još nisu utovarene.

Aktiviranjem oznake **Zaduženje** prikazaće se samo utovarene utovarne jedinice, dok će aktiviranjem i oznake **Istovar** biti prikazane samo utovarne jedinice koje su već istovarene.
:::

U slučaju da je *utovarna jedinica* dodata u *dostavnu* ili *transfernu* listu, u tabeli rezultata biće prikazani broj i datum liste.

Takođe, važno je napomenuti da je moguće pretraživati utovarne jedinice prema nalogu kupca sa kojim su povezane.

Iz ove forme moguće je izvršiti utovar odabranih utovarnih jedinica pritiskom na dugme **Utovari jedinicu**, kao i istovar (samo ako su već utovarene i nalaze se u listi) putem dugmeta **Razduži jedinicu**.

### Specifična dugmad

> **Novo**: omogućava [Kreiranje nove utovarne jedinice](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **Povrat od kupaca**: omogućava kreiranje nove *utovarne jedinice* korišćenjem tipa utovarne jedinice predviđenog za povrat. Sva ostala svojstva kopiraju se sa *originalne utovarne jedinice*. Ovo dugme je dostupno samo za redove koji su utovareni i isporučeni;  
> **Ubaci naloge u utovarne jedinice**: omogućava unos stavki naloga kupca u *utovarnu jedinicu*. Ovim postupkom kreira se veza između utovarne jedinice i naloga kupca;  
> **Utovari jedinicu**: izvršava postupak kreiranja *skladišnog knjiženja/prenosa za utovar utovarne jedinice*;  
> **Razduži jedinicu**: izvršava postupak kreiranja *skladišnog knjiženja/prenosa za istovar utovarne jedinice*. Ovo dugme je dostupno samo ako se utovarna jedinica nalazi na listi preuzimanja utovarnih jedinica;  
> **Prikaži knjiženja utovara**: otvara knjiženje utovara utovarne jedinice u skladu sa skladišnom evidencijom;  
> **Prikaži knjiženja istovara**: otvara knjiženje istovara utovarne jedinice u skladu sa skladišnom evidencijom;  
> **Poništi transakciju zaduženja jedinice**: poništava knjiženje utovara utovarne jedinice ako je jedinica utovarena;  
> **Poništi transakciju razduženja jedinice**: poništava knjiženje istovara utovarne jedinice ako je jedinica utovarena i istovarena;  
> **Dodaj/ukloni artikle**: omogućava korisniku dodavanje ili uklanjanje artikla iz odabrane *utovarne jedinice*. Ovo dugme je dostupno za utovarene, neisporučene redove koji nisu povezani sa listama preuzimanja ili transfernim listama i koji nisu povezani sa *proizvodnim prijavama*;  
> **Premesti utovarnu jedinicu**: omogućava premeštanje utovarne jedinice sa jedne lokacije na drugu;  
> **Vrati status štampe**: postavlja oznaku štampe na vrednost **Ne**. Ovo dugme je dostupno samo za redove koji nisu utovareni i nisu povezani sa proizvodnim prijavama.

### Vizualizacija prebacivanja utovarnih jedinica

:::note Napomena
Ova forma u potpunosti odgovara formi **Pretraga utovarnih jedinica**, opisanoj u prethodnom poglavlju. Za sve funkcionalnosti koje nisu posebno obrađene u ovom odeljku pogledajte navedenu dokumentaciju.
:::

Ova procedura omogućava korisnicima jednostavan pregled utovarnih jedinica u skladištu radi praćenja zaliha i prikaza svih informacija o utovarnim jedinicama koje se nalaze u skladištu, kao i onima koje jesu ili nisu premeštene između skladišta.