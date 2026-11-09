---
title: Upravljanje izlaznim ciklusom
sidebar_position: 6
---

Upravljanje dokumentom elektronskog fakturisanja u izlaznom ciklusu, u skladu sa važećim propisima, obuhvata sledeće faze.

**FAKTURISANJE ORGANA JAVNE UPRAVE**

- generisanje prodajnog dokumenta;
- slanje sistemu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM);
- validacija fakture od strane sistema SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM):
    - faktura je ispravna; započinje postupak isporuke; organ javne uprave je ispravno identifikovan i sistem SdI pokreće postupak isporuke:
        - ako je slanje uspešno, SdI pošiljaocu šalje potvrdu o isporuci elektronske fakture;
        - ako zbog tehničkih razloga za koje SdI nije odgovoran isporuka primaocu nije moguća u roku od 5 dana, SdI pošiljaocu šalje obaveštenje o neuspešnoj isporuci. SdI je odgovoran za kontaktiranje primaoca kako bi se problem koji onemogućava isporuku što pre rešio, kao i za ponovno slanje dokumenta nakon što problem bude otklonjen. Ako SdI ni nakon 10 dana od datuma slanja obaveštenja o neuspešnoj isporuci ne uspe da isporuči elektronsku fakturu primaocu, pošiljaocu šalje konačnu potvrdu o uspešnom slanju fakture uz nemogućnost isporuke;
        - primalac može u roku od 15 dana od prvog obaveštenja poslatog pošiljaocu, odnosno od datuma navedenog u potvrdi o isporuci ili datuma slanja obaveštenja o neuspešnoj isporuci, poslati obaveštenje o prihvatanju ili odbijanju fakture (obaveštenje o rezultatu naručioca);
        - ako SdI u navedenom roku od 15 dana ne primi nikakvo obaveštenje, šalje obaveštenje o isteku roka i pošiljaocu i primaocu. Svrha tog obaveštenja je isključivo da informiše obe strane da SdI smatra postupak povezan sa tom fakturom završenim. Obaveštenje o isteku roka potvrđuje da je sistem razmene uredno završio postupak obrade fakture (prijem i isporuku). Nakon slanja tog obaveštenja SdI će odbaciti ponovo poslatu fakturu i sva obaveštenja povezana sa njom.
    - faktura nije ispravna i izdavaocu se šalje obaveštenje o odbacivanju, nakon čega je potrebno ponovo izdati fakturu.

**B2B/B2C FAKTURISANJE**

- generisanje prodajnog dokumenta;
- slanje sistemu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM);
- validacija fakture od strane sistema SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM):
    - faktura je ispravna: započinje postupak isporuke i moguća su dva scenarija:
        - kanal slanja za primaoca je prepoznat i faktura je isporučena;
        - kanal slanja za primaoca nije prepoznat, pa se kopija fakture čuva u zaštićenom području primaoca, kojeg izdavalac obaveštava o izdavanju fakture;
        - primalac je fizičko lice, pa se kopija fakture čuva u njegovom zaštićenom području, a izdavalac ga obaveštava o izdavanju fakture.
    - faktura nije ispravna i izdavaocu se šalje obaveštenje o odbacivanju, nakon čega je potrebno ponovo izdati fakturu.

U Fluentisu je moguće generisati dokumente iz izlaznog prodajnog ciklusa i za kupce kod kojih je elektronsko fakturisanje ispravno konfigurisano u parametrima šifarnika pripremiti XML datoteku za slanje sistemu SdI.

Svakoj fazi propisanoj zakonodavstvom odgovara određeni STATUS dokumenta u Fluentisu.

Ako je u Fluentisu ispravno konfigurisana komunikacija sa sistemom Fluentis Business Hub (u odeljku Konfiguracija elektronskog fakturisanja za preduzeće), moguće je direktno poslati datoteku sistemu SdI i primati odgovarajuća obaveštenja. U suprotnom, nakon generisanja XML datoteke fakture, moguće ju je preuzeti i poslati putem drugih kanala izvan Fluentisa.

Tipovi dokumenata za koje je u Fluentisu moguće upravljati generisanjem XML datoteke i slanjem sistemu SdI, a koji su predviđeni i važećim propisima, jesu:

- prodajna faktura;
- avans po fakturi;
- avans po obračunu naknade;
- knjižno odobrenje;
- knjižno zaduženje;
- obračun naknade.

Generisana XML datoteka sadržaće odgovarajuću oznaku tipa dokumenta. Nezavisno od tipa dokumenta, postupci generisanja XML datoteke i eventualnog slanja sistemu SdI jednaki su za sve tipove datoteka.

U generisanoj XML datoteci:

- za subjekte identifikovane ili sa prebivalištem na državnoj teritoriji, primalac dokumenta identifikuje se pomoću šifre primaoca, PEC adrese ili elektronske adrese;
- za organe javne uprave šifra primaoca predstavlja IPA šifru koja identifikuje kancelariju zaduženu za prijem faktura.

Ova podešavanja unose se u šifarnik KUPACA za svaki evidentirani subjekt.

## Jedinstveno numerisanje dokumenata

Radi ispravnog i jedinstvenog numerisanja prodajnih dokumenata, kojim se izbegava odbacivanje dokumenata koje SdI prepoznaje kao već poslate, preporučuje se da se za svaki tip dokumenta Prodajna faktura definiše jedinstveno numerisanje koje omogućava ispravnu identifikaciju dokumenta. Na primer, iza broja može se dodati sufiks „/B”.

Podsećamo da je za upravljanje brojačima prodajnih dokumenata potrebno otvoriti funkciju Tabele > Prodaja > Numerisanje faktura.

Za podešavanje broja fakture (ili otpremnice) sa kosom crtom i sufiksom (na primer 1/A, 2/A... 1/B, 2/B) u tabeli Brojači potrebno je podesiti formulu:

    number.ToString()+"/B"

Zatim je u izveštaju potrebno zameniti standardno polje (npr. Number) izračunatim poljem (npr. CalcNumber), u koje treba uneti sledeći izraz:

    Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])

**PAŽNJA:** ovo funkcioniše samo u izveštaju. U obrascima će se i dalje prikazivati uobičajeni broj bez sufiksa, ali će u XML datoteci biti naveden ispravan jedinstveni broj.

Ukratko, za upravljanje izdavanjem i slanjem elektronskih faktura u Fluentisu potrebno je sprovesti sledeće korake:

- Podešavanje šifarnika kontakata
- Podešavanje tabela za upravljanje
- IZDAVANJE I SLANJE PRODAJNIH DOKUMENATA pomoću odgovarajućih funkcija opisanih u odeljku PROMENA I UPRAVLJANJE STATUSIMA DOKUMENATA

## Izdavanje i slanje prodajnih dokumenata

Upravljanje prodajnim dokumentima koji se u elektronskom obliku šalju sistemu razmene počinje izradom dokumenta u izlaznom ciklusu Fluentisa, sa statusom NIJE PREGLEDANO: meni Početna > Prodaja > Fakture > Novo.

Nakon izrade dokumenta, generisanje odgovarajuće XML datoteke i slanje dokumenata sistemu SdI (putem Fluentis Business Hub-a) obavljaju se ručnim upravljanjem statusom dokumenta povezanog sa elektronskim fakturisanjem, u za to predviđenom odeljku.

Postupak se nastavlja sve do statusa „Za slanje”, kojim se dokument stavlja u red čekanja za slanje. Putem planiranog BizLink postupka dokumenti se zatim šalju sistemu Fluentis Business Hub na obradu.

Od tog trenutka statusi dokumenata automatski se ažuriraju putem pozadinskih automatizovanih procesa. Operater više ne može ručno da interveniše sve do prijema obaveštenja o odbacivanju, isporuci ili neuspešnoj isporuci.

Statusi dokumenata i obaveštenja o isporuci uvek su vidljivi u obrascu PRETRAGA PRODAJNIH FAKTURA i u funkciji REGISTAR DOKUMENATA SdI.

## Kako promeniti statuse dokumenata i upravljati njima

Nakon generisanja prodajnog dokumenta, promenama statusa moguće je upravljati pojedinačno, za svaki dokument, ili grupno putem postupka PROMENA STATUSA, u okviru četiri funkcionalnosti:

1. Pojedinačno, iz obrasca za upravljanje pojedinačnom fakturom (obrazac Faktura), pomoću funkcije dostupne na traci menija u odeljku Elektronsko fakturisanje.
2. Grupno, iz obrasca PRETRAGA PRODAJNIH FAKTURA, pomoću funkcije dostupne na traci menija u odeljku Elektronsko fakturisanje, nakon izbora dokumenata kojima se želi upravljati.
3. Pojedinačno, putem funkcije REGISTAR DOKUMENATA SdI, pomoću funkcije dostupne na traci menija.
4. Grupno, putem funkcije za upravljanje statusima dostupne na traci menija aplikacije BizLink – Dokumenti SdI – IZLAZNI PRODAJNI DOKUMENTI, nakon izbora dokumenata kojima se želi upravljati.

Statusima dokumenata moguće je upravljati i pratiti ih u bilo kom trenutku otvaranjem ekrana PRETRAGA, kojem se pristupa putem menija Prodaja > Fakture > Fakture;

ili putem aplikacije BizLink, otvaranjem stavke Dokumenti SdI > IZLAZNI PRODAJNI DOKUMENTI.

## Pretraga prodajnih faktura

Ekran za pretragu „Prodajne fakture”, kojem se pristupa putem menija Početna > Prodaja > Fakture > Fakture, prikazuje informacije o statusima i upravljanju dokumentima poslatim iz Fluentisa u Fluentis Business Hub, kao i odgovarajuća obaveštenja o statusima.

Kolone koje omogućavaju praćenje statusa dokumenta, kako dok je još pod kontrolom operatera tako i nakon slanja, kada njime upravlja Fluentis Business Hub, jesu:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz sistema SdI (pogledajte odeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sistem SdI dodeljuje dokumentu prilikom prijema (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum prijema SdI*: datum kada je sistem razmene primio poslati dokument. Ovaj podatak preuzima se iz obaveštenja o prijemu koje sistem SdI izdaje nakon prijema pošiljke, a pre sprovođenja formalnih provera datoteke (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument Dostavljeno) (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum poslednjeg događaja*: datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sistemu SdI.

Polja povezana sa upravljanjem elektronskim dokumentima mogu se koristiti i kao filteri za pretragu dokumenata putem proširivog odeljka Status elektronske fakture na panelu filtera.

Na ekranu za pretragu prodajnih faktura moguće je izabrati jednu fakturu ili više faktura sa jednakim SdI statusom i promeniti njihov status obrade pomoću funkcije Status u odeljku Elektronsko fakturisanje na traci menija.

Ako je izabrana samo jedna faktura, desnim klikom miša na kolonu sa nazivom XML datoteke i izborom radnje Otvori obrazac ili izborom funkcije Registar dokumenata SdI u odeljku Elektronsko fakturisanje na traci menija otvara se Registar dokumenata SdI. U njemu je moguće pregledati generisani XML dokument i istoriju upravljanja prodajnim dokumentom.

## Registar dokumenata SDI

Funkcija Registar dokumenata SdI omogućava pregled statusa obrade dokumenata prodajnih faktura i uvid u:

- generisanu XML datoteku;
- priloženu PDF datoteku (ako je zatraženo njeno prilaganje XML dokumentu);
- obaveštenja koja šalje Fluentis Business Hub, a preuzima ih direktno sistem SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).

U ovom prikazu moguće je pratiti i poslednje događaje povezane sa upravljanjem datotekom i pregledati istoriju izvršenih radnji.

Registru dokumenata SdI moguće je pristupiti:

- sa ekrana za pretragu prodajnih faktura izborom datoteke fakture;
- iz obrasca za upravljanje pojedinačnim dokumentom Faktura;
- putem funkcije Dokumenti SdI > Izlazni prodajni dokumenti.

Ekran Registar dokumenata SdI sastoji se od sažetka u zaglavlju i dva panela:

- Prilozi
- Registar dokumenata SdI

U zaglavlju se prikazuju sažeti podaci o fakturi:

- **Status elektronske fakture**: status dokumenta povezan sa slanjem sistemu SdI putem Fluentis Business Hub-a (za detalje o tipovima statusa dokumenata pogledajte odeljak STATUSI DOKUMENATA).
- **Tip fakture**: tip poslatog dokumenta – Fluentisova šifra.
- **Datum, Broj, Kupac**: datum i broj dokumenta, kao i kupac na kojeg glasi faktura.
- **Naziv datoteke SdI**: naziv XML datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (za detalje o formiranju naziva datoteke pogledajte odeljak Naziv datoteke).
- **SdI ID**: jedinstveni identifikator koji SdI dodeljuje datoteci fakture prilikom njenog prijema. SdI će taj identifikator koristiti za sva naknadna obaveštenja poslata pošiljaocu (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- **Datum prijema SdI**: datum kada SdI primi datoteku fakture i pošiljaocu pošalje obaveštenje o prijemu (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- **Datum prijema kod kupca**: podudara se sa datumom isporuke dokumenta kupcu ili datumom kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Drugi slučaj odnosi se na slanja kod kojih SdI ne uspe da ispravno identifikuje naručioca/sticaoca (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- **Datum poslednjeg događaja**: odnosi se na poslednju radnju koju je izvršio operater ili poslednje obaveštenje primljeno od sistema SdI tokom postupka upravljanja dokumentom.

## Panel PRILOZI

Na panelu PRILOZI prikazuju se svi dokumenti povezani sa elektronskim upravljanjem fakturom, počevši od XML datoteke dokumenta pa sve do poslednjeg obaveštenja primljenog od sistema SdI.

Klikom na dokument u tabeli dokumenata prikazuje se njegov sadržaj na desnoj strani ekrana. Pritom se primenjuje stilski šablon koji tumači XML datoteku fakture ili obaveštenja i prikazuje je u pojednostavljenom obliku prilagođenom korisniku, na primer za XML datoteku.

Tabela dokumenata na levoj strani ekrana za svaku datoteku prikazuje sledeće informacije:

- *Datum*: datum preuzimanja priloga.
- *Tip sadržaja datoteke*: tehnički identifikator povezan sa stilskim šablonom koji se koristi za prikaz XML datoteke.
- *Naziv i Opis*: opis prikazane XML datoteke.

Ako generisana XML datoteka sadrži priloge, u njenom donjem delu prikazuje se tabela sa spiskom priloga dokumenta. Klikom na naziv priložene datoteke moguće ju je preuzeti i sačuvati za upotrebu izvan sistema za upravljanje dokumentima.

Datoteke priložene pojedinačnim statusima dokumenta mogu se preuzeti pomoću funkcije Preuzmi prilog, dostupne na traci menija.

## Panel REGISTAR DOKUMENATA SDI

Panel Registar dokumenata SdI prikazuje istoriju svih faza upravljanja elektronskim dokumentom, od trenutka generisanja u XML formatu do isporuke ili eventualnog odbacivanja.

U tabeli događaja za svaki događaj prikazuje se odgovarajući „Prelaz”, odnosno promena statusa dokumenta, a kada je predviđena ručna intervencija, prikazuju se ime operatera koji je izvršio promenu i datum njenog izvršenja.

Statusi dokumenta povezani sa generisanjem XML datoteke i statusi preuzeti iz sistema SdI za koje je predviđeno obaveštenje povezani su i sa odgovarajućom XML datotekom.

Klikom na događaj povezan sa XML datotekom aktivira se njen prikaz. Pritom se koristi stilski šablon koji omogućava prikaz XML datoteke u pojednostavljenom obliku prilagođenom korisniku, na primer za datoteku obaveštenja o prijemu.

Funkcija Preuzmi sadržaj registra omogućava preuzimanje izabrane datoteke koja je prikazana na ekranu.

## Izlazni prodajni dokumenti

U aplikaciji BizLink moguće je otvoriti stavku menija Dokumenti SdI – Izlazni prodajni dokumenti i pregledati opšti status svih prodajnih dokumenata pripremljenih u izlaznom ciklusu, upravljati njihovim statusima i pregledati istoriju promena statusa.

Dijalog *Izlazni prodajni dokumenti* podeljen je na dva dela: zaglavlje sa poljima za filtriranje dokumenata i tabelu sa rezultatima pretrage.

U tabeli se prikazuju sledeće vrednosti:

- *SdI status*: status dokumenta povezan sa slanjem sistemu SdI putem Fluentis Business Hub-a (za detalje o tipovima statusa dokumenata pogledajte odeljak STATUSI DOKUMENATA).
- *Tip*: referentna šifra tipa prodajnog dokumenta.
- *Datum, Broj, Kupac*: datum i broj dokumenta, kao i kupac na kojeg glasi faktura.
- *Datum prijema kod kupca*: datum isporuke dokumenta kupcu ili datum kada je dokument stavljen na raspolaganje u zaštićenom području kupca. Drugi slučaj odnosi se na slanja kod kojih SdI ne uspe da ispravno identifikuje naručioca/sticaoca (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Naziv datoteke SdI*: naziv XML datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (za detalje o formiranju naziva datoteke pogledajte odeljak Naziv datoteke).
- *Datum poslednjeg događaja*: odnosi se na poslednju radnju koju je izvršio operater ili poslednje obaveštenje primljeno od sistema SdI tokom postupka upravljanja dokumentom.

Klikom na proširivi odeljak pojedinačne fakture otvara se detaljni prikaz prelaza povezanih sa statusima dokumenta. Prikazuju se pojedinačni prelazi koji su se dogodili tokom upravljanja dokumentom, zajedno sa datumom izvršenja i nazivom eventualne datoteke generisane promenom statusa.

U tabeli Registar dokumenata SdI prikazuju se svi dokumenti faktura izrađeni u izlaznom toku upravljanja dokumentima, nezavisno od njihovog statusa.

Dvostrukim klikom na red fakture otvara se panel Registar dokumenata SdI, u kojem je moguće pregledati dokumente izrađene tokom upravljanja datotekom fakture i istoriju prelaza statusa.

U tabeli Registar dokumenata SdI moguće je izabrati jednu fakturu ili više faktura sa jednakim statusom i upravljati statusom obrade dokumenta pomoću padajuće liste Status na traci menija, izborom novog statusa dokumenta.

Izborom fakture u tabeli i klikom na funkciju Otvori dokument na traci menija otvara se faktura.