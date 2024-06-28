---
title: Prodajna formula
sidebar_position: 2
---

Na ovoj formi moguće je povezati pravila između dokumenata kupovine i prodaje kako bi se automatski mijenjala cijena artikala kada dobavljač pošalje novi katalog. 
U prvoj mreži nalaze se **Kod** i **Opis** formule.      
U drugoj mreži su navedeni dokumenti porijekla, dokumenti odredišta i formule. Moguće je primijeniti do 5 operacija za isti redak. Razmatraju se samo stupci s sadržajem, prazni stupci neće biti ažurirani niti uzeti u obzir kao izvor promjene. Korisnik stoga treba ispuniti samo stupce koji ga zanimaju za porijeklo, odredište, operaciju i vrijednost operacije. Pogledajmo stupce druge mreže.    
**Odredište vrste prodajnog cjenika**: sadrži Tip cjenika prodaje primatelja promjene, kada će se primijeniti formula prisutna u ovom retku;       
**Konto/Podkonto /opis odredišta cjenika prodaje**: sadrži prilagođen cjenik prodaje primatelja promjene;            
**Odredište tipa cjenika dobavljača**: sadrži Tip cjenika dobavljača primatelja promjene;         
**Konto/Podkonto/opis odredišta cjenika dobavljača**: sadrži prilagođen cjenik nabave primatelja promjene;            
**Porijeklo tipa cjenika prodaje**: sadrži Tip cjenika prodaje podrijetla na koju će se primijeniti operacija;       
**Konto/Podkonto/opis porijekla klijenta**: sadrži prilagođen cjenik  klijenta koja se smatra porijeklom;        
**Porijeklo tip cjenika dobavljača**: sadrži Tip cjenika dobavljača porijekla;  
**Konto/Podkonto /opis porijekla dobavljača**: sadrži prilagođen cjenik dobavljača koja se smatra porijeklom;          
**Trošak porijekla skladišta**: ovaj se podatak mora popuniti ako se želi smatrati porijeklom prosječna, zadnja ili standardna cijena artikla;        
**Operacija N**: na dokument koji se smatra porijeklom primijenit će se odabrana operacija u ovom padajućem izborniku među  +, -, *, / o %;          
**Vrijednost N**: u ovom se polju može unijeti ručna vrijednost koja će se primijeniti prema odabranom operativnom postupku;           
**Vrijednost svojstva N**: u ovom polju moguće je unijeti polje koje treba zbrojiti/oduzeti itd. prema odabranom operativnom postupku; ovo polje isključuje prethodno: zbroj/oduzimanje/dijeljenje itd. može biti ručna vrijednost ili vrijednost drugog polja; dvostruki klik u ovom polju otvara navigator objekta iz kojeg se može odabrati svojstvo koje će se smatrati faktorom operacije; zadnje dvije linije navigatora objekta su oznake **DodanaVrijednost** i **DodaniPostotak**, koje služe za prenošenje tih vrijednosti iz dobavljačke liste;             
**Povrat popusta**: ova oznaka prenosi popuste iz odabrane liste na odredišni dokument;       
**Povrat popusta od preferiranog dobavljača**: ova oznaka prenosi popust s liste preferiranih dobavljača prema zadanim postavkama.