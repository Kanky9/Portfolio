import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSending = false;
  sent = false;
  error = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) return;

    this.isSending = true;
    this.sent = false;
    this.error = false;

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        'service_5iwnq7w',     // reemplazar con tu Service ID
        'template_83pn03g',    // reemplazar con tu Template ID
        {
          from_name: this.contactForm.value.fullName,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.mobile,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message
        },
        'Yg2M6QxAkdCLnYgs7'      // reemplazar con tu Public Key
      );
      console.log('SUCCESS!', result.text);
      this.sent = true;
      this.contactForm.reset();
    } catch (error) {
      console.error('FAILED...', error);
      this.error = true;
    } finally {
      this.isSending = false;
    }
  }
}
