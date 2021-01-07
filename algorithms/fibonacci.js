function getFibo(n) {
    if (n <= 1) return n;
    let sum = 0, last = 1, secondLast = 0;

    for (let i = 1; i < n; i++) {
        sum = secondLast + last;
        secondLast = last;
        last = sum;
    }
    return sum;
}

function getFiboRecur(n) {
    if (n <= 1) {
        return n;
    } else {
        return getFiboRecur(n - 1) + getFiboRecur(n - 2);
    }
}

function getNthFiboBetter(n, secondLast, last) {
    if (n == 0) {
        return secondLast;
    }
    if (n == 1) {
        return last;
    }

    return getNthFiboBetter(n - 1, last, secondLast + last);
}