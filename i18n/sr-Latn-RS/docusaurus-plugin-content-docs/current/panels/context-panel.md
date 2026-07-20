---
title: Context Panel
sidebar_position: 4
---

Paneli konteksta, odnosno **Context Panel**, omogućavaju trenutni prikaz sažetih informacija o određenom poslovnom objektu u sistemu Fluentis.
Kreiranje kontekstualnog panela (*Context Panel*) podrazumeva nekoliko koraka parametrizacije:

1. eventualno kreiranje kontrolne table (*Dashboard*) ako se Context Panel zasniva na kontrolnoj tabli
2. kreiranje **Context Panel-a** putem odgovarajuće forme
3. parametrizaciju **Context Panel-a** i definisanje povezanih linkova

Za otvaranje forme povezane sa **Context Panel-om**, otvorite **ARM > Platform > Context Panel**. Forma za upravljanje kontekstualnim panelima sastoji se od sledećih delova:

### Ribbon meni

Ribbon meni sadrži komande za rad sa formom:
- **Traži**: pretraga već definisanih Context Panel-a u Fluentisu
- **Novo**: kreiranje novog Context Panel-a
- **Izmeni**: uređivanje postojećeg Context Panel-a
- **Prikaži**: prikaz postojećeg Context Panel-a u režimu samo za čitanje
- **Obriši**: uklanjanje postojećih zapisa Context Panel-a iz Fluentisa

### Glavni deo

Glavni deo sastoji se od tabele sa sledećim poljima:
- **Business Object**: obavezno polje – označava objekat na kojem se zasniva kontekstualni panel
- **Lokalizovani kod**: opciono polje – označava lokalizovani opis
- **Naziv**: naziv kontekstualnog panela
- **Forma**: opciono polje – označava formu na kojoj se zasniva kontekstualni panel
- **Kontrolna tabla (Dashboard)**: opciono polje – označava kontrolnu tablu na kojoj se zasniva kontekstualni panel
- **Izveštaj**: opciono polje – označava izveštaj na kojem se zasniva kontekstualni panel

## Detalji

Forma detalja sastoji se od tri dela.

### Ribbon meni

Ribbon meni sadrži samo dugme **Sačuvaj**, koje se koristi za čuvanje konfiguracije.

### Zaglavlje
Kartica zaglavlja sastoji se od sledećih polja:
- **Business Object**: obavezno – poslovni objekat na kojem se zasniva kontekstualni panel
- **Lokalizovani kod**: opciono – lokalizovani opis
- **Naziv**: obavezno – naziv/opis
- **Prava**
- **Tip**
- **Kontrolna tabla (Dashboard)**
- **Definicija**
- **Prikaži u kontekstualnom meniju**
- **Prikaži u kontekstualnom panelu**
- **Slika**
- **ARM forma konteksta**
- **Redosled**
- **Podrazumevana definicija povezivanja**

### Kartica Povezivanja

***Dokumentacija u pripremi.***

# Primer primene

Želimo da kreiramo **kontekstualni panel** koji prikazuje **procenat amortizacije** za odabrano osnovno sredstvo.
**Procenat amortizacije** izračunava se kao procentualni odnos između amortizacionog fonda i istorijskog troška osnovnog sredstva.

Da bismo postigli ovaj rezultat potrebno je:
1. Kreirati SQL upit pomoću **Fluentis Query Studio-a** koji će preuzimati podatke o osnovnim sredstvima iz Fluentis MSSQL baze.
2. Kreirati izvor podataka (*Data Source*) zasnovan na navedenom upitu.
3. Definisati parametar u izvoru podataka koji će služiti kao **WHERE** filter upita u zavisnosti od izabranog osnovnog sredstva.
4. Kreirati kontrolnu tablu (*Dashboard*) zasnovanu na izvoru podataka iz prethodnog koraka.
5. Kreirati parametrizaciju za **Context Panel** u ARM-u.
6. Otvoriti formu osnovnih sredstava (*Fixed Assets*).

---

### 1. Kreiranje SQL upita
Za korišćenje **Fluentis Query Studio-a** pogledajte odgovarajuću dokumentaciju.

```sql
SELECT *
FROM Fluentis.FI_FixedAssets
WHERE FIFA_Id = @ID
```

gde je `@ID` parametar koji se naknadno definiše na nivou izvora podataka (*Data Source*).

### 2. Kreiranje Data Source-a
Kreirajte izvor podataka zasnovan na upitu iz prethodnog koraka. Za detalje o kreiranju izvora podataka pogledajte odgovarajuću dokumentaciju.
Na kartici **Visible Properties** prevucite svojstva koja želite da budu dostupna, na primer: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount**

### 3. Definisanje parametra
Na kartici **Parameters** definišite parametar koji će prosleđivati identifikator odabranog osnovnog sredstva SQL upitu.

### 4. Kreiranje kontrolne table
U Fluentisu kreirajte **Dashboard** zasnovan na prethodno kreiranom izvoru podataka.
Za sve detalje vezane za dashboarde pogledajte odgovarajuću dokumentaciju.

### 5. Kreiranje Context Panel-a
U ARM-u kreirajte parametrizaciju za **Context Panel** i povežite ga sa dashboardom kreiranim u prethodnom koraku.

### 6. Korišćenje Context Panel-a
Otvorite formu osnovnih sredstava i izaberite željeno osnovno sredstvo.
U kontekstualnom panelu biće prikazan procenat amortizacije za izabrano sredstvo.