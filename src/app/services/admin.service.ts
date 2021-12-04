import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<any>('http://localhost:5000/api/AreaAdministrativa/Evento');
  }

  getEventoById(eventoId: number){
    return this.http.get<any>(`http://localhost:5000/api/AreaAdministrativa/Evento/${eventoId}`);
  }

  getBeneficiosByEventoId(eventoId: number){
    return this.http.get<any>(`http://localhost:5000/api/AreaAdministrativa/Evento/${eventoId}/listar-beneficios`);
  }


  getBeneficioById(beneficioId: number){
    console.log("should return beneficio by id")
  }

  deleteBeneficio(beneficioId:number){
    return this.http.delete<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio/'+beneficioId);
  }


  updateBeneficio(beneficioId:number, nome:string){
    return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Beneficio/'+beneficioId, {beneficio: nome})
  }

  createBeneficio(eventoId:number, nome:string){
    return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Evento/criar-beneficio-no-evento', {beneficio: nome,eventoId:eventoId})
  }

  createEvento(evento:any){
      return this.http.post<any>('http://localhost:5000/api/AreaAdministrativa/Evento',evento);
  }

  updateEvento(evento:any){
      return this.http.put<any>('http://localhost:5000/api/AreaAdministrativa/Evento/'+evento.id,evento);
  }

  deleteEvento(eventoId:number){
    return this.http.delete<any>('http://localhost:5000/api/AreaAdministrativa/Evento/'+eventoId);
  }


}
