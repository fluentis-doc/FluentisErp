---
title: Planiranje ograničenog kapaciteta
sidebar_position: 4
---

:::important Čemu služi
Funkcija **Planiranja ograničenog kapaciteta** u Fluentisu predstavlja napredan alat namenjen optimizaciji upravljanja proizvodnim resursima u proizvodnim preduzećima. Ovaj modul je integrisan u Fluentis ERP sistem i omogućava planiranje i upravljanje proizvodnim aktivnostima uzimajući u obzir stvarne kapacitete raspoloživih resursa, kao što su radna snaga, mašine i materijali. Zahvaljujući ovoj funkcionalnosti, preduzeća mogu smanjiti zastoje, povećati operativnu efikasnost i fleksibilnije odgovoriti na promene u potražnji.

Raspoređivanje sa konačnim kapacitetima uzima u obzir fizička ograničenja resursa, omogućavajući izradu realnih i izvodljivih proizvodnih planova. Pored toga, nudi analitičke alate za predviđanje mogućih uskih grla i omogućava optimizaciju raspodele zadataka, integrišući se sa ostalim ERP funkcionalnostima radi potpunog pregleda poslovnih procesa. Ovaj sistem pomaže preduzećima da efikasno usklade zahteve kupaca sa proizvodnim kapacitetima, čime se povećavaju profitabilnost i zadovoljstvo kupaca.
:::

Raspoređivanje proizvodnje sa konačnim kapacitetima omogućava procenu količine posla koja se može izvršiti u određenom vremenskom periodu, uzimajući u obzir ograničenja pojedinačnih resursa. Krajnji cilj je obezbediti najveću moguću efikasnost proizvodnih procesa kroz ceo proizvodni lanac, optimizujući vreme rada i smanjujući troškove radnih centara.

Ovim načinom planiranja moguće je kreirati optimalne redoslede izvođenja operacija za svaki pojedinačni radni centar i postići njihovu maksimalnu iskorišćenost.

## Radni nalog

Kartica **Radni nalog** prikazuje samo naloge koji se nalaze u statusu **Neobrađen**.

### Specifična dugmad

> **F.C.S. raspoređivanje**: omogućava sistemu raspoređivanje radnih faza predviđenih dokumenata prema metodi konačnih kapaciteta;  
> **Izmeni datum naloga**: omogućava promenu datuma naloga;  
> **Promena prioriteta**: omogućava promenu prioriteta odabranih naloga;  
> **MRP parametri**: otvara MRP parametre odabranih naloga;  
> **Sastavnica materijala**: otvara sastavnice odabranih naloga;  
> **Proizvodni ciklus**: otvara radne cikluse odabranih naloga.

### Specifični filteri

**Tip naloga**: putem ove kombinacije moguće je odabrati prikaz monoproizvodnih naloga, multiproizvodnih naloga ili obe vrste naloga;  
**Mesto proizvodnje**: omogućava prikaz naloga prema proizvodnoj lokaciji na kojoj će se proizvoditi, izborom odgovarajuće vrednosti.

### Specifična polja u tabeli rezultata

**Predviđeni datum**: kao što je objašnjeno u članku o opštim parametrima raspoređivanja, aktiviranjem oznake [Proveri zakašnjele dokumente pomoću ATP-a](/docs/planning/ms-master-scheduling/general-schedule) planer primenjuje logiku prema kojoj, ukoliko je makar jedan od generisanih i raspoređenih naloga u kašnjenju u odnosu na planirani datum, sistem briše sve kreirane naloge i ponovo pokreće obradu od MS datuma definisanog u parametrima. Ta funkcionalnost dostupna je samo kada je aktivirana navedena oznaka. Novi predloženi datum za naloge prikazuje se upravo u polju **Predviđeni datum** u tabeli rezultata.

### Postupak F.C.S. raspoređivanja

Na kartici **Nalozi** moguće je odabrati neraspoređene naloge koji će biti uključeni u obradu.
Klikom na dugme **F.C.S. raspoređivanje**, postupak će najpre izvršiti raspoređivanje sa beskonačnim kapacitetima za upravo odabrane neraspoređene naloge, koristeći parametre definisane na kartici **Opšti parametri**.
Nakon toga izvršiće se raspoređivanje sa konačnim kapacitetima za sve dokumente definisane u **Parametrima planiranja konačnih kapaciteta**.
Kao i kod opšteg planiranja, planirani nalozi mogu se pregledati u formi [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).
Za pregled svih izvršenih raspoređivanja, kao i pripadajućih grešaka i upozorenja za pojedinačni nalog, potrebno je otvoriti karticu **Arhiva**.

## Opšti parametri

Svi parametri povezani sa fazom **Opšteg planiranja** mogu se pronaći u članku [Opšte planiranje](/docs/planning/ms-master-scheduling/general-schedule), u odeljku **Parametri opšteg planiranja**.

## Parametri planiranja konačnih kapaciteta

:::note Napomena
Pre pokretanja F.C.S. raspoređivanja potrebno je na ovoj kartici definisati parametre koji će se koristiti tokom raspoređivanja sa konačnim kapacitetima.
:::

**Vremensko planiranje na: najranije ili poslednje**: ove opcije su onemogućene i uvek je aktivna samo opcija **najranije**, budući da raspoređivanje sa konačnim kapacitetima nastoji što pre maksimalno opteretiti radne centre;
**Od datuma**: omogućava definisanje datuma od kojeg će započeti raspoređivanje sa konačnim kapacitetima. Podrazumevano se predlaže trenutni datum, ali se može povećati za broj dana definisan u [MS parametrima](/docs/configurations/parameters/production/mps-parameters) kroz polje **Dani do sledećeg raspoređivanja**;
**Rad nad planiranim nalozima – Preračun vremena**: oznaka je uvek aktivna i omogućava ponovni obračun vremena na planiranim nalozima;
**Preračunaj proizvodne naloge/narudžbe**: omogućava izbor koji će proizvodni nalozi, među statusima **Pokrenut** i/ili **Izvršni**, biti uzeti u obzir tokom F.C.S. raspoređivanja;
**Preračunaj faze**: omogućava izbor koje će proizvodne faze, **Nezapočete** i/ili **Već započete**, F.C.S. raspoređivanje uzeti u obzir;
**Način preračuna već započetih faza**: omogućava izbor načina na koji će F.C.S. raspoređivanje izračunati preostali deo već započetih faza. Može se dati prednost utrošenom vremenu izborom opcije **Prvo utrošeno vreme pa proizvedena količina**, ili proizvedenoj količini izborom opcije **Prvo proizvedena količina pa utrošeno vreme**;
**Blokiraj obavezne naloge**: omogućava izbor vrsta naloga (**Planirani**, **Pokrenuti** i **Izvršni**) koji se neće menjati tokom F.C.S. raspoređivanja ukoliko imaju uključenu oznaku **Obavezan**;
**Započni rad prema dostupnosti materijala**: ukoliko je aktivno, F.C.S. raspoređivanje proveravaće dostupnost materijala do datuma definisanog u polju **Provera dostupnosti do**, dok će se nakon tog datuma raspoređivanje nastaviti bez provere dostupnosti materijala.
Aktiviranjem oznake **Provera dostupnosti samo za kritične materijale**, postupak će proveravati dostupnost samo za materijale koji u sastavnici imaju uključenu oznaku **Kritično**;
**Uzmi raspoloživost materijala**: omogućava izbor načina provere dostupnosti materijala između opcija **Opšti** (nezavisno od proizvodnog naloga koji ga koristi) i **Za radni nalog proizvodnje**.

Trenutno je podržano samo pravilo **Opšti**.

Važno je napomenuti da će se za materijale povezane sa određenom fazom dostupnost proveravati na početku te faze, dok će se za materijale koji nisu povezani ni sa jednom fazom dostupnost proveravati na početku prve faze proizvodnog ciklusa.

U donjem delu forme moguće je definisati kriterijume prema kojima će raspoređivanje sa konačnim kapacitetima obrađivati dokumente iste vrste.

:::note Napomena
U skladu sa prethodno odabranim parametrima, F.C.S. raspoređivanje obrađivaće dokumente sledećim redosledom: već započete faze, nezapočete faze, proizvodni nalozi u statusu **Izvršni**, zatim **Pokrenut**, a na kraju **Planirani nalozi**.
:::

Iz tabele **Odabir prioriteta raspoređivanja** moguće je metodom *drag & drop* prevući pojedine stavke u tabelu **Prioritet rasporeda**, gde je zatim moguće menjati njihov redosled prioriteta.

Ako se odaberu stavke **Kritični kupci** ili **Kritični radni centri**, aktiviraće se i tabela **Detaljan raspored prioriteta**, u koju je moguće uneti kupce odnosno radne centre i dodeliti im željeni prioritet.

:::note Pažnja
Prioriteti **Redosled faza** i **Kritični radni centri** ne koriste se u standardnoj verziji sistema, već su dodati isključivo za potrebe prilagođenih (*custom*) procedura raspoređivanja.
:::

Ako nije definisan nijedan prioritet raspoređivanja, sortiranje će se izvršavati prema sledećem redosledu:

*Nivo opadajuće > Datum početka rastuće > Datum završetka rastuće > ID rastuće*

### Specifična dugmad

> **Poništi prioritet**: vraća podrazumevane prioritete u tabeli **Prioriteti raspoređivanja**.

## Praćenje

Na ovoj kartici korisnik može, aktiviranjem ili deaktiviranjem pojedinačnih oznaka, odabrati koje će se informacije prikazivati na kartici **Arhiva** kao rezultat raspoređivanja.

Moguće je odabrati prikaz korišćenih **Kalendara** (*Fabrički kalendar* i kalendar *Proizvodnih kapaciteta*).

Takođe je moguće uključiti upozorenja za slučajeve kada su tokom raspoređivanja pronađeni **artikli bez**:

- *MRP parametara*,
- *sastavnice*,
- *proizvodnog ciklusa*,
- *preferiranog dobavljača* (za nabavne naloge),
- *preferiranog podizvođača* (za naloge kooperacije),
- definisane *minimalne zalihe* za artikle koji se vode po zalihama.

Za svaki **radni nalog proizvodnje** moguće je odabrati prikaz:

- *broja planiranih linija*,
- detalja tih linija,
- naloga u kašnjenju (odloženih),
- naloga kojima je istekao planirani rok.

Za **planirane naloge/narudžbe** moguće je odabrati prikaz:

- *broja generisanih narudžbi*,
- njihovih detalja,
- naloga u kašnjenju (odloženih),
- naloga kojima je istekao planirani rok,
- *alternativnih materijala*.

Takođe je moguće uključiti upozorenja za slučajeve kada postoje **planirani nalozi bez**:

- *materijala*,
- *radnih faza*,
- *dobavljača* (za nabavku),
- *podizvođača* (za kooperaciju).

**Legenda**: aktivne oznake omogućavaju prikaz upozorenja i detalja vezanih za odabrane stavke.

## Arhiva

U tabeli ove kartice prikazuju se svi sažeti podaci vezani za izvršeno raspoređivanje naloga.

**Program raspoređivanja**: prikazuje redni broj postupka raspoređivanja koji je pokrenuo korisnik;  
**Operater**: prikazuje korisnika koji je pokrenuo raspoređivanje;  
**Broj grešaka**: prikazuje broj grešaka zabeleženih tokom postupka raspoređivanja;  
**Datum početka**: prikazuje datum i vreme početka procesa raspoređivanja;  
**Datum završetka**: prikazuje datum i vreme završetka procesa raspoređivanja;  
**Vremenski raspoređeni podaci od**: prikazuje tačan izvor raspoređenih podataka;  
**Predviđanje**: prikazuje da li podaci potiču iz *Prognoza prodaje* ili iz *Glavnog plana proizvodnje*;  
**Period**: prikazuje vrstu prognoze, nedeljnu ili mesečnu;  
**Dan**: prikazuje dan u nedelji definisan kao dan na koji treba da padne datum završetka proizvodnog naloga generisanog direktno kroz *Definiciju MPS-a*.

Sve ostale kolone tabele prikazuju postavke korišćene na kartici **Parametri** za raspoređivanje povezano sa odabranim redom.

### Rezultat vremenskog planiranja

U zavisnosti od reda odabranog u tabeli, u ovom odeljku prikazivaće se eventualne greške i/ili upozorenja zajedno sa detaljima koje je korisnik odabrao na kartici **Praćenje**.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca, pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).