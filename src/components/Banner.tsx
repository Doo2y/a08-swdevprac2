'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Banner() {
    const router = useRouter();

    const images = [
        '/img/cover.jpg',
        '/img/cover2.jpg',
        '/img/cover3.jpg',
        '/img/cover4.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles.banner} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
            <Image src={images[currentIndex]}
                alt='cover'
                fill={true}
                priority
                objectFit='cover' />

            <div className={styles.bannerText}>
                <h1>Where Every Event Finds Its Venue</h1>
                <h3>Finding the perfect venue has never been easier. Whether it’s a wedding, corporate event, or private party, we connect people to the perfect place.</h3>
            </div>
            
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e) => {
                e.stopPropagation();
                router.push('/venue');
            }}>
                Select Venue
            </button>
        </div>
    );
}
