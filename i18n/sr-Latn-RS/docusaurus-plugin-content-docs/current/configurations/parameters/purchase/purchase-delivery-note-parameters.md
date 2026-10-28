---
title: Parametri primki
sidebar_position: 3
---

Parametri primki omogućavaju definisanje osnovnih podešavanja za pravilno upravljanje primkama, u skladu sa zahtevima pojedinačnog preduzeća.

Prozor se sastoji od dugmadi i tri kartice: *Opšte*, *Ulaz* i *Analitika*.

### Opšte

**Upravljanje dvema mernim jedinicama**: samo ako je ova opcija omogućena, sistem može da upravlja alternativnom mernom jedinicom u primkama.

**Automatsko predlaganje alternativne merne jedinice**: ako je opcija omogućena, predlaže se količina izražena u alternativnoj mernoj jedinici, pod uslovom da je u šifarniku artikla definisana podrazumevana alternativna merna jedinica. Ovu opciju moguće je omogućiti samo ako je omogućena prethodna opcija.

**Nulta cena ako ne postoji cenovnik**: ako je opcija omogućena, u slučaju da ne postoji važeći cenovnik, cena se postavlja na nulu. Ako opcija nije označena, u polje se unosi poslednji trošak artikla, ako postoji.

**Dozvoli primke sa istim brojem i dobavljačem**: ako je opcija omogućena, dozvoljava unos dve primke sa istim brojem za istog dobavljača. Preporučuje se da ova opcija ostane onemogućena kako bi sistem mogao da proverava jedinstvenost broja dokumenta.

**Obavezni lotovi i serijski brojevi (S.N.)**: ako je opcija omogućena, korisnik mora na nivou reda artikla da unese lot i serijski broj za sve artikle za koje je predviđeno takvo upravljanje. Ako opcija nije omogućena, lot i serijski broj nisu obavezni podaci, pa je dokument moguće sačuvati i bez njihovog unosa. Preporučuje se omogućavanje ove opcije ako se koristi upravljanje artiklima prema lotovima.

**Pretraživanje cena artikala u svim podrazumevanim cenovnicima**: ako je opcija omogućena, cena artikla unetog u red dobavljačke narudžbine traži se u svim podrazumevanim cenovnicima definisanim u šifarniku dobavljača, pored podrazumevanog cenovnika. Ako opcija nije omogućena, cena artikla traži se samo u podrazumevanom cenovniku navedenom u zaglavlju narudžbine, a ne i u drugim cenovnicima istog dobavljača koji imaju različite periode važenja.

**Dozvoli popuste za besplatne artikle**: ako je opcija omogućena, dozvoljava unos popusta u redove sa besplatnim artiklima.

**Upotreba dobavljačevog artikla**: ako je opcija omogućena, u tabeli artikala primke prikazuje se i polje za unos šifre dobavljačevog artikla.

**Provera artikala pri kraju zaliha**: ako je opcija omogućena, sistem proverava raspoloživost artikala unetih u primku i upozorava ako je neki artikal pri kraju zaliha, odnosno ako je u [šifarniku artikala](/docs/erp-home/registers/items/create-new-item) omogućena opcija *Pri kraju zaliha*.

**Knjiženje ambalaže**: omogućava knjiženje redova sa artiklima vrste ambalaže i u glavnoj knjizi. Takvi artikli obično se vode radi provere stanja [povratne ambalaže](/docs/configurations/tables/logistics/package-to-be-returned).

**Zadrži cene iz narudžbina za količinske razrede**: ova opcija koristi se pri postupku razduženja narudžbina u primke kada se razdužena količina razlikuje, obično je manja, od naručene količine za koju je definisana cena ili popust prema količinskom razredu. Ako cena ili popust ne zavise od isporučene količine, već samo od naručene količine, ovu opciju treba omogućiti. Ako cena ili popust prema količinskom razredu ne treba da se prenesu u dokument isporuke kada narudžbina nije razdužena u celosti, opciju ne treba omogućiti.

**Aktiviranje kontrole kvaliteta**: u fazi izrade.

**Ponovni obračun prevoza**: ako je opcija omogućena, na osnovu podataka iz šifarnika artikala izračunavaju se težina i zapremina u dokumentu, a trošak prevoza automatski se postavlja. Ako opcija nije omogućena, trošak prevoza za primku potrebno je obračunati ručno jer neće biti automatski predložen.

**Podrazumevana merna jedinica zapremine**: označava podrazumevanu mernu jedinicu zapremine koja se koristi pri obračunu prevoza za primku.

**Podrazumevana merna jedinica mase**: označava podrazumevanu mernu jedinicu mase koja se koristi pri obračunu prevoza za primku.

### Ulaz

**Kreiranje knjiženja sa datumom dokumenta**: ako je opcija omogućena, skladišno knjiženje izvršava se sa istim datumom kao i primka. Ako opcija nije omogućena, knjiženje se izvršava sa datumom navedenim u polju *Datum ulaza* u zaglavlju primke, ako je taj datum unet; u suprotnom se koristi *Datum skladišnog knjiženja* naveden u postupku [Knjiženje primki u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Ako se knjiženje pokreće direktno iz primke pomoću dugmeta *Automatski ulaz u skladište*, a polje *Datum ulaza* nije popunjeno, koristiće se današnji datum.

**Prioritet skladišta i šablona ulaza**: ako je opcija omogućena, pri knjiženju primke u skladište koriste se vrednosti definisane u poljima **Skladište** i **Skladišni šablon** u nastavku. Ako opcija nije omogućena, skladište i šablon ulaza preuzimaju se iz redova primke. Ako ti podaci nisu navedeni u redovima primke, automatski ulaz direktno iz primke neće biti moguć. Knjiženje primke ipak se može izvršiti odgovarajućim postupkom (pogledajte [Knjiženje primki u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)). Pritom je na kartici *Parametri* potrebno označiti opciju *Prihvatanje sledećih podataka kao skladišta i šablona* i navesti *Skladište* i *Šablon* koji će se koristiti.

**Automatski ulaz/izlaz**: ako je opcija omogućena, pri označavanju polja *Kontrolisano* u zaglavlju dokumenta prikazaće se poruka koja podseća da je aktiviran parametar automatskog ulaza/izlaza i pita da li želite da nastavite. Izborom odgovora *Da* primka će biti proknjižena u skladište. U suprotnom je moguće naknadno je proknjižiti pritiskom na dugme *Automatski ulaz u skladište* na traci.

**Upozorenje za fiktivne artikle**: ako je opcija omogućena, tokom ulaza primke proverava se da li dokument sadrži fiktivne artikle. Ako ih sadrži, prikazuje se poruka za potvrdu nastavka postupka. Ako korisnik potvrdi nastavak, cela primka biće proknjižena u skladište, osim fiktivnih artikala. Ako korisnik izabere *Ne*, primka neće biti proknjižena.

Fiktivni artikal može biti bez sastavnice prvog nivoa ako je u parametrima MRP-a za njega definisana vrsta nabavke *Nabavka*. U suprotnom će se pri skladišnom knjiženju prikazati poruka o grešci ako dokument koji se knjiži sadrži fiktivne artikle.

### Analitika

Na ovoj kartici određuje se prioritet prema kojem se u redu primke preuzima troškovno mesto (CdC) ili profitno mesto (CdP).

Prioriteti se mogu menjati pomoću sledećih dugmadi na traci:

- **Pomeri nagore**
- **Pomeri nadole**

*Podrazumevane vrednosti*: troškovno mesto ili profitno mesto najpre se preuzima iz vrste fakturisanja, ako je tamo definisano. Dodatne informacije potražite u tabeli [Vrste nabavnog fakturisanja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definisan u vrsti fakturisanja, sistem ga traži u *šifarniku dobavljača*. Ako ga nema ni tamo, traži ga u *šifarniku artikala*, a zatim na nivou *skladišta*.

**Ponovni obračun**: ako je opcija omogućena, troškovna i profitna mesta ponovo se izračunavaju prema izabranom redosledu prioriteta.

**Provera prioriteta za svaku dimenziju**: ako je opcija omogućena, sistem proverava svaki prioritet definisan u gornjem delu kako bi utvrdio postoje li dodatne dimenzije kojima još nije dodeljena vrednost.

Na primer, pretpostavimo da je u šifarniku artikla definisano troškovno mesto za dimenziju *Poslovna jedinica*, a u vrsti nabavnog fakturisanja dimenzija *Uprava*.

Ako opcija nije omogućena, sistem uzima u obzir samo troškovno mesto definisano u šifarniku artikla. Ako je opcija omogućena, nakon preuzimanja troškovnog mesta iz šifarnika artikla sistem proverava i dimenziju definisanu u vrsti nabavnog fakturisanja (u ovom primeru dimenziju *Uprava*). Ako se ona razlikuje od već obrađene dimenzije (*Poslovna jedinica*), učitava odgovarajuće mesto i nastavlja da proverava ostale prioritete.