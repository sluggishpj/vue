window.onload = function () {
  let Vue = window.Vue;
  let grandsonComp = {
    name: "grandsonComp",
    props: {
      msg: {
        type: String,
        default: "",
      },
    },
    template: `<div class="grandson">
                  grandson: {{ msg }}
              </div>`,
  };

  let childComp = {
    name: "childComp",
    components: {
      "grandson-comp": grandsonComp,
    },
    props: {
      msg: {
        type: String,
        default: "",
      },
    },
    template: `<div class="child">
                  child: {{ msg }}
                  <grandson-comp :msg="'grandson'+msg" />
              </div>`,
  };

  new Vue({
    components: {
      "child-comp": childComp,
    },
    data() {
      return { show: true };
    },
    methods: {
      change() {
        this.show = !this.show;
      },
    },
    el: "#app",
    template: `<div>parent:
          <button  @click="change">click</button>
          <child-comp  :msg="'showTRUE'" v-if="show"/>
        </div>`,
  });
};
