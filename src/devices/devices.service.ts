
import { Injectable } from '@nestjs/common';
import {PrismaService} from 'src/prisma.service'
import { Devices } from './devices.model'
import { Prisma } from '@prisma/client';


@Injectable()
export class DevicesService  {
  devicesRepository: any;
  constructor(private prisma: PrismaService) {}
  

  // Create Devices
  async createDevices(data: Devices) : Promise<Devices>{
    return this.prisma.devices.create({
        data, 
    })
  }

  // Get All Devices
  async getAllDevices(): Promise<Devices[]>{
    return this.prisma.devices.findMany()
  }

  // Get Devices by ID
  async getDevices(id: number ) : Promise <Devices | null>{
    return this.prisma.devices.findUnique({where : {id:Number(id)}})
  }

  // Update Devices by ID
  async updateDevices(id:number, data: Devices) : Promise <Devices> {
    return this.prisma.devices.update({
        where : {id:Number(id)},
        data: { name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion }
    })
  }

  // Delete Devices by ID
  async deleteDevices(id:number): Promise <Devices>{
    return this.prisma.devices.delete({
        where : {id:Number(id)}
    })
  } 

  // Get Devices by Name
  async getDevicesByName(name: string): Promise<Devices[] | null> {
    const devices = await this.prisma.devices.findMany({
      where: { name: name },
    });
  
    return devices;
  }

  // Update Device by Name
  async updateDevicesByName(name: string, data: Prisma.DevicesUpdateInput): Promise<Devices | null> {
    return this.devicesRepository.update({
      where: { name }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion });
  }
  
  // Delete Device by Name
  async deleteDevicesByName(name: string): Promise<Devices | null> {
  return this.devicesRepository.delete({ where: { name } });
  }

  // Get Devices by Connection Time
  async getDevicesByConnectionTime(connectionTime: string): Promise<Devices[]> | null {
    const devices = await this.prisma.devices.findMany({
      where: { connectionTime: connectionTime },
    });
  
    return devices;
  }

  // Update Devices by Connection Time
  async updateDevicesByConnectionTime( connectionTime: string, data: Prisma.DevicesUpdateInput): Promise<Devices | null> {
    return this.devicesRepository.update({
      where: { connectionTime }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion});
  }
  
  // Delete Devices by Connection Time
  async deleteDevicesByConnectionTime(connectionTime: string): Promise<Devices | null> {
    return this.devicesRepository.delete({ where: { connectionTime } });
  }
  
  // Get Devices by Disconnection Time
  async getDevicesByDisconnectionTime(disconnectionTime: string): Promise<Devices[]> | null {
    const devices = await this.prisma.devices.findMany({
      where: { disconnectionTime: disconnectionTime },
    });
  
    return devices;
  }

  async getDevicesByNullDisconnectionTime(): Promise<Devices[]> {
    return this.prisma.devices.findMany({
      where: {
        disconnectionTime: null,
      },
    });
  }

  // Update Devices by Disconnection Time
  async updateDevicesByDisconnectionTime(disconnectionTime: string, data: Devices): Promise<Devices | null> {
   return this.devicesRepository.update({ where: { disconnectionTime }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion});
  }
  
  // Delete Devices by Disconnection Time
  async deleteDevicesByDisconnectionTime(disconnectionTime: string): Promise<Devices | null> {
    return this.devicesRepository.delete({ where: { disconnectionTime } });
  }

  // Get Devices by Type
  async getDevicesByType(type: string): Promise<Devices[]> | null {
    const devices = await this.prisma.devices.findMany({
      where: { type: type },
    });
  
    return devices;
  }

  async getDevicesByNullType(): Promise<Devices[]> {
    return this.prisma.devices.findMany({
      where: {
        type: null,
      },
    });
  }

  // Update Devices by Type
  async updateDevicesByType(type: string, data: Devices): Promise<Devices | null> {
   return this.devicesRepository.update({ where: { type }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion});
  }
  
  // Delete Devices by Type
  async deleteDevicesByType(type: string): Promise<Devices | null> {
    return this.devicesRepository.delete({ where: { type } });
  }

  // Get Devices by Manufacturer
  async getDevicesByManufacturer(manufacturer: string): Promise<Devices[]> | null {
    const devices = await this.prisma.devices.findMany({
      where: { manufacturer: manufacturer },
    });
  
    return devices;
  }

  async getDevicesByNullManufacturer(): Promise<Devices[]> {
    return this.prisma.devices.findMany({
      where: {
        manufacturer: null,
      },
    });
  }

  // Update Devices by Manufacturer
  async updateDevicesByManufacturer(manufacturer: string, data: Devices): Promise<Devices | null> {
   return this.devicesRepository.update({ where: { manufacturer }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion});
  }
  
  // Delete Devices by Manufacturer
  async deleteDevicesByManufacturer(manufacturer: string): Promise<Devices | null> {
    return this.devicesRepository.delete({ where: { manufacturer } });
  }
  
  // Get Devices by  FirmwareVersion
  async getDevicesByFirmwareVersion(firmwareVersion: string): Promise<Devices[]> | null {
    const devices = await this.prisma.devices.findMany({
      where: { firmwareVersion: firmwareVersion },
    });
  
    return devices;
  }
  async getDevicesByNullFirmwareVersion(): Promise<Devices[]> {
    return this.prisma.devices.findMany({
      where: {
        firmwareVersion : null,
      },
    });
  }

  // Update Devices by Manufacturer
  async updateDevicesByFirmwareVersion(firmwareVersion: string, data: Devices): Promise<Devices | null> {
   return this.devicesRepository.update({ where: { firmwareVersion }, name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime, type: data.type, manufacturer: data.manufacturer, firmwareVersion: data.firmwareVersion});
  }
  
  // Delete Devices by Manufacturer
  async deleteDevicesByFirmwareVersion(firmwareVersion: string): Promise<Devices | null> {
    return this.devicesRepository.delete({ where: { firmwareVersion } });
  }

}
