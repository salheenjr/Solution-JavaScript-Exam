// س1- أنشئ برنامج يقوم بتغيير قيمة (أقصى عدد وحدات )إلى 24 وحدة إذا كان الطالب قد اجتاز 36 وحدة،وإلى 18 إذا كان غير ذلك

// س2-أنشئ برنامج يقوم بتغيير قيمة (مفصول)إلى ترو إذا كان معدل الطالب أقل من 1.6 "أو" قد
//  وصل إلى الفصل العاشر ولم يجتز إلا أقل من 90 وحدة

// س3-أنشئ برنامج يقوم بإنشاء مصفوفة يقوم بوضع فيها جميع الطلبة المفصولين
let student = [
	{
		name: "ali",
		semester: "4",
		gpa: 3.4,
		credits: 32,
		muximumCredits: 0,
		isExpelled: false,
	},
	{
		name: "eman",
		semester: "10",
		gpa: 3.01,
		credits: 60,
		muximumCredits: 0,
		isExpelled: false,
	},
	{
		name: "nada",
		semester: "10",
		gpa: 1,
		credits: 80,
		muximumCredits: 0,
		isExpelled: false,
	},
	{
		name: "hassan",
		semester: "10",
		gpa: 2.7,
		credits: 90,
		muximumCredits: 0,
		isExpelled: false,
	},
	{
		name: "ayoub",
		semester: "6",
		gpa: 1.5,
		credits: 40,
		muximumCredits: 0,
		isExpelled: false,
	},
];
// حل السؤال الأول 
// Start Function Change muximumCredits 
for (let i = 0; i < student.length; i++) {
	if (student[i].credits > 36) {
		student[i].muximumCredits = 24;
	}else {
		student[i].muximumCredits = 18;
	}
	console.log(student[i].muximumCredits)
}

console.log("----------------------------------------------------")
// حل السؤال الثاني
// Change isExpelled to True 
for (let i = 0; i < student.length; i++) {
	if (student[i].gpa < 1.6) {
		student[i].isExpelled = true;
	}else if (student[i].semester == 10 && student[i].credits < 90) {
		student[i].isExpelled = true;
	}
}

console.log("----------------------------------------------------")
// حل السؤال الثالث
//  Create Object for Expelled
let expelled = [];
for (let i = 0; i < student.length; i++) {
	if (student[i].isExpelled) {
		expelled.push(student[i].name) ;
	}
}
console.log(expelled)
//س4-أنشئ دالة تقوم باستقبال كلمة ثم تغير حروفها على النحو الآتي الآتي
//s=$ , a=@ , o=0


console.log("----------------------------------------------------")
// حل السؤال الرابع
// Create a Function Change word 
function edit(word) {
	let result = " ";
	for (let i = 0; i < word.length; i++) {
		if (word[i] == "s" || word[i] == "S" ) {
			result = result.concat("$")
		}else if (word[i] == "a" || word[i] == "A") {
			result = result.concat("@")
		}else if (word[i] == "o" || word[i] == "O") {
			result = result.concat("0")
		}else {
			result = result.concat(word[i])
		}
	}console.log(result)
}
edit("Hello Salheen My Age Is 20 I Study OOP In Collage")