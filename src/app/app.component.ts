import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, of } from 'rxjs';
import { PostDataService } from './post-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'direction-map';
  selected = 'option2';
  personName: string;
  // selectRoad : string = ' ';
  
  profiles = [
    {id: 'Highway_1', name: 'Highway_1'},
    {id: 'Highway_2', name: 'Highway_2'},
    {id: 'Highway_3', name: 'Highway_3'},
    {id: 'Ritherdon', name: 'Ritherdon'},
    {id: 'Beach', name: 'Beach Road'},
  ];

  selectedProfile = new FormControl(this.profiles[0]);
  public dirs: Array<any> = [
    {
      renderOptions: { polylineOptions:{ strokeColor:'#0f0'}},
    }];

  public dirss: Array<any> = [
    {
      renderOptions: { polylineOptions:{ strokeColor:'#f00'}},
    }];

  public direction: Array<any> = [
    {
      renderOptions: { polylineOptions:{ strokeColor:'#00f'}},
    }];  

  public one: any;
  public two: any;  

  public three: any;
  public four: any;

  public five:any;
  public six:any;

  public origin : any;
  public destination: any;

  public start: any;
  public end: any;

  constructor( private post:PostDataService){
    this.post.getPostData().subscribe(data =>{
      console.log( data );
    });
  }
  
  ngOnInit(){
  }

  highway_1(){
    this.one = { lat: 13.077831183855729, lng: 80.24454004001466};
    this.two = { lat: 13.097997996790372, lng: 80.29346755575982}

  }

  highway_2(){
    this.three = { lat: 13.081853313635083, lng: 80.27624240946618 };
    this.four = { lat: 13.103962751591741, lng: 80.27348509859887 }
    
  }

  highway_3(){
    this.five = { lat: 13.103962751591741, lng: 80.27348509859887 };
    this.six = { lat:13.104404240892192 , lng:  80.28683177065697 };

  }

  beach(){
    this.origin = { lat: 13.085606284296366 , lng: 80.28925782871094  };
    this.destination = { lat: 13.058204235598163 , lng: 80.28221971225587 };
  }

  ritherdon(){
    this.start = { lat:13.07934651164317   , lng: 80.25873429012147 };
    this.end ={ lat: 13.107538400303502 , lng: 80.26059171986428};
  }

 


  onProfileChange() {
     console.log(this.selectedProfile.value.id);
     if(this.selectedProfile.value.id == "Highway_1"){
       this.highway_1();
     }
     if(this.selectedProfile.value.id == "Highway_2"){
      this.highway_2();
    }
    if(this.selectedProfile.value.id == "Highway_3"){
      this.highway_3();
    }
    if(this.selectedProfile.value.id == "Beach"){
      this.beach();
    }
    if(this.selectedProfile.value.id == "Ritherdon"){
      this.ritherdon();
    }
  }  

  // selectChangeHandler(event:any){
  //   this.selectRoad = event.target.value;
  //   if(this.selectedProfile.value.id == "Highway_1"){
  //     this.highway_1();
  //   }
  //   if(this.selectRoad == "Highway_2"){
  //     this.highway_2();
  //   }
  //   if(this.selectRoad == "Highway_3"){
  //     this.highway_3();
  //   }
  //   if(this.selectRoad == "Beach"){
  //     this.beach();
  //   }
  //   if(this.selectRoad == "Ritherdon"){
  //     this.ritherdon();
  //   }
  // }

}

