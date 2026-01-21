    // given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero element;
    // example --->  input [0, 1, 0, 3, 12] ---> output [1, 3, 12, 0, 0];
    // example --->  input [0, 0, 1] ---> output [1, 0, 0];

    // step 1 - initialize pointer at index 0 for non-zero position
    // step 2 - iterate through array with another pointer
    // step 3 - when non-zero found, swap with position pointer
    // step 4 - increment position pointer after each swap
    // step 5 - continue until end, zeros  automatically move to end



    function moveZeroes(nums) {
        let nonZeroPos = 0;
        //move non-zero elements forward
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                // Swap elements
                [nums[nonZeroPos], nums[i]] = [nums[i], nums[nonZeroPos]];
                nonZeroPos++
            }
        }
        return nums;
    }

    console.log(moveZeroes([0,1,0,3,12]));