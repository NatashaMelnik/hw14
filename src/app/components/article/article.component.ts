import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { PageTextService } from '../../services/page-text.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @ViewChild('sliderMiniat', { read: ElementRef }) sliderMiniat!: ElementRef;
  @ViewChild('sliderText', { read: ElementRef }) sliderText!: ElementRef;
  textService: any;
  imageService: any;
  textSlider: object = {
    sectionIndex: 0,
    maxElement: 3,
    rotateGrad: 25,
  };
  conditionAuthor = false;
  conditionTitle = false;
  conditionStruct = false;
  conditionText = true;
  conditionMiniat = true;
  miniatSlider: object = {
    sectionIndex: 0,
    maxElement: 4,
    rotateGrad: 20,
  };

  constructor(
    private textServiceT: PageTextService,
    private imageServiseT: PageTextService
  ) {
    this.textService = textServiceT.getListTexts();
    this.imageService = imageServiseT.getListImages();
  }

  ngOnInit(): void {}

  moveLeftText(): void {
    this.moveLeft(this.textSlider, this.sliderText);
  }

  moveRightText(): void {
    this.moveRight(this.textSlider, this.sliderText);
  }

  moveLeftMiniat(): void {
    this.moveLeft(this.miniatSlider, this.sliderMiniat);
  }
  moveRightMiniat(): void {
    this.moveRight(this.miniatSlider, this.sliderMiniat);
  }

  moveRight(slider: any, sliderCon: any): void {
    slider.sectionIndex =
      slider.sectionIndex < slider.maxElement - 1
        ? slider.sectionIndex + 1
        : slider.maxElement;
    sliderCon.nativeElement.style.transform =
      'translate(' + slider.sectionIndex * -slider.rotateGrad + '%)';
  }

  moveLeft(slider: any, sliderCon: any): void {
    slider.sectionIndex = slider.sectionIndex > 0 ? slider.sectionIndex - 1 : 0;
    sliderCon.nativeElement.style.transform =
      'translate(' + slider.sectionIndex * -slider.rotateGrad + '%)';
  }

  toggleAuthor(): void {
    this.conditionAuthor = !this.conditionAuthor;
  }

  toggleTitle(): void {
    this.conditionTitle = !this.conditionTitle;
  }

  toggleStruct(): void {
    this.conditionStruct = !this.conditionStruct;
  }

  toggleText(): void {
    this.conditionText = !this.conditionText;
  }

  toggleMiniat(): void {
    this.conditionMiniat = !this.conditionMiniat;
  }
}
