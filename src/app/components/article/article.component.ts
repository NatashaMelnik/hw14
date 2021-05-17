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

  constructor(
    private _textService: PageTextService,
    private _imageServise: PageTextService
  ) {
    this.textService = _textService.getListTexts();
    this.imageService = _imageServise.getListImages();
  }

  ngOnInit(): void {}

  textSlider: object = {
    sectionIndex: 0,
    maxElement: 3,
    rotateGrad: 25,
  };

  miniatSlider: object = {
    sectionIndex: 0,
    maxElement: 4,
    rotateGrad: 20,
  };

  moveLeftText(): void {
    this.moveLeft(this.textSlider, this.sliderText);
  }

  moveRightText(): void {
    this.moveRight(this.textSlider, this.sliderText);
  }

  moveLeftMiniat() {
    this.moveLeft(this.miniatSlider, this.sliderMiniat);
  }
  moveRightMiniat() {
    this.moveRight(this.miniatSlider, this.sliderMiniat);
  }

  moveRight(slider: any, sliderCon: any) {
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

  conditionAuthor: boolean = false;
  conditionTitle: boolean = false;
  conditionStruct: boolean = false;
  conditionText: boolean = true; // set false   // slider
  conditionMiniat: boolean = true; // set false   // slider

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
