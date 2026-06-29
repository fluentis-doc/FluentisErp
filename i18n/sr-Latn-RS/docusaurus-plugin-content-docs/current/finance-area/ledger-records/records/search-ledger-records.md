---
title: Pretraga računovodstvenih zapisa
sidebar_position: 7
---

Ovaj obrazac omogućava pretragu prethodno unetih računovodstvenih zapisa, kao i njihovu izmenu ili pregled po potrebi. Za otvaranje željenog zapisa dovoljno je odabrati odgovarajući red i dvoklikom ga otvoriti.

## Funkcije na traci sa alatkama

| Funkcija | Značenje |
| --- | --- |
| **Traži** | Pokreće pretragu računovodstvenih zapisa prema postavljenim kriterijumima filtriranja. |
| **Novi** | Otvara obrazac za unos novog računovodstvenog zapisa. |
| **Izmeni** | Otvara izabrani računovodstveni zapis u režimu izmene. |
| **Prikaži** | Otvara izabrani računovodstveni zapis samo za pregled. |
| **Otkaži** | Briše izabrani računovodstveni zapis. |
| **Izvorni dokument** | Otvara izvorni dokument iz kojeg je nastao računovodstveni zapis. |
| **Dupliraj** | Kreira kopiju postojećeg računovodstvenog zapisa radi bržeg unosa sličnog knjiženja. |

## Filteri za pretragu

Najvažniji kriterijumi za pretragu računovodstvenih zapisa su:

**Tip temeljnice**: padajuća lista omogućava izbor jedne ili više vrsta temeljnica. Višestruki izbor moguć je držanjem tastera **Ctrl**.

**Od / Do datuma knjiženja** i **Od / Do datuma obračuna**: predstavljaju referentne datume računovodstvenog zapisa.

:::important Napomena
Filteri se primenjuju logikom **AND**, što znači da svi zadati uslovi moraju biti istovremeno ispunjeni.

Ako datum knjiženja i datum obračuna nisu isti, a zapis nije pronađen, preporučuje se privremeno uklanjanje jednog od ova dva filtera.
:::

**Konto**: podkonto kupca ili dobavljača unet u zaglavlju računovodstvenog zapisa.

**Vrsta konta**: omogućava filtriranje prema jednoj ili više vrsta konta (troškovi, prihodi, imovina, obaveze, kupci, dobavljači, banke, agenti i dr.). Višestruki izbor moguć je držanjem tastera **Ctrl**. U dodatnim opcijama moguće je isključiti konta koja pripadaju šifarnicima.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image01.png)

## Filteri za elektronske račune

U delu filtera nalazi se dodatni proširivi odeljak (**expander**) namenjen filtriranju dokumenata prema statusima elektronskog računa, odnosno dokumenata koji komuniciraju sa Sistemom razmene.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image02.png)

Na traci sa alatkama, u delu namenjenom elektronskom izdavanju računa, dostupne su sledeće funkcije:

- **Registar dokumenata SDI** – prikazuje sve aktivnosti izvršene nad izabranim dokumentom.
- **Štampaj** – štampa XML dokument.
- **Preuzmi prilog** – preuzima XML datoteku.
- **Preuzmi sadržaj registra** – preuzima sadržaj registra u XML formatu.

## Pregled rezultata

Pregled rezultata prikazuje informacije o računovodstvenim zapisima, kao i za elektronske račune status njihove razmene sa Centralnom platformom.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image06.png)

Najvažnije kolone su:

- **Status računa** – prikazuje trenutno stanje dokumenta, uključujući interno stanje u Fluentisu, stanje u Fluentis Business Hub-u i status koji vraća Centralna platforma.

- **Naziv datoteke** – naziv XML datoteke generisane kada dokument pređe u status **Generisana**. Ta datoteka, u izvornom ili digitalno potpisanom obliku, predstavlja dokument koji se šalje Centralnoj platformi.

- **ID** – jedinstveni identifikator dokumenta koji se dodeljuje prilikom njegovog prijema.

- **Datum prijema dokumenta** – datum kada je Sistem razmene primio dokument. Ovaj podatak preuzima se iz potvrde o prijemu koju izdaje Centralna platforma pre sprovođenja formalnih provera XML datoteke.

- **Datum zatvaranja** – datum završetka životnog ciklusa elektronskog računa (na primer status **Dostavljen**).

- **Datum poslednjeg događaja** – datum poslednje promene statusa dokumenta, bilo ručne ili automatske.