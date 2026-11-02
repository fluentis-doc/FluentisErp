---
title: Mašine
sidebar_position: 9
---

U ovoj tabeli definišu se sve mašine koje se koriste u različitim tehnološkim postupcima, pri čemu je svaka povezana sa jednim centrom troška.

Tabele koje se odnose na mašine i grupe radnika važne su za definisanje troškova pojedinačnih faza jer se sabiranjem proizvoda satnog troška mašine i vremena rada mašine, kao i proizvoda satnog troška grupe radnika i radnog vremena operatera, dobija trošak faze obrade.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmene ili brisanja.

**Pretraživanje mašina**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos mašina**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis u tabeli *Mašine* potrebno je uneti barem obavezna polja koja zahteva program: **Šifru** i **Opis** mašine. Takođe je moguće odrediti da li je mašina **Aktivna**, povezati je sa odgovarajućim centrom preduzeća i uneti ostale podatke.

*Specifična polja*:

**Mašina**: šifra mašine;

**Opis**: opis mašine;

**Aktivno**: označava da li je mašina aktivna, odnosno da li može da se koristi i planira;

**Deklaracija o materijalima (mobile)**: koristi se u obrascu za izveštavanje o proizvodnji u WMS-u. Ako je aktivirana, prilikom evidentiranja potrebno je uneti i utrošene materijale;

**Odštampaj etiketu**: koristi se u obrascu za izveštavanje o proizvodnji u WMS-u. Ako je aktivirana, nakon potvrde izveštaja o proizvodnji štampaju se i pripadajuće etikete;

**Radni centri**: označava radni centar sa kojim je mašina povezana. Više mašina može biti povezano sa istim radnim centrom, a među njima je moguće odabrati onu koja će se koristiti u vidžetu **Mašina** na [kartici Proizvodnja u MES-u](/docs/production/mes/mes-main-form);

**Centar troška**: označava centar troška na koji se mašina odnosi;

**Sektori/Odeljenja**: označava šifru odeljenja kojem mašina pripada;

**Klasa mašine**: označava klasu mašine (ako je mašina definisana kao artikal);

**Šifra artikla mašine**: označava šifru artikla (ako je mašina definisana kao artikal);

**Mesto proizvodnje**: ako postoji više proizvodnih pogona, označava šifru mesta proizvodnje na kojem se mašina nalazi;

**Opis proizvodne lokacije**: označava opis mesta proizvodnje;

**Lokacija**:

**Datum nabavke**: označava datum nabavke mašine;

**Predšifre osnovnog sredstva**: označava predšifru osnovnog sredstva;

**Broj**: označava broj osnovnog sredstva;

**Opis**: označava opis osnovnog sredstva;

**Narudžbina**: označava broj dokumenta nabavke osnovnog sredstva;

**Datum instalacije**: označava datum instalacije mašine;

**Datum unosa**: označava datum unosa mašine;

**Datum poslednje izmene**: označava datum poslednje izmene mašine;

**Opis centra troška**: označava opis centra troška na koji se mašina odnosi;

**Opis sektora/odeljenja**: označava opis odeljenja kojem mašina pripada;

**Opis artikla (stavke) mašine**: označava opis artikla (ako je mašina definisana kao artikal);

**Tip vremena deklaracije (evidentiranja)**: određuje način izračunavanja trajanja u izveštajima:

- *Automatski*: trajanje se izračunava na osnovu vremena proteklog od prethodnog izveštaja;
- *Iz pojedinosti*: trajanje se izračunava na osnovu detaljnih izveštaja operatera i mašina;
- *Ručno*: trajanje se unosi direktno u izveštaj, bez ponovnog izračunavanja.

Ako je odabrana poslednja opcija, trajanje je potrebno ručno navesti i u izveštajima o proizvodnji u WMS-u koji se odnose na ovu mašinu.

<details>
<summary>Sledeća polja koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).</summary>

**Radni raspored**: odaberite standardni radni raspored mašine. Ako odaberete radni raspored koji obuhvata duži period od radnog rasporeda pripadajućeg radnog centra, prednost će ipak imati raspored radnog centra. Sa izuzetkom radnika, za sve ostale resurse pauza unutar radnog rasporeda neće se uzimati u obzir. Samo radnici imaju fizičku i zakonsku potrebu za pauzom. Ako je za rad mašine potrebno prisustvo operatera, mašina će morati da se prilagodi pauzi operatera, pa će broj stvarno raspoloživih radnih sati zavisiti od operatera.

Na primer, ako je radni raspored operatera od 08:00 do 12:00 i od 13:00 do 17:00, mašina neće raditi tokom pauze, čak i ako je za nju postavljen radni raspored bez pauze, od 08:00 do 17:00. Razlika između postavljanja radnog rasporeda mašine sa pauzom ili bez nje odnosi se samo na kapacitet prikazan u odgovarajućem histogramu opterećenja. U navedenom primeru, ako se postavi radni raspored bez pauze, histogram će prikazivati kapacitet od 9 sati, ali mašina nikada neće raditi duže od 8 sati jer je njen teorijski kapacitet 9 sati, dok u praksi ne može raditi više od 8 sati. Ako se za mašinu postavi isti radni raspored kao za radnika, histogram će prikazivati kapacitet od 8 sati.

**Opis radnog rasporeda**: označava opis radnog rasporeda;

**% efikasnosti**: vreme rada na fazi povećava se ili smanjuje u zavisnosti od vrednosti ovog polja. Na primer, ako iznosi 50 %, vreme obrade na mašini biće dvostruko duže od vremena navedenog u fazi. Ovo podešavanje koristi se za uzimanje u obzir različite produktivnosti mašina unutar istog radnog centra. Isti rezultat može se postići i korišćenjem alternativnih mašina u fazi, uz navođenje odgovarajućih vremena obrade;

**% radnog vremena za podešavanje**: označava procenat radnog vremena radnika koji se koristi tokom podešavanja. Ako je manji od 100 %, radnik može istovremeno raditi na više mašina;

**% radnog vremena za obradu**: označava procenat radnog vremena radnika koji se koristi tokom proizvodnje. Ako je manji od 100 %, radnik može istovremeno raditi na više mašina;

**Pravilo podešavanja**: pravilo podešavanja koje se može primeniti na mašinu (za faze sa atributima podešavanja). Na odgovarajućem obrascu možete videti kako se pravilo podešava. Ovo polje potrebno je koristiti ako vreme podešavanja mašine nije zanemarljivo i ako se može značajno menjati u zavisnosti od promene konfiguracije između prethodne i sledeće operacije.

Planer može kreirati optimalan redosled rada samo ako mu se omogući precizno izračunavanje vremena podešavanja definisanjem atributa podešavanja. Vreme podešavanja jedan je od elemenata koji određuju optimalan redosled, ali uglavnom nije i jedini. To vreme množi se satnim troškom mašine kako bi se izračunao trošak podešavanja zadatka.

Pomoću određenih parametara raspoređivanja izračunava se trošak povezan sa preranim početkom operacije i trošak povezan sa njenim kašnjenjem. Optimalan redosled ne može se postići ako se pojedini zadaci previše ubrzavaju ili previše odlažu samo radi smanjenja vremena podešavanja. Optimalan redosled stoga predstavlja kompromis između potrebe za smanjenjem vremena podešavanja radi povećanja produktivnosti mašine i potrebe za izbegavanjem povećanja nedovršene proizvodnje (*work in process*) i prevelikih kašnjenja u obradi;

**Pravilo grupisanja**: pravilo grupisanja koje se može primeniti (faze moraju imati šifru grupisanja). Na odgovarajućem obrascu možete videti kako se pravilo podešava.

Ako mašina ima definisano pravilo grupisanja, pripadajuće operacije neće se izvršavati pojedinačno, već u grupama koje imaju istu šifru grupisanja. Mašina će raditi u uzastopnim radnim ciklusima, a u svakom ciklusu zajedno će se obrađivati samo faze sa istom šifrom grupisanja.

Radi postizanja najveće produktivnosti mašine, planer će pokušati da pokrene radni ciklus tek kada faze iste grupe premaše minimalni nivo popunjenosti mašine definisan pravilom grupisanja. Izuzetak je slučaj kada je barem jedna faza u grupi čekala duže od maksimalnog dozvoljenog vremena definisanog odgovarajućim parametrom raspoređivanja.

Ako popunjenost koju ostvaruju faze sa istom šifrom grupisanja premaši maksimalnu vrednost definisanu pravilom grupisanja, kreiraće se više radnih ciklusa, svaki sa sopstvenim zadatkom. Pritom će se svaki put tražiti kombinacija faza kojom se postiže najveća popunjenost mašine.

Ova logika se delimično menja ako mašina ima i definisano pravilo podešavanja. U tom slučaju planer će prilikom kreiranja redosleda radnih ciklusa nastojati da optimizuje produktivnost mašine uzimajući u obzir ne samo njenu popunjenost već i vreme izgubljeno na podešavanje.

Produktivnost grupe faza sa istom šifrom grupisanja izračunava se na osnovu ukupnog vremena obrade (broj radnih ciklusa × trajanje jednog ciklusa + vreme podešavanja) i ukupnog obima obavljenog rada u tom vremenu.

Kada postoji više grupa između kojih je moguće birati, planer svaki put odabira onu sa najvećom produktivnošću, osim ako se u grupi nalazi operacija koja je premašila maksimalno vreme čekanja definisano odgovarajućim parametrom raspoređivanja;

**Satni trošak podešavanja**: satni trošak podešavanja (koristi se za određivanje redosleda operacija na mašinama sa definisanim pravilom podešavanja). Ova vrednost množi se vremenom podešavanja izračunatim pomoću pravila podešavanja kako bi se dobio ukupan trošak podešavanja, koji je jedan od tri troška koja se uzimaju u obzir pri određivanju optimalnog redosleda obrade;

**Boja pozadine**: označava boju pozadine koja se koristi za ovu mašinu u Ganttovom dijagramu mašina (trenutno još nije implementirano);

**Boja teksta**: označava boju teksta koja se koristi za ovu mašinu u Ganttovom dijagramu mašina (trenutno još nije implementirano).

</details>

U drugom odeljku moguće je detaljno definisati **Redosled** alternativnih mašina.

*Alternativne mašine*: ako je ova kartica prazna, planer će koristiti samo mašinu navedenu u fazi. Ako mašina nije navedena, koristiće bilo koju slobodnu mašinu iz radnog centra. Ako se operacija može izvršiti samo na određenim mašinama radnog centra, a ne na svim, uzeće se u obzir mašine navedene na ovoj kartici i mašina navedena u fazi.

Ova kartica može se koristiti i za navođenje svih mašina radnog centra kada cilj nije ograničavanje spiska mašina, već definisanje različitih podataka o vremenima obrade.

<details>
<summary>Sledeće kartice koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).</summary>

**Atributi podešavanja**: ova kartica omogućava definisanje atributa podešavanja koje treba uzeti u obzir za mašinu, koeficijenata koji se primenjuju na numeričke atribute, vremena montaže i demontaže ako atributi nisu numerički, kao i eventualne potrebe za izračunavanjem prelaznih vrednosti pomoću matrice podešavanja.

**Početna konfiguracija**: ova kartica omogućava definisanje početnih vrednosti atributa podešavanja u trenutku pokretanja simulacije. Ako mašina u trenutku uvoza stanja fabrike ne radi, vrednosti atributa podešavanja nije moguće utvrditi iz faze koja je u toku.

**Matrice**: ova kartica omogućava definisanje vremena potrebnog za prelazak sa jedne vrednosti na drugu vrednost atributa podešavanja kada ono zavisi od kombinacije prethodnog i sledećeg stanja (što je tipično, na primer, za lakirnice ili alergenske redoslede u prehrambenoj industriji).

</details>

*Specifična polja*:

**Redosled**: označava redosled alternativnih mašina;

**Mašina**: označava šifru mašine;

**Opis mašine**: označava opis mašine;

**Aktivna**: označava da li je mašina aktivna, odnosno da li može da se koristi i planira;

**Centar troška**: označava centar troška na koji se mašina odnosi;

**Opis centra troška**: označava opis centra troška na koji se mašina odnosi.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).