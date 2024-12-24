import { Body, Controller, Inject, Post } from "@midwayjs/core";
import { IconService } from "../service/icon.service";

@Controller('/api')
export class IconController {
  @Inject()
  iconService: IconService;

  @Post('/get-icon')
  async getIcon(@Body('name') name:string){
    return await this.iconService.getIconJson(name);
  }
}