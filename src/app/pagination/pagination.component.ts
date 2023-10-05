import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() actualPage:number = 1;
  @Input() collectionSize:number = 0;
  @Input() perPage:number = 3;
  @Output() changePageEvent = new EventEmitter<number>();
  elements: Array<number> = [1,2];
  amountPages = 0;

  ngOnInit(){
    this.amountPages = Math.ceil(this.collectionSize / this.perPage);
    console.log(this.collectionSize);
    this.changePage(this.actualPage);
  }

  changePage(page:number){
    this.actualPage = page;
    this.changePageEvent.emit(page);
    if(page == 1){
      this.changeElementsByPage(2);
      return;
    }

    if(page == this.amountPages){
      this.changeElementsByPage(page-1);
      return;
    }
    this.changeElementsByPage(page);
  }

  changeElementsByPage(page:number){
    if(this.amountPages < 3){
      return;
    }
    this.elements = [page-1,page,page+1];
  }
}
