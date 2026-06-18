---
title: Upravljanje prognozama prodaje
sidebar_position: 1
---

Ova funkcionalnost dostupna je putem **Prognoza prodaje > Upravljanje prognozama prodaje**. Ovde je moguće pregledati sve već definisane prognoze prodaje i kreirati nove. Analizirajmo karakteristike nove prognoze prodaje.

Zaglavlje se sastoji od sledećih polja:

**Tip prognoze prodaje**: podaci se preuzimaju iz tabele [Tip prognoze prodaje](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) i imaju ključnu ulogu u određivanju perioda na koje Fluentis treba da podeli prognozu prodaje. Povezivanjem sa [Tipom perioda](/docs/configurations/tables/crm/sales-forecast/period-type) definisanim u ovoj tabeli, Fluentis može da odredi da li prognoza treba da bude podeljena godišnje, mesečno ili na druge definisane načine;

**Opis**: polje za slobodan unos opisa;

**Godina/Datum/Redni broj**: ova polja se automatski popunjavaju na osnovu povezane numeracije i datuma naloga.

U prvoj tabeli dozvoljen je unos redova koji se odnose na prognozu prodaje. Pomoću dugmadi na alatnoj traci moguće je izgraditi strukturu stabla, na primer za geografsku podelu. Počinje se od prve grupe, a zatim se struktura detaljno razrađuje prema željenim nivoima podele. Iznosi u drugoj tabeli mogu se unositi samo na nivou detalja, odnosno nakon unosa poslednjeg nivoa stabla. Kada se unese poslednji nivo, druga tabela će se automatski popuniti, raspoređujući datume prema podešenom [Tipu perioda](/docs/configurations/tables/crm/sales-forecast/period-type). Tada će biti moguće uneti količine i iznose za različite periode u drugoj tabeli, omogućavajući Fluentisu da izračuna ukupne vrednosti i prikaže ih u prvoj tabeli.

U prvoj tabeli neka polja su aktivna kada se unosi Grupa, a druga kada se unosi Detalj, uz odgovarajuću dugmad na alatnoj traci.

Analizirajmo polja koja se mogu popuniti ako je red tipa Grupa/Čvor:

**Redni broj grupe**: svakoj grupi dodeljuje se redni broj;
**Opis grupe**: moguće je uneti slobodan opis za svaku grupu;
**Zona**: svaka grupa može biti povezana sa različitom zonom;
**Dodeljeni operater**: potrebno je navesti operatera odgovornog za prognozu prodaje u toj zoni;
**Agent**: moguće je navesti agenta odgovornog za prodaju u toj zoni;
**Napomena**: slobodno polje za beleške.

Analizirajmo polja koja se mogu unositi ako je red tipa Detalj:

**Grupa proizvoda**: ovo polje sadrži grupu artikala za koju se kreira prognoza, zajedno sa pripadajućim **Opisom**; samo [Klase artikala](/docs/configurations/tables/logistics/item-class) koje su povezane sa ovom grupom proizvoda biće uzete u obzir za statistiku;
**Jedinica mere**: predlaže se jedinica mere grupe proizvoda;
**Napomena detalja**: slobodno polje za beleške.

Zatim postoje i obračunata polja:
**Ukupna količina**: prikazuje zbir količina perioda iz druge tabele;
**Prosečna jedinična cena**: prikazuje zbir iznosa perioda iz druge tabele;
**Prosečna cena po jedinici**: sadrži rezultat operacije *Ukupna količina/Ukupan iznos*.

U drugoj tabeli prikazan je *Detalj* [Tipa perioda](/docs/configurations/tables/crm/sales-forecast/period-type) povezanog sa izabranim [Tipom prognoze prodaje](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type). Takođe je moguće uneti **Količinu** i **Iznos** za svaki period. Ovi podaci se sabiraju i koriste za formiranje **Ukupnog iznosa** i **Ukupne količine** u prvoj tabeli.