---
title: Izloženost kupaca
sidebar_position: 2
---

Obrazac se nalazi na putanji **Riznica > Rizik kupaca > Procedure > Izloženost kupaca**.
Omogućuje pregled ukupne izloženosti riziku prema kupcima, uz mogućnost analize po agentu, državi ili grupaciji povezanih društava.

## Kako provjeriti izloženost kupaca

1. Po potrebi proširite odjeljak filtera te unesite referentno razdoblje i željeni kriterij grupiranja (**po državi**, **po agentu** ili **po kupcu**).
2. Kliknite **Izračunaj**. U prikazu će biti obuhvaćeni samo kupci kod kojih je u matičnim podacima aktivirana opcija **Izloženost kupaca**.

:::note Napomena
Početni odjeljak **Parametri rizika kupaca** prikazuje zadane parametre iz postavki modula, uz dodatni raspon datuma knjiženja koji se koristi za kontrolu uplata. Više informacija dostupno je u dokumentaciji postupka **Kontrola uplata**.
:::

:::note Dodatni filteri
Moguće je filtrirati podatke prema:
- odgovornoj osobi povezanoj s kupcem,
- domaćim ili inozemnim kupcima,
- grupaciji povezanih društava,
- agentu,
- državi.

Podaci se mogu sortirati prema kontu/podkontu ili nazivu kupca.
:::

## Podaci prikazani u tablici

Redci s odstupanjima prikazuju se crvenom bojom.

- **Nenaplaćeni vrijednosni papiri**: iznos nenaplaćenih vrijednosnih papira koji nisu knjiženi ili, ako je aktivirana odgovarajuća opcija, i onih koji su već knjiženi.
- **Promet posljednjih 12 mjeseci**: promet iz prodajnih računa ostvaren tijekom posljednjih 12 mjeseci.
- **Odstupanje dana**: broj dana odstupanja između prosječnog datuma dospijeća i prosječnog datuma naplate.
- **Odstupanje dana dospijeća**: prosječno kašnjenje otvorenih dospjelih stavki.
- **Promet**: promet ostvaren od početka tekuće godine.
- **Prosječni dani naplate (DSO)**: pokazatelj vremena potrebnog za naplatu potraživanja. Ako promet u posljednjih 12 mjeseci iznosi 0, tada je i DSO jednak 0.
- **Kreditni limit** i **Osigurani kreditni limit**: definirani iznosi kreditnog limita.
- **Saldo otvorenih stavki**: ukupna dugovna i potražna salda otvorenih stavki ili knjigovodstvenog salda.
- **Plaćanja iz privremenih knjiženja**: iznosi plaćanja povezanih s privremenim knjiženjima.
- **Vrijednosni papiri u dospijeću**: iznos vrijednosnih papira koji još nisu dospjeli na naplatu.
- **Za knjiženje**: vrijednost ispisanih, ali još ne knjiženih računa.
- **Za fakturiranje**: vrijednost ispisanih, ali još ne fakturiranih otpremnica.
- **Ukupna izloženost**: zbroj otvorenih narudžbi, ne fakturiranih otpremnica, ne knjiženih računa, salda otvorenih stavki, vrijednosnih papira u dospijeću i nenaplaćenih vrijednosnih papira.
- **Dospjelo**: iznos otvorenih stavki kojima je istekao rok dospijeća.
- **Dospjelo iz privremenih knjiženja**: dospjeli iznosi nastali iz privremenih knjiženja.
- **Narudžbe**: vrijednost potvrđenih i ispisanih, ali još neizvršenih narudžbi.

Iz ovog obrasca moguće je ispisati prikazane podatke ili otvoriti postupak **Kontrola uplata** za odabranog kupca.

## Posebne funkcije

- **Izračunaj**: izračunava izloženost kupaca prema zadanim filterima i parametrima.
- **Kontrola doznake**: otvara obrazac za kontrolu uplata za odabranog kupca.