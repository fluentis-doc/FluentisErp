---
title: Preuzimanje cijena i popusta  
sidebar_position: 1
---

Cijene proizvoda mogu se definirati u prodajnim cjenicima ili izravno u šifrarniku artikala. U cjenicima cijene mogu biti s PDV-om ili bez PDV-a, što ovisi o aktiviranju oznake "Cijena s PDV-om" u zaglavlju cjenika.  

**Vrste cjenika**      
Cjenici se dijele u dvije glavne kategorije: opći i po kupcu.
Opći cjenici konfiguriraju se u posebnoj tablici, gdje se može naznačiti i radi li se o cjeniku s PDV-om ili bez PDV-a putem odgovarajuće oznake.
Cjenici po kupcu koriste šifru računa i podračuna kupca, čime postaju jedinstveni i prilagođeni svakom kupcu.

Svaki cjenik definiran je pomoću tri ključna elementa:

- Vrsta (opći ili po kupcu),
- Valuta,
- Datumi važenja (od / do).     
Unutar svakog cjenika, cijene artikala mogu biti definirane za osnovnu jedinicu mjere (obvezno određenu u šifrarniku artikla) ili za alternativne jedinice mjere.
Cijene se mogu povezati i s količinskim razredima (kartica "Cijena po količini") ili sa specifičnim odredištima robe (kartica "Odredišta").   

### **Upravljanje popustima**      
Popusti se mogu definirati na više načina:  

- Šifrarnik kupca – Popusti definirani u kartici "Troškovi/Popusti" automatski se primjenjuju u prodajnim dokumentima prilikom odabira kupca. Moguće je dodijeliti više popusta.  

- Vrsta plaćanja – Popusti vezani uz vrstu plaćanja automatski se preuzimaju kada se u dokumentu odabere određeni način plaćanja.  

- Vrsta cjenika – Popusti se mogu povezati sa svakim redom tablice cjenika u šifrarniku kupca.

- Cjenik artikala – Popusti se mogu definirati za svaki redak artikla u cjeniku, čak i po količinskom razredu (popust po količini ili po vrijednosti).

- Definiranje politika popusta – Popusti se mogu konfigurirati za artikle, kupce, klase artikala, komercijalne kategorije, kategorije popusta te detalje kategorije popusta.

:::important Napomena
Da bi bilo moguće primjenjivati popuste na osnovicu, potrebno je u bazi podataka aktivirati opći parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće poduzeće.
Ako taj parametar nije aktivan, popusti na osnovicu automatski će se pretvarati u kaskadne popuste.  
:::


### **Postupak preuzimanja cijena i popusta**      
Kada se u prodajni dokument unese artikl, aktivira se postupak preuzimanja cijena i popusta.
Sustav traži važeći cjenik među onima pridruženima kupcu, počevši od onoga označenog kao zadani ili prema definiranoj prioritetnoj logici pretraživanja.  

Pretraga važećeg cjenika temelji se na sljedećim kriterijima:  

- Cjenik mora sadržavati traženi artikl u istoj valuti kao i kupac.  
- Datum važenja cjenika mora obuhvaćati datum dokumenta, odnosno mora biti između datuma početka važenja u kartici "Cjenici" i datuma dokumenta.  
Ako se ne pronađe važeći cjenik i nije aktivirana opcija "Pretraži sve zadane cjenike", sustav koristi prodajnu cijenu iz šifrarnika artikala.
Ako je opcija aktivna, pretraga se nastavlja među ostalim vrstama cjenika navedenima u šifrarniku kupca, prema redoslijedu prioriteta.

Pretraga artikla unutar cjenika uzima u obzir šifru artikla, varijantu i jedinicu mjere.
Ako je cijena definirana za alternativnu jedinicu mjere, sustav je unosi u dokument, aktivira oznaku "Cijena alternativne jedinice mjere" te preračunava ukupne iznose prema alternativnoj količini.  

Nakon pronalaska cijene, sustav traži i eventualne popuste te cijene po količinskim razredima.
Ako je u kartici "Cjenici" u šifrarniku kupca aktivirana oznaka "Upravljanje cijenama", sustav dodatno provjerava postavke u "Definiciji politika popusta".
Svi pronađeni popusti prikazuju se u zbirci popusta, s naznakom njihova izvora.    

### **Završne napomene**     
Ista logika pretraživanja primjenjuje se i na dokumente s cijenama s PDV-om i bez PDV-a.
Međutim, ako dokument zahtijeva cijene bez PDV-a, pretraga se ograničava samo na takve cjenike, i obrnuto.  

Pažnja: Ako ne postoji važeći cjenik, a u šifrarniku artikala postoji definirana prodajna cijena, ona se koristi kao cijena stavke dokumenta — bez obzira na to je li riječ o cijeni s PDV-om ili bez PDV-a.  
