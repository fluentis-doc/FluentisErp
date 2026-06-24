---
title: Analiza raspoloživosti
sidebar_position: 6
---

:::important Čemu služi
Fluentis analiza raspoloživosti moćan je i fleksibilan alat koji korisnicima omogućuje praćenje i upravljanje raspoloživim količinama artikala u skladištu u stvarnom vremenu. Putem intuitivnog sučelja analiza brzo obrađuje podatke za određeni artikl jednostavnim unosom šifre artikla. Analiza se može proširiti i na komponente sastavnice (BOM-a), pružajući potpun pregled raspoloživosti.

U glavnom dijelu analize prikazuju se detaljne informacije o raspoloživosti matičnog artikla i njegovih komponenti, uključujući podatke o zalihama, nedostupnim zalihama te količinama u kašnjenju. Također je moguće pregledati dokumente koji rezerviraju ili oslobađaju količine unutar sustava, što omogućuje detaljnu analizu svih aktivnih procesa.

Zahvaljujući ovoj funkcionalnosti korisnici mogu donositi informirane odluke o nabavi i upravljanju zalihama, smanjiti rizik od nestašica te optimizirati operativnu učinkovitost. Analiza raspoloživosti ima ključnu ulogu u osiguravanju pravovremenog odgovora na zahtjeve tržišta i održavanju optimalne razine usluge.
:::

Prozor za pregled analize raspoloživosti otvara se putem izbornika **Početna > Artikli > Analiza raspoloživosti** i sastoji se od tri cjeline: područja filtara, mreže rezultata po skladištu i mreže detalja.

### Područje filtara

Putem filtara za **Artikl** moguće je odrediti za koji artikl ili skupinu artikala želite provjeriti raspoloživost zaliha.

**Kumulativna količina**

Ova opcija određuje želite li prikazati ukupnu raspoloživu količinu artikla ili raspoloživost po pojedinom dokumentu. U istom dijelu moguće je definirati treba li uzeti u obzir zalihe koje još nisu raspoložive u promatranom razdoblju ili prikazati količine koje će postati raspoložive od datuma pretrage, pod uvjetom da nisu u kašnjenju.

**Razmotrite raspoloživosti iz**

U ovoj sekciji moguće je odabrati hoće li se pri izračunu raspoloživosti uzimati u obzir svi ili samo određeni izvori raspoloživosti, kao što su kooperacija, planirana proizvodnja, nabava, oslobođena proizvodnja, prodaja i skladište.

**Provjeravanje perioda**

U ovoj sekciji određuje se razdoblje za koje se provjerava raspoloživost. Analiza se može izvršiti na mjesečnoj razini (uz unos broja mjeseci), tjednoj razini, dnevnoj razini ili za točno određeni datum.

**Prikaži linije bez raspoloživosti**

- *Prikaži linije bez raspoloživosti*: ako je uključeno, prikazuju se i retci bez vrijednosti u svim poljima raspoloživosti. Ako artikl ima ulaze i izlaze čiji je ukupni zbroj jednak nuli, prikazat će se i bez aktiviranja ove opcije.

- *Samo u zakašnjenju*: prikazuju se retci čije su količine prema planu već trebale biti proizvedene, ali zbog kašnjenja još nisu dostupne.

- *Samo s negativne*: prikazuju se količine koje treba proizvesti i koje su već planirane, ali postojeće zalihe nisu dovoljne za pokrivanje potreba. U pravilu u sustavu postoji narudžba dobavljaču za pokrivanje nedostajuće količine.

- *Sažeti prikaz*: objedinjeni prikaz prethodne dvije opcije.

- *Detalj sastavnice*: odabirom ove opcije prikazuje se raspoloživost svih komponenti sastavnice analiziranog artikla, uključujući i komponente čija je raspoloživost jednaka nuli. U prikazu se dodaju stupci *Razina*, *Prioritet* (prioritet definiran u sastavnici za pojedinu komponentu), *Šifra matičnog artikla* i *Varijanta matičnog artikla*. Popis artikala sortira se prema redoslijedu: *Razina + Šifra matičnog artikla + Varijanta matičnog artikla + Prioritet + Šifra artikla + Varijanta artikla*.

**Prodajna mjesta**

U maloprodajnom okruženju moguće je filtrirati raspoloživost prema pojedinom prodajnom mjestu.

**Za dokumente bez potrebnog datuma**

Moguće je odabrati način obrade artikala koji nemaju definiran datum zaprimanja robe ili datum spremnosti robe. Takve artikle moguće je isključiti iz analize ili ih uključiti dodjeljivanjem datuma koji se definira prilikom pokretanja pretrage.

**Dostupnost skladišta**

U ovoj sekciji moguće je odabrati koja će se skladišta uzeti u obzir prilikom provjere stanja zaliha.
Nakon postavljanja željenih filtara i opcija potrebno je kliknuti gumb **Pretraži** koji se nalazi na ribbon traci.

### Raspoloživost proizvoda

U tablicama rezultata po skladištu prikazuju se pojedinačni redci raspoloživosti prema dokumentima ili kumulativni redak prema skladištima. Tako je moguće pregledati ukupnu raspoloživost na temelju rezervacija i raspoloživih količina svih skladišta (**Ukupno**) ili raspoloživost za svako pojedino skladište (posebna kartica za svako skladište uključeno u analizu).

Prikazani stupci u ovoj mreži su:

- *Klasa*, *Šifra artikla*, *Opis artikla*, *Šifra varijante* i *JM*: matični podaci artikla;

- *Datum*: datum na koji se odnose podaci prikazani u retku;

- *Raspoloživost*: izračunata raspoloživost na odabrani datum;

- *Operativna zaliha*: ukupna količina artikla u odabranim skladištima, isključujući zatvorene i/ili nedostupne lotove;

- *Dostupna operativna zaliha*: vrijednost *Operativne zalihe* umanjena za *Nedostupnu operativnu zalihu* (sljedeći stupac);

- *Nedostupna operativna zaliha*: operativna zaliha smatra se nedostupnom u sljedećim slučajevima:
  - nalazi se na blokiranoj lokaciji,
  - evidentirana je prometom kod kojeg je isključena opcija „available stock” (rezervacijski UDC ulaz),
  - odnosi se na lot čiji je status označen kao nedostupan,
  - odnosi se na standardni fazni promet (međufaza proizvodnje);

- *U odgodi*: predstavlja algebarski zbroj svih dokumenata u kašnjenju (s datumom isporuke prije današnjeg datuma) prisutnih u raspoloživosti. Izračunava se kao zbroj vrijednosti u stupcu potražnje umanjen za zbroj vrijednosti u stupcu ponude, ali samo za dokumente u kašnjenju;

- *Narudžba dobavljači*: raspoloživost iz narudžbi dobavljačima koje nisu prisilno zatvorene i imaju preostalu količinu za isporuku;

- *Primka*: raspoloživost iz primki nabave koje još nisu skladišno knjižene;

- *Ulazni računi*: raspoloživost iz neposrednih ulaznih računa koji još nisu skladišno knjiženi;

- *Zaprimanje robe*: raspoloživost iz dokumenata zaprimanja robe;

- *Zahtjevi za nabavu*: raspoloživost iz zahtjeva za nabavu (RDA) u skladištu definiranom u parametrima proizvodnje materijala;

- *Utovar iz podugovorenog*: raspoloživost iz naloga kooperacije koji nisu prisilno zatvoreni i imaju preostalu količinu za isporuku;

- *UlUtovaraz iz planiranih naloga*: raspoloživost iz planiranih proizvodnih naloga;

- *Utovar iz proizvodnih naloga*: raspoloživost iz proizvodnih naloga koji nisu prisilno zatvoreni i imaju preostalu količinu za proizvodnju;

- *Narudžba kupaca*: raspoloživost iz narudžbi kupaca koje nisu prisilno zatvorene i imaju preostalu količinu za otpremu;


- *Otpremnice (DDT)*: raspoloživost iz izlaznih otpremnica koje još nisu skladišno razdužene;

- *Izlazni računi*: raspoloživost iz neposrednih izlaznih računa koji još nisu skladišno razduženi;

- *Picking (slaganje robe)*: raspoloživost iz *picking* dokumenata koji nisu prisilno zatvoreni i imaju preostalu količinu za preuzimanje;

- *Istovari u podugovorenog*: raspoloživost iz dokumenata kooperacije koji nisu prisilno zatvoreni i imaju preostalu količinu za otpremu;

- *Istovari iz planiranih naloga*: raspoloživost koja proizlazi iz potreba planiranih proizvodnih naloga koji još nisu izvršeni;

- *Istovari iz proizvodnih naloga*: raspoloživost koja proizlazi iz potreba proizvodnih naloga koji još nisu izvršeni;

- *Nalog proizvodnje*: raspoloživost iz proizvodnih projekata koji još nisu raspoređeni;

- *Ulaz iz DDMRP narudžbe*: raspoloživost iz DDMRP naloga;

- *Potrošnja iz narudžbe DDMRP*: raspoloživost koja proizlazi iz potreba DDMRP naloga;

### Detalji

U tablici detalja, odabirom retka u mreži skladišta, prikazuju se svi dokumenti povezani s odabranim retkom. Tako je moguće pregledati povezanu narudžbu kupca, proizvodni nalog, pripadajući projekt te eventualne prodajne dokumente, poput otpremnica i računa.

Dvostrukim klikom lijeve tipke miša na odabrani redak moguće je otvoriti pripadajući dokument.

:::note Napomena
Raspoloživost artikla koji se proizvodi određena je fazama kod kojih su u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) aktivirane oznake **proizvodna** i **skladišno pokretna**.

Osim posljednje takve faze, koja evidentira završeni proizvod, sve ostale faze evidentiraju *međuproizvode*, odnosno standardnu zalihu po fazama proizvodnje.
:::

:::important Dokumenti uključeni u analizu raspoloživosti
Kako bi dokument bio uključen u analizu raspoloživosti, mora:

- imati datum raspoloživosti unutar analiziranog razdoblja,
- koristiti vrstu dokumenta s aktiviranom oznakom **Provjera raspoloživosti**,
- biti ispisan, odobren ili potvrđen, ovisno o vrsti dokumenta,
- odnositi se na skladište uključeno u analizu.

Kod zavisne potražnje i zahtjeva za nabavu (RDA), koji nemaju vlastito skladište, koristi se skladište sirovina definirano u MRP parametrima artikla ili, ako nije definirano, odgovarajuće skladište iz općih parametara proizvodnje.
:::

Za opis zajedničkih funkcionalnosti obrazaca dostupnih na ribbon traci pogledajte dokument [Zajednički gumbi](/docs/guide/common/common-buttons), a za funkcionalnosti ispisa i pregleda ispisa dokument [Pregled i ispis](/docs/guide/common/operations-with-data/reports).

*Specifični gumb*:

> **Proširi/smanji ekransku tablicu artikala**: omogućuje proširivanje ili sažimanje mreža rezultata.

:::note Izrada profila
U ovoj formi profile je moguće definirati samo za područje filtara i karticu **Ukupno**.

Na karticama pojedinih skladišta nije moguće izrađivati profile jer se one generiraju i uklanjaju dinamički tijekom rada.
:::

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).