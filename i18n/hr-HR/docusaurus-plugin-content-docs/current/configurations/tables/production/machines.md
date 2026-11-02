---
title: Strojevi
sidebar_position: 9
---

U ovoj se tablici definiraju svi strojevi koji se koriste u različitim tehnološkim postupcima, pri čemu je svaki povezan s jednim centrom troška.

Tablice koje se odnose na strojeve i grupe radnika važne su za definiranje troška pojedinih faza jer se zbrojem umnoška satnog troška stroja i strojnog vremena te umnoška satnog troška grupe radnika i radnog vremena operatera dobiva trošak faze obrade.

Tablica omogućuje unos novih zapisa ili traženje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

**Traženje strojeva**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos strojeva**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

Za novi zapis u tablici *Strojevi* potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifru** i **Opis** stroja. Također je moguće odrediti je li stroj **Aktivan**, povezati ga s odgovarajućim centrom tvrtke i unijeti ostale podatke.

*Specifična polja*:

**Stroj**: šifra stroja;

**Opis**: opis stroja;

**Aktivno**: označava je li stroj aktivan, odnosno može li se koristiti i planirati;

**Deklaracija o materijalima (mobile)**: koristi se u obrascu za izvještavanje o proizvodnji u WMS-u. Ako je aktivirano, prilikom evidentiranja potrebno je unijeti i utrošene materijale;

**Ispiši etiketu**: koristi se u obrascu za izvještavanje o proizvodnji u WMS-u. Ako je aktivirano, nakon potvrde izvještaja o proizvodnji ispisuju se i pripadajuće etikete;

**Centri rada**: označava radni centar s kojim je stroj povezan. Više strojeva može biti povezano s istim radnim centrom, a među njima je moguće odabrati onaj koji će se koristiti u widgetu **Stroj** na [kartici Proizvodnja u MES-u](/docs/production/mes/mes-main-form);

**Centar troška**: označava centar troška na koji se stroj odnosi;

**Sektori/Odjeli**: označava šifru odjela kojem stroj pripada;

**Klasa stroja**: označava klasu stroja (ako je stroj definiran kao artikl);

**Šifra artikla stroja**: označava šifru artikla (ako je stroj definiran kao artikl);

**Mjesto proizvodnje**: ako postoji više proizvodnih pogona, označava šifru mjesta proizvodnje na kojem se stroj nalazi;

**Opis proizvodne lokacije**: označava opis mjesta proizvodnje;

**Lokacija**:

**Datum nabave**: označava datum nabave stroja;

**Predšifre osnovnog sredstva**: označava predšifru osnovnog sredstva;

**Broj**: označava broj osnovnog sredstva;

**Opis**: označava opis osnovnog sredstva;

**Narudžba**: označava broj dokumenta nabave osnovnog sredstva;

**Datum instalacije**: označava datum instalacije stroja;

**Datum unosa**: označava datum unosa stroja;

**Datum zadnje izmjene**: označava datum posljednje izmjene stroja;

**Opis centra troška**: označava opis centra troška na koji se stroj odnosi;

**Opis sektora/odjela**: označava opis odjela kojem stroj pripada;

**Opis artikla (stavke) stroja**: označava opis artikla (ako je stroj definiran kao artikl);

**Tip vremena deklaracije (evidentiranja)**: određuje način izračuna trajanja u izvještajima:
- *Automatski*: trajanje se izračunava na temelju vremena proteklog od prethodnog izvještaja;
- *Iz pojedinosti*: trajanje se izračunava na temelju detaljnih izvještaja operatera i strojeva;
- *Ručno*: trajanje se unosi izravno u izvještaj, bez ponovnog izračuna.

Ako je odabrana posljednja opcija, trajanje je potrebno ručno navesti i u izvještajima o proizvodnji u WMS-u koji se odnose na ovaj stroj.

<details>
<summary>Sljedeća se polja koriste isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).</summary>

**Radni raspored**: odaberite standardni radni raspored stroja. Ako odaberete radni raspored koji obuhvaća dulje vrijeme od radnog rasporeda pripadajućeg radnog centra, prednost će ipak imati raspored radnog centra. Uz iznimku radnika, za sve ostale resurse pauza unutar radnog rasporeda neće se uzimati u obzir. Samo radnici imaju fizičku i zakonsku potrebu za pauzom. Ako je za rad stroja potrebna prisutnost operatera, stroj će se morati prilagoditi pauzi operatera, pa će broj stvarno raspoloživih radnih sati ovisiti o operateru.

Primjerice, ako je radni raspored operatera od 08:00 do 12:00 i od 13:00 do 17:00, stroj neće raditi tijekom pauze, čak i ako je za njega postavljen radni raspored bez pauze, od 08:00 do 17:00. Razlika između postavljanja radnog rasporeda stroja s pauzom ili bez nje odnosi se samo na kapacitet prikazan u odgovarajućem histogramu opterećenja. U navedenom primjeru, ako se postavi radni raspored bez pauze, histogram će prikazivati kapacitet od 9 sati, ali stroj nikada neće raditi dulje od 8 sati jer je njegov teorijski kapacitet 9 sati, dok u praksi ne može raditi više od 8 sati. Ako se za stroj postavi isti radni raspored kao za radnika, histogram će prikazivati kapacitet od 8 sati.

**Opis radnog rasporeda**: označava opis radnog rasporeda;

**% učinkovitosti**: vrijeme rada na fazi povećava se ili smanjuje ovisno o vrijednosti ovog polja. Primjerice, ako iznosi 50 %, vrijeme obrade na stroju bit će dvostruko dulje od vremena navedenog u fazi. Ova se postavka koristi za uzimanje u obzir različite produktivnosti strojeva unutar istog radnog centra. Isti se rezultat može postići i korištenjem alternativnih strojeva u fazi, uz navođenje odgovarajućih vremena obrade;

**% radnog vremena za podešavanje**: označava postotak radnog vremena radnika koji se koristi tijekom podešavanja. Ako je manji od 100 %, radnik može istodobno raditi na više strojeva;

**% radnog vremena za obradu**: označava postotak radnog vremena radnika koji se koristi tijekom proizvodnje. Ako je manji od 100 %, radnik može istodobno raditi na više strojeva;

**Pravilo podešavanja**: pravilo podešavanja koje se može primijeniti na stroj (za faze s atributima podešavanja). Na odgovarajućem obrascu možete vidjeti kako se pravilo postavlja. Ovo polje potrebno je koristiti ako vrijeme podešavanja stroja nije zanemarivo i ako se može znatno mijenjati ovisno o promjeni konfiguracije između prethodne i sljedeće operacije.

Planer može kreirati optimalan slijed rada samo ako mu se omogući precizan izračun vremena podešavanja, definiranjem atributa podešavanja. Vrijeme podešavanja jedan je od elemenata koji određuju optimalan slijed, ali uglavnom nije i jedini. To se vrijeme množi sa satnim troškom stroja kako bi se izračunao trošak podešavanja zadatka.

Pomoću određenih parametara raspoređivanja izračunava se trošak povezan s preranim početkom operacije i trošak povezan s njezinim kašnjenjem. Optimalan slijed ne može se postići ako se pojedini zadaci previše požuruju ili previše odgađaju samo radi smanjenja vremena podešavanja. Optimalan slijed stoga predstavlja kompromis između potrebe za smanjenjem vremena podešavanja radi povećanja produktivnosti stroja i potrebe za izbjegavanjem povećanja nedovršene proizvodnje (*work in process*) te prevelikih kašnjenja u obradi;

**Pravilo grupiranja**: pravilo grupiranja koje se može primijeniti (faze moraju imati šifru grupiranja). Na odgovarajućem obrascu možete vidjeti kako se pravilo postavlja.

Ako stroj ima definirano pravilo grupiranja, pripadajuće operacije neće se izvršavati pojedinačno, već u grupama koje imaju istu šifru grupiranja. Stroj će raditi u uzastopnim radnim ciklusima, a u svakom će se ciklusu zajedno obrađivati samo faze s istom šifrom grupiranja.

Radi postizanja najveće produktivnosti stroja, planer će pokušati pokrenuti radni ciklus tek kada faze iste grupe premaše minimalnu razinu popunjenosti stroja definiranu pravilom grupiranja. Iznimka je slučaj kada je barem jedna faza u grupi čekala dulje od maksimalnog dopuštenog vremena definiranog odgovarajućim parametrom raspoređivanja.

Ako popunjenost koju ostvaruju faze s istom šifrom grupiranja premaši maksimalnu vrijednost definiranu pravilom grupiranja, kreirat će se više radnih ciklusa, svaki s vlastitim zadatkom. Pritom će se svaki put tražiti kombinacija faza kojom se postiže najveća popunjenost stroja.

Ova se logika djelomično mijenja ako stroj ima i definirano pravilo podešavanja. U tom će slučaju planer pri kreiranju slijeda radnih ciklusa nastojati optimizirati produktivnost stroja uzimajući u obzir ne samo njegovu popunjenost nego i vrijeme izgubljeno na podešavanje.

Produktivnost grupe faza s istom šifrom grupiranja izračunava se na temelju ukupnog vremena obrade (broj radnih ciklusa × trajanje jednog ciklusa + vrijeme podešavanja) i ukupnog obujma obavljenog rada u tom vremenu.

Kada postoji više grupa između kojih je moguće birati, planer svaki put odabire onu s najvećom produktivnošću, osim ako se u grupi nalazi operacija koja je premašila maksimalno vrijeme čekanja definirano odgovarajućim parametrom raspoređivanja;

**Satni trošak podešavanja**: satni trošak podešavanja (koristi se za određivanje slijeda operacija na strojevima s definiranim pravilom podešavanja). Ova se vrijednost množi s vremenom podešavanja izračunatim pomoću pravila podešavanja kako bi se dobio ukupni trošak podešavanja, koji je jedan od triju troškova koji se uzimaju u obzir pri određivanju optimalnog slijeda obrade;

**Boja pozadine**: označava boju pozadine koja se koristi za ovaj stroj u Ganttovu dijagramu strojeva (trenutačno još nije implementirano);

**Boja teksta**: označava boju teksta koja se koristi za ovaj stroj u Ganttovu dijagramu strojeva (trenutačno još nije implementirano).

</details>

U drugom odjeljku moguće je detaljno definirati **Slijed** alternativnih strojeva.

*Alternativni strojevi*: ako je ova kartica prazna, planer će koristiti samo stroj naveden u fazi. Ako stroj nije naveden, koristit će bilo koji slobodan stroj iz radnog centra. Ako se operacija može izvršiti samo na određenim strojevima radnog centra, a ne na svima, uzet će se u obzir strojevi navedeni na ovoj kartici i stroj naveden u fazi.

Ova se kartica može koristiti i za navođenje svih strojeva radnog centra, kada cilj nije ograničiti popis strojeva, već definirati različite podatke o vremenima obrade.

<details>
<summary>Sljedeće se kartice koriste isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).</summary>

**Atributi podešavanja**: ova kartica omogućuje definiranje atributa podešavanja koje treba uzeti u obzir za stroj, koeficijenata koji se primjenjuju na numeričke atribute, vremena montaže i demontaže ako atributi nisu numerički te eventualne potrebe za izračunom prijelaznih vrijednosti pomoću matrice podešavanja.

**Početna konfiguracija**: ova kartica omogućuje definiranje početnih vrijednosti atributa podešavanja u trenutku pokretanja simulacije. Ako stroj u trenutku uvoza stanja tvornice ne radi, vrijednosti atributa podešavanja nije moguće utvrditi iz faze koja je u tijeku.

**Matrice**: ova kartica omogućuje definiranje vremena potrebnog za prijelaz s jedne vrijednosti na drugu vrijednost atributa podešavanja kada ono ovisi o kombinaciji prethodnog i sljedećeg stanja (što je tipično, primjerice, za lakirnice ili alergenske slijedove u prehrambenoj industriji).

</details>

*Specifična polja*:

**Slijed**: označava redoslijed alternativnih strojeva;

**Stroj**: označava šifru stroja;

**Opis stroja**: označava opis stroja;

**Aktivan**: označava je li stroj aktivan, odnosno može li se koristiti i planirati;

**Centar troška**: označava centar troška na koji se stroj odnosi;

**Opis centra troška**: označava opis centra troška na koji se stroj odnosi.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).