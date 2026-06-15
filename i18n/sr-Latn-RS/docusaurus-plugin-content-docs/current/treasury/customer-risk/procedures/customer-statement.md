---
title: Izloženost kupaca
sidebar_position: 2
---

Obrazac se nalazi na putanji **Blagajna > Rizik kupaca > Procedure > Izloženost kupaca**.

Omogućava pregled ukupne izloženosti riziku po kupcima, uz mogućnost analize prema agentu, državi ili grupaciji povezanih društava.

## Kako proveriti izloženost kupaca

1. Po potrebi proširite odeljak filtera i unesite referentni period i željeni kriterijum grupisanja (**po državi**, **po agentu** ili **po kupcu**).
2. Kliknite na **Izračunaj**. U prikazu će biti obuhvaćeni samo kupci kod kojih je u matičnim podacima aktivirana opcija **Izloženost kupaca**.

:::note Napomena
Početni odeljak **Parametri rizika kupaca** prikazuje podrazumevane parametre iz podešavanja modula, zajedno sa dodatnim rasponom datuma knjiženja koji se koristi za kontrolu uplata. Više informacija dostupno je u dokumentaciji procedure **Kontrola uplata**.
:::

:::note Dodatni filteri
Podatke je moguće filtrirati prema:

- odgovornom licu povezanom sa kupcem,
- domaćim ili inostranim kupcima,
- grupaciji povezanih društava,
- agentu,
- državi.

Podaci se mogu sortirati prema kontu/podkontu ili nazivu kupca.
:::

## Podaci prikazani u tabeli

Redovi sa odstupanjima prikazuju se crvenom bojom.

- **Nenaplaćeni vrednosni papiri**: iznos nenaplaćenih vrednosnih papira koji nisu proknjiženi ili, ukoliko je aktivirana odgovarajuća opcija, i onih koji su već proknjiženi.
- **Promet u poslednjih 12 meseci**: promet ostvaren iz izlaznih faktura tokom poslednjih 12 meseci.
- **Odstupanje u danima**: broj dana odstupanja između prosečnog datuma dospeća i prosečnog datuma naplate.
- **Odstupanje dana dospeća**: prosečno kašnjenje otvorenih dospelih stavki.
- **Promet**: promet ostvaren od početka tekuće godine.
- **Prosečni dani naplate (DSO)**: pokazatelj vremena potrebnog za naplatu potraživanja. Ako promet u poslednjih 12 meseci iznosi 0, tada je i DSO jednak 0.
- **Kreditni limit** i **Osigurani kreditni limit**: definisani iznosi kreditnog limita.
- **Saldo otvorenih stavki**: ukupna dugovna i potražna salda otvorenih stavki ili knjigovodstvenog salda.
- **Plaćanja iz privremenih knjiženja**: iznosi plaćanja povezanih sa privremenim knjiženjima.
- **Vrednosni papiri u dospeću**: iznos vrednosnih papira koji još nisu dospeli na naplatu.
- **Za knjiženje**: vrednost odštampanih, ali još neproknjiženih faktura.
- **Za fakturisanje**: vrednost odštampanih, ali još nefakturisanih otpremnica.
- **Ukupna izloženost**: zbir otvorenih porudžbina, nefakturisanih otpremnica, neproknjiženih faktura, salda otvorenih stavki, vrednosnih papira u dospeću i nenaplaćenih vrednosnih papira.
- **Dospelo**: iznos otvorenih stavki kojima je istekao rok dospeća.
- **Dospelo iz privremenih knjiženja**: dospeli iznosi nastali iz privremenih knjiženja.
- **Porudžbine**: vrednost potvrđenih i odštampanih, ali još neizvršenih porudžbina.

Iz ovog obrasca moguće je odštampati prikazane podatke ili otvoriti proceduru **Kontrola uplata** za izabranog kupca.

## Posebne funkcije

- **Izračunaj**: izračunava izloženost kupaca prema zadatim filterima i parametrima.
- **Kontrola doznaka**: otvara obrazac za kontrolu uplata za izabranog kupca.