// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


function getHighestIndex(arr) {
    
    let highestValue = Math.max(...arr);
    
    return arr.indexOf(highestValue);
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); 






// Compiled Language: Java, GoLang, C, C++, C#, Rust => kompyutr tuliq mashina tiliga ugiriladi & Running
// (xatolik tezda aniq buladi va Run qilib utirilmiydi)


// Interpreted Language: NodJS, Python, PHP, Ruby => jarayon soda tugridan tugri Running
// ( minus taraflari mavjud xatolarni kurishda)

//typescript= javascript+typescript 

//interface 
// interface Person {
//     name: string,
//     age: Number,
//     nation: string
// }

// const person: Person ={
//     name: 'Martin',
//     age: 30,
//     nation: 'Australian'
// }

// let skills: (number | string) [];
// skills = ['Problem Sovling', 'Software Design','Programming', 100];


// class Person {
//     age: Number;
//     firstName: string;
//     lastName: string;

//     constructor(age: number, firstName: string, lastName: string) {
//         this.age = age;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person(30, 'Martin', 'Robertson');










/*// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//     let count = 0;
    
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countLetter("e", "engineer"));  
*/

// B-Task

// function countDigits(soz) {
//     let javob = 0;
//     for (const i of soz) {
//         if (!isNaN(i)) {
//             javob += 1;
//         }
//     }
//     return javob;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));




// MITASK-C

// class Shop {
 
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

    
//     qoldiq() {
//         const currentTime = new Date().toLocaleTimeString(); // Hozirgi vaqtni olish
//         console.log(`Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }

    
//     sotish(mahsulot, miqdor) {
//         if (mahsulot === 'non') {
//             if (this.non >= miqdor) {
//                 this.non -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli non yo\'q!');
//             }
//         } else if (mahsulot === 'lagmon') {
//             if (this.lagmon >= miqdor) {
//                 this.lagmon -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli lagmon yo\'q!');
//             }
//         } else if (mahsulot === 'cola') {
//             if (this.cola >= miqdor) {
//                 this.cola -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli cola yo\'q!');
//             }
//         } else {
//             console.log('Bunday mahsulot mavjud emas!');
//         }
//     }

  
//     qabul(mahsulot, miqdor) {
//         if (mahsulot === 'non') {
//             this.non += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else if (mahsulot === 'lagmon') {
//             this.lagmon += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else if (mahsulot === 'cola') {
//             this.cola += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else {
//             console.log('Bunday mahsulot mavjud emas!');
//         }
//     }

    
//     logAction(amal, mahsulot, miqdor) {
//         const currentTime = new Date().toLocaleTimeString(); 
//         console.log(`${amal} qilindi: ${mahsulot} ${miqdor}ta. Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }
// }



// D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true

// function checkContent(str1, str2) {

//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(checkContent("mitgroup", "gmtiprou"));  // true buladi
// console.log(checkContent("hello", "world"));        // false buladi



// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function getReverse(s) {
//     return s.split('').reverse().join('');
// }

// console.log(getReverse("hello")); 


// TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.
// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// function findDoublers(s) {
    
//     let seen = new Set();

    
//     for (let char of s) {
       
//         if (seen.has(char)) {
           
//             return true;
//         }
//         seen.add(char);
//     }
//         return false;
// }
// console.log(findDoublers("hello"));

// console.log(findDoublers("abc")); 


