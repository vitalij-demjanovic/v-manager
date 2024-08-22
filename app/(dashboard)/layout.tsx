import Image from 'next/image';

export default function DashboardLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Image
                src='/logo-v-manager.svg'
                width={300}
                height={150}
                alt='logo'
            />
            {children}
        </div>
    );
}
