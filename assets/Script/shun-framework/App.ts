import { EventTarget } from "cc";
import WsChannel from "./net/WsChanel";
import ServiceCenter from "./ServiceCenter";
import UIManager from "./UIManager";

export class App {

    public static uiManager: UIManager = new UIManager();

    public static serviceCenter: ServiceCenter = new ServiceCenter();

    public static eventCenter: EventTarget = new EventTarget();

    public static WebSochetChanel:WsChannel = new WsChannel();
}

