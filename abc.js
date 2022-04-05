let ar=[5,3,7,4,1];
let i,j,temp;
let a=ar.length;
for(i=0;i<a;i++)
{
    for(j=0;j<a-1;j++)
    {
if(ar[j]>ar[j+1])
{
    temp=ar[j]; 
    ar[j]=ar[j+1];
    ar[j+1]=temp;
}
    }
}
console.log(ar);