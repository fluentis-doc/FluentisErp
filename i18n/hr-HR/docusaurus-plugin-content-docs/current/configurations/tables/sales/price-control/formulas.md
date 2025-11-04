---
title: Formule za ažuriranje politika cijena/popusta  
sidebar_position: 4
---

U ovom obrascu moguće je povezati pravila između dokumenata nabave i prodaje, kako bi se automatski mijenjala cijena artikala kada dobavljač pošalje novi katalog.      
U prvoj tablici nalaze se **Šifra** i **Opis** formula.        
U drugoj tablici nalaze se dokumenti izvora, dokumenti odredišta i formule. Za isti red moguće je primijeniti do 5 operacija. U obzir se uzimaju samo stupci s upisanim sadržajem; prazni stupci neće biti ažurirani niti se uzimati kao izvor promjene. Korisnik treba popuniti samo stupce koji ga zanimaju za izvor, odredište, operando i vrijednost operanda.           
**Odredište tip cjenika prodaje**: sadrži tip cjenika prodaje koji prima promjenu kada se primijeni formula u ovom retku;            
**Konto/subkonto/opis odredišnog cjenika prodaje**: sadrži prilagođeni cjenik koji prima promjenu;           
**Odredište tip cjenika dobavljača**: sadrži tip cjenika dobavljača koji prima promjenu;         
**Konto/subkonto/opis odredišnog cjenika dobavljača**: sadrži prilagođeni cjenik nabave koji prima promjenu;            
**Izvor tip cjenika prodaje**: sadrži tip cjenika prodaje izvora kojem će se primijeniti operacija;      
**Konto/subkonto/opis izvornog cjenika klijenta**: sadrži prilagođeni cjenik koji se uzima kao izvor;         
**Izvor tip cjenika dobavljača**: sadrži tip cjenika dobavljača izvora;           
**Konto/subkonto/opis izvornog cjenika dobavljača**: sadrži prilagođeni cjenik izvora;           
**Trošak izvora u skladištu**: popunjava se ako se želi uzeti kao izvor prosječni, zadnji ili standardni trošak artikla;          
**Operando N**: na dokument izvora primjenjuje se operacija odabrana u combo box-u (+, -, *, / ili %).;           
**Vrijednost N**: moguće je unijeti ručnu vrijednost koja se primjenjuje prema odabranom operandu;        
**Vrijednost svojstva N**: moguće je unijeti vrijednost drugog polja koja se zbraja/oduzima itd. prema odabranom operandu. Ovaj stupac isključuje prethodni: operacija može biti ručna vrijednost ili vrijednost drugog polja. Dvostrukim klikom otvara se **Navigator objekata** iz kojeg se odabire svojstvo za izračun. Posljednja dva retka Navigatora objekata su **AddedValue** i  **AddedPercentage**, koji služe za prijenos tih vrijednosti iz cjenika dobavljača;               
**Preuzimanje popusta**: prenosi popuste odabranog cjenika u dokument odredišta;        
**Preuzimanje popusta od preferiranog dobavljača**: preuzima popust s cjenika preferiranog dobavljača po defaultu.  