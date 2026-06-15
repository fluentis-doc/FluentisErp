---
title: Kontrola doznaka
sidebar_position: 1
---

Obrazac se nalazi na putanji **Blagajna > Rizik kupaca > Procedure > Kontrola doznaka**.

Ovaj obrazac prikazuje detaljan pregled evidentiranih uplata (priliva) povezanih sa kupcem, u okviru vremenskog perioda i prema filterima unetim u zaglavlje obrasca.

## Kako proveriti stanje uplata kupca

1. Po potrebi proširite sekciju filtera i obavezno unesite konto kupca čije uplate želite da proverite.
2. Koristite ostale filtere za pretragu relevantnih evidencija uplata.
3. Kliknite na dugme **Pretraži** i pregledajte rezultate u centralnoj tabeli, dok se prosečne vrednosti za celokupno stanje kupca prikazuju u donjem delu obrasca.

## Kako čitati i tumačiti rezultate

- Evidencije uplata za izabranog kupca, u okviru definisanog vremenskog perioda, prikazuju se po datumu od najstarije ka najnovijoj. U samom obrascu prikazane su obrnutim redosledom, od najnovije ka najstarijoj, a prikazuje se i **datum dospeća** otvorene stavke koja je naplaćena.

- Obračun je **skalarnog tipa**, što znači da se redovi međusobno porede kako bi se izračunale razlike u danima od prvog reda prema narednim redovima. Izračunavaju se takozvani **Brojevi**, odnosno iznos pomnožen brojem dana (na isti način kao kod skalarnog obračuna izvoda koje banke dostavljaju za tekuće račune).

- U obračun se uključuje i **valuta banke**, odnosno na knjiženju naplate mogu biti dodati takozvani bankarski valutni dani, tj. vremenski razmak između dana kada je kupac naložio uplatu i dana kada su sredstva stvarno primljena. Ovi valutni dani prikazuju se na knjiženju ako je aktivirana opcija *Dani banke* u [Tipu temeljnice](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), a mogu biti automatski predloženi preko [šifarnika banke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry) (kartica *Dani banke*) ili ručno uneti prilikom knjiženja.

Ako valutni datum nije unet, sistem podrazumevano koristi datum knjiženja naplate, pa je broj dodatnih **Valutnih dana** jednak nuli.

Tada će polje **Valuta naplate** biti jednako datumu knjiženja, dok će polja **Valutni dani** i **Valutni brojevi** imati vrednost nula.

- Obračun uključuje i **Dane dospeća**, koji predstavljaju razliku između prvog reda (gde je vrednost uvek nula) i narednih redova. Na primer, ako je prvo dospeće bilo 9. februara, a naredno 20. februara, broj dana dospeća za drugi red iznosi 11.

- **Valutni brojevi dospeća** dobijaju se množenjem broja dana dospeća sa iznosom naplate.

<details>

<summary>**Ostali podaci u detaljnoj tabeli**: Kliknite za prikaz!</summary>

- **Datum / Broj knjiženja**: preuzeto iz zaglavlja knjiženja naplate kupca
- **Opis osnova**: knjigovodstveni razlog korišćen u knjiženju naplate
- **Vrsta dokumenta**: preuzeta iz otvorenog dokumenta koji je naplaćen, najčešće predstavlja vrstu fakture
- **Broj dokumenta**: broj fakture koja je otvorila naplaćenu stavku
- **Datum dokumenta**: datum fakture koja je otvorila naplaćenu stavku
- **Valuta**: valuta naplaćenog dokumenta
- **Originalni iznos u valuti**: iznos originalne stavke ako je valuta različita od valute kompanije
- **Originalni iznos u valuti kompanije**: iznos stavke izražen u valuti kompanije (najčešće EUR)
- **Preostali iznos u valuti / valuti kompanije**: preostali iznos stavke ako je delimično naplaćena
- **Iznos naplate u valuti**: vrednost izvršene naplate vezane za naplaćenu stavku

</details>

### U donjem delu obrasca vrši se konačan obračun <u>prosečnih vrednosti</u>

Izračunate prosečne vrednosti su:

- **Prosečan datum valute naplate**: dobija se sabiranjem svih iznosa uplata i svih *valutnih brojeva*, a zatim deljenjem zbira valutnih brojeva sa zbirnim iznosom uplata (Ukupni valutni brojevi / Ukupni iznos uplata). Dobijeni prosečan broj valutnih dana dodaje se najstarijem datumu valute naplate.
- **Prosečan datum dospeća**: dobija se sabiranjem svih iznosa uplata i svih *brojeva dospeća*, a zatim deljenjem zbira brojeva dospeća sa zbirnim iznosom uplata (Ukupni brojevi dospeća / Ukupni iznos uplata). Dobijeni prosečan broj dana dospeća dodaje se najstarijem datumu dospeća.

:::note Napomena
Kod efekata, datum valute postavlja se jednako datumu dospeća, nezavisno od datuma knjiženja efekta.
:::

<details>

<summary>**Praktičan primer izračuna proseka**: Kliknite za prikaz!</summary>

Odnos između ukupnog iznosa i zbira dana × iznos daje prosečan broj dana koji se dodaje na prvi datum kako bi se dobio prosečan datum.

</details>

- **Odstupanje** predstavlja razliku između prosečnog datuma dospeća i prosečnog datuma valute naplate, odnosno prosečno kašnjenje u naplati između dospeća i stvarnog prijema sredstava. Ovaj broj dana može se sačuvati pomoću dugmeta **Ažuriraj broj dana kašnjenja** u kartici kupca, u polju *Prosečan broj dana kašnjenja*, koje se koristi u simulacijama novčanog toka za određivanje predviđenog datuma finansijskog toka.

<details>

<summary>**Ostala polja za obračun u sekciji sažetka**: Kliknite za prikaz!</summary>

- **Ukupan originalni iznos u valuti**: zbir iznosa naplaćenih stavki u originalnoj valuti
- **Ukupan originalni iznos u EUR**: protivvrednost prethodnog polja izražena u evrima
- **Ukupan preostali iznos u valuti**: zbir preostalih vrednosti naplaćenih stavki
- **Ukupan preostali iznos u EUR**: protivvrednost prethodnog polja izražena u evrima
- **Ukupan iznos naplate u valuti**: zbir svih iznosa naplate u valuti
- **Ukupan iznos naplate u EUR**: protivvrednost prethodnog polja izražena u evrima
- **Ukupni valutni brojevi**: zbir polja Valutni brojevi iz svih redova tabele
- **Ukupni brojevi dospeća**: zbir polja Brojevi dospeća iz svih redova tabele

</details>

Obrazac omogućava štampanje detalja obračuna.