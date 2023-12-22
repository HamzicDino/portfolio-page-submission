import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
      console.error('Formular ist nicht gültig!');
    }
  }
}

