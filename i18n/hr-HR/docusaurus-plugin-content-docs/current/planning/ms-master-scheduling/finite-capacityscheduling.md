---
title: Planiranje ograničenog kapaciteta
sidebar_position: 4
---

:::important Čemu služi
Funkcija **Planiranja ograničenog kapaciteta** u Fluentisu napredan je alat namijenjen optimizaciji upravljanja proizvodnim resursima u proizvodnim poduzećima. Ovaj modul integriran je u Fluentis ERP sustav te omogućuje planiranje i upravljanje proizvodnim aktivnostima uzimajući u obzir stvarne kapacitete raspoloživih resursa, kao što su radna snaga, strojevi i materijali. Zahvaljujući toj funkcionalnosti poduzeća mogu smanjiti zastoje, povećati operativnu učinkovitost i fleksibilnije odgovoriti na promjene u potražnji.

Raspoređivanje s konačnim kapacitetima uzima u obzir fizička ograničenja resursa, omogućujući izradu realnih i provedivih proizvodnih planova. Osim toga, nudi analitičke alate za predviđanje mogućih uskih grla te omogućuje optimizaciju raspodjele zadataka, integrirajući se s ostalim ERP funkcionalnostima radi cjelovitog pregleda poslovnih procesa. Ovaj sustav pomaže poduzećima učinkovito uskladiti zahtjeve kupaca s proizvodnim kapacitetima, čime se povećavaju profitabilnost i zadovoljstvo kupaca.
:::

Raspoređivanje proizvodnje s konačnim kapacitetima omogućuje procjenu količine posla koja se može izvršiti u određenom vremenskom razdoblju, uzimajući u obzir ograničenja pojedinih resursa. Krajnji cilj je osigurati najveću moguću učinkovitost proizvodnih procesa kroz cijeli proizvodni lanac, optimizirajući vrijeme rada i smanjujući troškove radnih centara.

Ovim načinom planiranja moguće je kreirati optimalne redoslijede izvođenja operacija za svaki pojedini radni centar te postići njihovu maksimalnu iskorištenost.

## Radni nalog

Kartica **Radni nalog** prikazuje samo naloge koji se nalaze u statusu **Neobrađen**.

### Specifični gumbi

> **F.C.S. raspoređivanje**: omogućuje sustavu raspoređivanje faza rada predviđenih dokumenata prema metodi konačnih kapaciteta;  
> **Izmijeni datum naloga**: omogućuje promjenu datuma naloga;  
> **Promjena prioriteta**: omogućuje promjenu prioriteta odabranih naloga;  
> **MRP parametri**: otvara MRP parametre odabranih naloga;  
> **Sastavnica materijala**: otvara sastavnice odabranih naloga;  
> **Proizvodni ciklus**: otvara radne cikluse odabranih naloga.

### Specifični filtri

**Tip narudžbe**: putem ove kombinacije moguće je odabrati prikaz monoproizvodnih naloga, multiproizvodnih naloga ili obje vrste naloga;
**Mjesto proizvodnje**: omogućuje prikaz naloga prema proizvodnoj lokaciji na kojoj će se proizvoditi, odabirom odgovarajuće vrijednosti.

### Specifična polja u tablici rezultata

**Predviđeni datum**: kao što je objašnjeno u članku o općim parametrima raspoređivanja, aktivacijom oznake [Provjeri zakašnjele dokumente pomoću ATP-a](/docs/planning/ms-master-scheduling/general-schedule) planer provodi logiku prema kojoj, ako je barem jedan od generiranih i raspoređenih naloga u kašnjenju u odnosu na planirani datum, sustav briše sve kreirane naloge i ponovno pokreće obradu od datuma MS-a definiranog u parametrima. Ta funkcionalnost dostupna je samo kada je aktivirana navedena oznaka. Novi predloženi datum za naloge prikazuje se upravo u polju **Predviđeni datum** u tablici rezultata.

### Postupak F.C.S. raspoređivanja

Na kartici **Nalozi** moguće je odabrati neraspoređene naloge koji će biti uključeni u obradu.

Klikom na gumb **F.C.S. raspoređivanje**, postupak će najprije izvršiti raspoređivanje s beskonačnim kapacitetima za upravo odabrane neraspoređene naloge, koristeći parametre definirane na kartici **Opći parametri**.

Nakon toga izvršit će se raspoređivanje s konačnim kapacitetima za sve dokumente definirane u **Parametrima planiranja konačnih kapaciteta**.

Kao i kod općeg planiranja, planirani nalozi mogu se pregledati u formi [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Za pregled svih izvršenih raspoređivanja te pripadajućih grešaka i upozorenja za pojedini nalog, potrebno je otvoriti karticu **Arhiva**.

## Opći parametri

Svi parametri povezani s fazom **Općeg planiranja** mogu se pronaći u članku [Opće planiranje](/docs/planning/ms-master-scheduling/general-schedule), u odjeljku **Parametri općeg planiranja**.

## Parametri planiranja konačnih kapaciteta

:::note Napomena
Prije pokretanja F.C.S. raspoređivanja potrebno je na ovoj kartici definirati parametre koji će se koristiti tijekom raspoređivanja s konačnim kapacitetima.
:::

**Vremensko planiranje na: najranije ili posljednje**: ove su opcije onemogućene te je uvijek aktivna samo opcija **najranije**, budući da raspoređivanje s konačnim kapacitetima nastoji što prije maksimalno opteretiti radne centre;
**Od datuma**: omogućuje definiranje datuma od kojeg će započeti raspoređivanje s konačnim kapacitetima. Zadano se predlaže trenutačni datum, ali se može povećati za broj dana definiran u [MS parametrima](/docs/configurations/parameters/production/mps-parameters) kroz polje **Dani do sljedećeg raspoređivanja**;
**Rad nad planiranim nalozima – Preračun vremena**: oznaka je uvijek aktivna i omogućuje ponovni izračun vremena na planiranim nalozima;
**Preračunaj proizvodne naloge/narudžbe**: omogućuje odabir koje će proizvodne naloge, među statusima **Pokrenut** i/ili **Izvršni**, F.C.S. raspoređivanje uzeti u obzir;
**Preračunaj faze**: omogućuje odabir koje će proizvodne faze, **Nezapočete** i/ili **Već započete**, F.C.S. raspoređivanje uzeti u obzir;
**Način preračuna već započetih faza**: omogućuje odabir načina na koji će F.C.S. raspoređivanje izračunati preostali dio već započetih faza. Može se dati prednost utrošenom vremenu odabirom opcije **Prvo utrošeno vrijeme pa proizvedena količina**, ili proizvedenoj količini odabirom opcije **Prvo proizvedena količina pa utrošeno vrijeme**;
**Blokiraj obvezne naloge**: omogućuje odabir vrsta naloga (**Planirani**, **Pokrenuti** i **Izvršni**) koji se neće mijenjati tijekom F.C.S. raspoređivanja ako imaju uključenu oznaku **Obvezan**;
**Započni rad prema dostupnosti materijala**: ako je aktivno, F.C.S. raspoređivanje provjeravat će dostupnost materijala do datuma definiranog u polju **Provjera dostupnosti do**, dok će se nakon tog datuma raspoređivanje nastaviti bez provjere dostupnosti materijala.
Aktiviranjem oznake **Provjera dostupnosti samo za kritične materijale**, postupak će provjeravati dostupnost samo za materijale koji u sastavnici imaju uključenu oznaku **Kritično**;
**Uzmi raspoloživost materijala**: omogućuje odabir načina provjere dostupnosti materijala između opcija **Opći** (neovisno o proizvodnom nalogu koji ga koristi) i **Za radni nalog proizvodnje**.

Trenutno je podržano samo pravilo **Opći**.

Važno je napomenuti da će se za materijale povezane s određenom fazom dostupnost provjeravati na početku te faze, dok će se za materijale koji nisu povezani ni s jednom fazom dostupnost provjeravati na početku prve faze radnog ciklusa.

U donjem dijelu forme moguće je definirati kriterije prema kojima će raspoređivanje s konačnim kapacitetima obrađivati dokumente iste vrste.

:::note Napomena
U skladu s prethodno odabranim parametrima, F.C.S. raspoređivanje obrađivat će dokumente sljedećim redoslijedom: već započete faze, nezapočete faze, proizvodni nalozi u statusu **Izvršni**, zatim **Pokrenut**, te na kraju **Planirani nalozi**.
:::

Iz tablice **Odabir prioriteta raspoređivanja** moguće je metodom *drag & drop* povući pojedine stavke u tablicu **Prioritet rasporeda**, gdje je zatim moguće mijenjati njihov redoslijed prioriteta.

Ako se odaberu stavke **Kritični kupci** ili **Kritični radni centri**, aktivirat će se i tablica **Detaljni raspored prioriteta**, u koju je moguće unijeti kupce odnosno radne centre te im također dodijeliti željeni prioritet.

:::note Pažnja
Prioriteti **Redoslijed faza** i **Kritični radni centri** ne koriste se u standardnoj verziji sustava, već su dodani isključivo za potrebe prilagođenih (*custom*) procedura raspoređivanja.
:::

Ako nije definiran nijedan prioritet raspoređivanja, sortiranje će se izvršavati prema sljedećem redoslijedu:

*Razina silazno > Datum početka uzlazno > Datum završetka uzlazno > ID uzlazno*

### Specifični gumbi

> **Poništi prioritet**: vraća zadane prioritete u tablici **Prioriteti raspoređivanja**.

## Praćenje

Na ovoj kartici korisnik može, aktiviranjem ili deaktiviranjem pojedinih oznaka, odabrati koje će se informacije prikazivati u kartici **Arhiva** kao rezultat raspoređivanja.
Moguće je odabrati prikaz korištenih **Kalendara** (*Tvornički kalendar* i kalendar *Proizvodnih kapaciteta*).
Također je moguće uključiti upozorenja za slučajeve kada su tijekom raspoređivanja pronađeni **artikli bez**:

- *MRP parametara*,
- *sastavnice*,
- *proizvodnog ciklusa*,
- *preferiranog dobavljača* (za nabavne naloge),
- *preferiranog podizvođača* (za naloge kooperacije),
- definirane *minimalne zalihe* za artikle koji se vode po zalihi.

Za svaki **radni nalog proizvodnje** moguće je odabrati prikaz:

- *broja planiranih linija*,
- detalja tih linija,
- naloga u kašnjenju (odgodi),
- naloga kojima je istekao planirani rok.

Za **planirane naloge/narudžbe** moguće je odabrati prikaz:

- *broja generiranih narudžba*,
- njihovih detalja,
- naloga u kašnjenju (odgodi),
- naloga kojima je istekao planirani rok,
- *alternativnih materijala*.

Također je moguće uključiti upozorenja za slučajeve kada postoje **planirani nalozi bez**:

- *materijala*,
- *radnih faza*,
- *dobavljača* (za nabavu),
- *podizvođača* (za kooperaciju).

**Legenda**: aktivne oznake omogućuju prikaz upozorenja i detalja vezanih uz odabrane stavke.

## Arhiva

U tablici ove kartice prikazuju se svi sažeti podaci vezani uz izvršeno raspoređivanje naloga.

**Program rasporeda**: prikazuje redni broj postupka raspoređivanja koji je pokrenuo korisnik;
**Operater**: prikazuje korisnika koji je pokrenuo raspoređivanje;
**Broj grešaka**: prikazuje broj grešaka zabilježenih tijekom postupka raspoređivanja;
**Datum početka**: prikazuje datum i vrijeme početka procesa raspoređivanja;
**Datum završetka**: prikazuje datum i vrijeme završetka procesa raspoređivanja;
**Vremenski raspoređeni podaci od**: prikazuje točan izvor raspoređenih podataka;
**Predviđanje**: prikazuje potječu li podaci iz *Prognoza prodaje* ili iz *Glavnog plana proizvodnje*;
**Period**: prikazuje vrstu prognoze, tjednu ili mjesečnu;
**Dan**: prikazuje dan u tjednu definiran kao dan na koji treba pasti datum završetka proizvodnog naloga generiranog izravno kroz *Definiciju MPS-a*.

Svi ostali stupci tablice prikazuju postavke korištene na kartici **Parametri** za raspoređivanje povezano s odabranim retkom.

### Rezultat vremenskog planiranja

Ovisno o retku odabranom u tablici, u ovom će se odjeljku prikazati eventualne greške i/ili upozorenja zajedno s detaljima koje je korisnik odabrao na kartici **Praćenje**.
Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca, pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).