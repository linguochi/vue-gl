import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  inject: ['vglNamespace'],
  name: 'VglOrbitControls',
  props: ['camera'],
  computed: {
    cmr() {
      return this.vglNamespace.cameras.hash.c;
    },
  },
  watch: {
    cmr: {
      handler(cmr) {
        this.nextTick(() => {
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
