---
title: Upravljanje plafonom
sidebar_position: 5
---

Obrazac se nalazi u meniju **Administracija > Izjave > Plafon > Novi** i omogućava kreiranje *novog* obračuna plafona.

## Kako kreirati obračun plafona

1. Nakon otvaranja novog obrasca (nakon što kliknete na komandu *Novi plafon*), unesite sledeće podatke u zaglavlju:

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

**Opis**: Slobodan opis obračuna koji se unosi. Preporučuje se unos opisa koji sadrži početnu godinu i vrstu obračuna.

**Godina**: Unosi se početna godina obračuna plafona koji se kreira.

:::tip[Napomena]
Tokom upravljanja različitim obračunima moguće je „zatvoriti“ period, na primer na kraju godine, i uneti novi obračun za narednu godinu. Međutim, to nije obavezno. Preporučuje se (radi praktičnosti) da se nastavi sa istim obračunom iz godine u godinu korišćenjem komande *Predloži vrednosti*.

Potreba za unosom novog obračuna javlja se u slučaju promene metode obračuna, na primer sa fiksnog plafona na klizni.
:::

**Vrsta početka plafona**: određuje da li je u pitanju novi plafon ili proširenje postojećeg kliznog plafona.

**Vrsta plafona**: bira se da li je plafon **Solarni (fiksni)** ili **Klizni** (dva zakonom predviđena načina upravljanja plafonom).

**Datum početka plafona**: potrebno je uneti mesec i godinu početka plafona. Ako je u pitanju proširenje, potrebno je uneti i **mesec**, **godinu** i **iznos** poslednjeg obračunatog perioda (u odeljku **Svojstva plafona**).

**Kontrolna vrednost**: može se postaviti granična vrednost kako bi se korisnik upozorio da se približava potpunom iskorišćenju plafona. Na primer, ako je plafon 100.000 evra, a prag upozorenja postavljen na 10.000, sistem će upozoriti korisnika kada se pređe iznos od 90.000 evra, jer ostaje još samo 10.000 evra raspoloživog plafona.

**Podrazumevano**: ovaj flag označava koji je obračun „trenutni“, naročito u slučaju kada postoji više sačuvanih obračuna.

:::tip[Pažnja]
Ako postoji obračun plafona sa aktivnim ovim flagom, prilikom kreiranja elektronskog zapisa za slanje Poreskoj upravi koji se odnosi na [**Izjavu o nameri**](/docs/finance-area/declarations/declarations/intent-declaration), odgovarajuće polje će biti automatski popunjeno.
:::

2. Učitavanje istorijskih podataka za korišćenje: u detaljnoj mreži potrebno je uneti podatke za prethodnih dvanaest meseci u odnosu na početni datum obračuna.

:::tip[Pažnja]
U slučaju **kliznog** plafona, podaci se moraju unositi **mesec po mesec**, jer se svakog meseca iz obračuna izbacuje dvanaesti mesec koji izlazi iz perioda, a dodaju se novi podaci za tekući mesec.

U slučaju **solarnog plafona**, može se uneti 11 meseci sa **nultim vrednostima**, dok se ukupan iznos prometa koji ulazi u plafon unosi samo za mesec **decembar** završne godine.

Program će proveriti potpunost podataka i sačuvati plafon kako bi bio spreman za korišćenje.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Svakog meseca potrebno je otvoriti obrazac za upravljanje plafonom kako bi se podaci ažurirali pritiskom na dugme **Predloži vrednosti** (nalazi se na traci menija).

**Za poništavanje obračuna određenog meseca potrebno je obrisati periode unazad – počevši od poslednjeg (najnovijeg) meseca pa do željenog.**

Raspoloživa vrednost na početku meseca prikazuje se u odgovarajućoj koloni.

### Traka menija

|  |  |
| --- | --- |
| **Novi plafon** | Postavlja kursor na novi red za unos podataka. |
| **Obriši plafon** | Briše označeni red obračuna. Nije moguće obrisati međupodatke, već samo poslednji uneti zapis. |
| **Predloži vrednosti** | Izvršava obračun za novi mesec i predlaže vrednosti u mreži. |