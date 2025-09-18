---
title: Parametri potreba za materijalom
sidebar_position: 7
tags: [Zahtjevi za materijal]
---

Kroz ovaj prozor se postavljaju parametri koji se tiču nekih od osnovnih postavki proizvodnog područja.  

**Prvi dan u tjednu za izračun proizvodnih kapaciteta**: moguće je odlučiti koji dan treba smatrati prvim u tjednu u [Kalendaru proizvodnih kapaciteta](/docs/configurations/tables/production/factory-calendar), a time i u kalendaru radnog centra. Obično se postavlja u ponedjeljak.

**Zadnji planirani nalog umetnut za ovu godinu**: predstavlja zadnji progresivni broj korišten u tekućoj godini za planske naloge. 

**Boje tipova dokumenatao**: omogućuje postavljanje boje pozadine i teksta za različite tipove narudžbi: narudžbe za nabavu, proizvodnju ili podizvođača, koje su u kašnjenju i/ili isteku.

## Parametri za puštanje planiranih narudžbi 

U ovom odjeljku korisnik može postaviti vrstu zahtjeva za kupnju i vrstu narudžbe za vanjsku obradu (ako je zatvorena, dakle nije daljnje moguće mijenjati ili otvorena i stoga je moguće mijenjati) koje se automatski generiraju tijekom puštanja planiranih narudžbi za kupnju i vanjsku obradu.

**Obavezna provjera izvođača u vanjskim fazama**: ako je aktivno, u slučaju da nije naznačen vanjski suradnik u vanjskoj fazi, to će biti označeno pomoću opcije **Boja teksta za redak narudžbe** dolje navedeno.   

**Pojednostavljeno upravljanje proizvodnjom**: je zastarjelo i koristi se samo u starim verzijama.

**Zadrži poveznicu između naloga i podnaloga**: ako je aktivno, omogućuje, koristeći također i flagove koji slijede odmah, odlučiti da ukoliko se ručno promijeni datum planirane narudžbe, procedura izvrši odgovarajuću promjenu i na planiranim narudžbama koje su odmah susjedne onoj koja je pretrpjela prvotnu promjenu.

**Broj dana za izračun dostupnosti**: označava koliko unaprijed treba procjenjivati dostupnost, pri čemu se ne uzimaju u obzir narudžbe i potreba koje prelaze taj datum.  

**Datum predaje materijala u fazi istovara materijala**: ako je aktivno, datum korištenja materijala naveden u planiranim narudžbama bit će jednak datumu početka koji je najveći među svim fazama, što znači da će biti jednak datumu početka posljednje faze. Dok, ako flag nije aktivan, datum korištenja materijala naveden u planiranim narudžbama bit će jednak datumu početka narudžbe, dakle datumu početka prve faze.

**Dani unaprijed za predavanje materijala**: Vrijednost koja je navedena omogućuje da se dostupnost materijala unaprijedi za taj broj dana u odnosu na početak obrade (bilo u planiranim proizvodnim narudžbama ili u proizvodnim narudžbama), kako bi se logistici omogućilo da materijal dostavi na vrijeme u proizvodnju. Ovo se uzima u obzir u sljedećim procedurama: sve planiranja "što je prije moguće", "što je kasnije moguće", "s ograničenim kapacitetom", "MRP", "Dovršavanje podataka narudžbe" kako u planiranim narudžbama tako i u proizvodnim narudžbama, "Ponovno izračunavanje datuma početka" kako u planiranim narudžbama tako i u proizvodnim narudžbama, te sve procedure CRP ("Gantt", "Kapacitet radnih centara" i "Sekvenca faza") koje djeluju na promjenu datuma početka ili završetka faze narudžbe.

**M.R.P. povijesni dani za ostaviti**: omogućuje označavanje razdoblja u danima za koje će se rezultati MRP obrada čuvati unutar povijesti. Kada obrada premaši broj dana unesenih u ovo polje, ona će biti uklonjena iz povijesti prilikom sljedeće MRP obrade. Ako se polje ostavi prazno, nijedna obrada neće biti izbrisana iz povijesti.

## Skladišta za raspored narudžbi  

Mreža prikazuje jednostavan pregled liste skladišta za koja se mora provjeriti dostupnost. Ta se lista postavlja u obrascu pod nazivom *Izračun dostupnosti*, koji se nalazi među alatima upravljačkog sustava.

## Gantt parametri  

Omogućuje unos zadatih parametara za upravljanje obrascem Gantt (*Vrsta simulacije Gantt* i *Vrsta simulacije Snapshot*).

## Parametri izračuna izvedivosti   

Omogućuje unos uputa za aktivaciju i prikaz **Izvodljivost** radnih faza.   

U trenutnoj verziji proizvoda jedina dostupna aktivacija je u upravljanju *Sekvenca faza*.U budućim verzijama bit će uvedene i druge procedure.  

Moguće je aktivirati kontrolu izvedivosti: 

- **Razmotri materijale**: omogućuje tipku *Detalj procjene materijala* i polje *Procjena materijala* u mreži aktivnih procedura u okviru **Izračun izvedivosti za primjenu u**;    
- **Razmotri prethodne faze**: omogućuje tipku *Detalj procjene faza* i polje *Procjena faza* u mreži aktivnih procedura u okviru **Izračun izvedivosti za primjenu u**.

## Izračun izvedivosti za primjenu u
Dopusti omogućavanje izvedivosti u pojedinim postupcima:
- Sekvenca faza
- Kapaciteti radnih centara
- Oslobađanje planiranih narudžbi
- Lista za preuzimanje materijala
- Filtriranje proizvodnih naloga  

## Boje izračuna izvedivosti

Moguće je postaviti boje koje ističu različite informacije o dostupnosti materijala koji se koristi:    
- *Materijal nije dostupan*: označava da nijedan materijal nije dostupan, čak ni u djelomičnoj količini;     
- *Materijal djelomično dostupan*: označava da postoji barem djelomična količina nekog materijala, ali ne i potpuna dostupnost svih;     
- *Materijal dostupan*: označava da su svi materijali dostupni u potrebnim količinama;     
- *Materijal nije potreban*: označava da nije potreban nijedan materijal;     

Također se prikazuje i status napretka radnih faza koje prethode analiziranoj fazi:    
- *Prethodna faza nije započeta*: označava da prethodna faza još nije započela;     
- *Prethodna faza započeta*: označava da je prethodna faza započela, ali nije dovršena;     
- *Prethodna faza dovršena*: označava da je prethodna faza završena;     
- *Faza započeta*: označava da je analizirana faza započela.    

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, tipke i polja](/docs/guide/common).