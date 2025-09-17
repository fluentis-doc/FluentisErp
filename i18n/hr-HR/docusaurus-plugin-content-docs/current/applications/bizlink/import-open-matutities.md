---
title: Uvoz Otvorenih stavki
sidebar_position: 2
---

Excel datoteka (predložak) za uvoz otvorenih stavki u Administrativnom modulu zahtijeva popunjavanje obe kartice:

**Parametri Bizlinka:**

Polja za popunjavanje (ne popunjavaju se automatski)  

- stavka ili plaćanje: 0 = otvorena stavka; 1 = plaćanje (zatvara stavke), pogledajte dokumentaciju Administrativnog modula u slučaju nejasnoća;  
- U plaćanju: oznaka koja pokazuje je li stavka već unesena u transakciju uplate dobavljača. Obično postavljeno na 0 za normalne otvorene stavke;  
- ID statusa stavki: postaviti na 1 prema zadanim postavkama;  


**Kartica Podaci:**

KUPAC / DOBAVLJAČ    
    
- Konto / podkonto: unesite kod računa i podračuna kupaca ili dobavljača koji su već prisutni u Fluentisu (OBAVEZNO)  

REFERENCE DOKUMENTA    
- Vrsta dokumenta: npr. FA za račun kupovine, FV za račun prodaje. Koristite već postojeću kodiranu vrijednost u Fluentisu.  
- Broj / Datum računa: neobavezno, u slučaju opće stavke možete ga izostaviti označavajući tip dokumenta kao GEN  

PODACI O PLAĆANJU  
- Vrsta plaćanja: već mora biti prisutna u Fluentisu (pogledajte kodove vrsta plaćanja koji su prisutni) - OBAVEZNO  
- Datum dospijeća: datum dospijeća stavke - OBAVEZNO   
- Račun / podračun banke. To je banka povezana s partijom (neobavezno)  

PODACI O STAVKAMA  
- Preostalo (Duguje / Potražuje): podatak o preostalom otvorenom iznosu, ako stavka nije djelomično plaćena, odgovara protuvrijednosti.    
PODATAK JE IZRAŽEN U VALUTI NAVEDENOJ U ODGOVARAJUĆEM STUPCU. OBAVEZNO popuniti odjeljak Duguje ili Potražuje (ovisno o znaku stavke) i uvijek unesite vrijednost 0,00 u susjedni stupac. (ako unesete Duguje npr. 100,00 stavite 0,00 u Potražuje) OBAVEZNO  
- Protuvrijednost (Duguje / Potražuje): to je vrijednost stavke u valuti tvrtke (npr. euri). OBAVEZNO popuniti odjeljak Duguje ili Potražuje (ovisno o znaku stavke) i uvijek unesite vrijednost 0,00 u susjedni stupac. (ako unesete Duguje npr. 100,00 stavite 0,00 u Potražuje) OBAVEZNO  
- Valuta: popunite kodom koji već postoji u Fluentisu (npr. EUR za euro, USD za američki dolar) - OBAVEZNO  
- Blokada: oznaka koja pokazuje je li stavka blokirana i nije plaćiva (1) ili je slobodna (0). OBAVEZNO  
- Bilješke: opcionalno polje s napomenama o stavki  

PODACI O ZAPISU Datum i broj knjiženja povezanog s partijom. Odsjek je neobavezan.  

PAŽNJA: Ako je unesen zapis, mora već biti prisutan u Fluentisu i bit će pretražen tijekom uvoza, ako nije pronađen, uvoz će vratiti pogrešku.  

---

Provjerite jesu li šifre valuta (tablica valuta) ispunjeni za sve valute (ponekad nedostaje za euro)  


**PAŽNJA**: provjerite jesu li u numeratoru partija uključene i prethodne godine ako u Excelovoj tablici postoje stavke s dospijećem iz prethodnih godina, inače će doći do pogreške. To je zato što novi baza podataka obično ima numeratore koji počinju s tekućom godinom.  



