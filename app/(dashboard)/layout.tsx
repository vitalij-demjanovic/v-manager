import SideBar from '@/components/SideBar';

export default function DashboardLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='flex'>
            <div className='border-r border-borderColor p-6'>
                <SideBar />
            </div>
            <div className='p-12'>{children}</div>
        </div>
    );
}
