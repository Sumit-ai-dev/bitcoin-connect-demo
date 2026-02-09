import Image from 'next/image';
import { BitcoinConnectClientWrapper } from './components/BitcoinConnectClientWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Bitcoin Connect Demo</code>
        </p>
      </div>

      <div className="relative flex place-items-center z-[-1] mb-12">
        <h1 className="text-4xl font-bold text-center">
          Connect Your Lightning Wallet
        </h1>
      </div>

      <div className="my-8 scale-150">
        <BitcoinConnectClientWrapper />
      </div>
    </main>
  );
}
