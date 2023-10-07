Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

   Steps:
   >create a function (studentGradeGenerator)
   >use nested 'if' 'else' conditions
   >set studentMarks from 0 - 100 using && relational opperator
   >set grade 'A' from 80 - 100
   >set grade 'B' from 60 - 79
   >set grade 'C' from 49 - 59
   >set grade 'D' from 40 - 49
   >set grade 'E' from 39 - 0
   >set default {(console.log('input student marks'))}





Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

   steps:
   >create a function (speedDetedtor)
   >Use 'if' 'else' conditions conditions 
   >if (speed <= 70) {console.log("Ok")}
   > else {let demeritPointsoints = (speed-70)/5
       >if (demeritPoints <=12 ) {console.log(demeritPoints)}
       >else {console.log("License suspended")}
   }





Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.


  steps:
  >declare the salary and inputs with const & make them global 
  >create function for netSalaryCalculator 
  >declare kra and write how to calculate using if else statements
  >declare nhif and write deductions for different tax brackets
  >declare nssf and write deductios for each tier
  >declare the housing levy and write the expression to calculate it 
  >declare the net salary and write the formula for calculating it 
