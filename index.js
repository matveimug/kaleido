import Scene from "./components/Scene.js";
import Spinner from './components/Spinner.js'
import Box from "./components/Box.js";
import Spoke from "./components/Spoke.js";
import Spiral from "./components/Spiral.js";
import Shutter from "./components/Shutter.js";
import Flower from "./components/Flower.js";

new Vue({
    el: "#app",
    components: {Scene, Spinner, Box, Spoke, Spiral, Shutter, Flower},
    data: () => ({
        size: 400,
        boxsize: 40,
        count: 1,
        divide: 104,
        boxes: 1,
        multi: 10,
        fill: 'rgba(1,1,1,1)',
        color: '#FFEFD5'
    }),
    methods: {
        rand: function (x) {
            return Math.floor(Math.random() * x)
        },
        colorz: function () {
            const nums = Array.from({length: 3}, () => this.rand(255)).join();
            return 'rgba(' + nums + ',1)';
        }
    },
    computed: {},
    template: `
        <div class="flex">
        <div style="min-width: 400px; margin-right: 1rem">
            <h5>Color: {{color}}</h5>
            <input type="color" v-model="color">
            <h5>Size: {{size}} px</h5>
            <input type="range" v-model="size" max="1000" />
            <h5>Size: {{boxsize}} px</h5>
            <input type="range" v-model="boxsize" max="1000" />
            <h5>Boxes: {{boxes}}</h5>
            <input type="range" v-model="boxes" max="1000" /> 
            <h5>Random multiplier: {{multi}}</h5>
            <input type="range" v-model="multi" max="50" /> 
            </div><div>
            <Scene :size="size" :bg="color">
            <g>
              <Box v-for="(item, index) in Array.from({length: boxes}).slice(0,boxes)" 
              :size="boxsize" :fill="colorz()"  :x="rand(multi)*boxsize" :y="rand(multi)*boxsize"/>
            </g>
            </Scene>
        </div>
        </div>
    `
});