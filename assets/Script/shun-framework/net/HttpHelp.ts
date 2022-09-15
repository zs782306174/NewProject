export default class HttpHelp {

    xhr: XMLHttpRequest = new XMLHttpRequest();

    constructor() {

    }
    async get(url: string, responseType: XMLHttpRequestResponseType = "json") {
        return new Promise((resolve,reject) => {
            this.xhr.open('GET', url, true);
            this.xhr.responseType = responseType;
            this.xhr.onreadystatechange = function () {
                if (this.status == 200) {
                    var blob:Blob = this.response;
                    switch (responseType) {
                        case "json":
                            resolve(this.response)
                            break;
                        case "arraybuffer":
                            resolve(this.response)
                            break;
                        case "blob":
                             blob.arrayBuffer
                            resolve(this.response)
                            break
                    }
                }
            }
            this.xhr.send();
        })

    }
}