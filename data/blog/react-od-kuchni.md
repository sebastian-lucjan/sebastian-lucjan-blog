---
title: React od kuchni - komponenty, jsx, key
date: '2021-09-23'
tags: ['react', 'core']
draft: false
summary: React od kuchni
layout: PostSimple
---

## Przedwstęp

W filmie Matrix reaktywacja Neo prowadzi nocną rozmowę z radnym Hamannem

Neo: Dlaczego nie powiesz mi, co masz na myśli?

Radny Hamann: Na tym świecie jest tyle rzeczy, których nie rozumiem. Widzisz tę maszynę? Ma to coś wspólnego z recyklingiem naszego zaopatrzenia w wodę. Absolutnie nie mam pojęcia, jak to działa. Ale rozumiem powód, dla którego to działa. Absolutnie nie mam pojęcia, jak jesteś w stanie robić niektóre z tych rzeczy, ale wierzę, że jest ku temu powód. Mam tylko nadzieję, że zrozumiemy ten powód, zanim będzie za późno.

Mam wrażenie, że z każdym tygodniem biblioteki, narzędzia, frameworki jakich używamy stają się coraz wygodniejsze i bardziej przyjazne w użytkowaniu. Nowe abstrakcje w które opakowywane zostają funkcjonalności ułatwiają nam rozumienie i pisanie kodu oddalając od implementacji autorów. Powoli zbliżamy się do momentu w którym będziemy pisać kod który robi rzecz A i B ale mało kto będzie wiedział jak to robi. Czy ta perspektywa jest zła? W mojej ocenie nie. Kiedyś używano palców do liczenia... skończyły się palce skończoło się liczenie, gdzieś dalej w historii pojawiły się liczydła które w swej konstrukcji były zrozumiałe dla większości użytkowników. Następnie nadeszły kalkulatory dla których poziom zrozumienia spadł drastycznie ale możliwości obliczeniowe człowieka jako jednostki wzrosły nieprawdopodobnie. Najnowsze rozwiązania takie jak aplikacje do skanowania zadań które po chwili podają odpowiedź dla większości użytkowników noszą znamiona magii, a dla pełnego zrozumienia jak działa taka aplikacjia trzeba by pewnie wielu godzin wgłębiania się w kod którego znaczenia pewnie nie pamięta część z jego autorów.

W mojej skromnej ocenie frontend jest gdzieś na granicy liczydła i kalkulatora. Tak więc, póki jeszcze rozumiemy jak działa maszyna zwana "Frontend" to postarajmy się ją rozumieć przynajmniej w podstawowym stopniu. Artykuł ten napisałem po to żeby przybliżyć Cię do zrozumienia czym jest React i co kryje pod swoją "maską".

## Wstęp

React jest biblioteką języka JavaScript służącą do tworzenia dynamicznych interfejsów użytkownika (UI). Odpowiedzialny jest za warstwę prezentacyjną aplikacji, czyli V (view) w modelu MVC, ale czym tak naprawdę jest React, z czego się składa i co znajduje się pod spodem? Na te właśnie pytania postaram się udzielić odpowiedzi w tym artykule.

## ( React + ReactDOM ) =  React

W celu rozpoczęcia pracy z Reactem potrzebujesz dwóch paczek: "react" i "react-dom" oraz elementu zaczepienia w strukturze DOM twojej aplikacji.

Przykładowy kod mógłby wyglądać w taki sposób:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/Root';

ReactDOM.render( <App />, document.getElementById('root'));
```

Do wersji 0.13 włącznie, React posiadał tylko jedną paczkę "React", która posiadała metody odpowiedzialne za logikę związaną z renderowaniem oraz metody powiązane z componentami.

Poniżej znajdziesz kod z pierwszego slajdu z pokazanego przez Jordana Walke na "Intruduction to React.js" na "Facebook Seatle" w 2013r. Obrazuje on sposób rozpoczęcia pracy z wtedy nową biblioteką oraz sposób implementacji nowej składni o nazwie JSX (w poniższym slajdzie: div i span).

```jsx
//JSX
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

Spojrzyjmy zatem w trochę nowszy kod i przykładowy komponent "Message":

```jsx
import React from 'react';

const Message = () => (
	<div class="hello" onClick={someFunc}>
		<p>Hello World</p>
	</div>
)

ReactDOM.render(<Message/>, document.getElementById('root'));
```

W powyższym przykładzie paczka ReactDOM udostępnia metodę "render". ReactDOM.render() kontroluje zawartość podanego węzła kontenera (element w strukturze html posiadający w tym przypadku id: "root"). Po pierwszym wywołaniu zastępowane są wszystkie elementy DOM wewnątrz niego. ReactDOM.render() nie modyfikuje węzła kontenera jedynie jego elementy potomne, jeśli do osadzenia kodu Reacta w aplikacji użyjesz węzła posiadającego potomstwo, zostanie one utracone a następnie dodany komponent Message.

## JSX

Komponent Message w powyższym przykładzie zwraca JSX który w swej formie do złudzenia przypomina html, jest to rozszerzenie składni JavaScript o możliwość wstawiania znaczników. Jednak aby JSX mógł zostać wyświetlony np.: w Twojej przeglądarce musi zostać przetranspilowany do przystępnej dla środowiska uruchomieniowego formy czyli do wywołań funkcji.

Do bardzo niedawna wyglądałby to w taki sposób:

```jsx
//zmienna element do której przypisano JSX
const element = (
  <h1 className="greeting">
    Witaj, świecie!
  </h1>
);

//równoważny kod który jest zrozumiały dla przeglądarki
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Witaj, świecie!'
);
```

Wywołana metoda createElement przyjmuje w tym przypadku 3 argumenty:

- tag - h1
- obiekt atrybutów - className
- elementy potomne - w tym przypadku string "Witaj, świecie!"

Funkcja React.createElement wykonuje kilka sprawdzeń by ostatecznie zwrócić zwykły obiekt:
W delikatnym uproszczeniu taki obiekt wyglądałby w taki sposób:

```jsx
const element = {
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
//zmienna element do której przypisano JSX
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

Właściwość "children" została przeniesiona i nie jest bezpośrednim parametrem funkcji jsx tylko została "wciągnięta" jako właściwość drugiego parametru funkcji jsx jakim jest obiekt z atrybutami i ich wartościami.

Import `jsx` z `react/jsx-runtime` odbywa się automatycznie nie musisz w żadnym razie sam pisać dodatkowej linii kodu, mało tego przy takiej transformacji JSX nie jest potrzebny `import React from 'react'`.

Żeby trochę jeszcze namieszać `jsx` nie jest jedyną metodą udostępnianą przez  `react/jsx-runtime` .
W powyższym przykładzie jako children zostaje przekazany string o wartości `'Witaj, świecie!'`.

W przypadku większej ilości dzieci do właściwości children zostałaby przekazana tablica z dziećmi, w takim przypadku zamiast metody `jsx` dla takiego elementu została by użyta metoda `jsxs` a w przypadku użycia React.Fragment (<></>) `Fragment`.

Tak więc JSX transpilowany jest do wymowań funkcji których efektem są zwykłe obiekty. Jak wykorzystywane są takie obiekty, wyjaśnię w cz.II artykułu. W niej zostaną poruszone między innymi tematy rekoncyliacji i parametr "key" dlaczego React się tak o niego dopomina.
