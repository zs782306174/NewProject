import { EventTarget } from "cc";
import ProtoHelp from "./proto/ProtoHelp";
import ProtoMessage from "./proto/ProtoMessage";


export default class WsChannel extends EventTarget {
    private socket!: WebSocket;
    protected rpcid = 0;
    protected callbacks = new Map<number, Function>();
    private currentRpc: Function | null = null;
    constructor() {
        super();
    }
    public connect(url: string='ws://127.0.0.1:8002',callback?:Function) {
        return new Promise((resolve,reject)=>{
            this.socket?.close();
            this.socket = new WebSocket(url);
            this.socket.onopen = () => {
                console.log('socket.onopen');
                this.socket.addEventListener('message', () => {
    
                })
                this.socket.onmessage = this.onRecived.bind(this);
                this.socket.onclose = this.onClose.bind(this);
                this.socket.onerror = (event)=>{
                    reject(event);
                };
                callback&&callback();
                resolve(true);
            }
        })
       
    }
    public onClose() {
        this.rpcid = 0;
        this.callbacks.clear();
        this.currentRpc = null;
    }

    public async onRecived(event: MessageEvent) {
        event.data.arrayBuffer().then((buffer: ArrayBuffer) => {
            let p = ProtoHelp.decode(new Uint8Array(buffer));
            if (p.data.rpcid) {
                let resolve = this.callbacks.get(p.data.rpcid);
                if (resolve) {
                    resolve(p.data);
                    this.callbacks.delete(p.data.rpcid);
                } else {
                    this.currentRpc = p.data.rpcid;
                    this.emit(p.msgid, p.data, this);
                }
            } else {
                this.emit(p.msgid, p.data);
            }

        })
    }
    public async call(data: any, msgid: ProtoMessage): Promise<any> {
        return new Promise((resolve) => {
            this.rpcid++;
            data.rpcid = this.rpcid;
            this.callbacks.set(this.rpcid, resolve);
            this.send(data, msgid);
        })
    }
    public reply(data: any, msgid: ProtoMessage) {
        data.rpcid = this.currentRpc;
        this.send(data, msgid);
    }
    send(data: any, msgid: ProtoMessage) {
        let msg = ProtoHelp.encode(data, msgid);
        console.log(data);

        this.socket.send(msg);

    }

    onError(err: any) {
        //console.error(err);
        throw err;
    }
}