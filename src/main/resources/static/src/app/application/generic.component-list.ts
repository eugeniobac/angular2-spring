import { Injectable, OnInit } from '@angular/core';
import { GenericService } from './generic.service';
import { Message } from 'primeng/primeng';

@Injectable()
export class GenericListComponent  implements OnInit {
  msgs: Message[] = [];
  entities = [];
  selectedEntity = null;
  constructor(private service: GenericService) { }

  ngOnInit() {
    this.service.list().subscribe(response => this.entities = response);
  }

  deleteCB() {
    console.log("Entity Deleted!");
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Deleted' });
    this.entities.splice(this.entities.findIndex(account => account.id === this.selectedEntity.id), 1);
    this.selectedEntity = null;
  }

  delete(id){
    this.service.delete(id, this.deleteCB());
  }
}
