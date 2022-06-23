import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  messageHeader='Dünya geneli ve ülkelere göre Covid19 Verilerini göstermektir';
  messageSpan='Proje Kodları ve Bana Aşağıdaki Linklerden Ulaşabilirsiniz';
  githubMessage='Projenin Kaynak Kodları Ve Diğer Çalışmalarımı İçerir'

  constructor() { }

  ngOnInit(): void {
  }

}
