function makeCofee(sugar,milk )
{
    var instruction = "boil water,";
    instruction += " pour into cup,";
    instruction += " add coffee granules,";
    instruction += " add " + sugar + " spoons of sugar,";
    instruction += " add " + sugar + "% milk,";
    return instruction;
}
console.log(makeCofee(2, 20) );