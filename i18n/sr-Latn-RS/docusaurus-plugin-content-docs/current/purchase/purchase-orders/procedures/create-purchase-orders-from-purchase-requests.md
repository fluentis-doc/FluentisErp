---
title: Automatsko generisanje narudžbine
sidebar_position: 2
showLastUpdateTime: true
---

Postupak se nalazi na putanji **Nabavka > Narudžbine dobavljača > Procedure** i omogućava kreiranje narudžbina dobavljača iz *Zahteva za nabavku* ili *Narudžbina kupaca*.

## Filtriranje iz

Na ovoj kartici biraju se izvorni dokumenti iz kojih će biti kreirana narudžbina. Potrebno je izvršiti sledeće korake:

**1**. filtrirati *Zahtev za nabavku* ili *Narudžbinu kupca* iz kojih će biti generisana narudžbina.

**2**. izabrati podatke u pregledima (gornji sadrži zahtev/narudžbinu, a donji odgovarajuće artikle) pomoću miša ili dugmadi za izbor koja se nalaze na alatnoj traci.

**3**. kliknuti na dugme *Generiši prototipove narudžbine* kako bi se prešlo na sledeću karticu.

## Izbor dobavljača

Nakon generisanja *Prototipova narudžbine*, oni se mogu potvrditi na osnovu *preferiranih dobavljača* artikla ili *cenovnika dobavljača*. Na ovoj kartici potrebno je izabrati dobavljača od kojeg će se izvršiti nabavka.

**4**. u prvom prikazu biraju se prototipovi ili samo pojedini njihovi artikli ![](/img/neutral/common/check.png). Pregledi *Artikli* i *Analitika* prikazaće detalje stavke izabrane u prvom Grid-u.

**5**. Potražiti/izabrati/promeniti dobavljača za artikle, u zavisnosti od izabranog parametra u odeljku *Izbor dobavljača*:

- **Dobavljač i cenovnik iz zahteva za nabavku**: predlaže dobavljača definisanog u zahtevu za nabavku;

- **Dobavljač i cenovnik prema podrazumevanom preferiranom dobavljaču**: ova oznaka predlaže podrazumevanog preferiranog dobavljača za artikal;

- **Dobavljač i cene iz poslednje fakturisane/primljene/naručene nabavke**: ova opcija traži dobavljača i cene u poslednjem primljenom ulaznom računu; ako se ne upravlja ulaznim računima, pretraga se vrši u prijemima robe, a zatim u narudžbinama;

- **Dobavljač sa najpovoljnijom nabavnom cenom**: omogućava izbor dobavljača sa najnižom cenom (cena bez popusta);

- **Dobavljač sa najboljim vremenom nabavke**: omogućava izbor dobavljača sa najkraćim rokom nabavke;

- **Dobavljač sa najboljim uslovima plaćanja**: omogućava izbor dobavljača sa najdužim rokom dospeća.

Artikli bez dodeljenog dobavljača mogu se izabrati desnim klikom miša i prevući ispod željenog dobavljača koji već ima najmanje jedan povezani artikal.

**6**. potvrditi izbor klikom na **![](/img/it-it/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests/image03.png)** kako bi se generisale narudžbine na osnovu izabranih prototipova.

*Specifična dugmad*:

> **Proširi**: omogućava proširivanje svih redova u Grid-u sa dokumentima.

> **Obriši izabrani prototip narudžbine**: omogućava brisanje izabranog prototipa narudžbine.

> **Izaberi dobavljača**: omogućava izbor dobavljača. Dugme postaje aktivno kada je izabran najmanje jedan prototip/artikal.

> **Potvrdi izabrane prototipove narudžbine**: omogućava generisanje narudžbina dobavljača na osnovu izabranih prototipova.

## Prototipovi narudžbine

U ovom odeljku prikazuju se *prototipovi narudžbina (pre-orderi)* namenjeni kreiranju narudžbina dobavljača.

**7**. urediti i/ili uneti nedostajuće podatke za narudžbinu (Tip) ili njene artikle (Količina, PDV, Tip prometa nabavke) i odlučiti da li će zahtev za nabavku ili narudžbina kupca biti prinudno realizovani, bez daljeg uzimanja u obzir preostalih količina.

**8**. generisati narudžbine dobavljača pomoću dugmeta *Generiši narudžbine dobavljača* ili, alternativno, dodati redove postojećim narudžbinama pomoću dugmeta *Narudžbine*.

## Parametri (kreiranja)

- **Tip narudžbine dobavljača za zahteve za nabavku** – određuje tip narudžbine koja će biti kreirana iz zahteva za nabavku. Vrednost se može promeniti u koraku *Prototipovi narudžbine*.

- **Tip narudžbine dobavljača za narudžbine kupaca** – određuje tip narudžbine koja će biti kreirana iz narudžbina kupaca. Vrednost se takođe može promeniti u koraku *Prototipovi narudžbine*.

- **Grupisanje po stavci** – ako zahtev za nabavku ili narudžbina kupca sadrže više redova sa istim artiklom, sistem će kreirati jednu stavku sa zbirnom količinom. Grupisanje se primenjuje samo na stavke unutar istog izvornog dokumenta.

## Podrazumevane vrednosti za artikle bez definisanih podataka

Ove vrednosti koriste se kada određeni podaci nisu definisani na kartici artikla.

- **Tip prometa nabavke** – koristi se ako na artiklu nije definisan tip fakturisanja nabavke.

- **Stopa PDV-a** – koristi se ako na artiklu nije definisana stopa PDV-a.

- **Jedinica mere (alternativna jedinica mere)** – koristi se ako se narudžbine kreiraju sa alternativnom jedinicom mere.

- **Vreme nabavke** – koristi se za obračun i određivanje planiranih datuma isporuke.

## Razmotri raspoloživost

Ako je ova opcija uključena, u koraku **Prototipovi narudžbine** biće prikazana kolona **Raspoloživa količina**.

Prilikom obračuna raspoloživosti sistem može uzeti u obzir količine iz sledećih oblasti, u zavisnosti od izabranih opcija:

- Kooperacija / dorada
- Nabavka
- Prodaja
- Planiranje
- Proizvodnja
- Skladište

Na osnovu tih podataka određuje se stvarna raspoloživost artikla koja se koristi prilikom predlaganja količina za naručivanje.

## Operacije

Na osnovu tipa izvornog dokumenta (*Zahtev za nabavku* ili *Narudžbina kupca*), prikazuje istoriju svih izvršenih kreiranja sa detaljima o operateru, kreiranim narudžbinama dobavljača i njihovim detaljima.

Narudžbine dobavljača mogu se pregledati dvostrukim klikom na redove kartica (dole) **Operacija**/**Detalji**.

*Specifično dugme*:

> **Vrati označene operacije**: omogućava poništavanje kreirane narudžbine i vraćanje zahteva za nabavku.