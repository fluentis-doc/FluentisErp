Pentru căutarea automată a *Planului de control* care trebuie asociat fiecărui *articol* din linia documentului selectat, se utilizează următoarea procedură:  
- pentru documentele de producție (*Declarații de producție* și *Faze ordin de producție*), se consideră *Planul de control* indicat în *Fază*;  
- pentru celelalte documente se consideră contul *Clientului* sau *Furnizorului* asociat cu *Tipul documentului* și *Data documentului*;  
Cu aceste informații se caută *Planul de control*, valabil la data documentului și pentru *Articolul* selectat, de asociat;  
La fiecare căutare, dacă nu se găsește *Planul de control*, se continuă cu combinația de valori următoare;  
Dacă se găsesc mai multe *Planuri de control*, *Controalele* sunt totuși introduse, dar va trebui să se aleagă care *Plan de control* să fie asociat dintre cele găsite;  
Secvența de căutare este următoarea:  
    - căutare între *Planurile de control* ale *Tipului de plan* indicat ca *Tip de plan de control* al *Tipului de document* pentru import, prezent în *Parametrii controalelor articolului* și contul *Clientului* sau *Furnizorului* documentului și ulterior cele fără cont *Client* sau *Furnizor*;  
    - căutare între *Planurile de control* ale altor *Tipuri de plan* neindicate ca *Tip de plan de control* al *Tipului de document* pentru import, prezent în *Parametrii controalelor articolului* și contul *Clientului* sau *Furnizorului* documentului și ulterior cele fără cont *Client* sau *Furnizor*.  
    - dacă nu este găsit, se va afișa un mesaj de avertizare, *Controlul articolului* este introdus totuși, dar fără *Plan de control*, fără *Teste* de verificat și se va introduce o indicație în *Cereri planuri de control*.
