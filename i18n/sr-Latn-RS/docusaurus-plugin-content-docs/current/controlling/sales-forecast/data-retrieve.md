---
title: Dohvat podataka
sidebar_position: 3
---

:::important Čemu služi
Obrada za automatsko generisanje podataka o prodaji i, po potrebi, Plana prodaje na osnovu istorijskih podataka iz dokumenata iz oblasti Prodaje, i to posebno iz dokumenata: Narudžbine kupaca, Otpremnice i Prodajni računi.
:::

Pokreće se iz menija Kontroling > Mesečni planovi prodaje.

Upravljanje se sastoji od forme za pretragu prethodno izvršenih preuzimanja podataka i, putem dugmeta **Novo**, kreiranja novih. Takođe uključuje formu **Upravljanje preuzimanjem podataka**, u kojoj je moguće definisati iz kojih tipova prodajnih dokumenata i za koji period će se podaci preuzimati, nakon čega oni postaju početna osnova za izradu Planova prodaje za unapred definisanu Verziju prognoze prodaje.

U nastavku su navedene sve informacije koje se nalaze u formi:

- **Verzija**: obavezan podatak koji služi za čuvanje preuzetih podataka u toj konkretnoj verziji;
- **Razvrstaj po varijanti**: omogućava ili onemogućava uzimanje u obzir detalja po varijanti artikla;
- **Datum poslednjeg snimanja**: podrazumevano se predlaže današnji datum i ažurira se pritiskom na dugme **Preuzimanje podataka** sa datumom obrade;
- **Uzmi u obzir predviđeni datum isporuke**: ako je uključeno, prilikom preuzimanja Narudžbina kupaca mesec obračuna biće određen prema Predviđenom datumu isporuke, a ne prema Datumu spremnosti robe;
- **Generisanje prognoze**: ako je uključeno, **Preuzimanje podataka** će generisati i Prognoze prodaje po artiklu, varijanti i verziji;
- **Prodajni računi**: u prvom pregledu može se definisati iz kojih tipova računa će se preuzimati podaci i za koji period (*Od datuma*, *Do datuma*); odabrani tip računa automatski predlaže da li je reč o računu za povrat ili ne;
- **Otpremnice**: u drugom pregledu može se definisati iz kojih tipova otpremnica će se preuzimati podaci i za koji period (*Od datuma*, *Do datuma*); odabrani tip otpremnice automatski predlaže da li je reč o povratu ili ne;
- **Narudžbine kupaca**: u trećem pregledu može se definisati iz kojih tipova narudžbina će se preuzimati podaci i za koji period (*Od datuma*, *Do datuma*).

Za periode tipova računa i prodajnih otpremnica, prilikom unosa novog tipa dokumenta podrazumevano se predlaže: *Od datuma* = 1. januar tekuće godine, *Do datuma* = današnji datum; dok se za periode tipova narudžbina kupaca predlaže: *Od datuma* = 1. januar tekuće godine, *Do datuma* = 31. decembar tekuće godine. Sve vrednosti operater može izmeniti.

Dostupna su sledeća dugmad:

- **Sačuvaj**: čuva informacije unete u formu za preuzimanje podataka;
- **Unesi novi tip računa**, **Obriši označene tipove računa**, **Unesi novi tip otpremnice/prijema**, **Obriši označene tipove otpremnica/prijema**, **Unesi novi tip naloga**, **Obriši označene tipove naloga**: sva ova dugmad služe za pozicioniranje na red za unos novog tipa dokumenta ili za brisanje označenih tipova dokumenata;
- **Preuzimanje podataka**: ovom obradom sve stavke dokumenata koje odgovaraju odabranim tipovima dokumenata i zadatim periodima (datum računa za račune, datum otpremnice za otpremnice i datum spremnosti robe ili predviđeni datum isporuke za narudžbine) postaju osnova za generisanje prognoza za izabranu verziju.