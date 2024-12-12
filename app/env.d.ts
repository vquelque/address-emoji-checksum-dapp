/// <reference types="vite/client" />

interface Window {
  ethereum: {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: unknown[] | Record<string, unknown> }) => Promise<any>;
  };
}
