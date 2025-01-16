// TASK-T:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;

  
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

 
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray;
}


console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));


/** TASK-S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2


function missingNumber(arr) {
  
  const n = arr.length;
  
  
  const expectedSum = (n * (n + 1)) / 2;
  

  const actualSum = arr.reduce((sum, num) => sum + num, 0);
 
  return expectedSum - actualSum;
}


console.log(missingNumber([3, 0, 1]));  
**/

/** TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
function calculate(str) {
  
  const numbers = str.split(' + ').map(Number);  
  
  return numbers[0] + numbers[1];
}
console.log(calculate("1 + 3")); 
**/

/**TASK-Q:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false
// function hasProperty(obj, prop) {
//   return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));  
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));
 **/

/**TASK-P:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({a: 10, b: 20}));
**/

/** TASK-O:

 Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
 MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr) {
   return arr.reduce((sum, item) => {
      
       if (typeof item === 'number') {
           return sum + item;
       }
      
       if (item === true) {
           return sum + 1;
       }
       
       if (typeof item === 'string' && !isNaN(item)) {
           return sum + Number(item);
       }
       
       if (typeof item === 'object' && item !== null && 'son' in item) {
           return sum + item.son;
       }
       return sum; 
   }, 0);
}

console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 
**/

/** TASK-N: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(str) {
   
   let cleanedStr = str.toLowerCase().replace(/\s+/g, '');
   
   
   let reversedStr = cleanedStr.split('').reverse().join('');
   
   
   return cleanedStr === reversedStr;
}


console.log(palindromCheck("dad"));  
console.log(palindromCheck("son")); 
**/

/** TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

function getSquareNumbers(arr) {
   return arr.map(num => ({
     number: num,
     square: num * num
   }));
 }

 console.log(getSquareNumbers([1, 2, 3]));
 **/

/** TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(str) {
  
   let words = str.split(' ');
   
   
   let reversedWords = words.map(word => word.split('').reverse().join(''));
   
  
   return reversedWords.join(' ');
}

console.log(reverseSentence("we like coding!"));
 **/

/**TASK K: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

function countVowels(str) {
   
   const vowels = "aeiouAEIOU";
   
   
   let count = 0;
   
   for (let i = 0; i < str.length; i++) {
     if (vowels.includes(str[i])) {
       count++;
     }
   }
 
   return count;
 } 

 console.log(countVowels("string")); 
**/

/**  TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!" javascript 

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda


function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("I came from Uzbekistan!"));
 **/

/**  TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

function majorityElement(arr) {
   const countMap = {};

   for (const num of arr) {
       countMap[num] = (countMap[num] || 0) + 1;
   }

   let maxCount = 0;
   let majorityElement = arr[0];

   for (const num in countMap) {
       if (countMap[num] > maxCount) {
           maxCount = countMap[num];
           majorityElement = Number(num);
       }
   }

   return majorityElement;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
 **/

/** H2-TASK: 

 Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
 MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(str) {
    return str.replace(/\D/g, '');
}

console.log(getDigits("m14i1t")); 
 **/

/** H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr) {
    
    return arr.filter(num => num > 0).map(num => num.toString()).join('');
}

console.log(getPositive([1, -4, 2]));  **/

/** TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

function getHighestIndex(arr) {
    
    let highestValue = Math.max(...arr);
    
    return arr.indexOf(highestValue);
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); 
 **/

/** project standards:
    - logging standards
    -Naming standards
       function, method, variable => CAMEL case      goHome 
       class => PASCAL                               MemberService
       folder => KEBAB
       css => SNAKE                                  button_style
    _Error handling */

/*Tradional Api
    Rest Api
    GraphQL Api
    ...
     **/

// /*Request
// Traditional
// Rest Api
// GraphQl
// ...

// Frontend Development:
// Tradional FD  => SSR => EJS
// Modern FD  => SPA => REACT

// Cookies:
// request join
// self destory

// */

// /* Validation lar 4ga (:)
// Fronted validation
// Pipe validation ====>>> Burak loyihasida ishlatilmaydi
// Backend validation
// Database validation

// */
