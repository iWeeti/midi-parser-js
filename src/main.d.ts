export type CustomInterpreter = (
  e_type: number,
  arrayBuffer: Uint8Array,
  metaEventLength: number
) => number;

// generate types from src/main.js

export default class MidiParser {
  /**
   * When enabled will log in console unimplemented events
   * warnings and internal handled errors.
   */
  private debug: boolean;

  static parse(
    data: Uint8Array | string | HTMLElement,
    callback?: (data: unknown) => unknown
  ): MidiData;

  /**
   * addListener() should be called in order attach a listener to the INPUT HTML element
   * that will provide the binary data automating the conversion, and returning
   * the structured data to the provided callback function.
   */
  addListener(
    _fileElement: HTMLElement,
    callback: (data: unknown) => unknown
  ): void;

  /**
   * Convert base64 string into uint6 array buffer, before performing the
   * parsing subroutine.
   */
  Base64(b64String: string): Uint8Array;

  /**
   * function reads the binary data, interpreting and spliting each chuck
   * and parsing it to a structured Object. When job is finised returns the object
   * or 'false' if any error was generated.
   * @param FileAsUint8Array
   */
  Uint8(FileAsUint8Array: Uint8Array): MidiData;

  customInterpreter: null | CustomInterpreter;
}

export interface MidiData {
  formatType: 0 | 1 | 2;
  timeDivision: number;
  tracks: number;
  track: MidiTrack[];
}

export interface MidiHeader {
  data: string;
  deltaTime: number;
  metaType: number;
  type: number;
}

export interface MidiEvent {}

export type MidiTrack = {
  event: MidiEvent[];
};
