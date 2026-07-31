---
title: Primjena cijena i popusta
sidebar_position: 1
---

Primjena **cijena i popusta** automatizirani je postupak koji osigurava usklađenost dokumenata nabave s ažuriranim cjenicima dobavljača. Kada se artikl doda u dokument, sustav provjerava dostupne cjenike uzimajući u obzir dobavljača, valutu i razdoblje valjanosti te primjenjuje odgovarajuće cijene i popuste.

## Cjenici dobavljača

Svaki **cjenik dobavljača** definiran je pomoću tri ključna elementa:

- **Dobavljač**
- **Valuta**
- **Razdoblje valjanosti** (od/do)

Unutar svakog cjenika cijene artikala mogu se definirati za osnovnu mjernu jedinicu (obaveznu i definiranu u šifarniku artikala) ili za neku od alternativnih mjernih jedinica. Cijene se također mogu vezati uz količinske razrede (kartica **Cijena po količini**) ili uz određena odredišta isporuke robe (kartica **Odredišta**).

## Upravljanje popustima

**Popusti** se mogu definirati na više načina:

- **Šifarnik dobavljača**: popusti definirani na kartici **Troškovi/Popusti** automatski se primjenjuju na dokument nabave nakon odabira dobavljača. Moguće je povezati više popusta.
- **Način plaćanja**: popusti povezani s načinom plaćanja automatski se preuzimaju kada se u dokumentu odabere ili predloži način plaćanja.
- **Cjenik**: popusti se mogu definirati za svaki redak u tablici cjenika unutar šifarnika dobavljača.
- **Cjenik artikala**: popusti se mogu definirati za svaki redak artikla u cjeniku, uključujući količinske razrede (količinski ili vrijednosni popusti).
- **Definicija pravila popusta**: popusti se mogu konfigurirati prema dobavljačima, klasama artikala, kategorijama popusta i detaljima kategorija popusta.

:::important Zapamtite
Za korištenje **popusta na poreznu osnovicu** potrebno je u bazi podataka aktivirati opći parametar **GEN-GlobalSettings_CalculateDiscountOnAmount** za odgovarajuće društvo.
Ako taj parametar nije aktivan, popusti na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

## Postupak primjene cijena i popusta

Kada se artikl doda u dokument nabave, automatski se pokreće postupak **primjene cijena i popusta**. Sustav traži važeći cjenik među cjenicima povezanim s dobavljačem, počevši od vrste označene kao **zadana** ili prema definiranom redoslijedu prioriteta pretraživanja.

Pretraživanje važećeg cjenika temelji se na sljedećim kriterijima:

- cjenik mora sadržavati artikl u istoj valuti kao i dobavljač;
- datum valjanosti cjenika mora biti unutar razdoblja između datuma početka valjanosti retka na kartici **Cjenici** i datuma dokumenta.

Ako nije pronađen važeći cjenik, a uključena je oznaka [**Traži cijenu stavke u svim zadanim cjenicima**](/docs/configurations/parameters/purchase/purchase-orders-parameters/), pretraživanje se nastavlja kroz ostale cjenike definirane u šifarniku dobavljača, prema redoslijedu prioriteta.

Ako prethodna oznaka nije uključena, ali je aktivna oznaka **Trošak nula ako nedostaje cjenik**, artikl će biti dodan s cijenom **0**. U suprotnom će sustav koristiti **posljednju nabavnu cijenu** iz šifarnika artikala.

Prilikom pretraživanja artikla u cjeniku sustav uzima u obzir ne samo šifru artikla, već i varijantu te mjernu jedinicu. Ako je cijena definirana za alternativnu mjernu jedinicu, sustav će je primijeniti u dokumentu, uključiti oznaku **Cijena alternativne mjerne jedinice** te izračunati ukupne vrijednosti na temelju alternativne količine.

Nakon određivanja cijene sustav pretražuje i popuste te količinske razrede cijena. Ako je na kartici **Cjenici** u šifarniku dobavljača uključena oznaka **Upravljanje cijenama**, sustav dodatno pretražuje konfiguraciju **Definicija pravila popusta** kako bi pronašao eventualne dodatne popuste. Svi pronađeni popusti prenose se u kolekciju popusta uz naznaku njihova izvora.