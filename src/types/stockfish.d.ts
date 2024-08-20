declare module 'stockfish' {
  export default function Stockfish(): {
    postMessage: (message: string) => void;
    onmessage: (event: MessageEvent) => void;
  };
}
