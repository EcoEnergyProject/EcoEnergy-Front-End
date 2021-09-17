import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrarprodutos',
  templateUrl: './cadastrarprodutos.component.html',
  styleUrls: ['./cadastrarprodutos.component.css']
})
export class CadastrarprodutosComponent implements OnInit {

  listaCategoria: Categoria[]
  idCategoria: number
  categoria: Categoria = new Categoria();
  produto: Produto = new Produto();

  usuario: Usuario = new Usuario()
  idUsuario = environment.id



  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    console.log(environment.token)
  
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

    this.findAllCategorias()
  }

  cadastrar() {

    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario

    console.log(this.produto)

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
    this.produto = resp
    this.router.navigate(['/produtos'])
    alert("Produto cadastrado com sucesso!")
    })
  }

    
  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=> {
      this.categoria = resp
    })
  }
  cadastrarcategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert("Categoria cadastrada com sucesso")
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }

}
