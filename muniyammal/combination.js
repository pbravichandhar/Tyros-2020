let a = ['1','2','4','7','-2'];
let b = a.length;
let n =0;
let d = [];
const arrange = (a,c)=> {
    if (c == b) 
    {
        for (let i = 0; i < b; i++) 
        {
              console.log(" [" + a[i] + "] ");
              d.push(a[i]);
        }
        console.log(d);
        n++;
        d = [];
    } 
    else 
    {
        for (let i = c; i < b; i++) 
        {
            let temp = a[c];
            a[c] = a[i];
            a[i] = temp;

            arrange(a, c + 1);

            temp = a[c];
            a[c] = a[i];
            a[i] = temp;
        }
    }
}
 arrange(a,0);
    console.log("combination of the elements" + a + "are" + n);
