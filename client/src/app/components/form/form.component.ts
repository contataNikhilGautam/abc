import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {
    employeeName: '',
    employeeContactNumber: '',
    employeeAddress:'',
    employeeGender: 'male',
    employeeDepartment: "IT",
    employeeSkills: "React" 

  };
  constructor(private formService: FormService){}
  async saveData() {
    console.log('Form Data:', this.formData);
    await this.formService.submitForm(this.formData).subscribe({next:(res:any)=>{
      console.log(res)
    }})
  }
}
