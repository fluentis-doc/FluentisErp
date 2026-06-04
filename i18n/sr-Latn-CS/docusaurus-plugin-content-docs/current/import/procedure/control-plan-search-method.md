Za automatsko pretraživanje *Kontrolnog plana* koji će se povezati sa svakim *artiklom* prisutnim u odabranom retku dokumenta, koristi se sljedeća metodologija:   

- za proizvodne dokumente (*Izjave o proizvodnji* i *Faza izrada narudžbe*) uzima se u obzir *Kontrolni plan* naveden u *Fazi*;   
- za ostale dokumente uzima se u obzir račun *Kupca* ili *Dobavljača* povezan s *Vrstom dokumenta* i *Datumom dokumenta*;   
s tim informacijama pretražuje se *Kontrolni plan*, važeći na datum dokumenta i za odabrani *Artikl*, za povezivanje;   
pri svakom pretraživanju, ako se *Kontrolni plan* ne pronađe, nastavlja se sa sljedećom kombinacijom vrijednosti;   
ako se pronađe više od jednog *Kontrolnog plana*, *Kontrola* se svejedno unosi, ali će se morati odabrati koji *Kontrolni plan* povezati između pronađenih;   
redoslijed pretraživanja je sljedeći:   
    - pretraživanje među *Kontrolnim planovima* kojima su *Vrste plana* navedene u *Tipu kontrolnog plana* i *Vrste dokumenta* prisutnim u *Parametrima kontrola artikla* i račun *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez računa *Kupca* ili *Dobavljača*;   
    - pretraživanje među *Kontrolnim planovima* ostalih *Vrsta plana* koje nisu navedene u *Tipu kontrolnog plana* i *Vrste dokumenta* prisutnim u *Parametrima kontrola artikla* i račun *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez računa *Kupca* ili *Dobavljača*.   
    - ako nije pronađeno, prikazuje se poruka upozorenja, *Kontrola artikla* se ipak unosi, ali bez *Kontrolnog plana*, bez *Testova* za kontrolu i unosi se naznaka u *Zahtjeve za kontrolne planove*.   


