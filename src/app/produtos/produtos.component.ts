import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaCategorias: Categoria[]
  categoria: Categoria = new Categoria()

  energiaSolar: Produto[];

  listaProdutos: Produto[]

  produto: Produto = new Produto()

  usuario: Usuario = new Usuario()
  
  idUsuario: number;
  idCategoria: number;
  nomeProduto: string;

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.getAllProdutos();
  }

  getAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp;
    })
  }

  getByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  findByNomeProduto(){
    this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

}
