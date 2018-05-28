export default {
  props: ["size", "bg"],
  computed: {
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    }
  },
  template: `
        <svg
            :width="size"
            :height="size"
            :style="{background: bg}"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
};
