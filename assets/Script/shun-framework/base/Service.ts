
import { Idispose } from "./Interface";

export default abstract class Service implements Idispose {

    public init(data?:any) {
        if (typeof data == 'object') {
            for (const key in data) {
                //@ts-ignore
                this[key] = data[key];
            }
        }
    }

    getAllData() {
        return JSON.stringify(this);
    }
    
    abstract dispose(): void;
}