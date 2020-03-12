boolean IsSumOfConsecutiveInts(let num)
{
    let sumOfFirstIIntegers = 3;
    for (let i = 2; sumOfFirstIIntegers <= num; i++)
    {
        if (i%2 == 0 ? (num%i == i/2) : (num%i == 0))
        {
            return true;
        }
        sumOfFirstIIntegers += i + 1;
    }
    return false;
}