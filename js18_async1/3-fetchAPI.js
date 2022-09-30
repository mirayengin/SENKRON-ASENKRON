//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// fetch("https://api.github.com/users") //? istekte bulundu
// fetch("https://api.github.com/users").then((res) => console.log(res)); //? gönderilen  isteğin sonucunu yakaladık

// fetch("https://api.github.com/users")
//     .then((res) => {
//         console.log(res);

//         //!Error Handlıng

//         if (!res.ok) {
//             throw new Error("Something went wrong!") //? code buraya girerse catch e gider ve hatayı yazdırır. Bunu hatayı yakalamak için yaptık.
//         }

//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)); //? hata olursa bize göster fakat fetch kendine herhangi bir response geldiğinde bu durumu basarılı kabul eder ve catch e girmez.Sadece herhengi bir respons olmadığında girer.


//     fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));




// fetch("https://api.github.com/users")
//     .then((res) => {
//         console.log(res);

//         //!Error Handlıng

//         if (!res.ok) {
//             throw new Error("Something went wrong!") //? code buraya girerse catch e gider ve hatayı yazdırır. Bunu hatayı yakalamak için yaptık.
//         }

//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err)); //? hata olursa bize göster fakat fetch kendine herhangi bir response geldiğinde bu durumu basarılı kabul eder ve catch e girmez.Sadece herhengi bir respons olmadığında girer.


//     fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


//***** EXAMPLE */

console.log("FETCH");
// let userData;

fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

// console.log(userData);

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    const { login, avatar_url, following_url } = user;
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="300px" alt="" />
    `;
  });
};