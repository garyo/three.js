import {
  AnimationClip,
  Camera,
  LoadingManager,
  Scene
} from '../../../src/Three';

export interface GLTF {
  animations: AnimationClip[];
  scene: Scene;
  scenes: Scene[];
  cameras: Camera[];
  asset: object;
}

export class GLTFLoader {
  constructor(manager?: LoadingManager);
  manager: LoadingManager;
  path: string;

  load(url: string, onLoad: (gltf: GLTF) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void) : void;
  setPath(path: string) : GLTFLoader;
  setResourcePath(path: string) : GLTFLoader;
  setCrossOrigin(value: string): void;
  setDRACOLoader(dracoLoader: object): void;
  parse(data: ArrayBuffer, path: string, onLoad: (gltf: GLTF) => void, onError?: (event: ErrorEvent) => void) : void;
}
