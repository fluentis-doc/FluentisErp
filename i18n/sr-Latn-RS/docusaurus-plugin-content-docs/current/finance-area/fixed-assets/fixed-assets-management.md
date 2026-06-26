---
title: Osnovna sredstva
sidebar_position: 3
---

LINK:

**[Detalji](/docs/finance-area/fixed-assets/fixed-assets-management/detail)**

**[Operacije osnovnog sredstva](/docs/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations)**

**[Ekonomske operacije](/docs/finance-area/fixed-assets/fixed-assets-management/economical-operations)**

**[Povezana osnovna sredstva](/docs/finance-area/fixed-assets/fixed-assets-management/linked-fixed-assets)**

**[Svojstva osnovnog sredstva](/docs/finance-area/fixed-assets/fixed-assets-management/fixed-assets-property)**

Ovaj obrazac omogućava ručni unos nove kartice osnovnog sredstva. Ovakav način unosa se uglavnom koristi samo u posebnim slučajevima, na primer kada je potrebno evidentirati postojeće osnovno sredstvo bez preuzimanja već postojećih računovodstvenih knjiženja iz prethodnog informacionog sistema.

Ova procedura predstavlja alternativu kreiranju kartice osnovnog sredstva direktno iz računovodstvenog knjiženja ulaznog računa koje je posebno podešeno za upravljanje osnovnim sredstvima, što je ujedno i preporučeni način rada.

## Zaglavlje

**Kategorija osnovnog sredstva** može se odabrati iz padajuće liste povezane sa tabelom **[Kategorije osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-category)**.

**Vrsta posedovanja**  
Podrazumevano je postavljeno **Vlasništvo**. Pored toga, moguće je evidentirati osnovna sredstva u **zakupu** ili **lizingu**. Takva sredstva vode se pod zasebnom numeracijom i ne ulaze u štampu registra amortizovanih osnovnih sredstava.
Ovakav način evidencije omogućava simulaciju obračuna amortizacije na kraju godine radi poređenja sa troškovima lizinga u poreske svrhe.
Za osnovna sredstva koja nisu u vlasništvu moguće je uneti dodatne napomene.

**Odeljenje**  
Podrazumevano se predlaže trenutno odeljenje, ali ga je moguće promeniti prilikom unosa novog osnovnog sredstva. Nakon kreiranja kartice, ovo polje više nije moguće menjati.

**Vrsta obračuna**  
Polje koje se uglavnom ne popunjava prilikom ručnog unosa. Njegova vrednost se automatski određuje kroz računovodstveno knjiženje na osnovu podešavanja u tabeli **Vrste knjiženja osnovnih sredstava**.

**Prefiks**  
Može biti deo numeracije osnovnih sredstava. Ako nije definisan, numeracija će biti jedinstvena za sva osnovna sredstva aktivnog preduzeća i odeljenja.

Ako se koristi prefiks, numeracija će biti jedinstvena u okviru svakog pojedinačnog prefiksa.

**Materijalno / Nematerijalno**  
Označava prirodu osnovnog sredstva i automatski se preuzima iz kategorije osnovnog sredstva.

**Napomene o osnovnom sredstvu**  
Slobodno tekstualno polje namenjeno unosu dodatnih informacija.

**Broj osnovnog sredstva**  
Automatski se predlaže kao sledeći raspoloživi broj, ali ga je moguće uneti i ručno kao jedinstvenu oznaku.

**Opis**  
Obavezno polje koje će biti prikazano u svim izveštajima i povezanim procedurama.

U zavisnosti od podešavanja kategorije osnovnog sredstva i parametara modula, može biti prikazan i tip amortizacije dodeljen osnovnom sredstvu, kao i poseban procenat amortizacije koji će važiti samo za to osnovno sredstvo umesto standardnog procenta definisanog kategorijom.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/image01.png)