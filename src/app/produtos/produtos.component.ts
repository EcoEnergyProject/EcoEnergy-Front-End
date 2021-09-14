import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

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

  listaProdutos: Produto[]

  produto: Produto = new Produto()

  nomeProduto: string;

  constructor(
    private categoriaService: CategoriaService,
    public auth: AuthService,
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

  getByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
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
