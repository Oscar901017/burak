// TASK K: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

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
 













// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!" javascript 

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda


// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (let word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
  
//   console.log(findLongestWord("I came from Uzbekistan!"));
  



// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr) {
//    const countMap = {};

//    for (const num of arr) {
//        countMap[num] = (countMap[num] || 0) + 1;
//    }

//    let maxCount = 0;
//    let majorityElement = arr[0];

//    for (const num in countMap) {
//        if (countMap[num] > maxCount) {
//            maxCount = countMap[num];
//            majorityElement = Number(num);
//        }
//    }

//    return majorityElement;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));



/* project standards:
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
     */

// console.log("hillo world!");
// // H2-TASK: 

// // Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// // MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(str) {
//     return str.replace(/\D/g, '');
// }

// console.log(getDigits("m14i1t")); 




// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr) {
    
//     return arr.filter(num => num > 0).map(num => num.toString()).join('');
// }

// console.log(getPositive([1, -4, 2])); 




// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(arr) {
    
//     let highestValue = Math.max(...arr);
    
//     return arr.indexOf(highestValue);
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); 
