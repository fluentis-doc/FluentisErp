---
title: Upravljanje aktivnim ciklusom
sidebar_position: 6
---

Upravljanje dokumentom elektroničkog fakturiranja za aktivni ciklus prema važećim propisima uključuje sljedeće faze.

*ELEKTRONIČKO FAKTURIRANJE PREMA JAVNOJ UPRAVI*            

- generiranje prodajnog dokumenta
- slanje u SdI (NIJE OBUHVAĆENO ZA ONE KOJI NEMAJU POTPISAN FE UGOVOR S FLUENTISOM)
- validacija računa od strane SdI (NIJE OBUHVAĆENO ZA ONE KOJI NEMAJU POTPISAN FE UGOVOR S FLUENTISOM)  
> - račun je ispravan; započinje postupak dostave; javna uprava je ispravno identificirana i SdI pokreće postupke dostave:
> > - ako je prijenos uspješan, SdI šalje pošiljatelju potvrdu o dostavi elektroničkog računa;
> > - ako zbog tehničkih razloga koji nisu u nadležnosti SdI-a dostava primatelju nije moguća u roku od 5 dana, SdI šalje pošiljatelju obavijest o neuspješnoj dostavi; SdI i dalje ima obvezu kontaktirati primatelja kako bi on što prije otklonio prepreku koja sprječava dostavu te, nakon rješavanja problema, izvršiti ponovni pokušaj slanja; ako SdI u roku od 10 dana od datuma slanja obavijesti o neuspješnoj dostavi ne uspije dostaviti račun primatelju, pošiljatelju šalje konačnu potvrdu o izvršenom prijenosu s nemogućnošću dostave  
> > - primatelj u roku od 15 dana od prve obavijesti upućene pošiljatelju – odnosno od datuma navedenog u potvrdi o dostavi ili od datuma slanja obavijesti o neuspješnoj dostavi – može poslati obavijest o prihvaćanju/odbijanju (obavijest o ishodu) računa  
> > - ako u roku od 15 dana SdI ne zaprimi nikakvu obavijest, SdI pošiljatelju i primatelju šalje obavijest o isteku roka. Ova obavijest služi samo kao potvrda da SdI smatra postupak za taj račun završenim. Nakon te obavijesti SdI odbacuje svaki ponovni pokušaj slanja istog računa te svaku komunikaciju vezanu uz njega.  
> - račun nije ispravan te se pošiljatelju šalje obavijest o odbacivanju; račun je potrebno ponovno izdati.   

*FAKTURIRANJE B2B/B2C*

- generiranje prodajnog dokumenta  
- slanje u SdI (NIJE OBUHVAĆENO ZA ONE KOJI NEMAJU POTPISAN FE UGOVOR S FLUENTISOM)  
- validacija računa od strane SdI (NIJE OBUHVAĆENO ZA ONE KOJI NEMAJU POTPISAN FE UGOVOR S FLUENTISOM)  
> - račun je ispravan: pokreće se postupak dostave i mogu nastati dva scenarija:  
> > - kanal za slanje primatelju je prepoznat i račun se dostavlja  
> > - kanal za slanje primatelju nije prepoznat te se kopija računa sprema u njegovu zaštićenu zonu, a primatelja o izdavanju računa obavještava izdavatelj
> > - primatelj je privatna osoba te se kopija računa sprema u njegovu zaštićenu zonu, a primatelja o izdavanju računa obavještava izdavatelj  
> - račun nije ispravan te se pošiljatelju šalje obavijest o odbacivanju i račun mora biti ponovno izdan  
> > - kanal za slanje primatelju nije prepoznat te se kopija računa sprema u njegovu zaštićenu zonu, a primatelja o izdavanju računa obavještava izdavatelj  
> > - primatelj je privatna osoba te se kopija računa sprema u njegovu zaštićenu zonu, a primatelja o izdavanju računa obavještava izdavatelj  
> - račun nije ispravan te se pošiljatelju šalje obavijest o odbacivanju i račun mora biti ponovno izdan  

U Fluentisu je moguće generirati dokumente iz aktivnog prodajnog ciklusa te, za kupce kod kojih je u šifrarniku ispravno podešena elektronička fakturacija, pripremiti XML datoteku za slanje u SdI.
Svakoj fazi predviđenoj propisima odgovara određeni status dokumenta u Fluentisu.  
Ako je u Fluentisu ispravno konfigurirana komunikacija s Fluentis Business Hubom (u odjeljku Konfiguracija elektroničke fakturacije za društvo), moguće je XML datoteku izravno poslati u SdI i primati pripadajuće obavijesti.  
U suprotnom, nakon generiranja XML datoteke računa, moguće ju je preuzeti i poslati preko drugih vanjskih kanala.  
Tipovi dokumenata za koje je u Fluentisu moguće generirati XML datoteku i izvršiti slanje u SdI (kako propisuju važeći propisi) uključuju:  
- prodajni račun  
- akontacija/avans na račun  
- akontacija/avans na obračun  
- storno  
- zaduženje  
- obračun          

Generirani XML datoteka sadržavat će kodiranje vezano uz vrstu dokumenta i, neovisno o vrsti, operativni postupci za generiranje XML datoteke i eventualno slanje SdI su isti za sve vrste datoteka. Unutar generirane XML datoteke:  
- za subjekte identificirane/rezidente na području države, subjekt primatelj dokumenta identificira se putem koda primatelja ili PEC-a ili elektroničke adrese;  
- za Javne uprave, kod primatelja predstavlja identifikacijski IPA kod Ureda zaduženog za prijem računa.  

Ove postavke unesene su u karticu KLIJENTA svakog subjekta evidentiranog u Fluentis.

## Jedinstvena numeracija dokumenata  

Radi ispravne i jedinstvene numeracije prodajnih dokumenata — nužne kako bi se izbjeglo odbacivanje dokumenata koje SdI prepoznaje kao već ranije poslane — preporučuje se da se za svaki tip dokumenta Prodajni račun definira jedinstvena numeracija koja jasno identificira dokument.  
Primjerice, može se postaviti sufiks "/B" nakon broja dokumenta.  
Podsjećamo da se numeratori prodajnih dokumenata podešavaju putem funkcije: Tabele > Prodaja > Numeracija računa. Za postavljanje broja računa (ili otpremnice / bolle) s kosom crtom (npr. 1/A, 2/A… 1/B, 2/B), potrebno je u tablici Numeratori postaviti formulu: **number.ToString()+"/B"**            

Zatim je u izvještaju potrebno zamijeniti standardno polje (npr. Number) s izračunatim poljem (npr. CalcNumber) koje sadrži sljedeću formulu:      
**Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])**          

**PAŽNJA (ATTENZIONE)**: funkcionira samo u izvještaju, u obrascima će se i dalje prikazivati normalni broj bez precrtavanja, ali u XML datoteci bit će ispravno prikazan jedinstveni broj.  
Ukratko, za upravljanje izdavanjem i prijenosom elektroničkih računa u Fluentisu, koraci koje treba slijediti su:  
- Postavljanje kartica kontakata
- Postavljanje tablica za upravljanje
- IZDAVANJE I PRIJENOS DOKUMENATA PRODAJE s funkcijama pripremljenim i opisanim u odlomku IZMJENITI I UPRAVLJATI STANJIMA DOKUMENATA.

## Izdavanje i slanje prodajnih dokumenata

Upravljanje dokumentima prodaje koji se šalju u elektroničkom formatu Sustavu za razmjenu započinje kreiranjem dokumenta iz aktivnog ciklusa Fluentis u stanju NEISPITANO: Početna stranica > Prodaja > Računi > Novi.  
Jednom kada je dokument kreiran, generiranje odgovarajućeg XML dokumenta i prijenos dokumenata u SdI (putem Fluentis Business Hub) odvijaju se kroz ručno upravljanje stanjem dokumenta u vezi s Elektroničkom fakturacijom od strane operatera u predviđenom odjeljku: do stanja "Za slanje", kada se dokument stavlja u "red za slanje" i, putem zakazanog procesa BizLink, šalje se Fluentis Business Hub-u na upravljanje. Od ovog trenutka, stanje dokumenata bit će automatski ažurirano putem tihih automatskih procesa i neće biti moguće nikakvo ručno interveniranje od strane operatera, sve do primitka obavijesti o odbijanju, isporuci ili neisporuci. Stanja dokumenata i obavijesti o isporuci uvijek će biti vidljiva u obrascu PRETRAŽIVANJE RAČUNA PRODAJE i u funkciji REGISTAR DOKUMENATA SdI.

## Kako mijenjati i upravljati stanjima dokumenata  

Nakon generiranja dokumenta prodaje, promjena stanja dokumenata može se upravljati pojedinačno za svaki dokument ili masovno putem procedure PROMJENA STANJA, unutar 4 funkcionalnosti:  
1) pojedinačno iz obrasca za upravljanje pojedinačnom fakturom s funkcijom predviđenom u Ribbon izborniku u odjeljku Elektroničko fakturiranje
2) masovno iz obrasca PRETRAŽIVANJE FAKTURA PRODAJE s funkcijom predviđenom u Ribbon izborniku u odjeljku Elektroničko fakturiranje nakon odabira dokumenata za upravljanje  
3) pojedinačno iz funkcije REGISTAR DOKUMENATA SdI s funkcijom predviđenom u Ribbon izborniku  
4) masovno iz funkcije upravljanja Stanjem predviđenom u Ribbon izborniku aplikacije BizLink – Dokumenti SDI – DOKUMENTI PRODAJE U ODLASKU iz Bizlinka, nakon odabira dokumenata za upravljanje  

Praćenje raznih stanja dokumenata i njihovo upravljanje moguće je u bilo kojem trenutku pristupanjem prikazu PRETRAŽIVANJA, dostupnom iz izbornika Prodaja > Fakture > Fakture;  
ili iz aplikacije BizLink, pristupanjem stavci Dokumenti SDI > DOKUMENTI PRODAJE U ODLASKU.

## Pretraživanje prodajnih faktura

Videopanel za pretraživanje “Fakture prodaje” dostupan je putem izbornika Početna stranica > Prodaja > Fakture > Fakture, sadrži informacije o statusima i upravljanju dokumentima poslanim putem Fluentis na Fluentis Business Hub i pripadajuće obavijesti o statusu.  
Stupci iz kojih je moguće pratiti status dokumenta, bilo kada je još u upravljanju operatera, bilo kada je poslan i stoga upravljan od strane Fluentis Business Huba, su:  
- *Status SdI*: sadrži opis statusa dokumenta, prikazujući i unutarnji status upravljanja Fluentisa i status koji daje Fluentis Business Hub, a koji se izravno preuzima iz SdI (vidi odlomak STANJA DOKUMENATA).  
- *Naziv datoteke SdI*: naziv datoteke koja se stvara u trenutku kada dokument pređe u stanje GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI.  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema (NIJE UPRAVLJAN ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM)  
- *Datum prijema Sdi*: datum kada je sustav razmjene primio dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izdaje nakon prijema pošiljke i prije nego što započne formalne provjere datoteke (NIJE UPRAVLJAN ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM)  
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument isporučen) (NIJE UPRAVLJAN ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM)  
- *Datum posljednjeg događaja*: datum posljednje promjene statusa koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI.  

Polja vezana uz upravljanje elektroničkim dokumentom također se mogu koristiti kao filtri za pretraživanje dokumenata iz proširenja Status elektroničkog računa u panelu filtra.  
Iz videopanel za pretraživanje Fakture prodaje moguće je, odabirom jedne fakture ili faktura s istim Statusom SdI, promijeniti njihov status obrade koristeći funkciju Status iz odjeljka Elektroničko fakturiranje u izborniku trake.  
U slučaju odabira jednog dokumenta računa i desnim klikom na stupac u skladu s nazivom XML datoteke te odabirom radnje Otvori obrazac ili odabirom radnje Registar dokumenata SdI u odjeljku Elektroničko fakturiranje u izborniku trake, pristupa se Registru dokumenata SdI u kojem je moguće pregledati generiranu XML datoteku i povijest upravljanja dokumentom prodaje.

## Registar SdI dokumenata

Funkcija Registar SdI dokumenata omogućuje pregled stanja obrade prodajnih računa te uvid u:  
- generiranu XML datoteku
- PDF prilog (ako je predviđen kao prilog XML dokumentu)  
- obavijesti koje šalje Fluentis Business Hub i koje se zaprimaju izravno od SdI (NIJE OBUHVAĆENO ZA KORISNIKE KOJI NEMAJU POTPISAN FE UGOVOR S FLUENTISOM)    

Unutar ove funkcije moguće je pratiti posljednje događaje vezane uz upravljanje datotekom te povijest svih izvršenih radnji.  
Registar SdI dokumenata dostupan je:  
- iz ekrana Pretraživanje prodajnih računa, odabirom pojedinog računa  
- iz ekrana za upravljanje pojedinim dokumentom (forma Račun)
- iz funkcije Documenti SDI > Izlazni prodajni dokumenti           

Ekran Registar dokumenata SdI sastoji se od sažetka zaglavlja i dva panela:  
- Prilozi 
- Registar dokumenata SdI        

U zaglavlju prikazuju se sažeti podaci o računu
- Status elektroničkog računa: stanje dokumenta vezano uz slanje u SdI putem Fluentis Business Hub-a
(za detalje o vrstama statusa vidi poglavlje Stanja dokumenata)  
- Vrsta računa: tip dokumenta koji je poslan – Fluentis šifra
- Datum, Broj, Klijent: datum dokumenta, broj dokumenta i klijent (primatelj)
- Naziv SdI datoteke: naziv XML datoteke koja se kreira kada dokument prijeđe u stanje GENERIRANA; u izvornom obliku ili nakon primjene digitalnog potpisa predstavlja XML dokument koji se šalje u SdI
(za više detalja vidi poglavlje Naziv datoteke)
- SdI ID: jedinstveni identifikator koji SdI dodjeljuje XML datoteci pri zaprimanja. Ovaj identifikator koristi se u svim naknadnim obavijestima upućenima pošiljatelju
(NIJE OBUHVAĆENO ZA KORISNIKE BEZ FE UGOVORA S FLUENTISOM)
- Datum primitka od SdI: datum kada SdI zaprimi XML datoteku i pošiljatelju pošalje Obavijest o primitku
(NIJE OBUHVAĆENO ZA KORISNIKE BEZ FE UGOVORA S FLUENTISOM)
- Datum primitka od klijenta: datum dostave dokumenta klijentu ili datum stavljanja na raspolaganje u zaštićenoj zoni klijenta. Ovo se odnosi na slučajeve u kojima SdI ne uspije identificirati primatelja
(NIJE OBUHVAĆENO ZA KORISNIKE BEZ FE UGOVORA S FLUENTISOM)
- Datum posljednjeg događaja: datum posljednje radnje operatora ili posljednje obavijesti dobivene od SdI tijekom upravljanja dokumentom

## Panel PRILOZI

U panelu Prilozi prikazani su svi dokumenti koji se odnose na elektroničko upravljanje računom — od XML datoteke dokumenta do posljednje obavijesti primljene od SdI.
Klikom na dokument u lijevoj rešetci dokument se prikazuje u desnom dijelu ekrana, gdje se koristi odgovarajući stylesheet koji XML pretvara u pojednostavljen i čitljiv korisnički prikaz. Primjerice, za XML datoteku računa ili notifikacije.
Rešetka dokumenata s lijeve strane prikazuje za svaki dokument:  
- *Datum*: datum kada je prilog zaprimljen  
- *Vrsta sadržaja*: tehnička oznaka stylesheet-a koji se koristi za prikaz XML-a  
- *Naziv i opis*: opis prikazane XML datoteke         

Ako su u generiranom XML datoteci predviđeni privici, u donjem dijelu prikazane XML datoteke prikazuje se mreža s popisom privitaka dokumenta. Klikom na naziv privitka moguće je preuzeti datoteku i spremiti je za vanjsku upotrebu. Privici povezani s statusima dokumenta mogu se preuzeti putem funkcije Preuzmi privitak koja se nalazi u traci izbornika.

## Panel REGISTAR SDI DOKUMENATA

Panel Registar dokumenata SdI predstavlja povijest svih faza upravljanja elektroničkim dokumentom, od trenutka njegove generacije u XML formatu do trenutka isporuke ili eventualnog odbacivanja.  
U mreži događaja, za svaki događaj prikazana je "Transicija" koja se odnosi na promjenu stanja koja je nastupila na dokumentu, a gdje je predviđena ručna intervencija, ime i datum operatera koji je izvršio tranziciju. Stanje dokumenta povezano s generacijom XML datoteke i stanja koja je preuzela SdI za koja je predviđena obavijest, također su povezana s odgovarajućom XML datotekom.  
Klikom na događaj povezan s XML datotekom, aktivira se prikaz datoteke, koristeći stilsku datoteku koja omogućuje prikaz XML datoteke u pojednostavljenom korisničkom formatu, kao što je na primjer za datoteku obavijesti o prijemu. Funkcija Preuzmi sadržaj registra omogućuje preuzimanje odabrane i prikazane datoteke.

## Izlazni prodajni dokument

U aplikaciji BizLink moguće je pristupiti stavci izbornika Dokumenti SDI – Dokumenti prodaje i pregledati opće stanje svih dokumenata prodaje pripremljenih iz aktivnog toka, upravljati stanjem, pregledati povijest napredovanja stanja. Dijalog *Dokumenti prodaje u izlazu* podijeljen je u dva dijela, jedan s naslovom koji sadrži polja za filtriranje koja se mogu koristiti za filtriranje dokumenata i jedan rezultat pretraživanja.

Vrijednosti prikazane u mreži su:
- *Stanje SdI*: stanje dokumenta u vezi s njegovim slanjem u SdI putem Fluentis Business Huba (za detalje o vrstama stanja dokumenata vidi odlomak STANJA DOKUMENATA)
- *Tip*: referentni kod tipa dokumenta prodaje
- *Datum, Broj, Klijent*: datum, broj dokumenta i klijent na čije ime je dokument
- *Datum primitka klijenta*: datum isporuke dokumenta klijentu ili datum "stavljanja na raspolaganje" dokumenta u rezerviranom području klijenta. Ova posljednja situacija odnosi se na pošiljke za koje SdI ne može ispravno identificirati naručitelja/primatelja (NISU UPRAVLJENE ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM)
- *Naziv datoteke SdI*: naziv XML datoteke koja se stvara u trenutku kada dokument napreduje u stanje GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI (za detalje o popunjavanju naziva datoteke vidi odlomak Naziv datoteke).
- *Datum posljednjeg događaja*: odnosi se na posljednju akciju koju je izvršio operater ili na posljednju obavijest primljenu od SdI tijekom procesa upravljanja dokumentom.

Klikom na ekspanzivnom tipkom uz račun otvara se detalj tranzicija vezanih uz stanja dokumenta i prikazuju se pojedinačne tranzicije koje su se dogodile u upravljanju dokumentom s pripadajućim datumom izvršenja i nazivom eventualne datoteke generirane promjenom stanja.

Dokumenti prikazani u mreži Registar dokumenata SdI su svi oni stvoreni iz aktivnog toka upravljanja dokumentima Račun, neovisno o stanju; dvostruki klik na redak računa otvara panel Registar dokumenata SdI u kojem je moguće pregledati dokumente stvorene tijekom upravljanja datotekom računa i povijest tranzicija.

U mreži Registar dokumenata SdI, odabirom dokumenta računa ili više dokumenata računa u istom stanju, moguće je upravljati stanjem obrade dokumenta koristeći kombinirani izbornik Stanje u izborniku trake i odabirom novog stanja dokumenta.  
Odabirom računa iz mreže, funkcijom Otvorite dokument iz izbornika trake, otvara se dokument računa.