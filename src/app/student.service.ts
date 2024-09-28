import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    list1: string[] = ['Abarca', 'Melisa', 'Sujey', 'Bryan', 'Milton', 'Fabricio', 'Ameth', 'Zacarias', 'Héctor', 'Gael', 'Lyz', 'Luis', 'Sayuri', 'Hannia'];
    list2: string[] = ['Jose', 'Christopher', 'Angel', 'Max', 'Eduardo', 'Fredy', 'Yara', 'Bruno', 'Joaquin', 'Antonio', 'Osvaldo', 'Marcos', 'Ulises'];
    pairs : { student1: string, student2: string }[] = [];

    selectRandomStudents(): { student1: string, student2: string } | null {
        if (this.list1.length > 0 && this.list2.length > 0) {
          const student1 = this.list1.splice(Math.floor(Math.random() * this.list1.length), 1)[0];
          const student2 = this.list2.splice(Math.floor(Math.random() * this.list2.length), 1)[0];
          const pair = { student1, student2 };
          this.pairs.push(pair);
          return pair;
        }
        return null;
      }
    
      getPairs() {
        return this.pairs;
      }
    
      getList1() {
        return this.list1;
      }
    
      getList2() {
        return this.list2;
      }
}