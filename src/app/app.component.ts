import { Component } from '@angular/core';
import { Employee } from "./model/employee"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: "Josh", country: "Usa" },
    { id: 2, name: "Adrian", country: "Peru" },
    { id: 3, name: "Maria", country: "Bolivia" },
  ]

  selectEmployee: Employee = new Employee()

  addOrEdit() {
    console.log("click angular")
    if (this.selectEmployee.id === 0) {
      this.selectEmployee.id = this.employeeArray.length + 1
      this.employeeArray.push(this.selectEmployee)
    }

    this.selectEmployee = new Employee()
  }
  openForEdit(employee: Employee) {
    this.selectEmployee = employee
  }
  delete() {
    if (confirm("Estas seguro de Eliminarlo")) {
      this.employeeArray = this.employeeArray.filter(emple => emple != this.selectEmployee)
      this.selectEmployee = new Employee()
    }

  }
}
