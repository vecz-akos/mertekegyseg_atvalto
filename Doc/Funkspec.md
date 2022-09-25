# Mértékegység átváltó funkcionális specifikáció

## 1. Áttekintés
Egy olyan rendszert fejlesztünk, ami az eladók munkáját egyszerűsítené. A célunk, hogy ne papír alapon kelljen
az eladóknak mértékegységeket számolni vagy egyéb feladatokat elvégezni, hanem rendelkezésre álljon egy online
felület. Jelenlegi állapotában számítógépen lesz lehetőség használni. Interneten keresztül bárki számára elérhető
és könnyen kezelhető alkalmazás megvalósítására törekszünk. Főbb funkciója a mértékegység átváltás lesz. Az adott
eladó mondjuk egy zöldségesnél kiválaszthattja, hogy milyen mértékegységből mibe szeretné átváltani, amivel így
azzonnal meg fogja kapni az eredményt, amivel időt takarít meg és gyorsítja a munkát.

## 2. Jelenlegi helyzet

A megrendelő szeretné gyorsítani a munkafolyamatot és nem szeretne folyton számolással időt pazarolni
ezzel növelve a vásárlói elégedetségéd és a vásárlók számát. Ennek érdekében keresett meg minket és rendelte meg
egy új rendszer előállítását, amely az internetről bármely munkatárs számára könnyen elérhető és használható. A
megrendelő eddig papíron folytatta a számolással kapcsolatos teendőit és eddig nem használt online felületről
elérhető mértékegység-átváltó alkalmazást. Viszont hamar belátta, hogy egy online átváltó segítségével a számolások
felgyorsíthatók, ezért elkezdett keresni számára és a munkatársai számára is megfelelő átváltót, azonban ezen
megoldások nem nyerték el tetszésüket. Egy olyan programra lenne szükségük, amely képes a gyors számolásra és
emelett átlátható felülettel rendelkezik.

## 3. Vágyálom rendszer

Egy platformfüggetlen webalkalmazás létrehozása, ami könnyen érthető és átlatható egy egyszerű felhasználó számára is. A webalkalmazás alkalmas tömeg mértékegységek átváltására, amennyiben a kívánt tömeget kilogrammba váltjuk, úgy lehetséges egy termék kiválasztásával megkapni a fizetendő összeget, melyekhez külön egységár tartozik. A mértékegységeket egy adatbázisból lehet elérni, amit egyszerűen lehet bővíteni vagy lecserélni a benne lévő adatokat. A weblapon a navigálás egyszerű és nem kell regisztrálni hozzá bárki számára elérhető.

## 4. Követelménylista

 1. K01 - kiválasztható eredet mértékegység, illetve kiválasztható cél mértékegység
 2. K02 - automatikus, gyors átváltás
 3. K03 - Termék kiválasztása
 4. K04 - Hozzá tartozó egységár kilogrammban történő hozzárendelése
 5. k05 - Pontos számítások
 6. K06 - A termékek végösszegének kiírása

## 5. Jelenlegi üzleti folyamatok

A mai világban sok helyen például a kisebb eladók se használják ki az évek alatt létrejött technológiákat, pedig sokban elősegítené a munkafolyamat gyorsítását és egyszereűsítését és ezzel a vásárlók elégedettségét is növelni lehetne, ami újabb vásárlókat vonzana be, mely növelné a kisebb zöldség-gyümölcs árusok bevételét. Mára már a pappíron való számolás elavultnak számít és igen csak sok időt vesz igénybe és ennek érdekében szükség van arra, hogy a pappíron végzett feladatokat átvigyük az online térbe. Az internet segítségével tudnánk az alkalmazottak számára elérhetővé és biztonságossá tenni a munkájukhoz elengedhetetlen átváltásokat és egyébb számolásokat, emellett csökentené a számolásokkor keletkező hibákat például elszámolásokat.

## 6. Igényelt üzleti folyamatok

Azért, hogy egyszerűbbé tegyük az alkalmazottak munkáját, létrehozunk egy platformfüggetlen webalkalmazást, ahol egyszerű és átlátható módon tudják átváltani a mértékegységeket és kiszámolni a végösszeget. Az alkalmazottaknak nem kell azon aggódniuk, hogy rosszul váltanak.

## 7. Használati esetek

 1. Papír helyett online felületen [SI-mértékegységrendszerben](https://hu.wikipedia.org/wiki/SI-m%C3%A9rt%C3%A9kegys%C3%A9grendszer) átváltás.
 2. Új termékek felvétele az adatbázisba
 3. Termékek árának változtatása
 4. Mértékegységek bővítése
 5. Végösszeg kiszámítása

## 8. Fogalomtár

platformfüggetlen:
>egy alkalmazás nem korlátozódik le egy eszközre, hanem több különböző eszközről is használható

SI-mértékegységrendszer:
>A Nemzetközi Mértékegységrendszer, röviden SI, modern, nemzetközileg elfogadott mértékegységrendszer, amely néhány kiválasztott mértékegységen, illetve a 10 hatványain alapul.
