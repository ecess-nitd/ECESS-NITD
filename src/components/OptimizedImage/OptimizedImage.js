import React, { useState, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    width, 
    height, 
    lazy = true,
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [imageRef, setImageRef] = useState();
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(!lazy);

    useEffect(() => {
        let observer;
        
        if (lazy && imageRef && 'IntersectionObserver' in window) {
            observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setInView(true);
                            observer.unobserve(imageRef);
                        }
                    });
                },
                { threshold: 0.1 }
            );
            observer.observe(imageRef);
        } else if (!lazy) {
            setInView(true);
        }

        return () => {
            if (observer && observer.unobserve) {
                observer.disconnect();
            }
        };
    }, [imageRef, lazy]);

    useEffect(() => {
        if (inView && src && src !== placeholder) {
            setImageSrc(src);
        }
    }, [inView, src, placeholder]);

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleError = () => {
        // Fallback to a default error image or keep placeholder
        setImageSrc(placeholder);
        setLoaded(true);
    };

    return (
        <div 
            className={`optimized-image-container ${className}`}
            ref={setImageRef}
            style={{ width, height }}
        >
            <img
                src={imageSrc}
                alt={alt}
                className={`optimized-image ${loaded ? 'loaded' : 'loading'}`}
                onLoad={handleLoad}
                onError={handleError}
                style={{ width, height }}
                loading={lazy ? 'lazy' : 'eager'}
            />
            {!loaded && (
                <div className="image-loading-spinner">
                    <div className="spinner"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
