function solution(n)
{
    var ans = 0;
    while(n>1){
        if(n%2!=0){
            ans++
            n=(n-1)/2
        }
        else if(n%2===0){
            n=n/2    
        }
    }
    return ans+1;
}