import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProdutosUsuarioComponent } from './listagem-produtos-usuario.component';

describe('ListagemProdutosUsuarioComponent', () => {
  let component: ListagemProdutosUsuarioComponent;
  let fixture: ComponentFixture<ListagemProdutosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemProdutosUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemProdutosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
