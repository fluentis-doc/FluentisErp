---
title: Upravljanje ulaznim ciklusom
sidebar_position: 7
---

NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM

U Fluentisu je, nakon konfigurisanja usluge Fluentis Business Hub, moguće uvesti ulazne fakture dobavljača koje prolaze kroz sistem razmene (Sistema di Interscambio).

Ovde opisani način preuzimanja odnosi se na fakture dobavljača koji su identifikovani ili imaju prebivalište na državnoj teritoriji Italije i čije fakture prolaze kroz sistem razmene. Za slanje podataka sistemu SdI o nabavnim fakturama inostranih dobavljača upućujemo na odeljak Slanje nabavnih/prodajnih faktura inostranih dobavljača/kupaca u sistem SdI (subjekti koji NISU identifikovani ili nemaju prebivalište na državnoj teritoriji Italije).

Da bi mogli da primaju fakture, dobavljačima je potrebno dostaviti sopstvenu šifru primaoca koju Fluentis dodeljuje nakon aktivacije usluge Fluentis Business Hub. Time se dobavljaču omogućava ispravno popunjavanje XML datoteka dokumenata.

Konfiguracija Fluentisa zahteva podešavanje istih podataka koji su potrebni za upravljanje izlaznim ciklusom, kao što je opisano u poglavlju Konfiguracija veze sa Fluentis Business Hub-om.

Nakon konfigurisanja komunikacije sa uslugom Fluentis Business Hub, fakture iz ulaznog ciklusa prosleđuju se ugovorenoj usluzi, a XML datoteke faktura i pripadajući prilozi preuzimaju se u Fluentis putem BizLinka.

Korisnik je odgovoran za računovodstveno knjiženje ili evidentiranje nabavnog dokumenta u ulaznom ciklusu. Nakon što pronađe odgovarajuću elektronsku XML datoteku, može je povezati sa knjiženjem ili kreiranim dokumentom.

Nakon pretrage i pregleda dokumenata uvezenih putem postupka BizLink, korisnik može da izabere jedan dokument i poveže ga sa računovodstvenim knjiženjem, nabavnim dokumentom ili dokumentom obračuna naknade koji već postoje u Fluentisu.

## Operativni tok nabavnih dokumenata

Nakon uvoza u Fluentis, elektronski nabavni dokument dobija status **NIJE DODELJENO**. Može preći samo u status **PRIMLJENO**, nakon povezivanja sa odgovarajućom računovodstvenom stavkom, ili se vratiti u status **NIJE DODELJENO**.

Za detaljnije informacije o značenju pojedinačnih statusa pogledajte odeljke koji se odnose na upravljanje različitim STATUSIMA DOKUMENATA.

## Promena i upravljanje statusima dokumenata

Za promenu i upravljanje nabavnim dokumentom potrebno je koristiti funkciju **Ulazni nabavni dokumenti** u aplikaciji BizLink – Dokumenti SdI.

Prilikom otvaranja funkcije prikazuje se ekran *Ulazni nabavni dokumenti*, podeljen na zaglavlje sa poljima za filtriranje i pretragu dokumenata i tabelu sa rezultatima.

Na traci menija dostupne su sledeće funkcije:

- Dugme *Otvori dokument* aktivno je samo ako izabrani dokument ima status PRIMLJENO. Otvara računovodstveno knjiženje, nabavni dokument ili fakturu za obračun naknade sa kojom je povezana XML datoteka.
- Dugme *Prikaži* omogućava pregled izabrane XML datoteke otvaranjem Registra dokumenata SdI.
- Dugme *Preuzmi prilog* preuzima izabranu datoteku iz panela Prilozi u izabranu fasciklu datotečnog sistema.

U gornjem delu ekrana nalaze se polja za filtriranje rezultata prikazanih u donjoj tabeli, koja sadrži i sledeće detaljne informacije:

- *SdI status*: status dokumenta nakon uvoza u Fluentis:
    - *Nije dodeljeno*: faktura još nije povezana sa računovodstvenim knjiženjem, fakturom iz ulaznog ciklusa ili dokumentom izdatim primaocu naknade.
    - *Primljeno*: faktura je povezana.
- *Tip*: referentna šifra tipa prodajnog dokumenta.
- *Datum izvornog dokumenta*, *Broj izvornog dokumenta*: datum i broj preuzetog dokumenta.
- *Dobavljač*: izdavalac dokumenta.
- *Naziv datoteke SdI*: naziv XML datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (za detalje o formiranju naziva datoteke pogledajte odeljak Naziv datoteke).
- *Datum poslednjeg događaja*: odnosi se na poslednju radnju koju je izvršio operater ili poslednje obaveštenje primljeno od sistema SdI tokom postupka upravljanja dokumentom.

Uvezene dokumente moguće je povezati sa računovodstvenim stavkama u Fluentisu putem sledećih funkcija:

1. Ulazni nabavni dokumenti u aplikaciji BizLink – Dokumenti SdI
2. Računovodstveno knjiženje nabavnog dokumenta
3. Obrazac za upravljanje nabavnim dokumentom
4. Obrazac za upravljanje obračunom naknade

U nastavku su opisane ove četiri mogućnosti.

### 1) Povezivanje XML dokumenta putem funkcije za uvoz

Pomoću funkcije *Ulazni nabavni dokumenti* u aplikaciji BizLink – Dokumenti SdI moguće je povezati XML dokument sa računovodstvenim knjiženjem, nabavnim dokumentom ili obračunom naknade, polazeći od dokumenta uvezenog u Fluentis.

Nakon pretrage i pronalaženja datoteke koju je potrebno povezati, moguće ju je izabrati u tabeli Registra dokumenata SdI dvostrukim klikom na red dokumenta ili klikom na dugme PRIKAŽI na traci menija.

Otvara se Registar dokumenata SdI sa detaljima preuzete datoteke. Na tom ekranu moguće je:

- **Povezati datoteku sa nabavnim dokumentom** evidentiranim u odeljku Nabava u Fluentisu, pomoću funkcije *Poveži sa nabavom*.
- **Povezati dokument sa postojećim računovodstvenim knjiženjem**. Pomoću funkcije *Poveži sa knjiženjima* moguće je izabrati odgovarajuće računovodstveno knjiženje dokumenta sa spiska računovodstvenih knjiženja.
- **Povezati dokument sa obračunom naknade za stručnjaka**. Izborom radnje *Poveži sa primaocima naknada* na traci menija moguće je izabrati dokument koji odgovara obračunu naknade povezanom sa uvezenom XML datotekom, sa spiska obračuna naknada dostupnih u Fluentisu.

Nakon povezivanja putem jedne od prethodno opisanih funkcija, dokument dobija status Primljeno. Prilikom prelaska u status Dokument primljen navode se datum i vreme povezivanja.

Dokument je moguće ponovo vratiti u status Nije dodeljeno ako se ukaže potreba za povratkom na prethodni status.

### 2) Povezivanje XML dokumenta putem računovodstvenog knjiženja nabavke

Za povezivanje računovodstvenog knjiženja sa XML datotekom preuzetom u Fluentis potrebno je otvoriti računovodstveno knjiženje putem menija Administracija – Knjiženja – Knjiženje i pronaći knjiženje kojim se želi upravljati.

U obrascu Pretraga računovodstvenih knjiženja dodato je nekoliko kolona za upravljanje informacijama o datoteci:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz sistema SdI (pogledajte odeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sistem SdI dodeljuje dokumentu prilikom prijema.
- *Datum prijema SdI*: datum kada je sistem razmene primio poslati dokument. Ovaj podatak preuzima se iz obaveštenja o prijemu koje sistem SdI izdaje nakon prijema pošiljke, a pre sprovođenja formalnih provera datoteke.
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument Dostavljeno).
- *Datum poslednjeg događaja*: datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sistemu SdI.

Izborom računovodstvenog knjiženja koje je potrebno povezati i promenom statusa elektronskog fakturisanja u PRIMLJENO otvara se spisak datoteka preuzetih iz sistema SdI koje još nisu povezane. Dovoljno je izabrati jednu od ponuđenih datoteka kako bi se uspostavila odgovarajuća veza.

U istom obrascu, otvaranjem Registra dokumenata SdI, moguće je pregledati izvršene radnje na dokumentu. Pomoću funkcije *Štampanje* moguće je odštampati povezani XML dokument, dok se funkcijama *Preuzmi prilog* ili *Preuzmi sadržaj registra* izabrana XML datoteka preuzima iz panela *Prilozi* ili panela *Registar dokumenata SdI*.

### 3) Povezivanje XML datoteke putem upravljanja nabavnim dokumentima: Nabava – Nabavne fakture – Nabavne fakture

Za povezivanje XML datoteke sa nabavnim dokumentom potrebno je otvoriti funkciju Nabava – Nabavne fakture, pronaći datoteke koje je potrebno povezati u tabeli za upravljanje, prema potrebi koristeći i nove filtere povezane sa elektronskim fakturisanjem, i pregledati status dokumenta u kolonama namenjenim upravljanju datotekama u sistemu SdI.

Izborom dokumenta sa statusom NIJE DODELJENO koji je potrebno povezati sa XML datotekom i promenom njegovog statusa u PRIMLJENO putem trake menija otvara se dijalog za izbor uvezenih nabavnih datoteka. U njemu je potrebno izabrati datoteku koju želite da povežete.

Status dokumenta time se menja u PRIMLJENO, ali ga je i dalje moguće vratiti na prethodni status putem trake menija.

U istom obrascu, otvaranjem Registra dokumenata SdI, moguće je pregledati izvršene radnje na dokumentu. Pomoću funkcije Štampanje moguće je odštampati povezani XML dokument, dok se funkcijama Preuzmi prilog ili Preuzmi sadržaj registra izabrana XML datoteka preuzima iz panela „Prilozi”, odnosno panela „Registar dokumenata SdI”.

XML datoteku primljenu od dobavljača moguće je povezati sa nabavnom fakturom i direktnim otvaranjem nabavnog dokumenta, a zatim izborom XML datoteke koju želite da povežete među datotekama ponuđenim putem funkcije promene statusa Primljeno na traci menija.

### 4) Povezivanje XML dokumenta putem funkcije za upravljanje obračunima naknada: Administracija – Obračuni naknada – Obračuni naknada

Uvezena XML datoteka nabavke može se odnositi na dokumente koje su izdali stručnjaci i koji su evidentirani u Fluentisu putem funkcije za upravljanje obračunima naknada.

Za povezivanje datoteke sa postojećim knjiženjem potrebno je otvoriti meni Administracija – Obračuni naknada – Obračuni naknada, pronaći dokument koji je potrebno povezati u tabeli za upravljanje, prema potrebi koristeći i nove filtere povezane sa elektronskim fakturisanjem, i pregledati status dokumenta u kolonama namenjenim upravljanju datotekama u sistemu SdI.

## Slanje nabavnih/prodajnih faktura inostranih dobavljača/kupaca u sistem SdI (subjekti koji nisu identifikovani ili nemaju prebivalište na državnoj teritoriji Italije)

Važeći propisi o izveštavanju Agencije za prihode predviđaju da poreski obveznici za potrebe PDV-a prijavljuju i podatke o transakcijama isporuke dobara i pružanja usluga koje su IZVRŠENE i PRIMLJENE od subjekata koji NISU identifikovani ili nemaju prebivalište na državnoj teritoriji Italije.

Za IZDATE dokumente moguće je koristiti istu strukturu predviđenu za italijanske elektronske fakture, dok je za slanje nabavnih dokumenata inostranih dobavljača sistemu SdI predviđena posebna struktura. Digitalni potpis obavezan je za obe vrste datoteka.

Slanje ovih datoteka sistemu SdI u Fluentisu se obavlja promenom statusa evidentiranih dokumenata.

XML datoteka generisana prilikom evidentiranja nabavne ili prodajne transakcije dobija status NIJE PREGLEDANO, nakon čega može prolaziti kroz iste promene statusa koje su predviđene za XML datoteke prodajnih dokumenata poslate sistemu SdI (pogledajte odeljak STATUSI DOKUMENATA).

XML dokument zatim se šalje sistemu SdI, koji ga proverava i preuzima, a potom vraća obaveštenja o eventualnom odbacivanju zbog neusaglašenosti datoteke ili o uspešnoj isporuci.

Za prodajne dokumente namenjene kupcima koji nemaju prebivalište ili nisu poslovno nastanjeni u Italiji, elektronski tok slanja sistemu SdI nikada ne može rezultirati neuspešnom isporukom zbog pogrešne identifikacije primaoca. Razlog je to što je svrha takvog slanja isključivo obaveštavanje Agencije za prihode o poslovnom odnosu sa inostranim kupcem, dok sistem SdI nije odgovoran za isporuku dokumenta primaocu.

Dokumenti izdati inostranim kupcima moraju se dostaviti uobičajenim načinom slanja. Slanje tih dokumenata sistemu SdI mora se obaviti najkasnije do poslednjeg dana meseca koji sledi nakon datuma izdavanja dokumenta.

Zbog toga je tok statusa za ove datoteke jednak, nezavisno od toga da li se radi o XML datotekama prodajnih ili nabavnih faktura.

Za detalje o pojedinačnim statusima pogledajte odeljak STATUSI DOKUMENATA U FLUENTISU.

U Fluentisu je moguće generisati datoteku za prodajne fakture namenjene kupcima iz EU-a ili izvan EU-a na sledeće načine:

- putem upravljanja izlaznim ciklusom, kao što je opisano u odeljku Upravljanje izlaznim ciklusom (subjekti identifikovani ili sa prebivalištem na državnoj teritoriji Italije i organi javne uprave). Izrada XML datoteke prepušta se podešavanjima elektronskog fakturisanja u šifarniku, a izrada i slanje XML datoteke odvijaju se na isti način kao kod prodajne fakture namenjene italijanskom kupcu. Tok slanja, kojim se upravlja u odeljku Elektronsko fakturisanje, automatski prepoznaje prodajni dokument namenjen inostranom subjektu i zato zahteva obavezno dodavanje digitalnog potpisa.
- putem funkcije Elektronsko fakturisanje sa subjektima koji nemaju prebivalište, opisane u nastavku. Ova funkcija preuzima izlazne fakture iz unetih računovodstvenih knjiženja koje još nisu poslate sistemu SdI putem upravljanja izlaznim ciklusom.

Za ispravno upravljanje prodajnim dokumentima u oba slučaja potrebno je konfigurisati šifarnik kupca tako da se u polju TIP ŠIFRE izabere vrednost „SdI kanal”, a u polje ŠIFRA PRIMAOCA unese niz od sedam znakova „X” („XXXXXXX”).

Za detalje o konfiguraciji šifarnika pogledajte odeljak Podešavanje šifarnika kontakata.

Datoteke povezane sa nabavnim fakturama inostranih subjekata moguće je generisati putem funkcije Elektronsko fakturisanje sa subjektima koji nemaju prebivalište, opisane u nastavku.

## Elektronsko fakturisanje sa subjektima koji nemaju prebivalište

Funkcija Administracija > Izjave > Elektronsko fakturisanje sa subjektima koji nemaju prebivalište generiše XML datoteke povezane sa nabavnim i prodajnim dokumentima koje je moguće pojedinačno proslediti Agenciji za prihode, kao zamenu za obavezu izveštavanja putem spesometra.

Prilikom otvaranja funkcije prikazuje se obrazac podeljen na gornji deo zaglavlja, u kojem je moguće podesiti niz filtera za prikaz i upravljanje XML datotekama koje je potrebno poslati.

Funkcija pomoću filtera TIP i filtera STATUS ELEKTRONSKE FAKTURE pretražuje stavke povezane sa nabavom ili prodajom. U tabeli rezultata moguće je pojedinačno ili grupno upravljati promenama statusa za dokumente sa jednakim SdI statusom.

Tabela rezultata prikazuje niz kolona namenjenih praćenju i upravljanju datotekama u vezi sa slanjem sistemu SdI, i to:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz sistema SdI (pogledajte odeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sistem SdI dodeljuje dokumentu prilikom prijema.
- *Datum prijema SdI*: datum kada je sistem razmene primio poslati dokument. Ovaj podatak preuzima se iz obaveštenja o prijemu koje sistem SdI izdaje nakon prijema pošiljke, a pre sprovođenja formalnih provera datoteke.
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument Dostavljeno).
- *Datum poslednjeg događaja*: datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sistemu SdI.

Na traci menija, u odeljku namenjenom elektronskom fakturisanju, pomoću funkcije *Registar dokumenata SdI* moguće je pregledati radnje izvršene na izabranom dokumentu. Pomoću funkcije *Štampanje* moguće je odštampati povezani XML dokument, dok se funkcijama *Preuzmi prilog* ili *Preuzmi sadržaj registra* preuzima XML datoteka.

Dvostrukim klikom na red u tabeli rezultata otvara se detaljni prikaz izabranog računovodstvenog knjiženja. U samom računovodstvenom knjiženju takođe je moguće pregledati status obrade datoteke u vezi sa slanjem sistemu SdI.

Prodajne dokumente kojima se upravlja putem funkcije Elektronsko fakturisanje sa subjektima koji nemaju prebivalište moguće je pretraživati aktiviranjem opcije Prodaja u odeljku Tip na panelu sa filterima.

Zatim je potrebno kliknuti na dugme Traži na traci menija kako bi se pokrenula pretraga svih računovodstvenih knjiženja povezanih sa prodajnim računovodstvenim šablonima koji su povezani sa tipom PDV kretanja Prodaja unutar EEZ-a ili Prodaja izvan EEZ-a ili za koje je popunjeno polje „Konto partnera” na panelu Parametri.

Nabavne dokumente kojima se upravlja putem funkcije Elektronsko fakturisanje sa subjektima koji nemaju prebivalište moguće je pretraživati aktiviranjem opcije Nabava u odeljku Tip na panelu sa filterima.

Zatim je potrebno kliknuti na dugme Traži na traci menija kako bi se pokrenula pretraga svih računovodstvenih knjiženja povezanih sa prodajnim računovodstvenim šablonima.

Nabavni dokument inostranog dobavljača potrebno je preuzeti i evidentirati u računovodstvu pomoću računovodstvenih šablona koji:

- su povezani sa tipom PDV kretanja NABAVKA UNUTAR EEZ-a; ili
- su povezani sa tipom PDV kretanja NABAVKA IZVAN EEZ-a; ili
- imaju popunjeno polje Konto partnera na panelu Parametri.

Nakon završetka pretrage popunjava se tabela rezultata. Pomoću funkcije za promenu statusa u odeljku elektronskog fakturisanja moguće je ručno menjati statuse sve do predviđenog statusa „Za slanje”, kojim se datoteka stavlja u red čekanja za slanje usluzi Fluentis Business Hub.

Ako u instalaciji nije konfigurisana usluga Fluentis Business Hub, moguće je otvoriti funkciju *Registar dokumenata SdI* i preuzeti generisanu XML datoteku za upotrebu izvan Fluentisa.

XML datoteka izrađena tokom upravljanja statusima od strane operatera mora se digitalno potpisati. Zato će se, ako je usluga Fluentis Business Hub aktivna, kopija datoteke kreirati u fascikli navedenoj u podešavanjima Konfiguracije veze sa Fluentis Business Hub-om. U tim podešavanjima potrebno je navesti privremenu fasciklu za čuvanje XML datoteka koje je potrebno potpisati i iz koje će se naknadno preuzimati potpisane datoteke.

Nakon slanja sistemu SdI datoteka može dobiti jedan od dva statusa:

- *Nije usaglašeno*: datoteka sadrži upozorenja zbog kojih sistem SdI ne može da je prihvati. U tom slučaju potrebno je otvoriti Registar dokumenata SdI, na panelu Registar dokumenata SdI pregledati razlog neusaglašenosti, ispraviti eventualnu nepravilnost i ponovo poslati regenerisanu datoteku.
- *Dostavljeno*: datoteka je uspešno poslata i preuzeta u sistemu SdI. U tom slučaju moguće je pregledati rezultat isporuke otvaranjem panela Registar dokumenata SdI u funkciji Registar dokumenata SdI za izabranu datoteku.

Izlaznim dokumentima moguće je upravljati i putem funkcije Izlazni inostrani dokumenti, kojoj se pristupa putem Applications > BizLink > Dokumenti SdI. U toj funkciji moguće je pratiti i menjati statuse računovodstvenih knjiženja nabavke i prodaje za inostrane subjekte.

U obrascu Izlazni inostrani nabavni dokumenti prikazuju se sve datoteke generisane iz računovodstvenih knjiženja koje pripadaju ovoj vrsti događaja.

Obrazac je podeljen na gornji deo sa filterima za izbor datoteka kojima se upravlja, među kojima su:

- Od datuma / Do datuma prijema
- Od datuma / Do datuma prijema kupca

U tabeli rezultata prikazuju se podaci o datotekama kojima se već upravlja ili kojima tek treba upravljati:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz sistema SdI (pogledajte odeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sistem SdI dodeljuje dokumentu prilikom prijema.
- *Datum poslednjeg događaja*: datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sistemu SdI.

Na traci menija dostupne su funkcije za upravljanje izabranim dokumentom ili dokumentima:

- Dugme Prikaži omogućava pregled Registra dokumenata SdI, u kojem je moguće pregledati događaje povezane sa generisanom XML datotekom, preuzeti je ili promeniti njen status.
- Dugme Preuzmi prilog preuzima izabranu datoteku u izabranu fasciklu datotečnog sistema.
- Dugme Otvori dokument otvara računovodstveno knjiženje povezano sa izabranom datotekom.

## Računovodstvena knjiženja

Otvaranjem stavke menija Administracija > Knjiženja > Knjiženje, obrazac Pretraga računovodstvenih knjiženja prikazuje u odeljku filtera dodatni proširivi odeljak sa mogućim informacijama o statusu elektronske fakture, koje se odnose na dokumente povezane sa sistemom razmene.

Na traci menija, u odeljku namenjenom elektronskom fakturisanju, pomoću funkcije *Registar dokumenata SdI* moguće je pregledati radnje izvršene na izabranom dokumentu. Pomoću funkcije *Štampanje* moguće je odštampati povezani XML dokument, dok se funkcijama *Preuzmi prilog* ili *Preuzmi sadržaj registra* preuzima XML datoteka.

Tabela sa sažetkom rezultata prikazuje nekoliko kolona u kojima se navode status i rezultat dokumenata u vezi sa njihovim slanjem sistemu SdI:

- *SdI status*: prikazuje opis statusa dokumenta, uključujući interni status upravljanja u Fluentisu i status koji je prijavio Fluentis Business Hub, a koji je preuzet direktno iz sistema SdI (pogledajte odeljak STATUSI DOKUMENATA).
- *Naziv datoteke SdI*: naziv datoteke koja se kreira prilikom prelaska dokumenta u status GENERISANO. U izvornom obliku ili nakon dodavanja digitalnog potpisa predstavlja datoteku fakture koju je potrebno poslati sistemu SdI (Naziv datoteke).
- *SdI ID*: jedinstveni identifikator koji sistem SdI dodeljuje dokumentu prilikom prijema (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum prijema SdI*: datum kada je sistem razmene primio poslati dokument. Ovaj podatak preuzima se iz obaveštenja o prijemu koje sistem SdI izdaje nakon prijema pošiljke, a pre sprovođenja formalnih provera datoteke (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum zatvaranja*: datum zatvaranja toka upravljanja (npr. dokument Dostavljeno) (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).
- *Datum poslednjeg događaja*: datum poslednje promene statusa datoteke, bilo ručno ili kao rezultat napredovanja obrade u sistemu SdI.