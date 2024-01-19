const { createApp } = Vue;

const app = createApp({
    name: 'MiaApp',
    data() {
        return {
            message: 'Ciao Mondo',
            img: 'https://lwfiles.mycourse.app/6368e5089f20781a7e4f1805-public/2c162927114072f9ebbf04043a593fb9.png',
        }
    }
});

app.mount('#root');