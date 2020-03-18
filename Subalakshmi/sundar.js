const  arr[] 
        = { "pizza", "puzzle", "apple" }; 
    let n = sizeof(arr) / sizeof(arr[0]); 
    let i; 
    console.log("Given array is"); 
    for (i = 0; i < n; i++) 
    {
        console.log( i, arr[i]);  
    }
    sort(arr, n); 
    console.log("Sorted array is"); 
    for (i = 0; i < n; i++) 
    {
        console.log( i, arr[i]); 
    }
    return 0; 