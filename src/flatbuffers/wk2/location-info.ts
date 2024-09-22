// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Metadata } from '../wk2/metadata.js';


export class LocationInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):LocationInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsLocationInfo(bb:flatbuffers.ByteBuffer, obj?:LocationInfo):LocationInfo {
  return (obj || new LocationInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsLocationInfo(bb:flatbuffers.ByteBuffer, obj?:LocationInfo):LocationInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LocationInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

preciseName():string|null
preciseName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
preciseName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

countryCode():string|null
countryCode(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
countryCode(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

timeZone():string|null
timeZone(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
timeZone(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

primaryName():string|null
primaryName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
primaryName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startLocationInfo(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addPreciseName(builder:flatbuffers.Builder, preciseNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, preciseNameOffset, 0);
}

static addCountryCode(builder:flatbuffers.Builder, countryCodeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, countryCodeOffset, 0);
}

static addTimeZone(builder:flatbuffers.Builder, timeZoneOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, timeZoneOffset, 0);
}

static addPrimaryName(builder:flatbuffers.Builder, primaryNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, primaryNameOffset, 0);
}

static endLocationInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createLocationInfo(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, preciseNameOffset:flatbuffers.Offset, countryCodeOffset:flatbuffers.Offset, timeZoneOffset:flatbuffers.Offset, primaryNameOffset:flatbuffers.Offset):flatbuffers.Offset {
  LocationInfo.startLocationInfo(builder);
  LocationInfo.addMetadata(builder, metadataOffset);
  LocationInfo.addPreciseName(builder, preciseNameOffset);
  LocationInfo.addCountryCode(builder, countryCodeOffset);
  LocationInfo.addTimeZone(builder, timeZoneOffset);
  LocationInfo.addPrimaryName(builder, primaryNameOffset);
  return LocationInfo.endLocationInfo(builder);
}
}