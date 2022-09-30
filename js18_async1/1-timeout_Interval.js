//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//? WepApı sayesinde destekler

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------


// const bekle = (waitingTime) => {

//     const startTime = new Date().getTime();

//     while (new Date().getTime() < startTime + waitingTime) {
        
//     }

// }

// console.log("Hello");

// // alert("CW") //? Bloking code  neden çünkü çalışmayı kesti codumuzun

// console.time("timer"); //? code başlangıc

// bekle(3000); //? bloking code

// console.timeEnd("timer"); //? code finish

// console.log("FS-12");




//* Asenkron (setTimeout)
//* ------------------------------------------------

// //? callback function ve settime parametresi alır

// console.log("Timeout");
// setTimeout(() => {

// }, 2000); //? none bloking

// setTimeout(() => {

// }, 5000); //? none bloking
// console.log("Timeout bitti");




//* Asenkron (setInterval, clearInterval)
//* ------------------------------------------------


// console.log("Time Start");

// let counter;
// const intervalId = setInterval(() => {
//     console.log(++counter);
//     if (counter > 5) {
//         clearInterval(intervalId) //? Bu if döngüsüyle durdurduk
//     }
// }, 1000); //? her bir saniyede code çalışır

// console.log("Time Stoped");




//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi");
    setTimeout(() => {
      console.log("Sarah: Hello");
      setTimeout(() => {
        console.log("John: How Are you?");
        setTimeout(() => {
          console.log("Sarah:Fine and you?");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  
  //? COZUMLER:
  //?----------------------------------------------------
  //* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
  //? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  //* 2- Promise,
  //! 3- Fetch API (Promise'in basitlestirilmis hali),
  //! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)