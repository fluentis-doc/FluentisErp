---
title: Upravljanje izlaznim ciklusom
sidebar_position: 6
---

Upravljanje dokumentom elektroničkog fakturiranja u izlaznom ciklusu, u skladu s važećim propisima, obuhvaća sljedeće faze.

**FAKTURIRANJE TIJELA JAVNE UPRAVE**

- generiranje prodajnog dokumenta;
- slanje sustavu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM);
- validacija računa od strane sustava SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM):
    - račun je ispravan; započinje postupak dostave; tijelo javne uprave ispravno je identificirano i sustav SdI pokreće postupak dostave:
        - ako je slanje uspješno, SdI pošiljatelju šalje potvrdu o dostavi elektroničkog računa;
        - ako zbog tehničkih razloga za koje SdI nije odgovoran dostava primatelju nije moguća u roku od 5 dana, SdI pošiljatelju šalje obavijest o neuspjeloj dostavi. SdI je odgovoran za kontaktiranje primatelja kako bi se problem koji onemogućuje dostavu što prije riješio te za ponovno slanje dokumenta nakon što problem bude otklonjen. Ako SdI ni nakon 10 dana od datuma slanja obavijesti o neuspjeloj dostavi ne uspije dostaviti elektronički račun primatelju, pošiljatelju šalje konačnu potvrdu o uspješnom slanju računa uz nemogućnost dostave;
        - primatelj može u roku od 15 dana od prve obavijesti poslane pošiljatelju, odnosno od datuma navedenog u potvrdi o dostavi ili datuma slanja obavijesti o neuspjeloj dostavi, poslati obavijest o prihvaćanju ili odbijanju računa (obavijest o rezultatu naručitelja);
        - ako SdI u navedenom roku od 15 dana ne primi nikakvu obavijest, šalje obavijest o isteku roka i pošiljatelju i primatelju. Svrha je te obavijesti isključivo informirati obje strane da SdI smatra postupak povezan s tim računom završenim. Obavijest o isteku roka potvrđuje da je sustav razmjene uredno završio postupak obrade računa (primitak i dostavu). Nakon slanja te obavijesti SdI će odbaciti ponovno poslani račun i sve obavijesti povezane s njim.
    - račun nije ispravan te se izdavatelju šalje obavijest o odbacivanju, nakon čega je potrebno ponovno izdati račun.

**B2B/B2C FAKTURIRANJE**

- generiranje prodajnog dokumenta;
- slanje sustavu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM);
- validacija računa od strane sustava SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM):
    - račun je ispravan: započinje postupak dostave i moguća su dva scenarija:
        - kanal slanja za primatelja prepoznat je i račun je dostavljen;
        - kanal slanja za primatelja nije prepoznat pa se kopija računa sprema u zaštićeno područje primatelja, kojeg izdavatelj obavještava o izdavanju računa;
        - primatelj je privatna osoba pa se kopija računa sprema u njezino zaštićeno područje, a izdavatelj je obavještava o izdavanju računa.
    - račun nije ispravan te se izdavatelju šalje obavijest o odbacivanju, nakon čega je potrebno ponovno izdati račun.

U Fluentisu je moguće generirati dokumente iz izlaznog prodajnog ciklusa te za kupce kod kojih je elektroničko fakturiranje ispravno konfigurirano u parametrima šifarnika pripremiti XML datoteku za slanje sustavu SdI.

Svakoj fazi propisanoj zakonodavstvom odgovara određeni STATUS dokumenta u Fluentisu.

Ako je u Fluentisu ispravno konfigurirana komunikacija sa sustavom Fluentis Business Hub (u odjeljku Konfiguracija elektroničkog fakturiranja za poduzeće), moguće je izravno poslati datoteku sustavu SdI i primati pripadajuće obavijesti. U suprotnom, nakon generiranja XML datoteke računa, moguće ju je preuzeti i poslati putem drugih kanala izvan Fluentisa.

Vrste dokumenata za koje je u Fluentisu moguće upravljati generiranjem XML datoteke i slanjem sustavu SdI, a koje su predviđene i važećim propisima, jesu:

- prodajni račun;
- predujam/avans po računu;
- predujam/avans po obračunu naknade;
- knjižno odobrenje;
- knjižno terećenje;
- obračun naknade.

Generirana XML datoteka sadržavat će odgovarajuću oznaku vrste dokumenta. Neovisno o vrsti dokumenta, postupci generiranja XML datoteke i eventualnog slanja sustavu SdI jednaki su za sve vrste datoteka.

U generiranoj XML datoteci:

- za subjekte identificirane ili s prebivalištem na državnom području, primatelj dokumenta identificira se pomoću šifre primatelja, PEC adrese ili elektroničke adrese;
- za tijela javne uprave šifra primatelja predstavlja IPA šifru koja identificira ured zadužen za primanje računa.

Te se postavke unose u šifarnik KUPACA za svaki evidentirani subjekt.

## Jedinstvena numeracija dokumenata

Radi ispravne i jedinstvene numeracije prodajnih dokumenata, kojom se izbjegava odbacivanje dokumenata koje SdI prepoznaje kao već poslane, preporučuje se za svaku vrstu dokumenta Prodajni račun definirati jedinstvenu numeraciju koja omogućuje ispravnu identifikaciju dokumenta. Primjerice, nakon broja može se postaviti sufiks „/B”.

Podsjećamo da je za upravljanje brojačima prodajnih dokumenata potrebno otvoriti funkciju Tablice > Prodaja > Numeracija računa.

Za postavljanje broja računa (ili otpremnice) s kosom crtom i sufiksom (primjerice 1/A, 2/A... 1/B, 2/B) u tablici Brojači potrebno je postaviti formulu:

    number.ToString()+"/B"

Zatim je u izvještaju potrebno zamijeniti standardno polje (npr. Number) izračunatim poljem (npr. CalcNumber), u koje treba unijeti sljedeći izraz:

    Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])

**PAŽNJA:** ovo funkcionira samo u izvještaju. U obrascima će se i dalje prikazivati uobičajeni broj bez sufiksa, ali će u XML datoteci biti naveden ispravan jedinstveni broj.

Ukratko, za upravljanje izdavanjem i slanjem elektroničkih računa u Fluentisu potrebno je provesti sljedeće korake:

- Postavljanje šifarnika kontakata
- Postavljanje tablica za upravljanje
- IZDAVANJE I SLANJE PRODAJNIH DOKUMENATA pomoću odgovarajućih funkcija opisanih u odjeljku PROMJENA I UPRAVLJANJE STATUSIMA DOKUMENATA

## Izdavanje i slanje prodajnih dokumenata

Upravljanje prodajnim dokumentima koji se u elektroničkom obliku šalju sustavu razmjene započinje izradom dokumenta u izlaznom ciklusu Fluentisa, sa statusom NIJE PREGLEDANO: izbornik Početna > Prodaja > Računi > Novo.

Nakon izrade dokumenta generiranje odgovarajuće XML datoteke i slanje dokumenata sustavu SdI (putem Fluentis Business Huba) provode se ručnim upravljanjem statusom dokumenta povezanog s elektroničkim fakturiranjem, u za to predviđenom odjeljku.

Postupak se nastavlja sve do statusa „Za slanje”, kojim se dokument stavlja u red čekanja za slanje. Putem planiranog BizLink postupka dokumenti se zatim šalju sustavu Fluentis Business Hub na obradu.

Od tog trenutka statusi dokumenata automatski se ažuriraju putem pozadinskih automatiziranih procesa. Operater više ne može ručno intervenirati sve do primitka obavijesti o odbacivanju, dostavi ili neuspjeloj dostavi.

Statusi dokumenata i obavijesti o dostavi uvijek su vidljivi u obrascu PRETRAŽIVANJE PRODAJNIH RAČUNA i u funkciji REGISTAR DOKUMENATA SdI.

## Kako promijeniti statuse dokumenata i upravljati njima

Nakon generiranja prodajnog dokumenta promjenama statusa moguće je upravljati pojedinačno, za svaki dokument, ili skupno putem postupka PROMJENA STATUSA, u okviru četiriju funkcionalnosti:

1. Pojedinačno, iz obrasca za upravljanje pojedinačnim računom (obrazac Račun), pomoću funkcije dostupne na vrpci izbornika u odjeljku Elektroničko fakturiranje.
2. Skupno, iz obrasca PRETRAŽIVANJE PRODAJNIH RAČUNA, pomoću funkcije dostupne na vrpci izbornika u odjeljku Elektroničko fakturiranje, nakon odabira dokumenata kojima se želi upravljati.
3. Pojedinačno, putem funkcije REGISTAR DOKUMENATA SdI, pomoću funkcije dostupne na vrpci izbornika.
4. Skupno, putem funkcije za upravljanje statusima dostupne na vrpci izbornika aplikacije BizLink – Dokumenti SdI – IZLAZNI PRODAJNI DOKUMENTI, nakon odabira dokumenata kojima se želi upravljati.

Statusima dokumenata moguće je upravljati i pratiti ih u bilo kojem trenutku otvaranjem zaslona PRETRAŽIVANJE, kojem se pristupa putem izbornika Prodaja > Računi > Računi;

ili putem aplikacije BizLink, otvaranjem stavke Dokumenti SdI > IZLAZNI PRODAJNI DOKUMENTI.

## Pretraživanje prodajnih računa

Zaslon za pretraživanje „Prodajni računi”, kojem se pristupa putem izbornika Početna > Prodaja > Računi > Računi, prikazuje informacije o statusima i upravljanju dokumentima poslanima iz Fluentisa u Fluentis Business Hub te pripadajuće obavijesti o statusima.

Stupci koji omogućuju praćenje statusa dokumenta, kako dok je još pod kontrolom operatera tako i nakon slanja, kada njime upravlja Fluentis Business Hub, jesu:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz sustava SdI (pogledajte odjeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sustav SdI dodjeljuje dokumentu prilikom primitka (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum primitka SdI*: datum kada je sustav razmjene zaprimio poslani dokument. Ovaj se podatak preuzima iz obavijesti o primitku koju sustav SdI izdaje nakon zaprimanja pošiljke, a prije provođenja formalnih provjera datoteke (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum zatvaranja*: datum zatvaranja tijeka upravljanja (npr. dokument Dostavljeno) (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum posljednjeg događaja*: datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sustavu SdI.

Polja povezana s upravljanjem elektroničkim dokumentima mogu se koristiti i kao filtri za pretraživanje dokumenata putem proširivog odjeljka Status elektroničkog računa na ploči filtara.

Na zaslonu za pretraživanje prodajnih računa moguće je odabrati jedan račun ili više računa s jednakim SdI statusom te promijeniti njihov status obrade pomoću funkcije Status u odjeljku Elektroničko fakturiranje na vrpci izbornika.

Ako je odabran samo jedan račun, desnim klikom miša na stupac s nazivom XML datoteke i odabirom radnje Otvori obrazac ili odabirom funkcije Registar dokumenata SdI u odjeljku Elektroničko fakturiranje na vrpci izbornika otvara se Registar dokumenata SdI. U njemu je moguće pregledati generirani XML dokument i povijest upravljanja prodajnim dokumentom.

## Registar dokumenata SDI

Funkcija Registar dokumenata SdI omogućuje pregled statusa obrade dokumenata prodajnih računa i uvid u:

- generiranu XML datoteku;
- priloženu PDF datoteku (ako je zatraženo njezino prilaganje XML dokumentu);
- obavijesti koje šalje Fluentis Business Hub, a preuzima ih izravno sustav SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).

U ovom je prikazu moguće pratiti i posljednje događaje povezane s upravljanjem datotekom te pregledati povijest izvršenih radnji.

Registru dokumenata SdI moguće je pristupiti:

- sa zaslona za pretraživanje prodajnih računa odabirom datoteke računa;
- iz obrasca za upravljanje pojedinačnim dokumentom Račun;
- putem funkcije Dokumenti SdI > Izlazni prodajni dokumenti.

Zaslon Registar dokumenata SdI sastoji se od sažetka u zaglavlju i dviju ploča:

- Privici
- Registar dokumenata SdI

U zaglavlju se prikazuju sažeti podaci o računu:

- **Status elektroničkog računa**: status dokumenta povezan sa slanjem sustavu SdI putem Fluentis Business Huba (za detalje o vrstama statusa dokumenata pogledajte odjeljak STATUSI DOKUMENATA).
- **Vrsta računa**: vrsta poslanog dokumenta – Fluentisova šifra.
- **Datum, Broj, Kupac**: datum i broj dokumenta te kupac na kojeg glasi račun.
- **Naziv datoteke SdI**: naziv XML datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (za detalje o formiranju naziva datoteke pogledajte odjeljak Naziv datoteke).
- **SdI ID**: jedinstveni identifikator koji SdI dodjeljuje datoteci računa prilikom njezina primitka. SdI će taj identifikator koristiti za sve naknadne obavijesti poslane pošiljatelju (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- **Datum primitka SdI**: datum kada SdI zaprimi datoteku računa i pošiljatelju pošalje obavijest o primitku (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- **Datum primitka kod kupca**: podudara se s datumom dostave dokumenta kupcu ili datumom kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Drugi se slučaj odnosi na slanja kod kojih SdI ne uspije ispravno identificirati naručitelja/stjecatelja (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- **Datum posljednjeg događaja**: odnosi se na posljednju radnju koju je izvršio operater ili posljednju obavijest zaprimljenu od sustava SdI tijekom postupka upravljanja dokumentom.

## Ploča PRIVICI

Na ploči PRIVICI prikazuju se svi dokumenti povezani s elektroničkim upravljanjem računom, počevši od XML datoteke dokumenta pa sve do posljednje obavijesti zaprimljene od sustava SdI.

Klikom na dokument u tablici dokumenata prikazuje se njegov sadržaj na desnoj strani zaslona. Pritom se primjenjuje stilski predložak koji interpretira XML datoteku računa ili obavijesti i prikazuje je u pojednostavljenom obliku prilagođenom korisniku, primjerice za XML datoteku.

Tablica dokumenata na lijevoj strani zaslona za svaku datoteku prikazuje sljedeće informacije:

- *Datum*: datum preuzimanja privitka.
- *Vrsta sadržaja datoteke*: tehnički identifikator povezan sa stilskim predloškom koji se koristi za prikaz XML datoteke.
- *Naziv i Opis*: opis prikazane XML datoteke.

Ako generirana XML datoteka sadržava privitke, u njezinu donjem dijelu prikazuje se tablica s popisom privitaka dokumenta. Klikom na naziv priložene datoteke moguće ju je preuzeti i spremiti za upotrebu izvan sustava za upravljanje dokumentima.

Datoteke priložene pojedinim statusima dokumenta mogu se preuzeti pomoću funkcije Preuzmi privitak dostupne na vrpci izbornika.

## Ploča REGISTAR DOKUMENATA SDI

Ploča Registar dokumenata SdI prikazuje povijest svih faza upravljanja elektroničkim dokumentom, od trenutka generiranja u XML formatu do dostave ili eventualnog odbacivanja.

U tablici događaja za svaki se događaj prikazuje odgovarajući „Prijelaz”, odnosno promjena statusa dokumenta, a kada je predviđena ručna intervencija, prikazuju se ime operatera koji je izvršio promjenu i datum njezina izvršenja.

Statusi dokumenta povezani s generiranjem XML datoteke i statusi preuzeti iz sustava SdI za koje je predviđena obavijest povezani su i s odgovarajućom XML datotekom.

Klikom na događaj povezan s XML datotekom aktivira se njezin prikaz. Pritom se koristi stilski predložak koji omogućuje prikaz XML datoteke u pojednostavljenom obliku prilagođenom korisniku, primjerice za datoteku obavijesti o primitku.

Funkcija Preuzmi sadržaj registra omogućuje preuzimanje odabrane datoteke koja je prikazana na zaslonu.

## Izlazni prodajni dokumenti

U aplikaciji BizLink moguće je otvoriti stavku izbornika Dokumenti SdI – Izlazni prodajni dokumenti te pregledati opći status svih prodajnih dokumenata pripremljenih u izlaznom ciklusu, upravljati njihovim statusima i pregledati povijest promjena statusa.

Dijaloški okvir *Izlazni prodajni dokumenti* podijeljen je na dva dijela: zaglavlje s poljima za filtriranje dokumenata i tablicu s rezultatima pretraživanja.

U tablici se prikazuju sljedeće vrijednosti:

- *SdI status*: status dokumenta povezan sa slanjem sustavu SdI putem Fluentis Business Huba (za detalje o vrstama statusa dokumenata pogledajte odjeljak STATUSI DOKUMENATA).
- *Vrsta*: referentna šifra vrste prodajnog dokumenta.
- *Datum, Broj, Kupac*: datum i broj dokumenta te kupac na kojeg glasi račun.
- *Datum primitka kod kupca*: datum dostave dokumenta kupcu ili datum kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Drugi se slučaj odnosi na slanja kod kojih SdI ne uspije ispravno identificirati naručitelja/stjecatelja (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Naziv datoteke SdI*: naziv XML datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (za detalje o formiranju naziva datoteke pogledajte odjeljak Naziv datoteke).
- *Datum posljednjeg događaja*: odnosi se na posljednju radnju koju je izvršio operater ili posljednju obavijest zaprimljenu od sustava SdI tijekom postupka upravljanja dokumentom.

Klikom na proširivi odjeljak pojedinog računa otvara se detaljni prikaz prijelaza povezanih sa statusima dokumenta. Prikazuju se pojedinačni prijelazi koji su se dogodili tijekom upravljanja dokumentom, zajedno s datumom izvršenja i nazivom eventualne datoteke generirane promjenom statusa.

U tablici Registar dokumenata SdI prikazuju se svi dokumenti računa izrađeni u izlaznom tijeku upravljanja dokumentima, neovisno o njihovu statusu.

Dvostrukim klikom na redak računa otvara se ploča Registar dokumenata SdI, u kojoj je moguće pregledati dokumente izrađene tijekom upravljanja datotekom računa i povijest prijelaza statusa.

U tablici Registar dokumenata SdI moguće je odabrati jedan račun ili više računa s jednakim statusom te upravljati statusom obrade dokumenta pomoću padajućeg izbornika Status na vrpci izbornika, odabirom novog statusa dokumenta.

Odabirom računa u tablici i klikom na funkciju Otvori dokument na vrpci izbornika otvara se račun.