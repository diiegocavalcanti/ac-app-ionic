import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';

// Componentes
import { HomePage } from './home';
import { MyApp } from '../../app/app.component';
import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';



describe('Testes da HOME PAGE', () =>   {

    let homePageComp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let debu: DebugElement;
    let homeElemento: HTMLElement;

    beforeEach( ()=>    {

        TestBed.configureTestingModule({
            declarations: [ MyApp, HomePage ],

            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp)
            ],

            providers: [
                StatusBar, SplashScreen,
                UsuariosServiceProvider, NavController
            ]

        });

        fixture = TestBed.createComponent(HomePage);
        homePageComp = fixture.componentInstance;
        debu = fixture.debugElement.query(By.css('ion-title'));
        homeElemento = debu.nativeElement;

    });

    it('Deveria mostrar o titulo "Minha App" ', () =>   {

        expect(homeElemento.textContent).toContain('Minha App');

    });

    it('deve contar qtos usuarios tem 9 ', () =>    {
        expect(homePageComp.qtde).toContain('9 Registros');
    })


});

