---
title: Stanja dokumenata u Fluentisu  
sidebar_position: 5
---

Slanje i primanje elektroničkih dokumenata aktivnog i pasivnog ciklusa podrazumijeva upravljanje od strane korisnika nizom OPERATIVNIH STANJA koja definiraju tijek upravljanja dokumentom računa, od njegove generacije do slanja u Fluentis Business Hub za stvarni prijenos u SdI.  
Stanja se mogu upravljati pojedinačno, unutar upravljanja jednim dokumentom, ili u masovnom načinu; svako stanje može predvidjeti prijelaz na PRETHODNO stanje upravljanja ili na SLJEDEĆE. Akcije i upravljanje elektroničkim dokumentima mogu biti podložni operativnim ograničenjima koja mogu rezervirati upravljanje stanjima dokumenata samo za unaprijed definirane uloge i/ili korisnike, pravilno konfigurirajući izbornik trake akcija.  
Trenutna regulativa vezana uz komunikacije koje treba poslati Poreznoj upravi predviđa da obveznici za potrebe PDV-a komuniciraju podatke vezane uz operacije prijenosa dobara/usluga koje su izvršene (Upravljanje aktivnim ciklusom) i PRIMLJENE čak i od neidentificiranih/neporeznih subjekata na teritoriju države koristeći isti obrazac predviđen za talijanske elektroničke račune. Ako je za EMITIRANE dokumente moguće koristiti isti obrazac predviđen za talijanske elektroničke račune, za slanje dokumenata o nabavi od stranih dobavljača u SdI predviđen je poseban obrazac, a potpis za te datoteke je obavezan.  
U Fluentisu je generacija XML datoteke ove vrste moguća nakon knjiženja računovodstvenog dokumenta koji je primljen i naknadnog upravljanja, unutar računovodstvene evidencije, generacijom XML datoteke i njenim slanjem u SdI s istim operacijama promjene stanja predviđenim za aktivni ciklus, ili putem upravljanja datotekama iz funkcije Elektroničko fakturiranje s ne-rezidentnim subjektima.
       
Značenje različitih stanja u detaljima:

| Status dokumenta | Opis | Moguće radnje |
| :-- | :-- | :-- | 
| Ne pregledano | Dokument je generiran i još nisu poduzete radnje vezane uz upravljanje elektroničkim dokumentom | *Sljedeće*: Pregledano, Poništeno, Isključeno. *Prethodno*: Ručno brisanje dokumenta iz sustava | 
| Kontrolirano | Dokument je podvrgnut preliminarnim kontrolama od strane operatera | *Sljedeće*: Generirano, Otkazano, Isključeno. *Prethodne*: Nije pregledano (vraća se na početno stanje dokumenta) | 
| Generirano | Stvoren je XML datoteka vezana uz elektronički dokument. Od ovog trenutka moguće je nastaviti s sljedećim stanjima za slanje datoteke na Fluentis Business Hub ili preuzeti XML datoteku za vanjske uprave. Dokument u ovom stanju može se knjižiti | *Sljedeće*: Potpisano, Za slanje, Otkazano, Isključeno. *Prethodne*: Kontrolirano | 
| Potpisano | Dokument je vanjski potpisan s Cadeso Xades potpisnim certifikatom i ponovno uvezen u Fluentis u novom formatu | *Sljedeće*: Za slanje, Otkazano, Isključeno. *Prethodne*: Generirano | 
| Za slanje | Ovo stanje, koje se koristi kada je kanal Fluentis Business Hub ispravno konfiguriran, dodaje dokument na popis dokumenata koje BizLink treba obraditi za slanje Sdi-u. ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTIS OVA PROMJENA STANJA BLOKIRA RAČUN NA BILO KOJU DRUGU AKCIJU | *Sljedeće*: NEMA RUČNE AKCIJE. Stanje se ažurira od Fluentis Business Hub. NIJE UPRAVLJANO ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTIS | 
| Otkazano | Dokument se ne smije slati krajnjem kupcu, ali ostaje valjan za potrebe PDV-a | *Sljedeće*: NEMA RUČNE AKCIJE. *Prethodne*: Nije pregledano | 
| Isključeno | Dokument je stvoren, ali ne spada među one koji se šalju Sdi-u (npr. interna nota o povratu ili kupac koji nije rezident u Italiji i nije podložan elektroničkom fakturiranju s slanjem Sdi-u) | *Sljedeće*: NEMA RUČNE AKCIJE. *Prethodne*: Nije pregledano | 
| Neusklađeno (pasivni ciklus) | Dokument je primljen od usluge Fluentis Business Hub i nije usklađen s nijednim računovodstvenim elementom (NIJE UPRAVLJANO ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTIS) | *Sljedeće*: Primljeno | 
| Primljeno (pasivni ciklus) | Dokument je usklađen s računovodstvenim zapisom/dokumentom o kupnji/dokumentom o naknadi (NIJE UPRAVLJANO ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTIS) | *Prethodne*: Neusklađeno |

Ako se slanje vrši putem Fluentis Business Huba, nakon što se označi stvoreni dokument sa stanjem “Za slanje”, sljedeća stanja koja se izravno preuzimaju iz Fluentis Business Huba mogu biti:          

OVI STANJE NISU UPRAVLJANA ZA ONE KOJI NISU POTPISALI FBH UGOVOR S FLUENTIS 


| Status dokumenta | Opis | Moguće akcije | XML obavijest od SDI |
| :-- | :-- | :-- | :-- |
| U Fluentis Business Hub | Dokument je primljen u Fluentis Business Hub i čeka preuzimanje od strane SdI | Potrebno je čekati odgovor od SdI koji će provjeriti i eventualno preuzeti datoteku | NE |
| U SDI | Dokument je primljen od SdI | *Sljedeće*: Neispravno, Izdano | NE |
| Neispravno | Dokument NIJE prošao formalne provjere predviđene od strane SdI i mora biti ponovno izdan. Sljedeće promjene statusa su MANUALNE i na teret korisnika | *Prethodni*: Neispitano, Otkazano, Isključeno | DA |
| Isporučeno | Dokument je isporučen primatelju | Ciklus slanja je završen | DA |
| Neuspjela isporuka | SdI nije uspio isporučiti dokument primatelju i stavit će ga na raspolaganje u svom rezerviranom području (npr. zbog nedostupnosti telematičke adrese za primanje ili zato što ta adresa nije navedena na računu) | *Sljedeće*: Obavijest klijentu | DA |
| Obavijest klijentu | Zbog neuspjele isporuke od strane SdI, korisniku računa se šalje ručna obavijest. Ovaj status je MANUALAN i na teret korisnika | Ciklus slanja je završen | NE | 
| Izdani dokument (Samo PA) | Dokument je od strane SdI smatran valjanim i nastavlja s pokušajima isporuke prema PA | *Sljedeće*: Isporučeno, Neuspjela isporuka | NE | 
| Odbijen (samo PA) | Dokument upućen PA je odbijen od strane Javne uprave | *Prethodni*: Na ispitivanju | DA |
| Prihvaćeno | Dokument upućen PA je prihvaćen od strane Javne uprave | Ciklus slanja je završen | DA |
| Prihvaćeno zbog isteka | Ako u roku od 15 dana od primitka računa SdI ne primi nikakvu komunikaciju, SdI šalje obavijest o ISTEKU ROKA i pošiljatelju i primatelju | | DA |

Stanje dokumenata poslanih u Fluentis Business Hub ažurira se tiho putem nekih automatskih procedura predviđenih u BizLink. U sljedećim odlomcima opisuje se detalj svake upravljane države.

## Status dokumenta NIJE PREGLEDANO

U trenutku kreiranja novog dokumenta prodaje ili knjiženja računovodstvenog troška za nerezidente, u ribbon izborniku, u odjeljku Elektroničko fakturiranje, predloženo stanje je “Nije pregledano”, što znači da još nije ocijenjeno od strane operatera za slanje u SdI.  
Nakon što se dokument unese i spremi s pripadajućim informacijama, moguće je nastaviti mijenjajući stanje dokumenta u jedno od onih predviđenih za stanje NISU PREGLEDANO, odnosno:  
- *Provjereno*: verificirano i spremno za upravljanje u elektroničkom formatu  
- *Otkazano*: račun se ne smije slati u SdI, ali se mora zadržati kao važeći za knjiženje u računovodstvu i PDV-u  
- *Isključeno*: uneseni dokument se ne smije slati u SdI

## Status dokumenta PROVJERENO

Dokument/registracija u stanju PROVJERENO je validirana od strane operatera i može se obraditi za sljedeće faze obrade i slanje u SdI, ili se može vratiti u stanje ZA PREGLED za eventualne izmjene ili dopune.  
Sljedeća stanja obrade dokumenta za slanje u SdI ili za isključenje od slanja mogu biti:  
- *Generirana*: stvara se XML datoteka vezana uz uneseni dokument i priprema se za slanje  
- *Poništena*: račun se ne smije slati u SdI, ali se mora zadržati kao valjan za evidenciju u svrhu računovodstva i PDV-a  
- *Isključena*: uneseni dokument se ne smije slati u SdI

## Status dokumenta GENERIRANO

Prebacivanje dokumenata faktura ili računovodstvenih evidencija u stanje GENERIRANO podrazumijeva istovremeno stvaranje XML dokumenta prema tehničkim specifikacijama koje je postavila Porezna uprava za tip dokumenta koji se obrađuje. Tijekom ove faze provode se neki kontrolni postupci vezani uz prisutnost obaveznih informacija za ispunjavanje, a ako u anagrafskoj sekciji te informacije nisu ispravno unesene, bit će izdana obavijest o grešci vezana uz nedostajući podatak.  
Dokument faktura/nota o kreditu... u stanju GENERIRANO također stječe interno stanje upravljanja ISPISANO i stoga je od ovog trenutka moguće nastaviti s knjiženjem dokumenta. Računovodstveni zapis u stanju GENERIRANO stvara odgovarajući XML datoteku.  
Generirana XML datoteka se sprema u dokumentacijski sustav Fluentis i stoga je uvijek dostupna putem raznih funkcionalnosti koje omogućuju pristup i putem funkcije **Registar dokumenata Sdi** koja je predviđena u Ribbon izborniku raznih funkcionalnosti.  
XML datoteka u stanju Generirano može se preuzeti i upravljati za slanje s vanjskim alatima izvan Fluentis-a ili se može poslati u Fluentis Business Hub putem upravljanja jednim od predviđenih operativnih stanja.  
Ako je za kontakt ili tvrtku postavljena uprava potpisa na dokumentima elektroničkog fakturiranja, u upravljanim stanjima predviđeno je i stanje POTPISANO:  
Ako, s druge strane, nije predviđena uprava potpisa, upravljana stanja su:  
- *Kontrolirano*: mijenjam stanje dokumenta kako bih se vratio u PRETHODNO stanje kontrolirano  
- *Otkazano*: dokument unesen ili registriran ne treba se slati Sdi-ju, ali ga treba zadržati kao valjanog za računovodstvene i PDV evidencije  
- *Isključeno*: uneseni dokument ne treba se slati Sdi-ju  
- *Za slanje*: dokument se unosi u popis dokumenata koji se šalju u Fluentis Business Hub  
- *Potpisano*: tijek dodjele ovog stanja traži, u prethodno konfiguriranoj stazi, odgovarajuću potpisanu datoteku koja odgovara generiranoj XML datoteci. Ovo stanje je vidljivo SAMO ako je odabran checkbox “Potpisana elektronička faktura” u anagrafskoj kartici kontakta ili u Konfiguracijama Elektroničkog fakturiranja tvrtke (Konfiguracija veze s Fluentis Business Hub) i predstavlja, prema važećim propisima, OBAVEZNO stanje za dokumente prodaje izdane prema subjektima koji su rezidenti u Italiji, dok je OBAVEZNO za dokumente izdane prema subjektima koji nisu rezidenti, nisu uspostavljeni, ili nisu identificirani u Italiji.  
Prije nego što nastavite s promjenom stanja u POTPISANO, potrebno je provesti potpisivanje dokumenata u stanju GENERIRANO:  
> - ako je ispravno postavljeno polje *Mapa za kreiranje datoteka za potpisivanje* u *Konfiguraciji elektroničkog fakturiranja tvrtke* (Konfiguracija veze s Fluentis Business Hub), svaki put kada se generira XML datoteka, Fluentis sprema kopiju na označenoj stazi. Ako polje nije ispravno konfigurirano, moguće je preuzeti XML datoteku putem funkcije *Registar dokumenata SdI* putem akcije Preuzmi privitak iz trake izbornika i spremiti datoteku u prikladnu mapu na datotečnom sustavu.  
> - nastaviti s potpisivanjem datoteke koristeći bilo koji softver za potpisivanje koji omogućuje postavljanje digitalnog potpisa u Cades ili Xades formatu (kako je propisano tehničkim specifikacijama) i paziti da se potpisana datoteka sprema u mapu navedenu u Konfiguracijama elektroničkog fakturiranja u polju Mapa potpisanih datoteka.  
> - Promijeniti stanje dokumenta u POTPISANO: automatski će postupak potražiti potpisanu datoteku u mapi navedeno u prethodnoj točki i uključiti je u proceduralni tijek Fluentis-a. U slučaju slanja u Fluentis Business Hub, BIT će OVA datoteka koja je uključena predmet prijenosa Sdi-ju.

## Status dokumenta POTPISANO

Dokument u stanju POTVRĐENO može se preuzeti i upravljati izvan Fluentis-a, ili poslati na Fluentis Business Hub za slanje u SdI.  
Za preuzimanje potpisanog dokumenta moguće je pristupiti funkciji “Registar dokumenata SdI” i izvršiti preuzimanje u panelu Prilozi putem akcije “Preuzmi prilog” iz izbornika trake ili iz panela Registar dokumenata SdI putem akcije “Preuzmi sadržaj registra”. 
Za nastavak upravljanja dokumentom moguće je odabrati jedno od predloženih stanja:  
- *Generirano*: poništava operaciju potpisivanja datoteke i vraća se u stanje GENERIRANO datoteke XML  
- *Za slanje*: dokument se dodaje na popis dokumenata koji se šalju na Fluentis Business Hub  
- *Poništeno*: dokument ili računovodstveni zapis ne odnose se na događaje koji se šalju u SdI, ali moraju ostati važeći za računovodstvene i PDV evidencije  
- *Isključeno*: dokument/računovodstveni zapis ne smije biti poslan u SdI

## Status dokumenta OTKAZANO

Dokument/račun u stanju OTKAZANO postavlja se ručno od strane korisnika kada je dokument relevantan za PDV i računovodstvo, ali ne treba biti uključen u ciklus upravljanja Sustavom razmjene: primjer bi mogla biti faktura izdana iz aktivnog ciklusa Fluentis koja prima obavijest o Odbijanju od Sustava razmjene, te ako je dokument već unesen u računovodstvo, potrebno je postupiti s:  
- otkazivanjem poslane fakture, kako bi se dokument više ne uključivao u bilo koji ciklus slanja  
- registracijom važećeg dokumenta za povrat koji će se koristiti isključivo u računovodstvene svrhe, koji se ne smije slati SdI i koji će stoga imati status ISKLJUČEN  
- izdavanjem novog dokumenta s brojem koji se odnosi na izvorni, koji će se ponovno poslati SdI  

Ako se dokument nalazi u stanju OTKAZANO, ali je potrebno ponovno upravljati dokumentom vraćajući ga u izvorno stanje, moguće je promijeniti njegov status u NEISPITANO i nastaviti s izmjenama na izvornom dokumentu.

## Status dokumenta ISKLJUČENO

Stanje dokumenta “Isključeno” postavlja se ručno od strane korisnika i odnosi se na dokumente koji, zbog svoje prirode, ne trebaju ulaziti u tok upravljanja elektroničkim fakturiranjem za Sustav razmjene. Neki primjeri dokumenata u ovom stanju su:  
- Unutarnje ispravne napomene vezane uz dokumente faktura koji su odbijeni od strane SdI i koji se moraju ponovno izdati.  
- Dokumenti izdani prema stranim/neporeznim subjektima za koje se ne planira upravljati slanjem putem predviđenih stanja obrade za elektroničko fakturiranje prema SdI.  

Ako se dokument nalazi u stanju Otkazano, ali je potrebno ponovno upravljati dokumentom vraćanjem na početno stanje fakture, moguće je promijeniti njegovo stanje u NISU PREGLEDANI i nastaviti s izmjenama na originalnom dokumentu.

## Status dokumenta ZA SLANJE i U FLUENTIS BUSINESS HUB-U

Dokumenti generirani iz aktivnog ciklusa Fluentis i spremni za slanje SdI-u moraju biti označeni statusom ZA SLANJE: ovaj status, koji se koristi u slučaju da je kanal Fluentis Business Hub ispravno konfiguriran, dodaje dokument na popis dokumenata koje BizLink treba obraditi za slanje SdI-u.  
Nema predviđenih promjena statusa u ovom stanju jer će dokument, smješten u "red za slanje" BizLink-a, biti poslan Fluentis Business Hub-u za prijenos SdI-u, putem automatskih procesa koji se izvršavaju u redovitim vremenskim intervalima.  
Jednom kada se dokument pošalje usluzi Fluentis Business Hub, status se automatski mijenja u*U FLUENTIS BUSINESS HUB i automatski se popunjavaju kolone vezane uz informacije o izvršenom prijenosu:  
- *Status SdI*: sadrži opis statusa dokumenta, prikazujući kako unutarnji status upravljanja Fluentis-a, tako i status koji je prijavio Fluentis Business Hub i koji je izravno preuzet od SdI-a (vidi paragraf STATUS DOKUMENATA).  
- *Naziv datoteke SdI*: naziv datoteke koja se stvara u trenutku kada dokument pređe u status GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI-u (Naziv datoteke).  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema.  
- *Datum prijema Sdi*: datum kada je sustav razmjene primio dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izda nakon prijema pošiljke i prije nego što se nastavi s formalnim provjerama datoteke.  
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument *Isporučeno*).  
- *Datum posljednjeg događaja*: datum posljednje promjene statusa koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI-u.

## Status dokumenta U SDI

OVO STANJE NIJE DOSTUPNO KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTIS-OM     

Dokument se automatski označava od strane BizLink procesa sa statusom “U SDI” u trenutku kada je došlo do otpreme u SdI, a obavijest o prijemu je stigla u Fluentis Business Hub, kao u sljedećem primjeru:  
Istovremeno s registracijom obavijesti iz SdI, popunjavaju se kolone obrasca *Fakture prodaje* s poljima:  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema  
- *Datum prijema Sdi*: datum kada je sustav razmjene primio dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izdaje nakon prijema otpreme i prije nego što se pristupi formalnim provjerama datoteke.  

Pristupom Registru dokumenata SdI koji odgovara dokumentu, u panelu “Registar dokumenata Sdi” u vezi s *Transakcijom Sustava razmjene* moguće je pregledati obavijest o prijemu.  
U ovom statusu nije moguće izvršiti ručnu izmjenu datoteke, već će biti potrebno pričekati obavijest o ishodu od SdI koja može biti *Neusklađena* u slučaju da formalne provjere nisu prošle, ili *Izdana* u slučaju da su predviđene provjere prošle, te SdI započinje postupke isporuke.

## Status dokumenta NEUSKLAĐENO

OVO STANJE NIJE DOSTUPNO KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTIS-OM     

Dokumenti označeni statusom NEKONFORMAN su odbačeni iz sustava razmjene nakon formalnih provjera izvršenih prilikom prijema. U ovom slučaju, obavijest o odbijanju također sadrži razlog odbijanja, a dokument, ako još nije knjižen, mora biti ponovo izdan s istim brojem i istim datumom uz odgovarajuću ispravku informacija unutar 5 RADA dana od datuma odbijanja.  
U mreži obrasca Faktura prodaje, u odnosu na nekonformni dokument, ažurira se kolona Datum posljednjeg događaja s datumom i vremenom obavijesti o odbijanju primljenom od SdI.

Pristupanjem Registru dokumenata SdI odabranog dokumenta, u panelu Registar dokumenata SdI prikazana je, u retku koji odgovara Transiciji nekonformnog dokumenta, datum i vrijeme događaja, a obavijest o odbijanju s razlogom se također prikazuje.  
Moguće je ručno promijeniti status dokumenta ovisno o radnjama koje se planiraju poduzeti nakon odbijanja:  
- NEISPITANO: označavanjem dokumenta s ovim statusom, namjera je vratiti dokument u prvotno stanje prije obrade. U stvari, ovaj status omogućuje potrebne izmjene dokumenta kako bi se ispravile oznake koje je naveo SdI. U ovom slučaju, dokument mora biti ponovo izdan s istim brojem i datumom. *N.B. ako je dokument već knjižen, oznaka OTISNUTO  na dokumentu NEĆE se automatski ukloniti, ali je potrebno ukloniti povezanu računovodstvenu evidenciju prije nego što se mogu izvršiti bilo kakve izmjene u zaglavlju ili tijelu dokumenta. Ako se izmjena odnosi na karton kupca (npr. pogrešan kod primatelja), neće biti potrebno uklanjati računovodstvenu evidenciju, već će biti dovoljno intervenirati na informacijama iz kartona i regenerirati XML datoteku.*  
- OTKAZANO/ISKLJUČENO: dokument se otkazuje i stoga će biti izdana interna ispravna nota kako bi se prilagodila računovodstvena situacija, a zatim će biti označen kao ISKLJUČEN.   

## Status dokumenta ISPORUČENO

OVO STANJE NIJE UPRAVLJENO ZA ONE KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM   

Kada SdI uspješno izvrši dostavu dokumenta primatelju (kupcu/naručitelju), izdavatelju dostavlja potvrdu o isporuci koja sadržava datum i vrijeme isporuke krajnjem primatelju.
U formi Pregled izlaznih računa, polje Datum posljednjeg događaja prikazuje datum i vrijeme potvrde o isporuci koju je SdI zaprimio.    
Pristupom Registru SdI dokumenata koji se odnosi na taj dokument, u panelu „Registar SdI dokumenata”, uz stavku Prijelaz – Dokument isporučen, moguće je pregledati obavijest o isporuci.
U ovom statusu nije moguće izvršiti nikakvu radnju na dokumentu i smatra se da je tijek obrade dovršen. DATUM ZATVARANJA SE NE PŠOPUNJAVA. 

## Status dokumenta NEUSPJELA ISPORUKA
 
OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM.             

Ako SdI ne uspije isporučiti dokument, primjerice zbog nedostupnosti telematske adrese za primanje ili zato što adresa nije navedena na računu (kod primatelja 0000000), SdI:  
- šalje dobavljaču/izdavatelju obavijest o neuspjeloj isporuci s navedenim razlogom  
- stavlja račun na raspolaganje primatelju u njegovoj osobnoj zoni, odnosno — ako je riječ o privatnoj osobi — u posebnoj zaštićenoj zoni na web-stranici Porezne uprave (Agenzia delle Entrate)

U takvim slučajevima dobavljač/izdavatelj mora obavijestiti kupca o neuspjeloj isporuci i o tome da je račun dostupan u njegovoj osobnoj zoni, počevši od datuma „stavljanja na raspolaganje” koji definira SdI.
Na kartici Pregled izlaznih računa, polje Datum posljednjeg događaja prikazuje datum i vrijeme zaprimljene obavijesti.         

Pristupom Registru SdI dokumenata povezanom s dokumentom, u panelu „Registar SdI dokumenata“, uz stavku Prijelaz – Neuspjela isporuka, moguće je vidjeti potvrdu o neuspjeloj isporuci i datum/vrijeme obavijesti.           
Kada je dokument u statusu NEUSPJELA ISPORUKA, moguće je promijeniti status u OBAVIJEST KLIJENTU, čime se evidentira trenutak kada je operater obavijestio klijenta o izdavanju dokumenta i nemogućnosti automatske dostave putem SdI-a.  

## Status dokumenta OBAVIJEST KLIJENTU  

OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM.         

Slanje nekih dokumenata prema SdI-ju može završiti neuspješno jer SdI ne uspije identificirati primatelja dokumenta ili je dokument namijenjen krajnjem potrošaču.
U tim slučajevima SdI izdaje obavijest o neuspjeloj isporuci, a kupac/naručitelj mora dokument dostaviti krajnjem primatelju drugim kanalima, izvan sustava SdI.
Kada se dokumenti u Fluentisu nalaze u statusu Neuspjela isporuka, operater može odlučiti poslati dokument krajnjem primatelju drugim načinom te potom označiti dokument statusom OBAVIJEST KLIJENTU.
Dokumenti u ovom statusu više se ne mogu mijenjati, a u stupcu Datum posljednjeg događaja prikazuje se datum kada je obavljena radnja obavještavanja.
Pristupom Registru SdI dokumenata povezanom s dokumentom, u panelu „Registar SdI dokumenata“, uz stavku Prijelaz – Ručna obavijest klijentu, moguće je vidjeti koji je korisnik izvršio operaciju te datum i vrijeme njezina izvođenja.
Tijek obrade dokumenta ovim statusom smatra se završenim.

## Status dokumenta NEPOVEZANO i ZAPRIMLJENO

OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM.          

Statusi NEPOVEZANO i ZAPRIMLJENO koriste se isključivo za ulazne dokumente – račune dobavljača – koje izdaju subjekti sa sjedištem ili identifikacijom na teritoriju Republike Italije.  
Status označava dokumente koje je preuzeo servis Fluentis Business Hub, ali još nisu povezani (NEPOVEZANO) s računovodstvenim knjiženjem, niti s dokumentom nabave evidentiranim u sekciji Nabava u Fluentisu, niti s obračunom naknade.  
U drugim slučajevima riječ je o XML datotekama nabave koje su već povezane s računovodstvenim događajem ili dokumentom.  

## Status dokumenta ODBIJENO (samo za PA fakturiranje)

OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM.      

Status ODBIJENO odnosi se na dokument namijenjen javnoj upravi (PA) koji ta uprava nije prihvatila.
Status se preuzima izravno u Fluentis Business Hubu kada primajuća ustanova odluči priopćiti odbijanje računa putem SdI kanala.
Budući da javne ustanove imaju mogućnost korištenja i drugih kanala dostave osim SdI-ja, u takvim slučajevima račun u statusu ODBIJENO može biti označen kao PONIŠTENO, ISKLJUČENO ili ZA PREGLED.

U tim slučajevima, u slučaju odbijanja računa, javna uprava koja je primatelj može neovisno:
- zatražiti od pošiljatelja ponovno izdavanje istog računa, ispravljenog, s istim brojem i istim datumom, pri čemu se odbijeni račun ne knjiži, ILI  
- zatražiti izdavanje storno-dokumenta i izdavanje novog računa, ako je prethodni već knjižen.          

Treba naglasiti da je slanje obavijesti o odbijanju putem Sistema di Interscambio (SdI) mogućnost, a ne obveza javnih tijela.  

## Status dokumenta ODOBRENO (samo za PA fakturiranje)
  
OVAJ STATUS NIJE DOSTUPAN KORISNICIMA KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM.               

Status ODOBRENO odnosi se na dokument namijenjen javnoj upravi (PA) koji je ta uprava prihvatila.
Status se automatski preuzima u Fluentis Business Hubu kada primajuća ustanova potvrdi prihvat poslanog XML dokumenta.
U tim slučajevima tijek obrade smatra se završenim i u svojstvima dokumenta popunjava se datum zatvaranja.

## Status dokumenta PRIHVAĆENO PROTEKOM ROKA (samo za PA fakturiranje)

Elektronički računi poslani SdI-ju i namijenjeni javnoj upravi mogu od SdI-ja dobiti status PRIHVAĆENO PROTEKOM ROKA.
Ovaj status označuje situaciju u kojoj je SdI isporučio račun nadležnoj PA, ali ona u roku od 15 dana od zaprimanja nije poslala nikakvu obavijest SdI-ju — ni o prihvaćanju ni o odbijanju.
U tom slučaju SdI šalje obavijest o proteku rok i pošiljatelju i primatelju.  
Svrha ove obavijesti jest samo informirati obje strane da SdI smatra postupak vezan uz tu fakturu zaključenim. Obavijest potvrđuje da je SdI uredno završio proces zaprimanja i dostave računa.
Nakon slanja obavijesti o proteku roka, SdI će odbaciti svaki eventualni novi ponovni pokušaj slanja te fakture te bilo kakvu naknadnu komunikaciju povezanu s njom.  
Ipak, ova obavijest nema utjecaja na kasniju provjeru ili upravljanje računom: javna uprava i dalje može odlučiti odbiti već dostavljeni račun.  
Status se preuzima automatski iz Fluentis Business Hub-a i u tim se slučajevima tijek obrade dokumenta smatra dovršenim.  