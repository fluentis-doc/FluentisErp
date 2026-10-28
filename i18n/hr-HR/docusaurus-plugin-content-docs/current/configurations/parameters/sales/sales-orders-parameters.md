---
title: Parametri narudžbi kupaca
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri narudžbi kupaca omogućuju definiranje osnovnih postavki za njihovo pravilno upravljanje u skladu sa zahtjevima pojedine tvrtke. Prozor s ovim parametrima sastoji se od četiri kartice: Općenito, Razduživanje, Izlaz i Analitika.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: ako je opcija aktivirana, u redcima narudžbe prikazuju se dva stupca, Alternativna mjerna jedinica i Alternativna količina. Na taj je način moguće upravljati dvjema mjernim jedinicama, pri čemu se provjere razduživanja uvijek provode prema osnovnoj mjernoj jedinici.

**Automatski prijedlog alternativne mjerne jedinice**: ovo se polje može uređivati samo ako je aktivirana opcija za upravljanje dvjema mjernim jedinicama. Omogućuje prikaz alternativne mjerne jedinice definirane u šifarniku artikala, u odgovarajućem stupcu *Alternativna mjerna jedinica* na kartici artikala narudžbe. Ako opcija nije aktivirana, mjerna jedinica neće se predlagati.

**Provjera raspoloživosti**: ova opcija i ostale povezane opcije za provjeru, prikaz i obveznost unosa, uključujući razmatranje prema području, trenutačno nisu podržane.

**Referenca narudžbe**: ako je ova opcija aktivirana, u naslov projekta kreiranog iz narudžbe unosi se referenca narudžbe. Sadržaj napomene potrebno je definirati u polju *Opis*, u skladu s parametrima navedenima u oznaci polja.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: prilikom pretraživanja cijene i popusta za artikl u narudžbi sustav primjenjuje pravila na temelju postavki u šifarniku kupca, u odjeljku *Cjenici*. Ako je opcija *Zadano* aktivirana za određenu vrstu cjenika, cijene i popusti traže se prvenstveno u toj vrsti cjenika. Ako opcija *Zadano* nije aktivirana, sustav proširuje pretraživanje na sve dostupne vrste cjenika prema zadanom redoslijedu prioriteta.

Kada je opcija *Zadano* aktivirana, sustav najprije traži važeći cjenik zadane vrste. Ako ne pronađe odgovarajuću cijenu, provjerava ostale vrste cjenika prema postavljenom redoslijedu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cjenika nije označena kao *Zadano* i definirani su samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagat će se i za retke s besplatnim artiklima, jednako kao i za retke s artiklima sa šifrom.

**Dopusti popuste za besplatne artikle**: ako je opcija aktivirana, popusti na iznos retka primjenjivat će se i na retke s besplatnim artiklima.

**Obvezan omjer količine artikla i broja paketa**: ako je opcija aktivirana, korisnik mora unijeti količinu koja odgovara broju paketa definiranom na kartici *Težine/Dimenzije* u šifarniku artikala ili njegovu višekratniku. Ako količina nije jednaka broju paketa niti njegov višekratnik, prikazat će se poruka: „Artikl se ne može prodavati u količini manjoj od ili koja nije višekratnik broja paketa.”

**Predlaganje ekonomične količine**: ako je opcija aktivirana i u šifarniku artikala definirana je ekonomična količina za kupca iz dokumenta, prilikom unosa retka narudžbe automatski će se predložiti količina jednaka ekonomičnoj količini.

Ako opcija nije aktivirana, provjera se provodi prilikom potvrde retka. Ako je unesena količina manja od ekonomične količine, prikazat će se poruka: „Količina ne može biti manja od …”.

**Provjera artikala na izmaku zaliha**: ako je opcija aktivirana, prikazat će se skočno upozorenje kada se u narudžbu unese artikl koji je u šifarniku označen kao artikl na izmaku zaliha i za koji je definiran datum od kojeg je na izmaku zaliha. Ovom se provjerom sprječava prodaja artikala koji se više neće proizvoditi ili nadopunjavati na zalihi.

**[Omogući pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku *Artikli* prikazuju se dva nova stupca: *Popusti artikla* i *Konačni popusti artikla*. Stupac *Popusti artikla* može se uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može izravno u tom stupcu unositi, mijenjati ili brisati popuste. Za korištenje ovog widgeta, osim aktiviranja ove opcije, potrebno je u vrsti narudžbe odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tablicu artikala narudžbe dodaju se stupci za šifru i opis artikla kod kupca, definirani u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tablicu artikala narudžbe dodaje se stupac za prikaz barkoda artikla.

**Dopusti izmjenu proizvodnog naloga iz povezane narudžbe**: ako je opcija aktivirana, omogućuje izmjenu proizvodnog naloga povezanog s narudžbom.

**Obvezna šifra operatera**: ovom se opcijom određuje je li obvezno popuniti polje *Operater* u zaglavlju narudžbe.

**Blokiraj unos dokumenta na neradne dane prema tvorničkom kalendaru**: ako je opcija aktivirana, sustav ne dopušta unos narudžbe na neradne dane. Najprije se provjerava tvornički kalendar tvrtke, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sustav ne provodi provjeru i dopušta unos dokumenta.

**Upotreba konfiguratora matrica**: ovim se parametrom aktivira upravljanje matricama.

**Rastavljanje sastavnice**: ako je opcija aktivirana, prilikom unosa artikla on će biti zamijenjen komponentama prve razine njegove sastavnice, ako ona postoji. Umjesto artikla „Gotov proizvod”, narudžba će sadržavati komponente njegove sastavnice.

**Predlaganje komercijalnih podataka za ručno rastavljenu sastavnicu**: ako je opcija aktivirana, za komponente prve razine unesene pomoću opcije „Rastavljanje sastavnice” predlagat će se cijene iz cjenika, popusti i provizije, kao i za artikle sa šifrom.

**Upravljanje verzijama sastavnice**: ako je opcija aktivirana, na kartici *Artikli* omogućuje se prikaz stupca *Verzija sastavnice*, u kojem je moguće odabrati verziju različitu od automatski odabrane zadane verzije.

**Ne grupiraj retke prilikom unosa iz sastavnice**: ako je opcija aktivirana, komponente prve razine sastavnice unose se u zasebne retke čak i ako imaju istu šifru materijala.

### Razduživanje

Na ovoj kartici dostupna su sljedeća polja:

**Plaćanje**: određuje vrijednost koja se koristi za plaćanje narudžbe kupaca prilikom višestrukog razduživanja projekata u narudžbe. Dostupne su opcije: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Primatelj**: određuje vrijednost koja se koristi za primatelja narudžbe prilikom višestrukog razduživanja projekata u narudžbe. Dostupne su opcije: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Grupiranje prema vrsti i načinu plaćanja**: određuje hoće li se narudžbe grupirati prema vrsti i načinu plaćanja prilikom razduživanja putem obrasca za pretraživanje narudžbi, pomoću tipki na alatnoj traci *Razduživanje otpremnicama* ili *Razduživanje računima*.

**Grupiranje prema odredištu**: određuje hoće li se narudžbe grupirati prema primatelju i odredištu prilikom razduživanja putem obrasca za pretraživanje narudžbi, pomoću tipki na alatnoj traci *Razduživanje otpremnicama* ili *Razduživanje računima*.

**Prikaz rešetke za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje narudžbi kupaca omogućuje se prikaz u obliku rešetke.

**Prikaz stabla za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje narudžbi kupaca omogućuje se prikaz u obliku stabla.

### Izlaz

**Prioritet parametara definiranih za svaki redak narudžbe**: ako je opcija aktivirana, skladište i predložak izlaza preuzimaju se iz redaka narudžbe. Ako opcija nije aktivirana, koriste se skladište i predložak navedeni u sljedećim poljima (*Skladište* i *Skladišni predložak*).

### Analitika

Ova kartica određuje prioritet prema kojem se preuzima centar troška (CDC) ili centar prihoda (CDP) u retku narudžbe.

Prioritete je moguće mijenjati pomoću tipki **Pomakni gore** ![](/img/neutral/common/move-up.png) i **Pomakni dolje** ![](/img/neutral/common/delete-cc.png).

*Zadane vrijednosti*: centar troška (CDC) ili centar prihoda (CDP) preuzima se iz vrste fakturiranja, ako je ondje definiran.

Više informacija potražite u tablici [Vrsta fakturiranja](/docs/configurations/tables/sales/sales-turnover).

Ako centar troška (CDC) ili centar prihoda (CDP) nije definiran u *vrsti fakturiranja*, sustav ga traži u *šifarniku kupca*. Ako ondje nije definiran, traži ga u šifarniku artikala, a zatim na razini skladišta.

Opcija **Uvažavanje prioriteta svake dimenzije** omogućuje grupiranje centara troška (CDC) i centara prihoda (CDP) prema dimenziji na kartici *Analitika* u dokumentima.