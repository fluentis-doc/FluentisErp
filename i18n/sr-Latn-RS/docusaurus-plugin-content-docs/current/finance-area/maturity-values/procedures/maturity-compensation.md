---
title: Kompenzacija dospelih plaćanja
sidebar_position: 2
---

:::note Putanja
**Administracija > Otvorene stavke > Procedure > Kompenzacija dospelih plaćanja**

Napomena:  
Za sve funkcionalnosti koje nisu detaljno objašnjene u ovom dokumentu, a odnose se na standardni rad obrazaca, pogledajte: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).

:::

---

Ova procedura, slična **Brzoj kompenzaciji**, predstavlja obrazac za pretragu u kojem je moguće pretraživati i pregledati otvorene stavke.

Za izvršavanje kompenzacije potrebno je kliknuti na dugme **Novo**.
Prvo obavezno polje koje je potrebno popuniti jeste **Tip kompenzacije**, koji se bira iz padajuće liste.
Moguće je konfigurisati posebnu numeraciju i druge parametre koji su potrebni kada se kompenzacija ne odnosi samo na otvorene stavke već i na računovodstvena salda.

Zbog toga je obavezno izabrati jedan od sledeća tri tipa kompenzacije:
- **Računi - knjižna odobrenja**
- **Kupac - dobavljač** (tip koji uobičajeno podrazumeva kompenzaciju računovodstvenih salda)
- **Zatvaranje uplata**: koristi se za zatvaranje otvorenih stavki u glavnoj knjizi pomoću potvrda ili avansnih uplata.

Parametri koji se definišu odnose se na obrazac knjiženja koji će biti korišćen za automatski generisano računovodstveno knjiženje nastalo kompenzacijom, kao i na sva konta koja će biti korišćena za knjiženje dugovanja ili potraživanja.
I ovde su dostupne bočne kartice (tabovi) u kojima su prikazane otvorene stavke. Nakon njihovog izbora (dvostrukim klikom ili odgovarajućim dugmetom na traci sa alatkama), stavke se prenose u glavni pregled, čime se omogućava jednostavniji rad sa kompenzacijama.

:::danger PAŽNJA
Operacija se završava tek nakon knjiženja.

Dugme **Knjiži** (koje će izvršiti samo zatvaranje otvorenih stavki ukoliko izabrani tip kompenzacije ne predviđa računovodstveni deo) postaje aktivno tek kada su iznosi otvorenih stavki koje se kompenzuju međusobno jednaki.
Ako vrednost (ili preostali iznos) otvorenih stavki nije ista, potrebno je izmeniti vrednost u koloni **Iznos**. Na taj način će otvorena stavka biti kompenzovana samo za uneti iznos (na primer, stavka od 2.000 biće kompenzovana za 1.000, koliko iznosi stavka suprotnog predznaka), dok će preostali iznos ostati otvoren.
Pre knjiženja proverite da polje **Razlika**, koje se nalazi na dnu obrasca, ima vrednost **0**.
:::

Klikom na dugme **Knjiži** (uz mogućnost naknadnog storniranja ili izmene kroz odgovarajuću funkcionalnost) u sledećoj kartici **Knjiženje** biće generisana plaćanja za zatvaranje otvorenih stavki, kao i, ukoliko izabrani tip kompenzacije to predviđa, odgovarajuća računovodstvena knjiženja kompenzacije.