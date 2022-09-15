

import { Component, _decorator, } from "cc";
import { App } from "../App";
import { IUi } from "./Interface";
const { ccclass, property } = _decorator;
@ccclass
export default class UIBase extends Component implements IUi {
    onOpen?(data?: any): void;

    onClose?(): void;

    public close() {
       App.uiManager.close(this);
    }
}