import Glide from '@glidejs/glide';
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { Border } from '../../Dialog/Border';

import members from './Members';

import "@glidejs/glide/src/assets/sass/glide.core.scss";

export function TeamCarousel() {
    const slider = new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        breakpoints: {
            3200: {
                perView: 3
            },
            1100: {
                perView: 2,
            },
            700: {
                perView: 1
            }
        }
    });

    useEffect(() => {
        return () => slider.mount()
    })

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <motion.div whileTap={{ cursor: "grabbing"}} className="glide__slides">
                    {
                        members.map(member => (
                            <div className='glide__slide'>
                                <div className='infos'>
                                    <img className='member' src={member.image}/>
                                    <h1>{member.name.replace('_',' ')}</h1>
                                    <h2>{member.funcao}</h2>
                                    <br/>
                                    <Border color={'#fff'}/>

                                    {/* <div className='sociais'>
                                        { 
                                            member.sociais.map(social => (
                                                <a href={social.link} target="_blank"><img className='ico--social' src={social.svg}/></a>
                                            ))
                                        }
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}