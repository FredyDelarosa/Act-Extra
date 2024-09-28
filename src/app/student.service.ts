import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    equipo1: string[] = ['Abarca', 'Melisa', 'Sujey', 'Bryan', 'Milton', 'Fabricio', 'Ameth', 'Zacarias', 'Héctor', 'Gael', 'Lyz', 'Luis', 'Sayuri', 'Hannia'];
    equipo2: string[] = ['Jose', 'Christopher', 'Angel', 'Max', 'Eduardo', 'Fredy', 'Yara', 'Bruno', 'Joaquin', 'Antonio', 'Osvaldo', 'Marcos', 'Ulises'];
    pairs : { student1: string, student2: string }[] = [];

    selectRandomStudents(): { student1: string, student2: string } | null {
        if (this.equipo1.length > 0 && this.equipo2.length > 0) {
          const student1 = this.equipo1.splice(Math.floor(Math.random() * this.equipo1.length), 1)[0];
          const student2 = this.equipo2.splice(Math.floor(Math.random() * this.equipo2.length), 1)[0];
          const pair = { student1, student2 };
          this.pairs.push(pair);
          return pair;
        }
        return null;
      }
    
      getPairs() {
        return this.pairs;
      }
    
      getequipo1() {
        return this.equipo1;
      }
    
      getequipo2() {
        return this.equipo2;
      }
}