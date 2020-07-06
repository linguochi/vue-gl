import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { string } from '../../src/types';

export default {
  inject: ['vglNamespace'],
  name: 'VglOrbitControls',
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
          const controls = new OrbitControls(cmr, this.$parent.$el);
          controls.addEventListener('change', () => {
            this.$parent.requestRender();
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
