console.log("hillo world!");

// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr) {
    
    return arr.filter(num => num > 0).map(num => num.toString()).join('');
}

console.log(getPositive([1, -4, 2])); 




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
