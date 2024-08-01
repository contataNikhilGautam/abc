import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data:any[]=[]
  filteredData: any[] = [];
  searchId: string = '';
  
  dataService = inject(FormService)

  ngOnInit(){
    this.getdata()
  }
  getdata(){
    this.dataService.fetchData().subscribe({next:(res:any)=>{
      console.log(res.data)
      this.data = res.data
      this.filteredData = this.data;
    }})
  }
  deleteEmp(empID:any){
    console.log(empID);
    this.dataService.deleteEmp(empID).subscribe({next:(res:any)=>{
      console.log(res)
    }})
  }
  searchById() {
    if (this.searchId.trim() === '') {
      this.filteredData = this.data; 
    } else {
      this.filteredData = this.data.filter(item =>
        item.empId.toString().includes(this.searchId.trim())
      );
    }
  }
}
