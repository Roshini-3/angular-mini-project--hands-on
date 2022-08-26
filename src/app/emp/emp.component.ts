import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//import { EmpService } from '../emp.service';
import { EmpService } from 'src/services/emp.service';
import { Employee } from './employee';
import { firstNameValidation } from './customvalidator';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  employees: Employee[] = [];
  employeeForm!: FormGroup;

  // @ViewChild('traineeID', { static: true }) traineeID!: ElementRef;

  constructor(private empService: EmpService, private fb: FormBuilder) {}

  async ngOnInit() {
    this.getData();
    this.employeeForm = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: [''],
        email: ['', Validators.required],
        phone: ['', Validators.required],
      },
      // { validator: firstNameValidation }
      // Custom Validator !!
    );
  }

  getData = async () => {
    await this.empService.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  };

  async addEmployee(emp: any) {
    console.log(emp);
    await this.empService.createEmployee(emp.value).subscribe((data: any) => {
      console.log(data);
      this.getData();
      this.employeeForm.get('first_name')?.setValue('');
      this.employeeForm.get('last_name')?.setValue('');
      this.employeeForm.get('phone')?.setValue('');
      this.employeeForm.get('email')?.setValue('');
      /*----*/
    });
  }
  logout() {
    sessionStorage.clear();
  }
}