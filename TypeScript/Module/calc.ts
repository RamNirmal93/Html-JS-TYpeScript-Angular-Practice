export function add(n1:number,n2:number):number{
    return n1+n2;
}

export function sub(n1:number,n2:number):number{
    return n1-n2;
}

// // export{add,sub}; // first method  or else we can specify at function itself

// //export default

export default function mul(n1:number,n2:number):number{
    return n1*n2;
}

//class level 2
export class Calculator{

 add(n1:number,n2:number):number{
        return n1+n2;
    }
    
sub(n1:number,n2:number):number{
        return n1-n2;
    }
}

//class level export default

// export default class Calculator{

//     add(n1:number,n2:number):number{
//            return n1+n2;
//        }
       
//    sub(n1:number,n2:number):number{
//            return n1-n2;
//        }
//    }

    
    
