/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let n = nums.length;
    let majValue = 0;
    let count = 1;
    let maxValue = 0;

    nums.sort( (a,b) => {
        return a-b;
    });

    for ( let i=0; i<n ; i++) {
        
        if( nums[i] == nums[i+1] ) {
            ++count;
        } else {
            if ( count > maxValue ) {
                maxValue=count;
                majValue=nums[i];
            }
            count=1;
        }
        
    }
    if (maxValue > (n/2)) {
        return majValue;
    }
    return -1;
    
};
