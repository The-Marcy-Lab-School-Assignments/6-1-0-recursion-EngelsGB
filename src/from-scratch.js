// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.pop() + sum(arr);
    }
}

// Reverse string using recursive approach
const reverse = (str) => {
    if (str.length === 0) {
        return '';
    } else {
        return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));
    }
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev = 0;
    let curr = 1;
    let count = 2;
    while (count <= n) {
        let pre = curr;
        curr = prev + curr;
        prev = pre;
        count++;
    }
    return curr;
};

// Recursive fibonacci
const fibRec = (n) => {
    if (n === 0) {
        return n;
    } else if (n === 1) {
        return n;
    } else {
        return fibRec(n - 1) + fibRec(n - 2);
    }
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    // Calculate mid based on start and end, not the entire array length.
    const mid = Math.floor(arr.length / 2);
    
    // Check the base case for when the target is not in the array.
    if (arr.length === 1 && arr[0] !== target) {
        return -1;
    }
    
    // This part is correct for checking if the middle element is the target.
    if (arr[mid] === target) {
        return start + mid;
    } else if (arr[mid] > target) {
        // Instead of creating a new sub-array, adjust the 'end' index.
        return binarySearch(arr.toSpliced(mid, end), target, start);
    } else if (arr[mid] < target) {
        // Instead of creating a new sub-array, adjust the 'start' index.
        return binarySearch(arr.toSpliced(0, mid), target, mid);
    }
};

// Some additional hints:
// 1. Make sure to calculate 'mid' using the current 'start' and 'end'.
// 2. Use 'start' and 'end' indices to narrow down the search range instead of creating new sub-arrays.
// 3. Consider the base case when 'start' exceeds 'end', which indicates the target is not in the array.


module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
