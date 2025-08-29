---
title: Upravljanje leasingom  
sidebar_position: 2
---

S ove pozicije moguće je pretraživati leasing ugovore prisutne u bazi podataka i nastaviti s izmjenom detalja ili umetnuti novi 
ugovor pomoću tipke **Novo**.

Filtri za pretraživanje, osim broja, opisa i datuma, mogući su i po banci koja plaća naknadu i po tvrtki koja daje (leasing).

Još jedno ključno polje filtera je **Vrsta leasinga**.

Ovo polje odnosi se na **specifičnu tablicu** (dostupnu i desnim klikom miša > Otvori obrazac) koju je **potrebno ispuniti prije prvog unosa novog leasinga**.

![](/img/it-it/finance-area/leasing/search/image01.png)

Ostali podaci prijavljeni u tablici rezultata su **Datum ugovora** (tj. sklapanja, datum od kojeg počinje obračun relevantnih dana),  

**Datum isteka roka trajanja** (datum do kojeg treba izračunati ukupne dane u svrhu izračuna relevantnih dana),  

**Broj** ugovora,  

**Opis** predmeta leasinga,  

**Konto/podkonto** banke za plaćanje i davatelja sredstava,  

**Početna postavka** (ako je predviđena i uključena u podatke o ugovoru)

**Troškovi obrade** (troškovi upravljanja ugovorom ako su predviđeni i uključeni)  

**Preostalo zaduženje**: polje izračunato kao zbroj kapitalnih dijelova očekivanih najamnina umanjenih za one koje su već obračunate kao plaćene.  

**TABLICA VRSTA LIZINGA**:

Tablica koja definira sve obvezne atribute vrste leasinga, vrste koje se moraju pozvati prilikom sklapanja novog ugovora o leasingu. ![](/img/it-it/finance-area/leasing/search/image02.png)

**Šifra / opis**: slobodno se dodjeljuju, identificiraju vrstu leasinga koju šifriramo.  

**Vrsta leasinga**: polje trenutno samo informativno, ne određuje nikakvu automatizaciju, definira da li je Financijski leasing ili Operativni najam.  

**Računovodstvena metoda**: PAŽNJA - trenutno je implementirana samo **Kapitalna** metoda koja omogućava pravilno funkcioniranje računovodstvenih procedura.  

Patrimonijalna metoda odgovara talijanskim računovodstvenim standardima OIC (koji predviđaju evidentiranje najmova prema pravnoj formi ugovora, kao običan najam bez prijenosa vlasništva, s posljedičnim knjiženjem imovine u bilanci i početkom amortizacije tek na kraju ugovora kada se predmet najma otkupi).

Financijska metoda odgovara međunarodnim računovodstvenim standardima IAS/IFRS (koji predviđaju uzimanje u obzir ekonomske suštine transakcije, a ne samo pravne forme, te se stoga predmet najma odmah knjiži kao imovina u bilanci i započinje se s amortizacijom).

**Tip tijeka novca**: padajući izbornik koji omogućuje da iz tablice Tip tijeka novca modula Novčanog tijeka pozove vrsta (koja ima oznaku Extraaccounting) tijeka novca s kojom se predstavljaju financijski tijekovi zahtjeva za različite predviđene naknade unutar ugovora.  

**Predložak knjiženja**: causale contabile che sarà utilizzata nelle registrazioni contabili relative ai canoni leasing fatturati dalla società concedente e da contabilizzare.

**Kamate konto/podkonto**: u ovim poljima označava se konto na koji će se obračunavati kamatni dio očekivanih naknada. Ova postavka bit će predložena u novim ugovorima umetnutima uz ovu tipologiju.

**Konto /podkonto naknade**: u ovom polju označava se kontokoji će se koristiti za glavni dio najamnina koji će se obračunavati. Konto će biti ponuđen u novim ugovorima o najmu umetnutim s ovom tipologijom.  

**Konto /podkonto troškova**: označava se račun koji će se koristiti za dio troškova prikupljanja pojedinačnih naknada (ako je primjenjivo).  

**PDV**: budući da je ovo knjiženje fakture naknada, potrebno je navesti stopu koja će se automatski predložiti u računovodstvenim evidencijama naknada.  





