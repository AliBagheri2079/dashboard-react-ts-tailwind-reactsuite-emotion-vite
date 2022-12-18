import { makeObservable, observable, action, computed } from 'mobx';
import { SliderType } from '@/@types/types';
import { getSlider } from '@/services/getSlider';

class SliderStore {
  slider: SliderType[] = [];

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

  get sliderItem(): SliderType[] {
    return this.slider;
  }
}

const sliderStore = new SliderStore();
export default sliderStore;
