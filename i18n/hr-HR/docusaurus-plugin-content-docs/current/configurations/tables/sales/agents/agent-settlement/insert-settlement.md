---
title: Nova likvidacija agenata
sidebar_position: 3
---
Forma se otvara putem putanje *Prodaja > Agenti > Likvidacije agenata > Pretraga likvidacija agenata* klikom na tipku **Novo**.

:::tip[Savjet]
Iako je moguće *ručno* kreirati likvidaciju, kao što je objašnjeno u nastavku,    

preporučujemo korištenje **vođenog postupka (wizard)** za [**Automatsko kreiranje likvidacije agenata**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement).  
:::

:::note[Napomena]
Scenarij s **primjerima** upravljanja agentima i izračuna provizija dostupan je [**ovdje**](/docs/sales/agents/agent-scenario)
:::

## **1. Likvidacije**

Unos likvidacije zahtijeva:    
- agenta na čije se ime likvidacija vodi (koji mora imati definiran tip i rješenje plaćanja u svojoj kartici),    
- broj i godinu koji se automatski popunjavaju,         
- datum likvidacije (predlaže se trenutni datum),   
- opis likvidacije (npr.: likvidacija za prvo tromjesečje 2012),     
- mjesec/godinu na koju se odnosi obračun Enasarco doprinosa.  

### 1.1 Sažetak

Ova kartica prikazuje sve elemente izračuna provizije.    

**Sažetak provizija**: u ovoj su tablici prikazani, po valutama, ukupni iznosi isplaćenih provizija.  
Ispod se nalaze polja s *valutom* likvidacije (preuzeta iz kartice agenta), *tečajem* i *datumom valute* za taj tečaj; niže se nalazi *PDV* koji se primjenjuje na provizijsku osnovicu (također preuzet iz kartice agenta) i *ukupni iznos dokumenta*.

**Sažetak izračuna poreza po odbitku**: tablica prikazuje primljene honorare koji se uzimaju u obzir kao predujmovi u tekućoj likvidaciji, *tip poreza po odbitku* (preuzet prvenstveno iz kartice agenta ili kategorije agenta), odgovarajuće postotke i iznose.

Ako je postavljeno *ručno računanje*, moguće je ručno unijeti podatke u odjeljak za upravljanje porezima po odbitku.

### 1.2 Plaćanja

U ovoj kartici program prikazuje u **Listi plaćanja** zadane postavke plaćanja preuzete iz kartice agenta, koje je moguće mijenjati.

U tablici **Lista dospijeća** izračunavaju se pripadajući rokovi dospijeća; potrebno je napomenuti da se iznos dospijeća mora ručno uskladiti s eventualnim promjenama u likvidaciji, tako da odgovara stvarnom iznosu za isplatu.

#### Specifične tipke

> **Umetni plaćanja**: postavlja kursor na unos novog retka unutar tipova plaćanja.    
> **Obriši plaćanja**: briše odabrane postavke plaćanja.     
> **Umetni dospijeća**: postavlja kursor na unos novog retka unutar dospijeća likvidacije.      
> **Obriši dospijeća**: briše odabrana dospijeća.    

## **2. Računi/OTP/Narudžbe**

Ovisno o *tipu dokumenta uzetom u obzir za provizijsku osnovicu* definiranom u *Kartici agenta*, prikazuje se druga kartica s dokumentima: Računi ili OTP (otpremnice) ili Narudžbe.  

U gornjoj tablici, nakon pokretanja pretrage, prikazuju se dokumenti koji su uključeni u izračun tekuće likvidacije agenta.  

Pomoću dviju tipki za upravljanje — **Povezivanje dokumenata s likvidacijom** i **Brisanje povezanih dokumenata** — moguće je ručno dodavati nove dokumente u likvidaciju ili ih uklanjati radi uključivanja u neku drugu.  

#### Specifične tipke  

> **Pretraga**: pokreće pretragu dokumenata uključenih u tekuću likvidaciju.     
> **Povezivanje dokumenata s likvidacijom**: otvara masku za pretragu i ručni unos dokumenata u likvidaciju.    
> **Brisanje povezanih dokumenata**: uklanja odabrani dokument iz tekuće likvidacije.   