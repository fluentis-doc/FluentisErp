---
title: Primena cena i popusta
sidebar_position: 1
---

Primena **cena i popusta** je automatizovani postupak koji obezbeđuje usklađenost dokumenata nabavke sa ažuriranim cenovnicima dobavljača. Kada se artikal doda u dokument, sistem proverava dostupne cenovnike uzimajući u obzir dobavljača, valutu i period važenja i primenjuje odgovarajuće cene i popuste.

## Cenovnici dobavljača

Svaki **cenovnik dobavljača** definisan je pomoću tri ključna elementa:

- **Dobavljač**
- **Valuta**
- **Period važenja** (od/do)

Unutar svakog cenovnika cene artikala mogu se definisati za osnovnu jedinicu mere (obaveznu i definisanu u šifarniku artikala) ili za neku od alternativnih jedinica mere. Cene se takođe mogu vezati za količinske razrede (kartica **Cena po količini**) ili za određena odredišta isporuke robe (kartica **Odredišta**).

## Upravljanje popustima

**Popusti** se mogu definisati na više načina:

- **Šifarnik dobavljača**: popusti definisani na kartici **Troškovi/Popusti** automatski se primenjuju na dokument nabavke nakon izbora dobavljača. Moguće je povezati više popusta.
- **Način plaćanja**: popusti povezani sa načinom plaćanja automatski se preuzimaju kada se u dokumentu izabere ili predloži način plaćanja.
- **Cenovnik**: popusti se mogu definisati za svaki red u tabeli cenovnika unutar šifarnika dobavljača.
- **Cenovnik artikala**: popusti se mogu definisati za svaki red artikla u cenovniku, uključujući količinske razrede (količinski ili vrednosni popusti).
- **Definicija pravila popusta**: popusti se mogu konfigurisati prema dobavljačima, klasama artikala, kategorijama popusta i detaljima kategorija popusta.

:::important Zapamtite
Za korišćenje **popusta na poresku osnovicu** potrebno je u bazi podataka aktivirati opšti parametar **GEN-GlobalSettings_CalculateDiscountOnAmount** za odgovarajuće društvo.

Ako taj parametar nije aktivan, popusti na poresku osnovicu automatski će biti pretvoreni u kaskadne popuste.
:::

## Postupak primene cena i popusta

Kada se artikal doda u dokument nabavke, automatski se pokreće postupak **primene cena i popusta**. Sistem traži važeći cenovnik među cenovnicima povezanim sa dobavljačem, počevši od tipa označenog kao **podrazumevani** ili prema definisanom redosledu prioriteta pretrage.

Pretraga važećeg cenovnika zasniva se na sledećim kriterijumima:

- cenovnik mora sadržati artikal u istoj valuti kao i dobavljač;
- datum važenja cenovnika mora biti unutar perioda između datuma početka važenja reda na kartici **Cenovnici** i datuma dokumenta.

Ako nije pronađen važeći cenovnik, a uključena je oznaka [**Traži cenu stavke u svim podrazumevanim cenovnicima**](/docs/configurations/parameters/purchase/purchase-orders-parameters/), pretraga se nastavlja kroz ostale cenovnike definisane u šifarniku dobavljača, prema redosledu prioriteta.

Ako prethodna oznaka nije uključena, ali je aktivna oznaka **Trošak nula ako nedostaje cenovnik**, artikal će biti dodat sa cenom **0**. U suprotnom će sistem koristiti **poslednju nabavnu cenu** iz šifarnika artikala.

Prilikom pretrage artikla u cenovniku sistem uzima u obzir ne samo šifru artikla, već i varijantu i jedinicu mere. Ako je cena definisana za alternativnu jedinicu mere, sistem će je primeniti u dokumentu, uključiti oznaku **Cena alternativne jedinice mere** i obračunati ukupne vrednosti na osnovu alternativne količine.

Nakon određivanja cene sistem pretražuje i popuste i količinske razrede cena. Ako je na kartici **Cenovnici** u šifarniku dobavljača uključena oznaka **Upravljanje cenama**, sistem dodatno pretražuje konfiguraciju **Definicija pravila popusta** kako bi pronašao eventualne dodatne popuste. Svi pronađeni popusti prenose se u kolekciju popusta uz naznaku njihovog izvora.