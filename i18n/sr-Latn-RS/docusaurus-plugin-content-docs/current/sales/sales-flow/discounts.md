---
title: Preuzimanje cena i popusta
sidebar_position: 1
---

cene proizvoda mogu se definisati u cenicima ili izravno u kartonu artikala. U cenicima, cene mogu biti "s PDV-om" ili "bez PDV-a", a razlika je određena aktivacijom opcije "Cena s PDV-om" u zaglavlju cenika.

**Vrste cenika**      
Cenici se dijele u dvije glavne kategorije: opći i po kupcu.
Opći cenici moraju biti konfigurisani u odgovarajućoj tablici, gdje je također moguće putem oznake (flag) definisati je li cenik s PDV-om ili bez PDV-a.
Cenici po kupcu koriste konto i podkonto kupca kao identifikacijski kod, čime postaju jedinstveni i prilagođeni pojedinom kupcu.

Svaka cenovna lista identificira se s tri ključna elementa:

- Tipologija (opći ili po kupcu),
- Valuta,
- Razdoblje valjanosti (od / do).     
Unutar svakog cenika cene artikala mogu se definisati po osnovnoj (upravljačkoj) mjernoj jedinici – koja je obavezna i definisana u kartici artikla – ili po jednoj od alternativnih mjernih jedinica.
cene se također mogu vezati uz količinske razrede (kartica cena po količini) ili uz odredišta robe (kartica Odredišta).

### **Upravljanje popustima**      
Popusti se mogu konfigurisati na više načina:

- Kartica kupca: Popusti definisani u kartici "Troškovi/Popusti" automatski se primjenjuju na prodajni dokument pri odabiru kupca. Moguće je definisati više popusta.

- Vrsta plaćanja: Popusti povezani s vrstom plaćanja automatski se preuzimaju kada se u dokumentu odabere ili predloži određeni način plaćanja.

- Tipologija cenika: Popusti se mogu povezati sa svakim retkom u mreži cenika unutar kartice kupca.

- Cenik artikala: Popusti se mogu definisati za svaki redak artikla u ceniku, uključujući i razine po količini (količinski ili vrijednosni popusti).

- Definicija politika popusta: Popusti se mogu konfigurisati prema artiklima, kupcima, klasama artikala, komercijalnim kategorijama, kategorijama popusta i detaljima kategorija popusta.

:::important Napomena
Kako bi bilo moguće upravljati popustima na osnovicu (iznos), potrebno je u bazi podataka aktivirati opći parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće društvo.
Ako taj parametar nije aktivan, popusti na osnovicu bit će pretvoreni u kaskadne popuste.
:::


### **Postupak preuzimanja cena i popusta**      
Prilikom unosa artikla u prodajni dokument aktivira se postupak preuzimanja cena i popusta.
Sustav traži važeći cenik među onima koji su povezani s kupcem, počevši od tipologije označene kao zadana (default) ili prema unaprijed definisanoj prioritetnoj logici pretraživanja.  

Pretraživanje važećeg cenika temelji se na sljedećim kriterijima:

- cenik mora sadržavati artikl i imati istu valutu kao kupac,  
- datum dokumenta mora biti unutar razdoblja valjanosti retka u kartici Cenici.   
Ako se ne pronađe važeći cenik i ako nije aktivna oznaka „Pretraži sve zadane cenike”, sustav koristi prodajnu cenu iz kartice artikla.
Ako je oznaka aktivna, pretraživanje se nastavlja među ostalim tipologijama cenika pridruženima kupcu, prema zadanom redoslijedu prioriteta.

Pretraživanje artikla unutar cenika uzima u obzir ne samo šifru artikla, već i varijantu te mjernu jedinicu.
Ako je cena definisana za alternativnu mjernu jedinicu, sustav je unosi u dokument, aktivira oznaku „cena alternativne mjerne jedinice” i izračunava iznose na temelju alternativne količine.  

Nakon što se odredi cena, sustav traži i eventualne popuste te količinske cene.
Ako je u kartici Cenici na kartici kupca aktivna oznaka „Upravljanje cenama”, sustav dodatno traži popuste u konfiguraciji Definicija politika popusta.
Svi pronađeni popusti evidentiraju se u zbirci popusta, uz naznaku njihovog izvora.  

### **Završne napomene**     
Ista logika pretraživanja primjenjuje se i na dokumente s cenama s PDV-om i bez PDV-a.
Međutim, ako dokument zahtijeva cene bez PDV-a, pretraživanje je ograničeno isključivo na cenike tog tipa, dok se za cene s PDV-om pretražuju samo odgovarajući cenici.  

Upozorenje: Ako ne postoji važeći cenik, a u kartici artikla je definisana prodajna cena, ta se cena predlaže kao cena retka dokumenta, neovisno o tome zahtijeva li dokument cene s PDV-om ili bez PDV-a.