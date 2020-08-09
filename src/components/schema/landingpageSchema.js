import React from 'react'
import {Helmet} from "react-helmet"

export default function LandingpageSchema() {
    return (
        <div>
            <Helmet>
            {<script type="application/ld+json">
            {`
            {
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "SevenhillsTirupati | Frontpage of Tirupati & Tirumala",
            "alternateName": "Sevenhills-Tirupati",
            "url": "https://www.sevenhillstirupati.com/",
            "logo": "../../images/logo.png",
            "sameAs": [
                "https://www.youtube.com/channel/UCRFH9IWO1_aep984wT9oN-g",
                "https://www.instagram.com/sevenhills_tirupati/",
                "https://www.facebook.com/SevenhillsTirupati",
                "https://www.sevenhillstirupati.com/"
            ]
            } 
            `}
            </script>}

            </Helmet>
        </div>
    )
}
