import { Component, ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild("test") d;
@ViewChild("test1") d1;

ngAfterViewInit(){
  this.d1.nativeElement.onkeyup= ()=>{
    console.log(this.d.nativeElement.value);
  }
}



changediv(){
  console.log(this.d);
  this.d.nativeElement.style.background="yellow";
  this.d.nativeElement.innerText= "hello"
}

}
