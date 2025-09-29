---
title: Vrste otpremnica za prezentaciju mjenica
sidebar_position: 4
---

:::tip[FAst Start]
Tablica je obuhvaćena procedurom [**Fast Start**](/docs/guide/fast-start)

Ako želite konfigurirati ručno, pogledajte kontrolnu listu na poveznici.  
:::

Ova tablica povezana je s poljem *Vrsta* koje se nalazi u zaglavlju otpremnice za prezentaciju mjenica. 

Popunjava se unosom šifre i opisa, kojima se zatim pridružuje odgovarajući numerator.

Dodatne opcije u formi omogućuju definiranje sljedećeg:

- **Račun dobavljača**: označava da se vrsta otpremnice koristi za prosljeđivanje mjenica ili vrijednosnica dobavljaču;  

- **Potrošnja**: ako se vrsta otpremnice koristi za RID naloge (danas zamijenjene s SDD – SEPA Direct Debit na europskoj razini). Aktiviranjem ove opcije omogućuje se izvoz odgovarajuće datoteke putem tipke u traci izbornika forme otpremnice. 

- **LCR**: francuski ekvivalent našeg RIBA modela. Ako je ova opcija uključena, aktivira se tipka za izvoz LCR datoteke, dok standardni izvoz nije dostupan. 

- **Izravno zasluga**: kada je ova opcija postavljena, knjiženje otpremnice evidentira iznos na DUGUJE za račun banke, a na POTRAŽUJE za prijelazni bankovni račun (primjer: *Banka X - prijelazni račun S.B.F.*) dok će knjiženje uplate imati DUGUJE za prijelazni bankovni račun, a POTRAŽUJE za račun povezan s vrstom mjenice (primjer: *Aktivne mjenice u portfelju*).   

Kako je flag isključen, primjenjuje se standardna logika: na DUGUJE ide prijelazni račun, a na POTRAŽUJE račun preuzet iz vrste mjenice (primjer: *Aktivne mjenice u portfelju*), dok knjiženje uplate, kao i do sada, predviđa DUGUJE račun banke i POTRAŽUJE prijelazni bankovni račun.

Ova postavka nije kompatibilna s još dvije logike koje se mogu aktivirati putem obrasca Parametri portfelja efekata: flag *Zatvaranje kupca u knjiženju popisa* ne smije biti postavljen (jer preskoči prijenos na račun efekata, s aktivnim flagom ovog tipa popisa zapravo bi onemogućio zatvaranje kupca). Također, korištenje opcija knjiženja popisa na datum dospijeća također se čini nelogičnim s aktivnim ovim flagom.

- **Vanjski kod**: polje koje se koristi u SDD zapisu za određivanje je li otpremnica tipa *CORE* ili *B2B*. Potrebno je konzultirati tehničku dokumentaciju SDD zapisa za detalje.  


- **Računi**

- Račun / Podračun / Opis **Banke**
- Račun / Podračun / Opis **Prijelaznog bankovnog računa**

mogu se povezati s vrstom popisa kako bi se automatiziralo i definiralo računovodstveno kretanje prilikom kreiranja novog popisa: radi se o podračunu kartice banke na koju će se izvršiti konačno kreditiranje efekata i o privremenom računu za knjiženje popisa (tipično, na primjer, *Banka X – prijelazni račun S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>


