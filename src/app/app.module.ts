import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { CadastrarprodutosComponent } from './cadastrarprodutos/cadastrarprodutos.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProjetosocialComponent } from './projetosocial/projetosocial.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    ContateNosComponent,
    InicioComponent,
    CadastrarComponent,
    EntrarComponent,
    ProdutosComponent,
    CategoriaEditComponent,
    CategoriaComponent,
    ProdutosEditComponent,
    CadastrarprodutosComponent,
    MenuLogadoComponent,
    ProdutoDeleteComponent,
    ProjetosocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
