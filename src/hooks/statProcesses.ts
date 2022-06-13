function statToModifier(stat: number)
{
    switch (stat){
        case 1:
        case 2:
        case 3:
            return -3;
        case 4:
        case 5:
            return -2;
        case 6:
        case 7:
        case 8:
            return -1;
        case 9:
        case 10:
        case 11:
        case 12:
            return 0;
        case 13:
        case 14:
        case 15:
            return 1;
        case 16:
        case 17:
            return 2;
        case 18:
        case 19:
        case 20:
            return 3;
    }
    //capture edge cases that shouldn't happen.
    if(stat <= 0)
    {
        return -3;
    }else if(stat > 20)
    {
        return 3;
    }
}

export default statToModifier;