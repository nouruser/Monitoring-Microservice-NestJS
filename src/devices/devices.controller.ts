import { DevicesService } from './devices.service';
import { Devices } from './devices.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('api/v1/devices')

export class DevicesController {

  constructor(private readonly devicesService: DevicesService) {}

  /////// All Devices 
  @Get()
  async getAllDevices(): Promise<Devices[]> {
    return this.devicesService.getAllDevices();
  }
  @Post()
  async postDevices(@Body() postData: Devices): Promise<Devices> {
    return this.devicesService.createDevices(postData);
  }


  /////// Devices By ID 
  @Get(':id')
  async getDevices(@Param('id') id: number): Promise<Devices | null> {
    return this.devicesService.getDevices(id);
  }
  @Put(':id')
  async updateDevices(@Param('id') id: number, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevices(id, postData);
  }
  @Delete(':id')
  async deleteDevices(@Param('id') id: number): Promise<Devices> {
    return this.devicesService.deleteDevices(id);
  }


  /////// Devices by Name
  @Get('byname/:name')
  async getDevicesByName(@Param('name') name: string): Promise<Devices[] | null> {
    return this.devicesService.getDevicesByName(name);
  }
  @Put('byname/:name')
  async updateDevicesByName(@Param('name') name: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByName(name, postData);
  }
  @Delete('byname/:name')
  async deleteDevicesByName(@Param('name') name: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByName(name);
  }


  /////// Devices by connection time
  @Get('byconnectiontime/:connectionTime')
  async getDevicesByConnectionTime(@Param('connectionTime') connectionTime: string): Promise<Devices[]> | null {
    return this.devicesService.getDevicesByConnectionTime(connectionTime);
  }
  @Put('byconnectiontime/:connectionTime')
  async updateDevicesByConnectionTime(@Param('connectionTime') connectionTime: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByConnectionTime(connectionTime, postData);
  }
  @Delete('byconnectiontime/:connectionTime')
  async deleteDevicesByConnectionTime(@Param('connectionTime') connectionTime: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByConnectionTime(connectionTime);
  }


  /////// Devices by disconnection time
  @Get('bydisconnectiontime/:disconnectionTime')
  async getDevicesByDisconnectionTime(@Param('disconnectionTime') disconnectionTime: string): Promise<Devices[]> {
    if (disconnectionTime.toLowerCase() === 'null') {
      return this.devicesService.getDevicesByNullDisconnectionTime();
    } else {
      return this.devicesService.getDevicesByDisconnectionTime(disconnectionTime);
    }
  }
  @Put('bydisconnectiontime/:disconnectionTime')
  async updateDevicesByDisconnectionTime(@Param('disconnectionTime') disconnectionTime: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByDisconnectionTime(disconnectionTime, postData);
  }
  @Delete('bydisconnectiontime/:disconnectionTime')
  async deleteDevicesByDisconnectionTime(@Param('disconnectionTime') disconnectionTime: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByDisconnectionTime(disconnectionTime);
  }


  /////// Devices by Type
  @Get('bytype/:type')
  async getDevicesByType(@Param('type') type: string): Promise<Devices[]> {
    if (type.toLowerCase() === 'null') {
      return this.devicesService.getDevicesByNullType();
    } else {
      return this.devicesService.getDevicesByType(type);
    }
  }
  @Put('bytype/:type')
  async updateDevicesByType(@Param('type') type: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByType(type, postData);
  }
  @Delete('bytype/:type')
  async deleteDevicesByType(@Param('type') type: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByType(type);
  }


  /////// Devices by Manufacturer
  @Get('bymanufacturer/:manufacturer')
  async getDevicesByManufacturer(@Param('manufacturer') manufacturer: string): Promise<Devices[]> {
    if (manufacturer.toLowerCase() === 'null') {
      return this.devicesService.getDevicesByNullManufacturer();
    } else {
      return this.devicesService.getDevicesByManufacturer(manufacturer);
    }
  }
  @Put('bymanufacturer/:manufacturer')
  async updateDevicesByManufacturer(@Param(' manufacturer')  manufacturer: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByManufacturer( manufacturer, postData);
  }
  @Delete('bymanufacturer/:manufacturer')
  async deleteDevicesByManufacturer(@Param(' manufacturer')  manufacturer: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByManufacturer( manufacturer);
  }


  /////// Devices by  FirmwareVersion
  @Get('byfirmwareVersion/:firmwareVersion')
  async getDevicesByFirmwareVersion(@Param('firmwareVersion') firmwareVersion: string): Promise<Devices[]> {
    if (firmwareVersion.toLowerCase() === 'null') {
      return this.devicesService.getDevicesByNullFirmwareVersion();
    } else {
      return this.devicesService.getDevicesByFirmwareVersion(firmwareVersion);
    }
  }
  @Put('byfirmwareVersion/:firmwareVersion')
  async updateDevicesByFirmwareVersion(@Param('firmwareVersion') firmwareVersion: string, @Body() postData: Devices): Promise<Devices | null> {
    return this.devicesService.updateDevicesByFirmwareVersion( firmwareVersion, postData);
  }
  @Delete('byfirmwareVersion/:firmwareVersion')
  async deleteDevicesByFirmwareVersion(@Param(' firmwareVersion')  firmwareVersion: string): Promise<Devices> {
    return this.devicesService.deleteDevicesByFirmwareVersion( firmwareVersion);
  }
}
