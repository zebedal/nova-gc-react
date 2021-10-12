import QlikWarning from "../components/UI/QlikWarning";
import { config } from "./config";

window.require.config({
    baseUrl: 'https://' + config.host + config.prefix + "resources",
    paths: {
        qlik: 'https://' + config.host + config.prefix + "resources/js/qlik.js"
    },

});

export default new Promise(resolve => {
    window.require(["js/qlik"], function (qlik) {

        qlik.setOnError(function (error) {
            console.log(error.message);

        });

        window.qlik = qlik;
        resolve();
    });
})
