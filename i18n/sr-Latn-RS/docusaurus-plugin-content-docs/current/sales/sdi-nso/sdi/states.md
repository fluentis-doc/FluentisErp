---
title: Statusi dokumenata u Fluentisu
sidebar_position: 5
---

Slanje i prijem elektronskih dokumenata iz ulaznog i izlaznog ciklusa podrazumevaju upravljanje nizom operativnih STATUSA od strane korisnika. Ti statusi definišu tok upravljanja fakturom, od njenog generisanja do slanja u Fluentis Business Hub radi stvarnog prenosa u SdI.

Statusima je moguće upravljati pojedinačno, odnosno u okviru upravljanja jednim dokumentom, ili grupno. Svaki status može omogućiti prelazak na PRETHODNI ili SLEDEĆI status upravljanja. Radnje i upravljanje elektronskim dokumentima mogu podleći operativnim ograničenjima kojima se upravljanje statusima dokumenata može ograničiti samo na unapred određene uloge i/ili korisnike, odgovarajućom konfiguracijom trake menija sa pripadajućim radnjama.

Trenutni propisi koji se odnose na slanje obaveštenja Poreskoj upravi predviđaju da poreski obveznici prijavljuju podatke o transakcijama isporuke robe i pružanja usluga (upravljanje izlaznim ciklusom), kao i o primljenim transakcijama od subjekata koji nisu identifikovani ili nemaju prebivalište, odnosno sedište na teritoriji države. Za to se koristi isti format predviđen za italijanske elektronske fakture.

Dok je za IZDATE dokumente moguće koristiti isti format predviđen za italijanske elektronske fakture, za slanje nabavnih dokumenata inostranih dobavljača u SdI predviđen je poseban format, a potpisivanje tih datoteka je obavezno.

U Fluentisu je generisanje XML datoteke ove vrste moguće nakon računovodstvenog knjiženja primljenog dokumenta, a zatim se u okviru računovodstvenog knjiženja upravlja generisanjem XML datoteke i njenim slanjem u SdI, korišćenjem istih postupaka promene statusa koji su predviđeni za izlazni ciklus. Druga mogućnost je upravljanje datotekama putem funkcije **Elektronsko fakturisanje sa nerezidentnim subjektima**.

## Značenje pojedinačnih statusa

| Status dokumenta | Opis | Moguće radnje |
| :-- | :-- | :-- |
| Nije pregledan | Dokument je generisan, ali još nisu izvršene nikakve radnje povezane sa upravljanjem elektronskim dokumentom. | **Sledeći:** Proveren, Otkazan, Isključen. **Prethodni:** Ručno brisanje dokumenta iz upravljanja. |
| Proveren | Operater je izvršio preliminarne provere dokumenta. | **Sledeći:** Generisan, Otkazan, Isključen. **Prethodni:** Nije pregledan (povratak na početni status dokumenta). |
| Generisan | Kreirana je XML datoteka elektronskog dokumenta. Od tog trenutka moguće je preći na sledeće statuse radi slanja datoteke u Fluentis Business Hub ili preuzeti XML datoteku za eksternu obradu. Dokument u ovom statusu može se knjižiti. | **Sledeći:** Potpisan, Za slanje, Otkazan, Isključen. **Prethodni:** Proveren. |
| Potpisan | Dokument je potpisan izvan sistema sertifikatom u formatu CAdES ili XAdES i ponovo uvezen u Fluentis u novom formatu. | **Sledeći:** Za slanje, Otkazan, Isključen. **Prethodni:** Generisan. |
| Za slanje | Ovaj status, koji se koristi kada je kanal Fluentis Business Hub ispravno konfigurisan, dodaje dokument na spisak dokumenata koje BizLink treba da obradi radi slanja u SdI. **ZA KORISNIKE KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM, OVA PROMENA STATUSA BLOKIRA FAKTURU ZA SVE DALJE RADNJE.** | **Sledeći:** NEMA RUČNIH RADNJI. Status ažurira Fluentis Business Hub. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.** |
| Otkazan | Dokument ne sme da se pošalje krajnjem kupcu, ali i dalje ostaje važeći za potrebe PDV-a. | **Sledeći:** NEMA RUČNIH RADNJI. **Prethodni:** Nije pregledan. |
| Isključen | Dokument je izrađen, ali ne pripada dokumentima koje je potrebno poslati u SdI (npr. interna storno isprava ili dokument za kupca koji nije rezident u Italiji i na kojeg se ne odnosi obaveza elektronskog fakturisanja sa slanjem u SdI). | **Sledeći:** NEMA RUČNIH RADNJI. **Prethodni:** Nije pregledan. |
| Nije povezan (ulazni ciklus) | Dokument je primljen putem usluge Fluentis Business Hub, ali nije povezan ni sa jednom računovodstvenom stavkom. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.** | **Sledeći:** Primljen. |
| Primljen (ulazni ciklus) | Dokument je povezan sa računovodstvenim knjiženjem, nabavnim dokumentom ili dokumentom obračuna naknade. **NIJE DOSTUPNO KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.** | **Prethodni:** Nije povezan. |

Ako se slanje obavlja putem usluge Fluentis Business Hub, nakon što se izrađeni dokument označi statusom „Za slanje”, sledeći statusi koje direktno dodeljuje Fluentis Business Hub mogu biti:

**SLEDEĆI STATUSI NISU DOSTUPNI KORISNICIMA KOJI NISU SKLOPILI UGOVOR O FBH-U SA FLUENTISOM.**

| Status dokumenta | Opis | Moguće radnje | XML obaveštenje iz SdI-ja |
| :-- | :-- | :-- | :-- |
| U Fluentis Business Hub-u | Dokument je primljen u Fluentis Business Hub i čeka preuzimanje od strane SdI-ja. | Potrebno je sačekati odgovor SdI-ja, koji će proveriti datoteku i eventualno je preuzeti. | NE |
| U SdI-ju | Dokument je primljen u SdI-ju. | **Sledeći:** Nije usaglašen, Isporučen. | NE |
| Nije usaglašen | Dokument NIJE prošao formalne provere koje sprovodi SdI i potrebno ga je ponovo izdati. Naknadne promene statusa obavljaju se RUČNO i za njih je odgovoran korisnik. | **Prethodni:** Nije pregledan, Otkazan, Isključen. | DA |
| Isporučen | Dokument je isporučen primaocu. | Ciklus slanja je završen. | DA |
| Nije isporučen | SdI nije uspeo da isporuči dokument primaocu i učiniće ga dostupnim u njegovom zaštićenom korisničkom području (npr. zbog nedostupnosti elektronske adrese za prijem ili zato što ta adresa nije navedena na fakturi). | **Sledeći:** Obaveštenje kupcu. | DA |
| Obaveštenje kupcu | Nakon što SdI nije uspeo da isporuči dokument, kupcu se ručno šalje obaveštenje o fakturi. Ovaj status postavlja se RUČNO i za njega je odgovoran korisnik. | Ciklus slanja je završen. | NE |
| Dokument isporučen (samo za javnu upravu) | SdI je dokument smatrao važećim i nastavlja sa pokušajima isporuke organu javne uprave. | **Sledeći:** Isporučen, Nije isporučen. | NE |
| Odbijen (samo za javnu upravu) | Dokument namenjen javnoj upravi odbio je organ javne uprave. | **Prethodni:** Za pregled. | DA |
| Prihvaćen | Dokument namenjen javnoj upravi prihvatio je organ javne uprave. | Ciklus slanja je završen. | DA |
| Prihvaćen istekom roka | Ako SdI u roku od 15 dana od prijema fakture ne primi nikakvo obaveštenje, SdI šalje obaveštenje o ISTEKU ROKA i pošiljaocu i primaocu. | | DA |

Statusi dokumenata poslatih u Fluentis Business Hub ažuriraju se automatski, bez prikazivanja obaveštenja, putem određenih automatskih postupaka u BizLinku.

U sledećim odeljcima detaljno je opisan svaki status kojim se upravlja.

## Status dokumenta NIJE PREGLEDAN

Prilikom izrade novog prodajnog dokumenta ili računovodstvenog knjiženja nabavke za nerezidentne subjekte, na traci menija, u odeljku **Elektronsko fakturisanje**, predloženi status je „Nije pregledan”, što znači da operater još nije procenio da li dokument treba poslati u SdI.

Nakon unosa i čuvanja dokumenta sa pripadajućim podacima, moguće je promeniti njegov status u jedan od statusa predviđenih za status NIJE PREGLEDAN:

- **Proveren:** dokument je proveren i spreman za obradu u elektronskom obliku.
- **Otkazan:** faktura ne sme da se pošalje u SdI, ali mora da se zadrži kao važeća za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneti dokument ne sme da se pošalje u SdI.

## Status dokumenta PROVEREN

Dokument, odnosno knjiženje sa statusom PROVEREN, operater je potvrdio i može se obraditi u sledećim fazama obrade i slanja u SdI ili se njegov status može vratiti na NIJE PREGLEDAN radi eventualnih izmena ili dopuna.

Sledeći statusi obrade dokumenta za slanje u SdI ili za isključivanje iz slanja mogu biti:

- **Generisan:** izrađuje se XML datoteka za uneti dokument i priprema za slanje.
- **Otkazan:** faktura ne sme da se pošalje u SdI, ali mora da se zadrži kao važeća za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneti dokument ne sme da se pošalje u SdI.

## Status dokumenta GENERISAN

Promena statusa fakture ili računovodstvenih knjiženja u status GENERISAN istovremeno pokreće izradu XML dokumenta u skladu sa tehničkim specifikacijama koje je za odgovarajući tip dokumenta propisala Poreska uprava.

Tokom ove faze sprovode se određene provere prisustva obaveznih podataka potrebnih za popunjavanje dokumenta. Ako ti podaci nisu ispravno uneti u odeljku šifarnika, prikazaće se obaveštenje o grešci koje ukazuje na podatak koji nedostaje.

Faktura, odnosno knjižno odobrenje u statusu GENERISAN dobija i interni status upravljanja **ODŠTAMPAN**, pa je od tog trenutka moguće sprovesti računovodstveno knjiženje dokumenta. Računovodstveno knjiženje u statusu GENERISAN izrađuje odgovarajuću XML datoteku.

Generisana XML datoteka čuva se u sistemu za upravljanje dokumentacijom Fluentisa i uvek je dostupna putem različitih funkcija koje omogućavaju pristup dokumentima, kao i putem funkcije **Registar dokumenata SdI**, koja se nalazi na traci menija različitih funkcija.

XML datoteka u statusu Generisan može se preuzeti i obraditi za slanje pomoću alata izvan sistema Fluentis ili se može poslati u Fluentis Business Hub putem jednog od predviđenih operativnih statusa.

Ako je za kontakt ili preduzeće uključeno upravljanje potpisivanjem elektronskih faktura, među statusima kojima se upravlja dostupan je i status POTPISAN.

Ako upravljanje potpisivanjem nije predviđeno, dostupni statusi su:

- **Proveren:** menjam status dokumenta kako bih ga vratio na PRETHODNI status Proveren.
- **Otkazan:** uneti ili proknjiženi dokument ne sme da se pošalje u SdI, ali mora da se zadrži kao važeći za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneti dokument ne sme da se pošalje u SdI.
- **Za slanje:** dokument se dodaje na spisak dokumenata za slanje u Fluentis Business Hub.
- **Potpisan:** postupak dodeljivanja ovog statusa traži, na prethodno konfigurisanoj lokaciji, potpisanu datoteku koja odgovara XML datoteci generisanoj postupkom. Ovaj status je vidljiv SAMO ako je označena opcija „Elektronsko fakturisanje sa potpisom” u šifarniku kontakta (Podešavanje šifarnika kontakata) ili u konfiguraciji elektronskog fakturisanja preduzeća (Konfiguracija veze sa Fluentis Business Hub-om). Prema važećim propisima, ovaj status je NEOBAVEZAN za prodajne dokumente izdate subjektima sa prebivalištem, odnosno sedištem u Italiji, dok je OBAVEZAN za dokumente izdate subjektima koji nisu rezidenti, nemaju poslovni nastan ili nisu identifikovani u Italiji.

Pre promene statusa u POTPISAN potrebno je potpisati dokumente koji imaju status GENERISAN:

- Ako je polje **Fascikla za izradu datoteka za potpisivanje** ispravno podešeno u **Konfiguraciji elektronskog fakturisanja preduzeća** (Konfiguracija veze sa Fluentis Business Hub-om), Fluentis svaki put kada generiše XML datoteku čuva njenu kopiju na navedenoj lokaciji. Ako polje nije ispravno konfigurisano, XML datoteku moguće je preuzeti putem funkcije **Registar dokumenata SdI**, pomoću radnje **Preuzmi prilog** na traci menija, i sačuvati je u odgovarajućoj fascikli u datotečnom sistemu.

- Potrebno je potpisati datoteku pomoću bilo kog dostupnog softvera za potpisivanje koji omogućava dodavanje digitalnog potpisa u formatu CAdES ili XAdES, u skladu sa tehničkim propisima. Potpisanu datoteku potrebno je sačuvati u fasciklu navedenu u konfiguraciji elektronskog fakturisanja, u polju **Fascikla potpisanih datoteka**.

- Promeniti status dokumenta u POTPISAN. Postupak će automatski pronaći potpisanu datoteku u fascikli navedenoj u prethodnoj tački i preuzeti je u tok obrade sistema Fluentis. Ako se dokument šalje u Fluentis Business Hub, upravo ta preuzeta datoteka biće datoteka koja se šalje u SdI.

## Status dokumenta POTPISAN

Dokument sa statusom POTPISAN moguće je preuzeti i obrađivati izvan sistema Fluentis ili ga poslati u Fluentis Business Hub radi slanja u SdI.

Za preuzimanje potpisanog dokumenta moguće je otvoriti funkciju **Registar dokumenata SdI** i preuzeti ga na panelu **Prilozi** pomoću radnje **Preuzmi prilog** na traci menija ili na panelu **Registar dokumenata SdI** pomoću radnje **Preuzmi sadržaj registra**.

Za nastavak obrade dokumenta moguće je izabrati jedan od ponuđenih statusa:

- **Generisan:** poništava postupak potpisivanja datoteke i vraća XML datoteku u status GENERISAN.
- **Za slanje:** dokument se dodaje na spisak dokumenata za slanje u Fluentis Business Hub.
- **Otkazan:** dokument ili računovodstveno knjiženje ne odnosi se na događaje koje je potrebno poslati u SdI, ali mora da se zadrži kao važeće za računovodstvena knjiženja i potrebe PDV-a.
- **Isključen:** uneti dokument, odnosno računovodstveno knjiženje, ne sme da se pošalje u SdI.

## Status dokumenta OTKAZAN

Korisnik ručno postavlja dokument, odnosno računovodstveno knjiženje, u status OTKAZAN kada je dokument relevantan za potrebe PDV-a i računovodstva, ali ne sme biti uključen u ciklus upravljanja sistemom razmene (Sistema di Interscambio).

Na primer, prodajna faktura iz izlaznog ciklusa sistema Fluentis može primiti obaveštenje o odbacivanju od sistema razmene. Ako je dokument već proknjižen, potrebno je:

- Otkazati poslatu fakturu kako dokument više ne bi bio uključen ni u jedan ciklus slanja.
- Proknjižiti dokument za storno koji važi samo za računovodstvene potrebe, a koji ne sme da se pošalje u SdI i zato mora imati status ISKLJUČEN.
- Izdati novi dokument sa numeracijom koja se poziva na početni dokument i ponovo ga poslati u SdI.

Ako je dokument u statusu Otkazan, ali ga je potrebno ponovo obraditi vraćanjem na početni status, moguće je promeniti njegov status u NIJE PREGLEDAN i nastaviti sa izmenama izvornog dokumenta.

## Status dokumenta ISKLJUČEN

Korisnik ručno postavlja status dokumenta „Isključen”. Ovaj status odnosi se na dokumente koji po svojoj prirodi ne smeju biti uključeni u tok upravljanja elektronskim fakturisanjem za sistem razmene.

Primeri dokumenata sa ovim statusom:

- Interne storno isprave povezane sa fakturama koje je SdI odbacio i koje je potrebno ponovo izdati.
- Dokumenti izdati stranim subjektima, odnosno nerezidentima, za koje se ne namerava upravljati slanjem putem statusa obrade predviđenih za elektronsko fakturisanje u SdI.

Ako je dokument u statusu Otkazan, ali ga je potrebno ponovo obraditi vraćanjem na početni status fakture, moguće je promeniti njegov status u NIJE PREGLEDAN i nastaviti sa izmenama izvornog dokumenta.

## Statusi dokumenta ZA SLANJE i U FLUENTIS BUSINESS HUB-U

Dokumenti generisani u izlaznom ciklusu sistema Fluentis i spremni za slanje u SdI moraju biti označeni statusom ZA SLANJE. Ovaj status, koji se koristi kada je kanal Fluentis Business Hub ispravno konfigurisan, dodaje dokument na spisak dokumenata koje BizLink treba da obradi radi slanja u SdI.

U ovom statusu nisu predviđene promene statusa jer će dokument, nakon dodavanja u BizLinkov „red čekanja za slanje”, biti poslat u Fluentis Business Hub radi prenosa u SdI putem automatskih postupaka koji se izvršavaju u redovnim vremenskim intervalima.

Nakon što se dokument pošalje usluzi Fluentis Business Hub, status se automatski menja u U FLUENTIS BUSINESS HUB-U, a kolone sa podacima o izvršenom prenosu automatski se popunjavaju:

- **SdI status:** sadrži opis statusa dokumenta, pri čemu prikazuje i interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz SdI-ja (pogledajte odeljak STATUSI DOKUMENATA).
- **Naziv datoteke SdI:** naziv datoteke izrađene u trenutku kada je dokument prešao u status GENERISAN. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koja se šalje u SdI.
- **SdI ID:** jedinstveni identifikator koji SdI dodeljuje dokumentu prilikom prijema.
- **Datum prijema u SdI:** datum kada je sistem razmene primio poslati dokument. Taj podatak preuzima se iz obaveštenja o prijemu koje SdI izdaje nakon prijema dokumenta, a pre sprovođenja formalnih provera datoteke.
- **Datum zatvaranja:** datum završetka toka upravljanja (npr. za dokument u statusu Isporučen).
- **Datum poslednjeg događaja:** datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u SdI-ju.

## Status dokumenta U SDI-JU

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Dokument automatski dobija status „U SdI-ju” putem BizLink postupaka u trenutku slanja u SdI, odnosno kada Fluentis Business Hub primi obaveštenje o prijemu, kao u sledećem primeru:

Istovremeno sa evidentiranjem obaveštenja iz SdI-ja, u obrascu **Prodajne fakture** popunjavaju se sledeća polja:

- **SdI ID:** jedinstveni identifikator koji SdI dodeljuje dokumentu prilikom prijema.
- **Datum prijema u SdI:** datum kada je sistem razmene primio poslati dokument. Taj podatak preuzima se iz obaveštenja o prijemu koje SdI izdaje nakon prijema dokumenta, a pre sprovođenja formalnih provera datoteke.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, na panelu **Registar dokumenata SdI**, uz prelaz **Sistem razmene**, moguće je pregledati obaveštenje o prijemu.

U ovom statusu nije moguće ručno menjati datoteku. Potrebno je sačekati obaveštenje o rezultatu provere iz SdI-ja, koje može biti **Nije usaglašen** ako dokument nije prošao formalne provere ili **Isporučen** ako je prošao predviđene provere i SdI je započeo postupke isporuke.

## Status dokumenta NIJE USAGLAŠEN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Dokumenti označeni statusom NIJE USAGLAŠEN odbačeni su u sistemu razmene nakon formalnih provera sprovedenih prilikom prijema. U tom slučaju obaveštenje o odbacivanju sadrži i razlog odbijanja.

Ako dokument još nije proknjižen, potrebno ga je ponovo izdati sa istim brojem i istim datumom, uz ispravku odgovarajućeg podatka, u roku od 5 KALENDARSKIH dana od datuma odbacivanja.

U tabeli obrasca **Prodajne fakture**, za dokument koji nije usaglašen ažurira se kolona **Datum poslednjeg događaja** datumom i vremenom prijema obaveštenja o odbacivanju iz SdI-ja.

Otvaranjem registra dokumenata SdI izabranog dokumenta, na panelu **Registar dokumenata SdI**, u redu koji odgovara prelazu **Dokument nije usaglašen**, prikazuju se datum i vreme događaja i obaveštenje o odbacivanju sa navedenim razlogom.

Moguće je ručno promeniti status dokumenta, u zavisnosti od radnji koje se nameravaju preduzeti nakon odbacivanja:

- **NIJE PREGLEDAN:** označavanjem dokumenta ovim statusom vraća se u početno stanje, pre obrade. Ovaj status omogućava potrebne izmene dokumenta radi ispravljanja nepravilnosti koje je prijavio SdI. U tom slučaju dokument je potrebno ponovo izdati sa istim brojem i datumom.

  **NAPOMENA:** Ako je dokument već proknjižen, oznaka ODŠTAMPAN na dokumentu neće se automatski ukloniti. Pre bilo kakve izmene zaglavlja ili tela dokumenta potrebno je izbrisati povezano računovodstveno knjiženje. Ako se izmena odnosi na šifarnik kupca (npr. pogrešna šifra primaoca), nije potrebno brisati računovodstveno knjiženje, već je dovoljno izmeniti podatke u šifarniku i ponovo generisati XML datoteku.

- **OTKAZAN/ISKLJUČEN:** dokument se otkazuje, nakon čega se izdaje interna isprava za promenu kojom se usklađuje računovodstveno stanje, a zatim se dokument označava kao ISKLJUČEN.

## Status dokumenta ISPORUČEN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Kada SdI uspešno isporuči dokument primaocu, odnosno naručiocu, pošiljaocu, odnosno izdavaocu, izdaje potvrdu o isporuci koja sadrži datum i vreme isporuke krajnjem primaocu.

U obrascu za pregled **Prodajne fakture**, polje **Datum poslednjeg događaja** prikazuje datum i vreme potvrde o isporuci koju je primio SdI.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, na panelu **Registar dokumenata SdI**, uz prelaz **Dokument isporučen**, moguće je pregledati obaveštenje o isporuci.

U ovom statusu nije moguće izvršiti nikakve izmene dokumenta i tok upravljanja smatra se završenim. **DATUM ZATVARANJA SE NE POPUNJAVA.**

## Status dokumenta NIJE ISPORUČEN

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Ako SdI ne uspe da isporuči dokument, na primer zbog nedostupnosti elektronske adrese za prijem ili zato što adresa nije navedena na fakturi (šifra primaoca 0000000), SdI:

- Šalje prodavcu, odnosno pružaocu usluge, obaveštenje o neuspešnoj isporuci sa navedenim razlogom.
- Čini fakturu dostupnom kupcu, odnosno naručiocu, u njegovom zaštićenom korisničkom području ili, u slučaju fizičkog lica, u posebnom zaštićenom području na veb-sajtu Poreske uprave.

U takvim slučajevima prodavac, odnosno pružalac usluge, mora da obavesti kupca o neuspešnoj isporuci i dostupnosti fakture u njegovom zaštićenom korisničkom području, počevši od datuma „stavljanja na raspolaganje” koji je odredio SdI.

U obrascu za pregled **Prodajne fakture**, polje **Datum poslednjeg događaja** prikazuje datum i vreme potvrde.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, na panelu **Registar dokumenata SdI**, uz prelaz **Neuspešna isporuka**, moguće je pregledati potvrdu o neuspešnoj isporuci, kao i datum i vreme obaveštenja.

Kada se dokument nalazi u statusu NIJE ISPORUČEN, moguće je promeniti njegov status u OBAVEŠTENJE KUPCU i tako evidentirati trenutak kada je operater obavestio kupca primaoca o izdavanju dokumenta, uz napomenu da SdI nije uspeo da izvrši automatsku isporuku.

## Status dokumenta OBAVEŠTENJE KUPCU

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Slanje određenih dokumenata u SdI možda neće biti uspešno završeno jer SdI ne može da identifikuje primaoca dokumenta ili je dokument namenjen krajnjem potrošaču.

U tim slučajevima SdI šalje obaveštenje o neuspešnoj isporuci, a kupac, odnosno naručilac, mora da dostavi dokument krajnjem primaocu na neki drugi način, izvan sistema SdI.

Kada se Fluentisovi dokumenti nalaze u statusu „Nije isporučen”, operater može odlučiti da pošalje dokument krajnjem primaocu drugim putem, a zatim da označi dokument statusom OBAVEŠTENJE KUPCU.

Dokumente u ovom statusu više nije moguće menjati, a kolona **Datum poslednjeg događaja** prikazuje datum kada je izvršena radnja obaveštavanja.

Otvaranjem registra dokumenata SdI koji odgovara dokumentu, na panelu **Registar dokumenata SdI**, uz prelaz **Ručno obaveštavanje kupca**, moguće je pregledati korisnika koji je izvršio radnju, kao i datum i vreme njenog izvršenja.

Ciklus upravljanja dokumentom je završen.

## Statusi dokumenta NIJE POVEZAN i PRIMLJEN

**OVI STATUSI NISU DOSTUPNI KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Statusi dokumenta POVEZAN i PRIMLJEN koriste se samo za ulazni ciklus nabavnih dokumenata od subjekata sa prebivalištem, odnosno sedištem ili identifikacijom na teritoriji Italije.

Status označava dokumente koje je preuzela usluga Fluentis Business Hub, ali koji još nisu povezani (NIJE POVEZAN) sa računovodstvenim knjiženjem, nabavnim dokumentom proknjiženim u odeljku **Nabavka** sistema Fluentis ili dokumentom obračuna naknade.

Drugi slučaj odnosi se na XML datoteke nabavnih dokumenata koje su povezane sa računovodstvenim događajem ili dokumentom.

## Status dokumenta ODBIJEN (samo za fakturisanje javne uprave)

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Status dokumenta ODBIJEN odnosi se na dokument namenjen javnoj upravi koji ona nije prihvatila. Status se preuzima direktno iz Fluentis Business Hub-a ako je organ javne uprave kao primalac odlučio da pošalje obaveštenje o odbijanju fakture putem kanala SdI.

Organi javne uprave mogu izabrati i druge kanale prenosa, različite od SdI-ja. U tim slučajevima faktura sa statusom ODBIJEN može se postaviti u status OTKAZAN, ISKLJUČEN ili ZA PREGLED.

U slučaju odbijanja fakture, organ javne uprave kao primalac može:

- Zatražiti od pošiljaoca ponovno izdavanje iste fakture sa ispravljenim podacima, uz isti broj i isti datum, ako odbijena faktura nije proknjižena.

ILI

- Zatražiti izdavanje knjižnog odobrenja i nove fakture ako je prethodna faktura već proknjižena.

Napominje se da je slanje obaveštenja o odbijanju od strane organa javne uprave putem sistema razmene opcionalno.

## Status dokumenta ODOBREN (samo za fakturisanje javne uprave)

**OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU SKLOPILI UGOVOR O ELEKTRONSKOM FAKTURISANJU SA FLUENTISOM.**

Status dokumenta ODOBREN odnosi se na dokument namenjen javnoj upravi koji je ona prihvatila. Status se preuzima direktno iz Fluentis Business Hub-a kada organ javne uprave kao primalac prihvati poslatu XML datoteku.

U tom slučaju tok se smatra završenim, a datum zatvaranja popunjava se u svojstvima dokumenta.

## Status dokumenta PRIHVAĆEN ISTEKOM ROKA (samo za fakturisanje javne uprave)

Dokumenti elektronskog fakturisanja poslati u SdI i namenjeni javnoj upravi mogu od SdI-ja dobiti status PRIHVAĆEN ISTEKOM ROKA.

Ovaj status odnosi se na slučaj u kojem je SdI isporučio fakturu organu javne uprave kao primaocu, a on u roku od 15 dana od prijema nije poslao nikakvo obaveštenje SdI-ju, ni o prihvatanju ni o odbijanju fakture.

U tom slučaju SdI šalje obaveštenje o ISTEKU ROKA i pošiljaocu i primaocu.

Svrha ovog obaveštenja je da informiše obe strane da SdI smatra postupak povezan sa tom fakturom završenim. Obaveštenje o isteku roka potvrđuje da je sistem razmene uredno završio obradu fakture na koju se obaveštenje odnosi, odnosno njen prijem i isporuku.

Nakon tog obaveštenja SdI će odbaciti fakturu ako se ponovo pošalje, kao i svako naredno obaveštenje koje se odnosi na nju.

Obaveštenje o isteku roka nema nikakve posledice na proveru ispravnosti fakture ni na njeno dalje postupanje od strane zainteresovanih strana. To znači da organ javne uprave i dalje može odlučiti da odbije isporučenu fakturu.

Status se preuzima direktno iz Fluentis Business Hub-a i u tom slučaju ciklus upravljanja dokumentom smatra se završenim.