---
title: Preuzimanje cijena i popusta
sidebar_position: 1
---

Cijene proizvoda mogu se definirati u cjenicima ili izravno u kartonu artikala. U cjenicima, cijene mogu biti "s PDV-om" ili "bez PDV-a", a razlika je određena aktivacijom flag-a "Cijena s PDV-om" u zaglavlju cjenika.

**Vrste cjenika**      
Cjenici se dijele u dvije glavne kategorije: opći i po kupcu.
Opći cjenici moraju biti konfigurirani u odgovarajućoj tablici, gdje je također moguće putem oznake (flag) definirati je li cjenik s PDV-om ili bez PDV-a.
Cjenici po kupcu koriste konto i podkonto kupca kao identifikacijski kod, čime postaju jedinstveni i prilagođeni pojedinom kupcu.

Svaka cjenovna lista identificira se s tri ključna elementa:

- Tipologija (opći ili po kupcu),
- Valuta,
- Razdoblje valjanosti (od / do).     
Unutar svakog cjenika cijene artikala mogu se definirati po osnovnoj (upravljačkoj) mjernoj jedinici – koja je obavezna i definirana u kartici artikla – ili po jednoj od alternativnih mjernih jedinica.
Cijene se također mogu vezati uz količinske razrede (kartica Cijena po količini) ili uz odredišta robe (kartica Odredišta).

### **Upravljanje popustima**      
Popusti se mogu konfigurirati na više načina:

- Kartica kupca: Popusti definirani u kartici "Troškovi/Popusti" automatski se primjenjuju na prodajni dokument pri odabiru kupca. Moguće je definirati više popusta.

- Vrsta plaćanja: Popusti povezani s vrstom plaćanja automatski se preuzimaju kada se u dokumentu odabere ili predloži određeni način plaćanja.

- Tipologija cjenika: Popusti se mogu povezati sa svakim retkom u mreži cjenika unutar kartice kupca.

- Cjenik artikala: Popusti se mogu definirati za svaki redak artikla u cjeniku, uključujući i razine po količini (količinski ili vrijednosni popusti).

- Definicija politika popusta: Popusti se mogu konfigurirati prema artiklima, kupcima, klasama artikala, komercijalnim kategorijama, kategorijama popusta i detaljima kategorija popusta.

:::important Napomena
Kako bi bilo moguće upravljati popustima na osnovicu (iznos), potrebno je u bazi podataka aktivirati opći parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće društvo.
Ako taj parametar nije aktivan, popusti na osnovicu bit će pretvoreni u kaskadne popuste.
:::


### **Postupak preuzimanja cijena i popusta**      
Prilikom unosa artikla u prodajni dokument aktivira se postupak preuzimanja cijena i popusta.
Sustav traži važeći cjenik među onima koji su povezani s kupcem, počevši od tipologije označene kao zadana (default) ili prema unaprijed definiranoj prioritetnoj logici pretraživanja.  

Pretraživanje važećeg cjenika temelji se na sljedećim kriterijima:

- cjenik mora sadržavati artikl i imati istu valutu kao kupac,  
- datum dokumenta mora biti unutar razdoblja valjanosti retka u kartici Cjenici.   
Ako se ne pronađe važeći cjenik i ako nije aktivna oznaka „Pretraži sve zadane cjenike”, sustav koristi prodajnu cijenu iz kartice artikla.
Ako je oznaka aktivna, pretraživanje se nastavlja među ostalim tipologijama cjenika pridruženima kupcu, prema zadanom redoslijedu prioriteta.

Pretraživanje artikla unutar cjenika uzima u obzir ne samo šifru artikla, već i varijantu te mjernu jedinicu.
Ako je cijena definirana za alternativnu mjernu jedinicu, sustav je unosi u dokument, aktivira oznaku „Cijena alternativne mjerne jedinice” i izračunava iznose na temelju alternativne količine.  

Nakon što se odredi cijena, sustav traži i eventualne popuste te količinske cijene.
Ako je u kartici Cjenici na kartici kupca aktivna oznaka „Upravljanje cijenama”, sustav dodatno traži popuste u konfiguraciji Definicija politika popusta.
Svi pronađeni popusti evidentiraju se u zbirci popusta, uz naznaku njihovog izvora.  

### **Završne napomene**     
Ista logika pretraživanja primjenjuje se i na dokumente s cijenama s PDV-om i bez PDV-a.
Međutim, ako dokument zahtijeva cijene bez PDV-a, pretraživanje je ograničeno isključivo na cjenike tog tipa, dok se za cijene s PDV-om pretražuju samo odgovarajući cjenici.  

Upozorenje: Ako ne postoji važeći cjenik, a u kartici artikla je definirana prodajna cijena, ta se cijena predlaže kao cijena retka dokumenta, neovisno o tome zahtijeva li dokument cijene s PDV-om ili bez PDV-a.