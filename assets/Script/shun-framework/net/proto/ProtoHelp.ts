
import protobufjs from 'protobufjs';
import pb from './msg.js'
import ProtoMessage from './ProtoMessage.js';


export const msg = pb.msg;
export default class ProtoHelp {
    public static encode(m: any, msgid: ProtoMessage) {
        var r = protobufjs.Writer.create();
        r.string(msgid);
        //@ts-ignore
        return msg[msgid].encode(m, r).finish();
    }
    public static decode(m: any) {
        var r = protobufjs.Reader.create(m);
        let key = r.string();

        return {
            msgid: key,
            //@ts-ignore
            data: msg[key].decode(r)
        };
    }
}