---
title: React od kuchni - komponenty, jsx, key
date: '2021-09-23'
tags: ['react', 'core']
draft: false
summary: React od kuchni
layout: PostSimple
---

### Przedwstęp (nieobowiązkowy)

<details>
<summary>...</summary>

  W filmie Matrix Reaktywacja, Neo prowadzi nocną rozmowę z radnym Hamannem:

  **Neo:** Dlaczego nie powiesz mi, co masz na myśli?

  **Radny Hamann:** Na tym świecie jest tyle rzeczy, których nie rozumiem. Widzisz tę maszynę? Ma to coś wspólnego z recyklingiem naszego zaopatrzenia w wodę. Absolutnie nie mam pojęcia, jak to działa. Ale rozumiem powód, dla którego to działa. Absolutnie nie mam pojęcia, jak jesteś w stanie robić niektóre z tych rzeczy, ale wierzę, że jest ku temu powód. Mam tylko nadzieję, że zrozumiemy ten powód, zanim będzie za późno.

  Mam wrażenie, że z każdym tygodniem biblioteki, narzędzia, frameworki jakich używamy stają się coraz wygodniejsze i bardziej przyjazne w użytkowaniu. Nowe abstrakcje w które opakowywane zostają funkcjonalności ułatwiają nam rozumienie i pisanie kodu oddalając od implementacji autorów. Powoli zbliżamy się do momentu w którym będziemy pisać kod który robi rzecz A i B ale mało kto będzie wiedział jak to robi.

  Czy ta perspektywa jest zła? W mojej ocenie nie. Kiedyś używano palców do liczenia... skończyły się palce skończyło się liczenie. Gdzieś dalej w historii pojawiły się liczydła które w swej konstrukcji były zrozumiałe dla większości użytkowników. Następnie nadeszły kalkulatory dla których poziom zrozumienia spadł drastycznie, za to możliwości obliczeniowe człowieka jako jednostki wzrosły nieprawdopodobnie. Najnowsze rozwiązania, takie jak aplikacje do skanowania zadań które po chwili podają odpowiedź, dla większości użytkowników noszą znamiona magii.  Natomiast dla pełnego zrozumienia jak działa taka aplikacja, trzeba by pewnie wielu godzin wgłębiania się w kod, którego znaczenia pewnie nie pamięta część z jego autorów.

  W mojej skromnej ocenie frontend jest gdzieś na granicy liczydła i kalkulatora. Tak więc, póki jeszcze rozumiemy jak działa maszyna zwana "Frontend" to postarajmy się ją rozumieć przynajmniej w podstawowym stopniu. Artykuł ten napisałem po to żeby przybliżyć Cię do zrozumienia czym jest React i co kryje pod swoją "maską".

  W pierwszej części cyklu "React od kuchni" porozmawiamy o paczkach reactowych, oraz o JSX.
</details>

## Wstęp

React jest biblioteką języka JavaScript służącą do tworzenia dynamicznych interfejsów użytkownika (UI). Odpowiedzialny jest za warstwę prezentacyjną aplikacji, czyli V (view) w modelu MVC, ale z czego się składa i co znajduje się pod spodem? Na te właśnie pytania postaram się udzielić odpowiedzi w tym artykule.

## ( React + ReactDOM ) =  React

Tworząc aplikacje webowe, w celu rozpoczęcia pracy z Reactem potrzebujesz dwóch paczek: "react" i "react-dom" oraz elementu zaczepienia w strukturze DOM twojej aplikacji. Z paczki 'react' zaimportować możesz wszystkie rzeczy związane z tworzeniem komponentów i zarządzaniem ich stanem, jednak sam React nie jest świadomy czegoś takiego jak DOM. Do użycia Reactowych struktur danych do operacji na DOMie potrzebny będzie renderer jakim w przypadku przeglądarki będzie ReactDOM udostępniony przez paczkę 'react-dom'.
 
Przykładowy kod mógłby wyglądać w taki sposób:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/Root';

ReactDOM.render( <App />, document.getElementById('root'));
```

Kiedyś wyglądało to trochę inaczej. Do wersji 0.13 włącznie, React posiadał tylko jedną paczkę "React", która posiadała metody odpowiedzialne za logikę związaną z renderowaniem oraz metody powiązane z komponentami.

Poniżej znajdziesz kod z pierwszego slajdu pokazanego przez Jordana Walke w prezentacji "Intruduction to React.js" podczas "Facebook Seatle" w 2013r. Obrazuje on sposób rozpoczęcia pracy z ówcześnie raczkującą biblioteką oraz sposób implementacji nowej składni o nazwie JSX (w poniższym slajdzie: div i span).

```jsx:JSX
var React = require('React');

var message = 
	<div class="hello" onClick={someFunc}>
		<p>Hello World</p>
	</div>

React.renderComponent(message, document.body);

//JSX pod spodem (2013r)
var message = 
	React.DOM.div({className: 'hello', onClick: someFunc}, [
		React.DOM.p(null, ['Hello World'])
	]});
```

Dopiero w 2015 r. React został podzielony na dwie paczki. 'react-dom' i 'react'.

Spójrzmy zatem w trochę nowszy kod i przykładowy komponent "Message":

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Message = () => (
	<div class="hello" onClick={someFunc}>
		<p>Hello World</p>
	</div>
)

ReactDOM.render(<Message/>, document.getElementById('root'));
```

W powyższym przykładzie paczka ReactDOM udostępnia metodę "render". ReactDOM.render() renderuje element reactowy do drzewa DOM, kontroluje zawartość podanego węzła kontenera (element w strukturze html posiadający w tym przypadku id: "root"). Po pierwszym wywołaniu zastępowane są wszystkie jego potomne elementy. ReactDOM.render() nie modyfikuje węzła kontenera, a jedynie jego elementy potomne. Jeśli do osadzenia kodu Reacta w aplikacji użyjesz węzła posiadającego potomstwo, zostanie one utracone a następnie dodany komponent Message.

## JSX

Komponent Message w powyższym przykładzie zwraca JSX który w swej formie do złudzenia przypomina html. Jest to rozszerzenie składni JavaScript o możliwość wstawiania znaczników. Jednak aby JSX mógł zostać wyświetlony np. w Twojej przeglądarce musi zostać przetranspilowany do przystępnej dla środowiska uruchomieniowego formy, czyli w tym przypadku do wywołań funkcji.

Do bardzo niedawna wyglądałoby to w taki sposób:

```jsx
//JSX na przykładzie komponentu Element
const Element = (
  <h1 className="greeting">
    Witaj, świecie!
  </h1>
);

//równoważny kod który jest zrozumiały dla przeglądarki
const Element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Witaj, świecie!'
);
```

Wywołana metoda createElement przyjmuje w tym przypadku 3 argumenty:

- tag - "h1"
- obiekt atrybutów - "className"
- elementy potomne - w tym przypadku string "Witaj, świecie!"

Funkcja React.createElement wykonuje kilka sprawdzeń na przekazanych argumentach by ostatecznie zwrócić zwykły obiekt.
W delikatnym uproszczeniu taki obiekt wyglądałby w taki sposób:

```jsx
const Element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Witaj, świecie'
  }
};
```

Takie obiekty ReactDOM używa do skonstruowania drzewa DOM jak również do wprowadzania w nim aktualizacji.

Kilka akapitów wcześniej napisałem, że tak wyglądała do niedawna transformacja JSX, więc jak wygląda to dzisiaj? Ogólne założenia są takie same, więc jeśli rozumiesz powyższy schemat zamiany kodu JSX na interpretowany dla przeglądarki zrozumiesz i ten wprowadzony w wersji 17 Reacta.

```jsx
//JSX na przykładzie komponentu Element
const Element = (
  <h1 className="greeting">
    Witaj, świecie!
  </h1>
);

//React 17 - równoważny kod który jest zrozumiały dla przeglądarki 
import {jsx as _jsx} from 'react/jsx-runtime';

const Element = _jsx(
  'h1',
  { 
		className: 'greeting',
		children: 'Witaj, świecie!'
	},
);
```

Od 17 wersji React, w większości przypadków nie ma potrzeby importowania obiektu React w pierwszej linii kodu w celu użycia składni JSX ( ten import jest zbędny → `import React from 'react'`). Metody odpowiedzialne za transformację JSX importowane są automatycznie i ukazują nam się dopiero w przetranspilowanym kodzie, tak więc linii `import {jsx as _jsx} from 'react/jsx-runtime';` nie musisz w żadnym razie pisać samemu. Takie uproszczenie dotyczy jedynie składni JSX jeśli chcesz używać innych eksportów od Reacta albo hooków dalej musisz je zaimportować z paczki `'react'`.

Właściwość "children" nie jest już bezpośrednim parametrem jak było to w przypadku React.createElement(). W metodzie jsx została "wciągnięta" jako właściwość drugiego parametru funkcji jsx jakim jest obiekt z atrybutami i ich wartościami.

Żeby trochę jeszcze namieszać `jsx` nie jest jedyną metodą udostępnianą przez  `react/jsx-runtime` .
W powyższym przykładzie jako children zostaje przekazany string o wartości `'Witaj, świecie!'`.

W przypadku większej ilości dzieci do właściwości children zostałaby przekazana tablica z dziećmi. W takim przypadku zamiast metody `jsx` dla takiego elementu zostałaby użyta metoda `jsxs` a w przypadku użycia React.Fragment (<></>) `Fragment`.

Podsumowując z tego artykułu dowiedziałeś się o tym czym jest React,z jakich paczek się składa oraz czym jest JSX, jak odbywa się jego transpilacja i jaki jest jej ostateczny efekt z którym jest w stanie poradzić sobie przeglądarka.

W II artykule z serii React od kuchni wyjaśnię co dzieje się z JSX po "zamianie" na obiekty, czym jest rekoncyliacja i parametr "key" oraz dlaczego React się tak o niego dopomina.

Webografia:

- dokumentacja React
- react.js/blog
- kod node_modules → react
- materiały archiwalne z prezentacji Reacta z YouTube → Facebook Developers, JSConf
