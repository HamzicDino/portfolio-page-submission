# AngularPp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




contactForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // Formular-Initialisierung
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // Name ist erforderlich
      email: ['', [Validators.required, Validators.email]], // E-Mail ist erforderlich und muss ein gültiges E-Mail-Format haben
      message: ['', Validators.required] // Nachricht ist erforderlich
    });
  }

  onSubmit() {
    // Prüfen, ob das Formular gültig ist
    if (this.contactForm.valid) {
      // Hier kannst du die Logik für die Übermittlung des Formulars implementieren.
      // Zum Beispiel: Senden der Formulardaten an einen Server
      const formData = this.contactForm.value;
      
      this.http.post('http://localhost:1337/contacts', formData)
        .subscribe({
          next: (response) => {
            console.log('Formular gesendet!', response);
            // Hier kannst du zusätzliche Aktionen durchführen, z.B. das Formular zurücksetzen oder eine Bestätigungsnachricht anzeigen.
          },
          error: (error) => {
            console.error('Es gab einen Fehler beim Senden des Formulars', error);
          }
        });
    } else {
      console.error('Formular ist nicht gültig!'); -->