import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { YourBooksComponent } from './your-books.component';
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; 

describe('YourBooksComponent', () => {
  let component: YourBooksComponent;
  let fixture: ComponentFixture<YourBooksComponent>;

  beforeEach(waitForAsync(() => {
   
    TestBed.configureTestingModule({
      declarations: [ YourBooksComponent ],
      imports: [IonicModule.forRoot()],//CommonModule
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    

    fixture = TestBed.createComponent(YourBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
