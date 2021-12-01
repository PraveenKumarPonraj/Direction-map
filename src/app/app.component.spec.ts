import { TestBed,ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PostDataService } from './post-data.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach( () => {
      TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [PostDataService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'direction-map'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('direction-map');
  });

  // xit('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('direction-map app is running!');
  // });


  it('should bind the configured value', async(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-profile')).nativeElement;
    let p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    component.selectedProfile = new FormControl(component.profiles[1]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Highway_2');
      // expect(p.textContent).toBe('Highway_1');
    });
  })); 


  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
   

    fixture.detectChanges();

    nameInput.value = 'chennai';
    

    nameInput.dispatchEvent(new Event('input'));
    

    expect(component.personName).toBe('chennai');
    
  });

  // it('should perform display binding in HTML template', () => {
  //   const hostElement = fixture.nativeElement;
  //   const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
   
  //   const displayName: HTMLInputElement = hostElement.querySelector('#disName');
   

  //   fixture.detectChanges();

  //   fixture.whenStable().then(val => {
  //     nameInput.value = 'chennai';
      
  //     nameInput.dispatchEvent(new Event('input'));
      
  //     fixture.detectChanges();
  //     expect(displayName.textContent).toBe('chennai');
      
  //   });
  // });


  it('should Length be the same ', async(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-profile')).nativeElement;
    fixture.detectChanges();
      expect(component.profiles.length).toBe(5);
      // expect(p.textContent).toBe('Highway_1');
  
  }));

});
