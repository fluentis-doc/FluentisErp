---
title: Automatsko generiranje narudžbe
sidebar_position: 2
showLastUpdateTime: true
---

Postupak se nalazi na putanji **Nabava > Narudžba dobavljačima > Procedure** i omogućuje stvaranje narudžba dobavljačima iz  *Zahtjeva za nabavom* ili *Narudžbi kupaca*.

## Filtriraj iz

Na ovoj kartici odabiru se izvorni dokumenti iz kojih će se stvoriti narudžba. Stoga je potrebno slijediti sljedeće korake:

**1**. filtrirati *Zahtjev za nabavom* ili *Narudžbu kupca* iz kojih će se generirati narudžba.

**2**. odabrati podatke iz pregleda (gornji sadrži zahtjev/narudžbu, a donji odgovarajuće artikle) mišem ili pomoću gumba za odabir koji se nalaze na vrpci.

**3**. pritisnuti gumb *Generiraj prototipove narudžbe* kako bi se prešlo na sljedeću karticu.
 

## Izbor dobavljača

Nakon generiranja *Prototipova narudžbe*, oni se mogu potvrditi na temelju *preferiranih Dobavljača* artikla ili *cjenika dobavljača*. Na ovoj kartici potrebno je odabrati dobavljača od kojeg se želi naručiti.

**4**. u prvom prikazu odaberu se prototipovi ili samo neki od njihovih artikla. ![](/img/neutral/common/check.png). Pregledi *Artikli* i *Analitika*, prikazat će pojedinosti o odabranoj stavci u prvoj mreži. 


**5**. Potražiti/odabrati/promijeniti dobavljača za artikle, ovisno o odabranom parametru u odjeljku *Izbor dobavljača*:

- **Dobavljač i cjenik iz zahtjeva za kupnju**: ova kartica predlaže dobavljača prisutnog u zahtjevu za kupnju;

- **Dobavljač i cjenik po preferencijalnom zadanom dobavljaču**: ovaj *flag* predlaže zadanog preferiranog dobavljača za artikl;

- **Dobavljač i cijene iz posljednje fakturirane/zaprimljene/naručene nabave**: ova opcija traži dobavljača i cijene u zadnjem primljenom ulaznom računu; ako se ne upravlja ulaznim računima, tražit će se u prijevoznim dokumentima, a zatim u narudžbama;

- **Dobavljač s najpovoljnijom otkupnom cijenom**: opcija omogućuje odabir dobavljača s najnižom cijenom (cijena bez popusta);

- **Dobavljač s najboljim vremenom nabave**: opcija omogućuje odabir dobavljača s najkraćim vremenom nabave;

- **Dobavljač s najboljim uvjetima plaćanja**: opcija omogućuje odabir dobavljača s najdužim rokom dospijeća;

Artikli bez dobavljača mogu se odabrati desnim klikom mišem i premjestiti, također mišem, ispod željenog dobavljača koji već ima barem jedan povezani artikl.

**6**. potvrditi odabirom **![](/img/it-it/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests/image03.png)**, kako bi se generirale narudžbe na temelju odabranih prototipova.

*Posebni gumbi*:

> **Proširi**: omogućuje proširivanje svih redaka u mreži s dokumentima.

> **Izbriši odabrani prototip narudžbe**: omogućuje brisanje odabranog prototipa narudžbe.

> **Odaberite dobavljača**: omogućuje odabir dobavljača. Postaje aktivan ako je odabran barem jedan prototip/artikl.

> **Potvrdi odabrane prototipe narudžbe**: omogućuje generiranje narudžbi dobavljača na temelju odabranih prototipova.

## Prototipovi narudžbe

U ovom odjeljku prikazuju se *predbilježbe narudžbi (pre-orderi)* namijenjene kreiranju narudžbi dobavljačima.

**7**. urediti i/ili unijeti nedostajuće podatke za narudžbu (Vrsta) ili za njene artikle (Količina, PDV, Vrsta prometa nabave) i odlučiti hoće li se zahtjev za nabavom ili narudžba kupca izvršiti prisilno, bez dodatnog uzimanja u obzir preostalih količina.

**8**. generirati narudžbe dobavljačima pomoću gumba *Generiraj narudžbe dobavljača* ili, alternativno, dodati redove postojećim narudžbama pomoću gumba *Narudžbe*.

## Parametri (kreiranja)

- **Vrsta narudžbe dobavljača za zahtjeve za nabavu** – određuje vrstu narudžbe koja će se kreirati iz zahtjeva za nabavu. Vrijednost je moguće promijeniti u koraku *Prototipovi narudžbi*.

- **Vrsta narudžbe dobavljača za narudžbe kupaca** – određuje vrstu narudžbe koja će se kreirati iz narudžbi kupaca. Vrijednost je također moguće promijeniti u koraku *Prototipovi narudžbi*.

- **Grupiranje za stavku** – ako zahtjev za nabavu ili narudžba kupca sadrže više redaka s istim artiklom, sustav će kreirati jednu stavku sa zbrojenom količinom. Grupiranje se primjenjuje samo na stavke unutar istog izvornog dokumenta.

## Zadane vrijednosti za artikle bez definiranih podataka

Ove vrijednosti koriste se kada određeni podaci nisu definirani na kartici artikla.

- **Vrsta prometa nabave** – koristi se ako na artiklu nije definirana vrsta fakturiranja nabave.

- **Stopa PDV-a** – koristi se ako na artiklu nije definirana PDV stopa.

- **Jedinica mjere (alternativna jedinica mjere)** – koristi se ako se narudžbe kreiraju s alternativnom jedinicom mjere.

- **Vrijeme nabave** – koristi se za izračun i određivanje planiranih datuma isporuke.

## Razmotri dostupnost

Ako je ova opcija uključena, u koraku **Prototipovi narudžbi** bit će prikazan stupac **Raspoloživa količina**.

Prilikom izračuna raspoloživosti sustav može uzeti u obzir količine iz sljedećih područja, ovisno o odabranim opcijama:

- Kooperacija / dorada
- Nabava
- Prodaja
- Planiranje
- Proizvodnja
- Skladište

Na temelju tih podataka određuje se stvarna raspoloživost artikla koja se koristi pri prijedlogu količina za naručivanje.

## Operacije

Na temelju vrste izvornog dokumenta (*Zahtjev za kupnju* ili *Narudžba kupca*), prikazuje povijest svih provedenih kreacija s detaljima o operateru, stvorenim Narudžbama dobavljačima i njihovim pojedinostima.

Narudžbe dobavljačima mogu se pregledati dvostrukim klikom na retke kartica (dolje) **Operacija**/**Detalji**.

*Posebna tipka*:

> **Povrati označene operacije**: omogućuje poništenje stvorene narudžbe i vraćanje zahtjeva za nabavom.
