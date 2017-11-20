import { ListarUsuariosPage } from './listar-usuarios';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Testes unitários do componente Listar Usuários', () => {
    let component: ListarUsuariosPage;
    let fixture: ComponentFixture<ListarUsuariosPage>;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [ ListarUsuariosPage ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListarUsuariosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('1.1 Verifica componente', () => {
        expect(this.component).toBeDefined();
    });
});