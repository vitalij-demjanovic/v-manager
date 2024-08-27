import Logo from '@/components/ui/Logo';
import NavLinks from '@/components/NavLinks';

export default function SideBar() {
    return (
        <div className='h-screen'>
            <div className='mb-14'>
                <Logo />
            </div>
            <div>
                <NavLinks />
            </div>
        </div>
    );
}
