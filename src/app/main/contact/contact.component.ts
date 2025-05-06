import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  sendToTelegram() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    const text = `
🔔 <b>New message from website</b>
👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📌 <b>Subject:</b> ${subject}
💬 <b>Message:</b> ${message}
    `;

    const token = '8161474830:AAHhQ9-CaH2rFq6uR4RYBVvzqQEhxy9GgI4';
    const chatId = '324317669';

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    })
    .then(response => {
      if (response.ok) {
        alert('✅ Повідомлення відправлено!');
      } else {
        alert('⚠️ Помилка при відправці.');
      }
    })
    .catch(() => alert('⚠️ Не вдалося підключитися до Telegram.'));
  }

}

