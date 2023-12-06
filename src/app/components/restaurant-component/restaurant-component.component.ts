import { Component } from '@angular/core';
import { Restaurant } from '../../entities/restaurant';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { TableRestaurants } from '../../entities/tableRestaurant';
import { RestaurantService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-component',
  templateUrl: './restaurant-component.component.html',
  styleUrl: './restaurant-component.component.css'
})
export class RestaurantComponent {
  public lat:number = 0;
  public lon:number = 0;

  public columns = [
    {name: 'Restaurante', prop: 'name', width: 250},
    {name: 'Latitud', prop: 'lat', width: 10},
    {name: 'Longitud', prop: 'lon', width: 10},
  ];

  public restaurants:Restaurant[] = [];
  public SelectionType = SelectionType;
  public posicionSeleccionada: TableRestaurants | undefined;
  public ColumnMode = ColumnMode;
  public checkSelectable: boolean = true;
  public selected: any[] = [];

  constructor(private restaurantService: RestaurantService){};

  public getRestaurants(){
    this.restaurantService.getRestaurants(this.lat,this.lon).subscribe(
      (restaurants: Restaurant[]) => {
        this.restaurants = restaurants
      }
    )
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.posicionSeleccionada = event.row;
    }
  }

  onSelect(event: any) {
    if (event.type == 'click') {
      this.posicionSeleccionada = event.row;
    }
  }

}
