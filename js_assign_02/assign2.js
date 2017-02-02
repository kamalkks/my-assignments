function letter(k,l)
{
  let newarray=[]
  newarray[k]=l
 
  console.log(`index:value ${k}: ${newarray[k]}`)
}
let bag=[1,'dog','one']

for(let i=0;i<bag.length;i++)
{
    letter(i,bag[i])
}
let k
let l