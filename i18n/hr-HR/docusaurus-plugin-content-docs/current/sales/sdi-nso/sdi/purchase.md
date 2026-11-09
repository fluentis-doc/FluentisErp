---
title: Upravljanje ulaznim ciklusom
sidebar_position: 7
---

NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM

U Fluentisu je, nakon konfiguriranja usluge Fluentis Business Hub, moguće uvesti ulazne račune dobavljača koji prolaze kroz sustav razmjene (Sistema di Interscambio).

Ovdje opisani način preuzimanja odnosi se na račune dobavljača koji su identificirani ili imaju prebivalište na državnom području Italije i čiji računi prolaze kroz sustav razmjene. Za slanje podataka sustavu SdI o nabavnim računima inozemnih dobavljača upućujemo na odjeljak Slanje nabavnih/prodajnih računa inozemnih dobavljača/kupaca u sustav SdI (subjekti koji NISU identificirani ili nemaju prebivalište na državnom području Italije).

Kako bi mogli primati račune, dobavljačima je potrebno dostaviti vlastitu šifru primatelja koju Fluentis dodjeljuje nakon aktivacije usluge Fluentis Business Hub. Time se dobavljaču omogućuje ispravno popunjavanje XML datoteka dokumenata.

Konfiguracija Fluentisa zahtijeva postavljanje istih podataka koji su potrebni za upravljanje izlaznim ciklusom, kako je opisano u poglavlju Konfiguracija veze s Fluentis Business Hubom.

Nakon konfiguriranja komunikacije s uslugom Fluentis Business Hub, računi iz ulaznog ciklusa prosljeđuju se ugovorenoj usluzi, a XML datoteke računa i pripadajući privici preuzimaju se u Fluentis putem BizLinka.

Korisnik je odgovoran za računovodstveno knjiženje ili evidentiranje nabavnog dokumenta u ulaznom ciklusu. Nakon što pronađe odgovarajuću elektroničku XML datoteku, može je povezati s knjiženjem ili izrađenim dokumentom.

Nakon pretraživanja i pregleda dokumenata uvezenih putem postupka BizLink, korisnik može odabrati jedan dokument i povezati ga s računovodstvenim knjiženjem, nabavnim dokumentom ili dokumentom obračuna naknade koji već postoje u Fluentisu.

## Operativni tijek nabavnih dokumenata

Nakon uvoza u Fluentis, elektronički nabavni dokument dobiva status **NIJE DODIJELJENO**. Može prijeći samo u status **PRIMLJENO**, nakon povezivanja s odgovarajućom računovodstvenom stavkom, ili se vratiti u status **NIJE DODIJELJENO**.

Za detaljnije informacije o značenju pojedinih statusa pogledajte odjeljke koji se odnose na upravljanje različitim STATUSIMA DOKUMENATA.

## Promjena i upravljanje statusima dokumenata

Za promjenu i upravljanje nabavnim dokumentom potrebno je koristiti funkciju **Ulazni nabavni dokumenti** u aplikaciji BizLink – Dokumenti SdI.

Prilikom otvaranja funkcije prikazuje se zaslon *Ulazni nabavni dokumenti*, podijeljen na zaglavlje s poljima za filtriranje i pretraživanje dokumenata te tablicu s rezultatima.

Na vrpci izbornika dostupne su sljedeće funkcije:

- Gumb *Otvori dokument* aktivan je samo ako odabrani dokument ima status PRIMLJENO. Otvara računovodstveno knjiženje, nabavni dokument ili račun za obračun naknade s kojim je povezana XML datoteka.
- Gumb *Prikaži* omogućuje pregled odabrane XML datoteke otvaranjem Registra dokumenata SdI.
- Gumb *Preuzmi privitak* preuzima odabranu datoteku iz ploče Privici u odabranu mapu datotečnog sustava.

U gornjem dijelu zaslona nalaze se polja za filtriranje rezultata prikazanih u donjoj tablici, koja sadržava i sljedeće detaljne informacije:

- *SdI status*: status dokumenta nakon uvoza u Fluentis:
    - *Nije dodijeljeno*: račun još nije povezan s računovodstvenim knjiženjem, računom iz ulaznog ciklusa ili dokumentom izdanim primatelju naknade.
    - *Primljeno*: račun je povezan.
- *Vrsta*: referentna šifra vrste prodajnog dokumenta.
- *Datum izvornog dokumenta*, *Broj izvornog dokumenta*: datum i broj preuzetog dokumenta.
- *Dobavljač*: izdavatelj dokumenta.
- *Naziv datoteke SdI*: naziv XML datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (za detalje o formiranju naziva datoteke pogledajte odjeljak Naziv datoteke).
- *Datum posljednjeg događaja*: odnosi se na posljednju radnju koju je izvršio operater ili posljednju obavijest zaprimljenu od sustava SdI tijekom postupka upravljanja dokumentom.

Uvezene dokumente moguće je povezati s računovodstvenim stavkama u Fluentisu putem sljedećih funkcija:

1. Ulazni nabavni dokumenti u aplikaciji BizLink – Dokumenti SdI
2. Računovodstveno knjiženje nabavnog dokumenta
3. Obrazac za upravljanje nabavnim dokumentom
4. Obrazac za upravljanje obračunom naknade

U nastavku su opisane ove četiri mogućnosti.

### 1) Povezivanje XML dokumenta putem funkcije za uvoz

Pomoću funkcije *Ulazni nabavni dokumenti* u aplikaciji BizLink – Dokumenti SdI moguće je povezati XML dokument s računovodstvenim knjiženjem, nabavnim dokumentom ili obračunom naknade, polazeći od dokumenta uvezenog u Fluentis.

Nakon pretraživanja i pronalaska datoteke koju je potrebno povezati, moguće ju je odabrati u tablici Registra dokumenata SdI dvostrukim klikom na redak dokumenta ili klikom na gumb PRIKAŽI na vrpci izbornika.

Otvara se Registar dokumenata SdI s detaljima preuzete datoteke. Na tom je zaslonu moguće:

- **Povezati datoteku s nabavnim dokumentom** evidentiranim u odjeljku Nabava u Fluentisu, pomoću funkcije *Poveži s nabavom*.
- **Povezati dokument s postojećim računovodstvenim knjiženjem**. Pomoću funkcije *Poveži s knjiženjima* moguće je odabrati odgovarajuće računovodstveno knjiženje dokumenta s popisa računovodstvenih knjiženja.
- **Povezati dokument s obračunom naknade za stručnjaka**. Odabirom radnje *Poveži s primateljima naknada* na vrpci izbornika moguće je odabrati dokument koji odgovara obračunu naknade povezanom s uvezenom XML datotekom, s popisa obračuna naknada dostupnih u Fluentisu.

Nakon povezivanja putem jedne od prethodno opisanih funkcija, dokument dobiva status Primljeno. U prijelazu statusa Dokument primljen navode se datum i vrijeme povezivanja.

Dokument je moguće ponovno vratiti u status Nije dodijeljeno ako se ukaže potreba za povratkom na prethodni status.

### 2) Povezivanje XML dokumenta putem računovodstvenog knjiženja nabave

Za povezivanje računovodstvenog knjiženja s XML datotekom preuzetom u Fluentis potrebno je otvoriti računovodstveno knjiženje putem izbornika Administracija – Knjiženja – Knjiženje te pronaći knjiženje kojim se želi upravljati.

U obrascu Pretraživanje računovodstvenih knjiženja dodano je nekoliko stupaca za upravljanje informacijama o datoteci:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz sustava SdI (pogledajte odjeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sustav SdI dodjeljuje dokumentu prilikom primitka.
- *Datum primitka SdI*: datum kada je sustav razmjene zaprimio poslani dokument. Ovaj se podatak preuzima iz obavijesti o primitku koju sustav SdI izdaje nakon zaprimanja pošiljke, a prije provođenja formalnih provjera datoteke.
- *Datum zatvaranja*: datum zatvaranja tijeka upravljanja (npr. dokument Dostavljeno).
- *Datum posljednjeg događaja*: datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sustavu SdI.

Odabirom računovodstvenog knjiženja koje je potrebno povezati i promjenom statusa elektroničkog fakturiranja u PRIMLJENO otvara se popis datoteka preuzetih iz sustava SdI koje još nisu povezane. Dovoljno je odabrati jednu od ponuđenih datoteka kako bi se uspostavila odgovarajuća veza.

U istom je obrascu, otvaranjem Registra dokumenata SdI, moguće pregledati izvršene radnje na dokumentu. Pomoću funkcije *Ispis* moguće je ispisati povezani XML dokument, dok se funkcijama *Preuzmi privitak* ili *Preuzmi sadržaj registra* odabrana XML datoteka preuzima iz ploče *Privici* ili ploče *Registar dokumenata SdI*.

### 3) Povezivanje XML datoteke putem upravljanja nabavnim dokumentima: Nabava – Nabavni računi – Nabavni računi

Za povezivanje XML datoteke s nabavnim dokumentom potrebno je otvoriti funkciju Nabava – Nabavni računi, pronaći datoteke koje je potrebno povezati u tablici za upravljanje, prema potrebi koristeći i nove filtre povezane s elektroničkim fakturiranjem, te pregledati status dokumenta u stupcima namijenjenima upravljanju datotekama u sustavu SdI.

Odabirom dokumenta sa statusom NIJE DODIJELJENO koji je potrebno povezati s XML datotekom te promjenom njegova statusa u PRIMLJENO putem vrpce izbornika otvara se dijaloški okvir za odabir uvezenih nabavnih datoteka. U njemu je potrebno odabrati datoteku koju želite povezati.

Status dokumenta time se mijenja u PRIMLJENO, ali ga je i dalje moguće vratiti na prethodni status putem vrpce izbornika.

U istom je obrascu, otvaranjem Registra dokumenata SdI, moguće pregledati izvršene radnje na dokumentu. Pomoću funkcije Ispis moguće je ispisati povezani XML dokument, dok se funkcijama Preuzmi privitak ili Preuzmi sadržaj registra odabrana XML datoteka preuzima iz ploče „Privici” odnosno ploče „Registar dokumenata SdI”.

XML datoteku primljenu od dobavljača moguće je povezati s nabavnim računom i izravnim otvaranjem nabavnog dokumenta te odabirom XML datoteke koju želite povezati među datotekama ponuđenima putem funkcije promjene statusa Primljeno na vrpci izbornika.

### 4) Povezivanje XML dokumenta putem funkcije za upravljanje obračunima naknada: Administracija – Obračuni naknada – Obračuni naknada

Uvezena XML datoteka nabave može se odnositi na dokumente koje su izdali stručnjaci i koji su evidentirani u Fluentisu putem funkcije za upravljanje obračunima naknada.

Za povezivanje datoteke s postojećim knjiženjem potrebno je otvoriti izbornik Administracija – Obračuni naknada – Obračuni naknada, pronaći dokument koji je potrebno povezati u tablici za upravljanje, prema potrebi koristeći i nove filtre povezane s elektroničkim fakturiranjem, te pregledati status dokumenta u stupcima namijenjenima upravljanju datotekama u sustavu SdI.

## Slanje nabavnih/prodajnih računa inozemnih dobavljača/kupaca u sustav SdI (subjekti koji nisu identificirani ili nemaju prebivalište na državnom području Italije)

Važeći propisi o izvještavanju Agencije za prihode predviđaju da porezni obveznici za potrebe PDV-a prijavljuju i podatke o transakcijama isporuke dobara i pružanja usluga koje su IZVRŠENE i PRIMLJENE od subjekata koji NISU identificirani ili nemaju prebivalište na državnom području Italije.

Za IZDANE dokumente moguće je koristiti istu strukturu predviđenu za talijanske elektroničke račune, dok je za slanje nabavnih dokumenata inozemnih dobavljača sustavu SdI predviđena posebna struktura. Digitalni potpis obvezan je za obje vrste datoteka.

Slanje ovih datoteka sustavu SdI u Fluentisu se provodi promjenom statusa evidentiranih dokumenata.

XML datoteka generirana prilikom evidentiranja nabavne ili prodajne transakcije dobiva status NIJE PREGLEDANO, nakon čega može prolaziti kroz iste promjene statusa koje su predviđene za XML datoteke prodajnih dokumenata poslane sustavu SdI (pogledajte odjeljak STATUSI DOKUMENATA).

XML dokument zatim se šalje sustavu SdI, koji ga provjerava i preuzima te vraća obavijesti o eventualnom odbacivanju zbog neusklađenosti datoteke ili o uspješnoj dostavi.

Za prodajne dokumente namijenjene kupcima koji nemaju prebivalište ili nisu poslovno nastanjeni u Italiji, elektronički tijek slanja sustavu SdI nikada ne može rezultirati neuspjelom dostavom zbog pogrešne identifikacije primatelja. Razlog je taj što je svrha takvog slanja isključivo obavještavanje Agencije za prihode o poslovnom odnosu s inozemnim kupcem, dok sustav SdI nije odgovoran za dostavu dokumenta primatelju.

Dokumenti izdani inozemnim kupcima moraju se dostaviti uobičajenim načinom slanja. Slanje tih dokumenata sustavu SdI mora se obaviti najkasnije do posljednjeg dana mjeseca koji slijedi nakon datuma izdavanja dokumenta.

Zbog toga je tijek statusa za ove datoteke jednak, neovisno o tome radi li se o XML datotekama prodajnih ili nabavnih računa.

Za detalje o pojedinim statusima pogledajte odjeljak STATUSI DOKUMENATA U FLUENTISU.

U Fluentisu je moguće generirati datoteku za prodajne račune namijenjene kupcima iz EU-a ili izvan EU-a na sljedeće načine:

- putem upravljanja izlaznim ciklusom, kako je opisano u odjeljku Upravljanje izlaznim ciklusom (subjekti identificirani ili s prebivalištem na državnom području Italije i tijela javne uprave). Izrada XML datoteke prepušta se postavkama elektroničkog fakturiranja u šifarniku, a izrada i slanje XML datoteke odvijaju se na isti način kao kod prodajnog računa namijenjenog talijanskom kupcu. Tijek slanja, kojim se upravlja u odjeljku Elektroničko fakturiranje, automatski prepoznaje prodajni dokument namijenjen inozemnom subjektu i stoga zahtijeva obvezno dodavanje digitalnog potpisa.
- putem funkcije Elektroničko fakturiranje sa subjektima koji nemaju prebivalište, opisane u nastavku. Ova funkcija preuzima izlazne račune iz unesenih računovodstvenih knjiženja koji još nisu poslani sustavu SdI putem upravljanja izlaznim ciklusom.

Za ispravno upravljanje prodajnim dokumentima u oba slučaja potrebno je konfigurirati šifarnik kupca tako da se u polju VRSTA ŠIFRE odabere vrijednost „SdI kanal”, a u polje ŠIFRA PRIMATELJA unese niz od sedam znakova „X” („XXXXXXX”).

Za detalje o konfiguraciji šifarnika pogledajte odjeljak Postavljanje šifarnika kontakata.

Datoteke povezane s nabavnim računima inozemnih subjekata moguće je generirati putem funkcije Elektroničko fakturiranje sa subjektima koji nemaju prebivalište, opisane u nastavku.

## Elektroničko fakturiranje sa subjektima koji nemaju prebivalište

Funkcija Administracija > Izjave > Elektroničko fakturiranje sa subjektima koji nemaju prebivalište generira XML datoteke povezane s nabavnim i prodajnim dokumentima koje je moguće pojedinačno proslijediti Agenciji za prihode, kao zamjenu za obvezu izvještavanja putem spesometra.

Prilikom otvaranja funkcije prikazuje se obrazac podijeljen na gornji dio zaglavlja, u kojem je moguće postaviti niz filtara za prikaz i upravljanje XML datotekama koje je potrebno poslati.

Funkcija pomoću filtra VRSTA i filtra STATUS ELEKTRONIČKOG RAČUNA pretražuje stavke povezane s nabavom ili prodajom. U tablici rezultata moguće je pojedinačno ili skupno upravljati promjenama statusa za dokumente s jednakim SdI statusom.

Tablica rezultata prikazuje niz stupaca namijenjenih praćenju i upravljanju datotekama u vezi sa slanjem sustavu SdI, i to:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz sustava SdI (pogledajte odjeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sustav SdI dodjeljuje dokumentu prilikom primitka.
- *Datum primitka SdI*: datum kada je sustav razmjene zaprimio poslani dokument. Ovaj se podatak preuzima iz obavijesti o primitku koju sustav SdI izdaje nakon zaprimanja pošiljke, a prije provođenja formalnih provjera datoteke.
- *Datum zatvaranja*: datum zatvaranja tijeka upravljanja (npr. dokument Dostavljeno).
- *Datum posljednjeg događaja*: datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sustavu SdI.

Na vrpci izbornika, u odjeljku namijenjenom elektroničkom fakturiranju, pomoću funkcije *Registar dokumenata SdI* moguće je pregledati radnje izvršene na odabranom dokumentu. Pomoću funkcije *Ispis* moguće je ispisati povezani XML dokument, dok se funkcijama *Preuzmi privitak* ili *Preuzmi sadržaj registra* preuzima XML datoteka.

Dvostrukim klikom na redak u tablici rezultata otvara se detaljni prikaz odabranog računovodstvenog knjiženja. U samom računovodstvenom knjiženju također je moguće pregledati status obrade datoteke u vezi sa slanjem sustavu SdI.

Prodajne dokumente kojima se upravlja putem funkcije Elektroničko fakturiranje sa subjektima koji nemaju prebivalište moguće je pretraživati aktiviranjem opcije Prodaja u odjeljku Vrsta na ploči s filtrima.

Zatim je potrebno kliknuti gumb Traži na vrpci izbornika kako bi se pokrenulo pretraživanje svih računovodstvenih knjiženja povezanih s prodajnim računovodstvenim predlošcima koji su povezani s vrstom PDV kretanja Prodaja unutar EEZ-a ili Prodaja izvan EEZ-a ili za koje je popunjeno polje „Konto partnera” na ploči Parametri.

Nabavne dokumente kojima se upravlja putem funkcije Elektroničko fakturiranje sa subjektima koji nemaju prebivalište moguće je pretraživati aktiviranjem opcije Nabava u odjeljku Vrsta na ploči s filtrima.

Zatim je potrebno kliknuti gumb Traži na vrpci izbornika kako bi se pokrenulo pretraživanje svih računovodstvenih knjiženja povezanih s prodajnim računovodstvenim predlošcima.

Nabavni dokument inozemnog dobavljača potrebno je preuzeti i evidentirati u računovodstvu pomoću računovodstvenih predložaka koji:

- su povezani s vrstom PDV kretanja NABAVA UNUTAR EEZ-a; ili
- su povezani s vrstom PDV kretanja NABAVA IZVAN EEZ-a; ili
- imaju popunjeno polje Konto partnera na ploči Parametri.

Nakon završetka pretraživanja popunjava se tablica rezultata. Pomoću funkcije za promjenu statusa u odjeljku elektroničkog fakturiranja moguće je ručno mijenjati statuse sve do predviđenog statusa „Za slanje”, kojim se datoteka stavlja u red čekanja za slanje usluzi Fluentis Business Hub.

Ako u instalaciji nije konfigurirana usluga Fluentis Business Hub, moguće je otvoriti funkciju *Registar dokumenata SdI* i preuzeti generiranu XML datoteku za upotrebu izvan Fluentisa.

XML datoteka izrađena tijekom upravljanja statusima od strane operatera mora se digitalno potpisati. Stoga će se, ako je usluga Fluentis Business Hub aktivna, kopija datoteke izraditi u mapi navedenoj u postavkama Konfiguracije veze s Fluentis Business Hubom. U tim je postavkama potrebno navesti privremenu mapu za pohranu XML datoteka koje je potrebno potpisati i iz koje će se naknadno preuzimati potpisane datoteke.

Nakon slanja sustavu SdI datoteka može dobiti jedan od dva statusa:

- *Nije usklađeno*: datoteka sadržava upozorenja zbog kojih je sustav SdI ne može prihvatiti. U tom je slučaju potrebno otvoriti Registar dokumenata SdI, na ploči Registar dokumenata SdI pregledati razlog neusklađenosti, ispraviti eventualnu nepravilnost i ponovno poslati regeneriranu datoteku.
- *Dostavljeno*: datoteka je uspješno poslana i preuzeta u sustavu SdI. U tom je slučaju moguće pregledati rezultat dostave otvaranjem ploče Registar dokumenata SdI u funkciji Registar dokumenata SdI za odabranu datoteku.

Izlaznim dokumentima moguće je upravljati i putem funkcije Izlazni inozemni dokumenti, kojoj se pristupa putem Applications > BizLink > Dokumenti SdI. U toj je funkciji moguće pratiti i mijenjati statuse računovodstvenih knjiženja nabave i prodaje za inozemne subjekte.

U obrascu Izlazni inozemni nabavni dokumenti prikazuju se sve datoteke generirane iz računovodstvenih knjiženja koje pripadaju ovoj vrsti događaja.

Obrazac je podijeljen na gornji dio s filtrima za odabir datoteka kojima se upravlja, među kojima su:

- Od datuma / Do datuma primitka
- Od datuma / Do datuma primitka kupca

U tablici rezultata prikazuju se podaci o datotekama kojima se već upravlja ili kojima tek treba upravljati:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz sustava SdI (pogledajte odjeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sustav SdI dodjeljuje dokumentu prilikom primitka.
- *Datum posljednjeg događaja*: datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sustavu SdI.

Na vrpci izbornika dostupne su funkcije za upravljanje odabranim dokumentom ili dokumentima:

- Gumb Prikaži omogućuje pregled Registra dokumenata SdI, u kojem je moguće pregledati događaje povezane s generiranom XML datotekom, preuzeti je ili promijeniti njezin status.
- Gumb Preuzmi privitak preuzima odabranu datoteku u odabranu mapu datotečnog sustava.
- Gumb Otvori dokument otvara računovodstveno knjiženje povezano s odabranom datotekom.

## Računovodstvena knjiženja

Otvaranjem stavke izbornika Administracija > Knjiženja > Knjiženje, obrazac Pretraživanje računovodstvenih knjiženja prikazuje u odjeljku filtara dodatni proširivi odjeljak s mogućim informacijama o statusu elektroničkog računa, koje se odnose na dokumente povezane sa sustavom razmjene.

Na vrpci izbornika, u odjeljku namijenjenom elektroničkom fakturiranju, pomoću funkcije *Registar dokumenata SdI* moguće je pregledati radnje izvršene na odabranom dokumentu. Pomoću funkcije *Ispis* moguće je ispisati povezani XML dokument, dok se funkcijama *Preuzmi privitak* ili *Preuzmi sadržaj registra* preuzima XML datoteka.

Tablica sa sažetkom rezultata prikazuje nekoliko stupaca u kojima se navode status i rezultat dokumenata u vezi s njihovim slanjem sustavu SdI:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a preuzet je izravno iz sustava SdI (pogledajte odjeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se izrađuje prilikom prelaska dokumenta u status GENERIRANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku računa koju je potrebno poslati sustavu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sustav SdI dodjeljuje dokumentu prilikom primitka (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum primitka SdI*: datum kada je sustav razmjene zaprimio poslani dokument. Ovaj se podatak preuzima iz obavijesti o primitku koju sustav SdI izdaje nakon zaprimanja pošiljke, a prije provođenja formalnih provjera datoteke (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum zatvaranja*: datum zatvaranja tijeka upravljanja (npr. dokument Dostavljeno) (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).
- *Datum posljednjeg događaja*: datum posljednje promjene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sustavu SdI.