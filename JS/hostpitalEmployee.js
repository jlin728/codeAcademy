//  Super Class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  // Creates static method to generate random password
  static generatePassword(){
		const randomNumber = Math.floor(Math.random()*10000);
    return randomNumber;
  }
}

// Subclass
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

// New instance of nurse
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// Utilizing vacation method
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
// Updating certs
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);