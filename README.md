# gra-wielkanocna

### Członkowie
- Paweł Kusznieruk
-  Jakub Wróblewski
-  Bartosz Bartocha
- Magdalena Zambrzycka
- Dawid Lesz



## Opis gry

Gra przeglądarkowa stworzona w Javascript. Polega na łapaniu wielkanocnych jajek przez wielkanocnego królika.
### Możliwe są różne modyfikacje trybów gry
 - prędkość królika
 - prędkość spadania jajek
 - ilość żyć
 - odstęp między pojawieniem nowych jajek
 - włączenie / wyłączenie muzyki
 
 #### Królik
 Poruszanie królikiem odbywa się przez klikanie strzałek (lewa i prawa)
#### Jajka
Jajka renderują się w losowym miejscu oraz o losowej teksturze
#### Życia
Każde niezłapane jajko zabiera jedno życie. Życia są wyświetlane w prawym górnym rogu
#### Licznik czasu
W lewym górnym rogu wyświetla się licznik czasu ile trwa już runda
#### Punkty
Każde złapanie jaka dodaje punkt. Punkty wyświetlane są na środku góry ekranu
#### Muzyka
Możliwe jest włączenie lub wyłączenie muzyki
#### Pauza gry
Klikając klawisz "Escape" można wstrzymać oraz kontynuować grę

#### Dźwięki
 - złapanie, niezłapanie jajka gra dźwięk
 - jeżeli graczowi pozostanie 1 życie słychać sygnał
 - przegrana odtwarza dźwięk

### Zapisywanie wyników
 - każda runda zapisuje się  do local storage.
- na stronie głównej wyświetlane są wyniki w postaci tabeli

| Szybkość królika               |Szybkość jajek|Liczba żyć           |Wynik|Prędkość tworzenia nowych jaj|Czas gry| Data              |
|----------------|-------------------------------|-----------------------------| -|-|-|-
|Normalny|Normalny            |3|32|1.5|9.729|3/17/2024, 9:42:33 PM
 - gracz może wyczyścić wynki

### Uruchomienie gry
Uruchom liveserver z visual studio code w głównym folderze projektu
