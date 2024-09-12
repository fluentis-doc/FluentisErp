---
title: Upravljanje prognozama prodaje
sidebar_position: 1
---

Ova funkcija je dostupna putem **Sales Forecast > Upravljanje prognozama prodaje**. Ovdje možete pregledati sve već kodirane prognoze prodaje i kreirati nove. Analizirajmo karakteristike nove prognoze prodaje.     
         
Naslov se sastoji od sljedećih polja:       
**Vrsta prognoze prodaje**: podaci se izdvajaju iz tablice [Vrsta prognoze prodaje](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) i igraju ključnu ulogu u određivanju perioda u kojima Fluentis treba podijeliti prognozu prodaje. Povezivanjem s [Tipom razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type) prisutnim u ovoj tablici, Fluentis može odrediti hoće li se prognoza morati podijeliti godišnje, mjesečno ili na druge određene načine;          
**Opis**: ovo je polje slobodnog opisa.;      
**Godina/Datum/Redni broj**: ova polja automatski se popunjavaju na temelju povezane Numeracije i Datuma narudžbe.    

U prvoj mreži dopušteno je unositi redove vezane uz prognozu prodaje. Pomoću gumba u alatnoj traci moguće je izgraditi strukturu drveta, primjerice za geografsko podjelu. Počinje se s prvom grupom, a zatim se struktura detaljizira prema željenim razinama podjele. Iznosi u drugoj mreži mogu se popuniti samo na razini pojedinosti, odnosno nakon unosa posljednje razine drveta. Kad se unese ta posljednja razina, druga mreža automatski će se popuniti, razdvajajući datume prema postavljenom [Tipu razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type). Tada će biti moguće popuniti količine i iznose raznih razdoblja u drugoj mreži, omogućujući Fluentisu da izračuna ukupne i prikaže ih u prvoj mreži.

U prvoj mreži neka polja su aktivna kad se unese Grupa, a druga kada se unese Detalj, s odgovarajućim gumbima u alatnoj traci.        
Analizirajmo polja koja se mogu ispuniti ako je redak Grupa/Čvor:         
**Redni broj grupe**: svakoj Grupi dodjeljuje se redni broj;      
**Opis grupe**: moguće je unijeti slobodan opis za svaku Grupu;       
**Zona**: svaka Grupa može biti povezana s različitom Zonom;       
**Dodijeljeni operater**: potrebno je navesti operatera odgovornog za prognozu prodaje u toj Zoni;           
**Agent**: moguće je navesti agenta odgovornog za prodaju u toj Zoni;      
**Napomena**: slobodno polje za napomene.        
Analizirajmo polja koja se mogu unijeti ako je redak Detalj:           
**Grupa proizvoda**: ovo polje sadrži grupu artikala za koju se stvara prognoza, s pripadajućim **Opisom**; samo će se [Razredi artikala](/docs/configurations/tables/logistics/item-class) koji su povezani s ovom obitelji proizvoda uzeti u obzir za statistike;            
**Jedinica mjere**: predložena je jedinica mjere Obitelji;        
**Detaljna napomena**: slobodno polje za napomene.           
Zatim postoje i izračunata polja:       
**Ukupna količina**: prikazuje zbroj Količina razdoblja u drugoj mreži;     
**Srednja Jedinična Cijena**: prikazuje zbroj Iznosa razdoblja u drugoj mreži;      
**Prosječna cijena po jedinici**: unosi se rezultat operacije *Ukupna količina/Ukupan iznos*.     

U drugoj mreži, prikazuje se *Detalj* [Tipa Razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type) povezanog s odabranim  [Tipom prognoze prodaje](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type). Osim toga, moći će se navesti  **Količina** i **Iznos** za svako razdoblje. Ti se podaci, zbrojeni, koriste za formiranje **Ukupnog iznosa** i **Ukupne količine** u prvoj mreži. 