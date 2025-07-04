"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PhotoCard = ({ photo }) => {
    const [imgSrc, setImgSrc] = useState(photo.url);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setImgSrc("/placeholder-photo.svg");
            setHasError(true);
        }
    };

    return (
        <Link href={`photos/${photo.id}`} className="group">
            <Image
                src={imgSrc}
                alt={photo.title}
                width={700}
                height={700}
                onError={handleError}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            <div className="title-container">
                <h4 className="title">{photo.title}</h4>
            </div>
        </Link>
    );
};

export default PhotoCard;
