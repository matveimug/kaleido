export default {
  props: ["size"],
  computed: {
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    }
  },
  template: `
        <svg
            :width="size"
            :height="size"
            style="background: papayawhip"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
};
