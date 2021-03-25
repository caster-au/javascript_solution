/**The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth? */
function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var day=0;
    var x=0;
    while (true)
    {
        day=day+1;
        x=x+7;
        if(x<depth)
        {
            x=x-2;
        }
        else{
            break;
        }
    }
    console.log(day);
}
