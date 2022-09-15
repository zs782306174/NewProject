import { Component } from "../../../Script/shun-framework/ecs/Component";
import { Entity } from "../../../Script/shun-framework/ecs/Entity";


export default class FindAimComponent extends Component{
    aimUnit:Entity|null = null;
}