Za automatsko pretraživanje *Kontrolnog plana* koji će se povezati sa svakim *artiklom* prisutnim u odabranom redu dokumenta, koristi se sledeća metodologija:   

- za proizvodne dokumente (*Izjave o proizvodnji* i *Faza izrade narudžbine*) uzima se u obzir *Kontrolni plan* naveden u *Fazi*;   
- za ostale dokumente uzima se u obzir račun *Kupca* ili *Dobavljača* povezan sa *Vrstom dokumenta* i *Datumom dokumenta*;   
sa tim informacijama pretražuje se *Kontrolni plan*, važeći na datum dokumenta i za odabrani *Artikal*, za povezivanje;   
pri svakom pretraživanju, ako se *Kontrolni plan* ne pronađe, nastavlja se sa sledećom kombinacijom vrednosti;   
ako se pronađe više od jednog *Kontrolnog plana*, *Kontrola* se svejedno unosi, ali će se morati odabrati koji *Kontrolni plan* povezati između pronađenih;   
redosled pretraživanja je sledeći:   
    - pretraživanje među *Kontrolnim planovima* kojima su *Vrste plana* navedene u *Tipu kontrolnog plana* i *Vrste dokumenta* prisutnim u *Parametrima kontrola artikla* i račun *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez računa *Kupca* ili *Dobavljača*;   
    - pretraživanje među *Kontrolnim planovima* ostalih *Vrsta plana* koje nisu navedene u *Tipu kontrolnog plana* i *Vrste dokumenta* prisutnim u *Parametrima kontrola artikla* i račun *Kupca* ili *Dobavljača* dokumenta, a zatim onih bez računa *Kupca* ili *Dobavljača*.   
    - ako nije pronađeno, prikazuje se poruka upozorenja, *Kontrola artikla* se ipak unosi, ali bez *Kontrolnog plana*, bez *Testova* za kontrolu i unosi se naznaka u *Zahteve za kontrolne planove*.   