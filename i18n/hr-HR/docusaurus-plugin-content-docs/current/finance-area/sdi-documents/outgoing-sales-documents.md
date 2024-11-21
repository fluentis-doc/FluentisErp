---
title: Izlazni prodajni dokumenti
sidebar_position: 2
---

Obrazac “**Izlazni prodajni dokumenti**“ podijeljen je u dva dijela, zaglavlje koje sadrži polja za filtriranje koja se mogu koristiti za filtriranje dokumenata i mrežu rezultata provedenog pretraživanja:

## Gumbi na traci izbornika:

- **Pretraži**: pokreće pretragu u mreži rezultata prema podacima prisutnim u filtrima zaglavlja
- **Prikaži**: otvara ugrađeni preglednik za prikazivanje xml datoteke prema unaprijed učitanom stilskom listu unutar Fluentis-a kako bi se omogućilo "javno" gledanje
- **Otvorite dokument**: otvara dokument računa povezan s odabranom xml datotekom
- **Preuzmi privitak**: preuzima se lokalno na PC kopija xml datoteke kako bi se upravljalo, na primjer, s uslugama slanja trećih strana
- **Ponovno učitaj datoteku**: aktivan je kada je redak u stanju *Generirana* i omogućuje ponovno učitavanje datoteke iz vanjske (lokalne ili mrežne) mape; korisno za ponovno učitavanje xml-a u kojem je ručno potrebno postaviti određenu oznaku ili neurednu oznaku (bez prolaska kroz korak *potpisana* kao u prošlosti). Fluentis provjerava da li datoteka ima isto ime i da li je xml sintaktički ispravan, ali ne provodi test na Sdi strukturi (dakle, pogrešna oznaka ili oznaka s netočnim vrijednostima neće primiti nikakvu poruku i neće se poslati Sdi). U logu vezanom uz datoteku, (pritiskom na primjer Prikaži) u polju **Informacije** prikazat će se izjavu da je datoteka ručno prepisana i datum.

## Vrijednosti prikazane u mreži su: 

- **Sdl status**: status dokumenta koji se odnosi na njegovo slanje u Sdl putem Fluentis Business Huba

- **Vrsta**: referentna šifra vrste prodajnog dokumenta

- **Datum, Broj, Kupac**: datum, broj dokumenta i registrirani kupac

- **Datum primitka kupca**: datum dostave dokumenta kupcu ili datum "stavljanja na raspolaganje" dokumenta u rezerviranom prostoru kupca. Ovaj zadnji slučaj odnosi se na pošiljke za koje ES ne može točno identificirati klijenta/primatelja

- **SdI naziv datoteke:** naziv datoteke i naziv XML datoteke koja se stvara kada se dokument pomakne u stanje GENERIRANO; u izvornom formatu ili nakon digitalnog potpisa, predstavlja datoteku računa koja se šalje SdI-u.

- **Datum zadnjeg događaja**: odnosi se na zadnju radnju koju je izvršio operater ili posljednju obavijest primljenu od Sdl-a tijekom procesa upravljanja dokumentima

Klikom na ekspander računa (tipka + krajnje lijevo) otvara se detalj prijelaza koji se odnose na stanja dokumenta te se prikazuju pojedinačni prijelazi koji su se dogodili u vođenju dokumenta s pripadajućim datumom izvršenja i naziv fakture bilo koje datoteke generirane promjenom stanja: 

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

Dokumenti predstavljeni u rešetki Registra dokumenata SdI su svi oni koji su kreirani aktivnim tokom upravljanja dokumentima fakture, bez obzira na status; dvostruki klik na retku fakture otvara panel u kojem je moguće pregledati dokumente nastale tijekom upravljanja fakturnom datotekom i povijest prijelaza.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

U mreži Registra dokumenata SdI, odabirom dokumenta fakture ili više dokumenata fakture u istom statusu, moguće je upravljati statusom obrade dokumenta pomoću kombinacije Status na traci izbornika i odabirom novog statusa dokumenta:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)