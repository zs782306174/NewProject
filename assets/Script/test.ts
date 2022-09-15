
import { _decorator, Component, Node, Sprite, assetManager, Label } from 'cc';
import ProtoHelp, { msg } from './shun-framework/net/proto/ProtoHelp';
import ProtoMessage from './shun-framework/net/proto/ProtoMessage';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Test
 * DateTime = Tue Aug 16 2022 14:54:20 GMT+0800 (中国标准时间)
 * Author = Hi_Creator
 * FileBasename = test.ts
 * FileBasenameNoExtension = test
 * URL = db://assets/Script/test.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Test')
export class Test extends Component {

    @property(Label)
    label!: Label;
    start() {
        var data = ProtoHelp.encode(
            {
                rpcid: 0,
                email: "email",
                passWord: "passWord"
            },
            ProtoMessage.LoginRequest);

        var recieve = ProtoHelp.decode(data)
        this.label.string = recieve.msgid;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
