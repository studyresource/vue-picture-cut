<template>
  <canvas class="vue-picture-cut_canvas"/>
</template>

<script lang="ts">
import {Component, Vue, Inject, Prop, PropSync, Watch} from 'vue-property-decorator';
import PhotoRoot from "./PhotoRoot";
import PhotoMain from "./PhotoMain";

@Component
export default class VuePictureCutCanvas extends Vue {
  @Inject({from: 'vuePictureCut', default: 'photoRoot'})
  photoRoot!: PhotoRoot;
  // 旋转
  @Prop({ type: Number, required: false}) private angle: number | undefined;

  @PropSync('loading', { type: Boolean, default: false}) private _loading!: boolean;

  photoMain: PhotoMain | null = null;

  @Watch('angle')
  watchAngle (to: number | undefined): void {
    if (this.photoMain && to !== undefined) {
      this.photoMain.setAngle(to, true);
    }
  }

  /*******生命周期********/
  protected mounted (): void {
    setTimeout(() => {
      this.photoMain = new PhotoMain(
        this.$el as HTMLCanvasElement,
        this.photoRoot
      );
      this.photoMain.onLoading(loading => {
        this._loading = loading
      })
    }, 0);
  }
}
</script>