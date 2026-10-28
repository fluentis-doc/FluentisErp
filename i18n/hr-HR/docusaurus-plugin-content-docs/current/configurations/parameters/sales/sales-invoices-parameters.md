---
title: Parametri izlaznih računa
sidebar_position: 5
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri izlaznih računa omogućuju definiranje osnovnih postavki za njihovo pravilno upravljanje u skladu sa zahtjevima pojedine tvrtke. Prozor s ovim parametrima sastoji se od četiri kartice: Općenito, Razduživanje, Izlaz i Analitika.

### Općenito

**Upravljanje dvjema mjernim jedinicama**: ako je opcija aktivirana, u redcima računa prikazuju se dva stupca, Alternativna mjerna jedinica i Alternativna količina. Na taj je način moguće upravljati dvjema mjernim jedinicama, pri čemu se provjere razduživanja uvijek provode prema osnovnoj mjernoj jedinici.

**Automatski prijedlog alternativne mjerne jedinice**: ovo se polje može uređivati samo ako je aktivirana opcija za upravljanje dvjema mjernim jedinicama. Omogućuje prikaz alternativne mjerne jedinice definirane u šifarniku artikala, u odgovarajućem stupcu *Alternativna mjerna jedinica* na kartici artikala računa. Ako opcija nije aktivirana, mjerna jedinica neće se predlagati.

**Provjera raspoloživosti**: ova opcija i ostale povezane opcije za provjeru, prikaz i obveznost unosa, uključujući razmatranje prema području, trenutačno nisu podržane.

**Zadana mjerna jedinica za volumen/težinu**: ove se mjerne jedinice koriste kao zadane vrijednosti koje se predlažu na kartici [Prijevoz](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) otpremnice, kao mjerne jedinice za volumen i težinu. Podatke je moguće mijenjati u dokumentima.

**Pretraživanje cijena artikala u svim zadanim cjenicima**: prilikom pretraživanja cijene i popusta za artikl na računu sustav primjenjuje pravila na temelju postavki u šifarniku kupca, u odjeljku *Cjenici*. Ako je opcija *Zadano* aktivirana za određenu vrstu cjenika, cijene i popusti traže se prvenstveno u toj vrsti cjenika. Ako opcija *Zadano* nije aktivirana, sustav proširuje pretraživanje na sve dostupne vrste cjenika prema zadanom redoslijedu prioriteta.

Kada je opcija *Zadano* aktivirana, sustav najprije traži važeći cjenik zadane vrste. Ako ne pronađe odgovarajuću cijenu, provjerava ostale vrste cjenika prema postavljenom redoslijedu prioriteta. Međutim, ako u šifarniku kupca nijedna vrsta cjenika nije označena kao *Zadano* i definirani su samo prioriteti, ovaj parametar neće utjecati na pretraživanje, čak ni kada je aktiviran.

**Predlaganje provizije za besplatne artikle**: ako je opcija aktivirana, provizije agenta predlagat će se i za retke s besplatnim artiklima, jednako kao i za retke s artiklima sa šifrom.

**Unos provizija za vrste redaka 6 i 7 (predujam/storno)**: ako je opcija aktivirana, omogućuje unos i upravljanje provizijama i za vrste redaka 6 i 7 na računima. Više informacija potražite u članku o [unosu računa](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Dopusti popuste za besplatne artikle**: ako je opcija aktivirana, popusti će se obračunavati i za besplatne artikle te će utjecati na ukupne iznose.

**Negativne cijene na odobrenjima**: ako je opcija aktivirana, sustav će prikazati upozorenje ako se na odobrenju pojave pozitivne cijene. Ako opcija nije aktivirana, sustav neće provoditi provjeru niti prikazivati upozorenje.

**Bez troškova naplate na odobrenjima**: ako je opcija aktivirana, troškovi naplate neće se obračunavati na odobrenjima.

**Provjera prodajnih cijena lotova**: zastarjelo polje koje se više ne koristi.

**Maksimalan broj redaka**: maksimalan broj artikala na računu. Ova je opcija aktivna samo u rumunjskoj verziji.

**Provjera artikala na izmaku zaliha**: ovom se opcijom aktivira upravljanje artiklima na izmaku zaliha. Ako je u šifarniku artikala definiran datum isteka raspoloživosti i aktivirana odgovarajuća oznaka, Fluentis će prikazati skočno upozorenje kada se takav artikl unese u dokument.

**[Omogući pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)**: aktiviranjem ove opcije u odjeljku *Artikli* prikazuju se dva nova stupca: *Popusti artikla* i *Konačni popusti artikla*. Stupac *Popusti artikla* može se uređivati i prikazuje popuste koji se automatski primjenjuju na temelju postavki za kupca, artikl, cjenik ili kategoriju popusta. Korisnik može izravno u tom stupcu unositi, mijenjati ili brisati popuste. Za korištenje ovog widgeta, osim aktiviranja ove opcije, potrebno je u vrsti računa odrediti vrstu popusta koja će se koristiti.

**Upotreba artikla kupca**: ako je opcija aktivirana, u tablicu artikala računa dodaju se stupci za šifru i opis artikla kod kupca, definirani u šifarniku artikala na kartici *Kupac*.

**Upotreba barkoda**: ako je opcija aktivirana, u tablicu artikala računa dodaje se stupac za prikaz barkoda artikla.

**Obvezna šifra operatera**: ovom se opcijom određuje je li obvezno popuniti polje *Operater* u zaglavlju računa.

**Blokiraj unos dokumenta na neradne dane prema tvorničkom kalendaru**: ako je opcija aktivirana, sustav ne dopušta unos ponude na neradne dane. Najprije se provjerava tvornički kalendar tvrtke, a zatim kalendar proizvodnih kapaciteta. Ako opcija nije aktivirana, sustav ne provodi provjeru i dopušta unos dokumenta.

**Provjera unutar EU-a**: ako je opcija aktivirana i država kupca pripada Europskoj uniji, sustav provjerava je li u [vrsti računa](/docs/configurations/tables/sales/invoices-type) aktivirana oznaka *Unutar Zajednice* te je li u šifarniku kupca aktivirana oznaka *Intrastat*. Ako ti uvjeti nisu ispunjeni, prikazat će se poruka o pogrešci: „Vrsta dokumenta je unutar Zajednice, ali kupac nije označen kao subjekt unutar Zajednice”.

**Ponovni izračun prijevoza**: ovom se opcijom omogućuje prijenos ukupnih vrijednosti težine, volumena i broja paketa iz redaka dokumenta na karticu [Prijevoz](/docs/sales/sales-invoices/invoicing/sales-invoice) računa. Ako opcija nije aktivirana, ta polja neće biti popunjena.

**Vanjske reference narudžbe**: ovom se opcijom omogućuje prijenos polja *Naša referenca* i *Vaša referenca* iz redaka narudžbe/otpremnice u retke računa.

**Zadrži cijene iz narudžbi za količinske razrede**: ova se opcija koristi prilikom razduživanja narudžbi u račune kada se razdužena količina razlikuje, najčešće je manja, od naručene količine za koju je definirana cijena ili popust prema količinskom razredu. Ako cijena ili popust ne ovise o isporučenoj količini, već samo o naručenoj količini, ovu opciju treba aktivirati. Ako se cijena ili popust prema količinskom razredu ne smiju prenijeti u dokument isporuke kada nije razdužena ukupna količina narudžbe, opciju ne treba aktivirati.

**Knjiženje ambalaže**: ako je opcija aktivirana, u knjiženje se uključuju i retci ambalaže.

### Razduživanje

**Plaćanje**: određuje vrijednost koja se koristi za plaćanje izlaznog računa prilikom višestrukog razduživanja prodajnih naloga. Dostupne su opcije: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Primatelj**: određuje vrijednost koja se koristi za primatelja prodajne narudžbe prilikom višestrukog razduživanja prodajnih naloga. Dostupne su opcije: *Prva narudžba*, *Šifarnik* ili *Ručni odabir*.

**Ponovni izračun mjesta troška/mjesta dobiti (CDC/CDP)**: ako je račun kreiran iz prodajne narudžbe pomoću odgovarajućeg postupka, aktiviranjem ove opcije sustav će ponovno izračunati mjesta troška i mjesta dobiti na računu, ne uzimajući u obzir vrijednosti definirane u prodajnoj narudžbi. Ako opcija nije aktivirana, sustav neće ponovno izračunavati te podatke, već će zadržati vrijednosti unesene u prodajnoj narudžbi.

**Prikaz rešetke za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje prodajnih otpremnica omogućuje se prikaz u obliku rešetke.

**Prikaz stabla za razduživanje**: ako je opcija aktivirana, u obrascu za razduživanje prodajnih otpremnica omogućuje se prikaz u obliku stabla.

**Predlaganje lotova**: ako u retku narudžbe nisu navedeni lotovi, prilikom razduživanja tražit će se raspoloživi lotovi na zalihi, pod uvjetom da vrsta preuzimanja nije postavljena na *Ručno*.

### Izlaz

**Kreiraj knjiženje s datumom dokumenta**: ako je opcija aktivirana, skladišno knjiženje izvršava se s istim datumom kao i račun, pa nije potrebno navoditi datum knjiženja u obrascu za izlaz. Ako opcija nije aktivirana, datum je potrebno navesti u obrascu za izlaz računa.

**Prioritet skladišta i predloška izlaza u redcima artikala otpremnica**: ako je opcija aktivirana, skladište i predložak izlaza preuzimaju se iz redaka računa. Ako opcija nije aktivirana, koriste se skladište i predložak navedeni u sljedećim poljima (*Skladište* i *Skladišni predložak*).

**Automatski ulaz/izlaz**: ako je opcija aktivirana, izlazno skladišno knjiženje otpremnice izvršit će se automatski nakon aktiviranja oznake *Ispisano*. Ako opcija nije aktivirana, izlaz je potrebno izvršiti pomoću odgovarajuće tipke na alatnoj traci obrasca za unos računa (pogledajte [Unos izlaznih računa](/docs/sales/sales-invoices/invoicing/sales-invoice)) ili putem odgovarajućeg postupka.

**Upozorenje za fiktivne artikle**: ako je opcija aktivirana, prilikom izlaznog skladišnog knjiženja računa sustav provjerava postoje li fiktivni artikli. Ako ih pronađe, prikazat će se poruka koja korisniku omogućuje odabir želi li nastaviti postupak. Ako korisnik potvrdi nastavak, cijeli će račun biti razdužen, osim fiktivnih artikala. Ako korisnik odbije, račun se neće razdužiti.

### Analitika

Ova kartica određuje prioritet prema kojem se preuzima centar troška (CDC) ili centar prihoda (CDP) u retku dokumenta.

Prioritete je moguće mijenjati pomoću tipki **Pomakni gore** ![](/img/neutral/common/move-up.png) i **Pomakni dolje** ![](/img/neutral/common/delete-cc.png).

*Zadane vrijednosti*: CDC ili CDP preuzima se iz vrste fakturiranja, ako je ondje definiran. Više informacija potražite u tablici [Vrsta fakturiranja](/docs/configurations/tables/sales/sales-turnover).

Ako CDC ili CDP nije definiran u vrsti fakturiranja, sustav ga traži u šifarniku kupca. Ako ondje nije definiran, traži ga u šifarniku artikala, a zatim na razini skladišta.

Opcija **Uvažavanje prioriteta svake dimenzije** omogućuje grupiranje CDC-ova/CDP-ova prema dimenziji na kartici *Analitika* u dokumentima.