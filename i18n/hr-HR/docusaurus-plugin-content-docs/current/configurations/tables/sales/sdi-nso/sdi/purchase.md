---
title: Upravljanje pasivnim ciklusom
sidebar_position: 7
---

NIJE DOSTUPNO ZA KORISNIKE KOJI NISU POTPISALI UGOVOR ZA FE S FLUENTISOM     

U Fluentisu je moguće, nakon konfiguracije usluge Fluentis Business Hub, uvesti pasivne račune koji dolaze od dobavljača i prolaze kroz Sustav razmjene. Trenutno opisani način preuzimanja odnosi se na račune dobavljača koji su identificirani/rezidentni na teritoriju države za koje računi prolaze kroz Sustav razmjene. Za komunikaciju sa SdI o računima nabave od stranih dobavljača, upućujemo na odlomak Slanje SdI računa nabave/prodaje stranih dobavljača/klijenata (subjekti koji NISU identificirani/rezidentni na teritoriju države).

Kako biste primili račune, potrebno je dostaviti svoj kod primatelja dobavljačima, kod koji Fluentis pruža nakon aktivacije usluge Fluentis Business Hub, kako bi se omogućilo izdavatelju da ispravno popuni XML datoteke dokumenata.

Konfiguracija Fluentisa predviđa postavljanje istih informacija koje su potrebne za upravljanje aktivnim ciklusom, kako je detaljno opisano u poglavlju Konfiguracija veze s Fluentis Business Hub. Nakon što se postavi komunikacija s uslugom Fluentis Business Hub, računi pasivnog ciklusa bit će poslani na ugovorenu uslugu, a putem BizLink-a, XML datoteke računa i pripadajući dodaci bit će preuzeti u Fluentis. Knjigovodstveno evidentiranje ili evidentiranje dokumenta nabave u pasivnom toku odgovornost je korisnika koji, nakon što pronađe odgovarajuću elektroničku XML datoteku, može je povezati s evidencijom ili generiranim dokumentom.

Korisnik, nakon što pretraži i pregleda dokumente uvezene iz BizLink procesa, može odabrati jedan dokument odjednom i povezati ga s knjigovodstvenom evidencijom/dokumentom nabave/dokumentom kompenzacije prisutnim u Fluentisu.

## Operativni tok dokumenata kupnje

Dokument kupnje u elektroničkom formatu, nakon što se uveze u Fluentis, dobiva status NE DODIJELJENO i može promijeniti status u PRIMLJENO nakon što se poveže s odgovarajućim knjigovodstvenim elementom, ili se može vratiti na status NE DODIJELJENO.
Za detaljno objašnjenje svakog statusa, vidi poglavlja o upravljanju statusima dokumenata.

## Izmjena i upravljanje statusima dokumenata

Za izmjenu i upravljanje dokumentom kupnje koristi se funkcija Dokumenti kupnje u ulazu u aplikaciji BizLink – Documenti SdI.       

Prilikom pristupa funkciji otvara se ekran *Dokumenti nabave* podijeljen u sekciju zaglavlja s filtriranim poljima za pretraživanje dokumenata i mrežu rezultata. U traci izbornika:  
- tipka *Otvorite dokument* je omogućen samo ako je odabrani dokument u stanju PRIMLJENO i otvara računovodstvenu registraciju/dokument nabave/fakturu naknade kojoj je XML datoteka povezana;  
- tipka *Prikaži* omogućuje pregled odabrane XML datoteke otvaranjem Registra dokumenata SdI;  
- tipka *Preuzmi privitak* izvršava preuzimanje odabrane datoteke u panelu Privici u odabranu mapu datotečnog sustava.

U gornjem dijelu prikaza nalaze se polja za filtriranje koja omogućuju filtriranje mreže rezultata prikazanih u donjoj mreži s nekim detaljnim informacijama:  
- *Stanje Sdi*: stanje dokumenta nakon što je preuzeto u Fluentis:  
> - *Nije dodijeljeno*: račun još nije povezan s računovodstvenom evidencijom ili s računom iz pasivnog ciklusa ili dokumentom izdanom prema korisniku;  
> - *Primljeno*: račun je povezan;  
- *Tip*: referentni kod tipa dokumenta prodaje;  
- *Datum doc. def.*, *Broj doc. def.*: datum i broj preuzetog dokumenta;  
- *Dobavljač*: izdavatelj dokumenta;  
- *Naziv datoteke SdI*: naziv XML datoteke koja se stvara u trenutku kada se dokument pomakne u stanje GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI (za detalje o sastavljanju naziva datoteke vidi odjeljak *Naziv datoteke*).  
- *Datum posljednjeg događaja*: odnosi se na posljednju radnju koju je izvršio operater ili na posljednju obavijest primljenu od SdI tijekom procesa upravljanja dokumentom.

Uvezeni dokumenti mogu se povezati s računovodstvenim stavkama prisutnim u Fluentis putem sljedećih funkcija:  
1) Dokumenti nabave u aplikaciji Bizlink – Dokumenti SdI  
2) putem računovodstvene registracije dokumenta nabave  
3) putem obrasca za upravljanje dokumentom nabave  
4) putem obrasca za upravljanje naknadom  

Analizirajmo u nastavku ova četiri načina.         

1) **Povezivanje XML dokumenta putem funkcije uvoza**        

S funkcijom *Dokumenti nabave u dolasku* aplikacije Bizlink – Dokumenti SdI moguće je povezati XML dokument s računovodstvenim zapisom/dokumentom nabave/ naknadom počevši od dokumenta uvezenog u Fluentis.  
Nakon što se izvrši pretraživanje i identificira datoteka koju treba povezati, moguće je odabrati datoteku iz mreže Registra dokumenata SdI dvostrukim klikom na redak dokumenta ili pomoću gumba **PRIKAŽI** u izborniku trake. Otvara se Registar dokumenata SdI s detaljima o preuzetoj datoteci i iz ovog prikaza moguće je:  
- *Povezati datoteku s dokumentom nabave* registriranim u odjeljku Nabave u Fluentisu, koristeći funkciju *Poveži s nabavom*.  
- *Povezati dokument s postojećim računovodstvenim zapisom*; putem funkcije *Poveži s *zapisima* moguće je odabrati odgovarajući računovodstveni zapis za dokument, odabirući ga s popisa računovodstvenih zapisa.  
- *Povezati dokument s profesionalnom naknadom*; odabirom radnje *Poveži s primateljima* u izborniku trake moguće je odabrati dokument koji se odnosi na naknadu povezanu s uvezenom XML datotekom, odabirući ga s popisa naknada prisutnih u Fluentisu.  

Na kraju povezivanja izvršenog jednom od gore opisanih funkcija, dokument se označava statusom **Primljeno**, a uz **Transiciju Primljeni dokument** označava se datum i vrijeme povezivanja. Dokument se također može ponovno izmijeniti u status **Nepovezano** u slučaju da je potrebno vratiti se u prethodno stanje.

2) **Povezivanje XML dokumenta iz knjigovodstvene registracije kupnje**

Da bi se povezao računovodstveni zapis s XML datotekom preuzetom u Fluentisu, potrebno je pristupiti računovodstvenom zapisu iz izbornika **Administracija** – **Zapisnici** – **Računovodstveni zapis** i potražiti računovodstveni zapis koji se želi upravljati. U obrascu **Pretraživanje računovodstvenih zapisa** dodane su neke kolone za upravljanje informacijama vezanim uz datoteku:  
- *Stanje SdI*: sadrži opis stanja dokumenta, prikazujući kako interno stanje upravljanja u Fluentisu, tako i stanje prikazano od Fluentis Business Huba i izravno preuzeto iz SdI (vidi odjeljak **STANJA DOKUMENATA**).  
- *Naziv datoteke SdI*: naziv datoteke koja se stvara u trenutku kada dokument pređe u stanje **GENERIRANA**; u originalnom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI (Naziv datoteke).  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema.  
- *Datum prijema Sdi*: datum kada je sustav razmjene preuzeo dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izdaje nakon primanja pošiljke i prije nego što se nastavi s formalnim provjerama datoteke.  
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument **Isporčen**).  
- *Datum posljednjeg događaja*: datum posljednje promjene stanja koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI.  

Odabirom računovodstvenog zapisa koji se želi povezati i mijenjanjem stanja elektroničkog računa u **PRIMLJENO**, otvara se popis datoteka preuzetih iz SDI koje još nisu povezane, a dovoljno je odabrati jednu od predloženih datoteka kako bi se stvorila ispravna povezanost. Iz istog prozora, pristupom **Registaru dokumenata Sdi**, moguće je pregledati radnje izvršene na dokumentu, s funkcijom **"Ispis"** za ispis povezane XML datoteke, te s funkcijama **"Preuzmi prilog"** ili **"Preuzmi sadržaj registra"** izvršiti preuzimanje odabrane XML datoteke u panelu **"Prilozi"** ili u panelu **"Registar dokumenata SdI"**.   

3) **Povezati XML datoteku iz upravljanja dokumentima nabave Nabave – Računi za nabavu – Računi za nabavu**        

Da biste povezali XML datoteku s dokumentom o kupnji, potrebno je pristupiti funkciji Nabava – Računi dobavljača, pretražiti datoteke koje treba povezati u mreži za upravljanje koristeći po potrebi i nove filtre povezane s Elektroničkim fakturiranjem te pregledati status dokumenta u stupcima predviđenima za upravljanje datotekama u SdI sustavu. Odabirom dokumenta u statusu NIJE DODIJELJEN za povezivanje s XML datotekom i promjenom statusa u PRIMLJENO putem izbornika vrpce, otvara se dijalog za odabir uvezenih datoteka o kupnji među kojima je potrebno odabrati datoteku za povezivanje. Status dokumenta se tako mijenja u PRIMLJENO, uz mogućnost vraćanja na prethodni status, također putem izbornika vrpce. Na istom zaslonu, pristupom Registru SdI dokumenata moguće je pregledati radnje provedene na dokumentu, funkcijom Ispis ispisati povezanu XML datoteku, a funkcijama Preuzmi privitak ili Preuzmi sadržaj registra preuzeti odabranu XML datoteku, odnosno iz panela “Privitci” ili “Registar SdI dokumenata”. Povezivanje primljene XML datoteke s računom o kupnji moguće je također izravnim pristupom dokumentu o kupnji i odabirom XML datoteke za povezivanje među onima koje nudi funkcija promjene statusa Primljeno u traci izbornika. 

4) **Uparite XML dokument iz funkcije upravljanja naknadama Administracija – Naknade – Naknade**

Uvezeni XML datoteka o kupnji može se odnositi na dokumente koje su izdali profesionalci i registrirani u Fluentis-u u upravljanju naknadama. Da biste uparili datoteku s postojećom registracijom, potrebno je pristupiti izborniku Administracija – Naknade – Naknade, potražiti dokument koji treba upariti u mreži upravljanja koristeći eventualno i nove filtre vezane uz elektroničko fakturiranje i pregledati stanje dokumenta u stupcima predviđenim za upravljanje datotekama u SdI.

## Slanje faktura o kupnji/prodaji stranih dobavljača/klijenata (subjekti koji nisu identificirani/rezidenti na teritoriju države)

Trenutna regulativa vezana uz komunikacije koje treba poslati Poreznoj upravi predviđa da obveznici PDV-a također moraju prijaviti podatke o operacijama prodaje dobara/usluga koje su OBAVLJENE i PRIMLJENE od subjekata koji nisu identificirani/nisu rezidenti na teritoriju države. Ako za EMITIRANE dokumente možete koristiti istu strukturu predviđenu za talijanske elektroničke fakture, za slanje dokumenata o kupnji stranih dobavljača predviđena je posebna struktura. Potpis za obje vrste datoteka je obavezan.

Slanje ovih datoteka u SdI upravlja se u Fluentis-u putem operacija promjene stanja registriranih dokumenata; generirana XML datoteka kao rezultat registracije operacije kupnje ili prodaje, dobiva status NEISPITANO i kasnije može proći iste promjene stanja predviđene za XML datoteke poslane u SdI za dokumente prodaje (vidi odlomak STANJA DOKUMENATA). XML dokument se zatim šalje u SdI koji ga provjerava i preuzima te vraća obavijesti o eventualnom odbijanju zbog neusklađenosti datoteke ili o uspješnom isporuci.

Za dokumente prodaje namijenjene klijentima koji nisu rezidenti/nisu uspostavljeni, elektronički tok slanja u SdI nikada ne može generirati neuspješnu isporuku zbog pogrešne identifikacije primatelja jer je svrha tog slanja isključivo obavijestiti Poreznu upravu o odnosu s inozemnim klijentom i nije zadatak SdI dostaviti primatelju: dokumenti izdani i namijenjeni stranim klijentima moraju se dostaviti na uobičajen način. Slanje takvih dokumenata u SdI mora se izvršiti do posljednjeg dana sljedećeg mjeseca nakon datuma izdavanja dokumenta. Iz tog razloga, tok stanja vezanih uz ove datoteke bit će isti, bilo da se radi o XML-u faktura prodaje ili faktura kupnje.

Za detalje vezane uz pojedinačna stanja, upućujemo na odlomak STANJA DOKUMENATA U FLUENTIS-u. U Fluentis-u je moguće generirati datoteku vezanu uz fakture prodaje namijenjene klijentima iz EU ili izvan EU:  
- iz upravljanja aktivnim ciklusom kao što je opisano u odlomku Upravljanje aktivnim ciklusom (sukobi identificirani/rezidenti na teritoriju države i javna uprava), prepuštajući kreiranje XML datoteke postavkama anagrafske evidencije vezanim uz elektroničko fakturiranje i upravljajući kreiranjem i slanjem XML datoteke kao fakture prodaje namijenjene talijanskom klijentu. Tok slanja, upravljan odjeljkom Elektroničko fakturiranje, automatski će prepoznati dokument prodaje namijenjen inozemnom subjektu i stoga će zahtijevati obavezno stavljanje potpisa.  
- iz funkcije Elektroničko fakturiranje s subjektima koji nisu rezidenti, koja preuzima aktivne fakture iz unesenih računovodstvenih registracija i koje se ne odnose na elektroničke fakture već poslane u SdI iz upravljanja aktivnim ciklusom.

Za pravilno upravljanje dokumentima prodaje, u oba slučaja potrebno je konfigurirati anagrafske podatke klijenta postavljanjem polja TIP KODA na izbor "Kanala Sdi" i u polju KOD DESTINATARA sekvencu od 7 puta znak "X" ("XXXXXXX").  
Za detalje specifične anagrafske evidencije, pogledajte odlomak Postavke Anagrafske evidencije kontakata.  
Datoteke vezane uz fakture o kupnji od stranih subjekata moguće je koristiti funkciju Elektroničko fakturiranje s subjektima koji nisu rezidenti koja je opisano u nastavku.

## Elektroničko fakturiranje s neevidentiranim subjektima

Funkcija Administracija > Izjave > Elektroničko fakturiranje s neevidentiranim subjektima generira XML datoteke koje se odnose na dokumente o kupnji i prodaji, a koje se mogu pojedinačno poslati Poreznoj upravi kao zamjena za obvezu tzv. spesometra.
Pristup funkciji prikazuje obrazac podijeljen u gornji dio zaglavlja, u kojem je moguće postaviti niz filtara za prikaz i upravljanje XML datotekama koje treba poslati.
Funkcija, putem filtra TIP i filtra STATUS ELEKTRONIČKOG RAČUNA, pretražuje stavke koje se odnose na kupnje ili prodaje, omogućujući iz mreže rezultata upravljanje napredovanjem statusa pojedinačno ili skupno za dokumente istog SdI statusa.
Mreža rezultata prikazuje niz stupaca namijenjenih nadzoru i upravljanju datotekama u vezi sa slanjem prema SdI sustavu, i to detaljno:
- *Stanje SdI*: prihvaća opis stanja dokumenta, navodeći kako interno stanje upravljanja u Fluentisu, tako i stanje prikazano od Fluentis Business Huba i izravno preuzeto od SdI (vidi odlomak STANJA DOKUMENATA).  
- *Naziv datoteke SdI*: naziv datoteke koja se stvara u trenutku kada dokument pređe u stanje GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI (Naziv datoteke).  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema.  
- *Datum prijema Sdi*: datum kada je sustav razmjene primio dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izdaje nakon primitka pošiljke i prije nego što započne formalne provjere datoteke.  
- *Datum zatvaranja*: datum zatvaranja tijeka upravljanja (npr. dokument Isporučeno).  
- *Datum posljednjeg događaja*: datum posljednje promjene stanja koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI.        

U traci izbornika, u sekciji posvećenoj elektroničkom fakturiranju, koristeći funkciju *Registar dokumenata Sdi* moguće je pregledati radnje izvršene na odabranom dokumentu, s funkcijom *Ispis* ispisati povezani XML dokument, a s funkcijama *Preuzmi privitak* ili *Preuzmi sadržaj registra* izvršiti preuzimanje XML datoteke.

Dvostrukim klikom na redak rezultata u mreži, pristupa se detaljima odabrane računovodstvene registracije. Također, u računovodstvenoj registraciji moguće je pregledati stanje obrade datoteke u odnosu na slanje SdI-u.

Dokumenti prodaje kojima upravlja funkcija Elektroničko fakturiranje za nerezidente mogu se pretraživati postavljanjem u panelu filtara oznake *Prodaje* u sekciji Tip: i s tipkom *Pretraživanje* u traci izbornika pokrenuti pretraživanje svih računovodstvenih registracija vezanih uz uzroke prodaje povezane s tipom kretanja PDV-a prodaje unutar EU ili PDV-a prodaje izvan EU ili koje su popunile polje “Račun partner” u panelu Parametri.

Dokumenti nabave upravljani funkcijom Elektroničko fakturiranje za nerezidente mogu se pretraživati postavljanjem u panelu filtara oznake za Nabave u odjeljku Tip: i s tipkom Pretraživanje u traci izbornika započeti pretraživanje svih računovodstvenih evidencija vezanih uz uzroke prodaje.  
Dokument nabave od stranog dobavljača mora se prikupiti i registrirati u računovodstvu koristeći računovodstvene uzroke koji:  
- su povezani s Tipom Kretanja PDV-a NABAVE UNUTAR EU ili  
- su povezani s Tipom Kretanja PDV-a NABAVE IZVAN EU ili  
- su označili u panelu Parametri polje Račun Partner.   

Na kraju pretrage, populira se mreža rezultata iz koje je moguće, koristeći funkciju promjene stanja u sekciji elektroničkog fakturiranja, nastaviti s RUČNIM napredovanjem stanja do predviđenog stanja “Za otpremu” koje podrazumijeva unos datoteke u red za otpremu na uslugu Fluentis Business Hub.

Ako usluga Fluentis Business Hub nije konfigurirana u sustavu, bit će moguće pristupiti funkciji *Registar dokumenata Sdi* i preuzeti generiranu XML datoteku koja se koristi izvan Fluentis-a.

XML datoteka koja se kreira tijekom upravljanja stanjima od strane operatera mora biti potpisana, stoga, ako je usluga Fluentis Business Hub aktivna, kopija datoteke bit će stvorena u mapi navedeno u postavkama vezanim uz Konfiguraciju veze s Fluentis Business Hub, gdje je potrebno navesti mapu za pohranu za spremanje XML datoteka koje treba potpisati i kasnije preuzeti potpisane datoteke.         

Na kraju slanja datoteke SdI, datoteka može imati dva stanja:  
- *Neusklađena*: datoteka sadrži obavijesti zbog kojih je ne može prihvatiti SdI. U tim slučajevima potrebno je pristupiti Registru dokumenata SdI, u panelu Registri dokumenata SdI, pregledati razlog neusklađenosti, ispraviti eventualnu anomaliju i ponovno poslati regeneriranu datoteku.  
- *Isporučeno*: datoteka je ispravno poslana i preuzeta od strane SdI. U ovom slučaju bit će moguće pregledati ishod isporuke pristupom panelu Registri dokumenata SdI za odabranu datoteku.  

Izlazni dokumenti mogu se upravljati i putem *Dokumenata stranih izlaza* dostupnih u *Aplikacije > BizLink > Dokumenti SdI*. U ovoj funkciji moguće je pratiti i mijenjati stanje vezano uz računovodstvene evidencije kupnje/prodaje za strane subjekte.  

U obrascu *Dokumenti kupnje stranih izlaza* prikazuju se sve datoteke proizvedene iz računovodstvenih evidencija i vezane uz ovu vrstu događaja. Obrazac je podijeljen u gornji dio u kojem su prikazani filtri za odabir upravljanih datoteka, među kojima:  
- Od datuma/ Do datuma primitka  
- Od datuma/ Do datuma primitka kupca  

U mreži rezultata prikazuju se podaci vezani uz upravljane ili za upravljanje datoteke:  
- *Stanje SdI*: sadrži opis stanja dokumenta, prikazujući kako interno stanje upravljanja u Fluentisu, tako i stanje prikazano od Fluentis Business Huba i preuzeto izravno od SdI (vidi odlomak *STANJA DOKUMENATA*).  
- *Ime datoteke SdI*: ime datoteke koja se stvara u trenutku kada se dokument pomiče u stanje GENERIRANO; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI (Ime datoteke).  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema  
- *Datum posljednjeg događaja*: datum posljednje promjene stanja koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI  

U izborniku trake prikazane su funkcije upravljanja odabranim dokumentom ili dokumentima:  
- tipka *Prikaži* omogućuje pregled Registru dokumenata SdI gdje je moguće pregledati događaje povezane s generiranom XML datotekom, izvršiti preuzimanje ili promijeniti stanje  
- tipka *Preuzmi privitak* preuzima odabranu datoteku u odabranu mapu datotečnog sustava  
- tipka *Otvorite dokument* otvara računovodstvenu evidenciju vezanu uz odabranu datoteku           

## Knjigovodstveni zapisi

Pristupanjem izborniku Administracija > Registracije > Registracija, obrazac Pretraživanje računovodstvenih registracija prikazuje, u odjeljku filtara, jedan expander vezan za moguće informacije povezane sa Statusom elektroničkog računa, koji se odnosi na dokumente koji imaju interakciju sa Sustavom razmjene.            

U traci izbornika, u sekciji posvećenoj elektroničkom fakturiranju, koristeći funkciju *Registar dokumenata Sdi* moguće je pregledati radnje izvršene na odabranom dokumentu, s funkcijom *Ispis* ispisati povezani XML dokument, a s funkcijama *Preuzmi privitak* ili *Preuzmi sadržaj registra* izvršiti preuzimanje XML datoteke.  
Mreža sažetka rezultata prikazuje nekoliko kolona u kojima se navodi stanje i ishod dokumenata u vezi s njihovim slanjem na SdI:  
- *Stanje SdI*: sadrži opis stanja dokumenta, navodeći kako interno stanje upravljanja u Fluentisu, tako i stanje koje navodi Fluentis Business Hub i koje se izravno preuzima iz SdI (vidi odlomak *STANJA DOKUMENATA*).  
- *Naziv datoteke SdI*: naziv datoteke koja se stvara u trenutku kada dokument pređe u stanje GENERIRANA; u izvornom formatu ili nakon stavljanja digitalnog potpisa, predstavlja datoteku računa koja se šalje na SdI (Naziv datoteke).  
- *Sdi Id*: jedinstveni identifikator koji SdI dodjeljuje dokumentu u trenutku prijema (NISU UPRAVLJANI ZA ONE KOJI NISU POTPISALI UGOVOR O FE S FLUENTISOM).  
- *Datum prijema Sdi*: datum kada je sustav razmjene primio dokument koji mu je poslan. Ova informacija se dobiva iz obavijesti o prijemu koju SdI izdaje nakon prijema pošiljke i prije nego što započne formalne provjere datoteke (NISU UPRAVLJANI ZA ONE KOJI NISU POTPISALI UGOVOR O FE S FLUENTISOM).  
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument isporučen) (NISU UPRAVLJANI ZA ONE KOJI NISU POTPISALI UGOVOR O FE S FLUENTISOM).  
- *Datum posljednjeg događaja*: datum posljednje promjene stanja koja se dogodila na datoteci, bilo ručno ili kao rezultat napredovanja obrade na SdI.