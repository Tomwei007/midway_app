import { lookupCollection } from "@iconify/json";
import { getIconData } from "@iconify/utils";
import { Provide } from "@midwayjs/core";

@Provide()
export class IconService {
  async getIconJson(name:string){
    // 图标库名
    const iconSet = name.split(':')[0];
    // 图标名
    const iconName = name.split(':')[1];

    const collection = await lookupCollection(iconSet);
    const iconJson = getIconData(collection,iconName)

    const iconData = {};
    iconData[name] = iconJson;
    return iconData;
  }
}