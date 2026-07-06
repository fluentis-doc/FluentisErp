---
title: Glavni obrazac Fluentisa
sidebar_position: 2
---

Glavni obrazac **Fluentisa** sastoji se od više zona sa različitim funkcionalnostima:  

## Gornji deo

Traka sa alatkama sadrži kombinovane okvire za odabir **Kompanije** i/ili **Odeljenja** koji se koriste za unos podataka i polje za uređivanje radi lakšeg pretraživanja obrazaca unutar aplikacije.  

Ispod toga se nalaze različite kartice:  

### Prva kartica

Sadrži informacije o **Verzijama**, omogućava **Štampanje**, sadrži detaljne informacije o **Licenci** i omogućava **Zatvaranje** programa.  

### Kartica Početna stranica

Kartica sadrži:

- kombinovani meni za odabir željenog **Jezika**,
    
- kombinovani **Meni** za odabir menija Fluentisa.

:::note MENI
Na osnovu aktiviranog menija, traka sa alatkama na kartici **Početna stranica** dopunjuje se informacijama koje su zajedničke celoj aplikaciji i dodaju se kartice koje odgovaraju područjima Fluentisa.
:::
    
- **Teme** koje korisnik može odabrati za promenu pozadine aplikacije prema svojim vizuelnim potrebama,
    
- dostupan prostor za prikaz *obrazaca koje je korisnik otvorio*,
    
- **strelicu** za sakrivanje ili prikazivanje cele trake sa alatkama.
    
### Kartice područja

Sadrže niz traka grupisanih prema tipu/modulu. Na primer, kartica *Nabavka* sadrži sve dokumente aktivnog ciklusa: zahteve, narudžbine, otpremnice, fakture itd.

### Pomoć
    
Za detaljne informacije o korišćenju obrasca, korisnik može pogledati dokumentaciju pritiskom na **F1** ili na dugme **?**.

## Levi panel

Sadrži [Form Navigator](/docs/form-navigator/data-grid-settings) sa informacijama o aktivnom obrascu.

## Desni panel

Sadrži:

**[Alati](/docs/applications/applications-intro)** sadrže različite dodatne aplikacije: ARM, Pregled traga revizije, BizLink, Poslovna inteligencija, CRM, Upravljanje dokumentima, Nepodržane aplikacije.  

**[Object Navigator](/docs/object-navigator/object-navigator-intro)** sadrži informacije o aktivnom objektu, korisne za prilagođavanje obrazaca dodavanjem dodatnih podataka ili informacija.  

**[Context Panel](/docs/panels/context-panel)** prema podešavanjima, Fluentis omogućava prikaz kontekstualnih informacija o odabranom polju (na primer, ako odaberete artikal, aplikacija prikazuje njegovu raspoloživost).  

**[Konfiguracija](/docs/configurations/configuration)** sadrži informacije koje omogućavaju definisanje upravljanja modulima.  

**Fluentis Chat** omogućava interakciju sa korisnicima koji imaju pristup ovoj komunikacionoj usluzi, kako interno u poslovnom okruženju, tako i eksterno radi pristupa podršci Fluentisa. Chat je veoma koristan alat za brzo deljenje informacija sa drugim operaterima, deljenje digitalnih dokumenata ili čak aktivnih dokumenata poslovnog informacionog sistema.  

## Donji deo

U donjem delu aplikacije, traka menija sadrži niz informacija koje objašnjavamo u nastavku:  

**Aktivnosti**: omogućava brzu vezu sa upravljanjem aktivnostima na čekanju (koje proizlaze iz konfigurisanih WorkFlow procedura);

**Kalendar**: omogućava upravljanje kalendarom, koji se može povezati sa Exchangeom ili Outlookom.

:::note SINHRONIZACIJA *OUTLOOK KALENDARA* SA *KALENDAROM FLUENTISA*

1. Konfigurisati korisnika u **ARM-u** i definisati e-mail na kartici **Ostale karakteristike**:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)

2. Nakon toga, pritiskom na dugme *Podrazumevana putanja za Outlook*, biće zatraženo da odaberete koji kalendar želite da konfigurišete među pronađenima, a polje **Podrazumevana putanja za Outlook** automatski će se popuniti:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)

U ovom trenutku, prelaskom u **Kalendar** (statusna traka), nakon ponovnog *pokretanja* Fluentisa, primetićete da je sinhronizacija sa Outlookom uspešno izvršena:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)

Pogledajte takođe [Planiranje resursa u kalendaru](/docs/project-management/transverse-procedures).
:::

**Upravljačke/kontrolne table**: omogućavaju brz pregled ključnih informacija upravljanja pomoću veoma moćnog i lako prilagodljivog statističkog interfejsa;  

**Pretraži**: omogućava prikaz svih naredbi aplikacije. Koristi se zajedno sa poljem za pretraživanje koje se nalazi gore, u glavnom meniju, kako biste pronašli određenu naredbu ili grupisane naredbe;

**...**: omogućava korisniku pristup, desnim klikom, prozoru **Navigation Options** kako bi odabrao maksimalan broj elemenata za prikaz (strelice gore/dole za povećanje/smanjenje) i kako bi odredio redosled kojim će ti elementi biti prikazani (strelice gore/dole za promenu redosleda). Koristite dugme 'OK' za potvrdu izbora i dugme 'Reset' za povratak na podrazumevana podešavanja;  

**Database**: prikazane informacije odnose se na vezu sa bazom podataka, a prikazuju se sledećim redosledom: *Korisnik*, *Server\Database*, *Kompanija*, (*Odeljenje*).