


const personalMovieDB = {
  'count': 0,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('один из последних просмотренных фильмов?', '');
      const b = +prompt('на сколько оцениваете его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    console.log(personalMovieDB);
    if (personalMovieDB.count <= 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      console.log('Вы класический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    };
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      //   let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
      //   if (genres === '' || genres === null) {
      //     console.log(`Вы ввели некоректные данные или не ввели их вовсе.`);
      //     i--;
      //   } else {
      //     personalMovieDB.genres[i - 1] = genres;
      //   }
      // }
      // personalMovieDB.genres.forEach((item, i) => {
      //   console.log(`Ваш любимый жанр ${i + 1} - это ${item}`);
      // });
      let genre = prompt(`Ваш любимый жанр через запятую ${i}`, '').toLowerCase();
      if (genre === '' || genre === null) {
        console.log(`Вы ввели некоректные данные или не ввели их вовсе.`);
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш любимый жанр ${i + 1} - это ${item}`);
    });
  }
};
// function calculateVolumeAndArea(length) {
//   if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     return 'При вычислении произошла ошибка';
//   }

//   let volume = 0,
//     area = 0;

//   volume = length * length * length;
//   area = 6 * (length * length);

//   return `объем =  ${volume}, площадь =  ${area}`;
// }
// console.log(calculateVolumeAndArea(5));




/**Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"*/

// function learnJs(learn, collback) {
//   console.log(`Я учу ${learn}`);
//   collback();
// }

// function done() {
//   console.log(`Неужели получилось вывести результат`);
// }

// console.log(learnJs('Deutsch', done));// done, как аргумент в collback функции 

// const closed = {
//   't_shirt': 2,
//   'jeans': 'thre',
//   'shorts': 'five',
//   'winter': {
//     'jaket': 'one',
//     'boots': 3,
//   },
//   makeTest: function () {
//     console.log(`Выведи функцию`)
//   },
// }
// const { jaket, boots } = closed.winter;
// console.log(jaket); // Выносим свойства и значения из вложенного объекта.Ответ: one
// closed.makeTest();// Вызвали метод(функцию) внутри объекта Ответ: Выведи функцию.
// console.log(Object.keys(closed).length);//Метод key у глобального Object выводит массив с количеством свойств объекта.Ответ: [t_shirt,jeans,shorts,winter];

// for (key in closed) {
//   if (typeof (closed[key]) === 'object') {
//     for (i in closed[key]) {
//       console.log(`Свойство ${i} имеет значение ${closed[key][i]}`)
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${closed[key]}`);
//   }
// }



// const arr = [1, 3, 5, 6, 7, 9];

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// })// Callback function внутри метода Foreach

// for (let value of arr) {
//   console.log(value);
// }
// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const str = prompt('Введите имена гостей, через запятую', '');
// const people = str.split(', ');
// people.sort();// сортирует строки по имени
// console.log(people.join('-'));// выводит в строку элементы массива 

// function compareNum(a, b) {
//   return a - b;
// }
// const arr = [4, 12, 5, 7, 1, 21, 2];

// arr.sort(compareNum);
// console.log(arr);

// let a = 1;
// let b = a;
// b = b + 13;

// console.log(b);
// console.log(a);

//Поверхностное копирование 

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// let numbersObj = {
//   a: 1,
//   b: 4,
//   c: 13,
//   d: {
//     e: 'two',
//     f: 'five'
//   }
// }

// const newNumbers = copy(numbersObj);

// newNumbers.a = 33;// поменяется только в новом массиве
// newNumbers.d.e = 'three';// это в оригинале тоже поменятся
// console.log(newNumbers);
// console.log(numbersObj);


// let numbersObj = {
//   a: 1,
//   b: 4,
//   c: 13,
//   d: {
//     e: 'two',
//     f: 'five'
//   }
// }
// let add = {
//   'Name': 'Yuriy',
//   'Age': 27,
// }

// console.log(Object.assign(numbersObj, add));//соеденили 2 объекта

// let firstObj = {
//   'a': 1,
//   'b': 2,
// }
// const firstObjCopy = Object.assign({}, firstObj);
// firstObjCopy.a = 10;
// console.log(firstObj); // в оригинале ничего не измениться
// console.log(firstObjCopy);// Поменяется значение а на 10


// const array = [1, 3, 54];
// const newArray = array.slice();

// newArray[1] = 'new';

// console.log(array);
// console.log(newArray);

// // Spread 
// const video = ['youtube', 'netflix', 'Megogo'],
//   socia = ['twitter', 'instagramm'],
//   internet = [...video, ...socia, 'VK', 'Telegram'];
// console.log(internet);//выведет 1 совмещенный массив       

// function value(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [1, 2, 3];

// // console.log(value(...num));//выведет 1 2 3 в столбик, как в функции

// const arr = [1, 2, 3];

// // newArray = [...arr];
// // newArray[3] = 12;
// // console.log(newArray);
// // console.log(arr);
// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%'
//     },
//     exp: '1 month'
//   }
// };

// function showExperience(plan) {
//   for (key in plan) {
//     if (typeof (plan[key] === 'object')) {
//       for (i in plan[key]) {
//         return plan.skills.exp
//       }
//     }
//   }
// }
// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//   let str = '';
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//   }

//   return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';
//   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из ';

//   arr.forEach(member => {
//     str += `${member} `;
//   });
//   return str;
// };
// // console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   const str = arr.join(' ').toLowerCase();
//   return str;
// }
// console.log(standardizeStrings(favoriteCities));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(city => {
//     console.log(city.toLowerCase());
//   })
// }
// standardizeStrings(favoriteCities);
// const someSString = 'Hello my name is Yuriy';
// function reverse(str) {
//   if (typeof str !== 'string') {
//     console.log('Ошибка!')
//   } else {
//     return str.split('').reverse().join('');
//   }

// }
// console.log(reverse(someSString));


// const solider = {
//   'health': 400,
//   'armor': 100,
//   sayHello: function () {
//     console.log('Hello');
//   }
// };
// const john = Object.create(solider);//John создает прототип солдата

// // const john = {
// //   'health': 100,
// // };

// Object.setPrototypeOf(john, solider);//от главного солдата берет все свойства.
// console.log(john.sayHello());// Answer: Hello
