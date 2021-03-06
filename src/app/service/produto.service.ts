import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token) // inclusão do token para liberação do acesso. 
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.apiUrl}/produto`, this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${environment.apiUrl}/produto/${id}`, this.token)
  }

  getByCaracteristicaProduto(caracteristica: string): Observable<Produto>{
    return this.http.get<Produto>(`${environment.apiUrl}/produto/caracteristica/${caracteristica}`, this.token)
  }

  getByNomeProduto(nomeProduto: string): Observable<Produto>{
    return this.http.get<Produto>(`${environment.apiUrl}/produto/nomeproduto/${nomeProduto}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${environment.apiUrl}/produto`, produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${environment.apiUrl}/produto`, produto, this.token)
  }
  
  deleteProduto(id: number) {
    return this.http.delete(`${environment.apiUrl}/produto/${id}`, this.token)
  }
}