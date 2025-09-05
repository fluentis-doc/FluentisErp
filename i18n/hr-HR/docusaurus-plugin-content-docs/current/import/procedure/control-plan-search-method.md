Za automatsko pretraživanje *Kontrolnog plana* koji će se povezati s svakim *artiklom* prisutnim u odabranom retku dokumenta, koristi se ova metodologija:    

- za dokumente proizvodnje (*Deklaracije proizvodnje* i *Faze proizvodnih naloga*) uzima se u obzir *Kontrolni plan* naveden u *Fazi*;   
- za ostale dokumente uzima se u obzir konto *Kupca* ili *Dobavljača* povezan s *Tipom dokumenta* i *Datumom dokumenta*;  
s ovim informacijama traži se *Kontrolni plan*, važeći na datum dokumenta i za odabrani *Artikl*, koji će se povezati;  
za svako pretraživanje, ako se *Kontrolni plan* ne pronađe, nastavlja se s sljedećom kombinacijom vrijednosti;  
ako se pronađe više od jednog *Kontrolnog plana*, *Kontrola* će se i dalje unijeti, ali će se morati odabrati koji *Kontrolni plan* povezati među pronađenima;   
redoslijed pretraživanja je sljedeća:   
    - pretraga među *Kontrolnim planovima* *Tipa plana* označenog kao *Tip kontrolog plana* *Tipa Dokumenta za uvoz* prisutnog u *Parametrima kontrole artikla* i konta *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez konta *Kupca* ili *Dobavljača*;   
    - pretraživanje među *Planovima kontrole* ostalih *Tipova plana* koji nisu označeni kao *Tip kontrolnog plana* *Tipa dokumenta za uvoz* prisutnog u *Parametrima kontrole artikla* i konta *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez konta *Kupca* ili *Dobavljača*.   
    - ako nije pronađen, prikazuje se poruka upozorenja, *Kontrola artikla* će se i dalje unijeti, ali bez *Kontrolnog plana*, bez *Testova* koje treba provjeriti, a unosi se oznaka u *Zahtjevima za Kontrolne  planove*.   


