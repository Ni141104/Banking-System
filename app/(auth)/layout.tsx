import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex font-inter justify-between w-full min-h-screen">
          {children} 
          <div className="auth-asset">
            <div>
              <Image src="/icons/auth-image.svg" alt="auth-image" width={500} height={500}/>
            </div>
          </div>
      </main>
    );
  }
  