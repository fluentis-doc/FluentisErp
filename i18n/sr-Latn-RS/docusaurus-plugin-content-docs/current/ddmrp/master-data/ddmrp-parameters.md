---
title: Parametri za DDMRP artikle
sidebar_position: 5
---

Putem ovog obrasca definišu se parametri potrebni za upravljanje bafer artiklom, odnosno artiklom kojim se upravlja prema DDMRP logici.

Za svaki bafer artikl mora postojati najmanje jedan zapis u ovoj tabeli – jedan za svaki distributivni centar (vidi **logističku strukturu**) u kojem se artikl drži na zalihama prema DDMRP principima, kao i eventualno jedan za fabriku (sa praznim poljem skladišta) ukoliko se artikl drži na zalihama u fabrici.

DDMRP parametri koje je potrebno definisati su sledeći:

- **Skladište**

  Šifra skladišta povezana sa logističkom jedinicom zapisa, odnosno distributivnim centrom (ili međustanicom). Ovo polje ostaje prazno ako se zapis odnosi na fabriku.

- **Dobavljač**

  Označava dobavljača od kojeg se ovaj artikl snabdeva u datoj logističkoj jedinici.

  Podrazumevano je logistička jedinica snabdevanja definisana u tabeli logističke strukture. Međutim, ovim poljem moguće je upravljati izuzecima za pojedinačne artikle.

  Na primer, artikli se u ovoj logističkoj jedinici uglavnom snabdevaju iz jednog centralnog *huba*, ali neki artikli mogu dolaziti iz drugog *huba* ili direktno iz fabrike.

  Ako dobavljač nije naveden u tabeli logističkih jedinica, smatra se spoljnim dobavljačem i prema njemu će biti izdata standardna porudžbenica.

- **Dani transporta**

  Ako je polje dobavljača popunjeno, potrebno je popuniti i ovo polje. Ono predstavlja vreme potrebno za nabavku robe iz logističke jedinice ili od spoljnog dobavljača navedenog u polju dobavljač.

- **Šifra profila (profil bafera)**

  Šifra profila bafera povezanog sa ovim artiklom u logističkoj jedinici navedenoj u polju skladište.

- **Faktor vremena isporuke (lead time factor)**

  Omogućava definisanje drugačije vrednosti od one koja je određena u profilu bafera povezanom sa ovim zapisom.

- **Faktor varijabilnosti (variability factor)**

  Omogućava postavljanje drugačije vrednosti od one definisane u profilu bafera povezanom sa ovim zapisom.

- **Prosečna dnevna potrošnja (ADU)**

  Količina koja se u proseku troši svakog dana u logističkoj jedinici ovog zapisa (razlikuje se za svaku jedinicu). Potrebno je uzeti u obzir dovoljno dug vremenski period (višestruko duži od vremena nabavke artikla) za obračun proseka.

  Ova vrednost značajno utiče na nivo zaliha artikla i potrebno ju je periodično ažurirati [(vidi proceduru)](/docs/ddmrp/procedures/adu-update).

- **Razdvojeni lead time (DLT)**,

  Polje nije moguće uređivati – rezultat je automatskog obračuna.

  Predstavlja vreme potrebno za nabavku artikla uzimajući u obzir postojanje drugih bafera u njegovoj strukturi ili logističkoj mreži.

  U slučaju distributivnog centra, dobija se sabiranjem vremena transporta iz logističke jedinice koja ga snabdeva i eventualnog vremena proizvodnje, ukoliko je jedinica snabdevanja fabrika, a artikl nije bafer u fabrici (odnosno nema zaliha).

- **Kumulativni lead time (CLT)**,

  Polje nije moguće uređivati – rezultat je obračuna DLT procedure.

  Predstavlja vreme potrebno za nabavku artikla u fabrici ako nijedan od artikala u njegovoj strukturi nije bafer. Drugim rečima, to je vreme proizvodnje u slučaju potpunog odsustva zaliha za sve njegove komponente.

- **Željeni ciklus ponovnog naručivanja (DOC)**,

  Izražava se u danima i predstavlja broj dana koji bi trebalo da prođe između jedne i naredne porudžbine.

  Ova vrednost se uzima u obzir prilikom obračuna zelene zone za ovaj artikl.

- **Minimalna količina za poručivanje (MOQ)**,

  Ako postoji minimalna količina porudžbine koju propisuje dobavljač ili interna politika (posebno radi optimizacije proizvodnje), ona se navodi u ovom polju.

  Ova vrednost se takođe uzima u obzir prilikom obračuna zelene zone za ovaj artikl.

- **Zelena zona**,

  Polje nije moguće uređivati – rezultat je automatske procedure ažuriranja zona.

  Zelena zona određuje veličinu porudžbina (nijedna porudžbina koju predloži DDMRP ne može biti manja od zelene zone) i na taj način utiče na učestalost ponovnog naručivanja.

  Učestalost poručivanja izračunava se kao odnos između zelene zone i prosečne dnevne potrošnje (ADU), a takođe definiše očekivane prosečne i maksimalne nivoe zaliha.

- **Žuta zona**,

  Polje nije moguće uređivati – rezultat je automatske procedure ažuriranja zona.

  Žuta zona predstavlja prosečnu potrošnju tokom perioda potrebnog za snabdevanje artiklom (DLT).

- **Crvena zona**,

  Polje nije moguće uređivati – rezultat je automatske procedure ažuriranja zona.

  Crvena zona definiše nivo sigurnosne zalihe, minimalni i maksimalni nivo zaliha.

  Njena veličina raste sa povećanjem varijabilnosti povezane sa baferom (vidi profil bafera).

- **Prag vršnih porudžbina (OST)**,

  Koristi se u obračunu NFP (Net Flow Position).

  Kada ukupna dnevna potražnja (u okviru definisanog vremenskog perioda za vrhove potražnje) premaši ovu vrednost, ona se uključuje u obračun NFP-a.

  Preporučuje se korišćenje vrednosti između 50% i 100% crvene zone artikla.

  Preniska vrednost dovela bi do toga da se uobičajene oscilacije potražnje pogrešno prepoznaju kao vršni zahtevi, što bi rezultovalo prečestim porudžbinama i većim prosečnim zalihama nego što je potrebno.

  Previsoka vrednost mogla bi dovesti do toga da se značajni, ali ne i ekstremni vrhovi potražnje ne prepoznaju na vreme, što bi rezultovalo smanjenjem zaliha ispod optimalnog nivoa, iscrpljivanjem crvene zone ili čak nestašicom zaliha (*stockout*).

  - **Vremenski horizont za vršne porudžbine (OSH)**,

  Vremenski period od danas unutar kojeg se proverava prisustvo vršnih zahteva (za obračun NFP-a).

  Ova vrednost ne sme biti manja od DLT-a (razdvojenog *lead time*-a), jer je potrebno na vreme prepoznati potencijalne vrhove potražnje, najmanje onoliko unapred koliko traje nabavka artikla.

- **Metoda predviđanja prosečne dnevne potrošnje**,

  Izaberite jednu od sledećih metoda koja će se primenjivati u postupku ažuriranja ADU (prosečne dnevne potrošnje):

  - 0) Bez ažuriranja
  - 1) Aritmetička sredina na osnovu istorijskih podataka (analiziraju se stvarne istorijske potrošnje, svi podaci imaju jednaku težinu)
  - 2) Ponderisani prosek na osnovu istorijskih podataka (noviji podaci imaju veću težinu od starijih)
  - 3) Aritmetička sredina na osnovu budućih podataka (analizira se tabela predviđene dnevne potrošnje)
  - 4) Aritmetička sredina kombinovanjem istorijskih i budućih podataka (kombinuju se metode 1 i 3)
  - 5) Ponderisani prosek istorijskih i aritmetička sredina budućih podataka (kombinacija metoda 2 i 3)

- **Dani u prošlosti**,

  Period u prošlosti koji se koristi za obračun prosečne dnevne potrošnje.

- **Dani u budućnosti**,

  Period u budućnosti koji se koristi za predviđanje prosečne dnevne potrošnje.

- **Tip zaliha**

  Definiše vrstu DDMRP zaliha:

  - 1 = Replenished (dinamička zaliha)
  - 2 = Replenished override (statička zaliha)
  - 3 = Min-max (minimalno-maksimalna zaliha)

## Funkcijski tasteri

Omogućava unos DDMRP parametara za kombinaciju artikl-varijanta-skladište, pri čemu šifra skladišta identifikuje [**logističku jedinicu**](/docs/ddmrp/master-data/facilities) (distributivni centar, hub ili fabriku – u tom slučaju polje ostaje prazno).

Najpre izaberite skladište iz ponuđene liste; prikazaće se artikli koji još nemaju zapis u DDMRP parametrima za to skladište. Za fabriku izaberite bilo koje povezano skladište, jer sistem sve fabrike smatra ekvivalentnim skladištu sa praznom šifrom.

Zatim izaberite profil bafera za novi zapis kako biste aktivirali dugme **„Unesi“**.

Nakon toga izaberite redove za uvoz, pritisnite **„Unesi“**, a zatim otvorite nove zapise kako biste dovršili unos podataka.

## Taster Zamena parametara

Omogućava promenu parametara za više zapisa istog skladišta.

Ako je potrebno izmeniti više skladišta, postupak se mora ponoviti za svako posebno.

Nakon izbora više redova, taster postaje aktivan i otvara obrazac za izmenu jednog ili više parametara za izabrane zapise.

Promena se primenjuje samo ako je pored parametra uključen odgovarajući potvrdni okvir (*flag*).

## Taster Obriši

Omogućava brisanje zapisa, čime se određeni artikl više ne smatra DDMRP baferom u navedenom skladištu.

Istorijski podaci povezani sa artiklom i skladištem biće sačuvani i ostaće dostupni kroz istoriju DDMRP parametara i istoriju Net Flow Positiona.
