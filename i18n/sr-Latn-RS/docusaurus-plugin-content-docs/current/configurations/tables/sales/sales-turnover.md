---
title: Promet prodaje
sidebar_position: 10
---

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

#### Specifična polja

**Tip:** identifikaciona šifra prometa prodaje.

**Opis:** opis prometa prodaje.

**Konto/Podkonto/Opis podkonta:** konto troška koji se koristi prilikom knjiženja prodajnih dokumenata.

**Tip PDV-a:** koristi se prilikom knjiženja dokumenta. Obično je podešen na opšti tip. Za više detalja proverite njegovu upotrebu u računovodstvenim šablonima i računovodstvenim knjiženjima u administrativnoj oblasti.

**Tip iznosa:** koristi se prilikom knjiženja dokumenta. Za više detalja o njegovoj računovodstvenoj [upotrebi](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) pogledajte računovodstvena knjiženja u administrativnoj oblasti.

**Grupa proizvoda/Opis grupe proizvoda:** polje za statističku dodelu prodaje za CRM-ovu prognozu prodaje (Sales Forecast).

**Detalji po državama:** ovi podaci koriste se samo za razmenu podataka sa spoljnim programima. U budućnosti će biti moguće definisati različite konta troška prema državi i tipu knjiženja artikla, koji je povezan u šifarniku kupaca.

:::note[Napomena]
Ako je *Tip fakturisanja* unet u *šifarnik artikala*, ta šifra biće predložena u redovima artikala nabavnog dokumenta i automatizovaće knjiženje dokumenata na određeni protivkonto.
:::

#### Primer prodajne fakture

Ako je *Tip fakturisanja* već unet u *šifarnik artikala*, u prodajnim dokumentima biće prikazan na kartici *Artikli*, u polju *Promet prodaje*. Ako nije unet u šifarnik artikala, moguće ga je odabrati direktno unutar prodajnog dokumenta putem odgovarajućeg padajućeg menija.

Ako tip fakturisanja nije unet u šifarnik artikala, a korisnik zaboravi da ga ručno unese u prodajni dokument, sistem omogućava nastavak knjiženja dokumenata bez blokiranja postupka. U tom slučaju, ako se takav izbor smatra odgovarajućim, koristi se podrazumevani protivkonto analitičkog konta koji je podešen u **Šifarnik kontakata > kartica Podaci knjiženja > kartica Administracija**, u polju **Trošak/prihod podrazumevane protivstavke**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).