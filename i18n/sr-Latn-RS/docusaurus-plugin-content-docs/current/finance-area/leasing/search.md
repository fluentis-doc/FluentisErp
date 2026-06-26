---
title: Upravljanje leasingom
sidebar_position: 2
---

Sa ovog mesta moguće je pretraživati leasing ugovore koji se nalaze u bazi podataka, menjati njihove detalje ili uneti novi ugovor pomoću dugmeta **Novo**.

Pored filtera za broj, opis i datum, pretraga je moguća i prema banci preko koje se vrši plaćanje rata, kao i prema leasing društvu (davaocu leasinga).

Još jedno važno polje za filtriranje je **Vrsta leasinga**.

Ovo polje povezano je sa **posebnom tabelom** (dostupnom i preko desnog klika > Otvori obrazac), koju je **potrebno popuniti pre prvog unosa novog leasing ugovora**.

![](/img/it-it/finance-area/leasing/search/image01.png)

Ostali podaci prikazani u tabeli rezultata su:

**Datum ugovora** (datum zaključenja ugovora, od kojeg počinje obračun relevantnih dana),

**Datum isteka ugovora** (datum do kojeg se računa ukupan broj dana za potrebe obračuna),

**Broj** ugovora,

**Opis** predmeta leasinga,

**Konto/podkonto** banke za plaćanje i davaoca leasinga,

**Početna maksimalna naknada** (ukoliko je definisana u ugovoru),

**Troškovi obrade** (ukoliko su ugovoreni),

**Preostalo zaduženje**: polje koje se automatski izračunava kao zbir glavničkih delova svih planiranih rata umanjen za glavničke delove rata koje su već knjižene kao plaćene.

## TABELA VRSTA LEASINGA

Ova tabela definiše sve obavezne karakteristike vrste leasinga koje se koriste prilikom kreiranja novog leasing ugovora.

![](/img/it-it/finance-area/leasing/search/image02.png)

**Šifra / Opis**: slobodno se definišu i služe za identifikaciju vrste leasinga.

**Vrsta leasinga**: trenutno ima samo informativnu funkciju i ne utiče na automatizaciju. Njome se određuje da li se radi o finansijskom leasingu ili operativnom leasingu.

**Računovodstveni metod**: **PAŽNJA** – trenutno je implementiran samo **Kapitalni metod**, koji omogućava pravilno funkcionisanje računovodstvenih procedura.

Patrimonijalni metod odgovara italijanskim računovodstvenim standardima **OIC**, prema kojima se leasing evidentira prema pravnoj formi ugovora kao običan zakup, bez priznavanja sredstva u bilansu sve do njegovog otkupa, kada započinje amortizacija.

Finansijski metod odgovara međunarodnim računovodstvenim standardima **IAS/IFRS**, koji uzimaju u obzir ekonomsku suštinu transakcije, pa se predmet leasinga odmah evidentira kao imovina u bilansu i odmah započinje njegova amortizacija.

**Tip novčanog toka**: padajuća lista koja omogućava izbor vrste novčanog toka iz tabele **Tip novčanog toka** modula Novčani tok, pri čemu se koristi tip sa aktiviranom opcijom **Extraaccounting** za evidentiranje finansijskih tokova leasing ugovora.

**Predložak knjiženja**: računovodstveni predložak koji će se koristiti za knjiženje leasing rata koje fakturiše leasing društvo.

**Konto/podkonto kamata**: određuje konto na koji će se knjižiti kamatni deo leasing rata. Ova vrednost automatski se predlaže prilikom kreiranja novih ugovora ove vrste.

**Konto/podkonto glavnice**: određuje konto na koji će se knjižiti glavni deo leasing rata. Ovaj konto automatski se predlaže u novim leasing ugovorima.

**Konto/podkonto troškova**: određuje konto koji će se koristiti za knjiženje troškova pojedinačnih leasing rata (ukoliko postoje).

**PDV**: pošto se radi o knjiženju računa za leasing rate, potrebno je odrediti stopu PDV-a koja će se automatski predlagati u računovodstvenim knjiženjima leasing rata.