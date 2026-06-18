---
title: Marketinški budžet
sidebar_position: 4
---

Kroz ovu funkcionalnost moguće je kreirati budžet za određeni period.

Podaci zaglavlja su sledeći:

**Budžetski period**: u ovo polje potrebno je uneti [Period](/docs/configurations/tables/crm/sales-forecast/budget-period) koji će se koristiti kao jedinica podele godine; na osnovu izabranog perioda, kasnije uneti iznosi automatski će biti raspoređeni po različitim periodima navedenim u tabeli ispod *Periodi*;
**Opis**: sadrži slobodan opis;
**Datum isteka važenja**: sadrži eventualni datum zatvaranja budžeta;
**Projekat**: moguće je povezati projekat.

U prikazu je moguće izgraditi stablo budžeta korišćenjem dugmadi na alatnoj traci. Svaki korenski čvor stabla sadržaće zbir količina i iznosa različitih podređenih čvorova. Krajnji čvorovi stabla su oni u koje je moguće unositi troškove kroz sledeća polja:

**Vrsta troška**: na osnovu izbora [Vrste troška](/docs/configurations/tables/crm/sales-forecast/expenses-type), biće moguće uneti Opis, Konto ili Artikal;
**Jedinica mere**: sadrži jedinicu mere koja će se koristiti za trošak;
**Ukupna količina**: sadrži ukupnu količinu koja će biti raspodeljena po različitim budžetskim periodima;
**Jedinična cena**: ovo polje se automatski popunjava rezultatom deljenja *Ukupnog iznosa* sa *Ukupnom količinom*;
**Ukupan iznos**: sadrži ukupan iznos koji će biti raspodeljen po različitim budžetskim periodima.

U desnom prikazu, *Ukupna količina* i *Ukupan iznos* raspodeljeni su prema broju perioda predviđenih u [Budžetskom periodu](/docs/configurations/tables/crm/sales-forecast/budget-period) unetom u zaglavlju. Na taj način biće moguće pregledati budžet za svaki pojedinačni period. Prikaz *Perioda* može se menjati korišćenjem dugmadi na ribbon traci, ukoliko kalendar treba da odstupa od standardne šifre.