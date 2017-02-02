let oldarr=[]
let m
let n
function pen(m,n)
{
    oldarr[m]=n
  //  console.log(oldarr[m])
    let l=oldarr[m]+2
    return l
}
console.log(pen(0,1))
console.log(pen(1,2))
console.log(pen(2,3))