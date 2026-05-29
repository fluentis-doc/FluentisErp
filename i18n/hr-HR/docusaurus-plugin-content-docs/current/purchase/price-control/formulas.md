---
title: Formula ažuriranja politike cijene/popusta
sidebar_position: 2
---

Na ovoj formi moguće je povezati pravila između dokumenata kupovine i prodaje kako bi se automatski mijenjala cijena artikala kada dobavljač pošalje novi katalog. 
U prvom pregledu nalaze se **Šifra** i **Opis** formule.      
U drugom pregledu su navedeni dokumenti porijekla, dokumenti odredišta i formule. Moguće je primijeniti do 5 operacija za isti redak. Razmatraju se samo stupci s sadržajem, prazni stupci neće biti ažurirani niti uzeti u obzir kao izvor promjene. Korisnik stoga treba ispuniti samo stupce koji ga zanimaju za porijeklo, odredište, operaciju i vrijednost operacije. Pogledajmo stupce druge mreže.    
**Vrsta odredišta prodajnog cjenika**: sadrži Tip cjenika prodaje primatelja promjene, kada će se primijeniti formula prisutna u ovom retku;       
**Konto/Podkonto /opis odredišta prodajnih cjenika**: sadrži prilagođen cjenik prodaje primatelja promjene;            
**Vrsta odredišta kupovnog cjenika**: sadrži Tip cjenika dobavljača primatelja promjene;         
**Konto/Podkonto/opis odredišta kupovnog cjenika**: sadrži prilagođen cjenik nabave primatelja promjene;            
**Vrsta prodajnog cjenika**: sadrži Tip cjenika prodaje podrijetla na koju će se primijeniti operacija;       
**Konto/Podkonto/opis izvora kupca**: sadrži prilagođen cjenik  klijenta koja se smatra porijeklom;        
**Vrsta cjenika dobavljača**: sadrži Tip cjenika dobavljača porijekla;  
**Konto/Podkonto /opis dobavljača**: sadrži prilagođen cjenik dobavljača koja se smatra porijeklom;          
**Izvor troškova skladišta**: ovaj se podatak mora popuniti ako se želi smatrati porijeklom prosječna, zadnja ili standardna cijena artikla;        
**Operand N**: na dokument koji se smatra porijeklom primijenit će se odabrana operacija u ovom padajućem izborniku među  +, -, *, / o %;          
**Vrijednost N**: u ovom se polju može unijeti ručna vrijednost koja će se primijeniti prema odabranom operativnom postupku;           
**Vrijednost svojstva N**: u ovom polju moguće je unijeti polje koje treba zbrojiti/oduzeti itd. prema odabranom operativnom postupku; ovo polje isključuje prethodno: zbroj/oduzimanje/dijeljenje itd. može biti ručna vrijednost ili vrijednost drugog polja; dvostruki klik u ovom polju otvara navigator objekta iz kojeg se može odabrati svojstvo koje će se smatrati faktorom operacije; zadnje dvije linije navigatora objekta su oznake **Dodana Vrijednost** i **Dodani Postotak**, koje služe za prenošenje tih vrijednosti iz dobavljačke liste;             
**Prenjeti popust**: ova oznaka prenosi popuste iz odabrane liste na odredišni dokument;       
**Prenjeti popust od preferiranog dobavljača**: ova oznaka prenosi popust s liste preferiranih dobavljača prema zadanim postavkama.