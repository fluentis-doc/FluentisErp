---
title: Parametri potreba za materijalom
sidebar_position: 7
tags: [Planiranje potreba za materijalom]
---

U ovom se prozoru postavljaju parametri koji se odnose na neke od osnovnih postavki područja Proizvodnja.

**Prvi dan tjedna u kalendaru proizvodnih kapaciteta**: moguće je odrediti koji će se dan smatrati prvim danom tjedna u [Kalendaru proizvodnih kapaciteta](/docs/configurations/tables/production/factory-calendar), odnosno u kalendaru radnih centara. Uobičajeno se postavlja ponedjeljak.

**Posljednji uneseni planirani nalog za tekuću godinu**: predstavlja posljednji redni broj upotrijebljen za planirane naloge u tekućoj godini.

**Boje vrsta dokumenata**: omogućuje postavljanje boje pozadine i teksta za različite vrste naloga: nabavu, proizvodnju ili kooperaciju, koji kasne i/ili kojima je istekao rok.

## Parametri za puštanje planiranih naloga

U ovom odjeljku korisnik može postaviti vrstu zahtjeva za nabavu i vrstu naloga za kooperaciju koji će se automatski generirati prilikom puštanja planiranih naloga za nabavu odnosno kooperaciju. Nalog za kooperaciju može biti zatvoren, što znači da se više ne može mijenjati, ili otvoren, što znači da se može naknadno mijenjati.

**Obvezna kontrola kooperanta za vanjske faze**: ako je opcija aktivirana, a kooperant nije naveden za vanjsku fazu, taj će se nedostatak označiti dolje navedenom **bojom teksta retka naloga**.

**Pojednostavljeno upravljanje proizvodnjom**: ova je opcija zastarjela i upotrebljava se samo u starijim verzijama.

**Održavanje veze između naloga unutar radnog naloga**: ako je opcija aktivirana, uz pomoć sljedećih potvrdnih okvira moguće je odrediti da se pri ručnoj promjeni datuma planiranog naloga odgovarajuće promijene i datumi neposredno povezanih planiranih naloga.

**Broj dana za izračun raspoloživosti**: određuje koliko daleko u budućnost treba provoditi izračun raspoloživosti. Nalozi i potrebe čiji datumi prelaze definirano razdoblje neće se uzimati u obzir.

**Datum rezervacije materijala u fazi izdavanja materijala**: ako je opcija aktivirana, datum korištenja materijala naveden u planiranim nalozima odgovarat će najkasnijem datumu početka među svim fazama, odnosno datumu početka posljednje faze. Ako opcija nije aktivirana, datum korištenja materijala u planiranim nalozima odgovarat će datumu početka naloga, odnosno datumu početka prve faze.

**Broj dana za raniju rezervaciju materijala**: unesena vrijednost omogućuje da se raspoloživost materijala pomakne unaprijed za navedeni broj dana u odnosu na početak obrade, kako bi logistika mogla pravodobno dopremiti materijal u proizvodnju. Ovaj se parametar uzima u obzir u sljedećim postupcima:

- Sva planiranja „što ranije”, „što kasnije” i „uz ograničeni kapacitet”.
- MRP.
- Dopuna podataka naloga, za planirane naloge i naloge za proizvodnju.
- Ponovni izračun datuma početka, za planirane naloge i naloge za proizvodnju.
- Svi postupci CRP-a (*Gantt*, *Kapacitet radnih centara* i *Redoslijed faza*) koji mijenjaju datum početka ili završetka faze naloga.

**Broj dana povijesti MRP-a koji se zadržavaju**: omogućuje određivanje broja dana tijekom kojih će se rezultati MRP obrada čuvati u povijesti. Ako je rezultat obrade stariji od broja dana navedenog u ovom polju, bit će uklonjen iz povijesti prilikom sljedeće MRP obrade. Ako polje ostane prazno, nijedna se obrada neće brisati iz povijesti.

## Skladišta za planiranje naloga

Mreža prikazuje popis skladišta na kojima se mora provjeravati raspoloživost. Taj se popis postavlja u obrascu *Izračun raspoloživosti*, koji se nalazi među pomoćnim funkcijama poslovnog sustava.

## Parametri Gantta

Omogućuje unos zadanih parametara za upravljanje obrascem Gantta (*Vrsta Gantt simulacije* i *Vrsta Snapshot simulacije*).

## Parametri izračuna izvedivosti

Omogućuje definiranje postavki za aktivaciju i prikaz **izvedivosti** radnih faza.

U trenutačnoj verziji proizvoda ova se funkcionalnost može aktivirati samo u postupcima *Redoslijed faza*. U budućim verzijama bit će dostupna i u drugim postupcima.

Moguće je aktivirati kontrolu izvedivosti:

- **Uzmi u obzir materijale**: omogućuje gumb *Detalji izvedivosti materijala* i polje *Izvedivost materijala* u mreži aktivnih postupaka unutar okvira **Izračun izvedivosti primijeniti u**.
- **Uzmi u obzir prethodne faze**: omogućuje gumb *Detalji izvedivosti faza* i polje *Izvedivost faza* u mreži aktivnih postupaka unutar okvira **Izračun izvedivosti primijeniti u**.

## Izračun izvedivosti primijeniti u

Omogućuje aktiviranje provjere izvedivosti u pojedinim postupcima:

- Redoslijed faza
- Kapacitet radnih centara
- Puštanje planiranih naloga
- Lista za preuzimanje materijala
- Filtar naloga za proizvodnju

## Boje izračuna izvedivosti

Moguće je postaviti boje kojima se ističu različite informacije o raspoloživosti materijala koji će se upotrebljavati:

- *Materijal nije raspoloživ*: označava da nije raspoloživa nijedna količina materijala, čak ni djelomična.
- *Materijal je djelomično raspoloživ*: označava da je raspoloživ barem dio količine jednog od materijala, ali nisu raspoložive ukupne potrebne količine svih materijala.
- *Materijal je raspoloživ*: označava da su svi materijali raspoloživi u potrebnim ukupnim količinama.
- *Materijal nije potreban*: označava da nije potreban nijedan materijal.

Boje se mogu postaviti i za status napretka prethodnih radnih faza u odnosu na fazu koja se analizira:

- *Prethodna faza nije započeta*: označava da prethodna faza promatrane faze još nije započela.
- *Prethodna faza je započeta*: označava da je prethodna faza započela, ali nije dovršena.
- *Prethodna faza je dovršena*: označava da je prethodna faza dovršena.
- *Faza je započeta*: označava da je promatrana faza započela.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).