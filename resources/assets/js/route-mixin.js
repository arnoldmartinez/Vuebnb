import axios from 'axios';

function getData(to) {
    return new Promise((resolve) => {
        let serveData = JSON.parse(window.vuebnb_server_data);

        if (!serveData.path || to.path !== serveData.path) {
            axios.get(`/api${to.path}`).then(({ data }) => {
                resolve(data);
            });
        } else {
            resolve(serveData);
        }
    });
}

export default {
    beforeRouteEnter: (to, from, next) => {
        getData(to).then((data) => {
            next(component => component.assignData(data));
        });
    }
};
