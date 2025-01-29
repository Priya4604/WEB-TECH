

let str = 'hello'
let str2 = "HELLO"
let str3 = `hello`

console.log(typeof str3)

//! how to know the length of the string

console.log(str.length)

//! string methods

//! 1.toUpperCase()

// it is used to convert any string into uppercase and it will return one new string.

let upper =str.toUpperCase()
console.log(upper)
console.log(str)

//! 2. toLowerCase
 
// it is used to convert any string into lowercase and it will return one new string.

let lower =str2.toLowerCase()
console.log(lower)
console.log(str2)


//! 3. indexOf()

// it is used to return the index of the specific character.
// it will take the first occurence of the character.

console.log(str.indexOf('l'))

console.log(str.indexOf('z'));//it will return -1




//! 4. charAt()

// it is used to know the character of the sepcific index.

console.log(str.charAt(2))


//! 5. includes()

// it will return true if any string is preseent inside another string , otherwise it will return false.

let str4 = "hello how are you"

console.log(str.includes('lo'));// true
console.log(str.includes('a'));//false
console.log(str4.includes("how "));//true


//! 6. trim()

// it is used to remove the white-spaces of the string

let str5 = "  hi   "

console.log(str5.length);
console.log(str5);
console.log(str5.trim());


//! 7. split()

// it will convert the string into array.

let str6="hello how are you"

console.log(str6.split(""));
console.log(str6.split(" "));
console.log(str6.split("y"));

//! 8. slice()

// it is used to extract the string from another string.
// hence it will take the parameters(startindex,endindex (n-1)).
// it will not include the endindex value.

console.log(str6.slice(0,4));// it will take 0 to 3 index value
console.log(str6.slice(4));// it will take from 4 till end
console.log(str6.slice(-3));
console.log(str6.slice(-3,-1));

//! note: whenever we trying to give right value first and second left value in that time we won't  give anything ,so alwayse go with left value and next right value.
console.log(str6.slice(4,1));
console.log(str6.slice(-1,-3));


//! 9. substring()

// i is used to extract the string from another string.
// hence it will take the parameters(startindex,endindex (n-1)).
// it will not include the endindex value.


console.log(str6.substring(0,4));
console.log(str6.substring(4));

//! here if we use negative index it will convert into 0
console.log(str6.substring(-3));


console.log(str6.substring(4,1));// it will give (1,4)



//! 10. lastIndesof()



let str7 = "hello how are you"

console.log(str7.indexOf("o"));
console.log(str7.lastIndexOf("o"));

//! 11.concat()

// it is used to  concat two or more  than two string 

let concatstr = str.concat(" ",str2 ," ","how are you")// we can pass more than one string
console.log(concatstr);

















