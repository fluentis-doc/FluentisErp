---
title: Analiza raspoloživosti
sidebar_position: 6
---

:::important Čemu služi
Fluentis analiza raspoloživosti predstavlja moćan i fleksibilan alat koji korisnicima omogućava praćenje i upravljanje raspoloživim količinama artikala na skladištu u realnom vremenu. Putem intuitivnog interfejsa analiza brzo obrađuje podatke za određeni artikal jednostavnim unosom šifre artikla. Analiza se može proširiti i na komponente sastavnice (BOM-a), pružajući potpun pregled raspoloživosti.

U glavnom delu analize prikazuju se detaljne informacije o raspoloživosti matičnog artikla i njegovih komponenti, uključujući podatke o zalihama, neraspoloživim zalihama i količinama u kašnjenju. Takođe je moguće pregledati dokumente koji rezervišu ili oslobađaju količine unutar sistema, što omogućava detaljnu analizu svih aktivnih procesa.

Zahvaljujući ovoj funkcionalnosti korisnici mogu donositi informisane odluke o nabavci i upravljanju zalihama, smanjiti rizik od nestašica i optimizovati operativnu efikasnost. Analiza raspoloživosti ima ključnu ulogu u obezbeđivanju pravovremenog odgovora na zahteve tržišta i održavanju optimalnog nivoa usluge.
:::

Prozor za pregled analize raspoloživosti otvara se putem menija **Početna > Artikli > Analiza raspoloživosti** i sastoji se od tri celine: područja filtera, mreže rezultata po skladištu i mreže detalja.

### Područje filtera

Putem filtera za **Artikal** moguće je odrediti za koji artikal ili grupu artikala želite proveriti raspoloživost zaliha.

**Kumulativna količina**

Ova opcija određuje da li želite prikazati ukupnu raspoloživu količinu artikla ili raspoloživost po pojedinačnom dokumentu. U istom delu moguće je definisati da li treba uzeti u obzir zalihe koje još nisu raspoložive u posmatranom periodu ili prikazati količine koje će postati raspoložive od datuma pretrage, pod uslovom da nisu u kašnjenju.

**Razmotrite raspoloživosti iz**

U ovoj sekciji moguće je odabrati da li će se pri izračunu raspoloživosti uzimati u obzir svi ili samo određeni izvori raspoloživosti, kao što su kooperacija, planirana proizvodnja, nabavka, oslobođena proizvodnja, prodaja i skladište.

**Provera perioda**

U ovoj sekciji određuje se period za koji se proverava raspoloživost. Analiza se može izvršiti na mesečnom nivou (uz unos broja meseci), nedeljnom nivou, dnevnom nivou ili za tačno određeni datum.

**Prikaži stavke bez raspoloživosti**

- *Prikaži stavke bez raspoloživosti*: ako je uključeno, prikazuju se i redovi bez vrednosti u svim poljima raspoloživosti. Ako artikal ima ulaze i izlaze čiji je ukupni zbir jednak nuli, prikazaće se i bez aktiviranja ove opcije.

- *Samo u kašnjenju*: prikazuju se redovi čije su količine prema planu već trebalo da budu proizvedene, ali zbog kašnjenja još nisu dostupne.

- *Samo sa negativnim stanjem*: prikazuju se količine koje treba proizvesti i koje su već planirane, ali postojeće zalihe nisu dovoljne za pokrivanje potreba. Po pravilu u sistemu postoji narudžbenica dobavljaču za pokrivanje nedostajuće količine.

- *Sažeti prikaz*: objedinjeni prikaz prethodne dve opcije.

- *Detalj sastavnice*: izborom ove opcije prikazuje se raspoloživost svih komponenti sastavnice analiziranog artikla, uključujući i komponente čija je raspoloživost jednaka nuli. U prikazu se dodaju kolone *Nivo*, *Prioritet* (prioritet definisan u sastavnici za pojedinu komponentu), *Šifra matičnog artikla* i *Varijanta matičnog artikla*. Lista artikala sortira se prema redosledu: *Nivo + Šifra matičnog artikla + Varijanta matičnog artikla + Prioritet + Šifra artikla + Varijanta artikla*.

**Prodajna mesta**

U maloprodajnom okruženju moguće je filtrirati raspoloživost prema pojedinačnom prodajnom mestu.

**Za dokumenta bez potrebnog datuma**

Moguće je odabrati način obrade artikala koji nemaju definisan datum prijema robe ili datum spremnosti robe. Takve artikle moguće je isključiti iz analize ili ih uključiti dodeljivanjem datuma koji se definiše prilikom pokretanja pretrage.

**Dostupnost skladišta**

U ovoj sekciji moguće je odabrati koja će se skladišta uzeti u obzir prilikom provere stanja zaliha.
Nakon postavljanja željenih filtera i opcija potrebno je kliknuti na dugme **Pretraži** koje se nalazi na ribbon traci.

### Raspoloživost proizvoda

U tabelama rezultata po skladištu prikazuju se pojedinačni redovi raspoloživosti prema dokumentima ili kumulativni red po skladištima. Na taj način moguće je pregledati ukupnu raspoloživost na osnovu rezervacija i raspoloživih količina svih skladišta (**Ukupno**) ili raspoloživost za svako pojedinačno skladište (posebna kartica za svako skladište uključeno u analizu).

Prikazane kolone u ovoj mreži su:

- *Klasa*, *Šifra artikla*, *Opis artikla*, *Šifra varijante* i *JM*: matični podaci artikla;

- *Datum*: datum na koji se odnose podaci prikazani u redu;

- *Raspoloživost*: izračunata raspoloživost na izabrani datum;

- *Operativna zaliha*: ukupna količina artikla u izabranim skladištima, isključujući zatvorene i/ili nedostupne lotove;

- *Dostupna operativna zaliha*: vrednost *Operativne zalihe* umanjena za *Nedostupnu operativnu zalihu* (sledeća kolona);

- *Nedostupna operativna zaliha*: operativna zaliha smatra se nedostupnom u sledećim slučajevima:
  - nalazi se na blokiranoj lokaciji,
  - evidentirana je prometom kod kojeg je isključena opcija „available stock” (rezervacioni UDC ulaz),
  - odnosi se na lot čiji je status označen kao nedostupan,
  - odnosi se na standardni fazni promet (međufaza proizvodnje);

- *U kašnjenju*: predstavlja algebarski zbir svih dokumenata u kašnjenju (sa datumom isporuke pre današnjeg datuma) prisutnih u raspoloživosti. Izračunava se kao zbir vrednosti u koloni potražnje umanjen za zbir vrednosti u koloni ponude, ali samo za dokumente u kašnjenju;

- *Narudžbina dobavljaču*: raspoloživost iz narudžbina dobavljačima koje nisu prinudno zatvorene i imaju preostalu količinu za isporuku;

- *Prijemnica*: raspoloživost iz prijemnica nabavke koje još nisu skladišno knjižene;

- *Ulazni računi*: raspoloživost iz direktnih ulaznih računa koji još nisu skladišno knjiženi;

- *Prijem robe*: raspoloživost iz dokumenata prijema robe;

- *Zahtevi za nabavku*: raspoloživost iz zahteva za nabavku (RDA) u skladištu definisanom u parametrima proizvodnje materijala;

- *Utovar kod kooperanta*: raspoloživost iz naloga kooperacije koji nisu prinudno zatvoreni i imaju preostalu količinu za isporuku;

- *Ulazi iz planiranih naloga*: raspoloživost iz planiranih proizvodnih naloga;

- *Utovar iz proizvodnih naloga*: raspoloživost iz proizvodnih naloga koji nisu prinudno zatvoreni i imaju preostalu količinu za proizvodnju;

- *Narudžbine kupaca*: raspoloživost iz narudžbina kupaca koje nisu prinudno zatvorene i imaju preostalu količinu za otpremu;

- *Otpremnice (DDT)*: raspoloživost iz izlaznih otpremnica koje još nisu skladišno razdužene;

- *Izlazni računi*: raspoloživost iz direktnih izlaznih računa koji još nisu skladišno razduženi;

- *Picking (komisioniranje robe)*: raspoloživost iz *picking* dokumenata koji nisu prinudno zatvoreni i imaju preostalu količinu za preuzimanje;

- *Istovari kod kooperanta*: raspoloživost iz dokumenata kooperacije koji nisu prinudno zatvoreni i imaju preostalu količinu za otpremu;

- *Istovari iz planiranih naloga*: raspoloživost koja proizlazi iz potreba planiranih proizvodnih naloga koji još nisu izvršeni;

- *Istovari iz proizvodnih naloga*: raspoloživost koja proizlazi iz potreba proizvodnih naloga koji još nisu izvršeni;

- *Proizvodni nalog*: raspoloživost iz proizvodnih projekata koji još nisu raspoređeni;

- *Ulaz iz DDMRP naloga*: raspoloživost iz DDMRP naloga;

- *Potrošnja iz DDMRP naloga*: raspoloživost koja proizlazi iz potreba DDMRP naloga;

### Detalji

U tabeli detalja, izborom reda u mreži skladišta, prikazuju se svi dokumenti povezani sa izabranim redom. Na taj način moguće je pregledati povezanu narudžbinu kupca, proizvodni nalog, pripadajući projekat, kao i eventualne prodajne dokumente, poput otpremnica i računa.

Dvostrukim klikom levog tastera miša na izabrani red moguće je otvoriti pripadajući dokument.

:::note Napomena
Raspoloživost artikla koji se proizvodi određena je fazama kod kojih su u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) aktivirane oznake **proizvodna** i **skladišno pokretna**.

Osim poslednje takve faze, koja evidentira završeni proizvod, sve ostale faze evidentiraju *međuproizvode*, odnosno standardnu zalihu po fazama proizvodnje.
:::

:::important Dokumenti uključeni u analizu raspoloživosti
Da bi dokument bio uključen u analizu raspoloživosti, mora:

- imati datum raspoloživosti unutar analiziranog perioda,
- koristiti vrstu dokumenta sa aktiviranom oznakom **Provera raspoloživosti**,
- biti odštampan, odobren ili potvrđen, u zavisnosti od vrste dokumenta,
- odnositi se na skladište uključeno u analizu.

Kod zavisne potražnje i zahteva za nabavku (RDA), koji nemaju sopstveno skladište, koristi se skladište sirovina definisano u MRP parametrima artikla ili, ako nije definisano, odgovarajuće skladište iz opštih parametara proizvodnje.
:::

Za opis zajedničkih funkcionalnosti obrazaca dostupnih na ribbon traci pogledajte dokument [Zajednička dugmad](/docs/guide/common/common-buttons), a za funkcionalnosti štampe i pregleda štampe dokument [Pregled i štampa](/docs/guide/common/operations-with-data/reports).

*Specijalno dugme*:

> **Proširi/smanji tabelu artikala na ekranu**: omogućava proširivanje ili sažimanje mreža rezultata.

:::note Kreiranje profila
U ovoj formi profile je moguće definisati samo za područje filtera i karticu **Ukupno**.

Na karticama pojedinačnih skladišta nije moguće kreirati profile jer se one generišu i uklanjaju dinamički tokom rada.
:::

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).