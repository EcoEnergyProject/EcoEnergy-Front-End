import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  produto: Produto = new Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.produtoService.refreshToken();
    let id = this.route.snapshot.params['id'];

    this.getProdutoById(id);
  }

  getProdutoById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp;
    })
  }
}
