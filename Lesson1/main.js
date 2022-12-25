
/*
Hàm built-in
1. alert
2. console
3. confirm
4.prompt
5. set timeout
6. set interval
Hàm?
- là một khối mã
- Làm một việc cụ thể
- Declaration function
- Expression fuction
- Arrow function
*/ 

// function writeLog() {
//     var myString = '';
//     for  (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// writeLog('test mess', 'hello');

// function Add(a, b) {
//     return a + b;
// }


// console.log(Add(2,8))


//LESSON4: Chuỗi trong js
// var myString = 'Hoc JS tai JS JS F8'

//1. tạo chuỗi
//2. một số case suwr dungj backslash(\)
//3. Xem độ dài chuỗi
//4. Chú ý độ dài khi viết code

//5. Template string ES6
// var firstName = 'Son'
// var lastName = 'Dang'
// console.log(`Toi la: ${firstName} ${lastName}`)

//6. length

//7. find index
// + trả về -1 là k tìm được 
// + khác -1 là tìm được
// console.log(myString.indexOf('JS'))
// console.log(myString.lastIndexOf('JS'))

//8. cut string
// console.log(myString.slice(4,6))

//9. replace
// console.log(myString.replace(/JS/g, 'javascript'))
// console.log(myString.replace('JS', 'Javascript'))

//10. convert to upper case
// console.log(myString.toUpperCase())

//11. convert to lower case
// console.log(myString.toLocaleLowerCase())

//12. Trim loại bỏ ký tự khoảng trắng thừa ở hai đầu
// console.log(myString.trim())

//13. Split cắt một chuỗi thành array
// var languages = 'javacript, php, ruby'
// console.log(languages.split(', '))


//14. Get a character by index
// const myString2 = 'Son dang'
// console.log(myString2.charAt(4))

 

// LESSON5:  KIểu số (number) trong JS
// var age = 18
// var PI = 3.14
// var money = 300.323332432
//1. Tạo giá trị number
//Kiểm tra số không hợp lệ NaN
// var result = 20 / 'to'
// console.log(isNaN(result))

// 2. Làm việc với Number to String
// console.log(typeof age.toString())

// 3. Làm việc với number to fixed: làm tròn số, làm tròn số thập phân
// console.log(PI.toFixed())
// console.log(money.toFixed(2))



//LESSON6: LÀM VIỆC VỚI MẢNG (javascirpt array method)
var languages = [
    'javascript',
    'PHP',
    'Ruby',
];
//1. Tạo mảng
// console.log(languages)
// console.log(Array.isArray(languages))

//2. Truy xuất mảng
// console.log(languages[1])

//3. To string chuyển array sang chuỗi
// console.log(typeof languages.toString()) 

//4. Join
// console.log(languages.join('-'))

//5. Pop: Xóa element cuối mảng và trả về ptu đã xóa
// console.log(languages.pop())
// console.log(languages.toString())

//6. Push: thêm 1 hoặc nhiều ptu vào cuối mảng trả về độ dài mới của mảng
// console.log(languages.push('dart', 'java'))
// console.log(languages.toString())

//7. Shift: Xóa ptu ở đầu mảng và trả về ptu đã xóa
// console.log(languages.shift())
// console.log(languages.toString())

//8. Unshift: thêm 1 hoặc nhiều ptu vào đầu mảng trả về độ dài mới của mảng
// console.log(languages.unshift('dart', 'java'))
// console.log(languages.toString())

//9. Splicing: Xóa, chèn ptu mới vào mảng
// languages.splice(1, 2)
// console.log(languages)

// languages.splice(1, 0, 'dart')
// console.log(languages)

//10. Concat: nối array
// var language2 = [
//     'dart',
//     'java',
// ];
// console.log(languages.concat(language2))

//11. Slicing: cắt element của mảng
// console.log(languages.slice(1,2))

//LESSON7: Làm việc với object

// 1. Object
// var emailKey = 'email-google'
// var myInfo = {
//     name: 'Duchai',
//     age: 18,
//     address: 'Ha Noi, VN',
//     [emailKey]: 'Duchai9201@gmail.com',
//     getName: function() {
//         return this.name;
//     }
// };
// var myKey = 'address'
// console.log(myInfo[myKey])

// delete myInfo.age

// console.log(myInfo.getName())
// console.log(myInfo.name)
// console.log(myInfo)


//2. Object constructor - Object prototype
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var author = new User('Son', 'dang', 'avatar1');
// var user = new User('Duc', 'Hai', 'avatar2');

// author.title = 'chia se tai f8'
// user.comment = 'khoa hoc f8 qua hay'

// console.log(author.getName())
// console.log(user.getName())

//3. Đối tượng Date javascript date object mozilla
// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`)

//LESSON8: lỆNH RẼ NHÁNH, TOÁN TỬ 3 NGÔI
// var date = 2
// if(date === 2) {
//     console.log('hom nay la thu 2')
// }

// function run(a) {
//     if((a%3 == 0) && (a%5 == 0)) {
//         return 3
//     }else if(a%5 == 0) {
//         return 2
//     }else if(a%3 == 0) {
//         return 1
//     }

// }

// console.log(run(15))

//Câu lệnh rẽ nhanh - switch

// var date = 5;
// switch(date) {
//     case 2: 
//         console.log('hom nay la thu 2');
//         break;
//     case 3: 
//         console.log('hom nay la thu 3');
//         break;
//     case 4: 
//         console.log('hom nay la thu 4');
//         break;
//     default:
//         console.log('khong biet')
// }


//Toán tử 3 ngôi - ternary operator
// var course = {
//     name: 'Javascript',
//     coin: 250
// }

// var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi'
// console.log(result)

// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;

//LESSON9: VÒNG LẶP
//1. For -  Lặp với điều kiện đúng
// var myArray = [
//     'javascript',
//     'php',
//     'java',
//     'dart',
// ]

// var arrayLength = myArray.length;
// for(var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }

//2. For/in - Lặp qua key của đối tượng
// var myInfo = {
//     name: 'Son dang',
//     age: 18,
//     address: 'Ha noi, VN'
// };
// for (var key in myInfo) {
//     console.log(myInfo[key])
// }

//3. for/of - lặp qua value của đối tượng
// var languages = [
//     'javascript',
//     'php',
//     'java'
// ];

// var myInfo = {
//     name: 'son dang',
//     age: 18,

// };
// for(var value of languages) {
//     console.log(value)
// }

// for(var value of Object.keys(myInfo)) {
//     console.log(value)
// }


//4. while - lặp khi điều kiện đúng
// var i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

//5. do/while - lặp ít nhất 1 lần, sau đó lặp điều kiện đúng
// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Nap the lan ' + i)
//     if(true) {
//         isSuccess = true;
//         break;
//     }
// }while(!isSuccess && i < 3);

//6. Break and continue trong vòng lặp
// for(var i = 0; i < 10; i++) {
//     console.log(i);
//     if(i >= 5) {
//         break;
//     }
// }

// for(var i = 0; i < 10; i++) {
//     if(i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

//7. Vòng lặp lồng nhau(Nested loop)

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for(var i = 0; i < myArray.length; i++) {
//     for(var j = 0; j < myArray[i].length; j++)
//         console.log(myArray[i][j]);
// }

// for(var i = 0; i < 100; i++) {
//     if(i % 5 == 0) {
//         console.log(i)
//     }
// }

//LESSON10: LÀM VIỆC VỚI MẢNG II
//1. Array method
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name:'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 100
//     },
// ];
//forEach(): Duyệt qua từng ptu của mảng
// courses.forEach(function(course, index){
//     console.log(index, course)
// });

//every(): hữu ích khi kiểm tra tát cả các ptu thỏa mãn một đk nào đó
// var isFree = courses.every(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree)

//some(): chỉ cần 1 ptu thỏa mãn dk là dừng chạy
// var isFree = courses.some(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree)

//find(): trả về chỉ 1 ptu đầu tiên tìm thấy
// var course = courses.find(function(course, index){
//     return course.name === 'Ruby';
// });
// console.log(course)

//filter(): trả về tất cả ptu tìm thấy
// var course = courses.filter(function(course, index){
//     return course.name === 'Ruby';
// });
// console.log(course)

//map()
// function courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     }
// }

// var newCourse = courses.map(courseHandler);

// console.log(newCourse)

//reduce()
// var i = 0;
// function coinHandler(accumulator, currentValue) {
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         'Luot chay': i,
//         'Bien tich tru': accumulator,
//         'Gia khoa hoc': currentValue.coin,
//         'tich tru duoc': total,
//     });
//     return total;
// }
// var totalCoin = courses.reduce(coinHandler, 0);

// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;
// }, 0);
// console.log(totalCoin);

//Flat = "làm phẳng" mảng từ Depth Array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem)

// }, []);
// console.log(flatArray);

//Lấy ra các khóa học đưa vào 1 mảng mới
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title:"HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title:"Javascript"
//             }
//         ]

//     },
//     {
//         topic: "back-end",
//         courses: [
//             {
//                 id: 1,
//                 title:"PHP"
//             },
//             {
//                 id: 2,
//                 title:"NodeJS"
//             }
//         ]
//     },
// ]

// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, [])

// console.log(newCourses)

//code ham reduce
// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if(arguments.length < 2) {
//         i=1
//         result = this[0]
//     }
//     for(; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce2((total, number) => {
//     return total + number
// });

// console.log(result)

//includes method chỉ sử dụng cho chuỗi và mảng
// var title = 'Responsive web disign';
// console.log(title.includes('web'))

// var courses = ['javascript', 'PHP', 'Dart'];
// console.log(courses.includes('javascript'))

//LESSON11: CALLBACK

function myFunction(param) {
    console.log(typeof param);
}

myFunction(123)










