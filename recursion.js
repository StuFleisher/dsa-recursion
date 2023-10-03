/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length > 0) {
    return nums[0] * product(nums.slice(1));
  }
  return 1;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length > 0) {
    return Math.max(words[0].length, longest(words.slice(1)));
  }
  return 0;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length > 0) {
    return str[0] + everyOther(str.slice(2));
  }
  return "";
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length > 0) {
    return (arr[0] === val) || find(arr.slice(1), val);
  }
  return false;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length > 1) {
    const isMatch = (str[0] === str[str.length - 1]);

    if (isMatch) {
      return isPalindrome(str.substring(1, str.length - 1));
    } else {
      return false;
    }
  }
  return true;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if (str.length > 0) {
    const reversed = revString(str.slice(1));
    return reversed + str[0];
  }
  return "";

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */


function findIndex(arr, val) {
  if (arr.length === 0) { return -1; }

  if (arr[0] === val) { return 0; }

  let res = findIndex(arr.slice(1), val);

  if (res === -1) { return -1; }

  return res + 1;
}




/** gatherStrings: given an object, return an array of all of the string values. */


// function gatherStrings(obj) {
//   newArr = Object.values(obj);
//   if (newArr.every(a => typeof(a) === "string")){
//     return newArr;
//   }

//   for (let key in obj){
//     if (typeof(obj[key]) !== "string"){
//       delete obj[key]
//       break;
//     }
//   }

//   let res = gatherStrings(obj);
//   console.log("res ----->", res)
//   // if (Array.isArray(res)) return res;
//   return res;
// }

function gatherStrings(obj) {
  console.log("input ---->", obj);
  // create a results array
  let res = [];
  // base case: obj is empty
  // if (Object.keys(obj).length === 0) return res;

  for (let key in obj) {
    if (typeof (obj[key]) === "object") {
      res = res.concat(gatherStrings(obj[key]));
      console.log("res after concat", res);
    }
    if (typeof (obj[key] === "string")) {
      res.push(obj[key]);
    }

    delete obj[key];
  }
  // check each key in the obj to verify it's an obj
  // if obj; recursive call w sub-obj,
  // insert res in res array
  // if string, append to res array
  // anything else, delete obj[key]
  // return re
  // console.log("strings arr", res);
  return res;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
