import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By, BrowserModule } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { MyApp } from "./app.component";
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe("descreve o teste do appComponent", () => {

	let myAppCom: MyApp;
	let fixture: ComponentFixture<MyApp>;
	let debugEl: DebugElement;
	let elemento: HTMLElement;

	beforeEach(	() =>	{
		TestBed.configureTestingModule({
            declarations: [ MyApp ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp)

              ],

              providers: [ StatusBar, SplashScreen ]
		});

		fixture = TestBed.createComponent(MyApp);

		myAppCom = fixture.componentInstance;

        debugEl = fixture.debugElement.query(By.css('ion-title'));

        elemento = debugEl.nativeElement;

	});

  it("Deveria o titulo esta com o texto 'MENU' ", () => {

    expect(elemento.textContent).toContain('Menu');

  });

  it('Devera contar quantos menus tem, 3', () =>    {

    expect(myAppCom.pages.length).toBe(3);

  });


});
