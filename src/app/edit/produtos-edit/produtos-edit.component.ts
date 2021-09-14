import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { Categoria } from 'src/app/model/Categoria';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.css']
})
export class ProdutosEditComponent implements OnInit {

  produto: Produto = new Produto();
  idProduto: number;

  idUsuario = environment.id;

  categoria: Categoria = new Categoria();
  idCategoria: number;
  listaCategoria: Categoria[];
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.getProdutoById(id)
    this.findAllCategorias()
  }

  getProdutoById(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
      console.log(this.produto)
    })
  }

  getCategoriaById(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
  
  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp
    })
  }

  atualizar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.produto.usuario.id = this.idUsuario
    console.log(this.produto)

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      console.log(this.produto)
      this.produto = resp
      alert("A postagem foi atualizada com sucesso!")
      this.router.navigate(['/produtos'])
    })
  }
}

