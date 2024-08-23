import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src='/logo-v-manager.svg'
                width={160}
                height={80}
                alt='logo'
            />
        </div>
    );
}
