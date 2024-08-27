import Link from 'next/link';
import {
    HomeIcon,
    ClipboardDocumentCheckIcon,
    DocumentChartBarIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

export default function NavLinks() {
    return (
        <nav>
            <ul>
                <li className='mb-5'>
                    <Link
                        className='text-primary flex items-center text-base duration-300 ease-in-out hover:text-white'
                        href='/dashboard'
                    >
                        <HomeIcon className='mr-4 h-[20px] w-[20px]' />
                        Home
                    </Link>
                </li>
                <li className='mb-5'>
                    <Link
                        className='text-primary flex items-center text-base duration-300 ease-in-out hover:text-white'
                        href='/my-tasks'
                    >
                        <ClipboardDocumentCheckIcon className='mr-4 h-[20px] w-[20px]' />
                        My Tasks
                    </Link>
                </li>
                <li className='mb-5'>
                    <Link
                        className='text-primary flex items-center text-base duration-300 ease-in-out hover:text-white'
                        href='/goals'
                    >
                        <DocumentChartBarIcon className='mr-4 h-[20px] w-[20px]' />
                        Goals
                    </Link>
                </li>
                <li>
                    <Link
                        className='text-primary flex items-center text-base duration-100 ease-in-out hover:text-white'
                        href='/members'
                    >
                        <UserGroupIcon className='mr-4 h-[20px] w-[20px]' />
                        Members
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
