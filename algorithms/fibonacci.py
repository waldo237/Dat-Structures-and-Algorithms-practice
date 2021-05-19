def fibonacci(n):
    assert n >= 0 and int(n) == n, "This function cannot be negative and non integer."
    if n in [0, 1]:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(7))


def sumofDigits(n):
    assert n >= 0 and int(n) == n, "This function cannot be negative and non integer."
    if n == 0:
        return 0
    else:
        return int(n % 10) + sumofDigits(int(n/10))

print(sumofDigits(50432))



def power(base, exp):
    assert exp >= 0 and int(exp) == exp, "exponent must be a positive integer"
    if exp ==0:
        return 1
    if exp == 1:
        return base
    else:
        return base * power(base, exp-1)

print(power(2, 1.2))


