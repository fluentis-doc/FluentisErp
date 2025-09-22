---
title: Kategorija osnovnog sredstva
sidebar_position: 5
---

:::tip[FAst Start]
Tablica je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

NU slučaju da se želi konfigurirati ručno, potrebno je pratiti kontrolni popis na poveznici.
:::

Unutar ove tablice kodificiraju se kategorije dugotrajne imovine kojima upravlja poduzeće. 

### Gornja tablica 

**Kategorija**: alfanumerička šifra.

**Opis kategorije**: opis kategorije.

**Konto**: bilancni konto dugotrajne imovine.

**Podkonto**: bilancni podkonto dugotrajne imovine.

**Opis**: opis bilancnog podkonta dugotrajne imovine.

**Mat/Nem.**: oznaka tipologije – materijalna ili nematerijalna imovina.

**Maksimalna amortizacija**: maksimalni iznos amortizacije koji se može ostvariti za svaku imovinu u kategoriji.

**Post. amort.**: maksimalni postotak vrijednosti imovine koji se može amortizirati.

**Inkrementalne operacije**: ako zastavica nije postavljena (zadano stanje), svaka stavka povećanja vrijednosti imovine vodit će se kao zaseban i autonoman detalj amortizacije. Ako je zastavica postavljena, svako povećanje će se pridružiti početnoj stavci kupnje, povećavajući uvijek početnu vrijednost na njezin datum nastanka.

**Ukupni limit amortizacije**: granica za primjenu ukupne amortizacije od 100% u godini kupnje.

**Revalorizacije**: oznaka za upravljanje detaljima revalorizacija.

**Šifra bilance**: šifra bilance za ispis pregleda revalorizacija.

**Upravljanje izvan knjigovodstva**: aktivira upravljanje izvanknjigovodstvenim podacima imovine; to podrazumijeva dupliciranje bilancnih vrijednosti radi primjene posebne logike izvanknjigovodstvene amortizacije.

**Dani**: aktiviranjem ove oznake izračun amortizacijskog dijela uzima u obzir točan broj dana posjedovanja imovine u tekućoj godini, umjesto standardne logike koja izračunava cjelokupni dio neovisno o datumu kupnje, eventualno ga prepolovljujući u prvoj godini ako je zastavica *Prva godina amortizacije* aktivirana (vidi dolje).

**Numeracija**: (Opcionalno) Omogućuje definiranje numeracije kartica imovine specifične za svaku kategoriju. Polje se povezuje s [**odgovarajućom tablicom**](/docs/configurations/tables/fluentis-numerations) za definiranje numeratora. Ako nije definirano, zadano se koristi opća numeracija imovine povezana s predšifrom (ili jedinstvena).

### Druga tablica

Druga sekcija posvećena je postavljanju detalja amortizacije primjenjivih na odabranu nadređenu kategoriju.

**Tip amortizacije**: odabrati tip amortizacije između redovne amortizacije, ubrzane amortizacije i usporene amortizacije (posljednja se obično ne koristi).

**Konto**: troškovni konto na kojem se evidentira periodična amortizacija.

**Podkonto**: troškovni podkonto na kojem se evidentira periodična amortizacija.

**Opis konta**: opis troškovnog podkonta.

**Konto rezerve**: rezerni konto na kojem se knjiži periodična amortizacija.

**Podkonto rezerve**: rezerni podkonto na kojem se knjiži periodična amortizacija, koji može biti i ista aktivna bilancna vrijednost za izravno smanjenje te vrijednosti.

**Opis konta**: opis rezernog podkonta.

**Isključi**: oznaka koja omogućuje isključenje odabranog tipa amortizacije iz automatskog izračuna amortizacije.

**Postotak**: postotak amortizacije koji se primjenjuje za odabrani tip amortizacije.

**Broj godina**: aktivira se samo za ubrzanu amortizaciju, gdje se unose 3 godine primjene. Za rabljenu imovinu broj godina primjene automatski se postavlja samo na godinu kupnje.

**Amortizacija prve godine**: automatski se predlaže za sve materijalne kategorije; prepolovljuje postotak amortizacije u godini početka korištenja imovine.

**Porezna**: može se postaviti za stavke ubrzane amortizacije kako bi se tretirala kao porezna amortizacija koja se ne knjiži.

**Tip odbitnosti**: omogućuje dodjelu šifre odbitnosti za porezne svrhe određenom tipu amortizacije.

**Opis odbitnosti**: opis tipa odbitnosti.

**Konto / podkonto / opis Neodbitno**: u ovom polju moguće je unijeti računovodstveni podkonto na kojem se automatski knjiži fiskalno neodbitni dio amortizacijskog dijela. Konto se prikazuje u kartici imovine uz redak koji se odnosi na amortizacijski dio. Da bi se knjižio, i prilikom godišnje amortizacije i prilikom ponovnog obračuna amortizacije u zatvaranju polugodišnjih konta, potrebno je aktivirati odgovarajuću oznaku (flag). Zastavica se može unaprijed definirati unutar [**parametara imovine**](/docs/configurations/parameters/finance/fixed-assets-parameters).

#### Specifični gumbi

**Pretraži u gornjoj tablici**: omogućuje pretraživanje u gornjoj tablici putem polja za filtriranje kategorije i opisa.  
**Unesi u gornju tablicu**: omogućuje unos nove kategorije imovine.  
**Unesi u tablicu detalja**: omogućuje unos detalja za odabranu gornju tablicu.  
**Unesi u tablicu Cdc**: omogućuje unos centara troškova za odabranu gornju tablicu. ZASTARJELO  
**Izbriši odabrane retke**: omogućuje brisanje odabranih redaka (kategorija imovine).  
**Izbriši odabrane retke iz donje tablice**: omogućuje brisanje odabranih redaka donje tablice (detalj vrste amortizacije).  
**Izbriši odabrane retke iz tablice Cdc**: omogućuje brisanje odabranih redaka tablice centara troškova. ZASTARJELO  
**Spremi**: omogućuje spremanje izmjena.  

### MREŽA CENTARA TROŠKOVA (UKLONJENA AKO JE AKTIVAN MODUL PUNOG KONTROLINGA U TABLICI TVRTKE, BEZ PARAMETRA ZA UPORABU KNJIGOVODSTVENIH CENTARA)

:::note NAPOMENA
Iako se upravljanje centrima troškova za imovinu može obrađivati složenijim logikama upravljanja objektivnom amortizacijom, korisnim za potrebe detaljne kontrole upravljanja, ipak je moguće povezati specifični centar troškova za pojedinu imovinu, **u kartici Detalji**, (ili izravno na kategoriji imovine, no u tom slučaju potrebno je deaktivirati zastavicu Upravljanje controllingom u kartici tvrtke u upotrebi) kako bi se valorizirala godišnja amortizacija za porezne i računovodstvene svrhe.
:::

U kartici imovine, u mreži centara troškova unutar taba **Operacije imovine** moguće je dodijeliti, u odnosu na **pojedini redak amortizacije**, zadanu postotnu valorizaciju po centru troškova za imovinu povezanu s kategorijom. Ova postavka ima sekundarnu važnost u odnosu na dodjelu centara troškova unutar pojedinačne kartice imovine (u tabu Detalji).

**CDC**: centar troškova kojem se dodjeljuje valorizacija imovine pripadajuće kategoriji.

**Opis**: opis centra troškova.

**Postotak**: postavka postotka valorizacije centra troškova.

### **VIDEO TUTORIALI**
:::important Pogledajte također
[**VIDEO TUTORIALI O TABLICAMA IMOVINE**](/docs/video/finance/intro)
:::
