import { Component ,inject} from '@angular/core';
import { IProduct } from '../../Interfaces/IProducts';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
productslist: IProduct[] = [];
httpservice = inject(HttpService);
ngOnInit(){
  this.httpservice.getAllProducts().subscribe(result=>{
    this.productslist = result;
    console.log(this.productslist);
  })
}
}
