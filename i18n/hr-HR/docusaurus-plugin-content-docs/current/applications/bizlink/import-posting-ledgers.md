---
title: Uvoz Knjigovodstvenih prometa
sidebar_position: 2
---

Excel datoteka (predložak) za uvoz knjigovodstvenih prometa u Administrativni modul omogućuje popunjavanje i dijela za PDV i dijela za knjiženje te se stoga popunjava na odgovarajući način ovisno o tome da li se uvoze knjigovodstveni prometi koji uključuju PDV ili jednostavno knjigovodstveni prometi.


AKO se uvoze knjigovodstveni prometi faktura:   
1^ redak = zaglavlje   
2^ redak = dnevnik + PDV  
3^ redak (i nakon toga) = knjigovodstveni prometi dnevnika  

Prva knjiga  
1^ redak = zaglavlje  
Ostali redci = dnevnik

Primjer

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Datum knjiženja / Datum obračuna:** datumi knjiženja i valute glavnih knjiženja;  

**Broj knjiženja:** pažnja, mora biti slobodan u odredišnoj bazi podataka ili će funkcija prepisati ono što pronađe bez provjere (to je SQL ažuriranje);

**Predložak:** koristite kod povoda koji je već prisutan i koji je u skladu s knjiženjem (primjerice, PDV povod ako uvozite knjiženja faktura);

**Knjiga računa:** koristite kod već prisutnog registra;  

**Referentni broj PDV-a:** koristite slobodan protokol;  

**Valuta; Valuta; Euro:** uvijek popunite sve čak i ako je sve u eurima i nema promjene. Uvijek popunite i drugi stupac s 0,00 (primjer: ako popunite Dugujući stupac s 1000,00, u susjedni stupac Potražuje stavite 0,00);

**Račun / Podračun:** koristite kodove računa koji su već prisutni.

---
**PDV podaci**

Učitajte **šifru** stope poreza koji već mora biti prisutan u bazi podataka  

Popunite sve podatke, uključujući osnovicu za porez i čak i neoporezivi porez (eventualno s vrijednošću 0,00)

---

Poduzeće: Opcionalno, ako želim učitati i vezu s troškovnim centrom (već prisutno) 

Broj narudžbe: Opcionalno, ako želim učitati i povezati  

---

U **kartici Parametri** možete postaviti vrijednost 1 na **Preračun**, na taj način izvršava se ponovno izračunavanje podataka iz dnevnika i generira otvorene stavke iz podataka uvjeta plaćanja, ako, na primjer, nedostaju jer nisu uvoženi zasebno. Inače, neće se obaviti nikakvo ponovno izračunavanje i stavke, na primjer, neće se kreirati ako nisu uvežene. (Preporučena opcija zbog performansi i vremena obrade, pogotovo s velikim brojem redaka)  

Pažnja: računi moraju već postojati u bazi podataka inače poruka o pogrešci neće mi reći koji račun nedostaje, već se uvijek odnosi na posljednji redak Excel tablice.