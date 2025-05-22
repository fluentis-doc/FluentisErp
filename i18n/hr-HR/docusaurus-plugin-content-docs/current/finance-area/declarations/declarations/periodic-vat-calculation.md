---
title: Periodični obračun PDV-a  
sidebar_position: 4
---

Iz ovog obrasca moguće je upravljati poreznim obvezama (uvedenim člankom 21-bis Zakona D.L. 193/2016, koji stupa na snagu od 2017. godine) koji predviđa elektroničko slanje komunikacije sa sažetim podacima o periodičnim obračunima PDV-a (mјesečnim ili tromjesečnim).

Korištenjem tipke **Traži** koji se nalazi na traci izbornika, moguće je pregledati popis već obrađenih komunikacija. Moguće je izmijeniti ih (tipka **Izmjeni**), ukloniti ih (tipka **Ukloni**) ili ih jednostavno pregledati (tipka **Prikaži**).

Za unos nove komunikacije pritisnite tipku **Novi**.

**POSTUPAK UNOSA**:

- naznačite **Godinu** predmetnog obavještenja i broj **Kvartala** koji treba prijaviti. U ovom trenutku program će provjeriti postoji li već prijava za ovaj period i u slučaju negativnog odgovora (u suprotnom će se prikazati obavijest) automatski će kreirati naziv koji će se dodijeliti telematičkom datoteci i prikazati tablice koje se odnose na tri mjeseca kvartala s pripadajućim stavkama prema ministarskom obrascu.

- Ispuniti ostala polja zaglavlja:

  **Porezni identifikacijski broj**: U slučaju da je društvo društvo s ograničenom odgovornošću, bit će obavezno navesti porezni identifikacijski broj fizičke osobe koja potpisuje komunikaciju i pripadajući **Kod radnog mjesta**.;

  **Deklarant:** kao alternativa unosu prethodnog polja (OIB), moguće je odabrati potpisnika – zaposlenika iz padajućeg izbornika povezanog s tablicom Zaposlenici, u koju prethodno mora biti unesen navedeni zaposlenik (npr. Direktor, Voditelj računovodstva itd.) zajedno s njegovim OIB-om i šifrom funkcije;

  **Šifra uloge**: padajući izbornik povezan je s fiksnom tablicom koja sadrži šifre definirane prema obrascu propisanom od strane nadležnog ministarstva;  

  **Srednji porezni kod**: ako se koristi ovlašteni posrednik za podnošenje prijave (npr. porezni savjetnik, računovodstveni servis itd.), ovdje se unosi njegov OIB.  

  **Datum opredjeljenja:** polje za unos datuma kada je ovlašteni posrednik preuzeo obvezu elektroničkog podnošenja izjave;  

  **Kontroliranje PDV broja:** (grupno poravnanje PDV-a) Ako je Obavijest podnijeta od strane tijela ili trgovačkog društva koje je koristilo postupak grupnog ostvarenja PDV-a u tromjesečju, potrebno je navesti PDV broj tijela ili društva koje kontrolira (također u Obavijesti koju podnosi taj subjekt za svoju pojedinačnu poziciju). Ovo polje treba ispuniti i u slučaju kada je tijelo ili društvo s mjesečnim razdobljima obračuna izašlo iz grupnog ostvarenja PDV-a u drugom ili trećem mjesecu tromjesečja.

  **Opis grupiranja**: označiti kućicu u slučaju da se komunikacija odnosi na grupno poravnanje PDV-a (pogledati upute ministarstva).  
Aktiviranjem ove opcije za društva unutar grupe, neki se podaci, poput PDV-a za uplatu, neće izračunavati (budući da uplatu vrši matično društvo). 

NAPOMENA: komunikacija izvršena na ovaj način oslanja se na prethodnu obradu (novu) funkcionalnost Grupne likvidacije PDV-a (Namirenje PDV-a Grupe), koja izračunava dugovanja PDV-a raznih tvrtki unutar grupe i prenosi ih na matičnu tvrtku.

  **Zadnji mjesec**: In caso di sopravvenuta mancanza dei requisiti per avvalersi della procedura di liquidazione dell'IVA di gruppo, indicare l'ultimo mese di controllo (esempio “02” per il mese di febbraio - Vedere istruzioni ministeriali).

  **Potpis:** polje **OBAVEZNO**, potrebno ga je uvijek unijeti.

  **Potpis posrednika:** da se primijene ako su ispunjena polja vezana uz ovlaštenog posrednika;  

  **Posrednička obveza**: padajući izbornik je povezan s fiksnom tablicom i mora se popuniti. U slučaju da prijavu podnosi posrednik, treba odabrati je li obrazac pripremio obveznik ili sam posrednik, a u suprotnom ostaviti opciju "nijedno".

- Pritisnite **Spremi** za spremanje podataka u zaglavlju.

- Pritisnite **Izračunaj** tromjesečje kako biste izvršili izračun podataka za tri mjeseca tromjesečja. U tom trenutku, polja će biti automatski popunjena, no uvijek ih je moguće ručno uređivati za eventualne ispravke. Pažnja: ako ponovno pritisnete Izračunaj, podaci izračunati od strane sustava bit će obnovljeni.

- Pritisnite tipku **Izvezi** Za generiranje i pohranu elektroničkog dokumenta u formatu .xml u upravljanju dokumentima Fluentis, pritisnite gumb za upravljanje dokumentima izravno u obrascu i odaberite ga za pohranu kopije datoteke na vlastitom računaru za daljnju elektroničku predaju ili prijenos ovlaštenom posredniku. Također, moguće je izvršiti ispis (ili pregled u pretpregledu) podataka na obrascu prema ministarskoj formi.  

**PAŽNJA**:

Ispravna obrada podataka predloženih od strane računovodstvene procedure, kako bi bili u skladu s rezultatima različitih **[periodičnih obračuna PDV-a](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement)**,  ovisi osobito o pravilnom aktiviranju / omogućavanju, za potrebe izračuna, različitih PDV kodova korištenih u knjigovodstvenim zapisima.  

Za provjeru ispravnog postavljanja, otvorite tablicu **[stopa / načini PDV-a](/docs/configurations/tables/finance/vat-rates)** i provjerite osobito kolonu vezanu uz oznaku u PDV prijavi.  

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image01.png)

S uključenim flagom, odabrani PDV kod bit će uključen u izračun i prikazan u fiskalnom obrascu, dok se s isključenim flagom vrijednosti neće uključiti.

Tipično, svi obični PDV kodovi uvijek moraju biti uključeni. Kodovi isključenja (npr. ex. art. 15 dpr 633/72) se, međutim, NE smiju uključiti. Umjesto toga, potrebno je uključiti kodove koji se odnose na neobvezivanje (npr. za transakcije unutar zajednice ili u slučaju obrnute porezne obveze).

**NAPOMENA** Prema ministarskim uputama, iznimku čine kodovi isključenja koji se odnose na "operacije (aktivne) koje nisu podložne zbog nedostatka teritorijalnog preduvjeta prema člancima od 7 do 7-septies za koje je obvezno izdavanje računa prema odredbama iz članka 21, stavak 6-bis", koji TREBAJU biti uključeni u deklaraciju (redak VP2).

Preporučuje se konzultirati propise o PDV-u i ministarske upute vezane uz godišnju PDV prijavu (ili jedan od drugih modela prijave PDV podataka koji slijede istu "logiku") radi ispravnog utvrđivanja obrade raznih slučajeva.
A naslov kao primjer, pogrešna postavka, isključujući, na primjer, kod koji nije predmet oporezivanja, odredit će podudaranje između obrasca i periodičnih obračuna u vezi s porezom, ali će biti razlika u vrijednostima vezanim uz oporezive iznose (niže u komunikaciji u odnosu na obračune).

---

**NAPOMENA:**
Računanje polja VP2 (u slučaju kada se želi izvršiti usporedba i pomirenje s PDV-om i računovodstvenim podacima) uzima u obzir sljedeće vrste pokreta:  
PDV prodaje normalnog režima 
PDV prodaje IntraCEE 
PDV prodaje ExtraCEE  
Prodaja s odgođenim PDV-om 
Korisnici 
Prodaje u poljoprivrednom režimu 
PDV prodaje s podijeljenim plaćanjem 

**Stoga se automatski isključuju podaci o osnovici za PDV s strane prodaje (proizlaze iz automatskog knjiženja na registrima prodaje) povezani s kupnjama unutar zajednice i u reverse charge postupku.**
To je u skladu s ministarskim uputama.

---

**TEHNIČKA NAPOMENA**

per izvođenje XML-a potrebno je:

- Da je aktivirana usluga Windows na poslužitelju Artinfo Bizlink connector  

- Da je kreiran konektor ComunicazioneIvaTrim koji treba biti konfiguriran kao na prikazanoj slici  

- Da postoji fizička mapa za izlazne datoteke (na poslužitelju) koja je konfigurirana u konektoru (na primjer, "Outgoing")  

- Da u tablici Fluentis **Tipovi dokumenta**  postoji tip **Ostali dokumenti** konfigurirano kao na slici ispod.  

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image02.png)

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image03.png)

---

### VIDEO TUTORIJALI

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

