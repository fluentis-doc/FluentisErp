---
title: Task & Blockly
sidebar_label: Task & Blockly
sidebar_position: 2
---

:::info
Kada se otvori forma s detaljima, prema zadanim postavkama prikazuje se Blockly editor, a ne tekstualni editor.
Moguće je prelaziti s blokovskog (Blockly) načina rada na tekstualni editor (ili obrnuto) putem padajućeg izbornika **Vrsta skripte**, koji omogućuje odabir željenog načina rada.
:::

**Supervisor** koristi Blocklyjeve prilagođene blokove za izradu C# skripti. Uz standardne blokovske (Blockly) kategorije (logika, petlje, matematičke operacije, tekstovi, datumi, popisi, boje, varijable), prilagođene kategorije koje se mogu pronaći u **Toolbox** su:

- **Contex variables**, sadrži blokove za odabir varijabli iz trenutnog konteksta i za pretvaranje generičkog objekta u niz/broj/...;

- **Dictionary**, sadrži sve blokove potrebne za rad sa strukturom podataka tipa <span style={{ fontFamily: 'Consolas' }}>Rječnik</span>;

- **Fluentis objekti**, podijeljeni u tri podkategorije:
     - **Commons**, sadrži blokove za izvođenje uobičajenih operacija na *Objektima Fluentis* (tj. odabir svojstva objekta, stvaranje logičkog izraza za filtriranje objekta, stvaranje skupa zapisa iz LINQ izraza, itd...);  
     - **Read Only**, sadrži specifične blokove za izvođenje operacija samo za čitanje na *Fluentis objektima* (na primjer čitanje vrijednosti, filtriranje elemenata zbirke, itd...);  
     - **Read Write**, sadrži specifične blokove za izvođenje operacija čitanja i pisanja na *Fluentis objektima* (tj. stvaranje i instanciranje objekata, postavljanje svojstava ili referenci, itd...);

- **Access to the Database**, pristup bazi podataka, sadrži blokove koji izvode operacije izravno s bazom podataka, kao što je pozivanje pohranjenih procedura ili čitanje vrijednosti iz skupova zapisa;

- **Activities**, aktivnosti su pak podijeljene u kategorije koje nose isti naziv kao i grupe (iste grupe koje se mogu pregledati iz obrasca glavne aktivnosti). Standardne grupe su:  
     - **Alati**, koji sadrži sve standardne [Zadatke](../activity/activity-intro) standard (korisnik ne može dodavati nove zadatke ili mijenjati postojeće u ovoj grupi);  
     - **Primjeri**, sadrži sve primjere aktivnosti koje mogu voditi korisnika u kreiranju novog prilagođenog *Zadatka* (korisnik ne može dodavati nove aktivnosti niti mijenjati postojeće u ovoj grupi, potrebno je kreirati novu grupu sa svojim prilagođenim aktivnostima) 

- **Globals**, sadrži blokove koji mogu dohvatiti globalne **Parametre** ili [liste distribucije](../distribution-list/distribution-list-intro)

- **Task Utility**, sadrži standardne/uobičajene skripte korisne za sve *zadatke*;

Za dodavanje koda u *Zadatku* s *Blocklyjem*, povucite i ispustite blokove iz okvira s  *Toolbox* u **Workspace**. Postoji više *Workspace* koji se mogu odabrati u  *Blockly*:

- **#STD** obrađuje kod unutar metode skripte <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;
- **TaskCompleted** rukuje kodom unutar metode skripte <span style={{ fontFamily: 'Consolas' }}>TaskCompleted()</span>;  

Da biste promijenili trenutni *Workspace*, odaberite drugu vrijednost s padajućeg izbornika stavke *Odjeljak*.

Nakon što završite s umetanjem koda, obavezno kliknite gumb *Spremi/Sastavi* i provjerite je li skripta također vidljiva u *Skript Editor*,  odabirom stavke *Skripta* iz izbornika *Vrsta skripte* (da biste stoga promijenili platformu za kodiranje).

Generirani kod skripte pojavit će se između dva komentirana retka (preimenovana u <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> and <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).

![alt text](/img/it-it/applications/supervisor/supervisor10.png)