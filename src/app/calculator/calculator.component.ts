import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public  Memory  = "0";      
  public  Current = "0";      
  public  Operation = 0;      
  public  MAXLENGTH = 20;    
  public display = "0";
  public result = null;
  public computeAns:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

 AddDigit(dig) {
   this.computeAns =false;
   if (this.display.length > this.MAXLENGTH) { 
     this.display = "Aargh! Too long"; //limit length
    } else { 
        if ((eval(this.Current) == 0)&& (this.Current.indexOf(".") == -1)) { 
          this.Current = dig;
        } else { 
            this.Current = this.Current + dig;
            
        };
        if(this.display == '0') {
           this.display = this.Current;
        } else {
          this.display = this.display + dig;
        }
    }
   //document.Calculator.Display.value = Current;
 }

  Dot() {
     this.computeAns =false;
  if ( this.Current.length == 0)    
    { this.Current = "0.";
    } else
    {  if ( this.Current.indexOf(".") == -1)
         { this.Current = this.Current + ".";
    };   };
    this.display = this.Current;
  //document.Calculator.Display.value = Current;
 }

PlusMinus()
 {
    this.computeAns =false;
  if  (this.Current.indexOf("e") != -1)  
    { var epos = this.Current.indexOf("e-");
      if (epos != -1)
         { this.Current = this.Current.substring(0,1+epos) + this.Current.substring(2+epos); 
         } else
         { epos = this.Current.indexOf("e");
           this.Current = this.Current.substring(0,1+epos) + "-" + this.Current.substring(1+epos); 
         };
    } else
    {  if ( this.Current.indexOf("-") == 0 )
         { this.Current = this.Current.substring(1);
          this.display = this.display.substring(1);
         } else
         { this.Current = "-" + this.Current;
         this.display = "-" + this.display;
         };
    };
  
 }
  Clear()                //CLEAR ENTRY
 { 
    this.computeAns =false;
 if(this.display.length>0) {
   this.display = this.display.slice(0,this.display.length-1);
   this.Current = this.Current.slice(0,this.Current.length-1);
 } else {
   this.display = "0";
   this.Current = "0";
 }
  
 }

 AllClear()             //Clear ALL entries!
 { 
   this.computeAns =false;
   this.Current = "0";
   this.Operation = 0;                //clear operation
   this.Memory = "0";                  //clear memory
   this.display = "0"
   this.result = null;
 }

Operate(op)            //STORE OPERATION e.g. + * / etc.
 {
    this.computeAns =false;
  if (op.indexOf("*") > -1) { this.Operation = 1; };       //codes for *
  if (op.indexOf("/") > -1) { this.Operation = 2; };       // slash (divide)
  if (op.indexOf("+") > -1) { this.Operation = 3; };       // sum
  if (op.indexOf("-") > -1) { this.Operation = 4; };       // difference

  this.Memory = this.Current;                 //store value
  this.Current = "";                 //or we could use "0"
  this.display = this.display + op;
 }


 Calculate()            //PERFORM CALCULATION (= button)
 { 
   if(!isNaN(parseInt(this.display.charAt(this.display.length-1)))) {
  this.result = eval(this.display);
  if (this.result.toString().length > this.MAXLENGTH) { 
      //limit length
     this.result = "Aargh! Too long";
    }
  this.Operation = 0;                //clear operation
  this.Memory    = "0";   
  this.computeAns = true;
  }
 }
}
