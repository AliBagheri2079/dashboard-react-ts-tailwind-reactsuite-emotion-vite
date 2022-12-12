import { makeObservable, observable, action, computed } from 'mobx';
import { CarouselType } from '@/@types/types';
import { getSlider } from '@/services/getSlider';

class SliderStore {
  slider: CarouselType[] = [];

  constructor() {
    /*
    * this way automate generate observable
    makeAutoObservable(this);
    */
    makeObservable(this, {
      slider: observable,
      loadSlider: action,
      sliderItem: computed,
    });
  }

  loadSlider(): void {
    getSlider().then((slide) => (this.slider = slide));
  }

  get sliderItem(): CarouselType[] {
    return this.slider;
  }
}

const sliderStore = new SliderStore();
export default sliderStore;
