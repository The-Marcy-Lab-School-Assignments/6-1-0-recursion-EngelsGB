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
    const mid = Math.floor(arr.length / 2);
    if (arr.length === 1 && arr[0] !== target) {
        return -1;
    }
    if (arr[mid] === target) {
        return start + mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr.toSpliced(mid, end), target, start);
    } else if (arr[mid] < target) {
        return binarySearch(arr.toSpliced(0, mid), target, mid);
    }
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
