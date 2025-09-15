---
title: Glavni obrazac Fluentisa
sidebar_position: 2
---

Glavni obrazac **Fluentis** sastoji se od više zona s različitim funkcionalnostima:  

## Gornji dio   

Traka sa alatkama sadrži kombinirane okvire za odabir **Tvrtke** i/ili **Odjela**  koji se koriste za unos podataka i uređivač radi olakšane pretrage obrazaca unutar aplikacije.  

Ispod toga su različite kartice:  

### Prva kartica 

Sadrži informacije o **Verzijama**, omogućuje **Ispis**, sadrži detaljne informacije o **Licenci**, i omogućuje **Zatvaranje** programa.   

### Kartica Početna stranica 

Kartica sadrži:

- kombinirani izbornik za odabir željenog **Jezika**,
    
- kombinirani **Izbornik** za odabir izbornika Fluentis.

:::note IZBORNIK    
Na temelju aktiviranog izbornika, završava se traka s alatima na kartici **Početna stranica** s informacijama koje su zajedničke cijeloj aplikaciji i dodaju se kartice koje odgovaraju područjima Fluentis.   
:::
    
- **Teme** koje korisnik može odabrati za promjenu pozadine aplikacije prema svojim vizualnim potrebama, 
    
- dostupni prostor za prikaz otvorenih *obrazaca od strane korisnika*,
    
- **strelica** za sakrivanje ili prikazivanje cijele trake s alatima.
    
### Kartice područja

Sadrže niz traka grupiranih prema tipu/modulu. Na primjer, kartica *Nabava* sadrži sve dokumente aktivnog ciklusa: zahtjeve, narudžbe, otpremnice, fakture itd.

### Pomoć
    
Za detaljne informacije o korištenju obrasca, korisnik može konzultirati dokumentaciju pritiskom na **F1** ili pritiskom na gumb **?**.

## Lijeva ploča  

Sadrži [Form Navigator](/docs/form-navigator/data-grid-settings) s informacijama o aktivnom obrascu.  

## Desna ploča 
Sadrži:

**[Alati](/docs/applications/applications-intro)** sadrži različite dodatne aplikacije: ARM, Pregled traga revizije, BizLink, Poslovna inteligencija, CRM, Upravljanje dokumentima, Nepodržane aplikacije.  

**[Object Navigator](/docs/object-navigator/object-navigator-intro)** sadrži informacije o aktivnom objektu, korisne za prilagodbu obrazaca dodavanjem dodatnih podataka ili informacija.  

**[Context Panel](/docs/panels/context-panel)** prema postavkama, Fluentis omogućuje prikaz kontekstualnih informacija o odabranom polju (primjerice, ako odaberete artikl, aplikacija prikazuje njegovu raspoloživost).   

**[Konfiguracija](/docs/configurations/configuration)** sadrži informacije koje omogućuju definiranje upravljanja modulima.   

**Fluentis Chat** omogućuje interakciju s korisnicima koji imaju pristup ovoj usluzi komunikacije, kako internom u poslovnom okruženju, tako i eksternom za pristup podršci Fluentisa. Chat je vrlo koristan alat za brzo dijeljenje informacija s drugim operaterima, dijeljenje digitalnih dokumenata ili čak aktivnih dokumenata poslovnog informacijskog sustava.  

## Donji dio   

U donjem dijelu aplikacije, traka izbornika sadrži niz informacija koje objašnjavamo u nastavku:  

**Aktivnosti**: omogućuje brzu poveznicu s upravljanjem aktivnostima na čekanju (koje proizlaze iz konfiguriranih WorkFlow procedura);

**Kalendar**: omogućuje upravljanje kalendarom, koji se može povezati s Exchangeom ili Outlookom.
:::note SINHRONIZIRANJE *OUTLOOK KALENDARA* s *KALENDAROM FLUENTIS-A*. 

1. Konfigurirati korisnika u **ARM-u** i definirati na kartici **Ostale karakteristike** e-mail: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Nakon toga, pritiskom na gumb *Zadani put za Outlook*, bit će zatraženo koji kalendar konfigurirati među pronađenima, a polje  **Zadani put za Outlook** automatski će se popuniti:   

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


U ovom trenutku, prelaskom u **Kalendar** (statusna traka), nakon ponovnog *pokretanja* Fluentisa, primijetit ćete da je sinkronizacija s Outlookom uspješno izvršena:  

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


Vidi također [Planiranje resursa u kalendaru](/docs/project-management/transverse-procedures).
:::


**Dashboards**: omogućuju brzi pregled ključnih informacija upravljanja pomoću vrlo moćnog i lako prilagodljivog statističkog sučelja;  

**Pretraži**: omogućuje prikaz svih naredbi aplikacije. Koristi se zajedno s poljem za pretraživanje koje se nalazi gore, u glavnom izborniku, kako bismo pronašli specifičnu naredbu ili grupirane naredbe;

**...**: omogućuje korisniku pristup, desnim klikom, prozoru  **Navigation Options** kako bi odabrao maksimalan broj elemenata za prikaz (strelice gore/dolje za povećanje/smanjenje) i kako bi odredio redoslijed u kojem će ti elementi biti prikazani (strelice gore/dolje za promjenu redoslijeda). Koristite gumb 'OK' za potvrdu odabira i gumb 'Reset' za povratak na zadane postavke;  

**Database**: prikazane informacije odnose se na vezu s bazom podataka, a prikazuju se redoslijedom: *Korisnik*, *Server\Database*, *Tvrtka*, (*Odjel*).