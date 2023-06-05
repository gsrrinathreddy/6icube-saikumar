export default function Array6(){

    let arr1=[0,1,2];
    let arr2=[3,4,5];
    arr1.push(...arr2);
    console.log(arr1)

    let arrayA=[1,2];
    let arrayB=[3,4];
    let newArray=arrayA.concat(arrayB);
    console.log(newArray)

    const arr=[1,2,3];
    const newArr=arr.map (num=>num+1);
    console.log(newArr);

    const arrs=[1,2,3];
    arrs.forEach((num,index)=>{
    arrs[index]=num+1;
    })
    console.log(arrs)

    const arr12=Array.from (Array(5),(_,index)=> index);
     console.log(arr12)

     const arr21=Array.from (Array(5),(_,index)=> index+1);
     console.log(arr21)

     const arr3 =[1,2,3]
     arr[0]+=1;
     console.log(arr3[0]);

     arr[0]=arr[0]+1;
     console.log(arr[0]);
    return(
    <>
    Array6
    </>
    )
}