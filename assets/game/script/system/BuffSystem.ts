
import { Component } from "../../../Script/shun-framework/ecs/Component";
import { System } from "../../../Script/shun-framework/ecs/System";
import { BuffComponent } from "../component/BuffComponent";

export class BuffSystem extends System{

    protected readonly _componentTypes: Array<typeof Component> = [BuffComponent];
    
    public execute(buffComponent: BuffComponent, dt:number) {
        buffComponent.buffs.forEach((buff)=>{
            buff?.update(dt,this.scene);
        });
    }
}