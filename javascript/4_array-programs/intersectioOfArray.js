// 26. Create an Array using Intersection of two Arrays

// Approach 1:

{
  let first_array = [1, 3, 5, 7, 9];
  let second_array = [2, 3, 4, 5, 6, 9];

  let res_arr = (first_array, second_array) => {
    let new_array = [];

    for (let i = 0; i < first_array.length; i++) {
      for (let j = 0; j < second_array.length; j++) {
        if (first_array[i] === second_array[j]) {
          new_array.push(first_array[i]);
        }
      }
    }
    return new_array;
  };

  console.log("Array obtained is ");
  console.log(res_arr(first_array, second_array));
}

// approach 2

{
  let first_array = [1, 3, 5, 7, 9, 10];
  let second_array = [2, 3, 4, 5, 6, 9, 10];

  let new_array = first_array.filter((elm) => second_array.includes(elm));
  console.log("Array obtained is :");
  console.log(new_array);
}

//Approach 3:

{
  let res_arr = (arr1, arr2) => {
    let first_array_set = new Set(arr1);
    let second_array_set = new Set(arr2);
    let new_array = [];
    for (let element of second_array_set) {
      if (first_array_set.has(element)) {
        new_array.push(element);
      }
    }
    return new_array;
  };

  let first_array = [1, 3, 5, 7, 9];
  let second_array = [2, 3, 4, 5, 6, 9];

  console.log("Array obtained is: ");
  console.log(res_arr(first_array, second_array));
}

//Using reduce Method

{
  let arr1 = [1, 2, 3, 4];
  let arr2 = [3, 4, 5, 6];

  let intersection = arr1.reduce((acc, curr) => {
    if (arr2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log(intersection);
}
