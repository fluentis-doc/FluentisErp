---
title: Napredno kreiranje cjenika
sidebar_position: 4
---

Postupak **Napredno kreiranje cjenika** omogućuje izradu novih cjenika primjenom *Formule*, polazeći od artikala koji se nalaze u postojećim cjenicima.    
Uvjet za prikaz artikala u ovoj mreži jest postojanje [**Formule za ažuriranje politika cijena i popusta**](/docs/sales/price-control/formulas) koja ima definirani cjenik odredišta i cjenik izvora; artikl, također, mora pripadati cjeniku izvora.
Na temelju artikala iz cjenika izvora, Fluentis primjenjuje formulu i kreira cjenik odredišta.  

Mreža za pretraživanje je samo za čitanje i sadrži sljedeća polja:         
**Klasa, Artikl, Opis artikla**: ovdje se prikazuje artikl iz cjenika;          
**Formule izračuna**:ovdje se nalazi formula definirana u pripadajućoj tablici;          
**Izvor tipa prodajnog cjenika**: sadrži tip prodajnog cjenika izvora kojem pripada artikl, na koji će se primijeniti formula;        
**Račun/podračun/opis izvora klijenta**: sadrži prilagođeni cjenik koji se uzima kao izvor kojem pripada artikl;       
**Izvor tipa dobavljačkog cjenika**: sadrži tip dobavljačkog cjenika izvora;      
**Conto/sottoconto/descrizione origine fornitore**: sadrži prilagođeni cjenik izvora;        
**Odredište tipa prodajnog cjenika**: sadrži tip prodajnog cjenika koji je primatelj promjene kada se primijeni formula iz ovog reda;  
**Račun/podračun/opis odredišnog prodajnog cjenika**: sadrži prilagođeni cjenik koji se kreira kao primatelj promjene;   
**Odredište tipa dobavljačkog cjenika**: sadrži tip dobavljačkog cjenika primatelja promjene;  
**Račun/podračun/opis odredišnog dobavljačkog cjenika**: sadrži prilagođeni nabavni cjenik primatelja promjene;        
**Od/Do datum valjanosti**: prikazuje datume valjanosti pripadajućeg cjenika;      
**Nova cijena**: ovdje se prikazuje cijena novog cjenika dobivena primjenom formule na prethodnu cijenu;          
**Prethodna cijena**: ovdje se prikazuje cijena izvornog cjenika;         
**Promjena**: ovdje se unosi promjena u apsolutnom iznosu;       
**%Promjena**: ovdje se unosi promjena u postotku.      

U donjem dijelu moguće je unijeti podatke za novi cjenik:          
**Datum početka valjanosti**: predlaže se današnji datum, može se mijenjati;        
**Datum završetka valjanosti**: ne predlaže se nikakav datum, ali je moguće unijeti datum završetka valjanosti;       
**Valuta**: predlaže se valuta tvrtke, može se mijenjati;        
[**Zaokruživanja**](/docs/sales/sales-price-list/procedures/rounding): moguće je unijeti određeni **Mask** koji se primjenjuje na raspon vrijednosti za upravljanje decimalnim mjestima.  

Za pokretanje postupka, odaberite redove artikala u mreži i kliknite **Kreiranje cjenika** u traci izbornika.