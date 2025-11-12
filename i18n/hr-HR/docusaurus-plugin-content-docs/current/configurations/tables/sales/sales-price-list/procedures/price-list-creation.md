---
title: Kreiranje prodajnih cjenika  
sidebar_position: 3
---

Ova procedura omogućuje kreiranje novih prodajnih cjenika počevši od artikala iz postojećih dokumenata.  
Na vrhu maske nalaze se filteri za pretraživanje izvora podataka: odaberite između Prodajnog cjenika, Nabavnog cjenika, Kartice artikala, Nabavnog DDT-a, Nabavnih faktura ili Narudžbi dobavljača.  
Proširivanjem opcije Pretraživanje dokumenta moguće je dodatno filtrirati kako biste pronašli određeni cjenik. Za prikaz rezultata pritisnite Pretraži cjenike.  

:::note Pažnja
Polje **Zaokruživanja**, smješteno na dnu maske, je obavezno.  
Da biste mogli pregledati podatke i nastaviti s kreiranjem cjenika, potrebno je odabrati jedno od prethodno definiranim [zaokruživanja](/docs/sales/sales-price-list/procedures/rounding).  
:::


U prvoj mreži prikazat će se dokumenti prema pretraživanju. Odabirom retka, u donjoj mreži prikazat će se artikli iz dokumenta. Analizirajmo stupce:    
**Klasa/Kod/Opis artikla**: identifikacijski podaci artikla, uključujući **Varijantu**, **Količinu**, **JM**, **Marku**.    
**Ne uzimati u obzir**: artikli s označenim ovim poljem neće biti promijenjeni u novom cjeniku.  
**Prethodni trošak**: prikazuje trošak iz posljednjeg dokumenta odabranog tipa u izvoru podataka.  
**Početna cijena**: prikazuje cijenu koja je bila u izvornom dokumentu.    
**Početna cijena s PDV-om**: prikazuje početnu cijenu uključujući PDV.    
**Cijena bez zaokruživanja**: cijena uključuje povećanje ili smanjenje definirano za novi cjenik.  
**Cijena s PDV-om bez zaokruživanja**: prikazuje cijenu uključujući PDV prije primjene zaokruživanja.    
**Maska**: prikazuje masku kojoj je artikl podložan.    
**Zaokružena cijena**: prikazuje *Cijenu bez zaokruživanja* zaokruženu prema definiranoj *Maski*.  
**Zaokružena cijena s PDV-om**: prikazuje *Cijenu s PDV-om bez zaokruživanja* zaokruženu prema definiranoj *Maski*.    
**Trenutna cijena u cjeniku**: ako je u sekciji *Cjenik za kreiranje* odabrano **Dodaj odabrane podatke u već kreirani cjenik**, ovdje se prikazuje cijena artikla u odabranom cjeniku, ako postoji.     

U donjem dijelu potrebno je unijeti obavezne podatke za *Cjenik za kreiranje*: tip cjenika (generički ili personalizirani), Tip ili Klijent prema tipu, Datum početka valjanosti (eventualno i Datum završetka valjanosti), Valuta, Zaokruživanja te dodatne opcije:    
**Cijena s PDV-om**: označava da cjenik koji se kreira sadrži cijene uključujući PDV.  
**Minimalni cjenik**: informativna oznaka koja označava kreiranje cjenika minimalnih cijena za pokušaj prodaje.  

Ovi podaci mogu se unijeti ručno ili klikom na tipku **Dodaj odabrane podatke u već kreirani cjenik**, nakon čega se otvara pop-up za odabir cjenika iz kojeg će se preuzeti podaci. Time će se artikli dodati u postojeći cjenik umjesto kreiranja novog; ako neki artikli već postoje u odabranom cjeniku, sustav će pitati želite li zadržati staru cijenu ili je ažurirati.     

Kreiranje cjenika vrši se pomoću tipke na traci izbornika:  
- **Kreiraj sve artikle**: kreira cjenik sa svim artiklima iz dokumenta odabranog u prvoj mreži.  
- **Kreiraj odabrane artikle**: kreira cjenik samo s artiklima odabranim u drugoj mreži.        

Nakon kreiranja novog cjenika, Fluentis će pitati želite li ga otvoriti.      

Na ntraci izbornika dostupni su i dodatne tipke za upravljanje maskom:  
- **Ažuriranje maske**: ažurira *Masku* u kartici artikla za odabrani artikl.    
- **Preuzmi masku iz raspona**: ako je promijenjeno polje *Zaokruživanja* u sekciji *Cjenik za kreiranje*, ova tipka ponovno izračunava *Masku* u donjoj mreži prema odabranoj opciji zaokruživanja.    
- **Aktivacija/deaktivacija opcije Ne uzimati u obzir**: aktivira ili deaktivira opciju *Ne uzimati u obzir* za odabrane artikle.    