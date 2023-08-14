/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {

    const n=nums.length;
    let maxDiff = 0;

    nums.sort( (a,b) => a-b);

    for( let i=0 ; i<n-1; i++) {

        maxDiff = Math.max(maxDiff , nums[i+1] - nums[i]);
        
    }
    return maxDiff;
    
};
