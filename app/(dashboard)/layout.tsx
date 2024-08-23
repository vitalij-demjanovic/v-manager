import SideBar from '@/app/components/SideBar';

export default function DashboardLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='flex'>
            <div className='border-borderColor border-r p-6'>
                <SideBar />
            </div>
            <div className='p-12'>{children}</div>
        </div>
    );
}
