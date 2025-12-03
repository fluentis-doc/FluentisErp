---
title: Pretraživanje i Novi Budžet
sidebar_position: 4
---

## Pretraživanje

Naredba **Budžet** omogućuje pretraživanje, upravljanje i ispis budžeta. Možemo kreirati nove zapise (pomoću tipke Novi na traci izbornika ili naredbom Novi budžet u izborniku), uređivati postojeće ili duplicirati prethodno kreirani budžet. Prilikom dupliciranja pojavit će se popup prozor s opcijama:  
-	odrediti želimo li kreirati **Novu verziju** (označeno polje) odabranog budžeta ili novi budžet s novim brojem (polje postavljeno na false);   
-	unijeti **Opis** za kopiju koja se stvara.  
-	odabrati hoće li se primijeniti (true) ili ne (false) **ostotci promjene** dodijeljeni različitim podračunima.  

Obrazac pretraživanja Budžeta prema zadanim postavkama prikazuje samo posljednju verziju svakog budžeta (uz istu *Broj* Budžeta, *Tip* Budžeta i *Tip razdoblja*): otvaranjem odjeljka za filtriranje obrasca bit će moguće prikazati i prethodne verzije, koje ostaju u memoriji, aktiviranjem flag-a **Prikaži sve verzije**.


:::note[Napomena]
Tablica [**Postoci valorizacije**](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), koja se nalazi u tablicama Controllinga, omogućuje definiranje postotne promjene za fiksni i varijabilni dio vrijednosti podračuna. Svaki kod se potom može dodijeliti pojedinom podračunu troška/prihoda unutar plana konta.
:::

:::tip[Konsolidirani budžet]
Sljedeće naredbe u izborniku, za pretraživanje i unos novog **Konsolidiranog budžeta** omogućuju kreiranje obračuna na razini ostvarenja, radi isticanja **analize odstupanja** u odnosu na planirani budžet definiran u ovoj formi, te za procjenu tijeka upravljanja.  
:::

## Novi Budžet

1. Popuniti obavezne podatke u zaglavlju, kao što su *Vrsta budžeta*, *Vrsta razdoblja*, **Opis**. Po potrebi izmijeniti ostale podatke, poput datuma, godine i referentnih datuma budžeta (**Datum početka - Datum završetka**). Obavezno je unijeti ili godinu ili raspon datuma (u ovom drugom slučaju, Fluentis automatski popunjava polje godina prema godini datuma početka).  

- Flag **Definitivno**: čini budžet neizmjenjivim;   
- Flag **Zadani**: označava koji je budžet u upotrebi u odnosu na druge verzije koje se koriste, primjerice, samo za simulaciju;   
- Flag **Detaljno po odjelu**: omogućuje povezivanje *podbudžeta* s pojedinim poslovnim odjelima.

2. opuniti podatke u gornjoj tablici unosom **vrsta vrijednosti** koje će se koristiti u budžetu (u vezi s detaljima *podbudžeta*), odabirom iz polja **Vrsta objekta budžeta**:
    - Podračuni konta
    - Centri troška / prihoda
    - Modeli reklasifikacije
    - Artikli
 
Ovisno o vrsti podataka, omogućuje se odgovarajući stupac za postavljanje podataka (u slučaju računovodstvenih podataka ili modela reclassifikacije).  
Stupac **Opis**, koji je fakultativan, omogućuje unos dodatnih detalja o odabranim podacima;

Stupac **Odjel** aktivan je samo ako je u zaglavlju uključena opcija definiranja budžeta po odjelima.

3. Upravljati donjim tablicama u skladu s odabranom vrstom podbudžeta:

- Mreža u donjem lijevom kutu sadrži popis s detaljima vrijednosti vezanim uz odabrani pod-budžet iznad, stoga će dostupna polja ovisiti o vrsti samog pod-budžeta (vrsta podataka), zadržavajući zajedničke iznose *dugovanje*, *potraživanje*, iznos *fiksno* i iznos *varijabilno*. Postotna valorizacija iznosa fiksnog i varijabilnog može se unaprijed definirati u planu računa, ispunjavanjem polja *varijabilnost* na razini podračuna ili na razini mreže varijabilnosti podračuna za troškovni centar.

:::note[Primjer]
Ako je pod-budžet za podračune, imat ćemo popis podračuna; ako je tip centara troškova, imat ćemo podračun i centar troškova; ako je tip centra prihoda, imat ćemo podračun i centar prihoda; ako je tip modela, moći ćemo odabrati čvorove povezanog modela.
:::

Jednom kada se počnu unositi podaci o detaljima pod-budžeta, gornji red povezan neće više biti moguće uređivati.

- Mreža **desno** omogućit će unos podataka po razdobljima: u slučaju ručnog unosa u mrežu lijevo, trenutno ne postoji automatsko vrednovanje niti provjera usklađenosti detaljnog odjeljka desno s onim lijevo.

### Procedure automatskog popunjavanja podbudžeta

Unutar budžeta nalaze se neke tipke koje omogućuju automatsko vrednovanje podataka različitih pod-budžeta, preuzimajući podatke iz drugih sekcija Fluentis-a u zavisnosti od odabranog pod-budžeta.

**BUDŽET ZA PODRAČUNE**

Ovaj podbudžet može se popuniti pomoću dvije tipke:  
-	**Kreiraj iz knjiženja**: otvara popup prozor za filtriranje datuma knjiženja, razdoblja, eventualnih konta koja treba isključiti (npr. zatvaranje prethodnih razdoblja), uključivanje konta bilance (ekonomski dio uvijek se uzima), primjena postotaka promjene (iz tablice Postotci promjene) i primjena vrijednosti po razdoblju ili originalnih ekonomskih razdoblja knjiženja.   

:::note[Napomena]
Opcije vrijednost po razdoblju i originalna ekonomska razdoblja su alternativne. Fluentis popunjava detalje po razdoblju u desnoj tablici, čitajući ponderirane vrijednosti ili uzimajući stvarne datume ekonomskog razdoblja knjiženja (npr. ako trošak X ima samo jedno knjiženje od 01/03 do 31/08, desno će se prikazati vrijednosti od ožujka do kolovoza, proporcionalno broju dana u mjesecu).  
:::

- **Kreiraj iz međugodišnjeg zatvaranja**: otvara popup za odabir izvora podataka i primjenu istih opcija kao i kod prethodne tipke (uključivanje konta bilance, postotci promjene, primjena vrijednosti po razdoblju ili originalne ekonomske datume).  

- **Grupiraj detaljne retke**: koristi se kada je odabrana opcija *Koristi originalna ekonomska razdoblja*. Fluentis tada generira detaljan redak za svako ekonomsko razdoblje, što olakšava provjeru, ali otežava upravljanje ukupnim budžetom. Tipka grupira vrijednosti po podračunu.

**BUDŽET ZA CENTRE TROŠKA / PRIHODA**

Za ovu vrstu imat ćemo na raspolaganju sljedeće tipke: (Prva dva i posljednji su iste opcije viđene u prethodnoj točki i ne zahtijevaju dodatna objašnjenja).

-	Crea da registrazioni contabili

-	Crea da chiusure infrannuali

-	Crea centri di costo dai conti contabili: attiva un popup per selezionare (selezione multipla attiva) la lista dei sotto-budget di tipo *Sottoconto* da utilizzare come origine dati; vengono letti i dati di budget di questi sottoconti e valorizzato il budget per centri di costo leggendo le impostazioni di default del Piano dei conti (legami con i centri ecc...) per ogni sottoconto, ricalcolando eventualmente la variabilità (stesso riferimento del tipo precedente).

-	Crea centri di costo da storico registrazioni gestionali: attiva un popup (utile solo se viene utilizzato completamente il modulo controlling) per selezionare lo *Storico registrazioni gestionali* (Da anno a anno e da periodo a periodo e l'Area) potendo applicare eventualmente (Flag) le percentuali di variazione.

-	Raggruppa righe dei dettagli

**BUDGET SU MODELLI DI RICLASSIFICAZIONE**

Per questa tipologia l’unico pulsante attivo è **Crea valori del modello**, che attiva un popup per selezionare i *sotto-budget* da considerare come origine dati (nella combo box è attiva la selezione multipla con i tasti Ctrl o Shift):

- i *sotto-budget* per *sottoconti* saranno utilizzati per valorizzare i nodi (le righe) del modello di riclassificazione [**impostate con tipologia *sottoconti***](/docs/controlling/reclassifications/create-reclassification-model#campi-di-testata)
- i *sotto-budget* per *centri di costo* saranno utilizzati per valorizzare i nodi (le righe) del modello di riclassificazione [**impostate con tipologia *centri di costo***](/docs/controlling/reclassifications/create-reclassification-model#campi-di-testata)