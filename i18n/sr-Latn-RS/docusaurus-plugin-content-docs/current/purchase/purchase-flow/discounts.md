---
title: Preuzimanje cijena i popusta
sidebar_position: 1
---

Proces **preuzimanja cijena i popusta** automatizira usklađivanje dokumenata nabave s ažuriranim cjenicima dobavljača. Kada se artikl umeće u dokument, sustav provjerava dostupne cjenike — uzimajući u obzir dobavljača, valutu i razdoblje valjanosti — te primjenjuje odgovarajuće cijene i popuste.
  
Svaki **cjenik dobavljača** definiran je trima ključnim elementima:

- **Dobavljač**
- **Valuta**
- **Datumi valjanosti** (od/do)

Unutar svakog cjenika, cijene artikala mogu biti navedene za osnovnu upravljačku mjernu jedinicu (obavezna i definirana u šifrarniku artikla) ili za neku od alternativnih mjernih jedinica.
Cijene se mogu definirati i po količinskim razredima (kartica Cijena prema količini) ili po destinacijama isporuke (kartica Destinacije).

## Upravljanje popustima

**Popusti** se mogu konfigurirati na više načina:  

- **Šifrarnik dobavljača**: Popusti definirani u kartici "Troškovi/Popusti" automatski se primjenjuju na dokument nabave kada se odabere dobavljač. Moguće je dodijeliti više popusta.  
- **Vrsta plaćanja**: Popusti vezani uz vrstu plaćanja automatski se preuzimaju kada se u dokumentu odabere ta vrsta plaćanja.  
- **Cjenik**: Popusti se mogu povezati s pojedinim redovima cjenika u šifrarniku dobavljača.  
- **Cjenik artikala**: Popusti mogu biti definirani za svaki red artikla u cjeniku, uključujući količinske razrede (popusti po količini ili iznosu).  
- **Definicija politika popusta**: Popusti se mogu konfigurirati prema dobavljačima, klasama artikala, kategorijama popusta i detaljima kategorija popusta.  

:::important Zapamti
Za upravljanje **popustima na osnovicu** potrebno je aktivirati u bazi podataka parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odabranu tvrtku.  
Ako parametar nije aktivan, popusti na osnovicu bit će pretvoreni u sukcesivne popuste.  
:::

## Postupak preuzimanja cijena i popusta  

Kada se artikl unese u dokument nabave, automatski se pokreće procedura **preuzimanja cijena i popusta**. Sustav traži valjani cjenik među onima povezanima s dobavljačem, počevši od cjenika označenog kao „zadani” ili prema zadanim prioritetima pretraživanja.  

Valjani cjenik mora zadovoljiti sljedeće kriterije:  

- Cjenik mora sadržavati artikl u istoj valuti kao i dobavljač.  
- Datum valjanosti cjenika mora pokrivati datum dokumenta, unutar razdoblja definiranog u kartici Cjenici.  

Ako se ne pronađe valjani cjenik, a aktivirana je opcija [Pretraga u svim zadanim cjenicima](/docs/configurations/parameters/purchase/purchase-orders-parameters/) sustav nastavlja pretragu među ostalim cjenicima dobavljača prema prioritetu.
Ako ta opcija nije aktivna, ali je uključena opcija „Cijena nula u nedostatku cjenika”, artikl se unosi s cijenom nula. U protivnom, sustav koristi *zadnju nabavnu cijenu* iz šifrarnika artikala.  
  
Pretraga artikla unutar cjenika uzima u obzir ne samo šifru artikla, već i varijantu te mjernu jedinicu. Ako je cijena definirana za alternativnu mjernu jedinicu, sustav je preuzima u dokument, aktivira oznaku „Cijena alternativne mjerne jedinice” i izračunava ukupne vrijednosti prema alternativnoj količini.

Nakon određivanja cijene, sustav pronalazi i popuste te cijene po količinskim razredima. Ako je u kartici Cjenici dobavljača označeno „Upravljanje cijenama”, sustav također traži dodatne popuste u postavkama Politika popusta.
Svi pronađeni popusti prikazuju se u zbirci popusta, s jasnom naznakom njihova izvora.  