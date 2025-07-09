---
title: Izloženost kupaca 
sidebar_position: 2
---

Obrazac se nalazi u Riznica > Rizik kupca > Procedure> Izloženost kupaca

Obrazac "Izloženost kupaca" omogućuje pregled cjelokupne situacije rizika prema različitim klijentima, s mogućnošću dobivanja podataka po agentu, zemlji i grupiranju po grupama društava.  

## Kako provjeriti izloženost kupaca 

1. Ako je potrebno, proširite odjeljak filtera kako biste unijeli raspon referentnih datuma za provjeru i željeni kriterij grupiranja (po državi, po agentu ili po kupcu).

2. Premere il tasto **Traži**: kupci prikazani u ovom obrascu su oni za koje je u matičnim podacima označen parametar *Izloženost kupaca*.

:::note[Napomena]
Početni odjeljak *parametara rizika kupca* prikazuje iste zadane parametre izračuna postavljene za modul, s dodatnim rasponom datuma knjiženja koji se koristi za provjeru uplata (za detalje pogledajte sljedeći dokument).
:::

:::note[Dostupni dodatni filteri]
Moguće je filtrirati prema odgovornoj osobi (zaposleniku koji je povezan s matičnim podacima kupca, prvi tab *Administracija *), filtrirati kupce na međunarodna *tržišta* ili *Hrvatsku*, prikazati podatke grupirane po *grupi društava* (prikazat će se samo jedan ukupni iznos za podračun unesen u polje *grupa društava* unutar taba *administracija* matičnih podataka kupca, umjesto pojedinačnih podračuna kupaca) te konačno grupirati (i filtrirati) podatke po agentu ili državi.

Predviđena je i mogućnost sortiranja podataka po šifri računa/podračuna ili po opisu (nazivu tvrtke) kupca.
:::

### Dati prikazani u mreži  

Bit će prikazani u crvenoj boji redovi s odstupanjem.

**Potraživanje**: Ovdje se prikazuje iznos neplaćenih stavki koje nisu knjižene, ili (ako je označena zastavica u zaglavlju) i one koje su već knjižene;

**Promet zadnjih 12 mjeseci**: To je ukupni iznos prometa (iz prodajnog odjela, fakture za prodaju) u posljednjih 12 mjeseci do referentnog datuma;

**Varijanca dani**: Označava broj dana odstupanja između prosječnog roka dospjelog i prosječnog dana plaćanja, prema izračunu napravljenom u obrascu "Kontrola doznake" koji se poziva za detalje. Posebnost je što se koristi ponderirani prosjek temeljen na iznosu stavki. Zapravo, podatak je izražen u broju dana dugovanja (kao u izvatku s bankovnog računa);

**Prosjek dana dospijeća**: Označava prosječan broj dana odstupanja od datuma dospjelosti u odnosu na datum dokumenta; uzima se u obzir samo neplaćeni iznos = Zbroj (preostali iznos stavke * broj dana zakašnjenja od datuma dospjelosti) / zbroj preostalih stavki. Izračunava prosječnu vrijednost kašnjenja;

**Fakturirani iznos**: To je ukupni iznos prometa (iz prodajnog odjela, fakture za prodaju) od početka godine;

**Prosječni dani naplate**: Odgovara pokazatelju poznatom kao DSO (Days of Sales Outstanding), odnosno broju dana rotacije potraživanja. Formula za izračun glasi: 365 * (Otvorene stavke potraživanja – otvorene stavke obveza + dospjeli efekti + nepodmirena potraživanja + računi koji još nisu proknjiženi) / Promet zadnjih 12 mjeseci. Ako je promet u zadnjih 12 mjeseci jednak 0, tada će i DSO biti 0;

**Kredit **i** Dodijeljeni kredit**: Iznos odobrenog kredita i osigurani kredit;

**Stanje glavne knjige**: Prikazuje ukupne iznose na naplatu izračunate od stavki ili iz bilance;

**Plaćanja iz privremenih zapisa**:  Iznosi plaćanja koji su povezani s privremenim evidencijama;

**Računi koji ističu**: Iznosi računa koji su u datumu dospjelosti;

**Za knjiženje**: To su iznosi faktura koje su ispisane, ali još nisu knjižene;

**Za fakturiranje**: To su iznosi otpremnica koje su ispisne, ali još nisu fakturirane;

**Ukupna izloženost**: zbroj otvorenih narudžbi + otpremnica koje treba fakturirati + računa koji još nisu proknjiženi + saldo otvorenih stavki / računa + dospjelih efekata + nepodmirenih (neproknjiženih) insoluta;

**Istekao**: Iznos otvorenih stavki koje su već prošle datum dospjelosti;

**Kašnjenja iz privremenih zapisa**: Kao prethodno, ali povezano s privremenim evidencijama;

**Narudžbe**:  Iznosi narudžbi koje su ispisane, potvrđene, ali još nisu realizirane.

Iz obrasca "Izloženost kupaca" moguće je izvršiti ispis prikazanih podataka, ili prijeći na obrazac "Kontrola doznake" za odabranu klijentovu stavku, pomoću odgovarajućeg gumba za upravljanje.  



**Specifični gumbi**

**Izračunaj** Tipka za izračunavanje rizika klijenta prema označenim filtrima i postavkama.

**Kontrola doznake** Pokreće postupak za otvaranje obrasca kontrole uplata.






