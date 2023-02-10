new Vue({
    el: "#index-app",
    data() {
        return {
            items: [],
        };
    },
    methods: {
        init() {
            fetch("db/product.json")
                .then((rep) => {
                    return rep.json();
                })
                .then((result) => {
                    this.items = result;
                });
        },
    },
    mounted() {
        this.init();
    },
});
