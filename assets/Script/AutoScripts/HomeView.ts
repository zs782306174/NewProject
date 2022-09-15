

import { _decorator, Button, } from "cc";
import UIBase from "../shun-framework/base/UIBase";
const { ccclass, property } = _decorator;
@ccclass
export default class HomeView extends UIBase {


	@property(Button)
	startBtn!: Button;
}