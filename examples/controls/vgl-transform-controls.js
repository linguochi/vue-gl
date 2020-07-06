import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { string } from '../../src/types';

export default {
  inject: ['vglNamespace'],
  name: 'VglTransformControls',
  props: {
    camera: { type: string, default: 'c' },
  },
  computed: {
    cmr() {
      return this.vglNamespace.cameras.hash[this.camera];
    },
  },
  watch: {
    cmr: {
      handler(cmr) {
        this.$nextTick(() => {
          const controls = new TransformControls(cmr, this.$parent.$el);
          controls.addEventListener('change', () => {
            this.vglNamespace.update();
          });
        });
      },
      immediate: true,
    },
  },
  render(h) {
    return h('div');
  },
};
