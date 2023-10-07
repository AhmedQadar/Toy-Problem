//an example input of benefits and salary
const salary = 55000;
const benefits = 10000;

// create a function for netSalary Calculator
function netSalaryCalculator (salary,benefits) {
   //use if else statements for kraRates
    let kraRate = 0;
    if (salary > 0 && salary <= 23999){
        //rate to use for salary from 0 to 23999
        kraRate = 0.1;
    } else {
        if (salary > 23999 && salary <= 32333){
            //rate to use for salary from 24000 to 32333
            kraRate = 0.25;
        } else {
            if (salary > 32,333 && salary <= 499999){
                //rate to use for salary from 32344 to 49999
                kraRate = 0.3;
            } else {
                if (salary >= 500000 && salary <= 799999){
                    //rate to use for salary from 500000 to 799999
                    kraRate = 0.325;
                } else {
                    if (salary >= 800000){
                        //rate salary greater than 800000
                        kraRate = 0.35;
                    }
                }
            }
        }
    }



  //use switch for nhifDeduction because it is long
    let nhifDeduction = 0;
    switch (true) {
    case salary <= 5999:
        //deduction for salary from 0 to 5999
        nhifDeduction = 150;
        break;
     case salary > 5999 && salary <=7999:
        //deduction for salary from 6000 7999
         nhifDeduction = 300;
         break;
      case salary > 7999 && salary <= 11999:
        //deduction for salary from 8000 to 11999
          nhifDeduction = 400;
          break;
       case salary > 11999 && salary <= 14999:
        //deduction for salary from 12000 to 14999
           nhifDeduction = 500;
           break;
        case salary > 14999 && salary <=19999:
            //deduction for salary from 15000 to 19999
             nhifDeduction = 600;
             break;
         case salary > 19999 && salary <= 24999:
            //deduction for salary from 20000 to 24999
              nhifDeduction = 750;
              break;
          case salary > 24999 && salary <= 29999:
            //deduction for salary from 25000 to 29999
               nhifDeduction = 850;
                                    break;
           case salary > 29999 && salary <= 34999:
            //deduction for salary from 30000 to 34999
                nhifDeduction = 900;
                break;
            case salary > 34999 && salary <= 39999:
                //deduction for salary from 35000 to 39999
                 nhifDeduction = 950;
                 break;
             case salary > 39999 && salary <= 44999:
                //deduction for salary from 40000 to 44999
                  nhifDeduction = 1000;
                  break;
              case salary > 44999 && salary <= 49999:
                //deduction for salary from 45000 to 49999
                   nhifDeduction = 1,100;
                   break;
               case salary > 49999 && salary <= 59999:
                //deduction for salary from 50000 to 59999
                    nhifDeduction = 1,200;
                    break;
                case salary > 59999 && salary <= 69999:
                    //deduction for salary from 60000 to 69999
                     nhifDeduction = 1,300;
                     break;
                 case salary > 69999 && salary <= 79999:
                    //deduction for salary from 70000 to 79999
                      nhifDeduction = 1,400;
                      break;
                  case salary > 79999 && salary <= 89999:
                    //deduction for salary from 80000 to 89999
                       nhifDeduction = 1500;
                       break;
                   case salary > 89999 && salary <= 99999:
                    //deduction for salary above 100000
                        nhifDeduction = 1600;
                        break;
                        default:
                        nhifDeduction = 1700;
                                                                        
                                                
    }

    //used if else for nssfDeductions 
    let nssfDeductions = 0;
    //nssf rates are 6% in each tier
    if (salary <= 6000 ){
        //for salary<= 6000 it is in tier 1 in the new NSSF Rates
        nssfDeductions = salary * 0.06;
    } else if( salary >= 6001 && salary <= 18000){
        //for salary from 6001 to 18000 they are in tier 2 in the new nssf rates
        nssfDeductions = 18000 * 0.06;
    }

     //declare the housing levy calculation formula 
    let housingLevyDeductions = salary * 0.015;
     

    //some of the benefits that i did not include because benefits are inputs 
    /*       let   Personal Relief     =2,400	
             let   Insurance Relief     =5,000	
             let    Allowable Pension Fund Contribution     =20000
             let   Allowable HOSP Contribution     =0	
             let   Affordable Housing Relief     =9,000
             let   Allowable Owner Occupier Interest     =25,000	
             let  Disability Exemption     =150,000
    */

     //equation for calculating the net salary 
    let  netSalary = (salary + benefits ) - ((salary * kraRate) + nhifDeduction + nssfDeductions + housingLevyDeductions);
    
    return netSalary;

}
const netSalary = netSalaryCalculator(salary,benefits);
console.log("Net Salary:"   +  netSalary);

