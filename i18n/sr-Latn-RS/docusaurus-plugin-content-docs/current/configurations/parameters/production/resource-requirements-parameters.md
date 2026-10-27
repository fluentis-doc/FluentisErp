---
title: Parametri potreba za materijalom
sidebar_position: 7
tags: [Planiranje potreba za materijalom]
---

U ovom prozoru podešavaju se parametri koji se odnose na neke od osnovnih postavki područja Proizvodnja.

**Prvi dan nedelje u kalendaru proizvodnih kapaciteta**: moguće je odrediti koji će se dan smatrati prvim danom nedelje u [Kalendaru proizvodnih kapaciteta](/docs/configurations/tables/production/factory-calendar), odnosno u kalendaru radnih centara. Uobičajeno se podešava ponedeljak.

**Poslednji uneti planirani nalog za tekuću godinu**: predstavlja poslednji redni broj korišćen za planirane naloge u tekućoj godini.

**Boje vrsta dokumenata**: omogućava podešavanje boje pozadine i teksta za različite vrste naloga: nabavku, proizvodnju ili kooperaciju, koji kasne i/ili kojima je istekao rok.

## Parametri za puštanje planiranih naloga

U ovom odeljku korisnik može da podesi vrstu zahteva za nabavku i vrstu naloga za kooperaciju koji će se automatski generisati prilikom puštanja planiranih naloga za nabavku, odnosno kooperaciju. Nalog za kooperaciju može biti zatvoren, što znači da više ne može da se menja, ili otvoren, što znači da može naknadno da se menja.

**Obavezna kontrola kooperanta za spoljne faze**: ako je opcija aktivirana, a kooperant nije naveden za spoljnu fazu, taj nedostatak biće označen bojom teksta reda naloga navedenom u nastavku.

**Pojednostavljeno upravljanje proizvodnjom**: ova opcija je zastarela i koristi se samo u starijim verzijama.

**Održavanje veze između naloga unutar radnog naloga**: ako je opcija aktivirana, pomoću sledećih potvrdnih okvira moguće je odrediti da se pri ručnoj promeni datuma planiranog naloga odgovarajuće promene i datumi neposredno povezanih planiranih naloga.

**Broj dana za izračunavanje raspoloživosti**: određuje koliko daleko u budućnost treba obavljati izračunavanje raspoloživosti. Nalozi i potrebe čiji datumi prelaze definisani period neće se uzimati u obzir.

**Datum rezervacije materijala u fazi izdavanja materijala**: ako je opcija aktivirana, datum korišćenja materijala naveden u planiranim nalozima odgovaraće najkasnijem datumu početka među svim fazama, odnosno datumu početka poslednje faze. Ako opcija nije aktivirana, datum korišćenja materijala u planiranim nalozima odgovaraće datumu početka naloga, odnosno datumu početka prve faze.

**Broj dana za raniju rezervaciju materijala**: uneta vrednost omogućava da se raspoloživost materijala pomeri unapred za navedeni broj dana u odnosu na početak obrade, kako bi logistika mogla blagovremeno da dopremi materijal u proizvodnju. Ovaj parametar uzima se u obzir u sledećim postupcima:

- Sva planiranja „što ranije”, „što kasnije” i „sa ograničenim kapacitetom”.
- MRP.
- Dopuna podataka naloga, za planirane naloge i naloge za proizvodnju.
- Ponovni izračun datuma početka, za planirane naloge i naloge za proizvodnju.
- Svi postupci CRP-a (*Gantt*, *Kapacitet radnih centara* i *Redosled faza*) koji menjaju datum početka ili završetka faze naloga.

**Broj dana istorije MRP-a koji se zadržavaju**: omogućava određivanje broja dana tokom kojih će se rezultati MRP obrada čuvati u istoriji. Ako je rezultat obrade stariji od broja dana navedenog u ovom polju, biće uklonjen iz istorije prilikom sledeće MRP obrade. Ako polje ostane prazno, nijedna obrada neće biti obrisana iz istorije.

## Skladišta za planiranje naloga

Mreža prikazuje spisak skladišta na kojima se mora proveravati raspoloživost. Taj spisak podešava se u obrascu *Izračunavanje raspoloživosti*, koji se nalazi među pomoćnim funkcijama poslovnog sistema.

## Parametri Gantta

Omogućava unos podrazumevanih parametara za upravljanje obrascem Gantta (*Vrsta Gantt simulacije* i *Vrsta Snapshot simulacije*).

## Parametri izračunavanja izvodljivosti

Omogućava definisanje podešavanja za aktiviranje i prikaz **izvodljivosti** radnih faza.

U trenutnoj verziji proizvoda ova funkcionalnost može se aktivirati samo u postupcima *Redosled faza*. U budućim verzijama biće dostupna i u drugim postupcima.

Moguće je aktivirati kontrolu izvodljivosti:

- **Uzmi u obzir materijale**: omogućava dugme *Detalji izvodljivosti materijala* i polje *Izvodljivost materijala* u mreži aktivnih postupaka unutar okvira **Izračunavanje izvodljivosti primeniti u**.
- **Uzmi u obzir prethodne faze**: omogućava dugme *Detalji izvodljivosti faza* i polje *Izvodljivost faza* u mreži aktivnih postupaka unutar okvira **Izračunavanje izvodljivosti primeniti u**.

## Izračunavanje izvodljivosti primeniti u

Omogućava aktiviranje provere izvodljivosti u pojedinim postupcima:

- Redosled faza
- Kapacitet radnih centara
- Puštanje planiranih naloga
- Lista za preuzimanje materijala
- Filter naloga za proizvodnju

## Boje izračunavanja izvodljivosti

Moguće je podesiti boje kojima se ističu različite informacije o raspoloživosti materijala koji će se koristiti:

- *Materijal nije raspoloživ*: označava da nije raspoloživa nijedna količina materijala, čak ni delimična.
- *Materijal je delimično raspoloživ*: označava da je raspoloživ barem deo količine jednog od materijala, ali nisu raspoložive ukupne potrebne količine svih materijala.
- *Materijal je raspoloživ*: označava da su svi materijali raspoloživi u potrebnim ukupnim količinama.
- *Materijal nije potreban*: označava da nije potreban nijedan materijal.

Boje se mogu podesiti i za status napretka prethodnih radnih faza u odnosu na fazu koja se analizira:

- *Prethodna faza nije započeta*: označava da prethodna faza posmatrane faze još nije započela.
- *Prethodna faza je započeta*: označava da je prethodna faza započela, ali nije završena.
- *Prethodna faza je završena*: označava da je prethodna faza završena.
- *Faza je započeta*: označava da je posmatrana faza započela.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).