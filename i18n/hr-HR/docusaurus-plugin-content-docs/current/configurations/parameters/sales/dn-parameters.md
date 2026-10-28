---
title: Parametri otpremnica
sidebar_position: 4
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri prodajnih otpremnica omogućuju definiranje osnovnih postavki za njihovo pravilno upravljanje u skladu sa zahtjevima pojedine tvrtke. Prozor s ovim parametrima sastoji se od četiri kartice: Općenito, Razduživanje, Izlaz i Analitika.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: ako je opcija aktivirana, u redcima otpremnice prikazuju se dva stupca, Alternativna mjerna jedinica i Alternativna količina. Na taj je način moguće upravljati dvjema mjernim jedinicama, pri čemu se provjere razduživanja uvijek provode prema osnovnoj mjernoj jedinici.

**Automatski prijedlog alternativne mjerne jedinice**: ovo se polje može uređivati samo ako je aktivirana opcija za upravljanje dvjema mjernim jedinicama. Omogućuje prikaz alternativne mjerne jedinice definirane u šifarniku artikala, u odgovarajućem stupcu *Alternativna mjerna jedinica* na kartici artikala otpremnice. Ako opcija nije aktivirana, mjerna jedinica neće se predlagati.

**Provjera raspoloživosti**: ova opcija i ostale povezane opcije za provjeru, prikaz i obveznost, uključujući postavke prema području, trenutačno nisu implementirane.

**Zadana mjerna jedinica za volumen/težinu**: ove se mjerne jedinice uzimaju kao zadane vrijednosti koje se predlažu na kartici [Prijevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice za volumen i težinu. Podatak je moguće izmijeniti u dokumentima.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: prilikom pretraživanja cijene i popusta za artikl u otpremnici sustav primjenjuje pravila na temelju postavki u šifarniku kupca, u odjeljku *Cjenici*. Ako je opcija *Zadano* aktivirana za određenu vrstu cjenika, cijene i popusti traže se prvenstveno u toj vrsti cjenika. Ako opcija *Zadano* nije aktivirana, sustav proširuje pretraživanje na sve dostupne vrste cjenika prema zadanom redoslijedu prioriteta.

Kada je opcija *Zadano* aktivirana, sustav najprije traži važeći cjenik zadane vrste. Ako ne pronađe odgovarajuću cijenu, provjerava ostale vrste cjenika prema postavljenom redoslijedu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cjenika nije označena kao *Zadano* i definirani su samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagat će se i za retke s besplatnim artiklima, jednako kao i za retke s artiklima sa šifrom.

**Dopusti popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos retka primjenjivat će se i na retke s besplatnim artiklima.

**Maksimalan broj redaka**: maksimalan broj artikala po računu. Ova je opcija aktivna samo u rumunjskoj verziji.

**Provjera artikala na izmaku zaliha**: ako je opcija aktivirana, prikazuje se skočno upozorenje kada se u otpremnicu unese artikl za koji je u šifarniku artikala aktivirana oznaka *Na izmaku zaliha* i definiran datum od kojeg je artikl na izmaku zaliha. Ova provjera sprječava prodaju artikala koji se više neće proizvoditi ili obnavljati na zalihi.

**[Omogući pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku *Artikli* prikazuju se dva nova stupca: *Popusti artikla* i *Konačni popusti artikla*. Stupac *Popusti artikla* može se uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može izravno u tom stupcu unositi, mijenjati ili brisati popuste. Za korištenje ovog widgeta, osim aktiviranja ove opcije, potrebno je u vrsti otpremnice odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tablicu artikala otpremnice dodaju se stupci za šifru i opis artikla kod kupca, definirani u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tablicu artikala otpremnice dodaje se stupac za prikaz barkoda artikla.

**Obvezna šifra operatera**: ovom se opcijom određuje je li obvezno popuniti polje *Operater* u zaglavlju dokumenta.

**Blokiraj unos dokumenta na neradne dane prema tvorničkom kalendaru**: ako je opcija aktivirana, sustav ne dopušta unos ponude na neradne dane. Najprije se provjerava tvornički kalendar tvrtke, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sustav ne provodi provjeru i dopušta unos dokumenta.

**Ponovni izračun prijevoza**: ovom se opcijom omogućuje prijenos ukupnih vrijednosti težine, volumena i broja paketa iz redaka dokumenta na karticu [Prijevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice. Ako opcija nije aktivirana, ta polja neće se popuniti.

**Vanjske reference narudžbe**: ovom se opcijom omogućuje prijenos polja *Naša referenca* i *Vaša referenca* iz redaka narudžbe u retke otpremnice.

**Zadrži cijene iz narudžbe kupca za količinske razrede**: ova opcija osigurava da se tijekom djelomičnog razduživanja narudžbe u otpremnici zadrži isti količinski razred cijene koji je bio primijenjen u izvornoj narudžbi, bez ponovnog izračuna. Primjerice, ako je u narudžbi navedena količina od 100 jedinica koja aktivira određeni količinski razred cijene, a u otpremnici se razduži samo 20 jedinica, aktiviranjem ove opcije otpremnica će zadržati cijenu iz izvornog količinskog razreda, bez njezine izmjene prema stvarno razduženoj količini.

### Razduživanje

Na ovoj se kartici nalaze sljedeća polja:

**Plaćanje**: određuje vrijednost koja se koristi za plaćanje na otpremnici kupca u slučaju višestrukog razduživanja narudžbi u otpremnicu: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Primatelj**: određuje vrijednost koja se koristi za primatelja na otpremnici kupca u slučaju višestrukog razduživanja narudžbi u otpremnicu: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Provjera usklađenosti plaćanja otpremnice i narudžbe**: ako je opcija aktivirana, sustav neće dopustiti razduživanje narudžbi s različitim načinima plaćanja.

**Ponovni izračun mjesta troška/mjesta dobiti (CDC/CDP)**: ako je otpremnica kreirana iz narudžbe kupca putem odgovarajućeg postupka, aktiviranjem ove opcije sustav će ponovno izračunati mjesta troška i mjesta dobiti, ne uzimajući u obzir vrijednosti postavljene u prodajnoj narudžbi. Ako opcija nije aktivirana, sustav neće ponovno izračunavati te podatke, već će zadržati vrijednosti unesene u narudžbi kupca.

**Prikaz tablice razduživanja**: ako je opcija aktivirana, omogućuje prikaz u obliku tablice u obrascu za razduživanje prodajnih narudžbi.

**Prikaz stabla razduživanja**: ako je opcija aktivirana, omogućuje prikaz u obliku stabla u obrascu za razduživanje prodajnih narudžbi.

**Predlaganje lotova**: ovom se opcijom osigurava da se tijekom razduživanja, ako je unesena količina za razduživanje različita od količine u izvornom dokumentu, količina lotova uskladi s količinom retka u kreiranom dokumentu. Time se sprječava da se količina retka u kreiranom dokumentu razlikuje od količine lotova.

### Izlaz

**Kreiraj knjiženje s datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje kreira se s datumom *prijevoza* navedenim na kartici *Prijevoz* otpremnice, ako je taj datum unesen. U suprotnom se koristi datum otpremnice.

Ako opcija nije aktivirana, skladišno knjiženje uvijek se kreira s tekućim datumom.

**Prioritet skladišta i predloška izlaza u redcima artikala otpremnice**: ako je opcija aktivirana, skladište i predložak izlaza preuzimaju se iz redaka otpremnice. Ako opcija nije aktivirana, koriste se skladište i predložak navedeni u sljedećim poljima (**Skladište** i **Skladišni predložak**).

**Automatski ulaz/izlaz**: ako je opcija aktivirana, izlazno skladišno knjiženje otpremnice izvršava se automatski pri aktiviranju oznake *Ispisano*. Ako opcija nije aktivirana, izlaz je potrebno provesti odgovarajućim gumbom.

**Upozorenje za fiktivne artikle**: ako je opcija aktivirana, tijekom skladišnog izlaza otpremnice sustav provjerava postoje li fiktivni artikli. Ako ih pronađe, prikazuje se poruka koja korisniku omogućuje odabir želi li nastaviti postupak. Ako korisnik potvrdi nastavak, cijela će se otpremnica razdužiti iz skladišta, osim fiktivnih artikala. Ako korisnik odbije, skladišni izlaz otpremnice neće se izvršiti.

:::tip Zapamtite
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir *vrstu nabave* definiranu u MRP parametrima artikla:

- Artikli vrste *Nabava* neće se uključiti u skladišno knjiženje.
- Artikli vrste *Proizvodnja* ili *Podizvođač* evidentirat će se u skladištu na temelju prve razine sastavnice.
:::

### Analitika

Na ovoj se kartici određuje redoslijed prioriteta za dohvat mjesta troška (CDC) ili mjesta dobiti (CDP) u retku otpremnice.

Prioriteti se mogu mijenjati pomoću gumba **Pomakni gore** ![](/img/neutral/common/move-up.png) i **Pomakni dolje** ![](/img/neutral/common/delete-cc.png).

*Zadane vrijednosti*: mjesto troška ili mjesto dobiti preuzima se iz vrste fakturiranja, ako je ondje definirano.

Za više informacija pogledajte tablicu [Vrste fakturiranja](/docs/configurations/tables/sales/sales-turnover).

Ako vrijednost nije definirana u *vrsti fakturiranja*, sustav je traži u *šifarniku kupca*. Ako nije definirana ni ondje, traži je u šifarniku artikala, a zatim na razini skladišta.

Opcija **Procijeni prioritet svake dimenzije** omogućuje grupiranje mjesta troška i mjesta dobiti prema dimenzijama u dokumentima na kartici *Analitika*.