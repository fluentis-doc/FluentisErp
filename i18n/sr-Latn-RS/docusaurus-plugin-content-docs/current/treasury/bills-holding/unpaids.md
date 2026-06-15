---
title: Potraživanja
sidebar_position: 4
---

Forma za pretragu potraživanja nalazi se na putanji:

**Blagajna > Vrednosni papiri > Potraživanja**

Omogućava korisniku pretragu prethodno unetih potraživanja radi pregleda, izmene ili eventualnog brisanja.

Iz ove forme moguće je i ručno kreirati novo potraživanje pomoću dugmeta **Novo**.

## Dugmad na alatnoj traci

> **Traži**: pokreće pretragu potraživanja prema kriterijumima definisanim u zaglavlju forme.

> **Novo**: otvara formu za unos novog potraživanja.

> **Izmeni**: omogućava izmenu postojećeg potraživanja.

> **Prikaži**: omogućava pregled postojećeg potraživanja bez mogućnosti izmene.

> **Obriši**: briše izabrano potraživanje.

> **Masovno kreiranje nenaplaćenih potraživanja**: pokreće proceduru za istovremeno kreiranje više nenaplaćenih potraživanja.

### Izveštaji

Pokretanjem funkcije **Pregled** ili **Štampa** za označena potraživanja (moguće je označiti više zapisa držanjem tastera `Ctrl`) dostupni su sledeći izveštaji iz modula:

- **Potraživanja**: prikaz instrumenata naplate sa pripadajućim podacima i iznosima, uvećanim za eventualne kamate i troškove.

- **Opomena**: dopis upućen dužniku u kojem su prikazana nenaplaćena potraživanja i zahtev za njihovo izmirenje.

## Filteri za pretragu

- **Vrste vrednosnih papira**: filtriranje prema vrsti dokumenta korišćenoj prilikom kreiranja potraživanja, npr. bankarska doznaka, menica i slično.

- **Dužnik**: filtriranje prema polju **Dužnik** definisanom u dokumentu potraživanja.

- **Od / Do datuma potraživanja / datuma dospeća / datuma izdavanja / broja**: filtriranje prema odgovarajućim podacima dokumenta:
  - datum kreiranja potraživanja,
  - datum dospeća računa koji se ponovo otvara zbog nenaplaćenog potraživanja,
  - datum izdavanja dokumenta koji je postao predmet potraživanja,
  - broj potraživanja.

- **Status potraživanja**: filtriranje prema trenutnom statusu dokumenta. Status se automatski menja tokom obrade (npr. *Potraživanje*, *Naplaćeno*, *Izdata nova zadužnica* i slično).

- **Opcije filtera**: podrazumevano je aktivna opcija **Sva konta**, ali je moguće uključiti različite kombinacije statusa radi proširenja rezultata pretrage (npr. štampano, knjiženo, neštampano i slično).

  Dostupan je i dodatni prošireni deo za filtriranje potraživanja nastalih:
  - iz otvorenih stavki,
  - iz računa,

  zajedno sa pripadajućim datumskim i brojčanim referencama. Ovo olakšava pretragu jer su navedene procedure kreiranja međusobno alternativne.

## Rezultati pretrage

Tabela rezultata prikazuje iste podatke koji se koriste u filterima za pretragu.

Dodatno su prikazana i sledeća polja:

- **Iznos potraživanja** i **Bankarski troškovi** iz zaglavlja potraživanja, koji se ponovo zadužuju kupcu i knjiže.

- **Datum** i **Broj uvoza** povezani sa procedurom **Uvoz nenaplaćenih potraživanja**.

- **Broj računa** koji je generisao dokument iz kojeg je nastalo potraživanje.

- **Banka prezentacije** povezana sa potraživanjem.