// 배열 객체를 통한 학생 DB 관리


var student_1 = {
    name: 'Kang Soyeon',
    gender: 'female',
    age: 26,
    hobby: 'riding',
    school: 'Kyung Hee University',
    grade: 4,
    major: 'Business',
    minor: 'English-Literature'
};
var student_2 = {
    name: 'Kang Dain',
    gender: 'female',
    age: 25,
    hobby: 'eating',
    school: 'Se Jong University',
    grade: 3,
    major: 'Computer-Science',
    minor: 'Korean-Literature'
};
var student_3 = {
    name: 'Kim Minjae',
    gender: 'male',
    age: 27,
    hobby: 'traveling',
    school: 'Seoul National University',
    grade: 2,
    major: 'Russian',
    minor: null
};
var student_4 = {
    name: 'Shim Seohee',
    gender: 'female',
    age: 26,
    hobby: 'reading books',
    school: 'Ewha Womans University',
    grade: 4,
    major: 'Advertising',
    minor: 'Law'
};
var student_5 = {
    name: 'Jang Dayeon',
    gender: 'female',
    age: 29,
    hobby: 'listening music',
    school: 'In Ha University',
    grade: 1,
    major: 'Chinese',
    minor: 'History'
};
var student_6 = {
    name: 'Lee Jongwoo',
    gender: 'male',
    age: 23,
    hobby: 'Tennis',
    school: 'Incheon University',
    grade: 1,
    major: 'Enlish Education',
    minor: 'Philosophy'
};
var student_7 = {
    name: 'Yoon Junwoong',
    gender: 'male',
    age: 20,
    hobby: 'basketball',
    school: 'Fast-Campus',
    grade: 3,
    major: 'Ecomomics',
    // minor: '경제'
};
var student_8 = {
    name: 'Park Sunmi',
    gender: 'female',
    age: 24,
    hobby: 'swimming',
    school: 'Fast-Campus',
    grade: 3,
    major: 'Business',
    minor: 'Hotel Management'
};


var student_group = [];


student_group.push(student_1);
student_group.push(student_2);
student_group.push(student_3);
student_group.push(student_4);
student_group.push(student_5);
student_group.push(student_6);
student_group.push(student_7);
student_group.push(student_8);


console.log(student_group.length);


console.log(student_group[1].hobby);
console.log(student_group[0].school);
console.log(student_group[4].major);
console.log(student_group[2].minor);
console.log(student_group[3].name);
console.log(student_group[5].age);
console.log(student_group[6].minor);
console.log(student_group[7].hobby);
