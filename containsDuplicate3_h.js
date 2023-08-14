/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {

    const n=nums.length;
    let CID = 0;
    let CVD = 0;

    for( let i=0 ; i<n-1; i++) {
        for ( let j=i+1 ; j<n; j++) {
            CID = Math.abs(i-j);
            CVD = Math.abs(nums[i]-nums[j]);
            if( CID<=indexDiff && CVD<=valueDiff ) {
                return true;
            }
        }
    }
    return false;
};
