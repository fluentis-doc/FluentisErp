---
title: Statusi dokumenata u Fluentisu
sidebar_position: 5
---

Slanje i primanje elektroničkih dokumenata iz ulaznog i izlaznog ciklusa podrazumijeva upravljanje nizom operativnih STATUSA od strane korisnika. Ti statusi definiraju tijek upravljanja računom, od njegova generiranja do slanja u Fluentis Business Hub radi stvarnog prijenosa u SdI.

Statusima je moguće upravljati pojedinačno, odnosno unutar upravljanja jednim dokumentom, ili skupno. Svaki status može omogućiti prijelaz na PRETHODNI ili SLJEDEĆI status upravljanja. Radnje i upravljanje elektroničkim dokumentima mogu podlijegati operativnim ograničenjima kojima se upravljanje statusima dokumenata može ograničiti samo na unaprijed određene uloge i/ili korisnike, odgovarajućom konfiguracijom vrpce izbornika s pripadajućim radnjama.

Trenutačni propisi koji se odnose na slanje obavijesti Poreznoj upravi predviđaju da porezni obveznici obavještavaju o podacima vezanima uz transakcije isporuke robe i pružanja usluga (upravljanje izlaznim ciklusom), kao i o primljenim transakcijama od subjekata koji nisu identificirani ili nemaju prebivalište odnosno sjedište na području države. Za to se koristi isti format predviđen za talijanske elektroničke račune.

Dok je za IZDANE dokumente moguće koristiti isti format predviđen za talijanske elektroničke račune, za slanje nabavnih dokumenata inozemnih dobavljača u SdI predviđen je poseban format, a potpisivanje tih datoteka je obvezno.

U Fluentisu je generiranje XML datoteke ove vrste moguće nakon računovodstvenog knjiženja primljenog dokumenta, a zatim se unutar računovodstvenog knjiženja upravlja generiranjem XML datoteke i njezinim slanjem u SdI, koristeći iste postupke promjene statusa koji su predviđeni za izlazni ciklus. Druga je mogućnost upravljanje datotekama putem funkcije **Elektroničko fakturiranje s nerezidentnim subjektima**.

## Značenje pojedinih statusa

| Status dokumenta | Opis | Moguće radnje |
| :-- | :-- | :-- |
| Nije pregledan | Dokument je generiran, ali još nisu izvršene nikakve radnje povezane s upravljanjem elektroničkim dokumentom. | **Sljedeći:** Provjeren, Otkazan, Isključen. **Prethodni:** Ručno brisanje dokumenta iz upravljanja. |
| Provjeren | Operater je izvršio preliminarne provjere dokumenta. | **Sljedeći:** Generiran, Otkazan, Isključen. **Prethodni:** Nije pregledan (povratak na početni status dokumenta). |
| Generiran | Izrađena je XML datoteka elektroničkog dokumenta. Od tog trenutka moguće je prijeći na sljedeće statuse radi slanja datoteke u Fluentis Business Hub ili preuzeti XML datoteku za vanjsku obradu. Dokument u ovom statusu može se knjižiti. | **Sljedeći:** Potpisan, Za slanje, Otkazan, Isključen. **Prethodni:** Provjeren. |
| Potpisan | Dokument je potpisan izvan sustava certifikatom u formatu CAdES ili XAdES te ponovno uvezen u Fluentis u novom formatu. | **Sljedeći:** Za slanje, Otkazan, Isključen. **Prethodni:** Generiran. |
| Za slanje | Ovaj status, koji se koristi kada je kanal Fluentis Business Hub ispravno konfiguriran, dodaje dokument na popis dokumenata koje BizLink treba obraditi radi slanja u SdI. **ZA KORISNIKE KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM, OVA PROMJENA STATUSA BLOKIRA RAČUN ZA SVE DALJNJE RADNJE.** | **Sljedeći:** NEMA RUČNIH RADNJI. Status ažurira Fluentis Business Hub. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.** |
| Otkazan | Dokument se ne smije poslati krajnjem kupcu, ali i dalje ostaje valjan za potrebe PDV-a. | **Sljedeći:** NEMA RUČNIH RADNJI. **Prethodni:** Nije pregledan. |
| Isključen | Dokument je izrađen, ali ne pripada dokumentima koje je potrebno poslati u SdI (npr. interna storno isprava ili dokument za kupca koji nije rezident u Italiji i na kojeg se ne odnosi obveza elektroničkog fakturiranja sa slanjem u SdI). | **Sljedeći:** NEMA RUČNIH RADNJI. **Prethodni:** Nije pregledan. |
| Nije povezan (ulazni ciklus) | Dokument je primljen putem usluge Fluentis Business Hub, ali nije povezan ni s jednom računovodstvenom stavkom. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.** | **Sljedeći:** Primljen. |
| Primljen (ulazni ciklus) | Dokument je povezan s računovodstvenim knjiženjem, nabavnim dokumentom ili dokumentom obračuna naknade. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.** | **Prethodni:** Nije povezan. |

Ako se slanje obavlja putem usluge Fluentis Business Hub, nakon što se izrađeni dokument označi statusom „Za slanje”, sljedeći statusi koje izravno dodjeljuje Fluentis Business Hub mogu biti:

**SLJEDEĆI STATUSI NISU DOSTUPNI KORISNICIMA KOJI NISU SKLOPILI UGOVOR O FBH-U S FLUENTISOM.**

| Status dokumenta | Opis | Moguće radnje | XML obavijest iz SdI-ja |
| :-- | :-- | :-- | :-- |
| U Fluentis Business Hubu | Dokument je zaprimljen u Fluentis Business Hubu i čeka preuzimanje od strane SdI-ja. | Potrebno je pričekati odgovor SdI-ja koji će provjeriti datoteku i eventualno je preuzeti. | NE |
| U SdI-ju | Dokument je zaprimljen u SdI-ju. | **Sljedeći:** Nije sukladan, Izdano. | NE |
| Nije sukladan | Dokument NIJE prošao formalne provjere koje provodi SdI i potrebno ga je ponovno izdati. Naknadne promjene statusa obavljaju se RUČNO i za njih je odgovoran korisnik. | **Prethodni:** Nije pregledan, Otkazan, Isključen. | DA |
| Dostavljen | Dokument je dostavljen primatelju. | Ciklus slanja je završen. | DA |
| Nije dostavljen | SdI nije uspio dostaviti dokument primatelju te će ga učiniti dostupnim u njegovu zaštićenom korisničkom području (npr. zbog nedostupnosti elektroničke adrese za primanje ili zato što ta adresa nije navedena na računu). | **Sljedeći:** Obavijest kupcu. | DA |
| Obavijest kupcu | Nakon što SdI nije uspio dostaviti dokument, kupcu se ručno šalje obavijest o računu. Ovaj status postavlja se RUČNO i za njega je odgovoran korisnik. | Ciklus slanja je završen. | NE |
| Dokument izdan (samo za javnu upravu) | SdI je dokument smatrao valjanim i nastavlja s pokušajima dostave javnoj upravi. | **Sljedeći:** Dostavljen, Nije dostavljen. | NE |
| Odbijen (samo za javnu upravu) | Dokument namijenjen javnoj upravi odbila je javna uprava. | **Prethodni:** Za pregled. | DA |
| Odobren | Dokument namijenjen javnoj upravi prihvatila je javna uprava. | Ciklus slanja je završen. | DA |
| Prihvaćen istekom roka | Ako SdI u roku od 15 dana od primitka računa ne primi nikakvu obavijest, SdI šalje obavijest o ISTEKU ROKA i pošiljatelju i primatelju. | | DA |

Status dokumenata poslanih u Fluentis Business Hub ažurira se automatski, bez prikaza obavijesti, putem određenih automatskih postupaka u BizLinku.

U sljedećim odjeljcima detaljno je opisan svaki status kojim se upravlja.

## Status dokumenta NIJE PREGLEDAN

Prilikom izrade novog prodajnog dokumenta ili računovodstvenog knjiženja nabave za nerezidentne subjekte, u vrpci izbornika, u odjeljku **Elektroničko fakturiranje**, predloženi status je „Nije pregledan”, što znači da operater još nije procijenio treba li dokument poslati u SdI.

Nakon unosa i spremanja dokumenta s pripadajućim podacima, moguće je promijeniti njegov status u jedan od statusa predviđenih za status NIJE PREGLEDAN:

- **Provjeren:** dokument je provjeren i spreman za obradu u elektroničkom obliku.
- **Otkazan:** račun se ne smije poslati u SdI, ali se mora zadržati kao valjan za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneseni dokument ne smije se poslati u SdI.

## Status dokumenta PROVJEREN

Dokument odnosno knjiženje sa statusom PROVJEREN operater je potvrdio te se može obraditi u sljedećim fazama obrade i slanja u SdI ili se njegov status može vratiti na NIJE PREGLEDAN radi eventualnih izmjena ili dopuna.

Sljedeći statusi obrade dokumenta za slanje u SdI ili za isključivanje iz slanja mogu biti:

- **Generiran:** izrađuje se XML datoteka za uneseni dokument i priprema za slanje.
- **Otkazan:** račun se ne smije poslati u SdI, ali se mora zadržati kao valjan za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneseni dokument ne smije se poslati u SdI.

## Status dokumenta GENERIRAN

Promjena statusa računa ili računovodstvenih knjiženja u status GENERIRAN istodobno pokreće izradu XML dokumenta u skladu s tehničkim specifikacijama koje je za odgovarajuću vrstu dokumenta propisala Porezna uprava.

Tijekom ove faze provode se određene provjere prisutnosti obveznih podataka potrebnih za popunjavanje dokumenta. Ako ti podaci nisu ispravno uneseni u odjeljku šifarnika, prikazat će se obavijest o pogrešci koja upućuje na podatak koji nedostaje.

Račun odnosno knjižno odobrenje u statusu GENERIRAN dobiva i interni status upravljanja **ISPISAN**, pa je od tog trenutka moguće provesti računovodstveno knjiženje dokumenta. Računovodstveno knjiženje u statusu GENERIRAN izrađuje odgovarajuću XML datoteku.

Generirana XML datoteka sprema se u sustav za upravljanje dokumentacijom Fluentisa te je uvijek dostupna putem različitih funkcija koje omogućuju pristup dokumentima i putem funkcije **Registar dokumenata SdI**, koja se nalazi na vrpci izbornika različitih funkcija.

XML datoteka u statusu Generiran može se preuzeti i obraditi za slanje pomoću alata izvan sustava Fluentis ili se može poslati u Fluentis Business Hub putem jednog od predviđenih operativnih statusa.

Ako je za kontakt ili poduzeće uključeno upravljanje potpisom elektroničkih računa, među statusima kojima se upravlja dostupan je i status POTPISAN.

Ako upravljanje potpisom nije predviđeno, dostupni statusi su:

- **Provjeren:** mijenjam status dokumenta kako bih ga vratio na PRETHODNI status Provjeren.
- **Otkazan:** uneseni ili proknjiženi dokument ne smije se poslati u SdI, ali se mora zadržati kao valjan za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneseni dokument ne smije se poslati u SdI.
- **Za slanje:** dokument se dodaje na popis dokumenata za slanje u Fluentis Business Hub.
- **Potpisan:** postupak dodjele ovog statusa traži, na prethodno konfiguriranoj lokaciji, potpisanu datoteku koja odgovara XML datoteci generiranoj postupkom. Ovaj je status vidljiv SAMO ako je označena opcija „Elektroničko fakturiranje s potpisom” u šifarniku kontakta (Postavke šifarnika kontakata) ili u konfiguraciji elektroničkog fakturiranja poduzeća (Konfiguracija veze s Fluentis Business Hubom). Prema važećim propisima, ovaj je status NEOBVEZAN za prodajne dokumente izdane subjektima s prebivalištem odnosno sjedištem u Italiji, dok je OBVEZAN za dokumente izdane subjektima koji nisu rezidenti, nemaju poslovni nastan ili nisu identificirani u Italiji.

Prije promjene statusa u POTPISAN potrebno je potpisati dokumente koji imaju status GENERIRAN:

- Ako je polje **Mapa za izradu datoteka za potpisivanje** ispravno postavljeno u **Konfiguraciji elektroničkog fakturiranja poduzeća** (Konfiguracija veze s Fluentis Business Hubom), Fluentis svaki put kada generira XML datoteku sprema njezinu kopiju na navedenu lokaciju. Ako polje nije ispravno konfigurirano, XML datoteku moguće je preuzeti putem funkcije **Registar dokumenata SdI**, pomoću radnje **Preuzmi privitak** na vrpci izbornika, te je spremiti u odgovarajuću mapu u datotečnom sustavu.

- Potrebno je potpisati datoteku pomoću bilo kojeg dostupnog softvera za potpisivanje koji omogućuje dodavanje digitalnog potpisa u formatu CAdES ili XAdES, u skladu s tehničkim propisima. Potpisanu datoteku potrebno je spremiti u mapu navedenu u konfiguraciji elektroničkog fakturiranja, u polju **Mapa potpisanih datoteka**.

- Promijeniti status dokumenta u POTPISAN. Postupak će automatski pronaći potpisanu datoteku u mapi navedenoj u prethodnoj točki i preuzeti je u tijek obrade sustava Fluentis. Ako se dokument šalje u Fluentis Business Hub, upravo će ta preuzeta datoteka biti datoteka koja se šalje u SdI.

## Status dokumenta POTPISAN

Dokument sa statusom POTPISAN moguće je preuzeti i obrađivati izvan sustava Fluentis ili ga poslati u Fluentis Business Hub radi slanja u SdI.

Za preuzimanje potpisanog dokumenta moguće je otvoriti funkciju **Registar dokumenata SdI** i preuzeti ga u panelu **Privici** pomoću radnje **Preuzmi privitak** na vrpci izbornika ili u panelu **Registar dokumenata SdI** pomoću radnje **Preuzmi sadržaj registra**.

Za nastavak obrade dokumenta moguće je odabrati jedan od ponuđenih statusa:

- **Generiran:** poništava postupak potpisivanja datoteke i vraća XML datoteku u status GENERIRAN.
- **Za slanje:** dokument se dodaje na popis dokumenata za slanje u Fluentis Business Hub.
- **Otkazan:** dokument ili računovodstveno knjiženje ne odnosi se na događaje koje je potrebno poslati u SdI, ali se mora zadržati kao valjan za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneseni dokument odnosno računovodstveno knjiženje ne smije se poslati u SdI.

## Status dokumenta OTKAZAN

Korisnik ručno postavlja dokument odnosno računovodstveno knjiženje u status OTKAZAN kada je dokument relevantan za potrebe PDV-a i računovodstva, ali ne smije biti uključen u ciklus upravljanja sustavom razmjene (Sistema di Interscambio).

Primjerice, prodajni račun iz izlaznog ciklusa sustava Fluentis može primiti obavijest o odbacivanju od sustava razmjene. Ako je dokument već proknjižen, potrebno je:

- Otkazati poslani račun kako se dokument više ne bi uključivao ni u jedan ciklus slanja.
- Proknjižiti dokument za storno koji vrijedi samo za računovodstvene potrebe, a koji se ne smije poslati u SdI te zato mora imati status ISKLJUČEN.
- Izdati novi dokument s numeracijom koja se poziva na početni dokument te ga ponovno poslati u SdI.

Ako je dokument u statusu Otkazan, ali ga je potrebno ponovno obraditi vraćanjem na početni status, moguće je promijeniti njegov status u NIJE PREGLEDAN i nastaviti s izmjenama izvornog dokumenta.

## Status dokumenta ISKLJUČEN

Korisnik ručno postavlja status dokumenta „Isključen”. Ovaj se status odnosi na dokumente koji po svojoj prirodi ne smiju biti uključeni u tijek upravljanja elektroničkim fakturiranjem za sustav razmjene.

Primjeri dokumenata s ovim statusom:

- Interne storno isprave povezane s računima koje je SdI odbacio i koje je potrebno ponovno izdati.
- Dokumenti izdani stranim subjektima odnosno nerezidentima za koje se ne namjerava upravljati slanjem putem statusa obrade predviđenih za elektroničko fakturiranje u SdI.

Ako je dokument u statusu Otkazan, ali ga je potrebno ponovno obraditi vraćanjem na početni status računa, moguće je promijeniti njegov status u NIJE PREGLEDAN i nastaviti s izmjenama izvornog dokumenta.

## Statusi dokumenta ZA SLANJE i U FLUENTIS BUSINESS HUBU

Dokumenti generirani u izlaznom ciklusu sustava Fluentis i spremni za slanje u SdI moraju biti označeni statusom ZA SLANJE. Ovaj status, koji se koristi kada je kanal Fluentis Business Hub ispravno konfiguriran, dodaje dokument na popis dokumenata koje BizLink treba obraditi radi slanja u SdI.

U ovom statusu nisu predviđene promjene statusa jer će dokument, nakon dodavanja u BizLinkov „red čekanja za slanje”, biti poslan u Fluentis Business Hub radi prijenosa u SdI putem automatskih postupaka koji se izvršavaju u redovitim vremenskim razmacima.

Nakon što se dokument pošalje usluzi Fluentis Business Hub, status se automatski mijenja u U FLUENTIS BUSINESS HUBU, a stupci s podacima o izvršenom prijenosu automatski se popunjavaju:

- **SdI status:** sadrži opis statusa dokumenta, pri čemu prikazuje i interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz SdI-ja (vidi odjeljak STATUSI DOKUMENATA).
- **Naziv datoteke SdI:** naziv datoteke izrađene u trenutku kada je dokument prešao u status GENERIRAN. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koja se šalje u SdI.
- **SdI ID:** jedinstveni identifikator koji SdI dodjeljuje dokumentu prilikom primitka.
- **Datum primitka u SdI:** datum kada je sustav razmjene zaprimio poslani dokument. Taj se podatak preuzima iz obavijesti o primitku koju SdI izdaje nakon zaprimanja dokumenta, a prije provođenja formalnih provjera datoteke.
- **Datum zatvaranja:** datum završetka tijeka upravljanja (npr. za dokument u statusu Dostavljen).
- **Datum posljednjeg događaja:** datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u SdI-ju.

## Status dokumenta U SDI-JU

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Dokument automatski dobiva status „U SDI-ju” putem BizLinkovih postupaka u trenutku slanja u SdI, odnosno kada Fluentis Business Hub primi obavijest o primitku, kao u sljedećem primjeru:

Istodobno s evidentiranjem obavijesti iz SdI-ja, u obrascu **Prodajni računi** popunjavaju se sljedeća polja:

- **SdI ID:** jedinstveni identifikator koji SdI dodjeljuje dokumentu prilikom primitka.
- **Datum primitka u SdI:** datum kada je sustav razmjene zaprimio poslani dokument. Taj se podatak preuzima iz obavijesti o primitku koju SdI izdaje nakon zaprimanja dokumenta, a prije provođenja formalnih provjera datoteke.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, u panelu **Registar dokumenata SdI**, uz prijelaz **Sustav razmjene**, moguće je pregledati obavijest o primitku.

U ovom statusu nije moguće ručno mijenjati datoteku. Potrebno je pričekati obavijest o rezultatu provjere iz SdI-ja, koja može biti **Nije sukladan** ako dokument nije prošao formalne provjere ili **Izdano** ako je prošao predviđene provjere i SdI je započeo postupke dostave.

## Status dokumenta NIJE SUKLADAN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Dokumenti označeni statusom NIJE SUKLADAN odbačeni su u sustavu razmjene nakon formalnih provjera provedenih prilikom primitka. U tom slučaju obavijest o odbacivanju sadrži i razlog odbijanja.

Ako dokument još nije proknjižen, potrebno ga je ponovno izdati s istim brojem i istim datumom, uz ispravak odgovarajućeg podatka, u roku od 5 KALENDARSKIH dana od datuma odbacivanja.

U tablici obrasca **Prodajni računi**, za dokument koji nije sukladan ažurira se stupac **Datum posljednjeg događaja** datumom i vremenom primitka obavijesti o odbacivanju iz SdI-ja.

Otvaranjem registra dokumenata SdI odabranog dokumenta, u panelu **Registar dokumenata SdI**, u retku koji odgovara prijelazu **Dokument nije sukladan**, prikazuju se datum i vrijeme događaja te obavijest o odbacivanju s navedenim razlogom.

Moguće je ručno promijeniti status dokumenta, ovisno o radnjama koje se namjeravaju poduzeti nakon odbacivanja:

- **NIJE PREGLEDAN:** označavanjem dokumenta ovim statusom vraća se u početno stanje, prije obrade. Taj status omogućuje potrebne izmjene dokumenta radi ispravljanja nepravilnosti koje je prijavio SdI. U tom slučaju dokument je potrebno ponovno izdati s istim brojem i datumom.

  **NAPOMENA:** Ako je dokument već proknjižen, oznaka ISPISAN na dokumentu neće se automatski ukloniti. Prije bilo kakve izmjene zaglavlja ili tijela dokumenta potrebno je izbrisati povezano računovodstveno knjiženje. Ako se izmjena odnosi na šifarnik kupca (npr. pogrešna šifra primatelja), nije potrebno brisati računovodstveno knjiženje, već je dovoljno izmijeniti podatke u šifarniku i ponovno generirati XML datoteku.

- **OTKAZAN/ISKLJUČEN:** dokument se otkazuje, nakon čega se izdaje interna isprava za promjenu kojom se usklađuje računovodstveno stanje, a zatim se dokument označava kao ISKLJUČEN.

## Status dokumenta DOSTAVLJEN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Kada SdI uspješno dostavi dokument primatelju odnosno naručitelju, pošiljatelju odnosno izdavatelju izdaje potvrdu o dostavi koja sadrži datum i vrijeme dostave krajnjem primatelju.

U obrascu za pregled **Prodajni računi**, polje **Datum posljednjeg događaja** prikazuje datum i vrijeme potvrde o dostavi koju je zaprimio SdI.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, u panelu **Registar dokumenata SdI**, uz prijelaz **Dokument dostavljen**, moguće je pregledati obavijest o dostavi.

U ovom statusu nije moguće izvršiti nikakve izmjene dokumenta i tijek upravljanja smatra se završenim. **DATUM ZATVARANJA SE NE POPUNJAVA.**

## Status dokumenta NIJE DOSTAVLJEN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Ako SdI ne uspije dostaviti dokument, primjerice zbog nedostupnosti elektroničke adrese za primanje ili zato što adresa nije navedena na računu (šifra primatelja 0000000), SdI:

- Šalje prodavatelju odnosno pružatelju usluge obavijest o neuspjeloj dostavi s navedenim razlogom.
- Čini račun dostupnim kupcu odnosno naručitelju u njegovu zaštićenom korisničkom području ili, u slučaju fizičke osobe, u posebnom zaštićenom području na mrežnoj stranici Porezne uprave.

U takvim slučajevima prodavatelj odnosno pružatelj usluge mora obavijestiti kupca o neuspjeloj dostavi i dostupnosti računa u njegovu zaštićenom korisničkom području, počevši od datuma „stavljanja na raspolaganje” koji je odredio SdI.

U obrascu za pregled **Prodajni računi**, polje **Datum posljednjeg događaja** prikazuje datum i vrijeme potvrde.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, u panelu **Registar dokumenata SdI**, uz prijelaz **Neuspjela dostava**, moguće je pregledati potvrdu o neuspjeloj dostavi te datum i vrijeme obavijesti.

Kada se dokument nalazi u statusu NIJE DOSTAVLJEN, moguće je promijeniti njegov status u OBAVIJEST KUPCU i tako evidentirati trenutak kada je operater obavijestio kupca primatelja o izdavanju dokumenta, uz napomenu da SdI nije uspio izvršiti automatsku dostavu.

## Status dokumenta OBAVIJEST KUPCU

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Slanje određenih dokumenata u SdI možda neće završiti uspješno jer SdI ne može identificirati primatelja dokumenta ili je dokument namijenjen krajnjem potrošaču.

U tim slučajevima SdI šalje obavijest o neuspjeloj dostavi, a kupac odnosno naručitelj mora dostaviti dokument krajnjem primatelju na neki drugi način, izvan sustava SdI.

Kada se Fluentisovi dokumenti nalaze u statusu „Nije dostavljen”, operater može odlučiti poslati dokument krajnjem primatelju drugim putem, a zatim označiti dokument statusom OBAVIJEST KUPCU.

Dokumente u ovom statusu više nije moguće mijenjati, a stupac **Datum posljednjeg događaja** prikazuje datum kada je izvršena radnja obavještavanja.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, u panelu **Registar dokumenata SdI**, uz prijelaz **Ručno obavještavanje kupca**, moguće je pregledati korisnika koji je izvršio radnju te datum i vrijeme njezina izvršenja.

Ciklus upravljanja dokumentom je završen.

## Statusi dokumenta NIJE POVEZAN i PRIMLJEN

**OVI STATUSI NISU DOSTUPNI KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Statusi dokumenta POVEZAN i PRIMLJEN koriste se samo za ulazni ciklus nabavnih dokumenata od subjekata s prebivalištem odnosno sjedištem ili identifikacijom na području Italije.

Status označava dokumente koje je preuzela usluga Fluentis Business Hub, ali još nisu povezani (NIJE POVEZAN) s računovodstvenim knjiženjem, nabavnim dokumentom proknjiženim u odjeljku **Nabava** sustava Fluentis ili dokumentom obračuna naknade.

Drugi je slučaj kada su XML datoteke nabavnih dokumenata povezane s računovodstvenim događajem ili dokumentom.

## Status dokumenta ODBIJEN (samo za fakturiranje javne uprave)

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Status dokumenta ODBIJEN odnosi se na dokument namijenjen javnoj upravi koji ona nije prihvatila. Status se preuzima izravno iz Fluentis Business Huba ako je javna uprava primatelj odlučila poslati obavijest o odbijanju računa putem kanala SdI.

Javne uprave mogu odabrati i druge kanale prijenosa, različite od SdI-ja. U tim slučajevima račun sa statusom ODBIJEN može se postaviti u status OTKAZAN, ISKLJUČEN ili ZA PREGLED.

U slučaju odbijanja računa, javna uprava kao primatelj može:

- Zatražiti od pošiljatelja ponovno izdavanje istog računa s ispravljenim podacima, uz isti broj i isti datum, ako odbijeni račun nije proknjižen.

ILI

- Zatražiti izdavanje knjižnog odobrenja i novog računa ako je prethodni račun već proknjižen.

Napominje se da je slanje obavijesti o odbijanju od strane javne uprave putem sustava razmjene opcionalno.

## Status dokumenta ODOBREN (samo za fakturiranje javne uprave)

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONIČKOM FAKTURIRANJU S FLUENTISOM.**

Status dokumenta ODOBREN odnosi se na dokument namijenjen javnoj upravi koji je ona prihvatila. Status se preuzima izravno iz Fluentis Business Huba kada javna uprava primatelj prihvati poslanu XML datoteku.

U tom se slučaju tijek smatra završenim, a datum zatvaranja popunjava se u svojstvima dokumenta.

## Status dokumenta PRIHVAĆEN ISTEKOM ROKA (samo za fakturiranje javne uprave)

Dokumenti elektroničkog fakturiranja poslani u SdI i namijenjeni javnoj upravi mogu od SdI-ja dobiti status PRIHVAĆEN ISTEKOM ROKA.

Ovaj se status odnosi na slučaj u kojem je SdI dostavio račun javnoj upravi primatelju, a ona u roku od 15 dana od primitka nije poslala nikakvu obavijest SdI-ju, ni o prihvaćanju ni o odbijanju računa.

U tom slučaju SdI šalje obavijest o ISTEKU ROKA i pošiljatelju i primatelju.

Svrha je te obavijesti informirati obje strane da SdI smatra postupak povezan s tim računom završenim. Obavijest o isteku roka potvrđuje da je sustav razmjene uredno završio obradu računa na koji se obavijest odnosi, odnosno njegov primitak i dostavu.

Nakon te obavijesti SdI će odbaciti račun ako ga se ponovno pošalje, kao i svaku daljnju obavijest koja se odnosi na njega.

Obavijest o isteku roka nema nikakve posljedice na provjeru ispravnosti računa ni na njegovo daljnje postupanje od strane zainteresiranih strana. To znači da javna uprava i dalje može odlučiti odbiti dostavljeni račun.

Status se preuzima izravno iz Fluentis Business Huba i u tom se slučaju ciklus upravljanja dokumentom smatra završenim.