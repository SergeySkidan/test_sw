import React, { Component } from 'react';
import banner from './images/banner.png';
import Header from './images/Header.png';

import Question from './images/Question.png';
import services from './images/services.png';
import Portfolio from './images/Portfolio.png';
import Contact from './images/Contact.png';
import Footer from './images/Footer.png';
import ReactAnimation from './components/ReactAnimation/ReactAnimations'
import ImageCarousel from './components/RecipeTest/ImageCarousel'
import background from './images/background.png'
import TablMendeleev from './components/TablMendeleev/TablMendeleev'


import './App.css';
import Menu from "./components/RecipeTest/Menu";
import dataRecipe from "./components/RecipeTest/DataRecipe";
import Timer from './components/Timer';
import Forum from "./components/Forum/forum";

class App extends Component {
  render() {
    return (
      <div className="App">

      <img src={Header} className="header" alt="Header" />
      <img src={banner} className="banner" alt="banner" />
      <img src={Question} className="question" alt="question" />
      <img src={services} className="services" alt="services" />
      <img src={Portfolio} className="portfolio" alt="Portfolio" />
      <img src={Contact} className="contact" alt="Contact" />
      <img src={Footer} className="footer" alt="Footer" />

      <img src={background} className="test" alt="background" />
{/*<div className={'test'}>*/}
    {/*CSS Grid Layout — это самый мощный инструмент для создания разметки, который доступен в CSS на сегодняшний день. Это двумерная система, которая может содержать строки и столбцы (в отличие от модуля Flexbox, который в целом является одномерной системой). Предназначение Grid Layout — полностью изменить способ проектирования пользовательских интерфейсов, дизайн которых основан на сетке.*/}
    {/*Да, с помощью CSS всегда можно было создать макет, но каждый подход имеет свои недостатки и, по сути, является хаком. Сначала для верстки использовались таблицы, затем float’ы, позиционирование и inline-block… Данные инструменты не были разработаны специально для создания колоночных макетов, и многие необходимые функции были недоступны (например, вертикальное центрирование). Решение практически каждой проблемы приравнивалось к «танцу с бубном».*/}
    {/*Модуль Flexbox отчасти облегчил задачу веб-разработчикам, но всё же он больше подходит для создания простых одномерных макетов, а не сложных двумерных (кстати, Flexbox и Grid отлично работают в паре). Grid — это первый CSS-модуль, созданный специально для разработки полноценных макетов и устранения проблем, которые мы долгое время решали обходными путями.*/}
    {/*CSS Grid Layout — это самый мощный инструмент для создания разметки, который доступен в CSS на сегодняшний день. Это двумерная система, которая может содержать строки и столбцы (в отличие от модуля Flexbox, который в целом является одномерной системой). Предназначение Grid Layout — полностью изменить способ проектирования пользовательских интерфейсов, дизайн которых основан на сетке.*/}
    {/*Да, с помощью CSS всегда можно было создать макет, но каждый подход имеет свои недостатки и, по сути, является хаком. Сначала для верстки использовались таблицы, затем float’ы, позиционирование и inline-block… Данные инструменты не были разработаны специально для создания колоночных макетов, и многие необходимые функции были недоступны (например, вертикальное центрирование). Решение практически каждой проблемы приравнивалось к «танцу с бубном».*/}
    {/*Модуль Flexbox отчасти облегчил задачу веб-разработчикам, но всё же он больше подходит для создания простых одномерных макетов, а не сложных двумерных (кстати, Flexbox и Grid отлично работают в паре). Grid — это первый CSS-модуль, созданный специально для разработки полноценных макетов и устранения проблем, которые мы долгое время решали обходными путями.*/}
    {/*CSS Grid Layout — это самый мощный инструмент для создания разметки, который доступен в CSS на сегодняшний день. Это двумерная система, которая может содержать строки и столбцы (в отличие от модуля Flexbox, который в целом является одномерной системой). Предназначение Grid Layout — полностью изменить способ проектирования пользовательских интерфейсов, дизайн которых основан на сетке.*/}
    {/*Да, с помощью CSS всегда можно было создать макет, но каждый подход имеет свои недостатки и, по сути, является хаком. Сначала для верстки использовались таблицы, затем float’ы, позиционирование и inline-block… Данные инструменты не были разработаны специально для создания колоночных макетов, и многие необходимые функции были недоступны (например, вертикальное центрирование). Решение практически каждой проблемы приравнивалось к «танцу с бубном».*/}
    {/*Модуль Flexbox отчасти облегчил задачу веб-разработчикам, но всё же он больше подходит для создания простых одномерных макетов, а не сложных двумерных (кстати, Flexbox и Grid отлично работают в паре). Grid — это первый CSS-модуль, созданный специально для разработки полноценных макетов и устранения проблем, которые мы долгое время решали обходными путями.*/}
    {/*CSS Grid Layout — это самый мощный инструмент для создания разметки, который доступен в CSS на сегодняшний день. Это двумерная система, которая может содержать строки и столбцы (в отличие от модуля Flexbox, который в целом является одномерной системой). Предназначение Grid Layout — полностью изменить способ проектирования пользовательских интерфейсов, дизайн которых основан на сетке.*/}
    {/*Да, с помощью CSS всегда можно было создать макет, но каждый подход имеет свои недостатки и, по сути, является хаком. Сначала для верстки использовались таблицы, затем float’ы, позиционирование и inline-block… Данные инструменты не были разработаны специально для создания колоночных макетов, и многие необходимые функции были недоступны (например, вертикальное центрирование). Решение практически каждой проблемы приравнивалось к «танцу с бубном».*/}
    {/*Модуль Flexbox отчасти облегчил задачу веб-разработчикам, но всё же он больше подходит для создания простых одномерных макетов, а не сложных двумерных (кстати, Flexbox и Grid отлично работают в паре). Grid — это первый CSS-модуль, созданный специально для разработки полноценных макетов и устранения проблем, которые мы долгое время решали обходными путями.*/}

{/*</div>*/}

<TablMendeleev/>

<div className={'animation'}>
    <ReactAnimation/>
</div>

<div className={'image_carousel'}>
    <ImageCarousel/>
</div>

<div className={"react-test-component"}>
     <Menu recipes={dataRecipe} title="Delicious Recipes" />
</div>


<div className={'timer'}>
    <Timer/>
</div>


<Forum/>


      </div>
    );
  }
}

export default App;
