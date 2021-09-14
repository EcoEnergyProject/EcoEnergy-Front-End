import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ProdutosComponent } from "./produtos/produtos.component"

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CadastrarprodutosComponent } from './cadastrarprodutos/cadastrarprodutos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProjetosocialComponent } from './projetosocial/projetosocial.component';

const routes: Routes = [
  {path: "", redirectTo: "inicio", pathMatch:"full"},
  // {path: "", redirectTo: "entrar", pathMatch:"full"},
  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "inicio", component: InicioComponent},
  {path: "contate-nos", component: ContateNosComponent},
  {path: "sobre-nos", component: SobreNosComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "cadastrarprodutos", component: CadastrarprodutosComponent},
  {path: "categoria", component: CategoriaComponent},
  {path: "produto-edit/:id", component: ProdutosEditComponent},
  {path: "produto-delete/:id", component: ProdutoDeleteComponent},
  {path: "projeto-social", component: ProjetosocialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
